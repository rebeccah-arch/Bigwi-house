'use client'

import React, { useState } from 'react'
import { 
  Layout, 
  Server, 
  Smartphone, 
  Brain, 
  Database, 
  CloudLightning,
  CheckCircle2,
  Cpu
} from '@/components/Icons'
import { techCapabilities } from '@/content/bigwiContent'

const ICON_MAP: Record<string, React.ElementType> = {
  Layout,
  Server,
  Smartphone,
  Brain,
  Database,
  CloudLightning,
}

export default function TechRadar() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="space-y-6">
      {/* Category Selection Pills */}
      <div className="flex flex-wrap gap-2">
        {techCapabilities.map((cat, idx) => {
          const Icon = ICON_MAP[cat.icon] || Cpu
          const isActive = activeCategory === idx

          return (
            <button
              key={cat.category}
              type="button"
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-all ${
                isActive
                  ? 'bg-slate-900 text-white font-bold shadow-sm dark:bg-teal-500 dark:text-slate-950'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{cat.category}</span>
            </button>
          )
        })}
      </div>

      {/* Capabilities Matrix Grid */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-teal-800 font-semibold dark:text-teal-400">
              Technology Architecture &bull; Layer {activeCategory + 1}
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {techCapabilities[activeCategory].category}
            </h3>
          </div>
          <span className="font-sans text-xs text-slate-500 dark:text-slate-400 font-medium">Production-Grade Standards</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {techCapabilities[activeCategory].items.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 transition-all hover:border-teal-500/40 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-teal-500/40 dark:hover:bg-slate-950"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700 font-mono text-xs border border-teal-200 dark:bg-teal-950/50 dark:text-teal-400 dark:border-teal-800/60">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{tech}</span>
                <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 font-medium">Enterprise Certified</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
