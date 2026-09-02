import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  Shield, 
  CheckCircle2,
  Sparkles
} from '@/components/Icons'
import { services, targetClientsDetailed } from '@/content/bigwiContent'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-24 border-t border-line bg-bgSubtle/90 backdrop-blur-md">
      {/* Background glow lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="mx-auto max-w-wide px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Division Profile */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 no-underline group">
                <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-lineLight bg-bgRaised">
                  <Image
                    src="/logo-datasphere.jpeg"
                    alt="DataSphere / BIGWI HOUSE"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-brand-300 transition-colors">
                    BIGWI HOUSE
                  </h3>
                  <p className="font-mono text-xs text-muted">DataSphere Consulting Ltd.</p>
                </div>
              </Link>

              <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
                Digital Innovation &amp; Product Development Division. We turn business strategy, raw data, and bold ideas into scalable digital products and market-ready enterprise software.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/5 px-3 py-1 font-mono text-xs text-brand-300">
                  <CheckCircle2 className="h-3 w-3 text-brand-400" />
                  ISO Compliant Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-gold/5 px-3 py-1 font-mono text-xs text-gold">
                  <Sparkles className="h-3 w-3 text-gold" />
                  East Africa Hub
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-line/60 space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-muted">
                <MapPin className="h-4 w-4 text-brand-400 flex-shrink-0" />
                <span>Kigali, Rwanda &bull; East Africa Regional Operations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-muted">
                <Mail className="h-4 w-4 text-brand-400 flex-shrink-0" />
                <span>consulting@datasphere.rw &bull; bigwi@datasphere.rw</span>
              </div>
            </div>
          </div>

          {/* Solutions & Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-300">
              Solutions &amp; Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-muted hover:text-ink transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:text-brand-300 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Industries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyanAccent">
              Sectors &amp; Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              {targetClientsDetailed.slice(0, 6).map((client) => (
                <li key={client.name}>
                  <Link
                    href="/services#sectors"
                    className="text-muted hover:text-ink transition-colors flex items-center justify-between group"
                  >
                    <span>{client.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:text-cyanAccent transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-gold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-muted hover:text-ink transition-colors">
                  About BIGWI HOUSE
                </Link>
              </li>
              <li>
                <Link href="/about#structure" className="text-muted hover:text-ink transition-colors">
                  DataSphere Structure
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-muted hover:text-ink transition-colors">
                  Growth &amp; Delivery Method
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted hover:text-ink transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-ink transition-colors">
                  Start an Engagement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-line/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p className="font-mono text-[11px]">
            &copy; {currentYear} DataSphere Consulting Ltd. All rights reserved. BIGWI HOUSE Digital Innovation &amp; Product Development.
          </p>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <Link href="/about" className="hover:text-ink transition-colors">
              Privacy &amp; Confidentiality
            </Link>
            <Link href="/about" className="hover:text-ink transition-colors">
              Terms of Engagement
            </Link>
            <span className="text-brand-400">&bull;</span>
            <span className="text-ink font-semibold">We Turn Ideas Into Digital Businesses</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
