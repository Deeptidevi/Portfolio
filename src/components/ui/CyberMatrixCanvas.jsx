"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Terminal, Cpu } from "lucide-react"
import { soundManager } from "../../lib/sound"

export function CyberMatrixCanvas({ isMatrixMode, onToggleMatrix }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 140 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Particle Constellation Network
    const particleCount = Math.min(Math.floor((width * height) / 16000), 85)
    const particles = []
    const colors = ["#FF5E00", "#10B981", "#3B82F6", "#F59E0B", "#8B5CF6"]

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseRadius: Math.random() * 2 + 1.2,
      })
    }

    // Matrix Rain drops
    const chars = "010101<>{}[]/*&^%$#@!DEEPTI_CODE_DSA_345_FULLSTACK"
    const fontSize = 14
    const columns = Math.floor(width / fontSize)
    const drops = Array(columns).fill(1)

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    const render = () => {
      if (isMatrixMode) {
        // Matrix Rain Render
        ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
        ctx.fillRect(0, 0, width, height)

        ctx.fillStyle = "#10B981"
        ctx.font = `${fontSize}px monospace`

        for (let i = 0; i < drops.length; i++) {
          const char = chars[Math.floor(Math.random() * chars.length)]
          const x = i * fontSize
          const y = drops[i] * fontSize

          // Leading bright character
          if (Math.random() > 0.85) {
            ctx.fillStyle = "#A7F3D0"
          } else {
            ctx.fillStyle = "#10B981"
          }

          ctx.fillText(char, x, y)

          if (y > height && Math.random() > 0.975) {
            drops[i] = 0
          }
          drops[i]++
        }
      } else {
        // Normal Cyber Particle Network
        ctx.clearRect(0, 0, width, height)

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 130) {
              const alpha = (1 - dist / 130) * 0.18
              ctx.strokeStyle = `rgba(255, 94, 0, ${alpha})`
              ctx.lineWidth = 0.8
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
            }
          }
        }

        // Draw and update particles
        particles.forEach((p) => {
          // Mouse interaction (repel & glow)
          const mdx = p.x - mouseRef.current.x
          const mdy = p.y - mouseRef.current.y
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy)

          if (mDist < mouseRef.current.radius) {
            const force = (1 - mDist / mouseRef.current.radius) * 3
            p.x += (mdx / mDist) * force
            p.y += (mdy / mDist) * force
            p.radius = p.baseRadius * 1.8
          } else {
            p.radius = p.baseRadius
          }

          // Move
          p.x += p.vx
          p.y += p.vy

          // Wrap edges
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0

          // Draw node
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.shadowBlur = 8
          ctx.shadowColor = p.color
          ctx.fill()
          ctx.shadowBlur = 0
        })
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMatrixMode])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-700"
      style={{ opacity: isMatrixMode ? 0.92 : 0.65 }}
    />
  )
}
