'use client'

import React, { useEffect, useRef } from 'react'

interface Point3D {
  x: number
  y: number
  z: number
  ox: number
  oy: number
  oz: number
}

interface Particle3D {
  radius: number
  theta: number
  phi: number
  speedTheta: number
  speedPhi: number
  size: number
  color: string
}

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = (canvas.width = container.clientWidth * window.devicePixelRatio || 500)
    let height = (canvas.height = container.clientHeight * window.devicePixelRatio || 500)

    // Generate Sphere Geodesic / Latitude-Longitude Grid Points
    const sphereRadius = Math.min(width, height) * 0.22
    const points: Point3D[] = []
    const connections: [number, number][] = []

    const numLat = 14
    const numLon = 20

    for (let i = 0; i <= numLat; i++) {
      const theta = (i * Math.PI) / numLat
      const sinTheta = Math.sin(theta)
      const cosTheta = Math.cos(theta)

      for (let j = 0; j < numLon; j++) {
        const phi = (j * 2 * Math.PI) / numLon
        const x = sphereRadius * sinTheta * Math.cos(phi)
        const y = sphereRadius * cosTheta
        const z = sphereRadius * sinTheta * Math.sin(phi)

        points.push({ x, y, z, ox: x, oy: y, oz: z })
        const idx = points.length - 1

        // Horizontal connections
        if (j > 0) connections.push([idx - 1, idx])
        else connections.push([idx + numLon - 1, idx])

        // Vertical connections
        if (i > 0) connections.push([idx - numLon, idx])
      }
    }

    // Generate Orbiting Data Particles
    const particleCount = 80
    const particles: Particle3D[] = []
    const particleColors = ['#00A896', '#06B6D4', '#2DD4BF', '#F59E0B', '#38BDF8']

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        radius: sphereRadius * (1.1 + Math.random() * 0.45),
        theta: Math.random() * Math.PI * 2,
        phi: Math.random() * Math.PI,
        speedTheta: (Math.random() - 0.5) * 0.015,
        speedPhi: (Math.random() - 0.5) * 0.01,
        size: 1.5 + Math.random() * 2.5,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      })
    }

    // Rotation angles & mouse tracking
    let rotX = 0.2
    let rotY = 0.4
    let targetRotX = 0.2
    let targetRotY = 0.4

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      targetRotY = x * 1.8
      targetRotX = -y * 1.5
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect()
        const x = (e.touches[0].clientX - rect.left) / rect.width - 0.5
        const y = (e.touches[0].clientY - rect.top) / rect.height - 0.5
        targetRotY = x * 1.5
        targetRotX = -y * 1.2
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('touchmove', handleTouchMove, { passive: true })

    const handleResize = () => {
      if (!container || !canvas) return
      width = canvas.width = container.clientWidth * window.devicePixelRatio
      height = canvas.height = container.clientHeight * window.devicePixelRatio
    }
    window.addEventListener('resize', handleResize)

    let animId: number

    const render = () => {
      animId = requestAnimationFrame(render)

      if (!prefersReducedMotion) {
        rotX += (targetRotX - rotX) * 0.05
        rotY += 0.003 + (targetRotY - rotY) * 0.05
      }

      ctx.clearRect(0, 0, width, height)

      const cx = width / 2
      const cy = height / 2
      const fov = Math.min(width, height) * 1.2

      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)

      // 1. Draw Ambient Outer Glow
      const grad = ctx.createRadialGradient(cx, cy, sphereRadius * 0.2, cx, cy, sphereRadius * 1.3)
      grad.addColorStop(0, 'rgba(0, 168, 150, 0.15)')
      grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)')
      grad.addColorStop(0.8, 'rgba(245, 158, 11, 0.03)')
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, sphereRadius * 1.3, 0, Math.PI * 2)
      ctx.fill()

      // 2. Project Points
      const projected = points.map((p) => {
        // Rotate around Y
        const x1 = p.ox * cosY + p.oz * sinY
        const z1 = -p.ox * sinY + p.oz * cosY

        // Rotate around X
        const y2 = p.oy * cosX - z1 * sinX
        const z2 = p.oy * sinX + z1 * cosX

        // Perspective projection
        const scale = fov / (fov + z2 + sphereRadius * 1.5)
        const px = cx + x1 * scale
        const py = cy + y2 * scale
        const alpha = Math.max(0.1, (z2 + sphereRadius) / (sphereRadius * 2))

        return { px, py, scale, alpha, z: z2 }
      })

      // 3. Draw Connecting Grid Lines
      ctx.lineWidth = 1 * window.devicePixelRatio
      for (let i = 0; i < connections.length; i++) {
        const [i1, i2] = connections[i]
        const p1 = projected[i1]
        const p2 = projected[i2]

        if (p1 && p2 && (p1.z > -sphereRadius * 0.5 || p2.z > -sphereRadius * 0.5)) {
          const avgAlpha = (p1.alpha + p2.alpha) * 0.5
          ctx.strokeStyle = `rgba(0, 168, 150, ${avgAlpha * 0.35})`
          ctx.beginPath()
          ctx.moveTo(p1.px, p1.py)
          ctx.lineTo(p2.px, p2.py)
          ctx.stroke()
        }
      }

      // 4. Draw Glowing Network Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i]
        if (p.z > -sphereRadius * 0.4) {
          const nodeRadius = (1.5 + p.alpha * 2) * window.devicePixelRatio
          ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha * 0.9})`
          ctx.beginPath()
          ctx.arc(p.px, p.py, nodeRadius, 0, Math.PI * 2)
          ctx.fill()

          if (i % 7 === 0 && p.z > 0) {
            // Highlight node with outer ring
            ctx.strokeStyle = `rgba(245, 158, 11, ${p.alpha * 0.7})`
            ctx.lineWidth = 1.2 * window.devicePixelRatio
            ctx.beginPath()
            ctx.arc(p.px, p.py, nodeRadius * 2.2, 0, Math.PI * 2)
            ctx.stroke()
          }
        }
      }

      // 5. Draw 3 Orbiting Inclined Rings
      const drawOrbitRing = (radius: number, tilt: number, color: string, alpha: number) => {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = 1.5 * window.devicePixelRatio
        ctx.globalAlpha = alpha

        for (let a = 0; a <= Math.PI * 2; a += 0.05) {
          const rx = radius * Math.cos(a)
          const ry = radius * Math.sin(a) * Math.cos(tilt)
          const rz = radius * Math.sin(a) * Math.sin(tilt)

          const x1 = rx * cosY + rz * sinY
          const z1 = -rx * sinY + rz * cosY
          const y2 = ry * cosX - z1 * sinX
          const z2 = ry * sinX + z1 * cosX

          const scale = fov / (fov + z2 + sphereRadius * 1.5)
          const px = cx + x1 * scale
          const py = cy + y2 * scale

          if (a === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      drawOrbitRing(sphereRadius * 1.25, Math.PI / 4, '#06B6D4', 0.4)
      drawOrbitRing(sphereRadius * 1.45, -Math.PI / 3, '#00A896', 0.35)
      drawOrbitRing(sphereRadius * 1.65, Math.PI / 6, '#F59E0B', 0.3)

      // 6. Draw Orbiting Free Particles
      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i]
        if (!prefersReducedMotion) {
          pt.theta += pt.speedTheta
          pt.phi += pt.speedPhi
        }

        const px3 = pt.radius * Math.sin(pt.phi) * Math.cos(pt.theta)
        const py3 = pt.radius * Math.cos(pt.phi)
        const pz3 = pt.radius * Math.sin(pt.phi) * Math.sin(pt.theta)

        const x1 = px3 * cosY + pz3 * sinY
        const z1 = -px3 * sinY + pz3 * cosY
        const y2 = py3 * cosX - z1 * sinX
        const z2 = py3 * sinX + z1 * cosX

        const scale = fov / (fov + z2 + sphereRadius * 1.5)
        const px = cx + x1 * scale
        const py = cy + y2 * scale
        const pAlpha = Math.max(0.1, (z2 + sphereRadius * 1.5) / (sphereRadius * 3))

        ctx.fillStyle = pt.color
        ctx.globalAlpha = pAlpha * 0.85
        ctx.beginPath()
        ctx.arc(px, py, pt.size * window.devicePixelRatio * scale, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-full min-h-[420px] w-full items-center justify-center overflow-hidden lg:min-h-[540px]"
      aria-label="3D Interactive DataSphere Network Visualization"
      role="img"
    >
      {/* Background ambient glow circles */}
      <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-cyanAccent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      {/* 3D Hardware Accelerated Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 h-full w-full cursor-grab active:cursor-grabbing"
      />

      {/* Floating Holographic Badges */}
      <div className="pointer-events-none absolute top-8 left-4 z-20 hidden sm:flex items-center gap-2.5 rounded-xl border border-lineLight/80 bg-bgRaised/85 px-3.5 py-2 backdrop-blur-md shadow-glass animate-float">
        <span className="flex h-2.5 w-2.5 rounded-full bg-brand-400 animate-ping" />
        <span className="font-mono text-xs font-medium text-ink">DataSphere Core: Active</span>
      </div>

      <div className="pointer-events-none absolute bottom-12 left-6 z-20 flex items-center gap-3 rounded-xl border border-lineLight/80 bg-bgRaised/85 px-4 py-2.5 backdrop-blur-md shadow-glass">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/15 text-gold font-mono text-xs font-bold">
          BI
        </div>
        <div>
          <p className="font-mono text-[11px] text-muted">Intelligence Pipelines</p>
          <p className="text-xs font-semibold text-ink">Real-Time Data Engine</p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-14 right-4 z-20 flex items-center gap-2.5 rounded-xl border border-cyanAccent/30 bg-bgRaised/85 px-3.5 py-2 backdrop-blur-md shadow-glass">
        <span className="h-2 w-2 rounded-full bg-cyanAccent" />
        <span className="font-mono text-xs text-cyanAccent font-medium">100% Cloud Native</span>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-6 z-20 hidden md:flex items-center gap-2.5 rounded-xl border border-lineLight/80 bg-bgRaised/85 px-3.5 py-2 backdrop-blur-md shadow-glass">
        <span className="font-mono text-[11px] text-brand-300">East Africa &bull; Global Scale</span>
      </div>
    </div>
  )
}
