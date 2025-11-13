'use client'

import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { Button } from '@/registry/new-york/ui/button'
import { Card, CardContent } from '@/registry/new-york/ui/card'
import { Badge } from '@/registry/new-york/ui/badge'
import { Separator } from '@/registry/new-york/ui/separator'
import { ArrowRightIcon, CheckIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { BorderBeam } from '@/components/border-beam'

export default function LandingPage() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto flex min-h-svh flex-col px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section with Component Showcase */}
        <section className="flex flex-col items-center gap-8 py-24 sm:py-32 lg:py-40 min-h-[85vh] justify-center">
          <Badge variant="outline" className="animate-in fade-in slide-in-from-bottom-3 duration-500">
            <SparklesIcon className="mr-1.5 size-3" />
            wireframe-ui
          </Badge>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex max-w-4xl flex-col gap-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Wireframe in your code.
              <br />
              <span className="text-muted-foreground">Ship with confidence.</span>
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl">
              Skip Figma. Build mockups directly in your IDE with copy-paste wireframe components.
              Prototype fast, migrate faster.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/components">
                Browse Components
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="relative overflow-hidden">
              <Link href="/docs">
                Get Started
                <BorderBeam
                  size={60}
                  duration={6}
                  initialOffset={0}
                  className="from-transparent via-white to-transparent"
                  borderWidth={1}
                />
              </Link>
            </Button>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="flex flex-col items-center gap-8 py-12 sm:py-16">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Built with modern technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {/* React */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 24 24" className="size-12 sm:size-14" fill="currentColor">
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
              </svg>
              <span className="text-xs font-medium">React</span>
            </div>

            {/* TypeScript */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 24 24" className="size-12 sm:size-14" fill="currentColor">
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
              <span className="text-xs font-medium">TypeScript</span>
            </div>

            {/* Tailwind CSS */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 24 24" className="size-12 sm:size-14" fill="currentColor">
                <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
              </svg>
              <span className="text-xs font-medium">Tailwind CSS</span>
            </div>

            {/* shadcn/ui */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 256 256" className="size-12 sm:size-14" fill="none">
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  stroke="currentColor"
                  strokeWidth="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  stroke="currentColor"
                  strokeWidth="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs font-medium">shadcn/ui</span>
            </div>
          </div>
        </section>

        {/* Bento Box Features */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Large Feature - 100% Free */}
            <Card className="relative sm:col-span-2 lg:col-span-2 lg:row-span-2 border-primary/50 overflow-hidden">
              <CardContent className="flex h-full flex-col justify-center p-8 sm:p-12">
                <div className="space-y-4">
                  <div className="text-6xl font-bold sm:text-7xl lg:text-8xl">100%</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold sm:text-3xl">Free & Open Source</h3>
                    <p className="text-muted-foreground text-base sm:text-lg">
                      Loved by developers around the world. MIT licensed, use it anywhere.
                    </p>
                  </div>
                </div>
              </CardContent>
              <BorderBeam
                duration={6}
                size={400}
                className="from-transparent via-white to-transparent"
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className="from-transparent via-white to-transparent"
              />
            </Card>

            {/* 40+ Components */}
            <Card className="hover:border-primary transition-colors">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">40+</div>
                  <h3 className="font-semibold">Components</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete wireframe library ready to use
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 85% Code Reuse */}
            <Card className="hover:border-primary transition-colors">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">85%</div>
                  <h3 className="font-semibold">Code Reuse</h3>
                  <p className="text-muted-foreground text-sm">
                    Structure stays unchanged in production
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* TypeScript */}
            <Card className="hover:border-primary transition-colors">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <div className="space-y-2">
                  <CheckIcon className="size-8 text-primary" />
                  <h3 className="font-semibold">TypeScript First</h3>
                  <p className="text-muted-foreground text-sm">
                    Full type safety and IntelliSense support
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Accessible */}
            <Card className="hover:border-primary transition-colors">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <div className="space-y-2">
                  <CheckIcon className="size-8 text-primary" />
                  <h3 className="font-semibold">Accessible</h3>
                  <p className="text-muted-foreground text-sm">
                    Built on Radix UI primitives for accessibility
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Customizable */}
            <Card className="hover:border-primary transition-colors">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <div className="space-y-2">
                  <CheckIcon className="size-8 text-primary" />
                  <h3 className="font-semibold">Customizable</h3>
                  <p className="text-muted-foreground text-sm">
                    Fully themeable with CSS variables
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center gap-6 py-12 sm:py-16">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start prototyping?
            </h2>
            <p className="text-muted-foreground text-lg">
              Get started in minutes with our CLI
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/components">Browse Components</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto pt-12">
          <Separator className="mb-8" />
          <div className="grid gap-8 pb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/components" className="hover:text-foreground transition-colors">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/blocks" className="hover:text-foreground transition-colors">
                    Blocks
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/comparison" className="hover:text-foreground transition-colors">
                    Comparison
                  </Link>
                </li>
                <li>
                  <Link href="/migration" className="hover:text-foreground transition-colors">
                    Migration Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/aguiarsc/wireframe-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/aguiarsc/wireframe-ui/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    MIT License
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-6" />

          <div className="flex flex-col items-center justify-between gap-4 pb-8 sm:flex-row">
            <p className="text-muted-foreground text-sm">
              Built by{' '}
              <a
                href="https://github.com/aguiarsc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground font-medium transition-colors"
              >
                Aguiar
              </a>
              . The source code is available on{' '}
              <a
                href="https://github.com/aguiarsc/wireframe-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground font-medium transition-colors"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
