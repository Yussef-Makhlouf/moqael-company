"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

const themes = {
  light: {
    primary: '#0066cc',
    secondary: '#4CAF50',
    background: '#ffffff',
    text: '#1a1a1a'
  },
  dark: {
    primary: '#3399ff',
    secondary: '#66bb6a',
    background: '#1a1a1a',
    text: '#ffffff'
  },
  system: 'system'
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      themes={Object.keys(themes)}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
