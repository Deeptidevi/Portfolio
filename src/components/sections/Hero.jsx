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
      
      <div className="container mx-auto px-6 z-20 relative h-full flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl"
        >
          {/* Main Headline Design */}
          <div className="flex flex-col mb-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <span className="text-emerald-400/90 font-bold text-xs uppercase tracking-[0.3em]">
                Available for new opportunities
              </span>
            </motion.div>
            
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold text-sm md:text-base uppercase tracking-[0.5em] mb-6"
            >
              Full Stack Developer
            </motion.span>
            
            <h1 className="text-5xl sm:text-8xl md:text-[14rem] font-black tracking-tight leading-[0.85] uppercase">
              DEEPTI <br />
              <span className="text-outline">DEVI</span>
            </h1>
          </div>

          <div className="flex flex-col items-center gap-12 mt-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-3xl max-w-3xl leading-relaxed font-medium"
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
                  className="group flex flex-col items-center gap-6 text-white font-black uppercase tracking-widest text-sm hover:text-primary transition-colors"
                >
                  <span className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 shadow-2xl">
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                  </span>
                  Explore Work
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
