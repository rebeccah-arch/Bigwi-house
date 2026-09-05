'use client'

import React from 'react'
import Image from 'next/image'
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Globe2,
  Database,
  Layers,
  Sparkles
} from '@/components/Icons'

export default function Hero3DCanvas() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      {/* Main Humanized Photo Hero Card Container */}
      <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        
        {/* Main Editorial Image of Team */}
        <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden">
          <Image
            src="/images/hero-team.jpg"
            alt="DataSphere Senior Software Engineers & Data Consultants collaborating in Kigali"
            fill
            className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

          {/* Top Floating Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3.5 py-1.5 backdrop-blur-md shadow-md">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-sans text-xs font-bold text-slate-900">
              Senior Engineering Team &bull; Kigali
            </span>
          </div>

          {/* Bottom Floating Caption on Image */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
            <div>
              <p className="font-display text-lg font-bold">DataSphere Innovation Hub</p>
              <p className="text-xs text-slate-200">Enterprise software architecture, data pipelines &amp; digital consulting</p>
            </div>
            <span className="self-start sm:self-auto rounded-md bg-teal-500/80 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
              ISO Certified Process
            </span>
          </div>
        </div>

        {/* Lower Info & Metrics Bar */}
        <div className="grid grid-cols-3 divide-x divide-slate-100 bg-white p-4">
          <div className="px-2 sm:px-4 text-center">
            <span className="text-[11px] font-medium text-slate-500 block">Deliverables</span>
            <span className="font-display text-base sm:text-lg font-bold text-slate-900">Enterprise Apps</span>
          </div>
          <div className="px-2 sm:px-4 text-center">
            <span className="text-[11px] font-medium text-slate-500 block">Data Pipelines</span>
            <span className="font-display text-base sm:text-lg font-bold text-teal-700">Real-Time BI</span>
          </div>
          <div className="px-2 sm:px-4 text-center">
            <span className="text-[11px] font-medium text-slate-500 block">Governance</span>
            <span className="font-display text-base sm:text-lg font-bold text-slate-900">100% SLA</span>
          </div>
        </div>

      </div>
    </div>
  )
}
