'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

/**
 * Props for the Slider component.
 * An input where the user selects a value from within a given range.
 */
export interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  /**
   * Current value(s) of the slider (controlled)
   */
  value?: number[]
  /**
   * Default value(s) of the slider (uncontrolled)
   */
  defaultValue?: number[]
  /**
   * Callback fired when the value changes
   */
  onValueChange?: (value: number[]) => void
  /**
   * Minimum value
   * @default 0
   */
  min?: number
  /**
   * Maximum value
   * @default 100
   */
  max?: number
  /**
   * Step increment
   * @default 1
   */
  step?: number
  /**
   * Orientation of the slider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Whether the slider is disabled
   * @default false
   */
  disabled?: boolean
}

function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }: SliderProps) {
  const _values = React.useMemo(
    () => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]),
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          'bg-card border-input relative grow overflow-hidden rounded-full border data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            'bg-muted-foreground absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-input ring-ring/50 bg-muted-foreground block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }
