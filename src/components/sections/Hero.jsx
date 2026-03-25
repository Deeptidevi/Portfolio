"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clouds } from "../ui/Clouds"
import { Github, Linkedin, FileDown, ArrowRight, Music, Sparkles } from "lucide-react"
import { Magnetic } from "../ui/Magnetic"

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white">
      <Clouds />

      {/* Mouse Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        animate={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.15), transparent 80%)`
        }}
      />

      <div className="container mx-auto px-6 z-20 relative h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full pt-10">

          {/* LEFT TEXT (RESTORED LARGE TYPOGRAPHY) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            {/* Availability Indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-emerald-400/90 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-4 block"
            >
              Full Stack Developer
            </motion.span>

            <h1 className="text-5xl sm:text-7xl md:text-[9rem] font-black tracking-tight leading-[0.85] uppercase">
              DEEPTI <br />
              <span className="text-outline">DEVI</span>
            </h1>

            <p className="mt-8 text-gray-400 max-w-md text-lg md:text-xl leading-relaxed font-medium">
              Crafting immersive digital experiences through clean code and innovative design. Specializing in high-end web applications.
            </p>

            <div className="mt-10">
              <Magnetic strength={0.2}>
                <a 
                  href="#projects" 
                  className="group flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm hover:text-primary transition-colors p-4 pl-0"
                >
                  View Work
                  <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (MAXIMUM VISIBILITY FOR GUITAR) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-full"
          >
            <div className="relative w-full aspect-[2/3] max-w-lg">
              {/* Artistic Background Glows */}
              <div className="absolute -inset-20 bg-indigo-500/20 blur-[140px] rounded-full opacity-60 animate-pulse" />
              <div className="absolute -inset-20 bg-amber-500/15 blur-[120px] rounded-full opacity-40 delay-1000 animate-pulse" />
              
              {/* Creative Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 z-30 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
              >
                <Music className="w-6 h-6 text-amber-400" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-12 z-30 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
              >
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-full h-full group">
                {/* Secondary Decorative Frame */}
                <div className="absolute inset-4 border border-white/10 rounded-[4rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700 pointer-events-none" />
                
                {/* Primary Image Wrapper */}
                <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] group-hover:border-primary/30 transition-colors duration-500">
                  <motion.img 
                    src="/myP.png" 
                    alt="Deepti Devi"
                    className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* High-End Glass Effect Overlay */}
                  <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3.5rem]" />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-6 px-6 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl z-30 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-xl font-black text-amber-500">2+ Years</div>
                  <div className="text-[8px] uppercase tracking-wider font-bold text-white/60 text-left">Experience</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 -left-6 px-6 py-3 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl z-30 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                  <div className="text-[10px] uppercase tracking-widest font-black text-white/90">Available to Work</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
