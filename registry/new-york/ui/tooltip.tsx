'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'

export interface TooltipProviderProps
  extends React.ComponentProps<typeof TooltipPrimitive.Provider> {}

function TooltipProvider({ delayDuration = 0, ...props }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {}

function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

export interface TooltipTriggerProps
  extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {}

function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

export interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content> {}

function TooltipContent({ className, sideOffset = 0, children, ...props }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

// Wireframe helper component
export interface TooltipWireframeExampleProps {
  triggerIcon?: React.ReactNode
  contentWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

function TooltipWireframeExample({
  triggerIcon,
  contentWidth = 'sm',
}: TooltipWireframeExampleProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          {triggerIcon || <QuestionMarkCircleIcon className="text-muted-foreground size-5" />}
          <Text width="xs" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <Text width={contentWidth} className="bg-background/30" />
      </TooltipContent>
    </Tooltip>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, TooltipWireframeExample }
