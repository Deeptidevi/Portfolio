"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Heart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] text-[#18181B] pt-4 pb-20 md:pb-28 overflow-hidden">
      
      {/* Background Soft Playful Floating Shapes */}
      <div className="absolute top-12 left-10 w-24 h-24 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: GREETING, HEADLINE, BIO & BUTTONS */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start z-20">
            
            {/* Hand-Drawn "Hey, I'm" Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center px-4 py-1.5 mb-5 bg-[#E2F7E2] border-2 border-[#18181B] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[2px_2px_0px_rgba(24,24,27,0.85)] hover:scale-105 transition-transform cursor-default"
            >
              <span className="font-bold text-xs sm:text-sm text-[#18181B] tracking-wide font-sans">
                Hey, I'm
              </span>
            </motion.div>

            {/* Giant Bold Name with Yellow Brush Highlighter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative mb-3"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#18181B] leading-none select-none relative inline-block">
                <span>Deepti </span>
                <span className="relative inline-block">
                  <span className="relative z-10">Devi</span>
                  {/* Yellow Highlighter Brush Stroke */}
                  <span
                    className="absolute -bottom-1 left-[-6px] right-[-8px] h-4 sm:h-7 bg-[#FDE047] -rotate-1 rounded-sm -z-0 opacity-95 shadow-[0_2px_10px_rgba(253,224,71,0.4)]"
                    style={{ transformOrigin: "left center" }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#18181B] tracking-tight mb-4"
            >
              Full-Stack Developer & B.Tech CSE Student
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-lg mb-8 font-normal"
            >
              I turn ideas into real, working products with clean code, creative design and a curious mind.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary Deep Pine Green Button */}
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-[#064E3B] hover:bg-[#022C22] text-white font-bold text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(6,78,59,0.25)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer group"
              >
                <span>See My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Clean Outline Button */}
              <a
                href="mailto:deeptidevi7124@gmail.com"
                className="px-8 py-3.5 rounded-full bg-white hover:bg-stone-50 text-[#18181B] border-2 border-[#18181B] font-bold text-sm tracking-wide transition-all shadow-[2px_2px_0px_rgba(24,24,27,0.85)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: YELLOW BLOB BACKDROP, PHOTO, DOODLES & STICKY NOTE */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center"
            >
              
              {/* Hand-Drawn Crown Doodle (Top Right of Head) */}
              <div className="absolute top-2 right-12 sm:right-16 z-30 transform rotate-12 pointer-events-none animate-bounce" style={{ animationDuration: "3s" }}>
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#18181B] drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 17l3-11 5 5 5-5 3 11H2z" />
                  <circle cx="5" cy="6" r="1.2" fill="currentColor" />
                  <circle cx="12" cy="11" r="1.2" fill="currentColor" />
                  <circle cx="19" cy="6" r="1.2" fill="currentColor" />
                </svg>
              </div>

              {/* Hand-Drawn Sparkle / Star Doodles */}
              <div className="absolute top-8 left-4 z-30 pointer-events-none text-[#18181B] font-black text-xl">
                ✦
              </div>
              <div className="absolute bottom-16 left-2 z-30 pointer-events-none text-[#FBBF24] font-black text-2xl">
                ★
              </div>
              <div className="absolute top-1/2 -left-3 z-30 pointer-events-none text-[#18181B]">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="absolute top-12 left-1/4 z-30 pointer-events-none text-[#18181B]">
                <svg className="w-5 h-5 -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 14l6-6M8 18l6-6" strokeLinecap="round" />
                </svg>
              </div>

              {/* Big Organic Sunny Yellow Blob Backdrop */}
              <div
                className="absolute inset-2 sm:inset-0 rounded-[52%_48%_56%_44%/48%_54%_46%_52%] bg-[#FBBF24] opacity-95 shadow-[0_15px_35px_rgba(251,191,36,0.35)] transition-transform duration-700"
              />

              {/* Portrait Photo with Soft Blend */}
              <div className="relative z-20 w-[86%] h-[88%] rounded-full overflow-hidden flex items-center justify-center bg-stone-100">
                <img
                  src="/myP (2).png"
                  alt="Deepti Devi"
                  className="w-full h-full object-cover scale-[1.14]"
                  style={{ objectPosition: "50% 26%" }}
                />
              </div>

              {/* Hand-Drawn Cute Sticky Note (Bottom Right Corner) */}
              <motion.div
                initial={{ opacity: 0, rotate: 6, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 3, scale: 1 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 -right-2 sm:-right-6 z-30 bg-white border-2 border-[#18181B] rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_rgba(24,24,27,0.9)] max-w-[170px] sm:max-w-[190px] text-left select-none cursor-pointer"
              >
                {/* Folded Top-Left Dogear Corner */}
                <div className="absolute -top-[2px] -left-[2px] w-4 h-4 bg-[#FAF7F2] border-b-2 border-r-2 border-[#18181B] rounded-br-md" />

                <div
                  className="text-base sm:text-lg font-bold text-[#18181B] leading-snug"
                  style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
                >
                  <div className="tracking-wide">Developer</div>
                  <div className="tracking-wide">Learner</div>
                  <div className="tracking-wide">Problem Solver</div>
                  <div className="tracking-wide flex items-center gap-1">
                    <span>Dreamer</span>
                    <span className="text-rose-500 font-normal animate-pulse">♡</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>

    </section>
  )
}
