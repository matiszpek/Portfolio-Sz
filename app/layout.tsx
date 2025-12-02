import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
})

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "Portfolio de desarrollador - Explora mis proyectos, habilidades y experiencia en desarrollo web, AI y más.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "fullstack"],
  authors: [{ name: "Developer" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
