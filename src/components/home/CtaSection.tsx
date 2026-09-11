'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'

export default function CtaSection() {
  return (
    <section className="relative z-10 overflow-hidden py-20 sm:py-28 text-center bg-slate-50/80 dark:bg-stone-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-teal-700 dark:text-teal-400 font-semibold">
          /06 Work With Us
        </span>

        <div className="space-y-3">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-stone-100 tracking-tight leading-tight">
            Start with a clear technical conversation.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
            Whether you are evaluating your organization&apos;s data readiness or seeking a reliable partner to deploy machine learning models, our team is ready to assist.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-8 py-3.5 text-sm sm:text-base shadow-md transition-all duration-300 hover:scale-105 hover:bg-slate-800 dark:hover:bg-teal-400"
          >
            <span>Discuss your project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-300 dark:border-stone-700 bg-white dark:bg-stone-900 px-7 py-3.5 text-sm sm:text-base font-semibold text-slate-700 dark:text-stone-200 transition-all duration-300 hover:scale-105 hover:border-slate-400"
          >
            View our capabilities
          </Link>
        </div>
      </div>
    </section>
  )
}
