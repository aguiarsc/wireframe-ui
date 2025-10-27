/**
 * Wireframe Type Definitions
 * 
 * TypeScript type definitions for wireframe components.
 * These types are used across the wireframe-ui component library.
 */

/**
 * Size variants for wireframe elements
 */
export type WireframeSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'

/**
 * Width variants for wireframe elements
 */
export type WireframeWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

/**
 * Color variants for wireframe elements
 */
export type WireframeColor =
  | 'default'
  | 'muted'
  | 'subtle'
  | 'primary'
  | 'secondary'
  | 'accent'

/**
 * Animation variants for wireframe elements
 */
export type WireframeAnimation = 'none' | 'pulse' | 'shimmer' | 'typing'

/**
 * Emphasis hierarchy for wireframe elements
 * Provides visual weight without relying on semantic color meanings
 */
export type WireframeEmphasis = 'primary' | 'secondary' | 'tertiary' | 'subtle'

/**
 * Spacing variants for composition components
 */
export type WireframeSpacing = 'tight' | 'normal' | 'relaxed'

/**
 * Direction variants for layout components
 */
export type WireframeDirection = 'vertical' | 'horizontal'

/**
 * Breakpoint keys for responsive utilities
 */
export type Breakpoint = 'base' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * Responsive props interface for breakpoint-based styling
 * Allows components to accept different prop values at different breakpoints
 * 
 * @example
 * ```tsx
 * <Text responsive={{ base: { size: 'sm' }, md: { size: 'lg' } }} />
 * ```
 */
export interface ResponsiveProps<T = Record<string, any>> {
  base?: Partial<T>
  sm?: Partial<T>
  md?: Partial<T>
  lg?: Partial<T>
  xl?: Partial<T>
}
