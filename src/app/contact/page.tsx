'use client'

import React, { useState, FormEvent } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  Building2,
  Mail,
  ShieldCheck,
  Compass
} from '@/components/Icons'
import { services, contactDetails } from '@/content/bigwiContent'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    sector: 'Financial Institution',
    service: 'Model Building & Predictive Analytics',
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
          sector: 'Financial Institution',
          service: 'Model Building & Predictive Analytics',
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
    <div className="space-y-16 md:space-y-24 py-10">
      {/* 1. Header Banner */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere Consultation &amp; Client Discovery"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60 dark:from-[#07090E] dark:via-[#07090E]/95 dark:to-[#07090E]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 dark:from-[#07090E] dark:via-transparent dark:to-[#07090E]/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-wide w-full px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 text-xs font-mono text-teal-800 dark:text-teal-300">
              <span>Start an Engagement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Let&apos;s discuss your organization&apos;s data challenges.
            </h1>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              Whether you need to build custom machine learning models, aggregate field data, or develop executive analytics, our senior team is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Contact Grid: Left Form + Right Information & Process Roadmap */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                    Submit a Project Inquiry
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Provide a brief overview and a senior consultant will review and follow up within 24 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        id="cf-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jean Damascene"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Work Email *
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@organization.com"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-org" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Organization / Institution
                      </label>
                      <input
                        id="cf-org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Bank, Government Entity, or NGO"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="cf-service" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Primary Area of Need *
                      </label>
                      <select
                        id="cf-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sector Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-sector" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Organization Type
                      </label>
                      <select
                        id="cf-sector"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors"
                      >
                        <option value="Financial Institution">Financial Institution</option>
                        <option value="Government / Public Entity">Government / Public Entity</option>
                        <option value="NGO / Development Partner">NGO / Development Partner</option>
                        <option value="Commercial Enterprise">Commercial Enterprise</option>
                        <option value="Startup / SME">Startup / SME</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cf-timeline" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                        Target Timeline
                      </label>
                      <select
                        id="cf-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors"
                      >
                        <option value="Immediate (1-4 Weeks)">Immediate (1-4 Weeks)</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="Planning / Exploratory">Planning / Exploratory</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Project Context &amp; Objectives *
                    </label>
                    <textarea
                      id="cf-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your current data situation, key objectives, and expected deliverables..."
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="flex items-center gap-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-3.5 text-xs text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <div>
                        <p className="font-semibold">Project Inquiry Received</p>
                        <p className="text-slate-600 dark:text-slate-400">Thank you. A senior consultant from DataSphere will review your requirements and respond promptly.</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-3 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40 p-3.5 text-xs text-red-800 dark:text-red-300">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="font-semibold">Submission Error</p>
                        <p>{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-primary w-full py-3 justify-center text-xs sm:text-sm font-semibold"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting Inquiry...</span>
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

            {/* Right Column: Information & "What Happens Next" */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Office & Contact Info */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Corporate Information
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-slate-900 dark:text-white">{contactDetails.company}</strong>
                      <span className="text-slate-500 dark:text-slate-400">{contactDetails.division}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href={`mailto:${contactDetails.email}`} className="text-teal-700 dark:text-teal-400 hover:underline">
                        {contactDetails.email}
                      </a>
                      <span className="block text-slate-500 dark:text-slate-400">Direct technical inquiries</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span>{contactDetails.hours}</span>
                      <span className="block text-slate-500 dark:text-slate-400">{contactDetails.responseSLA}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Roadmap */}
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    What Happens Next
                  </h3>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 font-mono text-xs font-bold flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Initial Discovery Call</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">A 30-minute technical review with our solutions architect to understand your goals and current data setup.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 font-mono text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Technical Assessment</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">We review data schema feasibility, compliance requirements, and integration dependencies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 font-mono text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Structured Proposal</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">You receive a clear scope of work detailing deliverables, architecture diagrams, milestones, and SLA terms.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <ShieldCheck className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>Strict NDA standards applied to all inquiries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}