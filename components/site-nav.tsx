'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatedThemeToggler } from '@/components/animated-theme-toggler'
import { GithubIcon } from '@/components/icons/github'

export function SiteNav() {
  const pathname = usePathname()
  const isShowcase = pathname === '/showcase'

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-4xl font-bold">
              wireframe<span className="text-muted-foreground">-ui</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href={isShowcase ? '/' : '/showcase'}
              className="hover:text-foreground/80 text-foreground/60 text-base font-medium whitespace-nowrap transition-colors"
            >
              {isShowcase ? 'Docs' : 'Showcase'}
            </Link>
            <div className="h-7 w-px bg-foreground/20" />
            <div className="flex items-center gap-3">
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
          </div>
        </div>
      </div>
    </header>
  )
}
