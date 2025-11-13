'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'
import { UserIcon } from '@heroicons/react/24/outline'

/**
 * Props for the Avatar component.
 * An image element with a fallback for representing the user.
 */
export interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {}

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'bg-muted-foreground/15 relative flex size-12 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    />
  )
}

/**
 * Props for the AvatarImage component.
 * The image displayed within the avatar.
 */
export interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {
  /**
   * Source URL of the avatar image
   */
  src?: string
  /**
   * Alternative text for the image
   */
  alt?: string
}

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

/**
 * Props for the AvatarFallback component.
 * Fallback content displayed when the avatar image fails to load.
 */
export interface AvatarFallbackProps
  extends React.ComponentProps<typeof AvatarPrimitive.Fallback> {}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-transparent',
        className
      )}
      {...props}
    >
      {props.children || (
        <div className="bg-muted-foreground/30 relative flex size-6 items-center justify-center overflow-hidden rounded-full">
          <UserIcon className="text-muted-foreground/60" />
        </div>
      )}
    </AvatarPrimitive.Fallback>
  )
}

export { Avatar, AvatarImage, AvatarFallback }
