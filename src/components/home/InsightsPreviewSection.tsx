'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/Icons'

const RECENT_BRIEFINGS = [
  {
    type: 'Article',
    date: 'September 18, 2026',
    title: "Cutting the 'coordination tax': How agentic AI can reshape workflows",
    excerpt:
      'Organizations must redesign workflows to realize value from AI, eliminating frictional handoffs between operational teams.'
  },
  {
    type: 'Survey',
    date: 'August 25, 2026',
    title: 'The state of AI in 2026: On the road to ROI',
    excerpt:
      'Deploying agentic coding tools, managing cloud compute expenditure, and driving measurable institutional returns.'
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
              DataSphere Technology Trends Outlook 2026
            </h3>
          </div>
        </div>

        {/* Right Column: Research Insights & Briefings List */}
        <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between space-y-8">

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                THOUGHT LEADERSHIP &amp; RESEARCH
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-950 dark:text-white tracking-tight leading-tight">
                Latest insights on Data &amp; AI
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal pt-1">
                Which frontier technologies matter most for companies in 2026? Our annual report highlights key technology innovations, operational developments, and talent trends impacting business and society.
              </p>
            </div>

            {/* Stacked Research Articles */}
            <div className="space-y-5 pt-2 border-t border-slate-200 dark:border-stone-800">
              {RECENT_BRIEFINGS.map((art, idx) => (
                <div key={idx} className="space-y-1.5 group">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-stone-400">
                    <span className="text-teal-700 dark:text-teal-400 font-bold uppercase">{art.type}</span>
                    <span>&bull;</span>
                    <span>{art.date}</span>
                  </div>
                  <Link
                    href="/insights"
                    className="block font-sans font-bold text-base text-slate-950 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug"
                  >
                    <span>{art.title}</span>
                    <span className="text-teal-600 dark:text-teal-400 font-bold ml-1">&rsaquo;</span>
                  </Link>
                  <p className="text-xs text-slate-600 dark:text-stone-300 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Link */}
          <div className="pt-4 border-t border-slate-200 dark:border-stone-800 flex items-center justify-between">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-teal-500 text-white dark:text-slate-950 font-bold px-6 py-3 text-xs shadow-md hover:bg-slate-800 dark:hover:bg-teal-400 hover:scale-105 transition-all"
            >
              <span>Explore all research &amp; papers</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}