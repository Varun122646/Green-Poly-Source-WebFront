import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { cn } from "@/lib/utils"

import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "GREEN PolySource - Sustainable Recycling Solutions",
  description: "Transform waste into value with GREEN PolySource's innovative recycling solutions.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.variable, GeistMono.variable)}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'