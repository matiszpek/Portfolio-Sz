"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronDown, Folder, FolderOpen, Search, MoreHorizontal } from "lucide-react"
import { TreeNode } from "@/lib/portfolio-data"
import { FileIcon, getExtensionColor } from "@/components/ui/FileIcon"

interface SidebarProps {
  tree: TreeNode
  expandedFolders: Set<string>
  selectedFile: string | null
  onToggleFolder: (id: string) => void
  onSelectFile: (id: string, path: string[]) => void
}

export function Sidebar({
  tree,
  expandedFolders,
  selectedFile,
  onToggleFolder,
  onSelectFile,
}: SidebarProps) {
  return (
    <aside className="flex h-full w-full flex-col border-r border-[#30363d] bg-[#0d1117]">
      {/* Header del sidebar */}
      <div className="flex h-10 items-center justify-between border-b border-[#30363d] px-4">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#8b949e]">
          Explorer
        </span>
        <button className="rounded p-1 text-[#8b949e] transition-colors hover:bg-[#21262d] hover:text-[#e6edf3]">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Árbol de archivos */}
      <div className="flex-1 overflow-y-auto scrollbar-thin p-2">
        <TreeNodeComponent
          node={tree}
          depth={0}
          path={[]}
          expandedFolders={expandedFolders}
          selectedFile={selectedFile}
          onToggleFolder={onToggleFolder}
          onSelectFile={onSelectFile}
        />
      </div>
      
      {/* Footer con stats */}
      <div className="border-t border-[#30363d] px-4 py-2">
        <div className="flex items-center justify-between text-xs text-[#484f58]">
          <span>Portfolio</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </aside>
  )
}

interface TreeNodeComponentProps {
  node: TreeNode
  depth: number
  path: string[]
  expandedFolders: Set<string>
  selectedFile: string | null
  onToggleFolder: (id: string) => void
  onSelectFile: (id: string, path: string[]) => void
}

function TreeNodeComponent({
  node,
  depth,
  path,
  expandedFolders,
  selectedFile,
  onToggleFolder,
  onSelectFile,
}: TreeNodeComponentProps) {
  const isExpanded = expandedFolders.has(node.id)
  const isSelected = selectedFile === node.id
  const isFolder = node.type === "folder"
  const currentPath = [...path, node.name]

  const handleClick = () => {
    if (isFolder) {
      onToggleFolder(node.id)
    } else {
      onSelectFile(node.id, currentPath)
    }
  }

  return (
    <div>
      <motion.button
        onClick={handleClick}
        className={`group relative flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm transition-all ${
          isSelected
            ? "bg-[#1f6feb33] text-[#e6edf3]"
            : "text-[#e6edf3] hover:bg-[#21262d]"
        }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        whileHover={{ x: 2 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Selection indicator */}
        {isSelected && (
          <motion.div
            layoutId="selection-indicator"
            className="absolute left-0 top-0 h-full w-0.5 rounded-r bg-[#58a6ff]"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        
        {/* Chevron para folders */}
        {isFolder ? (
          <motion.span 
            className="flex h-4 w-4 items-center justify-center text-[#8b949e]"
            animate={{ rotate: isExpanded ? 0 : -90 }}
            transition={{ duration: 0.15 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        ) : (
          <span className="w-4" /> /* Spacer for alignment */
        )}

        {/* Icono */}
        <motion.span 
          className="flex h-4 w-4 items-center justify-center"
          animate={{ scale: isSelected ? 1.1 : 1 }}
          transition={{ duration: 0.15 }}
        >
          {isFolder ? (
            isExpanded ? (
              <FolderOpen className="h-4 w-4 text-[#54aeff]" />
            ) : (
              <Folder className="h-4 w-4 text-[#54aeff]" />
            )
          ) : (
            <FileIcon extension={node.extension} size={16} />
          )}
        </motion.span>

        {/* Nombre */}
        <span className="flex-1 truncate">{node.name}</span>

        {/* Badge de cantidad de items para folders */}
        {isFolder && node.children && (
          <span className="rounded-full bg-[#21262d] px-1.5 text-xs text-[#8b949e] opacity-0 transition-opacity group-hover:opacity-100">
            {node.children.length}
          </span>
        )}
      </motion.button>

      {/* Hijos con AnimatePresence para mejor animación */}
      <AnimatePresence initial={false}>
        {isFolder && isExpanded && node.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.2, ease: "easeOut" },
              opacity: { duration: 0.15 }
            }}
            className="relative overflow-hidden"
          >
            {/* Línea vertical de conexión con gradiente */}
            <motion.div 
              className="absolute top-0 bottom-2 w-px"
              style={{ 
                left: `${depth * 16 + 22}px`,
                background: "linear-gradient(to bottom, #30363d, transparent)"
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.2 }}
            />
            
            {node.children.map((child, index) => (
              <motion.div
                key={child.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03, duration: 0.15 }}
              >
                <TreeNodeComponent
                  node={child}
                  depth={depth + 1}
                  path={currentPath}
                  expandedFolders={expandedFolders}
                  selectedFile={selectedFile}
                  onToggleFolder={onToggleFolder}
                  onSelectFile={onSelectFile}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
