'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Badge } from '@/registry/new-york/ui/badge'
import { Button } from '@/registry/new-york/ui/button'
import { Separator } from '@/registry/new-york/ui/separator'
import {
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
  DocumentTextIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

// Code Highlight Component
function CodeBlock({ code, lang = 'bash' }: { code: string; lang?: string }) {
  const [highlightedCode, setHighlightedCode] = useState<string>('')

  useEffect(() => {
    const highlightCode = async () => {
      const { codeToHtml } = await import('shiki')
      const html = await codeToHtml(code, {
        lang,
        theme: 'catppuccin-macchiato',
      })
      setHighlightedCode(html)
    }
    highlightCode()
  }, [code, lang])

  return (
    <div className="bg-muted/50 overflow-hidden rounded-lg border">
      {highlightedCode ? (
        <div
          className="text-xs [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent! [&_pre]:p-4"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      ) : (
        <pre className="overflow-x-auto p-4">
          <code className="text-xs">{code}</code>
        </pre>
      )}
    </div>
  )
}

export default function DocsPage() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto flex min-h-svh flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex max-w-3xl mx-auto flex-col gap-4">
          <Badge variant="outline" className="w-fit">
            Documentation
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get Started with wireframe-ui
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            Everything you need to start prototyping with wireframe components in your Next.js
            project.
          </p>
        </header>

        <main className="flex flex-1 flex-col gap-12 max-w-4xl mx-auto">
          {/* Installation */}
          <section id="installation" className="space-y-6 scroll-mt-20">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <CommandLineIcon className="size-6" />
                Installation
              </h2>
              <p className="text-muted-foreground">
                Install components via CLI, just like shadcn/ui
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prerequisites</CardTitle>
                <CardDescription>
                  wireframe-ui is built on top of shadcn/ui. Make sure you have a Next.js project
                  with shadcn/ui configured.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">1. Initialize shadcn/ui (if not already done)</p>
                  <CodeBlock code="npx shadcn@latest init" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">2. Add wireframe components</p>
                  <CodeBlock code="npx shadcn@latest add https://wireframe-ui.com/r/text.json" />
                  <p className="text-xs text-muted-foreground">
                    Replace &quot;text&quot; with any component name from the registry
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Install Multiple Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <CodeBlock code="npx shadcn@latest add https://wireframe-ui.com/r/text.json https://wireframe-ui.com/r/button.json https://wireframe-ui.com/r/card.json" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Install Blocks</CardTitle>
                <CardDescription>
                  Pre-built complex layouts like login forms, dashboards, and pricing pages
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <CodeBlock code="npx shadcn@latest add https://wireframe-ui.com/r/blocks/login-form.json" />
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href="/blocks">View all available blocks →</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Quick Start */}
          <section id="quick-start" className="space-y-6 scroll-mt-20">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <SparklesIcon className="size-6" />
                Quick Start
              </h2>
              <p className="text-muted-foreground">
                Start prototyping in minutes
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Basic Usage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium">1. Import wireframe components</p>
                  <CodeBlock
                    lang="tsx"
                    code={`import { Text } from '@/components/ui/text'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'`}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">2. Use in your components</p>
                  <CodeBlock
                    lang="tsx"
                    code={`<Card>
  <CardHeader>
    <CardTitle>
      <Text width="md" />
    </CardTitle>
  </CardHeader>
</Card>`}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium">3. Migrate to production</p>
                  <CodeBlock
                    lang="tsx"
                    code={`<Card>
  <CardHeader>
    <CardTitle>
      {title}
    </CardTitle>
  </CardHeader>
</Card>`}
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Resources */}
          <section id="resources" className="space-y-6 scroll-mt-20">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <DocumentTextIcon className="size-6" />
                Resources
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Component Library</CardTitle>
                  <CardDescription>
                    Browse all 40+ wireframe components with live examples
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/components">View Components</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Blocks</CardTitle>
                  <CardDescription>
                    Pre-built complex layouts ready to install
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blocks">View Blocks</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Migration Guide</CardTitle>
                  <CardDescription>
                    Learn how to convert wireframes to production code
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/migration">Migration Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Comparison</CardTitle>
                  <CardDescription>
                    Technical comparison with shadcn/ui Skeleton
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/comparison">View Comparison</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* LLMs.txt */}
          <section id="ai-friendly-documentation" className="space-y-6 scroll-mt-20">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">AI-Friendly Documentation</h2>
              <p className="text-muted-foreground">
                Optimized documentation for AI assistants and LLMs
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">llms.txt</CardTitle>
                <CardDescription>
                  Machine-readable documentation following the llms.txt standard for better AI
                  integration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Comprehensive AI-friendly documentation that helps LLMs understand and work with
                  wireframe-ui components more effectively.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/llms.txt" target="_blank">
                    <ArrowTopRightOnSquareIcon className="mr-2 size-4" />
                    View llms.txt
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Additional Info */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Additional Information</h2>
            </div>

            <div className="grid gap-4">
              <Card id="registry-structure" className="scroll-mt-20">
                <CardHeader>
                  <CardTitle className="text-base">Registry Structure</CardTitle>
                  <CardDescription>
                    wireframe-ui follows the shadcn/ui registry format
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    All components are available at:
                  </p>
                  <CodeBlock code="https://wireframe-ui.com/r/[component-name].json" />
                </CardContent>
              </Card>

              <Card id="typescript-support" className="scroll-mt-20">
                <CardHeader>
                  <CardTitle className="text-base">TypeScript Support</CardTitle>
                  <CardDescription>
                    Full TypeScript support with type definitions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All components are written in TypeScript and include complete type definitions
                    for better developer experience.
                  </p>
                </CardContent>
              </Card>

              <Card id="styling" className="scroll-mt-20">
                <CardHeader>
                  <CardTitle className="text-base">Styling</CardTitle>
                  <CardDescription>
                    Built with Tailwind CSS and CSS variables
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Components use the same theming system as shadcn/ui, making them fully
                    customizable through CSS variables.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
