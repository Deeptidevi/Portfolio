"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Code2, Database, Settings } from "lucide-react"

const categoriesList = [
  { id: "all", name: "All" },
  { id: "languages", name: "Languages" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Databases" },
  { id: "tools", name: "DevOps & Tools" }
]

const skillColumns = [
  {
    id: "languages",
    title: "Languages",
    count: 5,
    items: [
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    count: 5,
    items: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      },
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & APIs",
    count: 4,
    items: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
      },
      {
        name: "REST APIs",
        isIcon: true,
        icon: Settings
      }
    ]
  },
  {
    id: "database",
    title: "Databases",
    count: 3,
    items: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "Database Design",
        isIcon: true,
        icon: Database
      }
    ]
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    count: 4,
    items: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
      }
    ]
  }
]

export function Skills() {
  const [activeTab, setActiveTab] = useState("all")

  const displayedColumns = activeTab === "all"
    ? skillColumns
    : skillColumns.filter((col) => col.id === activeTab)

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FAF7F2] text-[#18181B] border-t border-[#E5E0D8] relative select-none overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ========================================================================= */}
        {/* MAIN HEADLINE & INTRO SUMMARY + RIGHT CODE CARDS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: Giant Headline & Subtitle (Span 7) */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#14261C] leading-[0.95] mb-4">
              <span>Tech Stack & </span>
              <br className="hidden sm:inline" />
              <span>Technologies</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-lg leading-relaxed">
              A collection of tools, languages and frameworks I use to turn ideas into real-world applications.
            </p>
          </div>

          {/* Middle & Right: 21+ Tech pill + Code Visual Graphic (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-start lg:justify-end gap-6">
            
            {/* 21+ Technologies Mini Description */}
            <div className="max-w-[220px]">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#064E3B] mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>21+ Technologies</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                I'm always learning and exploring new tools to build better, faster and more scalable solutions.
              </p>
              <div className="w-8 h-[2px] bg-[#064E3B] mt-3" />
            </div>

            {/* Right Card: < / > + Cursive "Code Build Learn Repeat." */}
            <div className="flex items-center gap-3">
              {/* Frosted Code Icon Box */}
              <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center text-stone-300 font-mono text-2xl sm:text-3xl font-light">
                &lt;/&gt;
              </div>

              {/* Cursive Slogan */}
              <div
                className="text-xs sm:text-sm text-[#064E3B] leading-tight font-bold select-none -rotate-3"
                style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
              >
                <div>Code</div>
                <div className="pl-1">Build</div>
                <div className="pl-2">Learn</div>
                <div className="pl-3 font-black text-emerald-800">Repeat.</div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CATEGORY PILL FILTER STRIP */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categoriesList.map((cat) => {
            const isActive = activeTab === cat.id

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
                  isActive
                    ? "bg-[#1E3A2F] text-white border-[#1E3A2F] shadow-sm"
                    : "bg-[#EAE6DF]/70 text-stone-600 border-transparent hover:bg-[#E2DDD5] hover:text-stone-900"
                }`}
              >
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* ========================================================================= */}
        {/* 5 VERTICAL COLUMNS GRID MATCHING EXACT REFERENCE */}
        {/* ========================================================================= */}
        <div className={`grid gap-4 sm:gap-5 ${
          activeTab === "all" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-3xl"
        }`}>
          {displayedColumns.map((col) => (
            <motion.div
              key={col.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-5 sm:p-6 rounded-[24px] bg-white border border-[#E8E3DC] shadow-[0_2px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                {/* Column Header */}
                <div className="pb-3 mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-sm sm:text-base font-black text-stone-900 tracking-tight">
                      {col.title}
                    </h3>
                    <span className="text-xs font-mono text-stone-400 font-semibold">
                      {col.count}
                    </span>
                  </div>
                  <div className="w-6 h-[2px] bg-[#064E3B] rounded-full" />
                </div>

                {/* Skill List Items */}
                <div className="space-y-4">
                  {col.items.map((item, iIdx) => {
                    const IconComponent = item.icon

                    return (
                      <div
                        key={iIdx}
                        className="flex items-center gap-3 text-xs sm:text-sm font-bold text-stone-800 hover:text-[#064E3B] transition-colors group cursor-default"
                      >
                        {/* Logo / Icon */}
                        <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                          {item.isIcon ? (
                            <IconComponent className="w-5 h-5 text-stone-700 group-hover:text-[#064E3B] transition-colors" />
                          ) : (
                            <img
                              src={item.logo}
                              alt={item.name}
                              className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                              loading="lazy"
                            />
                          )}
                        </div>

                        {/* Name */}
                        <span className="truncate">{item.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}
