'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'
import { UserIcon } from '@/registry/new-york/icons'

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

export interface AvatarImageProps extends React.ComponentProps<typeof AvatarPrimitive.Image> {}

function AvatarImage({ className, ...props }: AvatarImageProps) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

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
        <div className="bg-muted-foreground/30 relative flex size-7 items-center justify-center overflow-hidden rounded-full">
          <UserIcon size={28} className="text-muted-foreground/60" />
        </div>
      )}
    </AvatarPrimitive.Fallback>
  )
}

export { Avatar, AvatarImage, AvatarFallback }
