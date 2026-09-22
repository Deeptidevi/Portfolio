"use client"

import { motion } from "framer-motion"

export function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div
        className="absolute left-[8%] top-[12%] w-[36rem] h-[36rem] rounded-full blur-[120px] mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(56,189,248,0.18), rgba(99,102,241,0.14))",
        }}
        animate={{ x: [0, 24, -12, 0], y: [0, -18, 12, 0], rotate: [0, 12, -6, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[18%] w-[32rem] h-[32rem] rounded-full blur-[120px] mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(236,72,153,0.18), rgba(147,51,234,0.14))",
        }}
        animate={{ x: [0, -20, 10, 0], y: [0, 16, -12, 0], rotate: [0, -10, 8, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[22%] bottom-[10%] w-[38rem] h-[38rem] rounded-full blur-[130px] mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, rgba(20,184,166,0.16), rgba(99,102,241,0.12))",
        }}
        animate={{ x: [0, 18, -14, 0], y: [0, -10, 18, 0], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
