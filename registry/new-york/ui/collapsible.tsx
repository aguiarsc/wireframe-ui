'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

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

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
