import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * Props for the Card component.
 * A container for displaying content with header, footer, and action sections.
 */
export interface CardProps extends React.ComponentProps<'div'> {
  /**
   * Wireframe spacing preset
   * - 'compact': Minimal padding and gaps
   * - 'detailed': Generous padding and gaps
   * - 'none': Default spacing
   * @default 'none'
   */
  wireframe?: 'compact' | 'detailed' | 'none'
}

const CardContext = React.createContext<{ wireframe: 'compact' | 'detailed' | 'none' }>({
  wireframe: 'none',
})

function Card({ className, wireframe = 'none', ...props }: CardProps) {
  const wireframeStyles = {
    compact: 'gap-3 py-3',
    detailed: 'gap-8 py-8',
    none: 'gap-6 py-6',
  }

  return (
    <CardContext.Provider value={{ wireframe }}>
      <div
        data-slot="card"
        className={cn(
          'bg-card text-card-foreground flex flex-col rounded-xl border shadow-sm',
          wireframeStyles[wireframe],
          className
        )}
        {...props}
      />
    </CardContext.Provider>
  )
}

/**
 * Props for the CardHeader component.
 * Container for card title, description, and optional action.
 */
export interface CardHeaderProps extends React.ComponentProps<'div'> {}

function CardHeader({ className, ...props }: CardHeaderProps) {
  const { wireframe } = React.useContext(CardContext)

  const wireframePadding = {
    compact: 'px-3 [.border-b]:pb-3',
    detailed: 'px-8 [.border-b]:pb-8',
    none: 'px-6 [.border-b]:pb-6',
  }

  const wireframeGap = {
    compact: 'gap-1',
    detailed: 'gap-2',
    none: 'gap-1.5',
  }

  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start has-data-[slot=card-action]:grid-cols-[1fr_auto]',
        wireframePadding[wireframe],
        wireframeGap[wireframe],
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the CardTitle component.
 * Displays the card's main heading.
 */
export interface CardTitleProps extends React.ComponentProps<'div'> {}

function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

/**
 * Props for the CardDescription component.
 * Displays supporting text below the card title.
 */
export interface CardDescriptionProps extends React.ComponentProps<'div'> {}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

/**
 * Props for the CardAction component.
 * Container for action buttons or icons in the card header.
 */
export interface CardActionProps extends React.ComponentProps<'div'> {}

function CardAction({ className, ...props }: CardActionProps) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

/**
 * Props for the CardContent component.
 * Main content area of the card.
 */
export interface CardContentProps extends React.ComponentProps<'div'> {}

function CardContent({ className, ...props }: CardContentProps) {
  const { wireframe } = React.useContext(CardContext)

  const wireframePadding = {
    compact: 'px-3',
    detailed: 'px-8',
    none: 'px-6',
  }

  return (
    <div
      data-slot="card-content"
      className={cn(wireframePadding[wireframe], className)}
      {...props}
    />
  )
}

/**
 * Props for the CardFooter component.
 * Footer area for actions or additional information.
 */
export interface CardFooterProps extends React.ComponentProps<'div'> {}

function CardFooter({ className, ...props }: CardFooterProps) {
  const { wireframe } = React.useContext(CardContext)

  const wireframePadding = {
    compact: 'px-3 [.border-t]:pt-3',
    detailed: 'px-8 [.border-t]:pt-8',
    none: 'px-6 [.border-t]:pt-6',
  }

  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center', wireframePadding[wireframe], className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
