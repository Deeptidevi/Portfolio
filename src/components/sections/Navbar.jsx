"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#coding" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["about", "skills", "projects", "experience", "coding"]
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md py-3.5 border-b border-[#E8E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-[#FAF7F2] py-5"
      } px-6 sm:px-12`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div>
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xl sm:text-2xl font-black tracking-tight text-[#18181B] hover:opacity-85 transition-opacity"
          >
            <span className="font-mono font-black text-xl sm:text-2xl text-[#18181B]">&lt;/&gt;</span>
            <span className="font-sans font-black text-xl sm:text-2xl">Deepti Devi</span>
          </a>
        </div>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isCurrentActive =
              activeSection === item.href.replace("#", "") ||
              (item.name === "Projects" && activeSection === "projects")

            return (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  isCurrentActive
                    ? "text-[#18181B] font-bold"
                    : "text-stone-600 hover:text-[#18181B]"
                }`}
              >
                <span>{item.name}</span>
                {isCurrentActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#064E3B] rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Button: Resume ↗ */}
        <div className="hidden md:flex items-center">
          <a
            href="/Deepti%20Devi%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#08654D] text-white text-xs font-bold shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="/Deepti%20Devi%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full bg-[#064E3B] text-white text-xs font-bold shadow-xs"
          >
            Resume ↗
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#18181B] rounded-xl hover:bg-stone-200/60 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200 mt-3 p-5 flex flex-col gap-3 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm py-2 font-bold text-stone-800 hover:text-[#064E3B] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
