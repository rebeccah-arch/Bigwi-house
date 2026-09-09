'use client'

import React from 'react'
import Image from 'next/image'

export default function Hero3DCanvas() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      {/* Photo Hero Card Container */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-xl">
        
        {/* Editorial Image of Team */}
        <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden">
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere and BIGWI HOUSE Data Consultants and ML Specialists in Kigali"
            fill
            className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/80 px-3.5 py-1.5 backdrop-blur-md shadow-md text-white">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-sans text-xs font-semibold">
              Data &amp; AI Consultancy &bull; Kigali
            </span>
          </div>

          {/* Bottom Floating Caption on Image */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
            <div>
              <p className="font-display text-base sm:text-lg font-bold">DataSphere &bull; BIGWI HOUSE</p>
              <p className="text-xs text-slate-300">Data pipelines, business analytics &amp; applied machine learning</p>
            </div>
            <span className="self-start sm:self-auto rounded-md bg-teal-500/90 text-slate-950 px-2.5 py-1 text-xs font-bold backdrop-blur-sm">
              Applied Intelligence
            </span>
          </div>
        </div>

        {/* Lower Info & Metrics Bar */}
        <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-stone-800 bg-white dark:bg-stone-900 p-4">
          <div className="px-2 sm:px-4 text-center">
            <span className="text-[11px] font-medium text-slate-500 dark:text-stone-400 block">Core Focus</span>
            <span className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-stone-100">Data Pipelines</span>
          </div>
          <div className="px-2 sm:px-4 text-center">
            <span className="text-[11px] font-medium text-slate-500 dark:text-stone-400 block">Intelligence</span>
            <span className="font-display text-sm sm:text-base font-bold text-teal-700 dark:text-teal-400">Model Evaluation</span>
          </div>
          <div className="px-2 sm:px-4 text-center">
            <span className="text-[11px] font-medium text-slate-500 dark:text-stone-400 block">Reliability</span>
            <span className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-stone-100">SLA Governance</span>
          </div>
        </div>

      </div>
    </div>
  )
}
