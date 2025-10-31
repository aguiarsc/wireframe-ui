'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'
import { RectangleStackIcon } from '@heroicons/react/24/outline'
import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'

export type DrawerProps = React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root>

function Drawer(props: DrawerProps) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

export interface DrawerTriggerProps extends React.ComponentProps<typeof DrawerPrimitive.Trigger> {}

function DrawerTrigger({ ...props }: DrawerTriggerProps) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

export interface DrawerPortalProps extends React.ComponentProps<typeof DrawerPrimitive.Portal> {}

function DrawerPortal({ ...props }: DrawerPortalProps) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

export interface DrawerCloseProps extends React.ComponentProps<typeof DrawerPrimitive.Close> {}

function DrawerClose({ ...props }: DrawerCloseProps) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

export interface DrawerOverlayProps extends React.ComponentProps<typeof DrawerPrimitive.Overlay> {}

function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  )
}

export interface DrawerContentProps extends React.ComponentProps<typeof DrawerPrimitive.Content> {}

function DrawerContent({ className, children, ...props }: DrawerContentProps) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

export interface DrawerHeaderProps extends React.ComponentProps<'div'> {}

function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className
      )}
      {...props}
    />
  )
}

export interface DrawerFooterProps extends React.ComponentProps<'div'> {}

function DrawerFooter({ className, ...props }: DrawerFooterProps) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

export interface DrawerTitleProps extends React.ComponentProps<typeof DrawerPrimitive.Title> {}

function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

export interface DrawerDescriptionProps
  extends React.ComponentProps<typeof DrawerPrimitive.Description> {}

function DrawerDescription({ className, ...props }: DrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

// Wireframe helper component
export interface DrawerWireframeExampleProps {
  triggerIcon?: React.ReactNode
  titleWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  descriptionWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

function DrawerWireframeExample({
  triggerIcon,
  titleWidth = 'md',
  descriptionWidth = 'lg',
}: DrawerWireframeExampleProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          {triggerIcon || <RectangleStackIcon className="text-muted-foreground size-5" />}
          <Text width="sm" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <Text width={titleWidth} />
          </DrawerTitle>
          <DrawerDescription>
            <Text width={descriptionWidth} color="muted" className="block" />
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">
              <Text width="xs" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerWireframeExample,
}
