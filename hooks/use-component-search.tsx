'use client'

import * as React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export interface SearchableComponent {
  name: string
  title: string
  description: string
}

export function useComponentSearch(components: SearchableComponent[]) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = React.useState(searchParams.get('q') || '')

  const filteredComponents = React.useMemo(() => {
    if (!query.trim()) return components

    const lowerQuery = query.toLowerCase()
    return components.filter((component) => {
      const nameMatch = component.name.toLowerCase().includes(lowerQuery)
      const titleMatch = component.title.toLowerCase().includes(lowerQuery)
      const descMatch = component.description.toLowerCase().includes(lowerQuery)
      return nameMatch || titleMatch || descMatch
    })
  }, [components, query])

  const updateQuery = React.useCallback(
    (newQuery: string) => {
      setQuery(newQuery)
      const params = new URLSearchParams(searchParams.toString())
      if (newQuery.trim()) {
        params.set('q', newQuery)
      } else {
        params.delete('q')
      }
      router.replace(`?${params.toString()}`, { scroll: false })
    },
    [router, searchParams]
  )

  return {
    query,
    setQuery: updateQuery,
    filteredComponents,
    hasResults: filteredComponents.length > 0,
  }
}
