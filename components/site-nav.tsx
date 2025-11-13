'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { AnimatedThemeToggler } from '@/components/animated-theme-toggler'
import { SearchCommand } from '@/components/search-command'

function GithubIcon({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function SiteNav() {
  const pathname = usePathname()
  const isComponents = pathname === '/components'
  const isBlocks = pathname === '/blocks'
  const isDocs = pathname === '/docs'
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="bg-background/95 supports-backdrop-filter:bg-background/60 container mx-auto rounded-lg border backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="h-8 w-8 dark:invert sm:h-10 sm:w-10"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
            <Link
              href="/components"
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 lg:text-base"
              style={{
                color: isComponents ? 'hsl(var(--foreground))' : 'hsl(var(--foreground) / 0.6)',
              }}
              onMouseEnter={() => setHoveredItem('components')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="relative z-10">Components</span>
              {hoveredItem === 'components' && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 rounded-md bg-foreground/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {isComponents && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredItem === 'components' && !isComponents && (
                <motion.div
                  layoutId="hover-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link
              href="/blocks"
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 lg:text-base"
              style={{
                color: isBlocks ? 'hsl(var(--foreground))' : 'hsl(var(--foreground) / 0.6)',
              }}
              onMouseEnter={() => setHoveredItem('blocks')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="relative z-10">Blocks</span>
              {hoveredItem === 'blocks' && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 rounded-md bg-foreground/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {isBlocks && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredItem === 'blocks' && !isBlocks && (
                <motion.div
                  layoutId="hover-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link
              href="/docs"
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 lg:text-base"
              style={{
                color: isDocs ? 'hsl(var(--foreground))' : 'hsl(var(--foreground) / 0.6)',
              }}
              onMouseEnter={() => setHoveredItem('docs')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="relative z-10">Docs</span>
              {hoveredItem === 'docs' && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 rounded-md bg-foreground/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {isDocs && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredItem === 'docs' && !isDocs && (
                <motion.div
                  layoutId="hover-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Search, GitHub & Theme Toggler - Right */}
          <div className="hidden items-center gap-2 md:flex lg:gap-3">
            <SearchCommand />
            <Link
              href="https://github.com/aguiarsc/wireframe-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              <GithubIcon size={22} className="size-5.5" />
            </Link>
            <AnimatedThemeToggler className="text-foreground/60 hover:text-foreground/80 transition-colors" />
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="https://github.com/aguiarsc/wireframe-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
            >
              <GithubIcon size={20} className="size-5" />
            </Link>
            <AnimatedThemeToggler className="text-foreground/60 hover:text-foreground/80 transition-colors" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground/60 hover:text-foreground/80 flex h-9 w-9 items-center justify-center transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="bg-background border-t md:hidden">
          <nav className="container mx-auto flex flex-col space-y-1 px-4 py-4">
            <Link
              href="/components"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                isComponents ? 'bg-accent' : 'hover:bg-accent'
              }`}
            >
              Components
            </Link>
            <Link
              href="/blocks"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                isBlocks ? 'bg-accent' : 'hover:bg-accent'
              }`}
            >
              Blocks
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className={`rounded-md px-3 py-2 text-base font-medium transition-colors ${
                isDocs ? 'bg-accent' : 'hover:bg-accent'
              }`}
            >
              Docs
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
