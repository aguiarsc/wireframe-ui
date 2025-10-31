import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'
import { Text } from '@/registry/new-york/ui/text'

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

// Wireframe helper components
export interface AlertWireframeProps
  extends Omit<AlertProps, 'children'>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode
  titleWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  descriptionWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

function AlertWireframe({
  variant = 'default',
  icon,
  titleWidth = 'lg',
  descriptionWidth = 'full',
  className,
  ...props
}: AlertWireframeProps) {
  return (
    <Alert variant={variant} className={className} {...props}>
      {icon || <ExclamationTriangleIcon className="text-muted-foreground" />}
      <AlertTitle>
        <Text width={titleWidth} truncate />
      </AlertTitle>
      <AlertDescription>
        <div className="space-y-1.5">
          <Text width={descriptionWidth} color="muted" truncate />
          <Text width="xl" color="muted" truncate />
        </div>
      </AlertDescription>
    </Alert>
  )
}

export { Alert, AlertTitle, AlertDescription, AlertWireframe }
