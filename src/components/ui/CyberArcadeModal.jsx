"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trophy, Flame, Play, RotateCcw, X, Sparkles, Bug, Zap } from "lucide-react"
import confetti from "canvas-confetti"
import { soundManager } from "../../lib/sound"

const BUG_TYPES = [
  { label: "NullPointerException", color: "#EF4444", points: 10, speed: 2.2 },
  { label: "Memory Leak", color: "#F59E0B", points: 15, speed: 2.8 },
  { label: "Infinite Loop", color: "#EC4899", points: 20, speed: 3.2 },
  { label: "404 Not Found", color: "#3B82F6", points: 10, speed: 2.0 },
  { label: "Segmentation Fault", color: "#8B5CF6", points: 25, speed: 3.6 }
]

export function CyberArcadeModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(25)
  const [bugs, setBugs] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [highScore, setHighScore] = useState(0)
  const containerRef = useRef(null)

  // Game loop timer
  useEffect(() => {
    let timer
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false)
      setGameOver(true)
      soundManager.playSuccess()
      if (score > highScore) {
        setHighScore(score)
      }
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.5 }
        })
      } catch (e) {}
    }
    return () => clearInterval(timer)
  }, [isPlaying, timeLeft, score, highScore])

  // Bug spawner loop
  useEffect(() => {
    let spawner
    if (isPlaying) {
      spawner = setInterval(() => {
        const type = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)]
        const newBug = {
          id: Math.random().toString(),
          x: Math.random() * 80 + 10, // percentage
          y: -10,
          type
        }
        setBugs((prev) => [...prev.slice(-12), newBug])
      }, 850)
    }
    return () => clearInterval(spawner)
  }, [isPlaying])

  // Bug falling movement
  useEffect(() => {
    let animFrame
    if (isPlaying) {
      const updatePhysics = () => {
        setBugs((prev) =>
          prev
            .map((b) => ({ ...b, y: b.y + b.type.speed * 0.6 }))
            .filter((b) => b.y < 105)
        )
        animFrame = requestAnimationFrame(updatePhysics)
      }
      animFrame = requestAnimationFrame(updatePhysics)
    }
    return () => cancelAnimationFrame(animFrame)
  }, [isPlaying])

  const startGame = () => {
    soundManager.playSuccess()
    setScore(0)
    setTimeLeft(25)
    setBugs([])
    setGameOver(false)
    setIsPlaying(true)
  }

  const handleSquashBug = (bugId, points) => {
    soundManager.playLaser()
    setScore((prev) => prev + points)
    setBugs((prev) => prev.filter((b) => b.id !== bugId))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[7000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-xl rounded-3xl bg-[#090909] border border-white/20 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/[0.04] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/20 text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                Cyber Bug Smasher 2026
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                  MINI-GAME
                </span>
              </h3>
              <p className="text-[11px] font-mono text-gray-400">
                Smash production bugs before they crash the server!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Game Area */}
        <div
          ref={containerRef}
          className="relative h-[380px] bg-black/80 overflow-hidden select-none border-b border-white/10"
        >
          {/* Cyber Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,94,0,0.1)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* In-Game HUD overlay */}
          <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-xs font-mono font-bold z-20 pointer-events-none">
            <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>SCORE: <strong className="text-primary">{score}</strong></span>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-white flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              <span>TIME: <strong className={timeLeft <= 5 ? "text-red-400 animate-ping" : "text-emerald-400"}>{timeLeft}s</strong></span>
            </div>
          </div>

          {/* Falling Bugs */}
          {isPlaying &&
            bugs.map((bug) => (
              <button
                key={bug.id}
                onClick={() => handleSquashBug(bug.id, bug.type.points)}
                style={{
                  left: `${bug.x}%`,
                  top: `${bug.y}%`,
                  transform: "translate(-50%, -50%)",
                  borderColor: bug.type.color,
                  boxShadow: `0 0 15px ${bug.type.color}60`
                }}
                className="absolute z-30 px-3 py-1.5 rounded-full bg-[#111]/90 backdrop-blur-md border text-[11px] font-mono font-bold text-white flex items-center gap-1.5 hover:scale-125 active:scale-95 transition-transform cursor-pointer animate-bounce"
              >
                <Bug className="w-3.5 h-3.5" style={{ color: bug.type.color }} />
                <span>{bug.type.label}</span>
                <span className="text-[9px] text-gray-400">+{bug.type.points}</span>
              </button>
            ))}

          {/* Start Screen */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-40 bg-black/75 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-3xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary mb-4 shadow-[0_0_30px_rgba(255,94,0,0.3)]">
                <Bug className="w-8 h-8 animate-pulse" />
              </div>
              <h4 className="text-2xl font-black uppercase text-white mb-2">
                Production Bug Smasher
              </h4>
              <p className="text-xs text-gray-300 max-w-sm mb-6">
                Click falling exceptions, memory leaks, and segmentation faults before time runs out.
              </p>
              <button
                onClick={startGame}
                className="px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Start 25s Challenge</span>
              </button>
            </div>
          )}

          {/* Game Over Screen */}
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-40 bg-black/85 backdrop-blur-md">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
                <Trophy className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-black uppercase text-white mb-1">
                Debugging Complete!
              </h4>
              <div className="text-3xl font-mono font-black text-primary mb-2">
                {score} PTS
              </div>
              <p className="text-xs text-gray-300 mb-6 font-mono">
                {score >= 80 ? "🏆 Rank: Principal Staff Engineer" : score >= 40 ? "⭐ Rank: Senior Bug Crusher" : "🟢 Rank: Junior Code Debugger"}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={startGame}
                  className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Play Again</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-gray-400">
          <span>High Score: <strong className="text-white">{highScore} pts</strong></span>
          <span className="text-emerald-400 font-medium">Built with React & Web Audio</span>
        </div>
      </motion.div>
    </div>
  )
}
