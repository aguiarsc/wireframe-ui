import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg px-4 py-4 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*5)_1fr] has-[>div:first-child]:grid-cols-[calc(var(--spacing)*5)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-4 has-[>div:first-child]:gap-x-4 gap-y-1 items-center [&>svg]:size-5 [&>svg]:text-muted-foreground [&>div:first-child]:size-5 [&>div:first-child]:text-muted-foreground',
  {
    variants: {
      variant: {
        default: 'bg-card text-foreground border',
        destructive:
          'bg-destructive/10 text-destructive [&>svg]:text-destructive [&>div:first-child]:text-destructive border border-destructive/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface AlertProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof alertVariants> {}

function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

export interface AlertTitleProps extends React.ComponentProps<'div'> {}

function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div data-slot="alert-title" className={cn('col-start-2 font-medium', className)} {...props} />
  )
}

export interface AlertDescriptionProps extends React.ComponentProps<'div'> {}

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <div
      data-slot="alert-description"
      className={cn('text-muted-foreground col-start-2 text-sm', className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
