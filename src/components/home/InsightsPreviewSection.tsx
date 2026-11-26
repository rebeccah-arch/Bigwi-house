'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from '@/components/Icons'

const TOPICS = [
  'Data collection and quality',
  'Analytics and reporting',
  'Model evaluation and deployment',
  'Strategy, governance, and monitoring',
]

export default function InsightsPreviewSection() {
  return (
    <section id="insights-preview" className="border-t border-slate-200 bg-[#f8f9fb] text-slate-950 dark:border-stone-900 dark:bg-[#0c0f17] dark:text-stone-100">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="space-y-4">
          <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Insights and perspectives
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Thinking across the data lifecycle
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-stone-300">
            We are preparing original material across these topics. Published research should identify its author, date, and supporting sources.
          </p>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
          >
            View insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {TOPICS.map((topic, index) => (
            <li key={topic} className="flex items-start gap-4 border border-slate-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900/50">
              <span className="font-mono text-xs font-bold text-teal-700 dark:text-teal-400">0{index + 1}</span>
              <span className="text-sm font-semibold text-slate-800 dark:text-stone-200">{topic}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
