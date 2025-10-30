'use client'

import { Button } from '@/registry/new-york/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { Text } from '@/registry/new-york/ui/text'
import { Badge } from '@/registry/new-york/ui/badge'
import { Separator } from '@/registry/new-york/ui/separator'
import { CheckIcon } from '@/registry/new-york/icons'
import { Heading } from '@/registry/new-york/ui/heading'

export function Pricing() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16">
      <div className="mb-8 text-center lg:mb-12">
        <Badge className="mb-4">
          <Text width="xs" />
        </Badge>
        <Heading level={2} />
        <div className="mx-auto mt-4 max-w-2xl">
          <Text width="full" color="muted" size="lg" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>
              <Text width="sm" />
            </CardTitle>
            <CardDescription>
              <Text width="lg" color="muted" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <Text width="md" emphasis="primary" size="xl" />
                <Text width="xs" color="muted" size="sm" className="shrink-0" />
              </div>
              <Text width="sm" color="muted" size="sm" />
            </div>
            <Button variant="outline" className="w-full">
              <Text width="sm" />
            </Button>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="full" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="lg" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="md" size="sm" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary relative overflow-hidden">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge>
              <Text width="xs" />
            </Badge>
          </div>
          <CardHeader>
            <CardTitle>
              <Text width="sm" />
            </CardTitle>
            <CardDescription>
              <Text width="xl" color="muted" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <Text width="lg" emphasis="primary" size="xl" />
                <Text width="xs" color="muted" size="sm" className="shrink-0" />
              </div>
              <Text width="md" color="muted" size="sm" />
            </div>
            <Button className="w-full">
              <Text width="sm" />
            </Button>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="full" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="lg" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="md" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="xl" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="sm" size="sm" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>
              <Text width="md" />
            </CardTitle>
            <CardDescription>
              <Text width="lg" color="muted" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <Text width="xl" emphasis="primary" size="xl" />
                <Text width="xs" color="muted" size="sm" className="shrink-0" />
              </div>
              <Text width="sm" color="muted" size="sm" />
            </div>
            <Button variant="outline" className="w-full">
              <Text width="sm" />
            </Button>
            <Separator />
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="full" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="lg" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="md" size="sm" />
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon size={16} className="shrink-0 text-muted-foreground mt-0.5" />
                <Text width="xl" size="sm" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
