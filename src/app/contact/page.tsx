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
    <div className="w-full bg-white dark:bg-stone-950 transition-colors duration-300 overflow-x-hidden">
      {/* 1. Header Banner (Full-Bleed Hero with Curved Bottom) */}
      <section className="relative z-10 w-full min-h-[440px] sm:min-h-[480px] overflow-hidden rounded-b-[40px] sm:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl border-b border-slate-200/20 dark:border-stone-800/40 bg-stone-950 flex flex-col justify-end pt-36 sm:pt-44 pb-16 sm:pb-24">
        {/* Full-Bleed Atmospheric Background Image */}
        <div className="absolute inset-0 h-full w-full overflow-hidden bg-stone-950">
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere Consultation &amp; Client Discovery"
            fill
            priority
            className="object-cover object-center opacity-60 contrast-125 grayscale hover:scale-105 transition-transform duration-10000 ease-out"
          />
          {/* Cinematic Gradient Fade */}
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/20" />
          <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-stone-950/85 via-stone-950/45 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 mx-auto max-w-[1400px] w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 border border-teal-500/30">
              <Mail className="h-3.5 w-3.5" />
              <span>Start an Engagement</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              Let&apos;s Discuss Your Data Challenges.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal max-w-2xl">
              Whether you need to build custom machine learning models, aggregate field data, or develop executive analytics, our senior team is ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Architectural Grid Frame */}
      <div className="relative mx-auto max-w-[1400px] border-x border-slate-200 dark:border-stone-900 bg-white dark:bg-stone-950 transition-colors duration-300">
        {/* 2. Contact Grid */}
        <section className="relative p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 dark:border-stone-800/80 bg-white dark:bg-stone-900/60 p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white">
                    Submit a Project Inquiry
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-stone-400">
                    Provide a brief overview and a senior consultant will review and follow up within 24 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-name" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-stone-300">
                        Full Name *
                      </label>
                      <input
                        id="cf-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jean Damascene"
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-stone-800 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="cf-email" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-stone-300">
                        Work Email *
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@organization.com"
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-stone-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-org" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-stone-300">
                        Organization / Institution
                      </label>
                      <input
                        id="cf-org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Development Bank"
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-stone-800 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="cf-sector" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-stone-300">
                        Sector / Industry
                      </label>
                      <select
                        id="cf-sector"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:bg-white dark:focus:bg-stone-800 focus:outline-none transition-colors"
                      >
                        <option value="Financial Institution">Financial Institution / Microfinance</option>
                        <option value="Government & Public Sector">Government &amp; Public Sector</option>
                        <option value="International Development">International Development / NGO</option>
                        <option value="Agriculture & Supply Chain">Agriculture &amp; Supply Chain</option>
                        <option value="Logistics & Mobility">Logistics &amp; Mobility</option>
                        <option value="Commercial Enterprise">Commercial Enterprise</option>
                        <option value="Other">Other Sector</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-service" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-stone-300">
                        Primary Service Area
                      </label>
                      <select
                        id="cf-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:bg-white dark:focus:bg-stone-800 focus:outline-none transition-colors"
                      >
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Strategic Advisory">General Strategic Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cf-timeline" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-stone-300">
                        Anticipated Timeline
                      </label>
                      <select
                        id="cf-timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-teal-500 focus:bg-white dark:focus:bg-stone-800 focus:outline-none transition-colors"
                      >
                        <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
                        <option value="1-3 Months">1-3 Months</option>
                        <option value="3-6 Months">3-6 Months</option>
                        <option value="Exploratory / Planning Stage">Exploratory / Planning Stage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-stone-300">
                      Project Details &amp; Operational Objectives *
                    </label>
                    <textarea
                      id="cf-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your data pipeline, predictive model goals, or dashboard requirements..."
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-teal-500 focus:bg-white dark:focus:bg-stone-800 focus:outline-none transition-colors"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-950/40 p-3 text-xs text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 p-3 text-xs text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      <span>Inquiry submitted successfully! A consultant will respond within 24 business hours.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-6 py-3.5 text-xs sm:text-sm shadow-md transition-all duration-300 hover:scale-[1.01] hover:bg-slate-800 dark:hover:bg-teal-400 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Processing Inquiry...</span>
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

            {/* Right Column: Information & Roadmap */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Office Details */}
              <div className="rounded-3xl border border-slate-200 dark:border-stone-800/80 bg-white dark:bg-stone-900/60 p-6 sm:p-8 shadow-sm space-y-5">
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Consultancy Office
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-stone-300">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="block text-slate-900 dark:text-white font-semibold">{contactDetails.company}</strong>
                      <span className="block text-slate-500 dark:text-stone-400">{contactDetails.division}</span>
                      <span>{contactDetails.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <a href={`mailto:${contactDetails.email}`} className="text-teal-700 dark:text-teal-400 hover:underline">
                        {contactDetails.email}
                      </a>
                      <span className="block text-slate-500 dark:text-stone-400">Direct technical inquiries</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <span>{contactDetails.hours}</span>
                      <span className="block text-slate-500 dark:text-stone-400">{contactDetails.responseSLA}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Roadmap */}
              <div className="rounded-3xl border border-slate-200 dark:border-stone-800/80 bg-slate-50/70 dark:bg-stone-900/40 p-6 sm:p-8 shadow-sm space-y-4">
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
                      <p className="text-xs text-slate-600 dark:text-stone-400 mt-0.5">A 30-minute technical review with our solutions architect to understand your goals and current data setup.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 font-mono text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Technical Assessment</h4>
                      <p className="text-xs text-slate-600 dark:text-stone-400 mt-0.5">We review data schema feasibility, compliance requirements, and integration dependencies.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white dark:bg-teal-500 dark:text-slate-950 font-mono text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Structured Proposal</h4>
                      <p className="text-xs text-slate-600 dark:text-stone-400 mt-0.5">You receive a clear scope of work detailing deliverables, architecture diagrams, milestones, and SLA terms.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-stone-800 flex items-center gap-2 text-xs text-slate-500 dark:text-stone-400 font-mono">
                  <ShieldCheck className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>Strict NDA standards applied to all inquiries</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}