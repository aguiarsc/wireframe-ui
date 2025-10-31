'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@/lib/utils'
import { XMarkIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'

export interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {}

function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

export interface DialogTriggerProps extends React.ComponentProps<typeof DialogPrimitive.Trigger> {}

function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

export interface DialogPortalProps extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

function DialogPortal({ ...props }: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

export interface DialogCloseProps extends React.ComponentProps<typeof DialogPrimitive.Close> {}

function DialogClose({ ...props }: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

export interface DialogOverlayProps extends React.ComponentProps<typeof DialogPrimitive.Overlay> {}

function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className
      )}
      {...props}
    />
  )
}

export interface DialogContentProps extends React.ComponentProps<typeof DialogPrimitive.Content> {
  showCloseButton?: boolean
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XMarkIcon className="size-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

export interface DialogHeaderProps extends React.ComponentProps<'div'> {}

function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

export interface DialogFooterProps extends React.ComponentProps<'div'> {}

function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

export interface DialogTitleProps extends React.ComponentProps<typeof DialogPrimitive.Title> {}

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

export interface DialogDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description> {}

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

// Wireframe helper component
export interface DialogWireframeExampleProps {
  triggerIcon?: React.ReactNode
  triggerText?: string
  titleWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  descriptionWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

function DialogWireframeExample({
  triggerIcon,
  triggerText,
  titleWidth = 'md',
  descriptionWidth = 'full',
}: DialogWireframeExampleProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {triggerIcon || <ChatBubbleLeftEllipsisIcon className="text-muted-foreground size-5" />}
          <Text width="sm" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <Text width={titleWidth} />
          </DialogTitle>
          <DialogDescription className="space-y-2">
            <Text width={descriptionWidth} color="muted" className="block" />
            <Text width="lg" color="muted" className="block" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DialogWireframeExample,
}
