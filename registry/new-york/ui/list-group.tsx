import * as React from 'react'

import { cn } from '@/lib/utils'
import { Text, type TextProps } from '@/registry/new-york/ui/text'
import type { WireframeSpacing } from '@/registry/new-york/lib/wireframe-types'

/**
 * Props for the ListGroup component.
 * Renders list items with Text placeholders for wireframe prototyping.
 */
export interface ListGroupProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * Number of list items to render
   * @default 3
   */
  items?: number
  /**
   * List marker style
   * @default 'bullet'
   */
  variant?: 'bullet' | 'number' | 'none'
  /**
   * Height of each text line
   * @default 'base'
   */
  size?: TextProps['size']
  /**
   * Width of each text line
   * @default 'lg'
   */
  itemWidth?: TextProps['width']
  /**
   * Vertical spacing between items
   * @default 'normal'
   */
  spacing?: WireframeSpacing
}

const ListGroup = React.forwardRef<HTMLUListElement, ListGroupProps>(
  (
    {
      items = 3,
      variant = 'bullet',
      size = 'base',
      itemWidth = 'lg',
      spacing = 'normal',
      className,
      ...props
    },
    ref
  ) => {
    const spacingMap: Record<WireframeSpacing, string> = {
      tight: 'gap-1',
      normal: 'gap-2',
      relaxed: 'gap-3',
    }

    return (
      <ul
        ref={ref}
        data-slot="list-group"
        className={cn('flex list-none flex-col', spacingMap[spacing], className)}
        {...props}
      >
        {Array.from({ length: items }).map((_, i) => (
          <li key={i} className="flex items-center gap-2">
            {variant === 'bullet' && (
              <span className="wireframe-line size-1.5 shrink-0 rounded-full" />
            )}
            {variant === 'number' && (
              <span className="wireframe-line h-3 w-3 shrink-0 rounded-sm" />
            )}
            <Text size={size} width={itemWidth} />
          </li>
        ))}
      </ul>
    )
  }
)

ListGroup.displayName = 'ListGroup'

export { ListGroup }
