'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Text } from '@/registry/new-york/ui/text'

export interface TableProps extends React.ComponentProps<'table'> {}

function Table({ className, ...props }: TableProps) {
  return (
    <div data-slot="table-container" className="scrollbar-hide relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

export interface TableHeaderProps extends React.ComponentProps<'thead'> {}

function TableHeader({ className, ...props }: TableHeaderProps) {
  return <thead data-slot="table-header" className={cn('[&_tr]:border-b', className)} {...props} />
}

export interface TableBodyProps extends React.ComponentProps<'tbody'> {}

function TableBody({ className, ...props }: TableBodyProps) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

export interface TableFooterProps extends React.ComponentProps<'tfoot'> {}

function TableFooter({ className, ...props }: TableFooterProps) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  )
}

export interface TableRowProps extends React.ComponentProps<'tr'> {}

function TableRow({ className, ...props }: TableRowProps) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className
      )}
      {...props}
    />
  )
}

export interface TableHeadProps extends React.ComponentProps<'th'> {}

function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

export interface TableCellProps extends React.ComponentProps<'td'> {}

function TableCell({ className, ...props }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-[2px]',
        className
      )}
      {...props}
    />
  )
}

export interface TableCaptionProps extends React.ComponentProps<'caption'> {}

function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

// Wireframe helper component for table cells
function TableCellWireframe({
  width = 'md',
  className,
  ...props
}: React.ComponentProps<'td'> & {
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}) {
  return (
    <TableCell className={className} {...props}>
      <Text width={width} />
    </TableCell>
  )
}

// Wireframe helper component for table headers
function TableHeadWireframe({
  width = 'sm',
  className,
  ...props
}: React.ComponentProps<'th'> & {
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}) {
  return (
    <TableHead className={className} {...props}>
      <Text width={width} emphasis="secondary" />
    </TableHead>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableCellWireframe,
  TableHeadWireframe,
}
