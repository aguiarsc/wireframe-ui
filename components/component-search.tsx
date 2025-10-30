'use client'

import * as React from 'react'
import { Input } from '@/registry/new-york/ui/input'
import { Kbd, KbdGroup } from '@/registry/new-york/ui/kbd'
import { SearchIcon, XIcon } from '@/registry/new-york/icons'
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
        <SearchIcon size={16} className="text-muted-foreground absolute left-3" />
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
              <XIcon size={14} className="text-muted-foreground" />
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
