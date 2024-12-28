'use client'

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Academic } from "@/components/academic"
import { Experience } from "@/components/experience"
import { Certifications } from "@/components/certifications"
import { Projects } from "@/components/projects"
import { Leadership } from "@/components/leadership"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A192F] text-slate-400">
      <Navigation />
      <Hero />
      <About />
      <Academic />
      <Experience />
      <Certifications />
      <Projects />
      <Leadership />
      <Contact />
    </main>
  )
}

