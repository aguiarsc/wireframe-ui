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
import { CheckIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline'

export default function ComparisonPage() {
  return (
    <>
      <SiteNav />
      <div className="container mx-auto max-w-6xl space-y-12 px-4 py-8 sm:space-y-16 sm:px-6 sm:py-12 lg:px-8">
        {/* Hero Section */}
        <section className="space-y-3 text-center sm:space-y-4">
          <Badge variant="outline" className="mx-auto">
            wireframe-ui vs Skeleton
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Comparison</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
            Honest assessment of when to use wireframe-ui vs shadcn/ui Skeleton
          </p>
        </section>

        {/* Core Difference */}
        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold sm:text-2xl">Core Difference</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Two tools, two different purposes
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">shadcn/ui Skeleton</CardTitle>
                <CardDescription className="text-sm">
                  Visual placeholder during data loading
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <p className="mb-2 text-xs font-medium sm:text-sm">Purpose</p>
                  <Badge variant="secondary" className="text-xs">
                    Loading States
                  </Badge>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium sm:text-sm">Workflow</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Design → Build → Add loading states
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">wireframe-ui</CardTitle>
                <CardDescription className="text-sm">Structured prototyping system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div>
                  <p className="mb-2 text-xs font-medium sm:text-sm">Purpose</p>
                  <Badge className="text-xs">Prototyping & Migration</Badge>
                </div>
                <div>
                  <p className="mb-2 text-xs font-medium sm:text-sm">Workflow</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Prototype → Migrate to production
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold sm:text-2xl">Feature Comparison</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Side-by-side technical assessment
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[600px]">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="p-2 text-left text-xs font-medium sm:p-4 sm:text-sm">Feature</th>
                  <th className="p-2 text-left text-xs font-medium sm:p-4 sm:text-sm">Skeleton</th>
                  <th className="p-2 text-left text-xs font-medium sm:p-4 sm:text-sm">
                    wireframe-ui
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-2 text-xs font-medium sm:p-4 sm:text-sm">Primary Purpose</td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    Loading indicator
                  </td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    Prototyping system
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-xs font-medium sm:p-4 sm:text-sm">Component Variety</td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    1 component
                  </td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    10+ semantic components
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-xs font-medium sm:p-4 sm:text-sm">
                    Structure Preservation
                  </td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">No</td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    Yes (~85%)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 text-xs font-medium sm:p-4 sm:text-sm">
                    Production Migration
                  </td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    Not applicable
                  </td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">Built-in</td>
                </tr>
                <tr>
                  <td className="p-2 text-xs font-medium sm:p-4 sm:text-sm">Bundle Size</td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    ~1KB (minimal)
                  </td>
                  <td className="text-muted-foreground p-2 text-xs sm:p-4 sm:text-sm">
                    ~8KB (moderate)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to Use What */}
        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold sm:text-2xl">Decision Framework</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Choose the right tool for your needs
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <CheckIcon className="size-4" />
                  Use shadcn/ui Skeleton
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
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
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <CheckIcon className="size-4" />
                  Use wireframe-ui
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
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
        <section className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold sm:text-2xl">Honest Assessment</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Every tool has trade-offs</p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <XIcon className="size-4" />
                  wireframe-ui Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-xs sm:text-sm">
                  <li>• Bundle overhead (~8KB vs ~1KB)</li>
                  <li>• Overkill for simple loading states</li>
                  <li>• Enforces specific workflow</li>
                  <li>• Smaller ecosystem than shadcn/ui</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <XIcon className="size-4" />
                  Skeleton Weaknesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-xs sm:text-sm">
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
        <section className="text-muted-foreground space-y-2 text-center text-xs sm:text-sm">
          <p>
            <strong>Bias Disclosure:</strong> This comparison is maintained by the wireframe-ui
            project but aims for objectivity.
          </p>
          <p>We acknowledge shadcn/ui Skeleton is excellent at what it does.</p>
        </section>
      </div>
    </>
  )
}
