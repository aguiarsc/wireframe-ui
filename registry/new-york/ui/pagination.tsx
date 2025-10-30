import * as React from 'react'

import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon, WavesIcon } from '@/registry/new-york/icons'
import { Button, buttonVariants } from '@/registry/new-york/ui/button'

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

export interface PaginationItemProps extends React.ComponentProps<'li'> {}

function PaginationItem({ ...props }: PaginationItemProps) {
  return <li data-slot="pagination-item" {...props} />
}

export type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>

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

export interface PaginationPreviousProps extends React.ComponentProps<typeof PaginationLink> {}

function PaginationPrevious({ className, children, ...props }: PaginationPreviousProps) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon className="text-muted-foreground" />
      {children || <span className="hidden sm:block">Previous</span>}
    </PaginationLink>
  )
}

export interface PaginationNextProps extends React.ComponentProps<typeof PaginationLink> {}

function PaginationNext({ className, children, ...props }: PaginationNextProps) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      {children || <span className="hidden sm:block">Next</span>}
      <ChevronRightIcon className="text-muted-foreground" />
    </PaginationLink>
  )
}

export interface PaginationEllipsisProps extends React.ComponentProps<'span'> {}

function PaginationEllipsis({ className, ...props }: PaginationEllipsisProps) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <WavesIcon size={16} className="text-muted-foreground" />
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
