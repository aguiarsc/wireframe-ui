'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { AlignCenterIcon } from '@/registry/new-york/icons'

/**
 * Default maximum length for skeleton input text
 */
const DEFAULT_SKELETON_MAX_LENGTH = 20

/**
 * Width calculation thresholds for skeleton input
 */
const WIDTH_THRESHOLD_SMALL = 5
const WIDTH_THRESHOLD_MEDIUM = 10
const WIDTH_THRESHOLD_LARGE = 15

export interface InputProps extends React.ComponentProps<'input'> {
  /**
   * Visual variant of the input
   * @default 'default'
   */
  variant?: 'default' | 'wireframe'
  /**
   * Maximum character length for skeleton mode
   * @default 20
   */
  skeletonMaxLength?: number
  skeletonIcon?: React.ReactNode
}

function Input({
  className,
  type,
  variant = 'default',
  skeletonMaxLength = DEFAULT_SKELETON_MAX_LENGTH,
  skeletonIcon,
  ...props
}: InputProps) {
  const [value, setValue] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)

  const isSkeletonMode = variant === 'wireframe'

  // Calculate width based on input length
  const getSkeletonWidth = () => {
    if (value.length === 0) return 'w-48'
    if (value.length < WIDTH_THRESHOLD_SMALL) return 'w-16'
    if (value.length < WIDTH_THRESHOLD_MEDIUM) return 'w-24'
    if (value.length < WIDTH_THRESHOLD_LARGE) return 'w-32'
    return 'w-48'
  }

  const showSkeleton = isSkeletonMode && !isFocused && value.length === 0
  const showTypingSkeleton = isSkeletonMode && value.length > 0 && value.length <= skeletonMaxLength

  if (isSkeletonMode) {
    return (
      <div className="relative w-full">
        <input
          type={type}
          data-slot="input"
          className={cn(
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            'text-transparent caret-transparent',
            skeletonIcon ? 'pl-10' : '',
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
        <div className="pointer-events-none absolute inset-0 flex items-center gap-2 px-3">
          <div className="pointer-events-auto">
            {skeletonIcon || <AlignCenterIcon size={16} className="text-muted-foreground" />}
          </div>
          {showSkeleton && <span className="wireframe-line h-3.5 w-48" />}
          {showTypingSkeleton && (
            <span
              className={cn('wireframe-line h-3.5 transition-all duration-200', getSkeletonWidth())}
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}

export { Input }
