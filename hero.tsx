'use client'

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <span className="text-[#FF6F61]">Hi, my name is</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100">
            Zakaria Soubai.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-300">
            I optimize industrial processes.
          </h2>
          <p className="max-w-xl text-slate-400">
            Aspiring Industrial Engineer with a specialization in Industrial Management and a strong interest in AI-driven solutions.
            Passionate about leveraging AI for process optimization, solving complex problems, and driving strategic decision-making
            in industries and infrastructure.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#projects"
              className="inline-block px-6 py-3 border border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10 transition-colors rounded"
            >
              Check out my projects!
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

