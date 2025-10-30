// pnpm validate:registry
// pnpm validate

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  dependencies: string[]
  registryDependencies: string[]
  files: Array<{ path: string; type: string }>
}

interface Registry {
  $schema?: string
  name: string
  homepage?: string
  items: RegistryItem[]
}

interface ValidationIssue {
  severity: 'critical' | 'warning' | 'info'
  category: string
  component: string
  message: string
  file?: string
  suggestion?: string
}

// Peer dependencies that shouldn't be listed in component dependencies
const PEER_DEPENDENCIES = ['react', 'react-dom', 'next']

// Known internal aliases from components.json
const INTERNAL_ALIASES = ['@/components', '@/lib', '@/utils', '@/ui', '@/hooks', '@/registry']

class RegistryValidator {
  private registry: Registry
  private packageJson: any
  private issues: ValidationIssue[] = []
  private componentNames: Set<string> = new Set()

  constructor() {
    this.registry = this.loadRegistry()
    this.packageJson = this.loadPackageJson()
    this.componentNames = new Set(this.registry.items.map((item) => item.name))
  }

  private loadRegistry(): Registry {
    const registryPath = path.join(process.cwd(), 'registry.json')
    try {
      return JSON.parse(fs.readFileSync(registryPath, 'utf-8'))
    } catch (error) {
      console.error('❌ Failed to load registry.json:', error)
      process.exit(1)
    }
  }

  private loadPackageJson(): any {
    const packagePath = path.join(process.cwd(), 'package.json')
    try {
      return JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
    } catch (error) {
      console.error('❌ Failed to load package.json:', error)
      process.exit(1)
    }
  }

  private addIssue(issue: ValidationIssue): void {
    this.issues.push(issue)
  }

