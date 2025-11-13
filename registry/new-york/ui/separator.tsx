'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

/**
 * Props for the Separator component.
 * Visually or semantically separates content with horizontal or vertical orientation.
 */
export interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  /**
   * Orientation of the separator
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Whether the separator is purely decorative (affects accessibility)
   * @default true
   */
  decorative?: boolean
}

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  )
}

export { Separator }
