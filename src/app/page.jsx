"use client"

import { Navbar } from "../components/sections/Navbar"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Skills } from "../components/sections/Skills"
import { Projects } from "../components/sections/Projects"
import { Experience } from "../components/sections/Experience"
import { Footer } from "../components/sections/Footer"

import { Loading } from "../components/ui/Loading"
import { SmoothScroll } from "../components/ui/SmoothScroll"
import { Grain } from "../components/ui/Grain"
import { CustomCursor } from "../components/ui/CustomCursor"
import { ScrollProgress } from "../components/ui/ScrollProgress"

export default function Page() {
  return (
    <SmoothScroll>
      <Loading />
      <ScrollProgress />
      <Grain />
      <main className="relative min-h-screen bg-black text-white selection:bg-primary/30">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
