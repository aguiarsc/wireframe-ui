import * as React from 'react'

import { cn } from '@/lib/utils'
import { Heading } from '@/registry/new-york/ui/heading'
import { Paragraph } from '@/registry/new-york/ui/paragraph'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'hero' | 'content-two-column' | 'feature-grid' | 'custom'
  spacing?: 'tight' | 'normal' | 'relaxed'
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ variant = 'custom', spacing = 'normal', className, children, ...props }, ref) => {
    const spacingMap = {
      tight: 'gap-4',
      normal: 'gap-8',
      relaxed: 'gap-12',
    }

    if (variant === 'hero') {
      return (
        <section
          ref={ref}
          data-slot="section"
          data-variant="hero"
          className={cn('flex flex-col items-center text-center', spacingMap[spacing], className)}
          {...props}
        >
          <Heading level={1} />
          <Paragraph lines={2} size="lg" />
          <div className="flex gap-4">
            <div className="wireframe-block h-10 w-32" />
            <div className="wireframe-block h-10 w-32" />
          </div>
        </section>
      )
    }

    if (variant === 'content-two-column') {
      return (
        <section
          ref={ref}
          data-slot="section"
          data-variant="content-two-column"
          className={cn('grid grid-cols-1 md:grid-cols-2', spacingMap[spacing], className)}
          {...props}
        >
          <div className="flex flex-col gap-4">
            <Heading level={2} />
            <Paragraph lines={4} />
          </div>
          <div className="wireframe-block aspect-video" />
        </section>
      )
    }

    if (variant === 'feature-grid') {
      return (
        <section
          ref={ref}
          data-slot="section"
          data-variant="feature-grid"
          className={cn('grid grid-cols-1 md:grid-cols-3', spacingMap[spacing], className)}
          {...props}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="wireframe-block h-12 w-12" />
              <Heading level={3} />
              <Paragraph lines={2} size="sm" />
            </div>
          ))}
        </section>
      )
    }

    // Custom variant - flexible layout
    return (
      <section
        ref={ref}
        data-slot="section"
        data-variant="custom"
        className={cn(spacingMap[spacing], className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

export { Section }
