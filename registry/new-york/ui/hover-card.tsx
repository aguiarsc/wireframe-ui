'use client'

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

import { cn } from '@/lib/utils'
import { IdentificationIcon } from '@heroicons/react/24/outline'
import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'

/**
 * Props for the HoverCard component.
 * For sighted users to preview content available behind a link.
 */
export interface HoverCardProps extends React.ComponentProps<typeof HoverCardPrimitive.Root> {
  /**
   * Whether the hover card is open
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
  /**
   * Delay before showing the hover card (in milliseconds)
   * @default 700
   */
  openDelay?: number
  /**
   * Delay before hiding the hover card (in milliseconds)
   * @default 300
   */
  closeDelay?: number
}

function HoverCard({ ...props }: HoverCardProps) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

/**
 * Props for the HoverCardTrigger component.
 * Element that triggers the hover card on hover.
 */
export interface HoverCardTriggerProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Trigger> {}

function HoverCardTrigger({ ...props }: HoverCardTriggerProps) {
  return <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
}

/**
 * Props for the HoverCardContent component.
 * Container for the hover card's content.
 */
export interface HoverCardContentProps
  extends React.ComponentProps<typeof HoverCardPrimitive.Content> {
  /**
   * Alignment relative to the trigger
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end'
  /**
   * Distance from the trigger element
   * @default 4
   */
  sideOffset?: number
  /**
   * Preferred side of the trigger to render against
   */
  side?: 'top' | 'right' | 'bottom' | 'left'
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: HoverCardContentProps) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

// Wireframe helper component
export interface HoverCardWireframeExampleProps {
  triggerIcon?: React.ReactNode
  contentWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

function HoverCardWireframeExample({
  triggerIcon,
  contentWidth = 'md',
}: HoverCardWireframeExampleProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">
          {triggerIcon || <IdentificationIcon className="text-muted-foreground size-5" />}
          <Text width="xs" />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <Text width={contentWidth} />
          <Text width="full" color="muted" />
          <Text width="lg" color="muted" />
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent, HoverCardWireframeExample }
