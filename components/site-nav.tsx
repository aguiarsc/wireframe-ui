'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatedThemeToggler } from '@/components/animated-theme-toggler'

// GitHub icon (not available in Heroicons, using inline SVG)
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
  const isHome = pathname === '/'
  const isBlocks = pathname === '/blocks'
  const isMigration = pathname === '/migration'
  const isComparison = pathname === '/comparison'
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto h-16 px-4 sm:h-20 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="h-10 w-10 dark:invert sm:h-12 sm:w-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex lg:gap-4">
            {!isHome && (
              <Link
                href="/"
                className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors lg:text-base"
              >
                Docs
              </Link>
            )}
            {!isBlocks && (
              <Link
                href="/blocks"
                className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors lg:text-base"
              >
                Blocks
              </Link>
            )}
            {!isComparison && (
              <Link
                href="/comparison"
                className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors lg:text-base"
              >
                Comparison
              </Link>
            )}
            {!isMigration && (
              <Link
                href="/migration"
                className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors lg:text-base"
              >
                Migration
              </Link>
            )}
            <div className="bg-foreground/20 h-7 w-px" />
            <div className="flex items-center gap-2 lg:gap-3">
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
          </nav>

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
            {!isHome && (
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-accent rounded-md px-3 py-2 text-base font-medium transition-colors"
              >
                Docs
              </Link>
            )}
            {!isBlocks && (
              <Link
                href="/blocks"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-accent rounded-md px-3 py-2 text-base font-medium transition-colors"
              >
                Blocks
              </Link>
            )}
            {!isComparison && (
              <Link
                href="/comparison"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-accent rounded-md px-3 py-2 text-base font-medium transition-colors"
              >
                Comparison
              </Link>
            )}
            {!isMigration && (
              <Link
                href="/migration"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:bg-accent rounded-md px-3 py-2 text-base font-medium transition-colors"
              >
                Migration
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
