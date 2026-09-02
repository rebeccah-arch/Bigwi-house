import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Layers, 
  Smartphone, 
  Cpu, 
  BarChart3, 
  Workflow, 
  Cloud, 
  Palette, 
  Rocket, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Landmark, 
  HeartPulse, 
  Building2, 
  Globe2, 
  Sprout, 
  Truck, 
  Briefcase, 
  TrendingUp 
} from '@/components/Icons'
import { services, targetClientsDetailed } from '@/content/bigwiContent'

export const metadata: Metadata = {
  title: 'Services & Digital Solutions',
  description:
    'Explore the ten core engineering, data intelligence, and digital transformation service lines delivered by BIGWI HOUSE.',
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Layers,
  Smartphone,
  Cpu,
  BarChart3,
  Workflow,
  Cloud,
  Palette,
  Megaphone: Palette,
  Rocket,
  ShieldCheck,
}

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Landmark,
  HeartPulse,
  Building2,
  Globe2,
  GraduationCap: Building2,
  Sprout,
  Truck,
  Briefcase,
  TrendingUp,
}

export default function ServicesPage() {
  return (
    <div className="space-y-24 md:space-y-32 py-12">
      {/* 1. Header Banner */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 font-mono text-xs text-brand-300">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span>Full-Stack Engineering &amp; Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-ink leading-tight">
              Ten disciplined service lines, one cohesive delivery unit.
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed">
              From high-concurrency enterprise software and native mobile applications to custom machine learning pipelines and real-time BI telemetry, we build for durability and commercial impact.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed 10 Service Lines */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon] || Layers

              return (
                <div
                  id={service.id}
                  key={service.id}
                  className="card-enterprise flex flex-col justify-between p-8 scroll-mt-28"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-gold">
                            0{idx + 1} &bull; {service.category}
                          </span>
                          <h2 className="font-display text-xl font-bold text-ink">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 rounded-xl border border-line/70 bg-bgRaised/60 p-4">
                      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-300">
                        Primary Deliverables &amp; Outcomes
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2 text-xs text-ink/90">
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand-400 mt-0.5 flex-shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stacks */}
                    <div>
                      <span className="font-mono text-[11px] text-muted block mb-2">
                        Core Tech Stack &amp; Toolchains:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techHighlights.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-line bg-card/80 px-2.5 py-1 font-mono text-[11px] text-brand-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">Production SLA Ready</span>
                    <Link
                      href="/contact"
                      className="font-mono text-xs text-brand-300 hover:text-brand-200 flex items-center gap-1 font-semibold"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Target Sectors & Clients */}
      <section id="sectors" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow-gold mb-2">Industry Focus</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Who We Serve
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              We engineer specialized technology solutions across institutional, private enterprise, and high-growth SME domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetClientsDetailed.map((sector) => {
              const Icon = SECTOR_ICONS[sector.icon] || Landmark
              return (
                <div
                  key={sector.name}
                  className="rounded-2xl border border-line bg-card/60 p-6 backdrop-blur-md hover:border-brand-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-ink">{sector.name}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line/60">
                    {sector.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded bg-bgRaised px-2 py-0.5 font-mono text-[10px] text-muted"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-brand-500/40 bg-gradient-to-r from-bgRaised via-card to-bgRaised p-8 md:p-12 text-center backdrop-blur-xl shadow-glass space-y-6">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Need a tailored engineering engagement?
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm sm:text-base">
              Whether you require a full-stack digital product from scratch or specialized data engineering for an existing system, our team is ready.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-primary">
                <span>Start Project Conversation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
