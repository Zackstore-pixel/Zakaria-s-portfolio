import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zakaria Soubai - Industrial Engineer",
  description: "Portfolio of Zakaria Soubai - Industrial Engineer specializing in AI-driven solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#121212] text-slate-300`}>{children}</body>
    </html>
  )
}

