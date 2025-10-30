'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Default maximum length for skeleton textarea text
 */
const DEFAULT_SKELETON_MAX_LENGTH = 100

/**
 * Default number of skeleton lines to display
 */
const DEFAULT_SKELETON_LINES = 3

/**
 * Approximate characters per line for width calculations
 */
const CHARS_PER_LINE = 40

/**
 * Width calculation thresholds for last line
 */
const LAST_LINE_WIDTH_THRESHOLD_SMALL = 10
const LAST_LINE_WIDTH_THRESHOLD_MEDIUM = 20
const LAST_LINE_WIDTH_THRESHOLD_LARGE = 30

export interface TextareaProps extends React.ComponentProps<'textarea'> {
  /**
   * Visual variant of the textarea
   * @default 'default'
   */
  variant?: 'default' | 'wireframe'
  /**
   * Maximum character length for skeleton mode
   * @default 100
   */
  skeletonMaxLength?: number
  /**
   * Number of skeleton lines to display
   * @default 3
   */
  skeletonLines?: number
}

function Textarea({
  className,
  variant = 'default',
  skeletonMaxLength = DEFAULT_SKELETON_MAX_LENGTH,
  skeletonLines = DEFAULT_SKELETON_LINES,
  ...props
}: TextareaProps) {
  const [value, setValue] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)

  const isSkeletonMode = variant === 'wireframe'

  // Calculate how many lines to show based on character count
  const getVisibleLines = () => {
    if (value.length === 0) return skeletonLines
    return Math.min(Math.ceil(value.length / CHARS_PER_LINE), skeletonLines)
  }

  // Calculate width for the last line
  const getLastLineWidth = () => {
    const remainder = value.length % CHARS_PER_LINE
    if (remainder === 0) return 'w-full'
    if (remainder < LAST_LINE_WIDTH_THRESHOLD_SMALL) return 'w-16'
    if (remainder < LAST_LINE_WIDTH_THRESHOLD_MEDIUM) return 'w-32'
    if (remainder < LAST_LINE_WIDTH_THRESHOLD_LARGE) return 'w-48'
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
                className={cn('wireframe-line h-3.5', i === skeletonLines - 1 ? 'w-3/4' : 'w-full')}
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
