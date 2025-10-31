'use client'

import * as React from 'react'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { Button } from '@/registry/new-york/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/new-york/ui/tabs'
import { ClipboardDocumentCheckIcon, CommandLineIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

// Wrapper component to provide animation interface for clipboard icon
const ClipboardCheckIcon = forwardRef<
  { startAnimation: () => void; stopAnimation: () => void },
  { className?: string; onMouseEnter?: (e: React.MouseEvent) => void; onMouseLeave?: (e: React.MouseEvent) => void }
>(({ className, onMouseEnter, onMouseLeave }, ref) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useImperativeHandle(ref, () => ({
    startAnimation: () => setIsAnimating(true),
    stopAnimation: () => setIsAnimating(false),
  }))

  return (
    <ClipboardDocumentCheckIcon
      className={cn(
        'size-5 transition-all duration-200',
        isAnimating && 'scale-110 text-green-500',
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
})

ClipboardCheckIcon.displayName = 'ClipboardCheckIcon'

// Wrapper component for terminal icon
const TerminalIcon = forwardRef<
  HTMLElement,
  { className?: string; onMouseEnter?: (e: React.MouseEvent) => void; onMouseLeave?: (e: React.MouseEvent) => void }
>(({ className, onMouseEnter, onMouseLeave }) => {
  return (
    <CommandLineIcon
      className={cn('size-5', className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  )
})

TerminalIcon.displayName = 'TerminalIcon'

interface InstallationCommandProps {
  name: string
}

const packageManagers = [
  { value: 'pnpm', label: 'pnpm', command: 'pnpm', color: '#F9AD00' }, // pnpm yellow/orange
  { value: 'npm', label: 'npm', command: 'npm', color: '#CB3837' }, // npm red
  { value: 'yarn', label: 'yarn', command: 'yarn', color: '#2C8EBB' }, // yarn blue
  { value: 'bun', label: 'bun', command: 'bun', color: '#FBAB7E' }, // bun peach/orange
]

export function InstallationCommand({ name }: InstallationCommandProps) {
  const [activeTab, setActiveTab] = React.useState('pnpm')
  const copyIconRef = React.useRef<{
    startAnimation: () => void
    stopAnimation: () => void
  } | null>(null)

  const getCommandParts = (pm: string) => {
    const baseCommand = `shadcn@latest add https://wireframe-ui.vercel.app/r/${name}.json`
    switch (pm) {
      case 'pnpm':
        return { prefix: 'pnpm', suffix: ` dlx ${baseCommand}` }
      case 'npm':
        return { prefix: 'npx', suffix: ` ${baseCommand}` }
      case 'yarn':
        return { prefix: 'npx', suffix: ` ${baseCommand}` }
      case 'bun':
        return { prefix: 'bunx', suffix: ` ${baseCommand}` }
      default:
        return { prefix: 'npx', suffix: ` ${baseCommand}` }
    }
  }

  const getFullCommand = (pm: string) => {
    const parts = getCommandParts(pm)
    return parts.prefix + parts.suffix
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(getFullCommand(activeTab))
    copyIconRef.current?.startAnimation()
    setTimeout(() => {
      copyIconRef.current?.stopAnimation()
    }, 1500)
  }

  const getColor = (pm: string) => {
    return packageManagers.find((p) => p.value === pm)?.color || '#000000'
  }

  return (
    <Tabs defaultValue="pnpm" className="w-full" onValueChange={setActiveTab}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-black dark:bg-white">
            <TerminalIcon
              className="text-white dark:text-black"
              onMouseEnter={(e) => e.stopPropagation()}
              onMouseLeave={(e) => e.stopPropagation()}
            />
          </div>
          <TabsList className="h-7">
            {packageManagers.map((pm) => (
              <TabsTrigger key={pm.value} value={pm.value} className="h-6 px-2.5 text-xs">
                {pm.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="hover:bg-muted h-7 w-7 p-0"
          onClick={copyToClipboard}
        >
          <ClipboardCheckIcon
            ref={copyIconRef}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
          />
          <span className="sr-only">Copy</span>
        </Button>
      </div>
      {packageManagers.map((pm) => {
        const parts = getCommandParts(pm.value)
        return (
          <TabsContent key={pm.value} value={pm.value} className="mt-0">
            <div className="bg-muted relative overflow-hidden rounded-md px-3 py-3">
              <code className="block overflow-hidden font-mono text-xs whitespace-nowrap">
                <span style={{ color: getColor(pm.value) }}>{parts.prefix}</span>
                {parts.suffix}
              </code>
              <div className="from-muted pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l to-transparent" />
            </div>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
