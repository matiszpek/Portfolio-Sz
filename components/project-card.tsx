"use client"

import { motion } from "framer-motion"
import { X, ExternalLink } from "lucide-react"
import Image from "next/image"
import type { ContentData } from "@/types/portfolio"

interface ProjectCardProps {
  content: ContentData & { color: string }
  onClose: () => void
}

export function ProjectCard({ content, onClose }: ProjectCardProps) {
  return (
    <motion.div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900" layoutId={content.title}>
      <div className="relative h-80 w-full overflow-hidden">
        {content.image && (
          <>
            <Image src={content.image || "/placeholder.svg"} alt={content.title} fill className="object-cover" />
            {/* Color overlay with transparency */}
            <div
              className="absolute inset-0 mix-blend-multiply opacity-40"
              style={{ backgroundColor: content.color }}
            />
            {/* Gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900" />
          </>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end gap-4">
          {content.logo && (
            <div className="w-20 h-20 bg-white rounded-xl shadow-xl overflow-hidden flex-shrink-0 border-4 border-white/20">
              <Image
                src={content.logo || "/placeholder.svg"}
                alt={`${content.title} logo`}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          )}

          <div className="flex-1 pb-1">
            <h2 className="text-3xl font-bold text-white drop-shadow-2xl">{content.title}</h2>
            {content.description && <p className="text-white/90 mt-1 text-sm drop-shadow-lg">{content.description}</p>}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="self-start p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors backdrop-blur-sm"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="bg-slate-800 p-6 space-y-4">
        {/* Project description text */}
        {content.text && <p className="text-slate-200 text-sm leading-relaxed">{content.text}</p>}

        {/* Technologies used */}
        {content.technologies && content.technologies.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {content.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* External links */}
        {content.links && content.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {content.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-sm transition-colors"
              >
                {link.label}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        )}

        {content.tags && content.tags.length > 0 && (
          <div className="pt-4 border-t border-slate-700/50">
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg text-xs font-bold shadow-md"
                  style={{
                    backgroundColor: content.color,
                    color: "white",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
