"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, Sparkles, Award, ArrowUpRight, TrendingUp, Building2, Code2, ArrowRight } from "lucide-react"

const experiences = [
  {
    id: "codex",
    role: "Frontend Developer",
    company: "CodeX Matrix",
    period: "Jun 2025 – Aug 2025",
    type: "Internship",
    location: "Remote",
    icon: Code2,
    iconColor: "text-emerald-700",
    theme: {
      cardBg: "bg-emerald-50/40",
      activeBorder: "border-emerald-500",
      activeRing: "ring-emerald-400/30",
      gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      metricBg: "bg-emerald-100/80 border-emerald-300 text-emerald-900",
      takeawayBg: "bg-emerald-50/70 border-emerald-200",
      takeawayText: "text-emerald-900",
      accentDot: "bg-emerald-500",
      btnBg: "bg-emerald-700 hover:bg-emerald-800 text-white"
    },
    impactMetric: "+50% Responsiveness",
    impactLabel: "Rendering Profiling",
    link: "https://drive.google.com/file/d/1hWAYll_6zhzU53lYa5jchrZ9t5X1-rsU/view",
    linkText: "View Internship Certificate",
    tagline: "High-Performance Reactive UI Engineering & State Management",
    description: "Built responsive and performant user interface modules with React.js and Tailwind CSS. Applied code-splitting, component memoization (useMemo, useCallback), and rendering optimizations to significantly reduce load times and elevate UX.",
    highlights: [
      "Engineered reusable reactive design system components with React.js & modern Tailwind CSS",
      "Conducted rendering profiling that improved interface responsiveness and interaction speeds by 50%",
      "Collaborated with the core engineering team for PR reviews, atomic design, and accessibility testing"
    ],
    takeaway: "Mastered enterprise React performance profiling, memory leak prevention, and cross-browser testing.",
    technologies: [
      { name: "React.js", bg: "bg-sky-100 text-sky-800 border-sky-200" },
      { name: "Tailwind CSS", bg: "bg-teal-100 text-teal-800 border-teal-200" },
      { name: "JavaScript", bg: "bg-amber-100 text-amber-800 border-amber-200" },
      { name: "Optimization", bg: "bg-emerald-100 text-emerald-800 border-emerald-200" },
      { name: "Git", bg: "bg-orange-100 text-orange-800 border-orange-200" },
      { name: "REST APIs", bg: "bg-purple-100 text-purple-800 border-purple-200" }
    ]
  },
  {
    id: "lpu",
    role: "Core Java & Backend Development Training",
    company: "Lovely Professional University (LPU)",
    period: "Jun 2025 – Jul 2025",
    type: "Academic Distinction",
    location: "Punjab, India",
    icon: Award,
    iconColor: "text-amber-700",
    theme: {
      cardBg: "bg-amber-50/40",
      activeBorder: "border-amber-500",
      activeRing: "ring-amber-400/30",
      gradient: "from-amber-500/15 via-orange-500/10 to-transparent",
      badge: "bg-amber-100 text-amber-900 border-amber-300",
      metricBg: "bg-amber-100/80 border-amber-300 text-amber-950",
      takeawayBg: "bg-amber-50/70 border-amber-200",
      takeawayText: "text-amber-950",
      accentDot: "bg-amber-500",
      btnBg: "bg-amber-700 hover:bg-amber-800 text-white"
    },
    impactMetric: "'O' Grade Top Tier",
    impactLabel: "Academic Distinction",
    link: "https://drive.google.com/file/d/1D-yYGuOEpf2QhTNx3fC2tJQCMVZE1ZJ3/view",
    linkText: "View 'O' Grade Certificate",
    tagline: "Object-Oriented Architecture, JDBC & Scalable Database Persistence",
    description: "Completed intensive training in Core Java, Object-Oriented Programming (OOP), Exception Handling, Collections Framework, and JDBC. Earned an outstanding 'O' Grade distinction for top-tier coursework and project delivery.",
    highlights: [
      "Awarded 'O' Grade distinction for top-tier performance in coursework & technical assessments",
      "Architected a modular Quiz Application featuring secure JDBC connectivity and MySQL persistence",
      "Implemented clean DAO architecture, session handling, and robust exception workflows"
    ],
    takeaway: "Deepened mastery in multi-threaded Java applications, relational database schemas, and clean DAO patterns.",
    technologies: [
      { name: "Core Java", bg: "bg-orange-100 text-orange-800 border-orange-200" },
      { name: "OOP Principles", bg: "bg-amber-100 text-amber-800 border-amber-200" },
      { name: "JDBC", bg: "bg-blue-100 text-blue-800 border-blue-200" },
      { name: "MySQL", bg: "bg-yellow-100 text-yellow-800 border-yellow-200" },
      { name: "Exception Handling", bg: "bg-rose-100 text-rose-800 border-rose-200" },
      { name: "Data Structures", bg: "bg-emerald-100 text-emerald-800 border-emerald-200" }
    ]
  },
  {
    id: "nits",
    role: "Web Developer (Freelance)",
    company: "Nits Construction Ltd",
    period: "Mar 2025 – Apr 2025",
    type: "Commercial Client Project",
    location: "Live UK Domain",
    icon: Building2,
    iconColor: "text-sky-700",
    theme: {
      cardBg: "bg-sky-50/40",
      activeBorder: "border-sky-500",
      activeRing: "ring-sky-400/30",
      gradient: "from-sky-500/15 via-blue-500/10 to-transparent",
      badge: "bg-sky-100 text-sky-800 border-sky-300",
      metricBg: "bg-sky-100/80 border-sky-300 text-sky-950",
      takeawayBg: "bg-sky-50/70 border-sky-200",
      takeawayText: "text-sky-950",
      accentDot: "bg-sky-500",
      btnBg: "bg-sky-700 hover:bg-sky-800 text-white"
    },
    impactMetric: "+25% Lead Conversions",
    impactLabel: "Production Deployment",
    link: "https://nitsconstructionltd.co.uk/",
    linkText: "Visit Live Website",
    tagline: "Full Production Website & Lead Capture Engine for UK Firm",
    description: "Developed and deployed a full production web application for a UK-based construction company using PHP, MySQL, and JavaScript. Built dynamic service showcases and automated lead-capture pipelines.",
    highlights: [
      "Delivered complete end-to-end web presence from design concept to production cloud deployment",
      "Automated client lead-capture workflows, increasing customer inquiry conversions by 25%",
      "Implemented mobile-first responsive styling and SEO optimization for UK search rankings"
    ],
    takeaway: "Delivered a commercial production solution under tight client milestones with reliable lead automation.",
    technologies: [
      { name: "PHP", bg: "bg-indigo-100 text-indigo-800 border-indigo-200" },
      { name: "MySQL", bg: "bg-yellow-100 text-yellow-800 border-yellow-200" },
      { name: "JavaScript", bg: "bg-amber-100 text-amber-800 border-amber-200" },
      { name: "Lead Forms", bg: "bg-emerald-100 text-emerald-800 border-emerald-200" },
      { name: "SEO", bg: "bg-teal-100 text-teal-800 border-teal-200" },
      { name: "Responsive UI", bg: "bg-sky-100 text-sky-800 border-sky-200" }
    ]
  }
]

