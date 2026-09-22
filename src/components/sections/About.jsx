"use client"

import { GraduationCap, Award, ExternalLink, Code2, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react"

const certifications = [
  {
    title: "React.js Internship Certificate",
    issuer: "CodeX Matrix",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1hWAYll_6zhzU53lYa5jchrZ9t5X1-rsU/view",
    credentialType: "Frontend Engineering"
  },
  {
    title: "Mastering JAVA for App Development",
    issuer: "Lovely Professional University ('O' Grade)",
    date: "Jun 2025",
    link: "https://drive.google.com/file/d/1D-yYGuOEpf2QhTNx3fC2tJQCMVZE1ZJ3/view",
    credentialType: "Academic Distinction"
  },
  {
    title: "Prompt Engineering & Generative AI",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1jzF_V1ZrX-dbzcihrbh-kyTHcBaZ6Gw8/view",
    credentialType: "AI & LLM Workflows"
  },
  {
    title: "Java Programming Mastery",
    issuer: "neoColab",
    date: "May 2024",
    link: "https://drive.google.com/file/d/1Qi9J3jNBusEJaCxPoA5gCKZrYuktybC0/view",
    credentialType: "Core Programming"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF7F2] text-[#18181B] border-t border-[#E5E0D8] relative overflow-hidden select-none">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP EYEBROW BAR: "01 — ABOUT ME" & "/ BACKGROUND / EDUCATION / PROFILE" */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-stone-500 uppercase pb-6 mb-8 border-b border-stone-200/80">
          <div className="flex items-center gap-2">
            <span>01</span>
            <span className="text-stone-300">—</span>
            <span className="font-bold text-stone-700">ABOUT ME</span>
          </div>

          <div className="flex items-center gap-2 text-stone-400 font-semibold">
            <span>/</span>
            <span>BACKGROUND</span>
            <span>/</span>
            <span>EDUCATION</span>
            <span>/</span>
            <span>PROFILE</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN HEADLINE & SUMMARY */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#14261C] leading-[0.95] mb-4">
              <span>Background & </span>
              <br className="hidden sm:inline" />
              <span>Engineering Journey</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-xl leading-relaxed">
              Computer Science undergraduate at Lovely Professional University focused on full-stack architecture, clean code, and competitive problem solving.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#E2F7E2] text-[#064E3B] border border-[#BDEEC0]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black text-stone-900 leading-tight">
                  B.Tech CSE (2023–2026)
                </div>
                <div className="text-xs font-mono text-stone-500 mt-0.5">
                  Lovely Professional University
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* EDITORIAL CONTENT GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Bio & Core Philosophy (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Engineering Philosophy Card */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-[#E8E3DC] shadow-[0_2px_16px_rgba(0,0,0,0.02)] flex-1">
              <div className="pb-3 mb-4 border-b border-stone-100 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
                  Engineering Philosophy
                </h3>
                <div className="w-6 h-[2px] bg-[#064E3B] rounded-full" />
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                I am a developer driven by the satisfaction of turning complex ideas into functional, clean, and intuitive web products. My work emphasizes modular component design, responsive interfaces, and scalable backend services.
              </p>
              
              <p className="text-sm text-stone-600 leading-relaxed">
                Beyond full-stack development, I practice daily competitive programming across LeetCode, HackerRank (5★ Gold C++), and CodeChef to constantly sharpen my algorithmic efficiency and problem-solving intuition.
              </p>
            </div>

            {/* Academic Foundations Card */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-[#E8E3DC] shadow-[0_2px_16px_rgba(0,0,0,0.02)]">
              <div className="pb-3 mb-4 border-b border-stone-100 flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
                  Core Academic Coursework
                </h3>
                <span className="text-xs font-mono text-stone-400">Curriculum</span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold">
                <span className="px-3 py-1.5 rounded-xl bg-sky-50 text-sky-800 border border-sky-200">
                  Data Structures & Algorithms
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200">
                  Database Management Systems (DBMS)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-800 border border-purple-200">
                  Object-Oriented Programming (Java / C++)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Computer Networks & Protocols
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-800 border border-teal-200">
                  Operating Systems
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Certifications (Span 5) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-[#E8E3DC] shadow-[0_2px_16px_rgba(0,0,0,0.02)] h-full flex flex-col justify-between">
              
              <div>
                <div className="pb-3 mb-5 border-b border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#064E3B]" />
                    <h3 className="text-base sm:text-lg font-black text-stone-900 tracking-tight">
                      Verified Certifications
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-400 font-semibold">
                    4 Credentials
                  </span>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, idx) => (
                    <a
                      key={idx}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-2xl bg-[#FAF7F2] hover:bg-stone-50 border border-stone-200 hover:border-[#064E3B]/40 transition-all block shadow-2xs hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-[#064E3B] transition-colors">
                          {cert.title}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#064E3B] transition-colors shrink-0" />
                      </div>
                      
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 mt-2">
                        <span>{cert.issuer}</span>
                        <span className="text-stone-400">{cert.date}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-400 font-mono flex items-center justify-between">
                <span>Verified via Google Drive</span>
                <span className="text-stone-300">↗</span>
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM EDITORIAL QUOTE */}
        {/* ========================================================================= */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          
          <div className="flex items-start gap-3">
            <div className="w-[2.5px] h-10 bg-[#064E3B] rounded-full mt-0.5" />
            <div>
              <div className="text-lg sm:text-xl font-serif text-stone-900 leading-tight">
                Curiosity fuels learning,
              </div>
              <div className="text-lg sm:text-xl font-serif text-stone-700 leading-tight">
                consistency delivers results.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto text-xs font-mono font-bold tracking-wider text-stone-400">
            <span>EXPLORE JOURNEY</span>
            <span className="text-stone-300">→</span>
            <a
              href="#experience"
              className="w-8 h-8 rounded-full bg-[#E2F7E2] text-[#064E3B] border border-[#BDEEC0] flex items-center justify-center shadow-2xs hover:scale-105 transition-transform cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}
