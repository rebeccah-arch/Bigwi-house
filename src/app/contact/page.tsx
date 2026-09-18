'use client'

import React, { useState, FormEvent } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  AlertCircle,
  Loader2
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
    'Successful project delivery. Guaranteed.',
    'Integrated solutions that span technologies and domain expertise',
    'Custom solutions designed with deep industry expertise',
    'Flexible engagement options to fit your specific needs',
    'Cutting edge data & analytics innovation through DataSphere research and development'
  ]

  return (
    <div className="w-full min-h-screen bg-[#f4f6f8] dark:bg-[#0b0f19] text-slate-900 dark:text-stone-100 transition-colors duration-300">
      
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle & Value Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8 lg:sticky lg:top-32"
          >
            <div className="space-y-4">
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-slate-950 dark:text-white tracking-tight leading-[1.12]">
                Get in touch with an expert
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-stone-300 font-normal leading-relaxed">
                An elite team built to deliver unparalleled solutions and results.
              </p>
            </div>

            {/* Checklist items with solid circular badges */}
            <div className="space-y-4 pt-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="h-5 w-5 rounded-full bg-slate-900 dark:bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
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
                  <span className="text-sm sm:text-base text-slate-800 dark:text-stone-200 font-medium leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct Contact Info */}
            <div className="pt-8 border-t border-slate-200 dark:border-stone-800 space-y-2 text-xs text-slate-500 dark:text-stone-400 font-mono">
              <div>HQ: Kigali, Rwanda &bull; Global Operations</div>
              <div>Direct: contact@datasphere.rw</div>
            </div>
          </motion.div>

          {/* Right Column: Floating White Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white dark:bg-stone-900 rounded-[28px] p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80 dark:border-stone-800 text-slate-900 dark:text-stone-100">
              
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
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
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
                    placeholder="Enter your Business Email"
                    className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
                  />
                </div>

                {/* Row 3: Company & Job Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-800 dark:text-stone-200">
                      Company <span className="text-teal-600 dark:text-teal-400">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
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
                      placeholder="Job Title"
                      className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors"
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
                    placeholder="Enter description..."
                    className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors resize-y"
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
                    rows={3}
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    placeholder="Enter details..."
                    className="w-full rounded-xl border border-slate-200 dark:border-stone-700 bg-slate-50/70 dark:bg-stone-800 px-4 py-3 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:bg-white dark:focus:bg-stone-800 focus:border-teal-500 focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Status Messages */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3.5 text-xs text-emerald-800">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Thank you! Your message has been received. An expert will reach out within 24 business hours.</span>
                  </div>
                )}

                {/* Submit Button: Vibrant Teal Pill Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-full bg-[#1FB6A6] hover:bg-[#18a294] text-white font-bold py-4 text-sm sm:text-base tracking-wide transition-all duration-200 shadow-md active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <span>Start the Conversation</span>
                  )}
                </button>

                {/* Disclaimer / Terms note */}
                <p className="text-[11px] text-slate-500 dark:text-stone-400 text-center leading-relaxed pt-2">
                  By clicking submit you consent to agree to our{' '}
                  <Link href="/privacy" className="text-teal-700 dark:text-teal-400 underline font-medium hover:text-teal-900">
                    Terms
                  </Link>
                  . Your data will be processed in accordance with our{' '}
                  <Link href="/privacy" className="text-teal-700 dark:text-teal-400 underline font-medium hover:text-teal-900">
                    Privacy Policy
                  </Link>
                  . You may opt out at any time.
                </p>

              </form>

            </div>
          </motion.div>

        </div>
      </div>

    </div>
  )
}