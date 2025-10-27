import type { ResponsiveProps } from '@/registry/new-york/lib/wireframe-types'

/**
 * Generates responsive CSS classes based on breakpoint objects
 * @param responsive - Object with breakpoint keys (base, sm, md, lg, xl) and prop values
 * @param propName - The CSS property name to generate classes for (e.g., 'w' for width, 'h' for height)
 * @returns Space-separated string of responsive classes
 */
export function getResponsiveClasses(
  responsive?: ResponsiveProps<Record<string, any>>,
  propName?: string
): string {
  if (!responsive) return ''

  const classes: string[] = []

  // Handle base (no prefix)
  if (responsive.base) {
    Object.entries(responsive.base).forEach(([key, value]) => {
      if (propName) {
        classes.push(`${propName}-${value}`)
      } else {
        classes.push(`${key}-${value}`)
      }
    })
  }

  // Handle breakpoints
  const breakpoints = ['sm', 'md', 'lg', 'xl'] as const
  breakpoints.forEach((breakpoint) => {
    if (responsive[breakpoint]) {
      Object.entries(responsive[breakpoint]!).forEach(([key, value]) => {
        if (propName) {
          classes.push(`${breakpoint}:${propName}-${value}`)
        } else {
          classes.push(`${breakpoint}:${key}-${value}`)
        }
      })
    }
  })

  return classes.join(' ')
}

/**
 * Generates CSS classes to hide elements at specific breakpoints
 * @param hideOn - Array of breakpoint names where the element should be hidden
 * @returns Space-separated string of hidden classes
 */
export function getHideOnClasses(hideOn?: ('sm' | 'md' | 'lg' | 'xl')[]): string {
  if (!hideOn || hideOn.length === 0) return ''

  return hideOn.map((breakpoint) => `${breakpoint}:hidden`).join(' ')
}
