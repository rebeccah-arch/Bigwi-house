'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Workflow,
  CheckCircle2,
} from '@/components/Icons'
import { growthPhases } from '@/content/bigwiContent'

export default function HowWeDeliverSection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0)

  return (
    <div className="relative w-full bg-white dark:bg-stone-950 transition-colors duration-300">
      {/* Top Arch Canopy Curve */}
      <div className="w-full overflow-hidden leading-none -mb-[1px]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 lg:h-28 block text-[#080d1a]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 L0,65 Q35,32 90,26 L450,14 Q600,0 720,0 Q840,0 990,14 L1350,26 Q1405,32 1440,65 L1440,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <section id="how-we-deliver" className="relative z-10 w-full bg-[#080d1a] text-white pt-6 pb-16 sm:pb-24 overflow-hidden">
        {/* Ambient Lighting & Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-teal-500/10 blur-[120px]" />

        <div className="px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950/80 border border-teal-500/30">
              <Workflow className="h-3.5 w-3.5" />
              <span>How We Deliver</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              The DataSphere Implementation Engine
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              From fragmented organizational records to production-hardened machine learning systems — engineered through three disciplined milestones.
            </p>
          </motion.div>

          {/* 3-Step Interactive Process Deck */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left Column: Interactive Step Selector */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
              {growthPhases.map((phase, idx) => {
                const isActive = activePhaseIndex === idx
                return (
                  <motion.button
                    key={phase.step}
                    type="button"
                    onClick={() => setActivePhaseIndex(idx)}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`w-full text-left p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${isActive
                      ? 'border-teal-400/60 bg-white/10 backdrop-blur-xl shadow-2xl shadow-teal-500/10 scale-[1.02]'
                      : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isActive ? 'text-teal-400' : 'text-stone-400'
                        }`}>
                        {phase.step}
                      </span>
                      {isActive && (
                        <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                      )}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {phase.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-300">
                      {phase.subtitle}
                    </p>
                  </motion.button>
                )
              })}
            </div>

            {/* Right Column: Active Step Stage Details & Deliverables Showcase */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhaseIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                >
                  {/* Background Graphic Watermark */}
                  <span className="pointer-events-none absolute -bottom-10 -right-6 font-display font-black text-9xl text-white/[0.03] select-none">
                    0{activePhaseIndex + 1}
                  </span>

                  <div className="space-y-6 relative z-10">
                    <div>
                      <span className="font-mono text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">
                        {growthPhases[activePhaseIndex].step} Milestone
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {growthPhases[activePhaseIndex].name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-300 mt-1">
                        {growthPhases[activePhaseIndex].subtitle}
                      </p>
                    </div>
                    {/* Deliverables Checklist */}
                    <div className="space-y-3.5 pt-4 border-t border-white/10">
                      <span className="font-mono text-xs uppercase tracking-wider text-stone-400 font-semibold block">
                        Key Deliverables &amp; Engineering Activities:
                      </span>
                      {growthPhases[activePhaseIndex].items.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 mt-0.5">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                    <span className="font-mono text-xs text-stone-400">
                      Phase 0{activePhaseIndex + 1} of 03 &bull; SLA Protected Delivery
                    </span>
                    <Link
                      href="/approach"
                      className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-2.5 text-xs font-bold text-slate-950 hover:bg-teal-400 transition-all shadow-md hover:scale-105"
                    >
                      <span>Explore full methodology</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Live Impact Counters Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-t border-white/10 pt-12"
          >
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                15M+
              </span>
              <span className="font-mono text-xs text-stone-400 block mt-1">
                Data Records Processed
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                &lt; 4 Hours
              </span>
              <span className="font-mono text-xs text-stone-400 block mt-1">
                Average Underwriting Time
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                99.2%
              </span>
              <span className="font-mono text-xs text-stone-400 block mt-1">
                Production Model Accuracy
              </span>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-teal-400 block tracking-tight">
                100%
              </span>
              <span className="font-mono text-xs text-stone-400 block mt-1">
                Data &amp; IP Sovereignty
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Arch Canopy Curve */}
      <div className="w-full overflow-hidden leading-none -mt-[1px]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 lg:h-28 block text-[#080d1a]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,35 Q35,68 90,74 L450,86 Q600,100 720,100 Q840,100 990,86 L1350,74 Q1405,68 1440,35 L1440,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}
