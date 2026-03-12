"use client"

import { motion } from "framer-motion"

export function Clouds() {
  const leftToRight = {
    animate: {
      x: ["-50vw", "120vw"],
      transition: {
        duration: 15, // Fast!
        repeat: Infinity,
        ease: "linear",
      },
    },
  }

  const rightToLeft = {
    animate: {
      x: ["120vw", "-50vw"],
      transition: {
        duration: 18, // Fast!
        repeat: Infinity,
        ease: "linear",
      },
    },
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Group 1: Left to Right - High detail billowy clouds */}
      <motion.div 
        variants={leftToRight}
        animate="animate"
        className="absolute top-[15%] w-[600px] h-[400px]"
      >
        <div className="relative w-full h-full opacity-60">
          <div className="absolute w-64 h-64 bg-white/40 blur-[70px] rounded-full top-0 left-0" />
          <div className="absolute w-72 h-72 bg-white/50 blur-[80px] rounded-full top-10 left-32" />
          <div className="absolute w-60 h-60 bg-white/40 blur-[75px] rounded-full top-20 left-10" />
          <div className="absolute w-80 h-80 bg-white/45 blur-[90px] rounded-full top-5 left-60" />
        </div>
      </motion.div>

      {/* Group 2: Right to Left - High detail billowy clouds */}
      <motion.div 
        variants={rightToLeft}
        animate="animate"
        className="absolute top-[45%] w-[700px] h-[450px]"
        style={{ animationDelay: '-8s' }}
      >
        <div className="relative w-full h-full opacity-50">
          <div className="absolute w-72 h-72 bg-white/30 blur-[75px] rounded-full top-0 right-0" />
          <div className="absolute w-80 h-80 bg-white/40 blur-[85px] rounded-full top-15 right-40" />
          <div className="absolute w-64 h-64 bg-white/35 blur-[80px] rounded-full top-25 right-10" />
          <div className="absolute w-88 h-88 bg-white/40 blur-[100px] rounded-full top-5 right-70" />
        </div>
      </motion.div>

      {/* Group 3: Left to Right (Lower) */}
      <motion.div 
        variants={leftToRight}
        animate="animate"
        className="absolute top-[75%] w-[500px] h-[350px]"
        style={{ animationDelay: '-4s' }}
      >
        <div className="relative w-full h-full opacity-40">
          <div className="absolute w-60 h-60 bg-white/25 blur-[70px] rounded-full top-0 left-10" />
          <div className="absolute w-72 h-72 bg-white/30 blur-[80px] rounded-full top-10 left-40" />
          <div className="absolute w-56 h-56 bg-white/20 blur-[65px] rounded-full top-20 left-20" />
        </div>
      </motion.div>

      {/* Group 4: Right to Left (Top edge) */}
      <motion.div 
        variants={rightToLeft}
        animate="animate"
        className="absolute top-[-5%] w-[600px] h-[300px]"
        style={{ animationDelay: '-12s' }}
      >
        <div className="relative w-full h-full opacity-30">
          <div className="absolute w-80 h-40 bg-white/20 blur-[90px] rounded-full top-0 left-0" />
          <div className="absolute w-60 h-30 bg-white/15 blur-[70px] rounded-full top-10 left-40" />
        </div>
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
    </div>
  )
}
