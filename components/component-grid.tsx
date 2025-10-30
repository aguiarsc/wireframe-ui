'use client'

import * as React from 'react'
import { ComponentSearch } from './component-search'
import { useComponentSearch, type SearchableComponent } from '@/hooks/use-component-search'
import { Button } from '@/registry/new-york/ui/button'

interface ComponentGridProps {
  components: SearchableComponent[]
  children: React.ReactNode
}

export function ComponentGrid({ components, children }: ComponentGridProps) {
  const { query, setQuery, filteredComponents, hasResults } = useComponentSearch(components)
  const visibleComponents = React.useMemo(
    () => new Set(filteredComponents.map((c) => c.name)),
    [filteredComponents]
  )

  const childrenArray = React.Children.toArray(children)
  const filteredChildren = childrenArray.filter((child) => {
    if (React.isValidElement(child)) {
      const props = child.props as { name?: string }
      return props.name && visibleComponents.has(props.name)
    }
    return false
  })

  const enhancedChildren = filteredChildren.map((child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
        ...(child.props as object),
        searchQuery: query,
      })
    }
    return child
  })

  return (
    <>
      <section className="flex flex-col gap-4">
        <ComponentSearch value={query} onChange={setQuery} />
        {query && (
          <p className="text-muted-foreground text-sm">
            {hasResults
              ? `Found ${filteredComponents.length} component${filteredComponents.length === 1 ? '' : 's'}`
              : 'No components found'}
          </p>
        )}
      </section>

      <section>
        {!hasResults && query ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-12 text-center">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">No components found</h3>
              <p className="text-muted-foreground text-sm">
                Try adjusting your search query or browse all components
              </p>
            </div>
            <Button variant="outline" onClick={() => setQuery('')}>
              Clear search
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 *:min-w-0 md:grid-cols-2 lg:grid-cols-3">
            {enhancedChildren}
          </div>
        )}
      </section>
    </>
  )
}
