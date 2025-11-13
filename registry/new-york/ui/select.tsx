'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

import { cn } from '@/lib/utils'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

/**
 * Props for the Select component.
 * Displays a list of options for the user to pick from with keyboard navigation support.
 */
export interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
  /**
   * Current selected value (controlled)
   */
  value?: string
  /**
   * Default selected value (uncontrolled)
   */
  defaultValue?: string
  /**
   * Callback fired when the selected value changes
   */
  onValueChange?: (value: string) => void
  /**
   * Whether the select is open
   */
  open?: boolean
  /**
   * Default open state (uncontrolled)
   */
  defaultOpen?: boolean
  /**
   * Callback fired when the open state changes
   */
  onOpenChange?: (open: boolean) => void
}

function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

/**
 * Props for the SelectGroup component.
 * Groups related select items together.
 */
export interface SelectGroupProps extends React.ComponentProps<typeof SelectPrimitive.Group> {}

function SelectGroup({ ...props }: SelectGroupProps) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

/**
 * Props for the SelectValue component.
 * Displays the currently selected value.
 */
export interface SelectValueProps extends React.ComponentProps<typeof SelectPrimitive.Value> {
  /**
   * Placeholder text when no value is selected
   */
  placeholder?: string
}

function SelectValue({ ...props }: SelectValueProps) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

/**
 * Props for the SelectTrigger component.
 * Button that opens the select dropdown.
 */
export interface SelectTriggerProps extends React.ComponentProps<typeof SelectPrimitive.Trigger> {
  /**
   * Size variant
   * @default 'default'
   */
  size?: 'sm' | 'default'
}

function SelectTrigger({ className, size = 'default', children, ...props }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

/**
 * Props for the SelectContent component.
 * Container for select items.
 */
export interface SelectContentProps extends React.ComponentProps<typeof SelectPrimitive.Content> {
  /**
   * Positioning strategy
   * @default 'popper'
   */
  position?: 'item-aligned' | 'popper'
  /**
   * Alignment relative to the trigger
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end'
}

function SelectContent({
  className,
  children,
  position = 'popper',
  align = 'center',
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

/**
 * Props for the SelectLabel component.
 * Label for a group of select items.
 */
export interface SelectLabelProps extends React.ComponentProps<typeof SelectPrimitive.Label> {}

function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}

/**
 * Props for the SelectItem component.
 * An individual selectable option.
 */
export interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {
  /**
   * Unique value for this option
   */
  value: string
  /**
   * Whether the item is disabled
   * @default false
   */
  disabled?: boolean
}

function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

/**
 * Props for the SelectSeparator component.
 * Visual separator between select items.
 */
export interface SelectSeparatorProps
  extends React.ComponentProps<typeof SelectPrimitive.Separator> {}

function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

export interface SelectScrollUpButtonProps
  extends React.ComponentProps<typeof SelectPrimitive.ScrollUpButton> {}

function SelectScrollUpButton({ className, ...props }: SelectScrollUpButtonProps) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  )
}

export interface SelectScrollDownButtonProps
  extends React.ComponentProps<typeof SelectPrimitive.ScrollDownButton> {}

function SelectScrollDownButton({ className, ...props }: SelectScrollDownButtonProps) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
