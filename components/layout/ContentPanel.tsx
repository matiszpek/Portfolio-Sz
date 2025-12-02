"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ExternalLink, 
  Github, 
  Download, 
  Mail, 
  MapPin, 
  Calendar, 
  Briefcase,
  Code2,
  Layers,
  Star,
  GitFork,
  Eye,
  Terminal,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Linkedin,
  Twitter
} from "lucide-react"
import Image from "next/image"
import { TreeNode, PERSONAL_INFO } from "@/lib/portfolio-data"
import { FileIcon, getExtensionColor } from "@/components/ui/FileIcon"

interface ContentPanelProps {
  selectedNode: TreeNode | null
  currentPath: string[]
}

// Hook para copiar al clipboard
function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)
  
  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return { copied, copy }
}

export function ContentPanel({ selectedNode, currentPath }: ContentPanelProps) {
  if (!selectedNode) {
    return <WelcomeScreen />
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedNode.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="h-full overflow-y-auto scrollbar-thin"
      >
        {/* Tab del archivo - estilo VS Code */}
        <div className="sticky top-0 z-10 border-b border-[#30363d] bg-[#161b22]">
          <div className="flex items-center">
            <div className="flex items-center gap-2 border-b-2 border-[#58a6ff] bg-[#0d1117] px-4 py-2">
              <FileIcon extension={selectedNode.extension} size={14} />
              <span className="font-mono text-sm text-[#e6edf3]">{selectedNode.name}</span>
            </div>
            <div className="flex-1 px-4">
              <span className="text-xs text-[#484f58]">
                {currentPath.join(" › ")}
              </span>
            </div>
          </div>
        </div>

        {/* Contenido dinámico con line numbers para código */}
        <div className="p-6">
          <ContentRenderer node={selectedNode} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function WelcomeScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg text-center"
      >
        {/* Terminal-style welcome */}
        <div className="mb-8 overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22]">
          <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#21262d] px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-[#f85149]" />
            <div className="h-3 w-3 rounded-full bg-[#d29922]" />
            <div className="h-3 w-3 rounded-full bg-[#238636]" />
            <span className="ml-2 text-xs text-[#8b949e]">welcome.sh</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#8b949e]"
            >
              $ cat welcome.txt
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-2 text-[#e6edf3]"
            >
              <span className="text-[#7ee787]">¡Hola!</span> Soy{" "}
              <span className="text-[#58a6ff]">{PERSONAL_INFO.name}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-1 text-[#8b949e]"
            >
              {PERSONAL_INFO.title}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-4 flex items-center text-[#7ee787]"
            >
              <span className="mr-2">$</span>
              <span className="animate-pulse">_</span>
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mb-6 text-[#8b949e]"
        >
          Navega el árbol de archivos para explorar mi trabajo
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="flex items-center justify-center gap-2 text-sm text-[#484f58]"
        >
          <Terminal className="h-4 w-4" />
          <span>Click en una carpeta para expandir</span>
          <ArrowRight className="h-3 w-3" />
          <span>Click en un archivo para ver</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ContentRenderer({ node }: { node: TreeNode }) {
  const content = node.content

  if (!content) {
    return (
      <div className="text-[#8b949e]">
        No hay contenido disponible para este archivo.
      </div>
    )
  }

  // README / About - con avatar
  if (content.avatar) {
    return <ReadmeContent content={content} />
  }

  // Skills
  if (content.skills) {
    return <SkillsContent content={content} />
  }

  // Project
  if (content.project) {
    return <ProjectContent project={content.project} />
  }

  // Experience
  if (content.experience) {
    return <ExperienceContent experience={content.experience} />
  }

  // Contact
  if (content.contactType) {
    return <ContactContent content={content} />
  }

  // PDF/Resume
  if (node.extension === "pdf") {
    return <ResumeContent content={content} />
  }

  // Markdown genérico
  if (content.description) {
    return <MarkdownContent content={content} />
  }

  return (
    <div className="text-[#8b949e]">
      Contenido no soportado.
    </div>
  )
}

// ============================================
// COMPONENTES DE CONTENIDO ESPECÍFICOS
// ============================================

function ReadmeContent({ content }: { content: any }) {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        {/* Avatar con glow effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#238636] via-[#58a6ff] to-[#a371f7] opacity-50 blur-md" />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#30363d] bg-[#21262d]">
            {content.avatar && content.avatar !== "/avatar.png" ? (
              <Image
                src={content.avatar}
                alt="Avatar"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#238636] to-[#58a6ff] text-4xl font-bold text-white">
                {PERSONAL_INFO.name.charAt(0)}
              </div>
            )}
          </div>
          {/* Status indicator */}
          <div className="absolute bottom-1 right-1 flex items-center gap-1 rounded-full border border-[#238636] bg-[#0d1117] px-2 py-0.5">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#238636]" />
            <span className="text-xs text-[#238636]">Disponible</span>
          </div>
        </motion.div>

        <div className="flex-1 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-[#e6edf3]"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-1 text-lg text-[#58a6ff]"
          >
            {content.subtitle}
          </motion.p>
          {PERSONAL_INFO.location && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 flex items-center justify-center gap-1 text-sm text-[#8b949e] sm:justify-start"
            >
              <MapPin className="h-4 w-4" />
              {PERSONAL_INFO.location}
            </motion.p>
          )}
          
          {/* Social links inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center justify-center gap-3 sm:justify-start"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b949e] transition-colors hover:text-[#e6edf3]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b949e] transition-colors hover:text-[#0a66c2]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-[#8b949e] transition-colors hover:text-[#58a6ff]"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bio card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="group relative overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#238636]/5 to-[#58a6ff]/5 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative p-5">
          <div className="flex items-center gap-2 text-sm text-[#8b949e]">
            <Code2 className="h-4 w-4" />
            <span>README.md</span>
          </div>
          <div className="mt-3 text-[#e6edf3] leading-relaxed">
            {content.description}
          </div>
        </div>
      </motion.div>

      {/* Tags con animación */}
      {content.tags && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {content.tags.map((tag: string, index: number) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="group flex items-center gap-1 rounded-full border border-[#30363d] bg-[#21262d] px-3 py-1 text-sm text-[#8b949e] transition-colors hover:border-[#58a6ff] hover:text-[#58a6ff]"
            >
              <Sparkles className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              {tag}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-3"
      >
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="group flex items-center gap-2 rounded-lg bg-[#238636] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#2ea043] hover:shadow-lg hover:shadow-[#238636]/20"
        >
          <Mail className="h-4 w-4" />
          Contactar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={PERSONAL_INFO.resume}
          download
          className="flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#21262d] px-5 py-2.5 text-sm font-medium text-[#e6edf3] transition-all hover:border-[#8b949e] hover:bg-[#30363d]"
        >
          <Download className="h-4 w-4" />
          Descargar CV
        </a>
      </motion.div>
    </div>
  )
}

function SkillsContent({ content }: { content: any }) {
  const { copied, copy } = useCopyToClipboard()
  
  return (
    <div className="space-y-8">
      {/* Skills con barras de progreso mejoradas */}
      {content.skills && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-[#58a6ff]" />
            <h2 className="text-lg font-semibold text-[#e6edf3]">Skills</h2>
          </div>
          <div className="grid gap-3">
            {content.skills.map((skill: any, index: number) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-lg border border-[#30363d] bg-[#161b22] p-3 transition-colors hover:border-[#484f58]"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm text-[#e6edf3]">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </span>
                  <span className="rounded-full bg-[#21262d] px-2 py-0.5 text-xs text-[#58a6ff]">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#21262d]">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: skill.level >= 80 
                        ? "linear-gradient(to right, #238636, #3fb950)" 
                        : skill.level >= 60 
                          ? "linear-gradient(to right, #58a6ff, #79c0ff)"
                          : "linear-gradient(to right, #d29922, #e3b341)"
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Código con syntax highlighting simulado y botón de copiar */}
      {content.code && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-[#a371f7]" />
            <h2 className="text-lg font-semibold text-[#e6edf3]">Código de Ejemplo</h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#30363d]">
            {/* Header del código */}
            <div className="flex items-center justify-between border-b border-[#30363d] bg-[#21262d] px-4 py-2">
              <span className="text-xs text-[#8b949e]">example.ts</span>
              <button
                onClick={() => copy(content.code)}
                className="flex items-center gap-1 text-xs text-[#8b949e] transition-colors hover:text-[#e6edf3]"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-[#238636]" />
                    <span className="text-[#238636]">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
            {/* Código con line numbers */}
            <div className="flex bg-[#161b22]">
              <div className="select-none border-r border-[#30363d] bg-[#0d1117] px-3 py-4 text-right font-mono text-xs text-[#484f58]">
                {content.code.split('\n').map((_: string, i: number) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre className="flex-1 overflow-x-auto p-4">
                <code className="font-mono text-sm text-[#e6edf3]">
                  {content.code}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

function ProjectContent({ project }: { project: any }) {
  return (
    <div className="space-y-6">
      {/* Header del proyecto con badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start justify-between"
      >
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#e6edf3]">{project.title}</h1>
            {project.featured && (
              <span className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#d29922] to-[#e3b341] px-2.5 py-0.5 text-xs font-medium text-black">
                <Star className="h-3 w-3" />
                Featured
              </span>
            )}
          </div>
          <p className="mt-2 text-[#8b949e]">{project.description}</p>
        </div>
      </motion.div>

      {/* Preview del proyecto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="group relative aspect-video overflow-hidden rounded-lg border border-[#30363d] bg-[#161b22]"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-4xl opacity-50">
              <Code2 className="h-10 w-10 text-[#58a6ff]" />
            </div>
            <span className="text-sm text-[#484f58]">Vista previa no disponible</span>
          </div>
        )}
        {/* Overlay con links al hacer hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#0d1117]/80 opacity-0 transition-opacity group-hover:opacity-100">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#238636] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              <Eye className="h-4 w-4" />
              Ver Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#21262d] px-4 py-2 text-sm font-medium text-[#e6edf3] transition-transform hover:scale-105"
            >
              <Github className="h-4 w-4" />
              Código
            </a>
          )}
        </div>
      </motion.div>

      {/* Stats simulados */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center gap-6 text-sm text-[#8b949e]"
      >
        <span className="flex items-center gap-1">
          <Star className="h-4 w-4" />
          <span>--</span>
        </span>
        <span className="flex items-center gap-1">
          <GitFork className="h-4 w-4" />
          <span>--</span>
        </span>
        <span className="flex items-center gap-1">
          <Eye className="h-4 w-4" />
          <span>--</span>
        </span>
      </motion.div>

      {/* Tecnologías con iconos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-[#8b949e]">
          <Layers className="h-4 w-4" />
          Stack Tecnológico
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="rounded-md border border-[#30363d] bg-[#21262d] px-3 py-1.5 text-sm text-[#e6edf3] transition-colors hover:border-[#58a6ff]"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Descripción larga */}
      {project.longDescription && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg border border-[#30363d] bg-[#161b22] p-5"
        >
          <h3 className="mb-3 font-medium text-[#e6edf3]">Sobre el proyecto</h3>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#8b949e]">
            {project.longDescription}
          </p>
        </motion.div>
      )}

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-3 pt-2"
      >
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-lg bg-[#238636] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#2ea043] hover:shadow-lg hover:shadow-[#238636]/20"
          >
            <ExternalLink className="h-4 w-4" />
            Ver Demo en Vivo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#21262d] px-5 py-2.5 text-sm font-medium text-[#e6edf3] transition-all hover:border-[#8b949e] hover:bg-[#30363d]"
          >
            <Github className="h-4 w-4" />
            Ver Repositorio
          </a>
        )}
      </motion.div>
    </div>
  )
}

function ExperienceContent({ experience }: { experience: any }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Timeline style header */}
      <div className="flex items-start gap-4">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#238636] to-[#3fb950] shadow-lg shadow-[#238636]/20"
          >
            <Briefcase className="h-6 w-6 text-white" />
          </motion.div>
          {/* Timeline line */}
          <div className="absolute left-1/2 top-14 h-16 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#238636] to-transparent" />
        </div>
        <div className="flex-1 pt-1">
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-bold text-[#e6edf3]"
          >
            {experience.role}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#58a6ff]"
          >
            {experience.company}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 flex items-center gap-2 text-sm text-[#8b949e]"
          >
            <Calendar className="h-4 w-4" />
            <span>{experience.period}</span>
            {experience.current && (
              <span className="ml-2 flex items-center gap-1 rounded-full bg-[#238636]/20 px-2 py-0.5 text-xs text-[#3fb950]">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#3fb950]" />
                Actual
              </span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Description card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-lg border border-[#30363d] bg-[#161b22] p-5"
      >
        <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-[#8b949e]">
          <Code2 className="h-4 w-4" />
          Responsabilidades y Logros
        </h3>
        <p className="whitespace-pre-wrap leading-relaxed text-[#e6edf3]">
          {experience.description}
        </p>
      </motion.div>

      {/* Technologies */}
      {experience.technologies && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="mb-3 flex items-center gap-2 text-sm font-medium text-[#8b949e]">
            <Layers className="h-4 w-4" />
            Tecnologías Utilizadas
          </h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string, index: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="rounded-md border border-[#30363d] bg-[#21262d] px-3 py-1.5 text-sm text-[#e6edf3]"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

function ContactContent({ content }: { content: any }) {
  const { copied, copy } = useCopyToClipboard()
  
  // Determinar el icono basado en el tipo de contacto
  const getIcon = () => {
    switch(content.contactType) {
      case 'email': return <Mail className="h-8 w-8" />
      case 'linkedin': return <Linkedin className="h-8 w-8" />
      case 'github': return <Github className="h-8 w-8" />
      default: return <ExternalLink className="h-8 w-8" />
    }
  }
  
  const getColor = () => {
    switch(content.contactType) {
      case 'email': return 'from-[#f85149] to-[#f0883e]'
      case 'linkedin': return 'from-[#0a66c2] to-[#0077b5]'
      case 'github': return 'from-[#8b949e] to-[#6e7681]'
      default: return 'from-[#58a6ff] to-[#388bfd]'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-12 text-center"
    >
      {/* Animated icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${getColor()} text-white shadow-xl`}
      >
        {getIcon()}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-[#e6edf3]"
      >
        {content.title}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-2 max-w-md text-[#8b949e]"
      >
        {content.description}
      </motion.p>

      {/* Copyable contact info */}
      {content.contactType === 'email' && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => copy(PERSONAL_INFO.email)}
          className="mt-4 flex items-center gap-2 rounded-lg border border-[#30363d] bg-[#21262d] px-4 py-2 text-sm text-[#8b949e] transition-colors hover:border-[#58a6ff] hover:text-[#e6edf3]"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-[#238636]" />
              <span className="text-[#238636]">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>{PERSONAL_INFO.email}</span>
            </>
          )}
        </motion.button>
      )}

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        href={content.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${getColor()} px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl`}
      >
        {content.contactType === "email" ? (
          <>
            <Mail className="h-5 w-5" />
            Enviar Email
          </>
        ) : (
          <>
            <ExternalLink className="h-5 w-5" />
            Visitar Perfil
          </>
        )}
        <ArrowRight className="h-5 w-5" />
      </motion.a>
    </motion.div>
  )
}

function ResumeContent({ content }: { content: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center space-y-6 py-12 text-center"
    >
      {/* PDF Icon with animation */}
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <div className="flex h-24 w-20 flex-col items-center justify-center rounded-lg border-2 border-[#f85149] bg-[#161b22] shadow-lg shadow-[#f85149]/20">
          <span className="text-3xl">📄</span>
          <span className="mt-1 text-xs font-bold text-[#f85149]">PDF</span>
        </div>
        {/* Download badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#238636] text-white shadow-lg"
        >
          <Download className="h-4 w-4" />
        </motion.div>
      </motion.div>

      <div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold text-[#e6edf3]"
        >
          {content.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-[#8b949e]"
        >
          {content.description}
        </motion.p>
      </div>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        href={content.link}
        download
        className="group inline-flex items-center gap-2 rounded-lg bg-[#238636] px-6 py-3 text-lg font-medium text-white shadow-lg transition-all hover:bg-[#2ea043] hover:shadow-xl hover:shadow-[#238636]/30"
      >
        <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        Descargar CV
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xs text-[#484f58]"
      >
        Formato PDF • Última actualización: 2024
      </motion.p>
    </motion.div>
  )
}

function MarkdownContent({ content }: { content: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      {content.title && (
        <h1 className="text-2xl font-bold text-[#e6edf3]">{content.title}</h1>
      )}
      <div className="rounded-lg border border-[#30363d] bg-[#161b22] p-5">
        <p className="whitespace-pre-wrap leading-relaxed text-[#e6edf3]">
          {content.description}
        </p>
      </div>
    </motion.div>
  )
}
