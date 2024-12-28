'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import Image from "next/image"

const projects = [
  {
    title: "Fashion Valley Hackathon 2023 - Used Clothes E-commerce",
    description: "Developed a website for selling used clothes during the Fashion Valley'23 hackathon. The project focused on sustainable fashion and circular economy principles.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2023-05-31-13-08-32.jpg-NPjSZa5sZHdZQ5NQCSaO0No76nCJAt.jpeg",
    date: "May 2023",
    tags: ["E-commerce", "Sustainable Fashion", "Web Development"],
    link: "#",
  },
  {
    title: "Value Stream Mapping (VSM)",
    description: "Developed a comprehensive VSM for PAVECO's cutting machine to identify waste sources and improve efficiency.",
    tags: ["Lean Manufacturing", "Process Optimization", "Data Analysis"],
    link: "#",
  },
  {
    title: "Assembly Line Optimization",
    description: "Participated in optimizing assembly processes at SORIAC, focusing on quality and productivity improvements in the automotive sector.",
    tags: ["Industrial Engineering", "Quality Control", "Lean Manufacturing"],
    link: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            <span className="text-[#FF6F61]">04.</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="bg-[#1E1E2F] border-[#2A2A40] hover:border-[#FF6F61] transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-slate-100">{project.title}</CardTitle>
                    {project.link && (
                      <a href={project.link} className="text-slate-300 hover:text-[#FF6F61]">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  {project.image && (
                    <div className="mt-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="rounded-lg object-cover w-full"
                      />
                    </div>
                  )}
                  <CardDescription className="mt-2 text-slate-400">
                    {project.description}
                    {project.date && (
                      <span className="block mt-2 text-[#FF6F61]">{project.date}</span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[#FF6F61] text-sm">
                        #{tag}
                      </span>
                    ))}
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

