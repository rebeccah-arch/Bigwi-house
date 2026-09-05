import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowUpRight, 
  Mail, 
  MapPin, 
  CheckCircle2,
  Sparkles
} from '@/components/Icons'
import { services, targetClientsDetailed } from '@/content/bigwiContent'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-wide px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Division Profile */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-flex items-center gap-3.5 no-underline group">
                <Image
                  src="/logo-datasphere.jpeg"
                  alt="DataSphere Consulting Ltd"
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    DataSphere
                  </h3>
                  <p className="font-sans text-xs text-slate-500 font-medium">DataSphere Consulting Ltd</p>
                </div>
              </Link>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
                Enterprise Data Engineering &amp; Custom Software Solutions. We architect robust platforms, data pipelines, predictive intelligence, and digital products for high-growth organizations.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs text-teal-800 font-medium">
                  <CheckCircle2 className="h-3 w-3 text-teal-600" />
                  ISO Standard Engineering
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-700 font-medium shadow-sm">
                  <Sparkles className="h-3 w-3 text-amber-500" />
                  East Africa Hub
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <MapPin className="h-4 w-4 text-teal-600 flex-shrink-0" />
                <span>Kigali, Rwanda &bull; Regional Operations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                <Mail className="h-4 w-4 text-teal-600 flex-shrink-0" />
                <span>info@datasphere.rw &bull; consulting@datasphere.rw</span>
              </div>
            </div>
          </div>

          {/* Solutions & Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-800">
              Solutions &amp; Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:text-teal-600 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Industries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-800">
              Sectors &amp; Industries
            </h4>
            <ul className="space-y-2.5 text-sm">
              {targetClientsDetailed.slice(0, 6).map((client) => (
                <li key={client.name}>
                  <Link
                    href="/services#sectors"
                    className="text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-between group"
                  >
                    <span>{client.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 group-hover:text-slate-900 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-800">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About DataSphere
                </Link>
              </li>
              <li>
                <Link href="/about#structure" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Company Architecture
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Delivery Framework
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-sans font-medium text-slate-600">
            &copy; {currentYear} DataSphere Consulting Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6 font-medium">
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Privacy &amp; Data Security
            </Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <span className="text-teal-600">&bull;</span>
            <span className="text-slate-900 font-semibold">Transforming Enterprise Data into Value</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

