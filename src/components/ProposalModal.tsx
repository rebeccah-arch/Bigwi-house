'use client'

import React, { useState, useEffect, useRef, FormEvent } from 'react'
import { X, Sparkles, CheckCircle2, AlertCircle, Loader2 } from '@/components/Icons'

interface ProposalModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const lastFocusedRef = useRef<HTMLElement | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    need: 'Enterprise Software Development',
    budgetRange: '$10k - $25k',
    timeline: '1-3 Months',
    projectScope: ''
  })

  useEffect(() => {
    if (!isOpen) return

    lastFocusedRef.current = document.activeElement as HTMLElement
    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    focusable?.[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
      lastFocusedRef.current?.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/proposal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setTimeout(() => {
          setStatus('idle')
          onClose()
        }, 2200)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Failed to submit proposal request. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Network error occurred. Please try again.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="proposal-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:text-slate-900 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-[11px] text-teal-800 font-semibold mb-2">
            <Sparkles className="h-3 w-3 text-teal-600" />
            Direct Proposal Channel
          </div>
          <h2 id="proposal-modal-title" className="text-xl md:text-2xl font-display font-bold text-slate-900">
            Request an Engineering Proposal
          </h2>
          <p className="mt-1 text-xs md:text-sm text-slate-600">
            Share your project parameters with DataSphere Consulting Ltd. Our engineering team will review requirements and structure a formal technical capability proposal.
          </p>
        </div>

        {/* Submission Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="pm-name" className="mb-1.5 block text-xs font-semibold text-slate-700">
                Full Name *
              </label>
              <input
                id="pm-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Jean Damascene"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="pm-email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                Work Email *
              </label>
              <input
                id="pm-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@organization.com"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="pm-org" className="mb-1.5 block text-xs font-semibold text-slate-700">
                Organization / Company
              </label>
              <input
                id="pm-org"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. Bank, Enterprise, or NGO"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="pm-need" className="mb-1.5 block text-xs font-semibold text-slate-700">
                Primary Solution Needed *
              </label>
              <select
                id="pm-need"
                name="need"
                value={formData.need}
                onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
              >
                <option value="Enterprise Software Development">Enterprise Software Development</option>
                <option value="Web & Mobile Applications">Web &amp; Mobile Applications</option>
                <option value="AI & Machine Learning Solutions">AI &amp; Machine Learning Solutions</option>
                <option value="Data Analytics & BI">Data Analytics &amp; BI Dashboards</option>
                <option value="Digital Transformation Consulting">Digital Transformation Strategy</option>
                <option value="Cloud Solutions & DevOps">Cloud &amp; DevOps Infrastructure</option>
                <option value="SaaS Product Development">SaaS Product Development</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="pm-scope" className="mb-1.5 block text-xs font-semibold text-slate-700">
              Project Summary &amp; Objectives *
            </label>
            <textarea
              id="pm-scope"
              name="projectScope"
              rows={3}
              required
              value={formData.projectScope}
              onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              placeholder="Describe your current system challenges, expected deliverables, target users, and key timeline..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Feedback states */}
          {status === 'success' && (
            <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-800">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
              <div>
                <p className="font-semibold">Proposal Request Received</p>
                <p className="text-slate-600">A senior solutions architect from DataSphere Consulting will follow up within 24 hours.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-semibold">Submission Error</p>
                <p>{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-primary w-full py-3 justify-center text-sm font-semibold"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Processing Inquiry...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 text-teal-400" />
                  <span>Submit Proposal Request</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center font-sans text-[11px] text-slate-500">
            100% Confidential &bull; DataSphere Consulting Enterprise Governance
          </p>
        </form>
      </div>
    </div>
  )
}
