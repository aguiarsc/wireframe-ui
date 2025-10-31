/*
https://magicui.design/docs/components/animated-theme-toggler
*/

'use client'

import { useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import { flushSync } from 'react-dom'
import { cn } from '@/lib/utils'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

// Wrapper component to provide animation interface for theme icons
const ThemeIcon = forwardRef<
  { startAnimation: () => void; stopAnimation: () => void },
  { isDark: boolean; className?: string }
>(({ isDark, className }, ref) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useImperativeHandle(ref, () => ({
    startAnimation: () => setIsAnimating(true),
    stopAnimation: () => setIsAnimating(false),
  }))

  const Icon = isDark ? MoonIcon : SunIcon

  return (
    <Icon
      className={cn(
        'size-5 transition-transform duration-300',
        isAnimating && 'scale-110 rotate-180',
        className
      )}
    />
  )
})

ThemeIcon.displayName = 'ThemeIcon'

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<'button'> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const iconRef = useRef<{ startAnimation: () => void; stopAnimation: () => void } | null>(null)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    iconRef.current?.startAnimation()

    await document.startViewTransition(() => {
      flushSync(() => {
        const newTheme = !isDark
        setIsDark(newTheme)
        document.documentElement.classList.toggle('dark')
        localStorage.setItem('theme', newTheme ? 'dark' : 'light')
      })
    }).ready

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
      },
      {
        duration,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    )

    setTimeout(() => {
      iconRef.current?.stopAnimation()
    }, 600)
  }, [isDark, duration])

  return (
    <button ref={buttonRef} onClick={toggleTheme} className={cn(className)} {...props}>
      <ThemeIcon ref={iconRef} isDark={isDark} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
