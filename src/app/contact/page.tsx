'use client'

import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  MapPin,
  Clock,
  ArrowRight
} from '@/components/Icons'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
    referralSource: ''
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          organization: formData.company,
          jobTitle: formData.jobTitle,
          message: formData.message,
          referralSource: formData.referralSource
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          jobTitle: '',
          message: '',
          referralSource: ''
        })
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Failed to submit inquiry. Please check all fields.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network connection error. Please try again.')
    }
  }

  const benefits = [
    'Direct consultation with senior data architects and practitioners',
    'Integrated solutions spanning lakehouses, MLOps, and decision portals',
    '100% intellectual property ownership of code, models, and schemas',
    'Bank-grade confidentiality backed by mutual enterprise NDAs',
    'Rapid 2-week pilot sprint scoping with defined commercial ROI'
  ]

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#080a11] text-slate-900 dark:text-stone-100 transition-colors duration-300">

      {/* 1. Full-Height Curved Split Dark Hero (Matching about/page.tsx) */}
      <section className="relative z-10 w-full min-h-[640px] lg:min-h-[740px] bg-[#080a11] text-white overflow-hidden flex items-center">

        {/* Right Column: Full-Height Curved Split Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] xl:w-[52%] h-full z-0 pointer-events-none">
          <div className="relative w-full h-full overflow-hidden lg:rounded-l-[100px] xl:rounded-l-[160px]">
            <Image
              src="/images/team-atrium.jpg"
              alt="DataSphere Technical Advisory Group"
              fill
              priority
              className="object-cover object-center scale-105"
            />
            {/* Subtle gradient overlay on left, top and bottom for seamless blend with header and dark background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080a11] via-[#080a11]/40 to-transparent lg:hidden" />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080a11]/80 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080a11] via-[#080a11]/60 to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080a11] to-transparent" />
          </div>
        </div>

        {/* Main Container Content */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
          <div className="max-w-full lg:max-w-[54%] xl:max-w-[50%] space-y-6 sm:space-y-8">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[56px] tracking-tight leading-[1.08] text-white"
            >
              Get in touch with an expert practitioner
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-[#A6ADB9] leading-relaxed font-normal max-w-2xl"
            >
              An elite team of data architects and engineers built to design, deploy, and scale high-throughput lakehouses and predictive intelligence systems.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:bg-stone-200"
              >
                <span>Discuss your project</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-stone-700 bg-stone-900/60 backdrop-blur-sm px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <span>Explore capabilities</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Last Section: Gray-White Background with Floating Form */}
      <section id="contact-form" className="relative w-full bg-[#f4f6f8] dark:bg-[#0c0f17] text-slate-900 dark:text-stone-100 py-16 sm:py-24 border-t border-slate-200 dark:border-zinc-800/80 transition-colors duration-300">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Heading, Subtitle & Value Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                  Technical Discovery
                </span>

                <h2 className="font-sans font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
                  What to expect from your consultation
                </h2>

                <p className="text-sm sm:text-base text-slate-600 dark:text-stone-400 font-normal leading-relaxed">
                  We start with a technical scoping conversation to understand your data infrastructure, existing bottlenecks, and commercial objectives.
                </p>
              </div>

              {/* Checklist items with solid circular badges */}
              <div className="space-y-3.5 pt-1">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="h-5 w-5 rounded-full bg-slate-900 dark:bg-teal-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 dark:text-stone-300 font-medium leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct Office & Hub Card */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm space-y-4 text-xs text-slate-600 dark:text-stone-400">
                <div className="flex items-center gap-2.5 text-slate-950 dark:text-white font-semibold text-sm">
                  <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  <span>DataSphere Consulting Ltd &bull; BIGWI HOUSE</span>
                </div>
                <p className="text-slate-600 dark:text-stone-400 leading-relaxed">
                  Kigali, Rwanda &bull; Serving international organizations, governments, and commercial enterprises globally.
                </p>
                <div className="pt-2 border-t border-slate-100 dark:border-stone-800 flex flex-col gap-2 font-mono text-[11px]">
                  <div className="flex items-center gap-2 text-slate-800 dark:text-stone-300">
                    <Mail className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    <span>contact@datasphere.rw</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-stone-400">
                    <Clock className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />
                    <span>Mon &ndash; Fri, 8:00 AM &ndash; 6:00 PM CAT</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Floating White Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80 dark:border-stone-800 text-slate-900 dark:text-stone-100">

                <div className="mb-6 space-y-1">
                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-slate-950 dark:text-white tracking-tight">
                    Start the Conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-stone-400">
                    Fill in your project details below and an architect will reach out within 24 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                        First Name <span className="text-teal-600 dark:text-teal-400">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First name"
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                        Last Name <span className="text-teal-600 dark:text-teal-400">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last name"
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Business Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                      Business Email <span className="text-teal-600 dark:text-teal-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Row 3: Company & Job Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                        Company / Organization <span className="text-teal-600 dark:text-teal-400">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="jobTitle" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                        Job Title <span className="text-teal-600 dark:text-teal-400">*</span>
                      </label>
                      <input
                        id="jobTitle"
                        type="text"
                        required
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="e.g. VP of Data, CTO, Lead Architect"
                        className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: How can we help? */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                      How can we help? <span className="text-teal-600 dark:text-teal-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current data challenge, objectives, or required milestones..."
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Row 5: How did you hear about us? */}
                  <div className="space-y-1.5">
                    <label htmlFor="referralSource" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                      How did you hear about us? <span className="text-teal-600 dark:text-teal-400">*</span>
                    </label>
                    <textarea
                      id="referralSource"
                      required
                      rows={2}
                      value={formData.referralSource}
                      onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                      placeholder="e.g. Partner referral, LinkedIn, Technical publications..."
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  {/* Status Messages */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span>Thank you! Your message has been received. A solutions architect will reach out within 24 business hours.</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-full bg-slate-950 dark:bg-teal-500 hover:bg-slate-800 dark:hover:bg-teal-400 text-white dark:text-slate-950 font-bold py-3.5 sm:py-4 text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200 active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Start the Conversation</span>
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  {/* Disclaimer / Terms note */}
                  <p className="text-[11px] text-slate-500 dark:text-stone-400 text-center leading-relaxed pt-2">
                    By clicking submit you agree to our{' '}
                    <Link href="/privacy" className="text-teal-700 dark:text-teal-400 underline font-medium hover:text-teal-900">
                      Privacy Policy
                    </Link>
                    . All information is protected under standard enterprise mutual NDA.
                  </p>

                </form>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}