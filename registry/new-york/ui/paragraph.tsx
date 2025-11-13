import * as React from 'react'

import { cn } from '@/lib/utils'
import { Text, type TextProps } from '@/registry/new-york/ui/text'

/**
 * Props for the Paragraph component.
 * Renders multiple Text lines to simulate paragraph content.
 */
export interface ParagraphProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  /**
   * Number of text lines to render
   * @default 3
   */
  lines?: number
  /**
   * Width of the last line (typically shorter than full width)
   * @default 'lg'
   */
  lastLineWidth?: TextProps['width']
  /**
   * Height of each text line
   * @default 'base'
   */
  size?: TextProps['size']
  /**
   * Color variant for all lines
   */
  color?: TextProps['color']
  /**
   * Visual emphasis level for all lines
   */
  emphasis?: TextProps['emphasis']
  /**
   * Vertical spacing between lines
   * @default 'normal'
   */
  spacing?: 'tight' | 'normal' | 'relaxed'
}

const Paragraph = React.forwardRef<HTMLDivElement, ParagraphProps>(
  (
    {
      lines = 3,
      lastLineWidth = 'lg',
      size = 'base',
      color,
      emphasis,
      spacing = 'normal',
      className,
      ...props
    },
    ref
  ) => {
    const spacingMap = {
      tight: 'gap-1',
      normal: 'gap-2',
      relaxed: 'gap-3',
    }

    return (
      <div
        ref={ref}
        data-slot="paragraph"
        className={cn('flex flex-col', spacingMap[spacing], className)}
        {...props}
      >
        {Array.from({ length: lines }).map((_, i) => (
          <Text
            key={i}
            size={size}
            width={i === lines - 1 ? lastLineWidth : 'full'}
            color={color}
            emphasis={emphasis}
          />
        ))}
      </div>
    )
  }
)

Paragraph.displayName = 'Paragraph'

export { Paragraph }
