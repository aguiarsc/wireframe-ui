'use client'

import * as React from 'react'
import { ComponentGrid } from './component-grid'
import type { SearchableComponent } from '@/hooks/use-component-search'

interface ComponentGridWrapperProps {
  components: SearchableComponent[]
  children: React.ReactNode
}

export function ComponentGridWrapper({ components, children }: ComponentGridWrapperProps) {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ComponentGrid components={components}>{children}</ComponentGrid>
    </React.Suspense>
  )
}
