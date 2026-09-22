"use client"

import { Navbar } from "../components/sections/Navbar"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Skills } from "../components/sections/Skills"
import { CodingStats } from "../components/sections/CodingStats"
import { Projects } from "../components/sections/Projects"
import { Experience } from "../components/sections/Experience"
import { Footer } from "../components/sections/Footer"

import { SmoothScroll } from "../components/ui/SmoothScroll"

export default function Page() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#FAF7F2] text-[#18181B] selection:bg-[#FDE047] selection:text-[#18181B] antialiased">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <CodingStats />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
