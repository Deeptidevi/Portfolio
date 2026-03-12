"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function Loading() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="text-4xl md:text-6xl font-bold tracking-tighter flex items-center gap-2">
                DEEPTI <span className="text-primary">DEVI</span>
              </div>
            </motion.div>

            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            <motion.div 
              className="mt-4 text-sm font-mono text-muted-foreground"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {progress}%
            </motion.div>
          </div>


        </motion.div>
      )}
    </AnimatePresence>
  )
}
