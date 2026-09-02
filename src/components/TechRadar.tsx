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
                  ? 'bg-gradient-to-r from-brand-500 to-cyanAccent text-bg font-bold shadow-glow-teal'
                  : 'border border-line bg-card/70 text-muted hover:border-lineLight hover:text-ink hover:bg-card'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{cat.category}</span>
            </button>
          )
        })}
      </div>

      {/* Capabilities Matrix Grid */}
      <div className="rounded-2xl border border-lineLight bg-gradient-to-b from-card/90 to-bgRaised/90 p-6 md:p-8 backdrop-blur-xl shadow-glass">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line/60 pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-brand-300">
              Technology Architecture &bull; Layer {activeCategory + 1}
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-ink">
              {techCapabilities[activeCategory].category}
            </h3>
          </div>
          <span className="font-mono text-xs text-muted">Production-Grade Standards</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {techCapabilities[activeCategory].items.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-3 rounded-xl border border-line/70 bg-bgRaised/70 p-3.5 transition-all hover:border-brand-500/40 hover:bg-bgRaised"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300 font-mono text-xs">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <span className="text-sm font-semibold text-ink">{tech}</span>
                <p className="font-mono text-[10px] text-muted">Enterprise Certified</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
