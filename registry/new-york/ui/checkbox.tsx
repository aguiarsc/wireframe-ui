'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'
import { CheckIcon } from '@heroicons/react/24/outline'

/**
 * Props for the Checkbox component.
 * A control that allows the user to toggle between checked and not checked.
 */
export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  /**
   * Whether the checkbox is checked
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
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Whether the checkbox is required
   * @default false
   */
  required?: boolean
}

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-card data-[state=checked]:border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="text-muted-foreground grid place-content-center transition-none"
      >
        <CheckIcon className="pointer-events-auto size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
