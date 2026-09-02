'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  Cpu, 
  BarChart3, 
  Workflow, 
  Cloud, 
  Palette, 
  Rocket, 
  ShieldCheck, 
  Building2, 
  Landmark, 
  HeartPulse, 
  Globe2, 
  Sprout, 
  Truck, 
  Briefcase, 
  TrendingUp, 
  ArrowUpRight, 
  ChevronRight, 
  Send, 
  Loader2, 
  AlertCircle 
} from '@/components/Icons'

import { 
  services, 
  problems, 
  competitiveAdvantage, 
  targetClientsDetailed, 
  vision, 
  mission, 
  orgStructure, 
  featuredCaseStudies,
  Service
} from '@/content/bigwiContent'

import ProcessTimeline from '@/components/ProcessTimeline'
import TechRadar from '@/components/TechRadar'
import DataAnalyticsDemo from '@/components/DataAnalyticsDemo'

// Dynamically import 3D Hero to avoid SSR overhead and keep initial load blazing fast
const Hero3DCanvas = dynamic(() => import('@/components/Hero3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[450px] w-full items-center justify-center rounded-2xl border border-line bg-bgRaised/40">
      <div className="flex items-center gap-2 font-mono text-xs text-muted">
        <span className="h-2 w-2 rounded-full bg-brand-400 animate-ping" />
        Initializing 3D DataSphere...
      </div>
    </div>
  ),
})

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

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    organization: '',
    sector: 'Private enterprise',
    service: 'Enterprise Software Development',
    message: '',
  })

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter((s) => s.category === selectedCategory)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setContactStatus('success')
        setContactForm({
          name: '',
          email: '',
          organization: '',
          sector: 'Private enterprise',
          service: 'Enterprise Software Development',
          message: '',
        })
      } else {
        setContactStatus('error')
      }
    } catch {
      setContactStatus('error')
    }
  }

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12 overflow-hidden">
        {/* Subtle grid and background lights */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 font-mono text-xs text-brand-300 backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                <span>Digital Innovation &bull; DataSphere Division</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-ink leading-[1.1]">
                We Turn Ideas Into{' '}
                <span className="bg-gradient-to-r from-brand-300 via-cyanAccent to-brand-400 bg-clip-text text-transparent">
                  Digital Businesses.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                BIGWI HOUSE is the engineering, software, and product innovation division of <strong>DataSphere Consulting Ltd.</strong> We partner with startups, SMEs, and institutions across East Africa and globally to transform business strategy into resilient, market-ready digital products.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact" className="btn btn-primary text-sm sm:text-base py-3 px-6">
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/services" className="btn btn-ghost text-sm sm:text-base py-3 px-6">
                  <span>Explore Solutions</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Trust Metric Highlights */}
              <div className="grid grid-cols-3 gap-4 border-t border-line/80 pt-6 mt-8">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-gold">10+</div>
                  <p className="font-mono text-xs text-muted mt-0.5">Core Service Lines</p>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-brand-300">9</div>
                  <p className="font-mono text-xs text-muted mt-0.5">Target Sectors</p>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-cyanAccent">100%</div>
                  <p className="font-mono text-xs text-muted mt-0.5">Tailored Delivery</p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Dimensional Experience */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl border border-lineLight bg-gradient-to-b from-bgRaised/80 via-card/70 to-bgSubtle/90 p-2 md:p-4 backdrop-blur-2xl shadow-glass">
                <Hero3DCanvas />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POSITIONING & STRATEGIC ADVANTAGES */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-lineLight bg-gradient-to-r from-bgRaised/90 via-card/90 to-bgRaised/90 p-6 sm:p-8 backdrop-blur-xl shadow-glass">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <span className="eyebrow-gold mb-2">Competitive Edge</span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  Where business strategy and in-house engineering converge.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-muted">
                  Unlike traditional dev agencies or abstract consultancies, BIGWI HOUSE houses strategy, engineering, and data under one roof.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competitiveAdvantage.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-line/60 bg-bgRaised/50 p-3.5 transition-colors hover:border-brand-500/40"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500/20 font-mono text-xs font-bold text-brand-300">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-ink/90 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS PROBLEM → DIGITAL SOLUTION STORY */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Transformation Journey</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              From business friction to market-ready digital execution.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              You have an idea and commercial ambitions. We build the architecture, connect your data pipelines, and scale your digital operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Common Problems */}
            <div className="rounded-2xl border border-line bg-card/60 p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-red-300">
                  Frictions Organizations Face
                </h3>
              </div>

              <ul className="space-y-3">
                {problems.map((prob) => (
                  <li key={prob} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400/80 flex-shrink-0" />
                    <span>{prob}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BIGWI HOUSE Digital Solutions */}
            <div className="rounded-2xl border border-brand-500/40 bg-gradient-to-b from-brand-500/10 via-card/70 to-bgRaised p-6 sm:p-8 backdrop-blur-md shadow-glow-teal">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-3 w-3 rounded-full bg-brand-400 animate-pulse" />
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-brand-300">
                  The BIGWI HOUSE Resolution
                </h3>
              </div>

              <ul className="space-y-3.5">
                {[
                  'Enterprise-grade web & mobile platforms engineered for scale',
                  'Modern brand systems & data-driven digital marketing assets',
                  'Actionable executive dashboards turning raw telemetry into revenue decisions',
                  'AI & ML models tuned specifically to African & emerging market dynamics',
                  'Continuous SLA monitoring, security audits, and product engineering iterations',
                ].map((sol) => (
                  <li key={sol} className="flex items-start gap-3 text-sm text-ink font-medium">
                    <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 flex-shrink-0" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-brand-500/20">
                <Link href="/contact" className="btn btn-primary w-full justify-center">
                  <span>Transform Your Digital Presence</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES & DIGITAL SOLUTIONS */}
      <section id="services" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="eyebrow mb-2">Comprehensive Capabilities</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
                Ten disciplined service lines, one cohesive team.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
                From initial strategic diagnosis to custom cloud infrastructure and data telemetry, we deliver end-to-end technology solutions.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 rounded-xl border border-line bg-card/80 p-1 backdrop-blur-md">
              {['All', 'Engineering', 'Intelligence', 'Strategy', 'Design'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-mono font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-500 text-bg font-bold shadow-sm'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const Icon = SERVICE_ICONS[service.icon] || Layers
              return (
                <div
                  key={service.id}
                  className="card-enterprise flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300 group-hover:bg-brand-500 group-hover:text-bg transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] text-muted border border-line px-2 py-0.5 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-ink group-hover:text-brand-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-line/60">
                      <p className="font-mono text-[11px] text-muted mb-2">Key Deliverables:</p>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 3).map((del) => (
                          <li key={del} className="flex items-center gap-2 text-xs text-ink/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-muted">Enterprise Certified</span>
                    <Link
                      href={`/services#${service.id}`}
                      className="font-mono text-xs text-brand-300 hover:text-brand-200 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. 6-STAGE DIGITAL TRANSFORMATION PROCESS */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow mb-2">Methodology</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              The 6-Stage Engineering Lifecycle
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              Structured sprints, transparent milestone reviews, and automated verification ensure predictable delivery from day one.
            </p>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK & CAPABILITIES */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Technical Rigor</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Production-Grade Technology Architecture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              We engineer with cutting-edge languages, frameworks, cloud native orchestration, and machine learning toolchains built for enterprise longevity.
            </p>
          </div>

          <TechRadar />
        </div>
      </section>

      {/* 7. INDUSTRY SECTOR SOLUTIONS */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow-gold mb-2">Cross-Sector Impact</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Tailored for Critical Industries
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              We design specialized workflows addressing compliance, offline connectivity, security, and transaction volumes for distinct sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetClientsDetailed.map((sector) => {
              const Icon = SECTOR_ICONS[sector.icon] || Landmark
              return (
                <div
                  key={sector.name}
                  className="rounded-xl border border-line bg-card/60 p-6 backdrop-blur-md transition-all hover:border-cyanAccent/40 hover:bg-cardHover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyanAccent/15 text-cyanAccent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-base font-bold text-ink">{sector.name}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {sector.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-line/60">
                    <div className="flex flex-wrap gap-1.5">
                      {sector.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-md border border-line bg-bgRaised/70 px-2 py-0.5 font-mono text-[10px] text-brand-300"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. SELECTED CASE STUDIES & IMPACT */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow mb-2">Proven Results</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
                Featured Case Studies
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
                Real-world problem, architectural solution, and quantified business impact across enterprise deployments.
              </p>
            </div>

            <Link href="/work" className="btn btn-ghost text-sm">
              <span>View All Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="relative flex flex-col justify-between rounded-2xl border border-lineLight bg-gradient-to-b from-bgRaised/90 via-card/80 to-bgSubtle/90 p-6 md:p-8 backdrop-blur-xl shadow-glass"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-brand-300 font-semibold">{study.sector}</span>
                    <span className="font-mono text-[10px] text-muted border border-line px-2 py-0.5 rounded-full">
                      {study.clientType}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink mb-4">{study.title}</h3>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <strong className="font-mono text-[11px] text-gold uppercase block mb-1">
                        Challenge
                      </strong>
                      <p className="text-muted leading-relaxed">{study.problem}</p>
                    </div>

                    <div>
                      <strong className="font-mono text-[11px] text-brand-300 uppercase block mb-1">
                        Solution
                      </strong>
                      <p className="text-ink/90 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-line/60">
                    <div className="grid grid-cols-3 gap-2">
                      {study.metrics.map((m) => (
                        <div key={m.label} className="rounded-lg bg-bgRaised/80 p-2 text-center border border-line/50">
                          <p className="font-display text-sm font-bold text-brand-300">{m.value}</p>
                          <span className="font-mono text-[9px] text-muted block leading-tight">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60 flex flex-wrap gap-1.5">
                  {study.technologies.map((t) => (
                    <span key={t} className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. DATA & ANALYTICS VISUAL SHOWCASE */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="eyebrow mb-2">Data Intelligence</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
              Data &amp; Analytics Visualization
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              We turn raw, disparate operational data into real-time executive decision systems and predictive intelligence pipelines.
            </p>
          </div>

          <DataAnalyticsDemo />
        </div>
      </section>

      {/* 10. ABOUT BIGWI HOUSE & DATASPHERE CORPORATE STORY */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-lineLight bg-gradient-to-r from-bgRaised/90 via-card/90 to-bgRaised/90 p-8 md:p-12 backdrop-blur-xl shadow-glass">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="eyebrow">Corporate Profile</span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
                  The Product &amp; Engineering Arm of DataSphere Consulting
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  BIGWI HOUSE was created to eliminate the traditional disconnect between strategic management consulting and hands-on software delivery.
                </p>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  We function as an innovation laboratory and production studio — applying modern AI, data architectures, cloud systems, and UX design to concrete market challenges across East Africa and beyond.
                </p>

                <div className="pt-2 flex items-center gap-4">
                  <Link href="/about" className="btn btn-primary text-sm">
                    <span>Full Division Profile</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/approach" className="btn btn-ghost text-sm">
                    <span>Growth Roadmap</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="rounded-2xl border border-gold/40 bg-gold/5 p-6 backdrop-blur-md">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gold mb-2">
                    Our Vision
                  </h4>
                  <p className="text-sm text-ink leading-relaxed font-medium">
                    {vision}
                  </p>
                </div>

                <div className="rounded-2xl border border-brand-500/40 bg-brand-500/5 p-6 backdrop-blur-md">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-300 mb-2">
                    Our Mission
                  </h4>
                  <p className="text-sm text-ink leading-relaxed font-medium">
                    {mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. HIGH CONVERSION CTA SECTION */}
      <section className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/50 bg-gradient-to-r from-brand-900/60 via-card to-bgRaised p-8 sm:p-12 md:p-16 text-center backdrop-blur-2xl shadow-glow-teal">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="eyebrow">Let's Build Together</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-ink leading-tight">
                Have an idea worth building?
              </h2>
              <p className="text-base sm:text-lg text-muted">
                Let's turn your business objectives into a scalable, high-performance digital product. Start a confidential discovery conversation with our team today.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="btn btn-primary text-base py-3.5 px-8 font-bold">
                  <Sparkles className="h-4 w-4" />
                  <span>Start a Conversation</span>
                </Link>
                <Link href="/work" className="btn btn-ghost text-base py-3.5 px-8">
                  <span>View Our Work</span>
                </Link>
              </div>

              <div className="pt-6 font-mono text-xs text-muted flex items-center justify-center gap-6">
                <span>&bull; Full Technical Confidentiality</span>
                <span>&bull; Response in &lt; 24h</span>
                <span>&bull; East Africa &amp; Global Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. QUICK INQUIRY CONTACT FORM */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-wide px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow">Direct Engagement</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
                Tell us what you're building.
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Share a few parameters regarding your organization, sector, and project scope. A senior solutions architect from BIGWI HOUSE will follow up to schedule a technical discovery call.
              </p>

              <div className="rounded-2xl border border-line bg-card/60 p-6 space-y-3.5 text-xs text-muted">
                <div>
                  <strong className="block font-mono text-[11px] text-ink uppercase">Division</strong>
                  Digital Innovation &amp; Product Development, DataSphere Consulting Ltd.
                </div>
                <div>
                  <strong className="block font-mono text-[11px] text-ink uppercase">Location</strong>
                  Kigali, Rwanda &bull; Regional East African Delivery Hub
                </div>
                <div>
                  <strong className="block font-mono text-[11px] text-ink uppercase">Confidentiality Guarantee</strong>
                  All project parameters, data models, and business logic are covered by strict NDA.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl border border-lineLight bg-bgRaised/80 p-6 sm:p-8 backdrop-blur-xl shadow-glass">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hp-name" className="mb-1.5 block text-xs font-mono text-muted">
                      Full Name *
                    </label>
                    <input
                      id="hp-name"
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Jean Claude"
                      className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-sm text-ink placeholder:text-subtle focus:border-brand-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="hp-email" className="mb-1.5 block text-xs font-mono text-muted">
                      Business Email *
                    </label>
                    <input
                      id="hp-email"
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="alex@enterprise.rw"
                      className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-sm text-ink placeholder:text-subtle focus:border-brand-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hp-org" className="mb-1.5 block text-xs font-mono text-muted">
                      Organization
                    </label>
                    <input
                      id="hp-org"
                      type="text"
                      value={contactForm.organization}
                      onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                      placeholder="Company or Institution"
                      className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-sm text-ink placeholder:text-subtle focus:border-brand-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="hp-service" className="mb-1.5 block text-xs font-mono text-muted">
                      Solution Line *
                    </label>
                    <select
                      id="hp-service"
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-sm text-ink focus:border-brand-500 focus:outline-none transition-colors"
                    >
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="hp-msg" className="mb-1.5 block text-xs font-mono text-muted">
                    Project Overview &amp; Requirements *
                  </label>
                  <textarea
                    id="hp-msg"
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Describe your current system challenges, target users, deliverables, and timeline..."
                    className="w-full rounded-xl border border-line bg-card px-3.5 py-2.5 text-sm text-ink placeholder:text-subtle focus:border-brand-500 focus:outline-none transition-colors"
                  />
                </div>

                {contactStatus === 'success' && (
                  <div className="flex items-center gap-3 rounded-xl border border-brand-500/40 bg-brand-500/10 p-3.5 text-xs text-brand-300">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-400" />
                    <div>
                      <p className="font-semibold">Message Logged Successfully</p>
                      <p className="text-muted">A solutions architect from BIGWI HOUSE will review and respond promptly.</p>
                    </div>
                  </div>
                )}

                {contactStatus === 'error' && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-500/40 bg-red-500/10 p-3.5 text-xs text-red-300">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400" />
                    <div>
                      <p className="font-semibold">Submission Error</p>
                      <p>Please ensure all required fields are filled with valid values.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={contactStatus === 'loading'}
                  className="btn btn-primary w-full py-3 justify-center text-sm font-semibold"
                >
                  {contactStatus === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
