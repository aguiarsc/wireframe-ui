/**
 * Wireframe Type Definitions
 *
 * TypeScript type definitions for wireframe components.
 * These types are used across the wireframe-ui component library.
 */

import type { VariantProps } from 'class-variance-authority'
import type React from 'react'

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
export type WireframeColor = 'default' | 'muted' | 'subtle' | 'primary' | 'secondary' | 'accent'

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
 * Runtime constant arrays for variant types
 * Useful for validation and iteration
 */
export const WIREFRAME_SIZES = ['xs', 'sm', 'base', 'lg', 'xl'] as const
export const WIREFRAME_WIDTHS = ['xs', 'sm', 'md', 'lg', 'xl', 'full'] as const
export const WIREFRAME_COLORS = [
  'default',
  'muted',
  'subtle',
  'primary',
  'secondary',
  'accent',
] as const
export const WIREFRAME_ANIMATIONS = ['none', 'pulse', 'shimmer', 'typing'] as const
export const WIREFRAME_EMPHASIS = ['primary', 'secondary', 'tertiary', 'subtle'] as const

/**
 * Responsive props interface for breakpoint-based styling
 * Allows components to accept different prop values at different breakpoints
 *
 * @example
 * ```tsx
 * <Text responsive={{ base: { size: 'sm' }, md: { size: 'lg' } }} />
 * ```
 */
export interface ResponsiveProps<T extends Record<string, unknown>> {
  base?: Partial<T>
  sm?: Partial<T>
  md?: Partial<T>
  lg?: Partial<T>
  xl?: Partial<T>
}

/**
 * Helper type for creating responsive prop values
 * Allows a value to be either a direct value or a responsive object
 */
export type ResponsiveValue<T> = T | ResponsiveProps<Record<string, T>>

/**
 * Responsive size props interface
 */
export interface ResponsiveSizeProps {
  size?: WireframeSize
}

/**
 * Responsive width props interface
 */
export interface ResponsiveWidthProps {
  width?: WireframeWidth
}

/**
 * Responsive dimension props interface
 * Combines size and width props
 */
export interface ResponsiveDimensionProps extends ResponsiveSizeProps, ResponsiveWidthProps {}

/**
 * Extract variant props from CVA variant function
 */
export type ExtractVariantProps<T> = T extends (...args: any[]) => any ? VariantProps<T> : never

/**
 * Merge two prop types, with the second type taking precedence
 */
export type MergeProps<T, U> = Omit<T, keyof U> & U

/**
 * Make specific properties optional
 */
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/**
 * Make specific properties required
 */
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>

/**
 * Polymorphic component props
 * Allows components to render as different elements via the 'as' prop
 */
export type PolymorphicProps<E extends React.ElementType, P = {}> = P &
  Omit<React.ComponentPropsWithoutRef<E>, keyof P> & {
    as?: E
  }

/**
 * Type guard to check if a value is a valid WireframeSize
 */
export function isWireframeSize(value: unknown): value is WireframeSize {
  return typeof value === 'string' && WIREFRAME_SIZES.includes(value as WireframeSize)
}

/**
 * Type guard to check if a value is a valid Breakpoint
 */
export function isBreakpoint(value: unknown): value is Breakpoint {
  return typeof value === 'string' && ['base', 'sm', 'md', 'lg', 'xl'].includes(value)
}
