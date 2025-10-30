'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatedThemeToggler } from '@/components/animated-theme-toggler'
import { GithubIcon } from '@/components/icons/github'

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
            <span className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              wireframe<span className="text-muted-foreground">-ui</span>
            </span>
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
                <GithubIcon size={22} />
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
              <GithubIcon size={20} />
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
