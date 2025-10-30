'use client'

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

interface BlockPreviewProps {
  name: string
  title: string
  description: string
  children: React.ReactNode
  className?: string
  installCommand?: string
  components?: string[]
}

export function BlockPreview({
  name,
  title,
  description,
  children,
  className,
  installCommand,
  components,
}: BlockPreviewProps) {
  return (
    <Card className={cn('flex flex-col bg-transparent', className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-1">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex min-h-[400px] items-center justify-center overflow-hidden rounded-md border">
          {children}
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs font-medium">Installation</p>
            <InstallationCommand name={installCommand || name} />
          </div>
          {components && components.length > 0 && (
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs font-medium">Components</p>
              <div className="flex flex-wrap gap-2">
                {components.map((component) => (
                  <code
                    key={component}
                    className="bg-muted text-foreground rounded px-2 py-1 font-mono text-xs"
                  >
                    {component}
                  </code>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
