'use client'

import { useEffect, useRef } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return
    const ctx = context

    let animationId: number
    let startTime = performance.now()

    const cols = 15
    const rows = 9

    type Point = {
      restX: number
      restY: number
      phase: number
      speed: number
      ampX: number
      ampY: number
    }

    const points: Point[][] = []
    const triBlack: { t1: boolean; t2: boolean }[][] = []

    function init(w: number, h: number) {
      const sx = w / (cols - 1)
      const sy = h / (rows - 1)

      for (let r = 0; r < rows; r++) {
        points[r] = []
        for (let c = 0; c < cols; c++) {
          points[r][c] = {
            restX: c * sx + (Math.random() - 0.5) * sx * 0.35,
            restY: r * sy + (Math.random() - 0.5) * sy * 0.35,
            phase: Math.random() * Math.PI * 2,
            speed: 0.6 + Math.random() * 0.8,
            ampX: 6 + Math.random() * 10,
            ampY: 6 + Math.random() * 10,
          }
        }
      }

      for (let r = 0; r < rows - 1; r++) {
        triBlack[r] = []
        for (let c = 0; c < cols - 1; c++) {
          triBlack[r][c] = {
            t1: Math.random() > 0.5,
            t2: Math.random() > 0.5,
          }
        }
      }
    }

    function resize() {
      const cvs = canvasRef.current!
      const dpr = window.devicePixelRatio || 1
      const rect = cvs.getBoundingClientRect()
      cvs.width = rect.width * dpr
      cvs.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      init(rect.width, rect.height)
    }

    function pos(p: Point, t: number) {
      return {
        x: p.restX + Math.sin(t * p.speed + p.phase) * p.ampX,
        y: p.restY + Math.cos(t * p.speed * 0.7 + p.phase * 1.3) * p.ampY,
      }
    }

    function draw(t: number) {
      const rect = canvasRef.current!.getBoundingClientRect()
      const w = rect.width
      const h = rect.height

      ctx.clearRect(0, 0, w, h)

      const pts: { x: number; y: number }[][] = []
      for (let r = 0; r < rows; r++) {
        pts[r] = []
        for (let c = 0; c < cols; c++) {
          pts[r][c] = pos(points[r][c], t)
        }
      }

      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const p1 = pts[r][c]
          const p2 = pts[r][c + 1]
          const p3 = pts[r + 1][c]
          const p4 = pts[r + 1][c + 1]
          const idx = r * (cols - 1) + c

          const { t1, t2 } = triBlack[r][c]

          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.lineTo(p3.x, p3.y)
          ctx.closePath()
          ctx.fillStyle = t1
            ? 'rgba(0, 0, 0, 0.12)'
            : 'rgba(200, 200, 200, 0.06)'
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)'
          ctx.fill()
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(p2.x, p2.y)
          ctx.lineTo(p4.x, p4.y)
          ctx.lineTo(p3.x, p3.y)
          ctx.closePath()
          ctx.fillStyle = t2
            ? 'rgba(0, 0, 0, 0.1)'
            : 'rgba(200, 200, 200, 0.04)'
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)'
          ctx.fill()
          ctx.stroke()
        }
      }
    }

    function tick() {
      draw((performance.now() - startTime) / 1000)
      animationId = requestAnimationFrame(tick)
    }

    resize()
    tick()

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
