"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react"
import { TextReveal } from "../ui/TextReveal"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "pathaniadeepti05@gmail.com", href: "mailto:pathaniadeepti05@gmail.com" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "deeptidevi", href: "https://www.linkedin.com/in/deeptidevi" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "Deeptidevi", href: "https://github.com/Deeptidevi" },
  ]

  return (
    <footer id="contact" className="relative bg-black pt-32 pb-10 border-t border-white/5 z-[100]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 flex flex-col items-center">
          <TextReveal text="Get In Touch" className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6" />
          <p className="text-gray-400 max-w-xl mb-12 font-medium">
            Interested in collaborating or just want to say hi? My inbox is always open.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center group hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <div className="text-primary">{info.icon}</div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{info.label}</span>
                <span className="text-sm font-bold text-white break-all">{info.value}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10 border-t border-white/5">
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
          >
            Back to top
            <div className="p-2 rounded-full border border-white/10 group-hover:border-primary transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  )
}
