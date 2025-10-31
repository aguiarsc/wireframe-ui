'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

import { ExclamationTriangleIcon, CheckIcon, ArrowPathIcon, XMarkIcon, BellIcon } from '@heroicons/react/24/outline'
import { toast } from 'sonner'
import { Button } from '@/registry/new-york/ui/button'
import { Text } from '@/registry/new-york/ui/text'

export interface ToasterComponentProps extends ToasterProps {}

const Toaster = ({ ...props }: ToasterComponentProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CheckIcon />,
        info: <ArrowPathIcon />,
        warning: <ExclamationTriangleIcon />,
        error: <XMarkIcon />,
        loading: <ArrowPathIcon className="animate-spin" />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

// Wireframe helper component
export interface SonnerWireframeExampleProps {
  triggerIcon?: React.ReactNode
}

function SonnerWireframeExample({ triggerIcon }: SonnerWireframeExampleProps) {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast(
          <div className="flex items-center gap-2">
            <Text width="md" />
          </div>,
          {
            description: (
              <div className="space-y-1">
                <Text width="lg" color="muted" className="block" />
                <Text width="sm" color="muted" className="block" />
              </div>
            ),
          }
        )
      }
    >
      {triggerIcon || <BellIcon className="text-muted-foreground" />}
      <Text width="xs" />
    </Button>
  )
}

export { Toaster, SonnerWireframeExample }
