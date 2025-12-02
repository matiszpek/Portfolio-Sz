"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import type { FolderData, ChildFolder } from "@/types/portfolio"

interface TreeNodeProps {
  folder: FolderData | ChildFolder
  isExpanded: boolean
  onToggle: (id: string) => void
  expandedNodes: Set<string>
  level?: number
  delay?: number
  parentColor?: string
}

export function TreeNode({
  folder,
  isExpanded,
  onToggle,
  expandedNodes,
  level = 0,
  delay = 0,
  parentColor,
}: TreeNodeProps) {
  const color = "color" in folder ? folder.color : parentColor || "#888"
  const gradient =
    "gradient" in folder ? folder.gradient : `linear-gradient(135deg, ${color}CC 0%, ${color} 50%, ${color}DD 100%)`
  const hasChildren = folder.children && folder.children.length > 0
  const isProject = "isProject" in folder && folder.isProject
  const nodeType = "type" in folder ? folder.type : null

  const handleClick = () => {
    onToggle(folder.id)
  }

  const getFolderDimensions = () => {
    if (level === 0) return { width: 180, height: 140 }
    if (isProject) return { width: 320, height: 240 }
    return { width: 160, height: 120 }
  }

  const size = getFolderDimensions()

  if (isProject && folder.content) {
    return (
      <div className="flex items-center gap-6">
        <motion.button
          onClick={handleClick}
          className="relative group cursor-pointer"
          style={{ width: size.width, height: size.height }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay, duration: 0.4 }}
        >
          {/* Folder tab */}
          <div
            className="absolute top-0 left-0 w-24 h-10 rounded-t-xl shadow-lg z-10"
            style={{
              background: gradient,
              clipPath: "polygon(0 0, 88% 0, 100% 100%, 0% 100%)",
            }}
          />

          {/* Main folder body with project content */}
          <div
            className="absolute top-8 left-0 w-full h-[calc(100%-32px)] rounded-xl shadow-2xl overflow-hidden"
            style={{
              background: gradient,
            }}
          >
            {/* Project image with color overlay */}
            {folder.content.image && (
              <div className="relative w-full h-full">
                <Image
                  src={folder.content.image || "/placeholder.svg"}
                  alt={folder.content.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundColor: color }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              </div>
            )}

            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-3">
              {/* Logo */}
              {folder.content.logo && (
                <div className="self-start">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-white/30">
                    <Image
                      src={folder.content.logo || "/placeholder.svg"}
                      alt="logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Title and info at bottom */}
              <div className="space-y-2">
                <h3 className="text-white font-bold text-sm drop-shadow-lg line-clamp-2">{folder.content.title}</h3>

                {/* Info section */}
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-2 space-y-1.5">
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {folder.content.description || folder.content.text}
                  </p>

                  {/* Tags */}
                  {folder.content.tags && folder.content.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {folder.content.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold text-white"
                          style={{ backgroundColor: color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Expand indicator for projects with children */}
            {hasChildren && (
              <motion.div
                className="absolute top-2 right-2 bg-white/30 rounded-full p-1 backdrop-blur-sm z-20"
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-3 h-3 text-white" />
              </motion.div>
            )}
          </div>

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: `0 0 30px ${color}60`,
            }}
          />
        </motion.button>

        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20, scaleX: 0 }}
              animate={{ opacity: 1, x: 0, scaleX: 1 }}
              exit={{ opacity: 0, x: -20, scaleX: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-6 origin-left"
            >
              {/* Connecting line */}
              <div className="w-12 h-0.5" style={{ backgroundColor: `${color}60` }} />

              <div className="flex flex-col gap-4">
                {folder.children?.map((child, index) => (
                  <div key={child.id} className="flex items-center gap-4">
                    <div className="w-8 h-0.5" style={{ backgroundColor: `${color}40` }} />
                    <TreeNode
                      folder={child}
                      isExpanded={expandedNodes.has(child.id)}
                      onToggle={onToggle}
                      expandedNodes={expandedNodes}
                      level={level + 1}
                      delay={delay + index * 0.05}
                      parentColor={color}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-6">
      <motion.button
        onClick={handleClick}
        className="relative group"
        style={{ width: size.width, height: size.height }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay, duration: 0.4 }}
      >
        {/* Folder tab */}
        <div
          className="absolute top-0 left-0 w-16 h-7 rounded-t-lg shadow-md"
          style={{
            background: gradient,
            clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
          }}
        />

        {/* Main folder body */}
        <div
          className="absolute top-5 left-0 w-full h-[calc(100%-20px)] rounded-lg shadow-2xl overflow-hidden"
          style={{ background: gradient }}
        >
          {/* Glossy effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20" />
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Label */}
        <div className="absolute inset-0 flex items-center justify-center pt-2">
          <span className="text-white font-semibold drop-shadow-lg text-center px-2 text-sm z-10">{folder.name}</span>
        </div>

        {/* Expand indicator */}
        {hasChildren && (
          <motion.div
            className="absolute bottom-2 right-2 bg-white/30 rounded-full p-1 backdrop-blur-sm"
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="w-3 h-3 text-white" />
          </motion.div>
        )}

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: `0 0 25px ${color}80` }}
        />
      </motion.button>

      <AnimatePresence>
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: -20, scaleX: 0 }}
            animate={{ opacity: 1, x: 0, scaleX: 1 }}
            exit={{ opacity: 0, x: -20, scaleX: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-6 origin-left"
          >
            {/* Connecting line */}
            <div className="w-12 h-0.5" style={{ backgroundColor: `${color}60` }} />

            <div className="flex flex-col gap-4">
              {folder.children?.map((child, index) => (
                <div key={child.id} className="flex items-center gap-4">
                  <div className="w-8 h-0.5" style={{ backgroundColor: `${color}40` }} />
                  <TreeNode
                    folder={child}
                    isExpanded={expandedNodes.has(child.id)}
                    onToggle={onToggle}
                    expandedNodes={expandedNodes}
                    level={level + 1}
                    delay={delay + index * 0.05}
                    parentColor={color}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
