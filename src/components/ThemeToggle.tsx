'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon } from '@/components/Icons'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`h-9 w-9 rounded-xl border border-slate-200 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80 ${className}`}
        aria-hidden="true"
      />
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative flex h-9 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-teal-500/50 hover:bg-slate-50 hover:text-teal-600 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:border-teal-400/50 dark:hover:bg-slate-800 dark:hover:text-teal-400 ${
        showLabel ? 'gap-2 px-3.5' : 'w-9'
      } ${className}`}
    >
      <span className="relative flex items-center justify-center">
        {isDark ? (
          <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45 text-amber-400" />
        ) : (
          <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 text-slate-700" />
        )}
      </span>

      {showLabel && (
        <span className="text-xs font-semibold">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  )
}