export function Experience() {
  const [activeExpId, setActiveExpId] = useState(experiences[0].id)

  const activeExp = experiences.find((e) => e.id === activeExpId) || experiences[0]
  const ActiveIcon = activeExp.icon

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FAF7F2] text-[#18181B] border-t border-[#E8E3DC] relative overflow-hidden select-none">
      
      {/* Background Ambient Colored Glow Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Handwritten Note */}
      <div className="absolute top-10 right-12 text-stone-400 font-['Caveat',cursive] text-2xl select-none pointer-events-none hidden lg:block rotate-3">
        // practical engineering journey
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E2F7E2] text-[#064E3B] border border-[#BDEEC0] text-xs font-semibold tracking-wide mb-3 font-mono shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Career & Practical Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#18181B] tracking-tight">
            Experience & Journey
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-md">
            Hands-on software internships, academic distinctions, and commercial cloud deployments.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* CREATIVE INTERACTIVE MILESTONE CAROUSEL DOCK */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {experiences.map((exp, idx) => {
            const isActive = exp.id === activeExpId
            const ExpIcon = exp.icon

            return (
              <div
                key={exp.id}
                onClick={() => setActiveExpId(exp.id)}
                className={`p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] transition-all duration-300 cursor-pointer border relative flex flex-col justify-between overflow-hidden group ${
                  isActive
                    ? `bg-white border-[#18181B] shadow-[0_12px_32px_rgba(24,24,27,0.08)] ring-2 ring-[#18181B]/10 -translate-y-1`
                    : "bg-white/75 border-[#E8E3DC] hover:border-stone-400 hover:bg-white shadow-2xs hover:-translate-y-0.5"
                }`}
              >
                {/* Top Row: Icon + Type Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`p-3 rounded-2xl transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? "bg-[#18181B] text-white shadow-sm" : "bg-stone-100 text-stone-700"
                  }`}>
                    <ExpIcon className="w-5 h-5" />
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border shadow-2xs ${exp.theme.badge}`}>
                    {exp.type}
                  </span>
                </div>

                {/* Company Name & Role Info */}
                <div>
                  <h4 className="text-base sm:text-lg font-black text-stone-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {exp.company}
                  </h4>
                  <p className="text-xs font-semibold text-stone-500 font-mono mt-1">
                    {exp.period}
                  </p>
                </div>

                {/* Bottom Impact Metric Snippet */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-stone-700 text-[11px]">
                    {exp.impactMetric}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isActive ? "text-stone-900 translate-x-1" : "text-stone-400 group-hover:translate-x-1"
                  }`} />
                </div>

                {/* Active Indicator Accent Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeExperienceTab"
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#18181B]"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* ========================================================================= */}
        {/* ACTIVE EXPERIENCE EXPANDED SPOTLIGHT CARD */}
        {/* ========================================================================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#E8E3DC] p-6 sm:p-10 md:p-12 shadow-[0_6px_35px_rgba(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Top Ambient Colored Ribbon */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${activeExp.theme.gradient} pointer-events-none`} />

            <div className="relative z-10">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-stone-100 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <div className={`p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 ${activeExp.iconColor}`}>
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                      {activeExp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-stone-600 flex-wrap">
                    <span className="text-stone-900 font-bold text-base">{activeExp.company}</span>
                    <span>•</span>
                    <span className="text-xs font-mono text-stone-500">{activeExp.location}</span>
                    <span>•</span>
                    <span className={`text-xs font-mono font-bold px-3 py-0.5 rounded-full border ${activeExp.theme.badge}`}>
                      {activeExp.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-stone-600 font-mono mt-2.5">
                    {activeExp.tagline}
                  </p>
                </div>

                {/* Impact Metric Badge & Certificate Link */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <div className={`p-4 rounded-2xl border text-center min-w-[150px] shadow-2xs ${activeExp.theme.metricBg}`}>
                    <div className="text-lg font-black font-mono">
                      {activeExp.impactMetric}
                    </div>
                    <div className="text-[10px] font-mono uppercase font-bold tracking-wider opacity-80 mt-0.5">
                      {activeExp.impactLabel}
                    </div>
                  </div>

                  {activeExp.link && (
                    <a
                      href={activeExp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl font-bold text-xs transition-all shadow-sm active:scale-95 ${activeExp.theme.btnBg}`}
                    >
                      <span>{activeExp.linkText}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description & Deliverables */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                
                {/* Left: Summary & Key Deliverables (Span 7) */}
                <div className="lg:col-span-7">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-3 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-stone-700" />
                    <span>Core Responsibilities & Impact</span>
                  </h4>
                  <p className="text-sm text-stone-600 leading-relaxed mb-5">
                    {activeExp.description}
                  </p>

                  <div className="space-y-3">
                    {activeExp.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Key Engineering Takeaway Box (Span 5) */}
                <div className="lg:col-span-5">
                  <div className={`p-6 rounded-3xl border shadow-2xs ${activeExp.theme.takeawayBg}`}>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold mb-2">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>Key Engineering Takeaway</span>
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed font-medium ${activeExp.theme.takeawayText}`}>
                      "{activeExp.takeaway}"
                    </p>
                  </div>
                </div>

              </div>

              {/* Tech Stack Arsenal with Colorful Badges */}
              <div className="pt-6 border-t border-stone-100 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-stone-500 font-semibold mr-2">Technologies Used:</span>
                {activeExp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-xs font-mono px-3 py-1 rounded-xl border font-semibold shadow-2xs ${tech.bg}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
