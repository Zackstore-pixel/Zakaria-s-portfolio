'use client'

import * as React from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Academic", href: "#academic" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = React.useState(true)
  const [activeSection, setActiveSection] = React.useState("")

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    setVisible(latest < previous || latest < 100)

    // Update active section based on scroll position
    const sections = navItems.map(item => item.href.substring(1))
    for (const section of sections) {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section)
          break
        }
      }
    }
  })

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-[#2A2A40]"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#FF6F61] text-2xl font-bold"
            >
              Z
            </motion.a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <a
                    href={item.href}
                    className={`text-slate-300 hover:text-[#FF6F61] transition-colors ${
                      activeSection === item.href.substring(1) ? 'text-[#FF6F61]' : ''
                    }`}
                  >
                    <span className="text-[#FF6F61]">0{i + 1}. </span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-slate-300" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1E1E2F] border-[#2A2A40]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, i) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-slate-300 hover:text-[#FF6F61] transition-colors ${
                        activeSection === item.href.substring(1) ? 'text-[#FF6F61]' : ''
                      }`}
                    >
                      <span className="text-[#FF6F61]">0{i + 1}. </span>
                      {item.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </motion.header>

      {/* Section Guide */}
      <motion.div 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="group relative flex items-center gap-4"
            whileHover={{ x: -4 }}
          >
            <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-[#FF6F61] whitespace-nowrap">
              {item.name}
            </span>
            <div 
              className={`w-3 h-3 rounded-full border-2 border-[#FF6F61] transition-all ${
                activeSection === item.href.substring(1)
                  ? 'bg-[#FF6F61]'
                  : 'group-hover:bg-[#FF6F61]/50'
              }`}
            />
          </motion.a>
        ))}
      </motion.div>
    </>
  )
}

