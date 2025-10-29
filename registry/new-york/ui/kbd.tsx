import { cn } from '@/lib/utils'

export interface KbdProps extends React.ComponentProps<'kbd'> {}

function Kbd({ className, ...props }: KbdProps) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'bg-card text-muted-foreground border-input pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded border px-1 font-sans text-xs font-medium shadow-xs select-none',
        "[&_svg:not([class*='size-'])]:size-3",
        '[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10',
        className
      )}
      {...props}
    />
  )
}

export interface KbdGroupProps extends React.ComponentProps<'div'> {}

function KbdGroup({ className, ...props }: KbdGroupProps) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }
