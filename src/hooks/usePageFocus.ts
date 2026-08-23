import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Returns a ref to attach to a page's <h1>. On route change, moves focus to
 * that heading and scrolls to top — the React Router equivalent of a
 * traditional page load, kept accessible for keyboard and screen-reader users.
 */
export function usePageFocus<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    ref.current?.focus()
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return ref
}
