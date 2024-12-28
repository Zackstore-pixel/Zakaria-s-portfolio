'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: "Agile Project Management",
    issuer: "Google",
    date: "December 22, 2024",
    link: "https://coursera.org/verify/QDY2T0P2Z19L"
  },
  {
    title: "Supply Chain Planning",
    issuer: "Rutgers the State University of New Jersey",
    date: "APRIL 2024",
    link: "https://coursera.org/verify/7SWPDPJRQPCD"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "MAY 2023",
    link: "https://coursera.org/verify/J5J3PFE2JZZM"
  },
  {
    title: "Create a Mortgage Calculator in Excel",
    issuer: "Coursera",
    date: "MARCH 2023",
    link: "https://coursera.org/verify/76Y4MFG2CRBY"
  },
  {
    title: "Python for Data Analysis: Pandas & NumPy",
    issuer: "Coursera",
    date: "FEBRUARY 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/V6Q93F23CN7Z"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            <span className="text-[#FF6F61]">03.</span> Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-[#1E1E2F] border-[#2A2A40]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-slate-100">{cert.title}</CardTitle>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-[#FF6F61]"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FF6F61]">{cert.issuer}</p>
                  <p className="text-sm text-slate-400">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

