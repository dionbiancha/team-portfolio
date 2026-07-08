'use client'

import { useEffect, useRef } from 'react'

const COLORS: [number, number, number][] = [
  [99,  102, 241],   // indigo
  [139, 92,  246],   // violet
  [59,  130, 246],   // blue
  [167, 139, 250],   // lavender
]

const MAX_PARTICLES = 60

class Particle {
  x: number
  y: number
  size: number
  alpha: number
  vx: number
  vy: number
  decay: number
  grow: number
  r: number
  g: number
  b: number

  constructor(mx: number, my: number) {
    const c = COLORS[Math.floor(Math.random() * COLORS.length)]
    this.x = mx + (Math.random() - 0.5) * 40
    this.y = my + (Math.random() - 0.5) * 40
    this.size  = Math.random() * 70 + 50          // 50–120px
    this.alpha = Math.random() * 0.10 + 0.04      // 0.04–0.14
    this.vx    = (Math.random() - 0.5) * 0.7
    this.vy    = (Math.random() - 0.5) * 0.7 - 0.25
    this.decay = 0.006 + Math.random() * 0.004
    this.grow  = 0.8
    this.r = c[0]; this.g = c[1]; this.b = c[2]
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.alpha -= this.decay
    this.size  += this.grow
  }

  draw(ctx: CanvasRenderingContext2D) {
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
    grad.addColorStop(0,    `rgba(${this.r},${this.g},${this.b},${this.alpha})`)
    grad.addColorStop(0.45, `rgba(${this.r},${this.g},${this.b},${this.alpha * 0.3})`)
    grad.addColorStop(1,    `rgba(${this.r},${this.g},${this.b},0)`)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = grad
    ctx.fill()
  }
}

export default function SmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = (canvas.width  = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    const particles: Particle[] = []
    let animId: number

    const onResize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    const onMouseMove = (e: MouseEvent) => {
      if (particles.length >= MAX_PARTICLES) return
      particles.push(new Particle(e.clientX, e.clientY))
      particles.push(new Particle(e.clientX, e.clientY))
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw(ctx)
        if (particles[i].alpha <= 0) particles.splice(i, 1)
      }
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
