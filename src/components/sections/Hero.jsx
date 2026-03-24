"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Clouds } from "../ui/Clouds"
import { Github, Linkedin, FileDown, ArrowRight } from "lucide-react"
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
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] text-white">
      <Clouds />
      
      {/* Dynamic Mouse Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        animate={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.15), transparent 80%)`
        }}
      />
      
      <div className="container mx-auto px-6 z-20 relative h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            {/* Main Headline Design */}
            <div className="flex flex-col mb-12 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-4"
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
                className="text-primary font-bold text-xs md:text-sm uppercase tracking-[0.4em] mb-4"
              >
                Full Stack Developer
              </motion.span>
              
              <h1 className="text-4xl sm:text-7xl md:text-[9rem] font-black tracking-tight leading-[0.85] uppercase">
                DEEPTI <br />
                <span className="text-outline">DEVI</span>
              </h1>
            </div>

            <div className="flex flex-col items-start gap-12 mt-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed font-medium text-left"
              >
                Crafting immersive digital experiences through clean code and innovative design. Specializing in high-end web applications.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-8"
              >
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
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Hero Image Integration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center h-full pt-10"
          >
            <div className="relative w-full aspect-[3/4] max-w-md">
              {/* Background Glows matching the image bokeh (Amber & Indigo) */}
              <div className="absolute -inset-10 bg-amber-500/20 blur-[120px] rounded-full opacity-50 animate-pulse" />
              <div className="absolute -inset-10 bg-indigo-500/20 blur-[100px] rounded-full opacity-30 delay-1000 animate-pulse" />
              
              {/* Image Container with Professional Masking */}
              <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl group">
                <motion.img 
                src="/Gemini_Generated_Image_70wci470wci470.png" 
                  alt="Deepti Devi"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                  }}
                />
                
                {/* Blending Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3.5rem]" />
              </div>

              {/* Glassmorphism Badge: Experience */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-28 h-28 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl flex items-center justify-center z-10 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-500">2+</div>
                  <div className="text-[9px] uppercase tracking-wider font-bold text-white/70">Years of<br/>Experience</div>
                </div>
              </motion.div>

              {/* Glassmorphism Badge: Availability */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-center z-10 px-6 py-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
                  <div className="text-xs uppercase tracking-widest font-black text-white/90">Available</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
