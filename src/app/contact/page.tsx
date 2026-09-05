'use client'

import React, { useState, FormEvent } from 'react'
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  MapPin, 
  Lock, 
  Clock 
} from '@/components/Icons'
import { services } from '@/content/bigwiContent'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    sector: 'Private enterprise',
    service: 'Enterprise Software Development',
    budget: '$10,000 - $25,000',
    timeline: '1-3 Months',
    message: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          organization: '',
          sector: 'Private enterprise',
          service: 'Enterprise Software Development',
          budget: '$10,000 - $25,000',
          timeline: '1-3 Months',
          message: '',
        })
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Failed to submit inquiry. Please verify all fields.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network connection error. Please try again.')
    }
  }

  return (
    <div className="space-y-20 py-10">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 font-mono text-xs text-teal-800 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-teal-600" />
              <span>Direct Technical Channel &bull; Technical Consultation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              Tell us about your project.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Share details about your organization, current challenges, and project goals. A senior solutions architect from DataSphere Consulting Ltd will follow up to structure an initial technical discovery session.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Grid */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Company Information & Confidentiality */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 space-y-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">
                  DataSphere Consulting Ltd
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-700 border border-teal-200 flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Headquarters</strong>
                      <p className="text-slate-600 text-xs font-medium">Kigali, Rwanda &bull; East African Regional Hub</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-800 border border-slate-200 flex-shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Corporate Inquiries</strong>
                      <p className="text-slate-600 text-xs font-medium">info@datasphere.rw &bull; consulting@datasphere.rw</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-800 border border-amber-200 flex-shrink-0">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 font-semibold">Response Time</strong>
                      <p className="text-slate-600 text-xs font-medium">Inquiries reviewed by senior architects within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 font-sans text-xs font-semibold mb-1">
                    <Lock className="h-3.5 w-3.5 text-teal-600" />
                    Enterprise Confidentiality
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    All submitted project blueprints, architectural parameters, and corporate details are protected under standard non-disclosure agreement governance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Project Inquiry Form */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jean Damascene"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Work Email *
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@organization.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cf-org" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Organization / Company
                    </label>
                    <input
                      id="cf-org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Bank, Enterprise, or NGO"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-service" className="mb-1.5 block text-xs font-semibold text-slate-700">
                      Primary Service Line *
                    </label>
                    <select
                      id="cf-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sector Radio Selection */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <span className="mb-2 block text-xs font-semibold text-slate-700">Organization Sector</span>
                  <div className="flex flex-wrap gap-4 text-xs">
                    {[
                      { id: 'public', label: 'Public Sector / NGO', value: 'Public sector / NGO' },
                      { id: 'private', label: 'Private Enterprise', value: 'Private enterprise' },
                      { id: 'startup', label: 'High-Growth Startup', value: 'Startup' },
                      { id: 'sme', label: 'SME / Cooperative', value: 'SME' },
                    ].map((sec) => (
                      <label key={sec.id} className="flex items-center gap-2 cursor-pointer text-slate-800 font-medium">
                        <input
                          type="radio"
                          name="sector"
                          value={sec.value}
                          checked={formData.sector === sec.value}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="text-teal-600 focus:ring-teal-500"
                        />
                        <span>{sec.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold text-slate-700">
                    Project Overview &amp; Requirements *
                  </label>
                  <textarea
                    id="cf-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current system challenges, expected deliverables, timeline, and key goals..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-800">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <div>
                      <p className="font-semibold">Project Inquiry Dispatched</p>
                      <p className="text-slate-600">A senior solutions architect from DataSphere Consulting will review and respond promptly.</p>
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

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn btn-primary w-full py-3 justify-center text-sm font-semibold"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
