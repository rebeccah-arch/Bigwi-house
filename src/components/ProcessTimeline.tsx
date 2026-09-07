'use client'

import React, { useState } from 'react'
import { 
  Search, 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from '@/components/Icons'
import { deliveryProcess } from '@/content/bigwiContent'

const ICONS_MAP: Record<string, React.ElementType> = {
  Search,
  Compass,
  Figma: Palette,
  Code2,
  Rocket,
  TrendingUp,
}

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="space-y-6">
      {/* Step Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {deliveryProcess.map((step, idx) => {
          const Icon = ICONS_MAP[step.icon] || Code2
          const isActive = activeStep === idx

          return (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`group flex flex-col items-start rounded-xl border p-3.5 sm:p-4 text-left transition-all duration-200 ${
                isActive
                  ? 'border-slate-900 bg-slate-900 text-white shadow-md dark:border-teal-500/50 dark:bg-slate-800 dark:text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span
                  className={`font-mono text-xs font-bold ${
                    isActive ? 'text-teal-400' : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {step.number}
                </span>
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive ? 'text-teal-300' : 'text-slate-400 group-hover:text-slate-900 dark:text-slate-500 dark:group-hover:text-slate-200'
                  }`}
                />
              </div>
              <h4
                className={`mt-2 font-display text-sm font-bold tracking-tight line-clamp-1 ${
                  isActive ? 'text-white' : 'text-slate-900 dark:text-slate-200'
                }`}
              >
                {step.title.split(' ')[0]}
              </h4>
              <span className={`font-sans text-xs line-clamp-1 ${isActive ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                {step.tagline}
              </span>
            </button>
          )
        })}
      </div>

      {/* Active Stage Detailed Spotlight */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 font-mono text-sm font-bold text-teal-800 border border-teal-200 dark:bg-teal-950/50 dark:text-teal-400 dark:border-teal-800/60">
                {deliveryProcess[activeStep].number}
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                Stage {activeStep + 1} of 6 &bull; {deliveryProcess[activeStep].tagline}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              {deliveryProcess[activeStep].title}
            </h3>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed dark:text-slate-300">
              {deliveryProcess[activeStep].description}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">
                Disciplined Engineering &bull; Rigorous Milestone Governance
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/60">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400" />
              Key Phase Deliverables
            </h4>

            <ul className="space-y-2.5">
              {deliveryProcess[activeStep].outputs.map((output) => (
                <li key={output} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-600 dark:bg-teal-400 flex-shrink-0" />
                  <span>{output}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Next Stage:</span>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % deliveryProcess.length)}
                className="font-sans text-teal-700 hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-300 flex items-center gap-1 font-semibold"
              >
                {deliveryProcess[(activeStep + 1) % deliveryProcess.length].title}
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
