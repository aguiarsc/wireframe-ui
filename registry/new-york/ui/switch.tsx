'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

/**
 * Props for the Switch component.
 * A control that allows the user to toggle between checked and unchecked states.
 */
export interface SwitchProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  /**
   * Whether the switch is checked
   */
  checked?: boolean
  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean
  /**
   * Callback fired when the checked state changes
   */
  onCheckedChange?: (checked: boolean) => void
  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the switch is required
   * @default false
   */
  required?: boolean
}

function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-card data-[state=checked]:border-input data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-muted-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
