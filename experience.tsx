'use client'

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const experiences = [
  {
    company: "PAVECO SARL",
    position: "Intern - Textile and Apparel Production",
    date: "July 2024 - August 2024",
    location: "Tanger Free Zone",
    points: [
      "Optimized the ZUND cutting machine using AI tools and Lean Manufacturing techniques",
      "Implemented continuous improvement strategies leading to cost optimization",
      "Analyzed production metrics and designed actionable plans for sustained productivity growth",
    ],
  },
  {
    company: "SORIAC",
    position: "Intern - Mechanical Assembly",
    date: "July 2023 - August 2023",
    location: "Berrechid",
    points: [
      "Gained hands-on experience in the automotive sector",
      "Contributed to the assembly of vehicle components",
      "Ensured adherence to safety and quality standards",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            <span className="text-[#FF6F61]">02.</span> Experience
          </h2>
          <Tabs defaultValue={experiences[0].company} className="w-full">
            <TabsList className="bg-[#1E1E2F]">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.company}
                  value={exp.company}
                  className="data-[state=active]:text-[#FF6F61] data-[state=active]:bg-[#2A2A40]"
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>
            {experiences.map((exp) => (
              <TabsContent key={exp.company} value={exp.company} className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-slate-100">
                  {exp.position} <span className="text-[#FF6F61]">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-slate-400">{exp.date} | {exp.location}</p>
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex space-x-2">
                      <span className="text-[#FF6F61]">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

