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
import { Button } from '@/registry/new-york/ui/button'

interface ComponentPreviewProps {
  name: string
  title: string
  description: string
  children: React.ReactNode
  dependencies?: string[]
  className?: string
  searchQuery?: string
  apiProps?: Array<{ name: string; type: string; description?: string }>
}

export function ComponentPreview({
  name,
  title,
  description,
  children,
  className,
  apiProps,
}: ComponentPreviewProps) {
  const [showApi, setShowApi] = React.useState(false)

  return (
    <Card className={cn('flex flex-col bg-transparent', className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-1">
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </div>
          {apiProps && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowApi(!showApi)}
              className="rounded-full"
            >
              {showApi ? 'Preview' : 'API'}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {showApi && apiProps ? (
          <div className="space-y-4 rounded-md border p-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">API Reference</h3>
              <p className="text-muted-foreground mb-4 text-sm">{description}</p>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                  <div>Prop</div>
                  <div>Type</div>
                  <div>Description</div>
                </div>
              </div>
              {apiProps.map((prop) => (
                <div key={prop.name} className="grid grid-cols-3 gap-4 text-sm">
                  <div className="font-mono text-xs">{prop.name}</div>
                  <div className="text-muted-foreground font-mono text-xs">{prop.type}</div>
                  <div className="text-muted-foreground text-xs">
                    {prop.description || '—'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="flex min-h-[120px] items-center justify-center rounded-md border p-6">
              {children}
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs font-medium">Installation</p>
              <InstallationCommand name={name} />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
