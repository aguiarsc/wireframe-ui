import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { CheckIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'
import { Text } from '@/registry/new-york/ui/text'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-card text-foreground border-input [a&]:hover:bg-accent',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'text-foreground border-input [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

// Wireframe helper component
export interface BadgeWireframeProps
  extends Omit<BadgeProps, 'children'>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  width?: 'xs' | 'sm' | 'md' | 'lg'
}

function BadgeWireframe({
  variant = 'default',
  icon,
  width = 'xs',
  className,
  ...props
}: BadgeWireframeProps) {
  return (
    <Badge variant={variant} className={className} {...props}>
      {icon || <CheckIcon className="text-muted-foreground" />}
      <Text width={width} />
    </Badge>
  )
}

export { Badge, badgeVariants, BadgeWireframe }
