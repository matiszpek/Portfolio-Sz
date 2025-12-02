"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X, Terminal, ChevronRight, Circle } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/portfolio-data"

interface HeaderProps {
  currentPath: string[]
}

export function Header({ currentPath }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#30363d] bg-[#0d1117]/95 backdrop-blur-sm">
      <div className="flex h-12 items-center justify-between px-4">
        {/* Logo y Breadcrumb - Estilo VS Code */}
        <div className="flex items-center gap-3">
          {/* Logo animado */}
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded bg-gradient-to-br from-[#238636] to-[#58a6ff]">
              <Terminal className="h-4 w-4 text-white" />
            </div>
            <span className="hidden font-semibold text-[#e6edf3] sm:inline">
              {PERSONAL_INFO.name.split(" ")[0]}
            </span>
          </motion.div>
          
          {/* Breadcrumb con animación */}
          <div className="hidden items-center gap-1 text-sm md:flex">
            <span className="text-[#484f58]">/</span>
            {["portfolio", ...currentPath].map((segment, index, arr) => (
              <motion.span
                key={segment + index}
                className="flex items-center"
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className={index === arr.length - 1 ? "text-[#e6edf3]" : "text-[#8b949e]"}>
                  {segment}
                </span>
                {index < arr.length - 1 && (
                  <ChevronRight className="mx-1 h-3 w-3 text-[#484f58]" />
                )}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Status indicator - Window controls style */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Status */}
          <div className="flex items-center gap-2 rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1">
            <Circle className="h-2 w-2 fill-[#3fb950] text-[#3fb950]" />
            <span className="text-xs text-[#8b949e]">Disponible para proyectos</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-md text-[#8b949e] transition-colors hover:bg-[#21262d] hover:text-[#e6edf3]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-md text-[#8b949e] transition-colors hover:bg-[#21262d] hover:text-[#0a66c2]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="ml-2 flex items-center gap-2 rounded-md bg-[#238636] px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#2ea043]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="h-4 w-4" />
            <span>Contactar</span>
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md p-2 text-[#8b949e] hover:bg-[#21262d] hover:text-[#e6edf3] md:hidden"
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#30363d] bg-[#0d1117] md:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {/* Status for mobile */}
              <div className="mb-2 flex items-center gap-2 text-sm">
                <Circle className="h-2 w-2 fill-[#3fb950] text-[#3fb950]" />
                <span className="text-[#8b949e]">Disponible para proyectos</span>
              </div>
              
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#8b949e] hover:bg-[#21262d] hover:text-[#e6edf3]"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#8b949e] hover:bg-[#21262d] hover:text-[#e6edf3]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 rounded-md bg-[#238636] px-3 py-2 text-sm text-white hover:bg-[#2ea043]"
              >
                <Mail className="h-4 w-4" />
                Contactar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
