import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Server,
  Zap
} from '@/components/Icons'
import { featuredCaseStudies } from '@/content/bigwiContent'

export const metadata: Metadata = {
  title: 'Case Studies & Enterprise Work',
  description:
    'Explore featured case studies and digital transformation impact delivered by BIGWI HOUSE for enterprises, financial institutions, and NGOs.',
}

export default function WorkPage() {
  return (
    <div className="space-y-24 md:space-y-32 py-12">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 font-mono text-xs text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span>Proven Impact &bull; Architectural Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-ink leading-tight">
              Selected projects &amp; digital business transformations.
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              We focus on measurable commercial outcomes, not just code. Explore how we architect, engineer, and deploy high-concurrency systems across critical economic sectors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Case Studies List */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-16">
          {featuredCaseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="rounded-3xl border border-lineLight bg-gradient-to-b from-bgRaised/90 via-card/90 to-bgSubtle/90 p-8 md:p-12 backdrop-blur-xl shadow-glass space-y-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-line/60 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-gold">
                      Case Study 0{idx + 1}
                    </span>
                    <span className="text-muted">&bull;</span>
                    <span className="font-mono text-xs text-brand-300">{study.sector}</span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-ink">
                    {study.title}
                  </h2>
                </div>

                <span className="font-mono text-xs text-muted border border-line px-3 py-1.5 rounded-full self-start md:self-auto">
                  Client: {study.clientType}
                </span>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="rounded-2xl border border-line bg-card/60 p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-red-300">
                      The Operational Challenge
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-500/40 bg-brand-500/10 p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-400 animate-pulse" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-300">
                      The Engineering Solution
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-ink leading-relaxed font-medium">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Quantified Business Impact & Metrics */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
                  Quantified Business Impact
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-line bg-bgRaised/70 p-5 text-center"
                    >
                      <div className="font-display text-3xl font-extrabold text-brand-300">
                        {metric.value}
                      </div>
                      <p className="mt-1 font-mono text-xs text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                  {study.impact.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-line/60 bg-card/40 p-3.5 text-xs text-ink/90 font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 text-brand-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack & Action Footer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-line/60">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-muted">Engineered With:</span>
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-line bg-bgRaised px-2.5 py-1 font-mono text-[11px] text-brand-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="font-mono text-xs text-brand-300 hover:text-brand-200 flex items-center gap-1 font-semibold self-start sm:self-auto"
                >
                  <span>Build A Similar Solution</span>
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
          <div className="rounded-3xl border border-brand-500/40 bg-gradient-to-r from-bgRaised via-card to-bgRaised p-8 md:p-12 text-center backdrop-blur-xl shadow-glass space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Ready to achieve measurable digital transformation?
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm sm:text-base">
              Talk with our senior engineering architects about your organization&apos;s digital roadmap.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-primary">
                <span>Start Discovery Discussion</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
