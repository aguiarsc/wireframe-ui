import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { MusicalNoteIcon } from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'
import { Separator } from '@/registry/new-york/ui/separator'
import { Text } from '@/registry/new-york/ui/text'

export interface ItemGroupProps extends React.ComponentProps<'div'> {}

function ItemGroup({ className, ...props }: ItemGroupProps) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn('group/item-group flex flex-col', className)}
      {...props}
    />
  )
}

export interface ItemSeparatorProps extends React.ComponentProps<typeof Separator> {}

function ItemSeparator({ className, ...props }: ItemSeparatorProps) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('my-0', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-border',
        muted: 'bg-muted/50',
      },
      size: {
        default: 'p-4 gap-4 ',
        sm: 'py-3 px-4 gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ItemProps extends React.ComponentProps<'div'>, VariantProps<typeof itemVariants> {
  asChild?: boolean
}

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ItemProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: 'size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ItemMediaProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof itemMediaVariants> {}

function ItemMedia({ className, variant = 'default', ...props }: ItemMediaProps) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

export interface ItemContentProps extends React.ComponentProps<'div'> {}

function ItemContent({ className, ...props }: ItemContentProps) {
  return (
    <div
      data-slot="item-content"
      className={cn('flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none', className)}
      {...props}
    />
  )
}

export interface ItemTitleProps extends React.ComponentProps<'div'> {}

function ItemTitle({ className, ...props }: ItemTitleProps) {
  return (
    <div
      data-slot="item-title"
      className={cn('flex w-fit items-center gap-2 text-sm leading-snug font-medium', className)}
      {...props}
    />
  )
}

export interface ItemDescriptionProps extends React.ComponentProps<'p'> {}

function ItemDescription({ className, ...props }: ItemDescriptionProps) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className
      )}
      {...props}
    />
  )
}

export interface ItemActionsProps extends React.ComponentProps<'div'> {}

function ItemActions({ className, ...props }: ItemActionsProps) {
  return (
    <div data-slot="item-actions" className={cn('flex items-center gap-2', className)} {...props} />
  )
}

export interface ItemHeaderProps extends React.ComponentProps<'div'> {}

function ItemHeader({ className, ...props }: ItemHeaderProps) {
  return (
    <div
      data-slot="item-header"
      className={cn('flex basis-full items-center justify-between gap-2', className)}
      {...props}
    />
  )
}

export interface ItemFooterProps extends React.ComponentProps<'div'> {}

function ItemFooter({ className, ...props }: ItemFooterProps) {
  return (
    <div
      data-slot="item-footer"
      className={cn('flex basis-full items-center justify-between gap-2', className)}
      {...props}
    />
  )
}

// Wireframe helper components
function ItemTitleWireframe({
  width = 'md',
  className,
  ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & {
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}) {
  return (
    <ItemTitle className={className} {...props}>
      <Text width={width} emphasis="primary" />
    </ItemTitle>
  )
}

function ItemDescriptionWireframe({
  width = 'lg',
  className,
  ...props
}: Omit<React.ComponentProps<'p'>, 'children'> & {
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}) {
  return (
    <ItemDescription className={className} {...props}>
      <Text width={width} color="muted" />
    </ItemDescription>
  )
}

function ItemMediaWireframe({
  variant = 'image',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>) {
  return (
    <ItemMedia variant={variant} className={className} {...props}>
      {children || (
        <>
          {variant === 'icon' && <div className="wireframe-block size-4" />}
          {variant === 'image' && <MusicalNoteIcon className="size-6 text-muted-foreground" />}
        </>
      )}
    </ItemMedia>
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
  ItemTitleWireframe,
  ItemDescriptionWireframe,
  ItemMediaWireframe,
}
