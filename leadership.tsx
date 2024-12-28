'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Leadership() {
  return (
    <section id="leadership" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            <span className="text-[#FF6F61]">05.</span> Leadership Experience
          </h2>
          <Card className="bg-[#1E1E2F] border-[#2A2A40]">
            <CardHeader>
              <CardTitle className="text-slate-100">ESITH Job Fair - Company Relations Lead</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300">
                Served as the primary coordinator for company relations during ESITH's Job Fair, 
                a significant event bringing together industry leaders and job seekers. Responsible 
                for managing the global hosting of participating companies and ensuring smooth 
                interactions between businesses and potential candidates.
              </p>
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-23-14-53-20.jpg-gFMrYOqOudTyP7wLpGzKkMNXtRL74S.jpeg"
                  alt="ESITH Job Fair Management Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

