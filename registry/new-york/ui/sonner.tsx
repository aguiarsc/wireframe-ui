'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

import { BadgeAlertIcon, CheckIcon, CircleDashedIcon, XIcon } from '@/registry/new-york/icons'

export interface ToasterComponentProps extends ToasterProps {}

const Toaster = ({ ...props }: ToasterComponentProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CheckIcon size={24} />,
        info: <CircleDashedIcon size={24} />,
        warning: <BadgeAlertIcon size={24} />,
        error: <XIcon size={24} />,
        loading: <CircleDashedIcon size={24} className="animate-spin" />,
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

export { Toaster }
