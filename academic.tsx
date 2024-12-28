'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const education = [
  {
    school: "ESITH",
    program: "INDUSTRIAL ENGINEERING",
    period: "2022-2025",
    location: "Casablanca",
    description: "École supérieure de l'industrie textile et de l'habillement"
  },
  {
    school: "Elbilia sup",
    program: "Mathematics and Physics",
    period: "Preparatory Classes",
    location: "Casablanca",
    description: "Les classes préparatoires"
  }
]

export function Academic() {
  return (
    <section id="academic" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            <span className="text-[#FF6F61]">02.</span> Academic Background
          </h2>
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-[#1E1E2F] border-[#2A2A40]">
                <CardHeader>
                  <CardTitle className="text-slate-100">{edu.school}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-[#FF6F61] font-semibold">{edu.program}</p>
                  <p className="text-slate-300">{edu.description}</p>
                  <div className="flex justify-between text-sm text-slate-400">
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

