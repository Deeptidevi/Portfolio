"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export function SmoothScroll({ children }) {
  useEffect(() => {
    if (window.innerWidth < 768) return

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 1.1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
