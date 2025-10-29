'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '@/lib/utils'
import { CheckIcon } from '@/registry/new-york/icons'

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {}

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
        className="text-muted-foreground grid place-content-center transition-none [&>div]:pointer-events-auto"
      >
        <CheckIcon size={16} className="pointer-events-auto" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
