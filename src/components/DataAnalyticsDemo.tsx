'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Database, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Server,
  Layers,
  ArrowUpRight,
  CheckCircle2
} from '@/components/Icons'

export default function DataAnalyticsDemo() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'pipelines' | 'governance'>('architecture')

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Human Data Engineer Photo */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
          <Image
            src="/images/data-engineer.jpg"
            alt="DataSphere Data Engineer configuring modern data warehousing and analytics models"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="inline-block rounded bg-teal-600 px-2.5 py-0.5 text-xs font-semibold text-white">
              Data Engineering Team
            </span>
            <h4 className="font-display text-lg font-bold">Custom Analytics Architectures</h4>
            <p className="text-xs text-slate-200">
              Transforming unstructured databases into real-time executive decision marts.
            </p>
          </div>
        </div>

        {/* Right Column: Structured Capabilities & Tab Views */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
          {/* Header & Mode Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 dark:border-slate-800">
            <div>
              <span className="font-mono text-xs font-semibold text-teal-800 uppercase tracking-wider dark:text-teal-400">
                Enterprise Data Engine
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Business Intelligence &amp; Data Pipeline Architecture
              </h3>
            </div>

            <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-950">
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`rounded-lg px-3 py-1.5 text-xs font-sans font-medium transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold dark:bg-slate-800 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pipelines')}
                className={`rounded-lg px-3 py-1.5 text-xs font-sans font-medium transition-all ${
                  activeTab === 'pipelines'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold dark:bg-slate-800 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                ETL Pipelines
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('governance')}
                className={`rounded-lg px-3 py-1.5 text-xs font-sans font-medium transition-all ${
                  activeTab === 'governance'
                    ? 'bg-white text-slate-900 shadow-sm font-semibold dark:bg-slate-800 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                Security &amp; SLA
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'architecture' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-300">
                We engineer scalable data infrastructures that consolidate dispersed branch databases, third-party payment gateways, and core operational records into automated business intelligence marts.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950/60">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Processing SLA</span>
                  <p className="font-display text-lg font-bold text-slate-900 mt-1 dark:text-white">Sub-Second</p>
                  <span className="text-[11px] text-teal-700 font-medium dark:text-teal-400">Real-time reporting</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950/60">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Accuracy Standard</span>
                  <p className="font-display text-lg font-bold text-teal-700 mt-1 dark:text-teal-400">99.99%</p>
                  <span className="text-[11px] text-slate-600 font-medium dark:text-slate-400">Validated checksums</span>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 col-span-2 sm:col-span-1 dark:border-slate-800 dark:bg-slate-950/60">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Supported Warehouses</span>
                  <p className="font-display text-lg font-bold text-slate-900 mt-1 dark:text-white">Multi-Cloud</p>
                  <span className="text-[11px] text-slate-600 font-medium dark:text-slate-400">Postgres, ClickHouse, dbt</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-2 dark:border-slate-800 dark:bg-slate-950/60">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider dark:text-white">Enterprise Deliverables</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span>Executive KPI Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span>Automated Monthly Audit Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span>Cross-Branch Data Reconciliation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span>Predictive Inventory &amp; Revenue Models</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pipelines' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="space-y-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white mb-1">
                    <span>1. Ingestion &amp; Extract</span>
                    <span className="text-teal-700 font-mono dark:text-teal-400">REST / Webhooks / CDC</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Connects directly to operational ERPs, banking switches, and field mobile apps.</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white mb-1">
                    <span>2. Cleanse &amp; Transform</span>
                    <span className="text-slate-700 font-mono dark:text-slate-300">dbt &amp; Python</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Deduplication, schema normalization, and currency/date standardization.</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white mb-1">
                    <span>3. Executive Serving</span>
                    <span className="text-teal-700 font-mono dark:text-teal-400">PowerBI &amp; Web Apps</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Sub-second query performance for board-level reporting and daily operations.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <ShieldCheck className="h-5 w-5 text-teal-600 dark:text-teal-400 mb-2" />
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Data Privacy &amp; Compliance</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Role-based access control (RBAC), end-to-end encryption at rest (AES-256), and regional regulatory compliance.</p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60">
                  <Server className="h-5 w-5 text-slate-800 dark:text-slate-200 mb-2" />
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Continuous Monitoring</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Automated health checks, anomaly detection alerts, and 24/7 dedicated engineering support.</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
