import * as React from 'react'

import { Text, type TextProps } from '@/registry/new-york/ui/text'
import { cn } from '@/lib/utils'

export interface HeadingProps extends Omit<TextProps, 'size' | 'width'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
}

const Heading = React.forwardRef<HTMLElement, HeadingProps>(
  ({ level = 1, as, className, ...props }, ref) => {
    // Map heading levels to appropriate text sizes
    const sizeMap = {
      1: 'xl' as const,
      2: 'lg' as const,
      3: 'lg' as const,
      4: 'base' as const,
      5: 'sm' as const,
      6: 'sm' as const,
    }

    // Map heading levels to appropriate widths
    const widthMap = {
      1: 'lg' as const,
      2: 'lg' as const,
      3: 'md' as const,
      4: 'md' as const,
      5: 'sm' as const,
      6: 'sm' as const,
    }

    // Use the 'as' prop if provided, otherwise default to the semantic heading tag
    const Component = (as || `h${level}`) as React.ElementType

    return (
      <Component ref={ref} className={cn(className)}>
        <Text size={sizeMap[level]} width={widthMap[level]} {...props} />
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

export { Heading }
