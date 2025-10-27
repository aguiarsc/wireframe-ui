// npx tsx scripts/audit-dependencies.ts

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface RegistryItem {
  name: string
  dependencies: string[]
  registryDependencies: string[]
  files: Array<{ path: string; type: string }>
}

interface Registry {
  items: RegistryItem[]
}

interface AuditResult {
  component: string
  filePath: string
  declaredDeps: string[]
  actualImports: string[]
  missingDeps: string[]
  unusedDeps: string[]
}

// Peer dependencies that shouldn't be listed in component dependencies
const PEER_DEPENDENCIES = ['react', 'react-dom']

// Extract imports from a TypeScript/TSX file
function extractImports(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  const imports: string[] = []

  // Match import statements
  const importRegex = /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s+from\s+)?['"]([^'"]+)['"]/g
  let match

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1]

    // Skip relative imports and @/ imports (internal)
    if (importPath.startsWith('.') || importPath.startsWith('@/')) {
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

// Main audit function
function auditDependencies(): AuditResult[] {
  const registryPath = path.join(process.cwd(), 'registry.json')
  const registry: Registry = JSON.parse(fs.readFileSync(registryPath, 'utf-8'))

  const results: AuditResult[] = []

  for (const item of registry.items) {
    for (const file of item.files) {
      const filePath = path.join(process.cwd(), file.path)

      if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${file.path}`)
        continue
      }

      const actualImports = extractImports(filePath)
      const declaredDeps = item.dependencies || []

      const missingDeps = actualImports.filter((imp) => !declaredDeps.includes(imp))
      const unusedDeps = declaredDeps.filter((dep) => !actualImports.includes(dep))

      results.push({
        component: item.name,
        filePath: file.path,
        declaredDeps,
        actualImports,
        missingDeps,
        unusedDeps,
      })
    }
  }

  return results
}

// Generate report
function generateReport(results: AuditResult[]): void {
  console.log('\n📦 Component Dependency Audit Report\n')
  console.log('='.repeat(80))

  let hasIssues = false

  for (const result of results) {
    const hasMissing = result.missingDeps.length > 0
    const hasUnused = result.unusedDeps.length > 0

    if (hasMissing || hasUnused) {
      hasIssues = true
      console.log(`\n🔍 Component: ${result.component}`)
      console.log(`   File: ${result.filePath}`)

      if (hasMissing) {
        console.log(`   ❌ Missing dependencies:`)
        result.missingDeps.forEach((dep) => console.log(`      - ${dep}`))
      }

      if (hasUnused) {
        console.log(`   ⚠️  Unused dependencies:`)
        result.unusedDeps.forEach((dep) => console.log(`      - ${dep}`))
      }
    }
  }

  if (!hasIssues) {
    console.log('\n✅ All component dependencies are correctly declared!')
  }

  console.log('\n' + '='.repeat(80))
  console.log('\n📊 Summary:')
  console.log(`   Total components: ${results.length}`)
  console.log(
    `   Components with missing deps: ${results.filter((r) => r.missingDeps.length > 0).length}`
  )
  console.log(
    `   Components with unused deps: ${results.filter((r) => r.unusedDeps.length > 0).length}`
  )
  console.log()
}

// Run audit
const results = auditDependencies()
generateReport(results)

// Exit with error code if issues found
const hasIssues = results.some((r) => r.missingDeps.length > 0 || r.unusedDeps.length > 0)
process.exit(hasIssues ? 1 : 0)
