import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'

/**
 * Props for the Breadcrumb component.
 * Displays the path to the current resource using a hierarchy of links.
 */
export interface BreadcrumbProps extends React.ComponentProps<'nav'> {}

function Breadcrumb({ ...props }: BreadcrumbProps) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

/**
 * Props for the BreadcrumbList component.
 * Ordered list container for breadcrumb items.
 */
export interface BreadcrumbListProps extends React.ComponentProps<'ol'> {}

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-2 text-sm wrap-break-word sm:gap-3',
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the BreadcrumbItem component.
 * Individual item in the breadcrumb navigation.
 */
export interface BreadcrumbItemProps extends React.ComponentProps<'li'> {}

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-2', className)}
      {...props}
    />
  )
}

/**
 * Props for the BreadcrumbLink component.
 * Clickable link within a breadcrumb item.
 */
export interface BreadcrumbLinkProps extends React.ComponentProps<'a'> {
  /**
   * Render as a child component (using Radix Slot)
   * Useful for rendering as Next.js Link
   * @default false
   */
  asChild?: boolean
}

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  )
}

/**
 * Props for the BreadcrumbPage component.
 * Current page indicator (non-clickable) in the breadcrumb.
 */
export interface BreadcrumbPageProps extends React.ComponentProps<'span'> {}

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-foreground font-normal', className)}
      {...props}
    />
  )
}

/**
 * Props for the BreadcrumbSeparator component.
 * Visual separator between breadcrumb items.
 */
export interface BreadcrumbSeparatorProps extends React.ComponentProps<'li'> {}

function BreadcrumbSeparator({ children, className, ...props }: BreadcrumbSeparatorProps) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  )
}

/**
 * Props for the BreadcrumbEllipsis component.
 * Ellipsis indicator for collapsed breadcrumb items.
 */
export interface BreadcrumbEllipsisProps extends React.ComponentProps<'span'> {}

function BreadcrumbEllipsis({ className, ...props }: BreadcrumbEllipsisProps) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <EllipsisHorizontalIcon />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
