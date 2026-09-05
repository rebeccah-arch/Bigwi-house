import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
} from '@/components/Icons'
import { featuredCaseStudies } from '@/content/bigwiContent'

export const metadata: Metadata = {
  title: 'Case Studies & Enterprise Work | DataSphere Consulting Ltd',
  description:
    'Explore featured case studies and digital transformation impact delivered by DataSphere Consulting Ltd for enterprises, financial institutions, and NGOs.',
}

export default function WorkPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 font-mono text-xs text-teal-800 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-teal-600" />
              <span>Proven Impact &bull; Architectural Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              Selected projects &amp; enterprise transformations.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We focus on measurable commercial outcomes, system uptime, and data integrity. Explore how we architect, engineer, and deploy high-concurrency systems across critical economic sectors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Case Studies List */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-12">
          {featuredCaseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                      Case Study 0{idx + 1}
                    </span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="font-sans text-xs text-slate-600 font-medium">{study.sector}</span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-slate-900">
                    {study.title}
                  </h2>
                </div>

                <span className="font-mono text-xs text-slate-600 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-full self-start md:self-auto font-medium">
                  Client: {study.clientType}
                </span>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-600" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900">
                      The Operational Challenge
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-teal-200 bg-teal-50/50 p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-900">
                      The Engineering Solution
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Quantified Business Impact & Metrics */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                  Quantified Business Impact
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
                    >
                      <div className="font-display text-3xl font-extrabold text-teal-800">
                        {metric.value}
                      </div>
                      <p className="mt-1 font-sans text-xs text-slate-500 font-medium">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                  {study.impact.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Action Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-sans text-xs text-slate-500 font-semibold">Engineered With:</span>
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-white px-2.5 py-1 font-mono text-[11px] text-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="font-sans text-xs text-teal-700 hover:text-teal-900 flex items-center gap-1 font-semibold self-start sm:self-auto"
                >
                  <span>Build A Similar Platform</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Ready to achieve measurable enterprise transformation?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Talk with our senior engineering architects about your organization&apos;s digital roadmap.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal">
                <span>Start Technical Discovery</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
