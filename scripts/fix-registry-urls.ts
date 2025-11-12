import * as fs from 'fs'
import * as path from 'path'

const REGISTRY_BASE_URL = 'https://wireframe-ui.vercel.app/r'
const PUBLIC_R_DIR = path.join(process.cwd(), 'public/r')

interface RegistryFile {
  name: string
  registryDependencies?: string[]
  [key: string]: any
}

function fixRegistryUrls() {
  console.log('🔧 Fixing registry dependency URLs...\n')

  const files = fs.readdirSync(PUBLIC_R_DIR).filter(f => f.endsWith('.json'))
  let fixedCount = 0

  for (const file of files) {
    const filePath = path.join(PUBLIC_R_DIR, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const data: RegistryFile = JSON.parse(content)

    if (data.registryDependencies && data.registryDependencies.length > 0) {
      // Convert dependency names to full URLs
      const originalDeps = [...data.registryDependencies]
      data.registryDependencies = data.registryDependencies.map(dep => {
        // If it's already a URL, leave it
        if (dep.startsWith('http://') || dep.startsWith('https://')) {
          return dep
        }
        // Convert to full URL
        return `${REGISTRY_BASE_URL}/${dep}.json`
      })

      // Write back to file
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8')
      
      console.log(`✅ ${file}`)
      console.log(`   ${originalDeps.join(', ')} → URLs`)
      fixedCount++
    }
  }

  console.log(`\n✨ Fixed ${fixedCount} files with registry dependencies`)
}

fixRegistryUrls()
