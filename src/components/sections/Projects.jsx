"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Bot, Pill, Dice5, Building2, Map } from "lucide-react"
import { TextReveal } from "../ui/TextReveal"
import { useState, useEffect } from "react"

const projects = [
  {
    title: "Offline Help - AI Chatbot",
    description: "Developed an advanced offline chatbot with local NLP capabilities, ensuring 100% data privacy and zero latency. Features include intelligent query handling, multi-language support, and a sleek interactive UI with real-time feedback. Optimized for low resource consumption while maintaining high accuracy in intent recognition.",
    tags: ["React", "NLP", "Local Storage", "Framer Motion", "Tailwind"],
    github: "https://github.com/Deeptidevi",
    live: "https://github.com/Deeptidevi",
    color: "from-purple-500/20 to-indigo-500/20",
    icon: Bot
  },
  {
    title: "Pharm Flow - Online Pharmacy",
    description: "Built a full-stack pharmacy e-commerce platform using React, Node.js, Express, and MongoDB Atlas. Implemented REST APIs and integrated database models for medicines, users, orders and cart. Designed a responsive user interface improving navigation and reducing user actions to checkout by ~30%. Optimized backend data handling, improving page load and API response efficiency by ~40%.",
    tags: ["React", "Node.js", "Express", "MongoDB Atlas", "JavaScript", "GitHub"],
    github: "https://github.com/Deeptidevi",
    live: "https://pharmacy-store-frontend-roan.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: Pill
  },
  {
    title: "Ludo Mazza - Game",
    description: "Constructed a real-time multiplayer UI using React.js and Tailwind CSS, efficiently handling complex state-driven game logic with optimized component rendering. Architected a reusable, scalable design patterns, minimizing code redundancy, and enabling faster feature development across multiple screens and devices. Enhanced performance and responsiveness through controlled re-renders, and real-time interactive updates.",
    tags: ["React.js", "Tailwind CSS", "VS Code"],
    github: "https://github.com/Deeptidevi",
    live: "https://github.com/Deeptidevi",
    color: "from-orange-500/20 to-red-500/20",
    icon: Dice5
  },
  {
    title: "Nits Construction Website",
    description: "Developed a responsive PHP/MySQL website, driving a 40% increase in user engagement. Created dynamic service modules and lead-capture forms, increasing lead conversion by 25% and reducing data processing time by 30%. Delivered the full project lifecycle independently, delivering a production-ready solution for a paid client.",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind"],
    github: "https://github.com/Deeptidevi",
    live: "https://nitsconstructionltd.co.uk/",
    color: "from-emerald-500/20 to-teal-500/20",
    icon: Building2
  },
  {
    title: "Margchakra - Crew Management",
    description: "Architected a premium logistics and crew management solution for SIH 2024. MargChakra optimizes routes and streamlines complex logistics using data-driven insights. It empowers operators with tools for operational excellence, making crew management and bus travel experiences seamless, efficient, and highly optimized through advanced route optimization algorithms.",
    tags: ["React", "SIH 2024", "Logistics", "Vercel", "Tailwind CSS"],
    github: "https://github.com/Deeptidevi/Mystic-Mavericks-SIH-2024",
    live: "https://mystic-mavericks-sih-2024.vercel.app/",
    color: "from-amber-500/20 to-orange-500/20",
    icon: Map
  }
]

export function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="projects" className="py-20 md:py-60 bg-black relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl md:text-[12rem] font-black text-white/5 uppercase select-none pointer-events-none"
          >
            Works
          </motion.div>
          <TextReveal text="Featured Projects" className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 relative z-10" />
          <div className="w-24 h-1.5 bg-primary rounded-full relative z-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] transition-all duration-500"
              >
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="absolute top-8 right-8 w-16 h-16 md:w-24 md:h-24 text-white/10 group-hover:text-primary/20 transition-all duration-500 transform-gpu group-hover:scale-110 group-hover:rotate-12">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${project.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-lg`} />
                    <Icon strokeWidth={1} className="w-full h-full" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed line-clamp-3 md:line-clamp-4 max-w-xl group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-md text-xs font-bold uppercase tracking-widest"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      View Live
                    </a>
                  </div>
                </div>

                {/* Subtle border shine on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500 rounded-[2rem] pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
