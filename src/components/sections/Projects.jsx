"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink, BarChart2, ShoppingCart, ShieldCheck, UserCheck, Sparkles, Layers, ArrowRight } from "lucide-react"

const timelineProjects = [
  {
    id: "pharmflow",
    index: "01",
    year: "2024",
    title: "Pharm Flow",
    subtitle: "Pharmacy E-Commerce Platform",
    image: "/mockups/pharmflow-thumb.jpg",
    tags: [
      { name: "React", bg: "bg-[#E0F2FE] text-[#0369A1]" },
      { name: "Node.js", bg: "bg-[#DCFCE7] text-[#15803D]" },
      { name: "MongoDB", bg: "bg-[#D1FAE5] text-[#047857]" }
    ],
    status: "Live",
    description: "Full-stack pharmacy platform with dynamic catalogue, cart and secure checkout.",
    features: [
      { label: "Product Catalogue", icon: ShoppingCart },
      { label: "Secure Checkout", icon: ShieldCheck },
      { label: "User Authentication", icon: UserCheck }
    ],
    link: "https://pharmacy-store-frontend-roan.vercel.app/",
    github: "https://github.com/Deeptidevi",
    bubbleGlow: "from-sky-400 to-blue-500",
    activeColor: "#0284C7"
  },
  {
    id: "nits",
    index: "02",
    year: "2024",
    title: "Nits Construction Ltd",
    subtitle: "Web Application",
    image: "/mockups/nits-thumb.jpg",
    tags: [
      { name: "PHP", bg: "bg-[#F1F5F9] text-[#475569]" },
      { name: "MySQL", bg: "bg-[#FEF3C7] text-[#B45309]" },
      { name: "JavaScript", bg: "bg-[#FEF9C3] text-[#A16207]" }
    ],
    status: "Live",
    description: "Developed and deployed a complete production web application for a UK-based construction company.",
    features: [
      { label: "Client Portals", icon: UserCheck },
      { label: "Lead Capture", icon: ShoppingCart },
      { label: "Cloud Hosting", icon: ShieldCheck }
    ],
    link: "https://nitsconstructionltd.co.uk/",
    github: "https://github.com/Deeptidevi",
    bubbleGlow: "from-teal-400 to-emerald-500",
    activeColor: "#0D9488"
  },
  {
    id: "margchakra",
    index: "03",
    year: "2023",
    title: "Margchakra",
    subtitle: "Logistics Platform",
    image: "/mockups/margchakra-thumb.jpg",
    tags: [
      { name: "React", bg: "bg-[#E0F2FE] text-[#0369A1]" },
      { name: "Express", bg: "bg-[#F3E8FF] text-[#7E22CE]" }
    ],
    status: "Live",
    description: "Route planning and crew dispatch management system built for SIH 2024.",
    features: [
      { label: "Route Planner", icon: Layers },
      { label: "Crew Dispatch", icon: UserCheck },
      { label: "SIH 2024 Finalist", icon: Sparkles }
    ],
    link: "https://mystic-mavericks-sih-2024.vercel.app/",
    github: "https://github.com/Deeptidevi/Mystic-Mavericks-SIH-2024",
    bubbleGlow: "from-blue-400 to-indigo-500",
    activeColor: "#2563EB"
  },
  {
    id: "offlinehelp",
    index: "04",
    year: "Coming Soon",
    title: "Offline Help",
    subtitle: "AI Assistant",
    image: "/mockups/offlinehelp-thumb.jpg",
    tags: [
      { name: "Python", bg: "bg-[#E0E7FF] text-[#4338CA]" },
      { name: "NLP", bg: "bg-[#EDE9FE] text-[#6D28D9]" }
    ],
    status: "In Progress",
    description: "Offline client-side AI assistant with focus on privacy, local models and fast on-device inference.",
    features: [
      { label: "Local Models", icon: Layers },
      { label: "Zero Cloud Logs", icon: ShieldCheck },
      { label: "Fast Inference", icon: Sparkles }
    ],
    link: "https://github.com/Deeptidevi",
    github: "https://github.com/Deeptidevi",
    bubbleGlow: "from-purple-400 to-pink-500",
    activeColor: "#7C3AED"
  }
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(timelineProjects[0])

  return (
    <section id="projects" className="py-16 md:py-24 bg-[#FAF7F2] text-[#18181B] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Card Container Matching Reference Exactly */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E8E3DC] p-6 sm:p-12 md:p-14 relative shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden">

          {/* ========================================================================= */}
          {/* HEADER: "MY PROJECTS" + "Build > Deploy > Impact" + RIGHT STAT CARD */}
          {/* ========================================================================= */}
          <div className="pt-2 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="text-[11px] font-mono font-bold tracking-widest text-stone-400 uppercase mb-2 flex items-center gap-2">
                <span>MY PROJECTS</span>
                <span className="w-6 h-[1.5px] bg-stone-300" />
              </div>

              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#18181B] leading-tight">
                <span>Build </span>
                <span className="text-stone-300 font-light">&gt; </span>
                <span>Deploy </span>
                <span className="text-stone-300 font-light">&gt; </span>
                <span className="text-[#3B82F6]">Impact</span>
              </h2>

              <p className="text-xs sm:text-sm text-stone-500 font-medium mt-2 max-w-md">
                A timeline of projects that turned ideas into real-world solutions.
              </p>
            </div>

            {/* Center-Right Handwritten Note + Right Floating Pill Card */}
            <div className="flex items-center gap-6 self-start md:self-auto">
              {/* Cursive Note */}
              <div
                className="text-stone-400 text-sm sm:text-base leading-tight -rotate-6 font-bold select-none hidden lg:block"
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              >
                <div>Small</div>
                <div className="pl-2">Projects</div>
                <div className="pl-4">Big</div>
                <div className="pl-6">Learning</div>
              </div>

              {/* 4+ Projects Floating Frosted Card */}
              <div className="px-4 py-3 rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-stone-900 leading-tight">
                    4+ Projects
                  </div>
                  <div className="text-[10px] font-mono text-stone-500">
                    and counting...
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* HORIZONTAL CONNECTED WAVE TIMELINE (EXACT REFERENCE 1:1) */}
          {/* ========================================================================= */}
          <div className="relative mb-14 overflow-x-auto pb-6">
            <div className="min-w-[720px] relative px-6">
              
              {/* Connected Flowing Smooth Wave Line SVG */}
              <div className="absolute top-[68px] left-16 right-16 h-8 pointer-events-none -z-0">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 30">
                  <path
                    d="M 0 15 C 100 -5, 200 35, 300 15 C 400 -5, 500 35, 600 15"
                    fill="none"
                    stroke="#93C5FD"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 4 Circular Project Nodes */}
              <div className="grid grid-cols-4 gap-4 relative z-10">
                {timelineProjects.map((proj) => {
                  const isSelected = selectedProject.id === proj.id

                  return (
                    <div
                      key={proj.id}
                      onClick={() => setSelectedProject(proj)}
                      className="flex flex-col items-center text-center cursor-pointer group"
                    >
                      {/* Year above bubble */}
                      <span className="text-[11px] font-mono font-semibold text-stone-400 mb-2">
                        {proj.year}
                      </span>

                      {/* Circular Bubble with Soft Glowing Ring */}
                      <div
                        className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 transition-all duration-300 relative ${
                          isSelected
                            ? `bg-gradient-to-tr ${proj.bubbleGlow} shadow-[0_10px_28px_rgba(59,130,246,0.35)] scale-105 ring-4 ring-blue-100`
                            : "bg-white shadow-md border border-stone-200 group-hover:scale-105 group-hover:shadow-lg"
                        }`}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden bg-white border border-stone-100 relative">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Selected Blue Anchor Dot on Bottom of Bubble */}
                        {isSelected && (
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-xs" />
                        )}
                      </div>

                      {/* Title & Meta below bubble */}
                      <div className="mt-3.5 flex flex-col items-center">
                        <h4 className={`text-sm font-bold transition-colors ${isSelected ? "text-[#18181B]" : "text-stone-800 group-hover:text-blue-600"}`}>
                          {proj.title}
                        </h4>

                        <span className="text-[10px] font-mono text-stone-500 mt-0.5">
                          {proj.subtitle}
                        </span>

                        {/* Tech Tag Pills below title */}
                        <div className="flex items-center gap-1.5 mt-2 flex-wrap justify-center">
                          {proj.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${t.bg}`}
                            >
                              {t.name}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* LOWER SPOTLIGHT SHOWCASE CARD (MATCHING 1:1 REFERENCE DESIGN) */}
          {/* ========================================================================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-[28px] sm:rounded-[36px] bg-[#F8F9FA] border border-[#E8E3DC] p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Browser Mockup Frame (Span 6) */}
                <div className="lg:col-span-6 relative">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/80 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)] relative group">
                    {/* Browser Top Bar */}
                    <div className="px-4 py-2.5 bg-stone-100/90 border-b border-stone-200/80 flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="flex-1 text-center">
                        <div className="inline-block px-3 py-0.5 rounded-md bg-white text-[10px] font-mono text-stone-500 border border-stone-200 truncate max-w-[200px]">
                          {selectedProject.link}
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Image */}
                    <div className="aspect-[16/10] w-full overflow-hidden bg-stone-50">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Project Details & Actions (Span 6) */}
                <div className="lg:col-span-6 flex flex-col justify-between relative">
                  
                  {/* Top Row: Status Badge & Large Watermark Index */}
                  <div className="flex items-start justify-between mb-3">
                    {selectedProject.status === "Live" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#15803D] border border-emerald-300 text-xs font-bold font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Live</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE9FE] text-[#6D28D9] border border-purple-300 text-xs font-bold font-mono">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        <span>In Progress</span>
                      </span>
                    )}

                    {/* Watermark Index 01 /04 */}
                    <div className="text-right select-none font-mono">
                      <span className="text-3xl sm:text-4xl font-black text-stone-300 leading-none">
                        {selectedProject.index}
                      </span>
                      <span className="text-xs font-bold text-stone-400 block -mt-1">
                        /04
                      </span>
                    </div>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-2">
                    {selectedProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 max-w-lg">
                    {selectedProject.description}
                  </p>

                  {/* 3 Key Feature Icons Strip */}
                  <div className="grid grid-cols-3 gap-2 pb-6 border-b border-stone-200/80 mb-6">
                    {selectedProject.features?.map((feat, fIdx) => {
                      const FeatIcon = feat.icon
                      return (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-mono font-medium text-stone-700">
                          <FeatIcon className="w-4 h-4 text-stone-500 shrink-0" />
                          <span className="truncate text-[11px]">{feat.label}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Bottom Actions Row */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold font-mono text-stone-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-[#18181B] hover:bg-stone-800 text-white text-xs font-bold font-mono flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                    >
                      <span>Live Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-full bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-xs font-bold font-mono flex items-center gap-1.5 shadow-2xs active:scale-95 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Code</span>
                    </a>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  )
}
