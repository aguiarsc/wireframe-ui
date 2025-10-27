'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  /**
   * Visual variant of the textarea
   * @default 'default'
   */
  variant?: 'default' | 'wireframe'
  /**
   * @deprecated Use variant="wireframe" instead
   */
  skeleton?: boolean
  skeletonMaxLength?: number
  skeletonLines?: number
}

function Textarea({
  className,
  variant = 'default',
  skeleton = false,
  skeletonMaxLength = 100,
  skeletonLines = 3,
  ...props
}: TextareaProps) {
  const [value, setValue] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)

  // variant="wireframe" sets skeleton mode, maintaining backward compatibility
  const isSkeletonMode = variant === 'wireframe' || skeleton

  // Calculate how many lines to show based on character count
  const getVisibleLines = () => {
    if (value.length === 0) return skeletonLines
    const charsPerLine = 40
    return Math.min(Math.ceil(value.length / charsPerLine), skeletonLines)
  }

  // Calculate width for the last line
  const getLastLineWidth = () => {
    const charsPerLine = 40
    const remainder = value.length % charsPerLine
    if (remainder === 0) return 'w-full'
    if (remainder < 10) return 'w-16'
    if (remainder < 20) return 'w-32'
    if (remainder < 30) return 'w-48'
    return 'w-64'
  }

  const showSkeleton = isSkeletonMode && !isFocused && value.length === 0
  const showTypingSkeleton = isSkeletonMode && value.length > 0 && value.length <= skeletonMaxLength

  if (isSkeletonMode) {
    return (
      <div className="relative w-full">
        <textarea
          data-slot="textarea"
          className={cn(
            'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'resize-none text-transparent caret-transparent',
            className
          )}
          value={value}
          onChange={(e) => {
            if (e.target.value.length <= skeletonMaxLength) {
              setValue(e.target.value)
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          maxLength={skeletonMaxLength}
          {...props}
        />
        <div className="pointer-events-none absolute inset-0 flex flex-col gap-2 p-3">
          {showSkeleton &&
            Array.from({ length: skeletonLines }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'wireframe-line h-3.5',
                  i === skeletonLines - 1 ? 'w-3/4' : 'w-full'
                )}
              />
            ))}
          {showTypingSkeleton &&
            Array.from({ length: getVisibleLines() }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'wireframe-line h-3.5 transition-all duration-200',
                  i === getVisibleLines() - 1 ? getLastLineWidth() : 'w-full'
                )}
              />
            ))}
        </div>
      </div>
    )
  }

  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
