import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
} from '@/components/Icons'
import { growthPhases } from '@/content/bigwiContent'
import ProcessTimeline from '@/components/ProcessTimeline'
import TechRadar from '@/components/TechRadar'

export const metadata: Metadata = {
  title: 'Delivery Framework & Approach | DataSphere Consulting Ltd',
  description:
    'Discover the growth roadmap and rigorous 6-stage engineering delivery methodology of DataSphere Consulting Ltd.',
}

export default function ApproachPage() {
  return (
    <div className="space-y-20 md:space-y-28 py-10">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1.5 font-mono text-xs text-teal-800 font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-teal-600" />
              <span>Execution Methodology &bull; Delivery Framework</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight">
              Our engineering strategy &amp; delivery framework.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A transparent, disciplined roadmap published so enterprise partners, institutions, and clients understand our software engineering lifecycle and quality governance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Growth Phases (Foundation, Expansion, Regional Hub) */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Roadmap Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Three-Tier Strategic Roadmap
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Structured institutional scaling from regional delivery hub to pan-African data &amp; software leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {growthPhases.map((phase, idx) => {
              return (
                <div
                  key={phase.name}
                  className="card-enterprise flex flex-col justify-between p-8 relative overflow-hidden group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 font-mono text-sm font-bold text-teal-800 border border-teal-200">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full font-medium">
                        {phase.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {phase.name}
                      </h3>
                      <p className="font-sans text-xs text-slate-500 font-medium mt-1">{phase.subtitle}</p>
                    </div>

                    <ul className="mt-6 space-y-3 pt-4 border-t border-slate-100">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <span className="font-sans text-xs text-slate-400 font-medium block">
                      Status: {idx === 0 ? 'Active Execution' : idx === 1 ? 'In Progress' : 'Planned Scaling'}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. 6-Stage Engineering Process */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow-navy mb-2">Delivery Discipline</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              End-to-End Delivery Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              How we take complex business challenges through disciplined sprints from technical discovery to long-term SLA scaling.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 4. Technology Stack */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Engineering Standards</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
              Technical Stack &amp; Infrastructure
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Built on production-hardened toolchains, cloud-native frameworks, and automated CI/CD pipelines.
            </p>
          </div>

          <TechRadar />
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-8 md:p-12 text-center shadow-xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Ready to embark on a structured software build?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Align your product roadmap with an engineering partner that delivers measurable business outcomes.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-teal">
                <span>Engage Our Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
