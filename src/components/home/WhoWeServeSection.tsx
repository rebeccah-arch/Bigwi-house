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
    <section id="who-we-serve" className="relative z-10 border-b border-slate-200 dark:border-stone-800 bg-[#f8fafc] dark:bg-[#080a11] py-20 sm:py-28 transition-colors duration-300">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto space-y-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-stone-800"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Target Sectors
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-950 dark:text-white tracking-tight leading-tight">
              Who We Work With
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
              We partner with financial institutions, government authorities, international organizations, and enterprise leaders to architect, deploy, and scale production data infrastructure and analytical systems.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline shrink-0"
          >
            <span>Explore all practice capabilities</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        {/* Interactive Sector Cards Grid (Clean layout without focusAreas tags) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {targetClientsDetailed.map((sector, idx) => {
            const Icon = SECTOR_ICONS[sector.icon] || Landmark

            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900/50 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Icon Badge & Index */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-stone-800 text-slate-900 dark:text-blue-400 border border-slate-200 dark:border-stone-700 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 dark:text-stone-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-950 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sector.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-stone-300 leading-relaxed font-normal">
                    {sector.description}
                  </p>
                </div>

                {/* Direct CTA Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-stone-800/80 flex items-center justify-between">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline transition-transform group-hover:translate-x-1"
                  >
                    <span>View practice solutions</span>
                    <ArrowRight className="h-3 w-3" />
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
