"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Folder, Code2, Layers, Pill, Building2, Hammer, Dice5 } from "lucide-react"
import { TextReveal } from "../ui/TextReveal"
import { useState, useRef } from "react"
import { Tilt } from "../ui/Tilt"

const MedicineAnimation = () => (
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 flex items-center justify-center opacity-40">
    <motion.div
      animate={{ 
        rotate: [0, 360],
        y: [0, -10, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="relative"
    >
      <Pill className="w-16 h-16 text-primary" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
      />
    </motion.div>
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ 
          y: [0, -40, 0],
          x: [0, (i % 2 === 0 ? 20 : -20), 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3, 
          delay: i * 0.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute"
        style={{ left: `${25 * i}%` }}
      >
        <div className="w-2 h-2 bg-primary/40 rounded-full" />
      </motion.div>
    ))}
  </div>
)

const ConstructionAnimation = () => (
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 flex items-center justify-center opacity-40">
    <motion.div
      animate={{ 
        y: [0, -5, 0],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="relative flex flex-col items-center"
    >
      <div className="flex gap-2">
        <motion.div
          animate={{ scaleY: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-12 bg-primary/30 rounded-t-sm"
        />
        <motion.div
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          className="w-4 h-16 bg-primary/40 rounded-t-sm"
        />
        <motion.div
          animate={{ scaleY: [1, 1.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }}
          className="w-4 h-14 bg-primary/30 rounded-t-sm"
        />
      </div>
      <div className="w-20 h-1 bg-primary/60 rounded-full mt-1" />
      <motion.div
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -right-4"
      >
        <Hammer className="w-8 h-8 text-primary/60" />
      </motion.div>
    </motion.div>
  </div>
)

const LudoAnimation = () => (
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 flex items-center justify-center opacity-40">
    <motion.div
      animate={{ 
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="p-4 border-2 border-primary/30 rounded-2xl bg-primary/5"
    >
      <Dice5 className="w-12 h-12 text-primary" />
    </motion.div>
    
    {[...Array(4)].map((_, i) => {
      const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"]
      return (
        <motion.div
          key={i}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
          className={`absolute w-3 h-3 rounded-full ${colors[i]} blur-[2px]`}
          style={{
            top: i < 2 ? '20%' : '70%',
            left: i % 2 === 0 ? '20%' : '70%'
          }}
        />
      )
    })}
  </div>
)

const projects = [
  {
    title: "Pharm Flow - Online Pharmacy",
    description: "Built a full-stack pharmacy e-commerce platform using React, Node.js, Express, and MongoDB Atlas. Implemented REST APIs and integrated database models for medicines, users, orders and cart. Designed a responsive user interface improving navigation and reducing user actions to checkout by ~30%. Optimized backend data handling, improving page load and API response efficiency by ~40%.",
    tags: ["React", "Node.js", "Express", "MongoDB Atlas", "JavaScript", "GitHub"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Deeptidevi",
    live: "https://pharmacy-store-frontend-roan.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20",
    animation: <MedicineAnimation />
  },
  {
    title: "Ludo Mazza - Game",
    description: "Constructed a real-time multiplayer UI using React.js and Tailwind CSS, efficiently handling complex state-driven game logic with optimized component rendering. Architected a reusable, scalable design patterns, minimizing code redundancy, and enabling faster feature development across multiple screens and devices. Enhanced performance and responsiveness through controlled re-renders, and real-time interactive updates.",
    tags: ["React.js", "Tailwind CSS", "VS Code"],
    image: null, 
    github: "https://github.com/Deeptidevi",
    live: "https://github.com/Deeptidevi",
    color: "from-gray-500/10 to-gray-700/10",
    animation: <LudoAnimation />
  },
  {
    title: "Nits Construction Website",
    description: "Developed a responsive PHP/MySQL website, driving a 40% increase in user engagement. Created dynamic service modules and lead-capture forms, increasing lead conversion by 25% and reducing data processing time by 30%. Delivered the full project lifecycle independently, delivering a production-ready solution for a paid client.",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop",
    github: "https://github.com/Deeptidevi",
    live: "https://nitsconstructionltd.co.uk/",
    color: "from-emerald-500/20 to-teal-500/20",
    animation: <ConstructionAnimation />
  }
]

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" className="py-60 bg-black relative z-30 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 flex flex-col items-center">
          <TextReveal text="Featured Projects" className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6" />
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Surprise Reflecting Light Streaks */}
          <motion.div
            initial={{ width: 0, opacity: 0, x: -100 }}
            whileInView={{ width: "300px", opacity: 0.1, x: 200 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute -top-10 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm pointer-events-none z-0"
          />
          <motion.div
            initial={{ width: 0, opacity: 0, x: 100 }}
            whileInView={{ width: "400px", opacity: 0.1, x: -200 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
            className="absolute -bottom-10 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent blur-sm pointer-events-none z-0"
          />

          {projects.map((project, index) => {
            const cardRef = useRef(null)
            const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

            const handleMouseMove = (e) => {
              if (!cardRef.current) return
              const rect = cardRef.current.getBoundingClientRect()
              setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
              })
            }

            return (
              <Tilt key={index}>
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  initial={{ 
                    opacity: 0, 
                    y: 100,
                    scale: 0.8,
                    rotateX: 45,
                    z: -100
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    z: 0
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 50,
                    damping: 15,
                    delay: index * 0.15 
                  }}
                  className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl perspective-1000"
                >
                  {/* Spotlight Effect */}
                  <div 
                    className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.1), transparent 80%)`
                    }}
                  />

                  {/* Background Image with Zoom & Darken */}
                  {project.image ? (
                    <div 
                      className="absolute inset-0 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-50"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#0a0a0a]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />

                  {/* Animation Overlay */}
                  <div className="absolute inset-0 z-15 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                    {project.animation}
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                    <div className="flex flex-wrap gap-2 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-3 tracking-tighter transition-all duration-500 group-hover:text-primary">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      {project.description}
                    </p>

                    <div className="flex gap-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      <a href={project.github} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-xl text-xs font-bold uppercase tracking-widest">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                      <a href={project.live} className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            )
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}
