'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Activity,
} from '@/components/Icons'
import { services } from '@/content/bigwiContent'

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Cpu,
  Activity,
  Layers,
  BarChart3,
  Workflow,
  Smartphone,
  Cloud,
  ShieldCheck,
}

export default function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [servicePage, setServicePage] = useState<number>(0)
  const SERVICES_PER_PAGE = 3

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat)
    setServicePage(0)
  }

  function catMap(label: string) {
    if (label === 'AI & ML') return 'AI & Machine Learning'
    if (label === 'Data & BI') return 'Data & Analytics'
    if (label === 'Advisory') return 'Data & AI Consultancy'
    if (label === 'Digital') return 'Digital Solutions'
    return label
  }

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter((s) => s.category === catMap(selectedCategory))

  const totalServicePages = Math.max(1, Math.ceil(filteredServices.length / SERVICES_PER_PAGE))
  const currentServicePage = Math.min(servicePage, totalServicePages - 1)
  const paginatedServices = filteredServices.slice(
    currentServicePage * SERVICES_PER_PAGE,
    (currentServicePage + 1) * SERVICES_PER_PAGE
  )

  const handlePrevService = () => {
    setServicePage((prev) => Math.max(0, prev - 1))
  }

  const handleNextService = () => {
    setServicePage((prev) => Math.min(totalServicePages - 1, prev + 1))
  }

  return (
    <section id="services" className="relative z-10 bg-slate-50/40 dark:bg-stone-950">
      <div className="p-8 sm:p-10 md:p-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-semibold text-teal-800 dark:text-teal-400 uppercase tracking-widest">
              /04 Services Directory
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mt-1 tracking-tight">
              Specialized Capabilities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Organized around client operational needs: machine learning models, data pipelines, business analytics, and supporting software.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 rounded-xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-1">
              {['All', 'AI & ML', 'Data & BI', 'Advisory', 'Digital'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-sans font-medium transition-all ${selectedCategory === cat
                    ? 'bg-slate-900 text-white font-semibold shadow-sm dark:bg-teal-500 dark:text-slate-950'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white dark:hover:bg-stone-800'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Prev / Next Quick Header Controls */}
            <div className="hidden sm:flex items-center gap-1.5 border border-slate-200 dark:border-stone-800 rounded-xl p-1 bg-white dark:bg-stone-900">
              <button
                type="button"
                onClick={handlePrevService}
                disabled={currentServicePage === 0}
                aria-label="Previous capabilities page"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400 px-2 font-medium">
                {String(currentServicePage + 1).padStart(2, '0')} / {String(totalServicePages).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handleNextService}
                disabled={currentServicePage >= totalServicePages - 1}
                aria-label="Next capabilities page"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Paginated Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`page-${currentServicePage}-${selectedCategory}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[360px]"
          >
            {paginatedServices.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || Layers
              return (
                <div
                  key={service.id}
                  className="card-enterprise flex flex-col justify-between group h-full bg-white dark:bg-stone-900/90 border border-slate-200 dark:border-stone-800 rounded-2xl p-6"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 border border-teal-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800 dark:group-hover:bg-teal-500 dark:group-hover:text-slate-950 dark:group-hover:border-teal-400 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-stone-800 border border-slate-200 dark:border-stone-700 px-2.5 py-0.5 rounded-full font-medium">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-stone-800">
                      <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 font-semibold mb-2">Key Deliverables:</p>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 3).map((del) => (
                          <li key={del} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal-600 dark:text-teal-400 flex-shrink-0" />
                            <span className="line-clamp-1">{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-stone-800 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500">Production Ready</span>
                    <Link
                      href={`/services#${service.id}`}
                      className="font-sans text-xs text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore details</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Pagination & Navigation Controls */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/80 dark:border-stone-800">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Showing{' '}
            <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">
              {filteredServices.length === 0 ? 0 : currentServicePage * SERVICES_PER_PAGE + 1}–
              {Math.min((currentServicePage + 1) * SERVICES_PER_PAGE, filteredServices.length)}
            </span>{' '}
            of{' '}
            <span className="font-mono font-semibold text-slate-900 dark:text-slate-200">
              {filteredServices.length}
            </span>{' '}
            services
          </div>

          {/* Pagination Dots */}
          {totalServicePages > 1 && (
            <div className="flex items-center gap-2">
              {Array.from({ length: totalServicePages }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setServicePage(idx)}
                  aria-label={`Go to page ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${currentServicePage === idx
                    ? 'w-8 bg-teal-600 dark:bg-teal-400'
                    : 'w-2 bg-slate-300 dark:bg-stone-700 hover:bg-slate-400 dark:hover:bg-stone-600'
                    }`}
                />
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrevService}
              disabled={currentServicePage === 0}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={handleNextService}
              disabled={currentServicePage >= totalServicePages - 1}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-stone-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
