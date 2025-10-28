'use client'

import { useState, useEffect, useRef } from 'react'
import { SiteNav } from '@/components/site-nav'
import { Button } from '@/registry/new-york/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Input } from '@/registry/new-york/ui/input'
import { Label } from '@/registry/new-york/ui/label'
import { Text } from '@/registry/new-york/ui/text'
import { Badge } from '@/registry/new-york/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/registry/new-york/ui/collapsible'
import { CheckIcon, ChevronDownIcon } from '@/registry/new-york/icons'

export default function MigrationPage() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto max-w-6xl space-y-16 py-12">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <Badge variant="outline" className="mx-auto">Migration Guide</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Wireframe to Production</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          See how wireframe components transform into production code. Same structure, real content.
        </p>
      </section>

      {/* Key Stats */}
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Code Reuse</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Structure stays unchanged</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15%</div>
            <p className="text-xs text-muted-foreground">Placeholders → real content</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Quick Reference</h2>
          <p className="text-muted-foreground">Common component conversions at a glance</p>
        </div>
        
        <div className="overflow-hidden rounded-lg border">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="p-4 text-left text-sm font-medium">Wireframe</th>
                <th className="p-4 text-left text-sm font-medium">Production</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-4"><InlineCode code='<Text width="lg" />' /></td>
                <td className="p-4"><InlineCode code='<h1>{title}</h1>' /></td>
              </tr>
              <tr>
                <td className="p-4"><InlineCode code='<Media type="image" />' /></td>
                <td className="p-4"><InlineCode code='<img src={url} alt={alt} />' /></td>
              </tr>
              <tr>
                <td className="p-4"><InlineCode code='<ItemTitleWireframe />' /></td>
                <td className="p-4"><InlineCode code='<ItemTitle>{name}</ItemTitle>' /></td>
              </tr>
              <tr>
                <td className="p-4"><InlineCode code='<Input skeleton />' /></td>
                <td className="p-4"><InlineCode code='<Input value={val} onChange={fn} />' /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Real-World Example */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Real-World Example: Login Form</h2>
          <p className="text-muted-foreground">
            Complete login form showing full conversion from wireframe to production
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Wireframe</Badge>
              <span className="text-sm text-muted-foreground">Pure placeholder</span>
            </div>
            <LoginFormWireframe />
            <CollapsibleCode code={`<Card className="w-full">
  <CardHeader>
    <CardTitle><Text width="md" /></CardTitle>
    <CardDescription>
      <Text width="lg" color="muted" />
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label><Text width="xs" /></Label>
      <Input skeleton />
    </div>
    <Button className="w-full">
      <Text width="sm" />
    </Button>
  </CardContent>
</Card>`} />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge>Production</Badge>
              <span className="text-sm text-muted-foreground">Fully functional</span>
            </div>
            <LoginFormProduction />
            <CollapsibleCode code={`const [email, setEmail] = useState('')
const [isLoading, setIsLoading] = useState(false)

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setTimeout(() => setIsLoading(false), 1500)
}

return (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>Welcome Back</CardTitle>
      <CardDescription>
        Sign in to continue to your account
      </CardDescription>
    </CardHeader>
    <CardContent>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
    </CardContent>
  </Card>
)`} />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <CheckIcon size={20} />
              What Changed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="font-medium">Removed:</span>
              <span className="text-muted-foreground">3 <code>{'<Text>'}</code> components, <code>skeleton</code> prop</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Added:</span>
              <span className="text-muted-foreground">State hooks, event handlers, form logic</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium">Unchanged:</span>
              <span className="text-muted-foreground">Card structure, layout, spacing, classes</span>
            </div>
          </CardContent>
        </Card>
      </section>
      </div>
    </>
  )
}

// Code Highlight Component
function CodeBlock({ code }: { code: string }) {
  const [highlightedCode, setHighlightedCode] = useState<string>('')

  useEffect(() => {
    const highlightCode = async () => {
      const { codeToHtml } = await import('shiki')
      const html = await codeToHtml(code, {
        lang: 'tsx',
        theme: 'catppuccin-macchiato',
      })
      setHighlightedCode(html)
    }
    highlightCode()
  }, [code])

  return (
    <div className="rounded-lg border bg-muted/50 overflow-hidden">
      {highlightedCode ? (
        <div
          className="text-xs [&_pre]:m-0 [&_pre]:p-4 [&_pre]:bg-transparent! [&_pre]:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      ) : (
        <pre className="p-4 overflow-x-auto">
          <code className="text-xs">{code}</code>
        </pre>
      )}
    </div>
  )
}

// Inline Code Highlight (for table cells)
function InlineCode({ code }: { code: string }) {
  const [highlightedCode, setHighlightedCode] = useState<string>('')

  useEffect(() => {
    const highlightCode = async () => {
      const { codeToHtml } = await import('shiki')
      const html = await codeToHtml(code, {
        lang: 'tsx',
        theme: 'catppuccin-macchiato',
      })
      setHighlightedCode(html)
    }
    highlightCode()
  }, [code])

  return highlightedCode ? (
    <div
      className="text-sm [&_pre]:m-0 [&_pre]:p-0 [&_pre]:bg-transparent! [&_code]:bg-transparent!"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
    />
  ) : (
    <code className="font-mono text-sm">{code}</code>
  )
}

// Collapsible Code Component with auto-scroll
function CollapsibleCode({ code }: { code: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (open) {
      // Wait for the animation to start, then scroll
      setTimeout(() => {
        if (contentRef.current) {
          const rect = contentRef.current.getBoundingClientRect()
          const absoluteTop = window.pageYOffset + rect.top
          const scrollToPosition = absoluteTop + contentRef.current.offsetHeight - window.innerHeight + 32
          
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  return (
    <Collapsible open={isOpen} onOpenChange={handleOpenChange}>
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-between group">
          <span className="text-xs">View Code</span>
          <ChevronDownIcon size={16} className="transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2" ref={contentRef}>
        <CodeBlock code={code} />
      </CollapsibleContent>
    </Collapsible>
  )
}

// Login Form Examples
function LoginFormWireframe() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle><Text width="md" /></CardTitle>
        <CardDescription><Text width="lg" color="muted" /></CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label><Text width="xs" /></Label>
          <Input skeleton />
        </div>
        <Button className="w-full"><Text width="sm" /></Button>
      </CardContent>
    </Card>
  )
}

function LoginFormProduction() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Welcome Back</CardTitle>
        <CardDescription>Sign in to continue to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
