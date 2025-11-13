'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { Command } from 'cmdk'
import { Dialog, DialogContent } from '@/registry/new-york/ui/dialog'

interface SearchItem {
  title: string
  href: string
  category: string
}

const searchItems: SearchItem[] = [
  // Components
  { title: 'Accordion', href: '/components#accordion', category: 'Components' },
  { title: 'Alert', href: '/components#alert', category: 'Components' },
  { title: 'Avatar', href: '/components#avatar', category: 'Components' },
  { title: 'Badge', href: '/components#badge', category: 'Components' },
  { title: 'Button', href: '/components#button', category: 'Components' },
  { title: 'Card', href: '/components#card', category: 'Components' },
  { title: 'Checkbox', href: '/components#checkbox', category: 'Components' },
  { title: 'Dialog', href: '/components#dialog', category: 'Components' },
  { title: 'Input', href: '/components#input', category: 'Components' },
  { title: 'Select', href: '/components#select', category: 'Components' },
  { title: 'Table', href: '/components#table', category: 'Components' },
  { title: 'Tabs', href: '/components#tabs', category: 'Components' },
  { title: 'Breadcrumb', href: '/components#breadcrumb', category: 'Components' },
  { title: 'Carousel', href: '/components#carousel', category: 'Components' },
  { title: 'Collapsible', href: '/components#collapsible', category: 'Components' },
  { title: 'Context Menu', href: '/components#context-menu', category: 'Components' },
  { title: 'Drawer', href: '/components#drawer', category: 'Components' },
  { title: 'Form', href: '/components#form', category: 'Components' },
  { title: 'Hover Card', href: '/components#hover-card', category: 'Components' },
  { title: 'Label', href: '/components#label', category: 'Components' },
  { title: 'Menubar', href: '/components#menubar', category: 'Components' },
  { title: 'Pagination', href: '/components#pagination', category: 'Components' },
  { title: 'Separator', href: '/components#separator', category: 'Components' },
  { title: 'Sheet', href: '/components#sheet', category: 'Components' },
  { title: 'Slider', href: '/components#slider', category: 'Components' },
  { title: 'Switch', href: '/components#switch', category: 'Components' },
  { title: 'Textarea', href: '/components#textarea', category: 'Components' },
  { title: 'Toggle', href: '/components#toggle', category: 'Components' },
  { title: 'Tooltip', href: '/components#tooltip', category: 'Components' },
  
  // Blocks
  { title: 'Hero Section', href: '/blocks#hero-section', category: 'Blocks' },
  { title: 'Login Form', href: '/blocks#login-form', category: 'Blocks' },
  { title: 'Register Form', href: '/blocks#register-form', category: 'Blocks' },
  { title: 'Contact Form', href: '/blocks#contact-form', category: 'Blocks' },
  { title: 'Dashboard', href: '/blocks#dashboard', category: 'Blocks' },
  { title: 'Pricing', href: '/blocks#pricing', category: 'Blocks' },
  { title: 'Product Grid', href: '/blocks#product-grid', category: 'Blocks' },
  { title: 'Profile Page', href: '/blocks#profile-page', category: 'Blocks' },
  { title: 'Settings Page', href: '/blocks#settings-page', category: 'Blocks' },
  
  // Documentation Sections
  { title: 'Documentation', href: '/docs', category: 'Documentation' },
  { title: 'Installation', href: '/docs#installation', category: 'Documentation' },
  { title: 'Quick Start', href: '/docs#quick-start', category: 'Documentation' },
  { title: 'Resources', href: '/docs#resources', category: 'Documentation' },
  { title: 'AI-Friendly Documentation', href: '/docs#ai-friendly-documentation', category: 'Documentation' },
  { title: 'Registry Structure', href: '/docs#registry-structure', category: 'Documentation' },
  { title: 'TypeScript Support', href: '/docs#typescript-support', category: 'Documentation' },
  { title: 'Styling', href: '/docs#styling', category: 'Documentation' },
  
  // Comparison Sections
  { title: 'Comparison', href: '/comparison', category: 'Resources' },
  { title: 'Core Difference', href: '/comparison#core-difference', category: 'Resources' },
  { title: 'Feature Comparison', href: '/comparison#feature-comparison', category: 'Resources' },
  { title: 'Decision Framework', href: '/comparison#decision-framework', category: 'Resources' },
  { title: 'Honest Assessment', href: '/comparison#honest-assessment', category: 'Resources' },
  
  // Migration Sections
  { title: 'Migration Guide', href: '/migration', category: 'Resources' },
  { title: 'Quick Reference', href: '/migration#quick-reference', category: 'Resources' },
  { title: 'Real-World Example', href: '/migration#real-world-example', category: 'Resources' },
]

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleSelect = (href: string) => {
    setOpen(false)
    setSearch('')
    
    // Handle hash navigation
    if (href.includes('#')) {
      const [path, hash] = href.split('#')
      const currentPath = window.location.pathname
      
      // If we're already on the target page, just scroll
      if (currentPath === path) {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // Navigate to the page with hash
        router.push(href)
        // Wait for navigation and then scroll
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 300)
      }
    } else {
      router.push(href)
    }
  }

  const filteredItems = searchItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, SearchItem[]>)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-background/50 hover:bg-background/80 text-muted-foreground hover:text-foreground flex h-9 items-center gap-2 rounded-md border px-3 text-sm transition-colors"
      >
        <MagnifyingGlassIcon className="size-4" />
        <span className="hidden sm:inline">Search docs...</span>
        <kbd className="bg-muted pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0 shadow-lg sm:max-w-[550px]">
          <Command className="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
            <div className="flex items-center border-b px-3">
              <MagnifyingGlassIcon className="mr-2 size-4 shrink-0 opacity-50" />
              <Command.Input
                value={search}
                onValueChange={setSearch}
                placeholder="Search documentation..."
                className="placeholder:text-muted-foreground flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>
              {Object.entries(groupedItems).map(([category, items]) => (
                <Command.Group key={category} heading={category} className="[&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium">
                  {items.map((item) => (
                    <Command.Item
                      key={item.href}
                      value={`${item.title}-${item.href}`}
                      onSelect={() => handleSelect(item.href)}
                      className="hover:bg-accent aria-selected:bg-accent relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 pointer-events-auto"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <DocumentTextIcon className="mr-2 size-4 pointer-events-none" />
                      <span className="pointer-events-none">{item.title}</span>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  )
}
