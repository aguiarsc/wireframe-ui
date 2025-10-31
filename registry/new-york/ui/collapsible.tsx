'use client'

import * as React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'

export interface CollapsibleProps extends React.ComponentProps<typeof CollapsiblePrimitive.Root> {}

function Collapsible({ ...props }: CollapsibleProps) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

export interface CollapsibleTriggerProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger> {}

function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />
}

export interface CollapsibleContentProps
  extends React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent> {}

function CollapsibleContent({ ...props }: CollapsibleContentProps) {
  return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />
}

// Wireframe helper component
export interface CollapsibleWireframeExampleProps {
  triggerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  contentWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

function CollapsibleWireframeExample({
  triggerWidth = 'sm',
  contentWidth = 'full',
}: CollapsibleWireframeExampleProps) {
  return (
    <Collapsible className="w-full">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <Text width={triggerWidth} />
          <ChevronDownIcon className="text-muted-foreground" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="border-input bg-card rounded-lg border p-3">
          <Text width={contentWidth} color="muted" />
        </div>
        <div className="border-input bg-card rounded-lg border p-3">
          <Text width="lg" color="muted" />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleWireframeExample }
