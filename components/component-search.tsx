'use client'

import * as React from 'react'
import { Input } from '@/registry/new-york/ui/input'
import { Kbd, KbdGroup } from '@/registry/new-york/ui/kbd'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/registry/new-york/ui/button'

interface ComponentSearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function ComponentSearch({ value, onChange, placeholder }: ComponentSearchProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleClear = () => {
    onChange('')
    inputRef.current?.focus()
  }

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <MagnifyingGlassIcon className="size-4 text-muted-foreground absolute left-3" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder || 'Search components...'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pr-24 pl-9"
        />
        <div className="absolute right-2 flex items-center gap-1">
          {value && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-6 w-6 p-0"
              aria-label="Clear search"
            >
              <XMarkIcon className="size-3.5 text-muted-foreground" />
            </Button>
          )}
          <KbdGroup className="hidden sm:flex">
            <Kbd className="text-xs">⌘</Kbd>
            <Kbd className="text-xs">K</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  )
}
