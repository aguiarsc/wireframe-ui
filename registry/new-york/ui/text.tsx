import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { getResponsiveClasses, getHideOnClasses } from '@/registry/new-york/lib/wireframe-utils'
import type {
  WireframeAnimation,
  WireframeEmphasis,
  ResponsiveProps,
} from '@/registry/new-york/lib/wireframe-types'

const textVariants = cva('rounded-full inline-block align-middle', {
  variants: {
    size: {
      xs: 'h-2',
      sm: 'h-3',
      base: 'h-3.5',
      lg: 'h-4',
      xl: 'h-5',
    },
    width: {
      xs: 'w-16',
      sm: 'w-24',
      md: 'w-32',
      lg: 'w-48',
      xl: 'w-64',
      full: 'w-full',
    },
    color: {
      default: 'bg-muted-foreground/20',
      muted: 'bg-muted-foreground/10',
      subtle: 'bg-muted-foreground/15',
      primary: 'bg-primary/20',
      secondary: 'bg-secondary/30',
      accent: 'bg-accent/50',
    },
    animate: {
      none: '',
      pulse: 'animate-pulse',
      shimmer: 'wireframe-animate-shimmer',
      typing: 'wireframe-animate-typing',
    },
    emphasis: {
      primary: 'wireframe-emphasis-primary',
      secondary: 'wireframe-emphasis-secondary',
      tertiary: 'wireframe-emphasis-tertiary',
      subtle: 'wireframe-emphasis-subtle',
    },
    truncate: {
      true: '!w-full',
      false: '',
    },
  },
  compoundVariants: [
    { truncate: true, width: 'xs', class: 'max-w-16' },
    { truncate: true, width: 'sm', class: 'max-w-24' },
    { truncate: true, width: 'md', class: 'max-w-32' },
    { truncate: true, width: 'lg', class: 'max-w-48' },
    { truncate: true, width: 'xl', class: 'max-w-64' },
    { truncate: true, width: 'full', class: 'max-w-full' },
  ],
  defaultVariants: {
    size: 'base',
    width: 'md',
    color: 'default',
    animate: 'none',
    truncate: false,
  },
})

/**
 * Props for the Text component - the foundation of all wireframe components.
 * Renders a skeleton text placeholder as an animated line.
 */
export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    Omit<VariantProps<typeof textVariants>, 'animate' | 'emphasis'> {
  /**
   * Height of the text line
   * @default 'base'
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  /**
   * Width of the text line
   * @default 'md'
   */
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /**
   * Color variant of the text line
   * @default 'default'
   */
  color?: 'default' | 'muted' | 'subtle' | 'primary' | 'secondary' | 'accent'
  /**
   * Whether to truncate the text with max-width
   * @default false
   */
  truncate?: boolean
  /**
   * Animation variant for the text line
   * @default 'none'
   */
  animate?: WireframeAnimation
  /**
   * Visual emphasis level (overrides color when set)
   */
  emphasis?: WireframeEmphasis
  /**
   * Responsive size and width values for different breakpoints
   * @example
   * ```tsx
   * <Text responsive={{ base: { size: 'sm' }, md: { size: 'lg' } }} />
   * ```
   */
  responsive?: ResponsiveProps<{
    size?: NonNullable<VariantProps<typeof textVariants>['size']>
    width?: NonNullable<VariantProps<typeof textVariants>['width']>
  }>
  /**
   * Breakpoints where the text should be hidden
   * @example ['sm', 'md'] - hides on small and medium screens
   */
  hideOn?: ('sm' | 'md' | 'lg' | 'xl')[]
}

const TextComponent = React.forwardRef<HTMLSpanElement, TextProps>(
  (
    { className, size, width, color, animate, emphasis, truncate, responsive, hideOn, ...props },
    ref
  ) => {
    // Emphasis takes priority over color when both are provided
    const finalColor = emphasis ? undefined : color

    // Generate responsive classes
    const responsiveClasses = getResponsiveClasses(responsive)
    const hideOnClasses = getHideOnClasses(hideOn)

    return (
      <span
        ref={ref}
        data-slot="text"
        className={cn(
          textVariants({
            size,
            width,
            color: finalColor,
            animate,
            emphasis,
            truncate,
          }),
          responsiveClasses,
          hideOnClasses,
          className
        )}
        {...props}
      />
    )
  }
)

TextComponent.displayName = 'Text'

// Semantic preset components
const TextHeading = React.forwardRef<HTMLSpanElement, Omit<TextProps, 'size' | 'width'>>(
  (props, ref) => <TextComponent ref={ref} size="xl" width="lg" {...props} />
)
TextHeading.displayName = 'TextHeading'

const TextParagraph = React.forwardRef<HTMLSpanElement, Omit<TextProps, 'size' | 'width'>>(
  (props, ref) => <TextComponent ref={ref} size="base" width="full" {...props} />
)
TextParagraph.displayName = 'TextParagraph'

const TextCaption = React.forwardRef<HTMLSpanElement, Omit<TextProps, 'size' | 'color'>>(
  (props, ref) => <TextComponent ref={ref} size="sm" color="muted" {...props} />
)
TextCaption.displayName = 'TextCaption'

const TextLabel = React.forwardRef<HTMLSpanElement, Omit<TextProps, 'size' | 'width'>>(
  (props, ref) => <TextComponent ref={ref} size="sm" width="sm" {...props} />
)
TextLabel.displayName = 'TextLabel'

// Export as named exports (consistent with other components)
const Text = TextComponent

export { Text, TextHeading, TextParagraph, TextCaption, TextLabel, textVariants }