  // Extract imports from a TypeScript/TSX file
  private extractImports(filePath: string): string[] {
    const content = fs.readFileSync(filePath, 'utf-8')
    const imports: string[] = []

    // Match import statements
    const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s+from\s+)?['"]([^'"]+)['"]/g
    let match

    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1]

      // Skip relative imports and @/ imports (internal)
      if (
        importPath.startsWith('.') ||
        INTERNAL_ALIASES.some((alias) => importPath.startsWith(alias))
      ) {
        continue
      }

      // Extract package name (handle scoped packages)
      let packageName = importPath
      if (importPath.startsWith('@')) {
        const parts = importPath.split('/')
        packageName = `${parts[0]}/${parts[1]}`
      } else {
        packageName = importPath.split('/')[0]
      }

      // Skip peer dependencies
      if (PEER_DEPENDENCIES.includes(packageName)) {
        continue
      }

      if (!imports.includes(packageName)) {
        imports.push(packageName)
      }
    }

    return imports.sort()
  }

  // Validate registry.json schema and structure
  validateSchema(): void {
    if (!this.registry.name) {
      this.addIssue({
        severity: 'critical',
        category: 'Schema',
        component: 'registry',
        message: 'Registry is missing required "name" field',
        suggestion: 'Add a "name" field to registry.json',
      })
    }

    if (!this.registry.items || !Array.isArray(this.registry.items)) {
      this.addIssue({
        severity: 'critical',
        category: 'Schema',
        component: 'registry',
        message: 'Registry is missing required "items" array',
        suggestion: 'Add an "items" array to registry.json',
      })
      return
    }

    // Validate each item has required fields
    this.registry.items.forEach((item, index) => {
      if (!item.name) {
        this.addIssue({
          severity: 'critical',
          category: 'Schema',
          component: `item[${index}]`,
          message: 'Registry item is missing required "name" field',
          suggestion: 'Add a "name" field to the registry item',
        })
      }

      if (!item.type) {
        this.addIssue({
          severity: 'warning',
          category: 'Schema',
          component: item.name || `item[${index}]`,
          message: 'Registry item is missing "type" field',
          suggestion: 'Add a "type" field (e.g., "registry:ui")',
        })
      }

      if (!item.files || !Array.isArray(item.files) || item.files.length === 0) {
        this.addIssue({
          severity: 'critical',
          category: 'Schema',
          component: item.name || `item[${index}]`,
          message: 'Registry item is missing "files" array or it is empty',
          suggestion: 'Add a "files" array with at least one file entry',
        })
      }

      if (!item.dependencies || !Array.isArray(item.dependencies)) {
        this.addIssue({
          severity: 'warning',
          category: 'Schema',
          component: item.name || `item[${index}]`,
          message: 'Registry item is missing "dependencies" array',
          suggestion: 'Add a "dependencies" array (can be empty)',
        })
      }

      if (!item.registryDependencies || !Array.isArray(item.registryDependencies)) {
        this.addIssue({
          severity: 'warning',
          category: 'Schema',
          component: item.name || `item[${index}]`,
          message: 'Registry item is missing "registryDependencies" array',
          suggestion: 'Add a "registryDependencies" array (can be empty)',
        })
      }
    })
  }

  // Check all file paths in registry.json exist
  validateFilePaths(): void {
    this.registry.items.forEach((item) => {
      if (!item.files) return

      item.files.forEach((file) => {
        const filePath = path.join(process.cwd(), file.path)
        if (!fs.existsSync(filePath)) {
          this.addIssue({
            severity: 'critical',
            category: 'File Path',
            component: item.name,
            message: `File does not exist: ${file.path}`,
            file: file.path,
            suggestion: 'Create the file or update the path in registry.json',
          })
        }
      })
    })
  }

  // Verify registryDependencies reference valid components
  validateRegistryDependencies(): void {
    this.registry.items.forEach((item) => {
      if (!item.registryDependencies) return

      item.registryDependencies.forEach((dep) => {
        if (!this.componentNames.has(dep)) {
          this.addIssue({
            severity: 'critical',
            category: 'Registry Dependency',
            component: item.name,
            message: `Registry dependency "${dep}" does not exist in registry`,
            suggestion: `Remove "${dep}" from registryDependencies or add it to the registry`,
          })
        }
      })
    })
  }

  // Cross-check declared dependencies with actual imports
  validateDependencies(): void {
    this.registry.items.forEach((item) => {
      if (!item.files) return

      item.files.forEach((file) => {
        const filePath = path.join(process.cwd(), file.path)
        if (!fs.existsSync(filePath)) return

        const actualImports = this.extractImports(filePath)
        const declaredDeps = item.dependencies || []

        // Check for missing dependencies
        const missingDeps = actualImports.filter((imp) => !declaredDeps.includes(imp))
        missingDeps.forEach((dep) => {
          this.addIssue({
            severity: 'critical',
            category: 'Missing Dependency',
            component: item.name,
            message: `Component imports "${dep}" but it's not declared in dependencies`,
            file: file.path,
            suggestion: `Add "${dep}" to the dependencies array in registry.json`,
          })
        })

        // Check for unused dependencies
        const unusedDeps = declaredDeps.filter((dep) => !actualImports.includes(dep))
        unusedDeps.forEach((dep) => {
          this.addIssue({
            severity: 'warning',
            category: 'Unused Dependency',
            component: item.name,
            message: `Component declares "${dep}" but doesn't import it`,
            file: file.path,
            suggestion: `Remove "${dep}" from the dependencies array or use it in the component`,
          })
        })

        // Check if dependencies exist in package.json
        actualImports.forEach((dep) => {
          const allDeps = {
            ...this.packageJson.dependencies,
            ...this.packageJson.devDependencies,
          }
          if (!allDeps[dep]) {
            this.addIssue({
              severity: 'critical',
              category: 'Package Missing',
              component: item.name,
              message: `Component imports "${dep}" but it's not in package.json`,
              file: file.path,
              suggestion: `Add "${dep}" to package.json dependencies`,
            })
          }
        })
      })
    })
  }

  // Validate component descriptions and metadata
  validateMetadata(): void {
    this.registry.items.forEach((item) => {
      if (!item.title || item.title.trim() === '') {
        this.addIssue({
          severity: 'warning',
          category: 'Metadata',
          component: item.name,
          message: 'Component is missing a title',
          suggestion: 'Add a descriptive title for the component',
        })
      }

      if (!item.description || item.description.trim() === '') {
        this.addIssue({
          severity: 'warning',
          category: 'Metadata',
          component: item.name,
          message: 'Component is missing a description',
          suggestion: 'Add a description explaining what the component does',
        })
      } else if (item.description.length < 20) {
        this.addIssue({
          severity: 'info',
          category: 'Metadata',
          component: item.name,
          message: 'Component description is very short',
          suggestion: 'Consider adding more detail to the description',
        })
      }
    })
  }

  // Validate type-to-directory mapping consistency
  validateTypeDirectoryMapping(): void {
    const typeToDirectory: Record<string, string> = {
      'registry:ui': 'registry/new-york/ui',
      'registry:icons': 'registry/new-york/icons',
      'registry:block': 'registry/new-york/blocks',
      'registry:lib': 'registry/new-york/lib',
    }

    this.registry.items.forEach((item) => {
      if (!item.type || !item.files) return

      const expectedDirectory = typeToDirectory[item.type]
      if (!expectedDirectory) {
        this.addIssue({
          severity: 'warning',
          category: 'Type Mapping',
          component: item.name,
          message: `Unknown component type "${item.type}"`,
          suggestion: 'Use one of: registry:ui, registry:icons, registry:block, registry:lib',
        })
        return
      }

      item.files.forEach((file) => {
        // Skip validation if file has a custom target path
        if ((file as any).target) {
          return
        }

        if (!file.path.startsWith(expectedDirectory)) {
          this.addIssue({
            severity: 'critical',
            category: 'Type Mapping',
            component: item.name,
            message: `File path "${file.path}" doesn't match type "${item.type}"`,
            file: file.path,
            suggestion: `Files with type "${item.type}" should be in "${expectedDirectory}/" directory`,
          })
        }
      })
    })
  }

  // Check for duplicate component names across categories
  validateUniqueComponentNames(): void {
    const nameToComponents: Record<string, string[]> = {}

    this.registry.items.forEach((item) => {
      if (!nameToComponents[item.name]) {
        nameToComponents[item.name] = []
      }
      nameToComponents[item.name].push(item.type || 'unknown')
    })

    Object.entries(nameToComponents).forEach(([name, types]) => {
      if (types.length > 1) {
        this.addIssue({
          severity: 'critical',
          category: 'Duplicate Name',
          component: name,
          message: `Component name "${name}" is used in multiple categories: ${types.join(', ')}`,
          suggestion:
            'Component names must be unique across all categories. Rename one of the components.',
        })
      }
    })
  }

  // Validate styling requirements documentation
  validateStylingRequirements(): void {
    // Components that require special styling configurations
    const stylingRequirements: Record<
      string,
      { animations?: string[]; imports?: string[]; notes?: string }
    > = {
      'animated-shiny-text': {
        animations: ['animate-shiny-text'],
        notes: 'Requires custom keyframe animation in globals.css',
      },
      'typing-text': {
        animations: ['animate-blink-cursor'],
        notes: 'Requires cursor blink animation in globals.css',
      },
      'glass-surface': {
        notes: 'Uses SVG filters and backdrop-blur, ensure browser support',
      },
    }

    this.registry.items.forEach((item) => {
      const requirements = stylingRequirements[item.name]
      if (!requirements) return

      // Check if description mentions styling requirements
      const description = item.description?.toLowerCase() || ''
      const hasStyleNote =
        description.includes('css') ||
        description.includes('animation') ||
        description.includes('keyframe') ||
        description.includes('globals')

      if (!hasStyleNote) {
        this.addIssue({
          severity: 'warning',
          category: 'Styling Requirements',
          component: item.name,
          message: `Component requires special styling but description doesn't mention it`,
          suggestion: `Add note to description: "${requirements.notes}"`,
        })
      }

      // Check if animations are documented
      if (requirements.animations) {
        requirements.animations.forEach((animation) => {
          if (!description.includes(animation)) {
            this.addIssue({
              severity: 'info',
              category: 'Styling Requirements',
              component: item.name,
              message: `Component requires "${animation}" animation but it's not documented`,
              suggestion: `Mention the required "${animation}" keyframe in the description`,
            })
          }
        })
      }
    })
  }

  // Add browser compatibility warnings for WebGL components
  validateBrowserCompatibility(): void {
    // Components that use WebGL/Canvas and require special browser features
    const webglComponents = ['beams', 'floyd', 'lava-lamp', 'shades']
    const motionComponents = [
      'lens',
      'border-beam',
      'dot-pattern',
      'scroll-progress',
      'typing-text',
      'blur-fade',
      'animated-gradient-text',
      'animated-shiny-text',
      'aurora-text',
      'video-text',
      'progressive-blur',
      'animated-theme-toggler',
    ]

    this.registry.items.forEach((item) => {
      // Check WebGL components
      if (webglComponents.includes(item.name)) {
        const description = item.description?.toLowerCase() || ''
        const hasWebGLNote =
          description.includes('webgl') ||
          description.includes('gpu') ||
          description.includes('browser') ||
          description.includes('compatibility')

        if (!hasWebGLNote) {
          this.addIssue({
            severity: 'warning',
            category: 'Browser Compatibility',
            component: item.name,
            message: 'WebGL component missing browser compatibility warning',
            suggestion:
              'Add note about WebGL/WebGL2 browser requirements and GPU performance considerations',
          })
        }

        // Check for three.js dependencies
        const hasThreeDep = item.dependencies?.some(
          (dep) => dep === 'three' || dep.startsWith('@react-three/')
        )
        if (!hasThreeDep) {
          this.addIssue({
            severity: 'critical',
            category: 'Browser Compatibility',
            component: item.name,
            message: 'WebGL component missing three.js dependencies',
            suggestion: 'Add "three" and related packages to dependencies array',
          })
        }
      }

      // Check motion/animation components
      if (motionComponents.includes(item.name)) {
        const hasMotionDep = item.dependencies?.includes('motion')
        if (!hasMotionDep) {
          this.addIssue({
            severity: 'info',
            category: 'Browser Compatibility',
            component: item.name,
            message: 'Animation component should consider prefers-reduced-motion',
            suggestion:
              'Ensure component respects prefers-reduced-motion media query for accessibility',
          })
        }
      }
    })
  }

  // Run all validations
  validate(): void {
    console.log('🔍 Validating registry...\n')

    this.validateSchema()
    this.validateFilePaths()
    this.validateRegistryDependencies()
    this.validateDependencies()
    this.validateMetadata()
    this.validateTypeDirectoryMapping()
    this.validateUniqueComponentNames()
    this.validateStylingRequirements()
    this.validateBrowserCompatibility()
  }

  // Generate markdown report
  generateMarkdownReport(): string {
    const critical = this.issues.filter((i) => i.severity === 'critical')
    const warnings = this.issues.filter((i) => i.severity === 'warning')
    const info = this.issues.filter((i) => i.severity === 'info')

    let report = '# Registry Validation Report\n\n'
    report += `**Generated:** ${new Date().toISOString()}\n\n`
    report += '## Summary\n\n'
    report += `- 🔴 Critical Issues: ${critical.length}\n`
    report += `- 🟡 Warnings: ${warnings.length}\n`
    report += `- 🔵 Info: ${info.length}\n`
    report += `- **Total Components:** ${this.registry.items.length}\n\n`

    if (this.issues.length === 0) {
      report += '✅ **No issues found! Registry is valid.**\n'
      return report
    }

    const addSection = (title: string, issues: ValidationIssue[], emoji: string) => {
      if (issues.length === 0) return

      report += `## ${emoji} ${title}\n\n`

      // Group by category
      const byCategory = issues.reduce(
        (acc, issue) => {
          if (!acc[issue.category]) acc[issue.category] = []
          acc[issue.category].push(issue)
          return acc
        },
        {} as Record<string, ValidationIssue[]>
      )

      Object.entries(byCategory).forEach(([category, categoryIssues]) => {
        report += `### ${category}\n\n`
        categoryIssues.forEach((issue) => {
          report += `**Component:** \`${issue.component}\`\n\n`
          report += `- **Issue:** ${issue.message}\n`
          if (issue.file) {
            report += `- **File:** \`${issue.file}\`\n`
          }
          if (issue.suggestion) {
            report += `- **Suggestion:** ${issue.suggestion}\n`
          }
          report += '\n'
        })
      })
    }

    addSection('Critical Issues', critical, '🔴')
    addSection('Warnings', warnings, '🟡')
    addSection('Info', info, '🔵')

    return report
  }

  // Generate console report
  generateConsoleReport(): void {
    const critical = this.issues.filter((i) => i.severity === 'critical')
    const warnings = this.issues.filter((i) => i.severity === 'warning')
    const info = this.issues.filter((i) => i.severity === 'info')

    console.log('='.repeat(80))
    console.log('📊 VALIDATION SUMMARY')
    console.log('='.repeat(80))
    console.log(`🔴 Critical Issues: ${critical.length}`)
    console.log(`🟡 Warnings: ${warnings.length}`)
    console.log(`🔵 Info: ${info.length}`)
    console.log(`📦 Total Components: ${this.registry.items.length}`)
    console.log('='.repeat(80))

    if (this.issues.length === 0) {
      console.log('\n✅ No issues found! Registry is valid.\n')
      return
    }

    const printIssues = (title: string, issues: ValidationIssue[], emoji: string) => {
      if (issues.length === 0) return

      console.log(`\n${emoji} ${title.toUpperCase()}\n`)

      issues.forEach((issue, index) => {
        console.log(`${index + 1}. [${issue.category}] ${issue.component}`)
        console.log(`   ${issue.message}`)
        if (issue.file) {
          console.log(`   File: ${issue.file}`)
        }
        if (issue.suggestion) {
          console.log(`   💡 ${issue.suggestion}`)
        }
        console.log()
      })
    }

    printIssues('Critical Issues', critical, '🔴')
    printIssues('Warnings', warnings, '🟡')
    printIssues('Info', info, '🔵')
  }

  // Get issues for exit code
  hasCriticalIssues(): boolean {
    return this.issues.some((i) => i.severity === 'critical')
  }
}

// Main execution
const validator = new RegistryValidator()
validator.validate()
validator.generateConsoleReport()

// Exit with error code if critical issues found
process.exit(validator.hasCriticalIssues() ? 1 : 0)
