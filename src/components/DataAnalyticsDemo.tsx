'use client'

import React, { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Database, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Server, 
  RefreshCw,
  Layers,
  ArrowUpRight
} from '@/components/Icons'

export default function DataAnalyticsDemo() {
  const [activeTab, setActiveTab] = useState<'realtime' | 'pipeline' | 'models'>('realtime')
  const [selectedMetric, setSelectedMetric] = useState(0)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-lineLight/80 bg-gradient-to-b from-bgRaised/90 via-card/90 to-bgSubtle/90 p-6 md:p-8 backdrop-blur-xl shadow-glass">
      {/* Header with Live simulation badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line/60 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-300">
              DataSphere Intelligence Engine &bull; Live Telemetry
            </span>
          </div>
          <h3 className="mt-1 font-display text-xl md:text-2xl font-bold text-ink">
            Interactive Data &amp; Business Intelligence Architecture
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex rounded-xl border border-line bg-card/80 p-1 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setActiveTab('realtime')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
              activeTab === 'realtime'
                ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30 shadow-sm'
                : 'text-muted hover:text-ink'
            }`}
          >
            <Activity className="h-3.5 w-3.5" />
            <span>Real-Time Stream</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pipeline')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
              activeTab === 'pipeline'
                ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30 shadow-sm'
                : 'text-muted hover:text-ink'
            }`}
          >
            <Database className="h-3.5 w-3.5" />
            <span>ETL Pipeline</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('models')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all ${
              activeTab === 'models'
                ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30 shadow-sm'
                : 'text-muted hover:text-ink'
            }`}
          >
            <Cpu className="h-3.5 w-3.5" />
            <span>AI Models</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
        {[
          { label: 'Event Throughput', val: '48.2k msg/s', sub: '+18.4% vs peak', icon: Zap, color: 'text-brand-300' },
          { label: 'Pipeline Latency', val: '12.4 ms', sub: 'p99 sub-20ms SLA', icon: Activity, color: 'text-cyanAccent' },
          { label: 'Data Ingestion Sync', val: '99.99%', sub: 'Zero packet loss', icon: ShieldCheck, color: 'text-gold' },
          { label: 'Active Clusters', val: '16 Nodes', sub: 'Multi-region replica', icon: Server, color: 'text-indigo-400' },
        ].map((kpi, idx) => {
          const Icon = kpi.icon
          const isSelected = selectedMetric === idx
          return (
            <div
              key={kpi.label}
              onClick={() => setSelectedMetric(idx)}
              className={`cursor-pointer rounded-xl border p-4 transition-all duration-200 ${
                isSelected
                  ? 'border-brand-500 bg-brand-500/10 shadow-glow-teal'
                  : 'border-line/70 bg-card/50 hover:border-lineLight hover:bg-card'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted">{kpi.label}</span>
                <Icon className={`h-4 w-4 ${kpi.color}`} />
              </div>
              <p className="mt-2 font-display text-lg sm:text-xl font-bold text-ink">{kpi.val}</p>
              <span className="font-mono text-[10px] text-muted">{kpi.sub}</span>
            </div>
          )
        })}
      </div>

      {/* Interactive Visualization Body */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Main Chart / Telemetry View */}
        <div className="lg:col-span-8 rounded-xl border border-line bg-card/60 p-5 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-line/60 pb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-brand-300" />
              <span className="font-mono text-xs font-semibold text-ink">
                {activeTab === 'realtime' && 'Live Ingestion Throughput & Query Response Curves'}
                {activeTab === 'pipeline' && 'End-to-End Data Transformation & Warehouse Sync'}
                {activeTab === 'models' && 'Predictive Inference Accuracy & Model Convergence'}
              </span>
            </div>
            <span className="flex items-center gap-1 font-mono text-[11px] text-muted">
              <RefreshCw className="h-3 w-3 animate-spin text-brand-400" />
              Simulated 500ms Feed
            </span>
          </div>

          {/* Abstract SVG Data Chart */}
          <div className="mt-4 h-56 w-full">
            <svg viewBox="0 0 600 200" className="h-full w-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00A896" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00A896" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="40" x2="600" y2="40" stroke="#1E2E4A" strokeDasharray="4 4" />
              <line x1="0" y1="90" x2="600" y2="90" stroke="#1E2E4A" strokeDasharray="4 4" />
              <line x1="0" y1="140" x2="600" y2="140" stroke="#1E2E4A" strokeDasharray="4 4" />
              <line x1="0" y1="190" x2="600" y2="190" stroke="#1E2E4A" />

              {/* Area 1: Primary Stream */}
              <path
                d="M0,160 C50,140 100,80 160,110 C220,140 280,50 340,70 C400,90 460,30 520,60 C560,80 580,45 600,50 L600,190 L0,190 Z"
                fill="url(#chartGradient)"
              />
              <path
                d="M0,160 C50,140 100,80 160,110 C220,140 280,50 340,70 C400,90 460,30 520,60 C560,80 580,45 600,50"
                fill="none"
                stroke="#00A896"
                strokeWidth="2.5"
              />

              {/* Area 2: Secondary Stream */}
              <path
                d="M0,180 C60,160 120,130 180,140 C240,150 300,100 360,120 C420,140 480,80 540,95 L600,90 L600,190 L0,190 Z"
                fill="url(#cyanGradient)"
              />
              <path
                d="M0,180 C60,160 120,130 180,140 C240,150 300,100 360,120 C420,140 480,80 540,95 L600,90"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="1.8"
                strokeDasharray="2 2"
              />

              {/* Interactive Data Markers */}
              <circle cx="340" cy="70" r="5" fill="#F59E0B" />
              <circle cx="340" cy="70" r="10" fill="#F59E0B" fillOpacity="0.2" className="animate-ping" />

              <circle cx="520" cy="60" r="5" fill="#00A896" />
              <circle cx="520" cy="60" r="9" fill="#00A896" fillOpacity="0.3" />
            </svg>
          </div>

          <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-muted">
            <span>T-60s Ingestion Window</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-400" />
                Raw Data Streams
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyanAccent" />
                Aggregated Analytics
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Anomaly Trigger
              </span>
            </div>
          </div>
        </div>

        {/* Pipeline Nodes & Status Stream */}
        <div className="lg:col-span-4 flex flex-col justify-between rounded-xl border border-line bg-card/60 p-5 backdrop-blur-md">
          <div>
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              Active Data Pipeline Nodes
            </h4>
            <div className="space-y-2.5">
              {[
                { name: 'Core Ingestion Broker', status: 'Healthy', load: '32%', icon: 'Kafka / Redis' },
                { name: 'Transformation Workers', status: 'Optimal', load: '45%', icon: 'dbt / Spark' },
                { name: 'Warehouse Storage', status: 'Syncing', load: '18%', icon: 'PostgreSQL / ClickHouse' },
                { name: 'BI Semantic Layer', status: 'Active', load: '24%', icon: 'GraphQL / REST' },
              ].map((node) => (
                <div key={node.name} className="flex items-center justify-between rounded-lg border border-line/60 bg-bgRaised/70 p-2.5">
                  <div>
                    <p className="text-xs font-semibold text-ink">{node.name}</p>
                    <span className="font-mono text-[10px] text-muted">{node.icon}</span>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded bg-brand-500/15 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-brand-300">
                      {node.status}
                    </span>
                    <p className="font-mono text-[10px] text-muted mt-0.5">{node.load}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-line/60">
            <p className="text-xs text-muted leading-relaxed">
              We design enterprise data warehouses and telemetry engines that turn complex disparate systems into actionable business intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
