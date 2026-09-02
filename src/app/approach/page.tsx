import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  TrendingUp, 
  Layers, 
  Globe2, 
  ShieldCheck 
} from '@/components/Icons'
import { growthPhases } from '@/content/bigwiContent'
import ProcessTimeline from '@/components/ProcessTimeline'
import TechRadar from '@/components/TechRadar'

export const metadata: Metadata = {
  title: 'Strategic Growth & Engineering Approach',
  description:
    'Discover the three-phase growth roadmap and rigorous 6-stage engineering delivery methodology of BIGWI HOUSE.',
}

export default function ApproachPage() {
  return (
    <div className="space-y-24 md:space-y-32 py-12">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 font-mono text-xs text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span>Execution Methodology &bull; Internal Roadmap</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-ink leading-tight">
              Our growth strategy &amp; delivery framework, phase by phase.
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              This is the strategic roadmap and operational discipline we use internally — published transparently so enterprise partners, investors, and clients can see where we are headed.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Growth Phases (Foundation, Expansion, Regional Growth) */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Roadmap Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Three-Tier Strategic Growth Roadmap
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              Structured institutional scaling from national delivery hub to pan-African digital product leader.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {growthPhases.map((phase, idx) => {
              return (
                <div
                  key={phase.name}
                  className="card-enterprise flex flex-col justify-between p-8 relative overflow-hidden group"
                >
                  {/* Top accent badge */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 font-mono text-sm font-bold text-gold border border-gold/30">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-xs text-brand-300 border border-brand-500/30 bg-brand-500/10 px-2.5 py-0.5 rounded-full">
                        {phase.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-bold text-ink group-hover:text-brand-300 transition-colors">
                        {phase.name}
                      </h3>
                      <p className="font-mono text-xs text-muted mt-1">{phase.subtitle}</p>
                    </div>

                    <ul className="mt-6 space-y-3 pt-4 border-t border-line/60">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/90">
                          <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-line/60">
                    <span className="font-mono text-[11px] text-muted block">
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
            <span className="eyebrow-gold mb-2">Delivery Discipline</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              End-to-End Delivery Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              How we take complex business challenges through disciplined sprints from discovery to long-term SLA scaling.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 4. Technology Radar */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Engineering Standards</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Technical Stack &amp; Infrastructure
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              Built on production-hardened toolchains, cloud-native frameworks, and automated CI/CD pipelines.
            </p>
          </div>

          <TechRadar />
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-500/40 bg-gradient-to-r from-bgRaised via-card to-bgRaised p-8 md:p-12 text-center backdrop-blur-xl shadow-glass space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Ready to embark on a structured digital build?
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm sm:text-base">
              Align your product roadmap with an engineering division that delivers measurable business outcomes.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-primary">
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
