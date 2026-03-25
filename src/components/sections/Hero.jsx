"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Music, Sparkles } from "lucide-react"
import { Clouds } from "../ui/Clouds"
import { Magnetic } from "../ui/Magnetic"

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <section className="relative h-screen bg-[#020202] text-white overflow-hidden flex items-center">
      <Clouds />

      {/* SOFT CENTER LIGHT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* MOUSE GLOW */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.15), transparent)`
        }}
      />

      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>

          {/* GREEN DOT */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <p className="text-[11px] tracking-[0.25em] text-emerald-400 uppercase font-semibold">
              Available for new opportunities
            </p>
          </div>

          {/* ROLE */}
          <p className="text-xs tracking-[0.4em] uppercase text-white/80 mb-6">
            Full Stack Developer
          </p>

          {/* NAME */}
          <h1 className="text-[5rem] md:text-[8rem] leading-[0.85] font-extrabold tracking-[-0.04em] mb-6">
            DEEPTI <br /> <span className="text-outline">DEVI</span>
          </h1>

          {/* DESC */}
          <p className="text-gray-400 max-w-sm text-base leading-relaxed mb-10">
            Crafting immersive digital experiences through clean code and innovative design. Specializing in high-end web applications.
          </p>

          {/* BUTTON */}
          <Magnetic strength={0.2}>
            <div className="flex items-center gap-4 cursor-pointer group">
              <span className="uppercase text-xs tracking-[0.3em] font-bold">
                View Work
              </span>

              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          </Magnetic>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* GLOW */}
          <div className="absolute w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full"></div>
          <div className="absolute w-[400px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full translate-x-20"></div>

          <div className="relative w-[340px] h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 group">

            <img
              src="/myP.png"
              className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
              alt="profile"
            />

            {/* TOP BADGE */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-6 bg-[#fef3c7] text-black px-4 py-2 rounded-xl text-sm font-bold shadow-2xl"
            >
              2+ Years
            </motion.div>

            {/* MUSIC ICON */}
            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[-10px] top-[55%] bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl z-10"
            >
              <Music className="w-4 h-4 text-amber-400" />
            </motion.div>

            {/* SPARKLES ICON */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-[-10px] top-[20%] bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-2xl z-10"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </motion.div>

            {/* BOTTOM BADGE */}
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10 shadow-2xl"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Available to hire
              </span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
