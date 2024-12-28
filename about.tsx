'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            <span className="text-[#FF6F61]">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                Hello! I&apos;m Zakaria, an aspiring Industrial Engineer with a passion for optimizing processes 
                and implementing AI-driven solutions in the manufacturing sector.
              </p>
              <p>
                Currently pursuing my Engineering Degree at ESITH in Casablanca, 
                I&apos;ve had the opportunity to work on various projects that combine 
                traditional industrial engineering principles with modern technology.
              </p>
              <p>Here are some technologies I&apos;ve been working with:</p>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  "Python",
                  "R",
                  "Data Analysis",
                  "Lean Manufacturing",
                  "Process Optimization",
                  "Supply Chain Planning",
                ].map((tech) => (
                  <li key={tech} className="flex items-center space-x-2">
                    <span className="text-[#FF6F61]">▹</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Identity%20photograph%20%20%202.jpg-i4Kwz4hyGX7e7T7TRL6eeLVgfS0NsA.jpeg"
                  alt="Zakaria Soubai - Professional Portrait"
                  width={400}
                  height={400}
                  className="rounded grayscale hover:grayscale-0 transition-all object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 border-2 border-[#FF6F61] rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

