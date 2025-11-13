'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'

/**
 * Props for the TooltipProvider component.
 * Provider for tooltip configuration.
 */
export interface TooltipProviderProps
  extends React.ComponentProps<typeof TooltipPrimitive.Provider> {
  /**
   * Delay before showing the tooltip (in milliseconds)
   * @default 0
   */
  delayDuration?: number
}

function TooltipProvider({ delayDuration = 0, ...props }: TooltipProviderProps) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

/**
 * Props for the Tooltip component.
 * A popup that displays information related to an element when focused or hovered.
 */
export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root> {
  /**
   * Whether the tooltip is open
   */
  open?: boolean
  /**
   * Default open state (uncontrolled)
   */
  defaultOpen?: boolean
  /**
   * Callback fired when the open state changes
   */
  onOpenChange?: (open: boolean) => void
}

function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

/**
 * Props for the TooltipTrigger component.
 * Element that triggers the tooltip on hover or focus.
 */
export interface TooltipTriggerProps
  extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {}

function TooltipTrigger({ ...props }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

/**
 * Props for the TooltipContent component.
 * Container for the tooltip's content.
 */
export interface TooltipContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content> {
  /**
   * Distance from the trigger element
   * @default 0
   */
  sideOffset?: number
  /**
   * Preferred side of the trigger to render against
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
  /**
   * Alignment relative to the trigger
   */
  align?: 'start' | 'center' | 'end'
}

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

/**
 * Props for the TooltipWireframeExample component.
 * Wireframe helper that renders a complete tooltip example with placeholder text.
 */
export interface TooltipWireframeExampleProps {
  /**
   * Icon to display in the trigger button
   */
  triggerIcon?: React.ReactNode
  /**
   * Width of the content placeholder text
   * @default 'sm'
   */
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
