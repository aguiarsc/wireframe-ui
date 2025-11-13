import * as React from 'react'

import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Button, buttonVariants } from '@/registry/new-york/ui/button'

/**
 * Props for the Pagination component.
 * Pagination with page navigation, next and previous links.
 */
export interface PaginationProps extends React.ComponentProps<'nav'> {}

function Pagination({ className, ...props }: PaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

/**
 * Props for the PaginationContent component.
 * Container for pagination items.
 */
export interface PaginationContentProps extends React.ComponentProps<'ul'> {}

function PaginationContent({ className, ...props }: PaginationContentProps) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

/**
 * Props for the PaginationItem component.
 * Individual pagination item wrapper.
 */
export interface PaginationItemProps extends React.ComponentProps<'li'> {}

function PaginationItem({ ...props }: PaginationItemProps) {
  return <li data-slot="pagination-item" {...props} />
}

/**
 * Props for the PaginationLink component.
 * Clickable pagination link.
 */
export type PaginationLinkProps = {
  /**
   * Whether this is the active page
   * @default false
   */
  isActive?: boolean
  /**
   * Size of the link button
   * @default 'icon'
   */
  size?: 'default' | 'sm' | 'lg' | 'icon'
} & React.ComponentProps<'a'>

function PaginationLink({ className, isActive, size = 'icon', ...props }: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the PaginationPrevious component.
 * Previous page navigation link.
 */
export interface PaginationPreviousProps extends React.ComponentProps<typeof PaginationLink> {}

function PaginationPrevious({ className, children, ...props }: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-3 sm:pl-3', className)}
      {...props}
    >
      <ChevronLeftIcon className="text-muted-foreground" />
      {children || <span className="hidden sm:block">Previous</span>}
    </PaginationLink>
  )
}

/**
 * Props for the PaginationNext component.
 * Next page navigation link.
 */
export interface PaginationNextProps extends React.ComponentProps<typeof PaginationLink> {}

function PaginationNext({ className, children, ...props }: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-3 sm:pr-3', className)}
      {...props}
    >
      {children || <span className="hidden sm:block">Next</span>}
      <ChevronRightIcon className="text-muted-foreground" />
    </PaginationLink>
  )
}

/**
 * Props for the PaginationEllipsis component.
 * Ellipsis indicator for skipped pages.
 */
export interface PaginationEllipsisProps extends React.ComponentProps<'span'> {}

function PaginationEllipsis({ className, ...props }: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-7 items-center justify-center', className)}
      {...props}
    >
      <EllipsisHorizontalIcon className="text-muted-foreground" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
