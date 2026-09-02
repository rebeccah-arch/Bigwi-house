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
    <div className="space-y-8">
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
              className={`group flex flex-col items-start rounded-xl border p-3.5 sm:p-4 text-left transition-all duration-300 ${
                isActive
                  ? 'border-brand-500 bg-brand-500/15 shadow-glow-teal scale-[1.02]'
                  : 'border-line bg-card/60 hover:border-lineLight hover:bg-card'
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span
                  className={`font-mono text-xs font-bold ${
                    isActive ? 'text-brand-300' : 'text-muted'
                  }`}
                >
                  {step.number}
                </span>
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive ? 'text-brand-300' : 'text-muted group-hover:text-ink'
                  }`}
                />
              </div>
              <h4
                className={`mt-2 font-display text-sm font-bold tracking-tight line-clamp-1 ${
                  isActive ? 'text-ink' : 'text-muted group-hover:text-ink'
                }`}
              >
                {step.title.split(' ')[0]}
              </h4>
              <span className="font-mono text-[11px] text-muted line-clamp-1">{step.tagline}</span>
            </button>
          )
        })}
      </div>

      {/* Active Stage Detailed Spotlight */}
      <div className="relative overflow-hidden rounded-2xl border border-lineLight bg-gradient-to-r from-bgRaised via-card to-bgRaised p-6 md:p-8 backdrop-blur-xl shadow-glass">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-500/20 font-mono text-sm font-bold text-brand-300 border border-brand-500/30">
                {deliveryProcess[activeStep].number}
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyanAccent">
                Stage {activeStep + 1} of 6 &bull; {deliveryProcess[activeStep].tagline}
              </span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">
              {deliveryProcess[activeStep].title}
            </h3>

            <p className="text-sm md:text-base text-muted leading-relaxed">
              {deliveryProcess[activeStep].description}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="font-mono text-xs text-brand-300 font-medium">
                Disciplined Engineering &bull; Measurable Milestones
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-xl border border-line bg-bgSubtle/80 p-5 backdrop-blur-md">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-gold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              Key Phase Deliverables
            </h4>

            <ul className="space-y-2.5">
              {deliveryProcess[activeStep].outputs.map((output) => (
                <li key={output} className="flex items-start gap-2.5 text-xs md:text-sm text-ink/90">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                  <span>{output}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted">
              <span>Next Stage:</span>
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % deliveryProcess.length)}
                className="font-mono text-brand-300 hover:text-brand-200 flex items-center gap-1 font-semibold"
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
