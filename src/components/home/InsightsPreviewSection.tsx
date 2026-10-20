'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from '@/components/Icons'

const RECENT_BRIEFINGS = [
  {
    type: 'Article',
    date: 'September 18, 2026',
    title: "Cutting the 'coordination tax': How modern data pipelines reshape workflows",
    excerpt:
      'Organizations must redesign workflows to realize value from unified data systems, eliminating frictional handoffs between operational teams.'
  },
  {
    type: 'Survey',
    date: 'August 25, 2026',
    title: 'The state of enterprise data in 2026: On the road to ROI',
    excerpt:
      'Deploying modern analytics infrastructure, managing cloud compute expenditure, and driving measurable institutional returns.'
  }
]

export default function InsightsPreviewSection() {
  return (
    <section id="insights-preview" className="relative z-10 border-t border-slate-200 dark:border-stone-900 bg-[#f8f9fb] dark:bg-[#0c0f17] text-slate-950 dark:text-stone-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px] items-stretch">

        {/* Left Column: Full-Height Image Covering Entire Left Side (Matching WhatWeSolveSection) */}
        <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[460px] lg:min-h-full w-full bg-stone-950 overflow-hidden group">
          <Image
            src="/images/insights/trends_outlook_hero.jpg"
            alt="DataSphere Technology Trends Outlook 2026"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Subtle bottom gradient overlay & badge */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2.5">
            <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-widest text-teal-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              Annual Report &bull; 2026
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              DataSphere Technology Trends Outlook 2026
            </h3>
          </div>
        </div>

        {/* Right Column: Research Insights & Briefings List */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between space-y-8">

          <div className="space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                THOUGHT LEADERSHIP &amp; RESEARCH
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-[1.12]">
                Latest insights on data &amp; analytics
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-normal pt-1">
                Which frontier technologies matter most for companies in 2026? Our annual report highlights key technology innovations, operational developments, and talent trends impacting business and society.
              </p>
            </div>

            {/* Stacked Research Articles */}
            <div className="space-y-6 pt-4 border-t border-slate-200 dark:border-stone-800">
              {RECENT_BRIEFINGS.map((art, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-stone-400">
                    <span className="text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wide">{art.type}</span>
                    <span>&bull;</span>
                    <span>{art.date}</span>
                  </div>
                  <Link
                    href="/insights"
                    className="block font-display font-bold text-lg sm:text-xl text-slate-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug"
                  >
                    <span>{art.title}</span>
                    <span className="text-teal-600 dark:text-teal-400 font-bold ml-1.5 inline-block text-[20px] leading-none">&rsaquo;</span>
                  </Link>
                  <p className="text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                    {art.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Link */}
          <div className="pt-5 border-t border-slate-200 dark:border-stone-800 flex items-center justify-between">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-7 py-3.5 text-xs sm:text-sm shadow-md hover:bg-slate-800 dark:hover:bg-teal-400 hover:scale-105 transition-all"
            >
              <span>Explore all research &amp; papers</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}