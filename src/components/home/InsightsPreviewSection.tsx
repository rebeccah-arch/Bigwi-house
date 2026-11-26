'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'

export default function InsightsPreviewSection() {
  return (
    <section id="insights-preview" className="border-t border-slate-200 bg-[#f8f9fb] text-slate-950 dark:border-stone-900 dark:bg-[#0c0f17] dark:text-stone-100">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Insights and perspectives
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Publishing is paused
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-stone-300">
            We will resume publishing when an editorial owner and review process are in place.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 border border-slate-200 bg-white p-6 sm:p-8 dark:border-stone-800 dark:bg-stone-900/50">
          <p className="text-sm leading-relaxed text-slate-700 dark:text-stone-300">
            Any material shared here will be reviewed for clear authorship, sources, and substantiated claims.
          </p>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline dark:text-teal-300"
          >
            View publication status
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
