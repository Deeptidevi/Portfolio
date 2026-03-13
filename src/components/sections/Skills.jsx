"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Code, Server, Database, Wrench, Cpu, Grid3x3 } from "lucide-react"
import { TextReveal } from "../ui/TextReveal"

// --- Girl Developer Character Component ---
const GirlDeveloper = ({ action }) => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    {/* Head & Hair - Base Layer */}
    <motion.div 
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-4 w-12 h-8 bg-[#4a2c2a] rounded-t-full z-10" 
    />
    <motion.div 
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-8 -left-1 w-5 h-12 bg-[#4a2c2a] rounded-full z-10" 
    />
    <motion.div 
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-8 -right-1 w-5 h-12 bg-[#4a2c2a] rounded-full z-10" 
    />

    {/* Face Layer */}
    <motion.div 
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-5 w-10 h-10 bg-[#ffdbac] rounded-full z-20" 
    />

    {/* Torso */}
    <motion.div 
      animate={{ rotate: [-1, 1, -1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-14 w-12 h-12 bg-primary/80 rounded-t-xl z-10" 
    />

    {/* Action specific arms/hands - Top Layer */}
    {action === "frontend" && (
      <>
        <motion.div 
          animate={{ x: [0, 5, 0], y: [0, -2, 0], rotate: [30, 45, 30] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="absolute top-16 -left-4 w-7 h-2.5 bg-[#ffdbac] rounded-full z-40" 
        />
        <motion.div 
          animate={{ x: [0, -5, 0], y: [0, 2, 0], rotate: [-30, -45, -30] }}
          transition={{ duration: 0.5, delay: 0.2, repeat: Infinity }}
          className="absolute top-16 -right-4 w-7 h-2.5 bg-[#ffdbac] rounded-full z-40" 
        />
        {/* Laptop/Screen - Positioned below hands but above body */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-[5.5rem] w-16 h-12 bg-gray-800 border border-primary/40 rounded-sm z-30 flex items-center justify-center"
        >
          <div className="w-12 h-8 bg-primary/10 rounded-sm overflow-hidden flex flex-col p-0.5 gap-0.5">
            <div className="w-full h-1 bg-primary/30 rounded-full" />
            <div className="w-2/3 h-1 bg-primary/20 rounded-full" />
            <div className="w-1/2 h-1 bg-primary/20 rounded-full" />
          </div>
        </motion.div>
      </>
    )}

    {action === "backend" && (
      <>
        <motion.div 
          animate={{ rotate: [0, 45, 0], x: [-2, 2, -2] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-12 -left-5 w-8 h-2 bg-[#ffdbac] rounded-full z-40" 
        />
        <motion.div 
          animate={{ rotate: [0, -45, 0], x: [2, -2, 2] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute top-12 -right-5 w-8 h-2 bg-[#ffdbac] rounded-full z-40" 
        />
        {/* Server Rack Symbol - Positioned to NOT overlap head */}
        <div className="absolute top-[5.5rem] flex flex-col gap-0.5 z-30">
          {[0, 1].map(i => (
            <motion.div 
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, delay: i * 0.3, repeat: Infinity }}
              className="w-8 h-1.5 bg-gray-700 border border-primary/30 rounded-full"
            />
          ))}
        </div>
      </>
    )}

    {action === "database" && (
      <>
        <motion.div 
          animate={{ y: [0, 3, 0], rotate: [-20, -10, -20] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-13 -left-4 w-7 h-2 bg-[#ffdbac] rounded-full z-40" 
        />
        <motion.div 
          animate={{ y: [0, 3, 0], rotate: [20, 10, 20] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute top-13 -right-4 w-7 h-2 bg-[#ffdbac] rounded-full z-40" 
        />
        {/* Database Symbol - Lowered */}
        <div className="absolute top-[5rem] flex flex-col gap-0.5 z-30">
          <div className="w-10 h-3 bg-primary/10 border border-primary/30 rounded-full" />
          <div className="w-10 h-3 bg-primary/10 border border-primary/30 rounded-full" />
        </div>
      </>
    )}

    {action === "languages" && (
      <>
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-13 -left-5 w-6 h-2 bg-[#ffdbac] rounded-full z-40" 
        />
        <motion.div 
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-13 -right-5 w-6 h-2 bg-[#ffdbac] rounded-full z-40" 
        />
      </>
    )}

    {/* Default hands for others */}
    {!["frontend", "backend", "database", "languages"].includes(action) && (
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-14 w-12 h-2 flex justify-between z-40 px-1"
      >
        <div className="w-3 h-2 bg-[#ffdbac] rounded-full" />
        <div className="w-3 h-2 bg-[#ffdbac] rounded-full" />
      </motion.div>
    )}
  </div>
)

const FrontendIllustration = () => (
  <div className="relative w-full h-32 flex flex-col items-center justify-center">
    <GirlDeveloper action="frontend" />
  </div>
)

const BackendIllustration = () => (
  <div className="relative w-full h-32 flex flex-col items-center justify-center">
    <GirlDeveloper action="backend" />
  </div>
)

const DatabaseIllustration = () => (
  <div className="relative w-full h-32 flex flex-col items-center justify-center">
    <GirlDeveloper action="database" />
  </div>
)

const LanguagesIllustration = () => (
  <div className="relative w-full h-32 flex flex-col items-center justify-center">
    <GirlDeveloper action="languages" />
    <div className="absolute top-2 flex gap-1">
      <motion.div 
        animate={{ opacity: [0, 1, 0], x: [-20, 0, 20] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-[10px] font-mono text-primary/60"
      >
        {"{ JS }"}
      </motion.div>
      <motion.div 
        animate={{ opacity: [0, 1, 0], x: [20, 0, -20] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="text-[10px] font-mono text-primary/60"
      >
        {"< C++ >"}
      </motion.div>
    </div>
  </div>
)

const ToolsIllustration = () => (
  <div className="relative w-full h-32 flex flex-col items-center justify-center">
    <GirlDeveloper action="tools" />
    <motion.div 
      animate={{ 
        rotate: [0, 360],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-2"
    >
      <Wrench className="w-8 h-8 text-primary/20" />
    </motion.div>
  </div>
)

const FrameworksIllustration = () => (
  <div className="relative w-full h-32 flex flex-col items-center justify-center">
    <GirlDeveloper action="frameworks" />
    <div className="absolute top-2 flex gap-2">
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-6 h-6 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5"
      >
        <div className="w-2 h-2 bg-primary/40 rounded-full" />
      </motion.div>
      <motion.div 
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-6 h-6 rounded-lg border border-primary/30 flex items-center justify-center bg-primary/5"
      >
        <div className="w-2 h-2 bg-primary/40 rounded-sm" />
      </motion.div>
    </div>
  </div>
)

const illustrations = {
  Frontend: FrontendIllustration,
  Backend: BackendIllustration,
  Databases: DatabaseIllustration,
  Languages: LanguagesIllustration,
  SoftSkills: ToolsIllustration,
}

// --- Main Component ---

const skills = {
  Languages: ["JavaScript", "Python", "C", "C++", "Java", "DSA", "Kotlin"],
  Frontend: ["HTML5", "CSS3", "Tailwind CSS", "React.js"],
  Backend: ["Node.js", "Express", "PHP"],
  Databases: ["MySQL", "MongoDB"],
  SoftSkills: ["Problem-Solving", "Critical Thinking", "Adaptability"],
}

const icons = {
  Frontend: Code,
  Backend: Server,
  Databases: Database,
  Languages: Cpu,
  SoftSkills: Wrench,
}

export function Skills() {
  const [layoutMode, setLayoutMode] = useState("stack")
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) setLayoutMode("grid")
    else setLayoutMode("stack")
  })

  const getStackPosition = (index) => ({
    x: 0,
    y: index * 5, 
    scale: 1 - index * 0.02,
    rotate: index % 2 === 0 ? index * 1 : -index * 1,
    zIndex: 10 - index,
    opacity: 1
  })

  const getGridPosition = (index) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    
    if (isMobile) {
      const row = index
      const yGap = 340 
      return {
        x: 0,
        y: (row - 2) * yGap + 100, 
        scale: 0.8,
        rotate: 0,
        zIndex: 1,
        opacity: 1
      }
    }

    const col = index % 3
    const row = Math.floor(index / 3)
    const xGap = 380 
    const yGap = 450 

    return {
      x: (col - 1) * xGap,
      y: (row - 0.5) * yGap, 
      scale: 1,
      rotate: 0,
      zIndex: 1,
      opacity: 1
    }
  }

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-black z-50 overflow-visible"
      style={{ height: "350vh" }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full"
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Title */}
        <div className="absolute top-4 w-full pt-4 pb-8 flex flex-col items-center z-[60] bg-gradient-to-b from-black via-black/80 to-transparent">
          <TextReveal 
            text="Technical Skills" 
            className="text-2xl md:text-4xl font-black tracking-tighter uppercase mb-1" 
          />
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="w-24 h-1 bg-primary mx-auto rounded-full mt-2 origin-center" 
          />
        </div>

        <div className="relative w-full h-full flex items-center justify-center pt-20">
          {Object.entries(skills).map(([category, items], index) => {
            const Icon = icons[category]
            const Illustration = illustrations[category]
            const isHovered = hoveredCard === category

            return (
              <motion.div
                key={category}
                onMouseEnter={() => setHoveredCard(category)}
                onMouseLeave={() => setHoveredCard(null)}
                initial={getStackPosition(index)}
                animate={
                  layoutMode === "stack"
                    ? getStackPosition(index)
                    : getGridPosition(index)
                }
                whileHover={layoutMode === "grid" ? { 
                  scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 0.85 : 1.05,
                  y: getGridPosition(index).y - 10,
                  transition: { duration: 0.3 }
                } : {}}
                transition={{ 
                  type: "spring", 
                  stiffness: 60,
                  damping: 15,
                  mass: 1
                }}
                className={`absolute w-[260px] md:w-[340px] h-[320px] md:h-[420px] rounded-[2rem] md:rounded-[3rem] p-5 md:p-8 border transition-all duration-500 flex flex-col items-center cursor-default
                  ${isHovered ? 'border-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] bg-[#0f0f0f]' : 'border-white/10 bg-[#0a0a0a]'}
                `}
              >
                {/* Glow Effect */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 relative z-10">
                  <motion.div
                    animate={isHovered ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isHovered ? 'text-primary' : 'text-primary/60'}`} />
                  </motion.div>
                  <h3 className={`text-[12px] md:text-xl font-black tracking-tighter uppercase transition-colors ${isHovered ? 'text-white' : 'text-gray-400'}`}>
                    {category}
                  </h3>
                </div>

                <div className="flex-grow flex items-center justify-center w-full scale-[0.7] md:scale-[0.9] relative z-10">
                  <Illustration />
                </div>

                <div className="grid grid-cols-2 gap-1.5 md:gap-2 w-full mt-3 md:mt-4 relative z-10">
                  {items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={layoutMode === "grid" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ 
                        delay: layoutMode === "grid" ? 0.1 + (i * 0.03) : 0,
                        duration: 0.3
                      }}
                      className={`px-2 py-1.5 md:px-3 md:py-2 text-[8px] md:text-[11px] font-black uppercase tracking-widest rounded-lg md:rounded-xl border transition-all duration-300 flex items-center justify-center text-center
                        ${isHovered ? 'bg-primary/10 border-primary/30 text-white' : 'bg-white/5 border-white/5 text-gray-500'}
                      `}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
