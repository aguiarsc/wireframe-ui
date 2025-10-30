import * as React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/registry/new-york/ui/card'
import { InstallationCommand } from './installation-command'
import { cn } from '@/lib/utils'

interface ComponentPreviewProps {
  name: string
  title: string
  description: string
  children: React.ReactNode
  dependencies?: string[]
  className?: string
  searchQuery?: string
}

export function ComponentPreview({
  name,
  title,
  description,
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <Card className={cn('flex flex-col bg-transparent', className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex min-h-[120px] items-center justify-center rounded-md border p-6">
          {children}
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground text-xs font-medium">Installation</p>
          <InstallationCommand name={name} />
        </div>
      </CardContent>
    </Card>
  )
}
