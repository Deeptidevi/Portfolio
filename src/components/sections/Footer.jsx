"use client"

import { useState } from "react"
import { Mail, Linkedin, Github, ArrowUp, ArrowUpRight, Sparkles, Check, Copy } from "lucide-react"

export function Footer() {
  const [copied, setCopied] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deeptidevi7124@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <footer id="contact" className="py-20 md:py-28 bg-[#FAF7F2] text-[#18181B] border-t border-[#E5E0D8] relative overflow-hidden">
      
      {/* Background doodles */}
      <div className="absolute top-8 left-8 text-stone-300 font-['Caveat',cursive] text-2xl select-none pointer-events-none hidden lg:block -rotate-6">
        ✦ let's connect & build ✦
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main CTA Box */}
        <div className="rounded-[32px] sm:rounded-[40px] bg-[#064E3B] text-white p-8 sm:p-14 mb-16 relative overflow-hidden shadow-[0_16px_50px_rgba(6,78,59,0.22)]">
          
          {/* Decorative ambient background shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/60 text-emerald-200 text-xs font-mono font-medium mb-3 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Let's build something extraordinary together.
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/90 mt-3 leading-relaxed">
                Open for software engineering roles, full-stack development internships, and collaborative open-source opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="mailto:deeptidevi7124@gmail.com"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-[#064E3B] font-bold text-sm hover:bg-emerald-50 transition-all shadow-md active:scale-95"
              >
                <Mail className="w-4 h-4 text-[#064E3B]" />
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-emerald-900/70 hover:bg-emerald-800 text-white font-mono text-xs border border-emerald-700/60 transition-all cursor-pointer shadow-sm active:scale-95"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4 text-emerald-300" />}
                <span>{copied ? "Copied to clipboard!" : "deeptidevi7124@gmail.com"}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Links & Copyright */}
        <div className="pt-8 border-t border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-600">
          <div className="flex items-center gap-6 font-semibold">
            <a
              href="https://github.com/Deeptidevi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#064E3B] transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/deepti-devi-b43001398"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#064E3B] transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://codolio.com/profile/DeeptiDevi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#064E3B] transition-colors"
            >
              Codolio
            </a>
            <a
              href="https://leetcode.com/u/pathaniadeepti05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#064E3B] transition-colors"
            >
              LeetCode
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-['Caveat',cursive] text-base text-stone-800 font-bold">
              Crafted with care & curiosity ♡
            </span>
            <span>•</span>
            <span>© {new Date().getFullYear()} Deepti Devi</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors shadow-2xs cursor-pointer hover:-translate-y-0.5"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
