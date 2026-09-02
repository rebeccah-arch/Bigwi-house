import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Building2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Target, 
  Cpu, 
  Globe2, 
  ShieldCheck 
} from '@/components/Icons'
import { 
  orgStructure, 
  vision, 
  mission, 
  competitiveAdvantage, 
  targetClientsDetailed 
} from '@/content/bigwiContent'

export const metadata: Metadata = {
  title: 'About BIGWI HOUSE & DataSphere Corporate Profile',
  description:
    'Learn about BIGWI HOUSE, the Digital Innovation and Product Development Division of DataSphere Consulting Ltd. Bridging business strategy, software engineering, and emerging market innovation.',
}

export default function AboutPage() {
  return (
    <div className="space-y-24 md:space-y-32 py-12">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 font-mono text-xs text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span>Corporate Profile &bull; Capability Division</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-ink leading-tight">
              Where business strategy and engineering meet.
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              BIGWI HOUSE is the Digital Innovation and Product Development Division of{' '}
              <strong className="text-ink font-semibold">DataSphere Consulting Ltd.</strong>, established to bridge the gap between business strategy, modern software engineering, and regional digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Dual-Tier Corporate Structure */}
      <section id="structure" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Organizational Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Where BIGWI HOUSE sits inside DataSphere Consulting
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              A dual-tier structure combining executive management advisory with deep in-house engineering and product development capability.
            </p>
          </div>

          <div className="space-y-6">
            {/* Parent Firm: DataSphere Consulting */}
            <div className="rounded-2xl border border-gold/40 bg-gradient-to-r from-bgRaised/90 via-card to-bgRaised/90 p-6 md:p-8 backdrop-blur-xl shadow-glass">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line/60 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">{orgStructure.parent.label}</h3>
                    <p className="font-mono text-xs text-gold">{orgStructure.parent.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted border border-line px-3 py-1 rounded-full">
                  Tier 1: Parent Advisory &amp; Analytics
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {orgStructure.parent.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-line/60 bg-bgRaised/60 p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-ink/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Flow Arrow */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-brand-300">
                <span>Integrated Strategic &bull; Engineering Pipeline</span>
                <span className="text-gold">&darr;</span>
              </div>
            </div>

            {/* Child Division: BIGWI HOUSE */}
            <div className="rounded-2xl border border-brand-500/50 bg-gradient-to-r from-brand-950/40 via-card to-bgRaised p-6 md:p-8 backdrop-blur-xl shadow-glow-teal">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-500/30 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">{orgStructure.child.label}</h3>
                    <p className="font-mono text-xs text-brand-300">{orgStructure.child.tagline}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-brand-300 border border-brand-500/30 bg-brand-500/10 px-3 py-1 rounded-full">
                  Tier 2: Engineering &amp; Delivery Division
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {orgStructure.child.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-lineLight/60 bg-bgRaised/80 p-3 hover:border-brand-500/40 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-ink font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/10 to-card/70 p-8 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Our Vision</h3>
              </div>
              <p className="text-sm sm:text-base text-ink/90 leading-relaxed font-medium">
                {vision}
              </p>
            </div>

            <div className="rounded-2xl border border-brand-500/40 bg-gradient-to-b from-brand-500/10 to-card/70 p-8 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl font-bold text-ink">Our Mission</h3>
              </div>
              <p className="text-sm sm:text-base text-ink/90 leading-relaxed font-medium">
                {mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Philosophy & Innovation Lab */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-lineLight bg-card/70 p-8 md:p-12 backdrop-blur-xl space-y-6">
            <span className="eyebrow">Innovation Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Applied Technology for Real-World African Realities
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                Every engagement at BIGWI HOUSE starts with a <strong>business-first mindset</strong>: diagnosing core commercial objectives and operational constraints before recommending technology. We never force generic software templates onto unique enterprise challenges.
              </p>
              <p>
                The division functions as an active <strong>innovation laboratory</strong>, applying applied machine learning, data engineering, cloud-native DevOps, and GIS mapping to concrete problems across East Africa. We design resilient systems capable of operating in low-bandwidth, offline, and high-concurrency environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Competitive Advantages */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="eyebrow-gold mb-2">Key Differentiators</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              What sets BIGWI HOUSE apart
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              Why leading enterprises, financial institutions, and international organizations choose us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantage.map((adv, idx) => (
              <div
                key={adv}
                className="card-enterprise flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-gold">0{idx + 1}</span>
                  <h3 className="mt-3 font-display text-base font-bold text-ink">{adv}</h3>
                </div>
                <div className="mt-4 pt-3 border-t border-line/60">
                  <span className="font-mono text-[11px] text-brand-300">Guaranteed Execution Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-500/40 bg-gradient-to-r from-bgRaised via-card to-bgRaised p-8 md:p-12 text-center backdrop-blur-xl shadow-glass space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Ready to work with a dedicated engineering division?
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm sm:text-base">
              Schedule a technical discovery call with our solutions architects to explore how we can turn your strategy into scalable digital software.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-primary">
                <span>Start Discovery Call</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
