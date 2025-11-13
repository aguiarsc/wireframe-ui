'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

/**
 * Props for the Tabs component.
 * A set of layered sections of content with tab triggers for switching between them.
 */
export interface TabsProps extends React.ComponentProps<typeof TabsPrimitive.Root> {
  /**
   * Current active tab value (controlled)
   */
  value?: string
  /**
   * Default active tab value (uncontrolled)
   */
  defaultValue?: string
  /**
   * Callback fired when the active tab changes
   */
  onValueChange?: (value: string) => void
}

function Tabs({ className, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

/**
 * Props for the TabsList component.
 * Container for tab triggers.
 */
export interface TabsListProps extends React.ComponentProps<typeof TabsPrimitive.List> {}

function TabsList({ className, ...props }: TabsListProps) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-card text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg border p-[3px]',
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the TabsTrigger component.
 * Button that activates a tab panel.
 */
export interface TabsTriggerProps extends React.ComponentProps<typeof TabsPrimitive.Trigger> {
  /**
   * Unique value for this tab
   */
  value: string
}

function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-card dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground data-[state=active]:border-input inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the TabsContent component.
 * Content panel associated with a tab trigger.
 */
export interface TabsContentProps extends React.ComponentProps<typeof TabsPrimitive.Content> {
  /**
   * Value that matches the corresponding TabsTrigger
   */
  value: string
}

function TabsContent({ className, ...props }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
