'use client'

import { SiteNav } from '@/components/site-nav'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Badge } from '@/registry/new-york/ui/badge'
import { CheckIcon, XIcon } from '@/registry/new-york/icons'

export default function ComparisonPage() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto max-w-6xl space-y-16 py-12">
        {/* Hero Section */}
        <section className="space-y-4 text-center">
          <Badge variant="outline" className="mx-auto">wireframe-ui vs Skeleton</Badge>
          <h1 className="text-4xl font-bold tracking-tight">Technical Comparison</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Honest assessment of when to use wireframe-ui vs shadcn/ui Skeleton
          </p>
        </section>

        {/* Core Difference */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Core Difference</h2>
            <p className="text-muted-foreground">Two tools, two different purposes</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>shadcn/ui Skeleton</CardTitle>
                <CardDescription>Visual placeholder during data loading</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Purpose</p>
                  <Badge variant="secondary">Loading States</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Workflow</p>
                  <p className="text-sm text-muted-foreground">Design → Build → Add loading states</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>wireframe-ui</CardTitle>
                <CardDescription>Structured prototyping system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Purpose</p>
                  <Badge>Prototyping & Migration</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Workflow</p>
                  <p className="text-sm text-muted-foreground">Prototype → Migrate to production</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Feature Comparison</h2>
            <p className="text-muted-foreground">Side-by-side technical assessment</p>
          </div>

          <div className="overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="p-4 text-left text-sm font-medium">Feature</th>
                  <th className="p-4 text-left text-sm font-medium">Skeleton</th>
                  <th className="p-4 text-left text-sm font-medium">wireframe-ui</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 font-medium">Primary Purpose</td>
                  <td className="p-4 text-sm text-muted-foreground">Loading indicator</td>
                  <td className="p-4 text-sm text-muted-foreground">Prototyping system</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Component Variety</td>
                  <td className="p-4 text-sm text-muted-foreground">1 component</td>
                  <td className="p-4 text-sm text-muted-foreground">10+ semantic components</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Structure Preservation</td>
                  <td className="p-4 text-sm text-muted-foreground">No</td>
                  <td className="p-4 text-sm text-muted-foreground">Yes (~85%)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Production Migration</td>
                  <td className="p-4 text-sm text-muted-foreground">Not applicable</td>
                  <td className="p-4 text-sm text-muted-foreground">Built-in</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Bundle Size</td>
                  <td className="p-4 text-sm text-muted-foreground">~1KB (minimal)</td>
                  <td className="p-4 text-sm text-muted-foreground">~8KB (moderate)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to Use What */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Decision Framework</h2>
            <p className="text-muted-foreground">Choose the right tool for your needs</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckIcon size={20} />
                  Use shadcn/ui Skeleton
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>You only need loading indicators</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>No prototyping phase in workflow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Bundle size is critical constraint</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Simple, straightforward use case</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Team already familiar with it</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckIcon size={20} />
                  Use wireframe-ui
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Rapid prototyping is part of workflow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Need to demo before backend ready</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Building design systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Want structured migration path</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground mt-0.5">•</span>
                    <span>Team does iterative design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Honest Limitations */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Honest Assessment</h2>
            <p className="text-muted-foreground">Every tool has trade-offs</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XIcon size={18} />
                  wireframe-ui Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bundle overhead (~8KB vs ~1KB)</li>
                  <li>• Overkill for simple loading states</li>
                  <li>• Enforces specific workflow</li>
                  <li>• Smaller ecosystem than shadcn/ui</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <XIcon size={18} />
                  Skeleton Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Single purpose (loading only)</li>
                  <li>• No prototyping support</li>
                  <li>• No semantic meaning in code</li>
                  <li>• No structural consistency</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="text-center text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Bias Disclosure:</strong> This comparison is maintained by the wireframe-ui project 
            but aims for objectivity.
          </p>
          <p>
            We acknowledge shadcn/ui Skeleton is excellent at what it does.
          </p>
        </section>
      </div>
    </>
  )
}
