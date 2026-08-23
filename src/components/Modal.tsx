import { ReactNode, useEffect, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  titleId: string
  title: string
  subtitle?: string
  children: ReactNode
}

const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

export default function Modal({ isOpen, onClose, titleId, title, subtitle, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    lastFocused.current = document.activeElement as HTMLElement
    const modalEl = modalRef.current
    const focusables = modalEl?.querySelectorAll<HTMLElement>(FOCUSABLE)
    focusables?.[0]?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && focusables && focusables.length > 0) {
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      lastFocused.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-[rgba(6,11,18,0.72)] p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-[480px] rounded-lg border border-line bg-bgRaised2 p-7"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 h-8 w-8 rounded-lg border border-line text-muted hover:border-teal hover:text-ink"
        >
          ✕
        </button>
        <h2 id={titleId} className="mb-1.5 text-[1.3rem]">
          {title}
        </h2>
        {subtitle && <p className="mb-5 text-[0.9rem] text-muted">{subtitle}</p>}
        {children}
      </div>
    </div>
  )
}
