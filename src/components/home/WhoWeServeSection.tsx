'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Landmark,
  Building2,
  Globe2,
  Sprout,
  Truck,
  Briefcase,
} from '@/components/Icons'
import { targetClientsDetailed } from '@/content/bigwiContent'

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Landmark,
  Building2,
  Globe2,
  Sprout,
  Truck,
  Briefcase,
}

export default function WhoWeServeSection() {
  return (
    <section id="who-we-serve" className="relative z-10 border-b border-slate-200 dark:border-stone-900 bg-slate-50/50 dark:bg-stone-950/70 py-16 sm:py-24">
      <div className="px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200 dark:border-stone-800"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80">
              <Building2 className="h-3.5 w-3.5" />
              <span>/03 Sector Focus &amp; Partners</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Who We Work With
            </h2>
            <p className="text-xs sm:text-base text-slate-600 dark:text-stone-300 max-w-2xl leading-relaxed">
              We partner with international organizations, government authorities, regional banks, and enterprises to architect and operate robust Data &amp; AI systems.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 hover:underline shrink-0"
          >
            <span>View Sector Impact</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        {/* Interactive Sector Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {targetClientsDetailed.map((sector, idx) => {
            const Icon = SECTOR_ICONS[sector.icon] || Landmark
            const xOffset = idx % 3 === 0 ? -40 : idx % 3 === 2 ? 40 : 0
            const yOffset = idx % 3 === 1 ? 40 : 25

            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, x: xOffset, y: yOffset }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: (idx % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl border border-slate-200/90 dark:border-stone-800 bg-white dark:bg-stone-900/80 p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-slate-100/50 dark:shadow-none hover:shadow-2xl hover:border-teal-500/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Top Icon Badge & Index */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-slate-950">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-stone-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {sector.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {/* Domain Focus Tags & CTA Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-stone-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {sector.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-lg bg-slate-50 dark:bg-stone-800 border border-slate-200/80 dark:border-stone-700/60 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700 dark:text-stone-300 transition-colors group-hover:border-teal-500/30"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-1 transition-transform group-hover:translate-x-1"
                  >
                    <span>Explore capabilities</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
