"use client"

import { useState, useEffect } from "react"
import { Volume2, VolumeX, Sparkles, Terminal, Gamepad2, Radio, Activity } from "lucide-react"
import { soundManager } from "../../lib/sound"

export function TelemetryHUD({ onToggleTerminal, onToggleMatrix, onOpenArcade, isMatrixMode }) {
  const [time, setTime] = useState("")
  const [soundEnabled, setSoundEnabled] = useState(false)

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      const options = { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }
      setTime(now.toLocaleTimeString("en-US", options))
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleToggleSound = () => {
    const nextState = soundManager.toggle()
    setSoundEnabled(nextState)
  }

  return (
    <div className="fixed top-20 right-6 z-[4000] hidden lg:flex items-center gap-2 p-1.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl text-[11px] font-mono select-none">
      
      {/* Live IST Clock */}
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-gray-300">
        <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
        <span>IST {time || "09:30 PM"}</span>
      </div>

      {/* Cyber Sound FX Toggle */}
      <button
        onClick={handleToggleSound}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer border ${
          soundEnabled
            ? "bg-primary/20 text-primary border-primary/40 shadow-[0_0_10px_rgba(255,94,0,0.3)] font-bold"
            : "bg-white/5 text-gray-400 border-white/5 hover:text-white"
        }`}
        title="Toggle Sci-Fi UI Audio Engine"
      >
        {soundEnabled ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-primary" />
            <span className="flex items-center gap-0.5">
              <span className="w-0.5 h-2.5 bg-primary animate-pulse" />
              <span className="w-0.5 h-3.5 bg-primary animate-pulse delay-75" />
              <span className="w-0.5 h-2 bg-primary animate-pulse delay-150" />
            </span>
            <span>SFX ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span>SFX OFF</span>
          </>
        )}
      </button>

      {/* Matrix Mode Toggle */}
      <button
        onClick={() => {
          soundManager.playMatrixChime()
          onToggleMatrix()
        }}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer border ${
          isMatrixMode
            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.3)] font-bold"
            : "bg-white/5 text-gray-400 border-white/5 hover:text-white"
        }`}
        title="Toggle Falling Matrix Mode"
      >
        <Sparkles className="w-3 h-3 text-emerald-400" />
        <span>{isMatrixMode ? "MATRIX ON" : "MATRIX"}</span>
      </button>

      {/* Mini-Game Arcade Launcher */}
      <button
        onClick={() => {
          soundManager.playSuccess()
          onOpenArcade()
        }}
        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-amber-300 border border-white/5 hover:border-amber-400/40 transition-all cursor-pointer"
        title="Play 25s Bug Smasher Arcade Game"
      >
        <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
        <span>ARCADE</span>
      </button>

    </div>
  )
}
