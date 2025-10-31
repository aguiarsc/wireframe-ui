import { cva, type VariantProps } from 'class-variance-authority'
import { PhotoIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'
import { Text } from '@/registry/new-york/ui/text'

export interface EmptyProps extends React.ComponentProps<'div'> {}

function Empty({ className, ...props }: EmptyProps) {
  return (
    <div
      data-slot="empty"
      className={cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12',
        className
      )}
      {...props}
    />
  )
}

export interface EmptyHeaderProps extends React.ComponentProps<'div'> {}

function EmptyHeader({ className, ...props }: EmptyHeaderProps) {
  return (
    <div
      data-slot="empty-header"
      className={cn('flex max-w-sm flex-col items-center gap-2 text-center', className)}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  'flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface EmptyMediaProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof emptyMediaVariants> {}

function EmptyMedia({ className, variant = 'default', ...props }: EmptyMediaProps) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

export interface EmptyTitleProps extends React.ComponentProps<'div'> {}

function EmptyTitle({ className, ...props }: EmptyTitleProps) {
  return (
    <div
      data-slot="empty-title"
      className={cn('text-lg font-medium tracking-tight', className)}
      {...props}
    />
  )
}

export interface EmptyDescriptionProps extends React.ComponentProps<'p'> {}

function EmptyDescription({ className, ...props }: EmptyDescriptionProps) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        'text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4',
        className
      )}
      {...props}
    />
  )
}

export interface EmptyContentProps extends React.ComponentProps<'div'> {}

function EmptyContent({ className, ...props }: EmptyContentProps) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance',
        className
      )}
      {...props}
    />
  )
}

// Wireframe helper components
function EmptyTitleWireframe({
  width = 'md',
  className,
  ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & {
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}) {
  return (
    <EmptyTitle className={className} {...props}>
      <Text width={width} size="lg" emphasis="primary" />
    </EmptyTitle>
  )
}

function EmptyDescriptionWireframe({
  width = 'lg',
  className,
  ...props
}: Omit<React.ComponentProps<'p'>, 'children'> & {
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}) {
  return (
    <EmptyDescription className={className} {...props}>
      <Text width={width} size="sm" color="muted" />
    </EmptyDescription>
  )
}

function EmptyMediaWireframe({
  variant = 'icon',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <EmptyMedia variant={variant} className={className} {...props}>
      {children || <PhotoIcon className="text-muted-foreground" />}
    </EmptyMedia>
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
  EmptyTitleWireframe,
  EmptyDescriptionWireframe,
  EmptyMediaWireframe,
}
