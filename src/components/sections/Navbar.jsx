"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Mail, Send, Github, Linkedin, FileDown } from "lucide-react"
import { Magnetic } from "../ui/Magnetic"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[5000] transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          DEEPTI <span className="text-primary">DEVI</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navItems.map((item, i) => (
              <Magnetic key={item.name} strength={0.2}>
                <motion.a
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors p-2"
                >
                  {item.name}
                </motion.a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Magnetic strength={0.2}>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:scale-105 transition-transform"
              >
                Contact Me
              </motion.a>
            </Magnetic>

            <div className="flex items-center gap-4">
              <Magnetic strength={0.2}>
                <a
                  href="https://github.com/Deeptidevi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-all p-2"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="https://www.linkedin.com/in/deepti-devi-b43001398"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-all p-2"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="https://drive.google.com/file/d/1BT1dhE-whJek2ZRBIHVqFNiUZ_r5JDxm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  Resume
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors text-center"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
