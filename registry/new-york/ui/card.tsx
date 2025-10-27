import * as React from 'react'

import { cn } from '@/lib/utils'

interface CardProps extends React.ComponentProps<'div'> {
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

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
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

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
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

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
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
