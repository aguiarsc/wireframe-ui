import * as React from 'react'

import { cn } from '@/lib/utils'
import { Text, type TextProps } from '@/registry/new-york/ui/text'

export interface ParagraphProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
  lines?: number
  lastLineWidth?: TextProps['width']
  size?: TextProps['size']
  color?: TextProps['color']
  emphasis?: TextProps['emphasis']
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
