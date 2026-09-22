"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, X, Maximize2, Minimize2, Sparkles, Send, Flame, Play, HelpCircle } from "lucide-react"
import confetti from "canvas-confetti"
import { soundManager } from "../../lib/sound"

const QUICK_COMMANDS = [
  { cmd: "help", desc: "List all commands" },
  { cmd: "stats", desc: "Live Codolio 345+ Stats" },
  { cmd: "skills", desc: "Tech Stack Matrix" },
  { cmd: "projects", desc: "Featured Repos" },
  { cmd: "matrix", desc: "Toggle Cyber Rain" },
  { cmd: "play", desc: "Play Bug Hunter Game" },
  { cmd: "hire", desc: "Initiate Contact Protocol" },
  { cmd: "clear", desc: "Clear Console" }
]

export function InteractiveTerminal({ isOpen, onToggle, onToggleMatrix, onOpenArcade }) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ DeeptiOS v4.2 [Cyber Interactive Terminal Initialized]\nType 'help' or click any command chip below to execute."
    }
  ])
  const [isMinimized, setIsMinimized] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [history, isOpen])

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase()
    if (!cmd) return

    soundManager.playClick()

    const newHistory = [...history, { type: "user", text: `$ ${rawCmd}` }]

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: `AVAILABLE COMMANDS:\n  • stats    : Show 345+ solved DSA breakdown (LeetCode, HackerRank, etc.)\n  • skills   : Display full-stack engineering proficiency\n  • projects : View top engineering case studies\n  • matrix   : Toggle live Falling Matrix Rain effect\n  • play     : Launch 30s Bug Smasher arcade mini-game\n  • hire     : Trigger confetti celebration & quick contact links\n  • clear    : Wipe terminal screen\n  • about    : Bio & education snapshot`
        })
        break

      case "stats":
        newHistory.push({
          type: "output",
          text: `[CODOLIO SYNCED STATS - DEEPTI DEVI]\n  🔥 Total Problems Solved : 345+\n  🟢 Easy                  : 200+\n  🟡 Medium                : 130+\n  🔴 Hard                  : 15+\n  ⭐ HackerRank 5★ C++     : Verified\n  🏆 CodeChef / LeetCode   : Active Badges Synced`
        })
        break

      case "skills":
        newHistory.push({
          type: "output",
          text: `[ENGINEERING CAPABILITIES]\n  Frontend  : React.js, Next.js 16, Tailwind CSS, Framer Motion\n  Backend   : Node.js, Express.js, REST APIs, WebSockets\n  Languages : C++ (5★ Gold), Java (OOP/JDBC), JavaScript, PHP\n  Databases : MongoDB Atlas, MySQL, Redis\n  Core CS   : Data Structures & Algorithms, OS, DBMS, Networks`
        })
        break

      case "projects":
        newHistory.push({
          type: "output",
          text: `[FEATURED REPOSITORIES]\n  1. Pharm Flow       : Full-Stack Pharmacy MERN App (40% API Speedup)\n  2. Nits Construction: Commercial UK Website (PHP/MySQL, +25% Leads)\n  3. Margchakra       : Smart India Hackathon '24 Logistics Planner\n  4. Offline Help     : 100% On-Device Privacy NLP Engine`
        })
        break

      case "about":
        newHistory.push({
          type: "output",
          text: `Deepti Devi — Software Engineer & B.Tech CSE Student at Lovely Professional University.\nPassionate about building resilient distributed web systems and competitive algorithm solving.`
        })
        break

      case "matrix":
        soundManager.playMatrixChime()
        if (onToggleMatrix) onToggleMatrix()
        newHistory.push({
          type: "success",
          text: `⚡ Matrix Rain mode toggled! Look at the canvas background.`
        })
        break

      case "play":
      case "game":
        soundManager.playSuccess()
        if (onOpenArcade) onOpenArcade()
        newHistory.push({
          type: "success",
          text: `🎮 Launching Bug Hunter 2026 Arcade! Smash the bugs to score points.`
        })
        break

      case "hire":
      case "contact":
        soundManager.playSuccess()
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          })
        } catch (e) {}
        newHistory.push({
          type: "success",
          text: `🎉 EXCELLENT DECISION!\nEmail: deeptidevi7124@gmail.com\nLinkedIn: linkedin.com/in/deepti-devi-b43001398\nGitHub: github.com/Deeptidevi`
        })
        break

      case "clear":
        setHistory([])
        setInput("")
        return

      default:
        newHistory.push({
          type: "error",
          text: `Command not recognized: '${rawCmd}'. Type 'help' for available commands.`
        })
        break
    }

    setHistory(newHistory)
    setInput("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    executeCommand(input)
  }

  return (
    <>
      {/* Floating Toggle Button (Always Available on bottom right) */}
      <motion.button
        onClick={() => {
          soundManager.playClick()
          onToggle()
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[6000] px-4 py-3 rounded-full bg-gradient-to-r from-primary via-orange-600 to-amber-500 text-white font-mono font-bold text-xs shadow-[0_0_25px_rgba(255,94,0,0.4)] border border-white/20 flex items-center gap-2 cursor-pointer group"
      >
        <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        <span>~ $ deepti-cli</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
      </motion.button>

      {/* Terminal Modal / Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-[6001] shadow-2xl rounded-2xl bg-[#090909]/95 border border-white/15 backdrop-blur-2xl flex flex-col overflow-hidden ${
              isMinimized
                ? "bottom-20 right-6 w-80 h-14"
                : "bottom-20 right-4 sm:right-6 w-[92vw] sm:w-[540px] max-w-full h-[480px]"
            }`}
          >
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onToggle} />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)} />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => executeCommand("matrix")} />
                <span className="text-xs font-mono font-bold text-gray-300 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-primary" />
                  deepti@cyber-portfolio:~
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:text-white transition-colors p-1"
                >
                  {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={onToggle}
                  className="hover:text-white transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Quick Command Chips */}
                <div className="px-3 py-2 bg-black/40 border-b border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
                  <span className="text-gray-500 text-[10px] uppercase font-bold shrink-0 mr-1">Quick:</span>
                  {QUICK_COMMANDS.map((c) => (
                    <button
                      key={c.cmd}
                      onClick={() => executeCommand(c.cmd)}
                      className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-gray-300 hover:text-primary transition-all shrink-0 cursor-pointer"
                      title={c.desc}
                    >
                      {c.cmd}
                    </button>
                  ))}
                </div>

                {/* Terminal Content Body */}
                <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-gray-300 space-y-3 selection:bg-primary/30">
                  {history.map((item, idx) => (
                    <div key={idx} className="leading-relaxed">
                      {item.type === "user" ? (
                        <div className="text-primary font-bold">{item.text}</div>
                      ) : item.type === "success" ? (
                        <div className="text-emerald-400 whitespace-pre-wrap">{item.text}</div>
                      ) : item.type === "error" ? (
                        <div className="text-red-400 whitespace-pre-wrap">{item.text}</div>
                      ) : item.type === "system" ? (
                        <div className="text-amber-400 whitespace-pre-wrap">{item.text}</div>
                      ) : (
                        <div className="text-gray-300 whitespace-pre-wrap">{item.text}</div>
                      )}
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                {/* Terminal Prompt Input Form */}
                <form onSubmit={handleSubmit} className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2">
                  <span className="text-primary font-mono text-xs font-bold shrink-0">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type 'help', 'matrix', 'play', 'hire'..."
                    className="flex-1 bg-transparent text-white font-mono text-xs focus:outline-none placeholder:text-gray-600"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-primary text-white transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
