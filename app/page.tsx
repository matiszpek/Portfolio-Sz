"use client"

import { useState, useCallback } from "react"
import { Header } from "@/components/layout/Header"
import { Sidebar } from "@/components/layout/Sidebar"
import { ContentPanel } from "@/components/layout/ContentPanel"
import { Footer } from "@/components/layout/Footer"
import { portfolioTree, TreeNode } from "@/lib/portfolio-data"

// Helper para encontrar un nodo por ID
function findNodeById(tree: TreeNode, id: string): TreeNode | null {
  if (tree.id === id) return tree
  if (tree.children) {
    for (const child of tree.children) {
      const found = findNodeById(child, id)
      if (found) return found
    }
  }
  return null
}

export default function PortfolioPage() {
  // Estado para carpetas expandidas
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["root"]) // Empezar con root expandido
  )
  
  // Estado para archivo seleccionado
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [currentPath, setCurrentPath] = useState<string[]>([])
  
  // Estado para mostrar/ocultar sidebar en mobile
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Toggle folder expansion
  const handleToggleFolder = useCallback((id: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }, [])

  // Select file
  const handleSelectFile = useCallback((id: string, path: string[]) => {
    setSelectedFile(id)
    setCurrentPath(path)
  }, [])

  // Obtener el nodo seleccionado
  const selectedNode = selectedFile 
    ? findNodeById(portfolioTree, selectedFile) 
    : null

  return (
    <div className="flex h-screen flex-col bg-[#0d1117]">
      {/* Header */}
      <Header currentPath={currentPath} />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - File Tree */}
        <div
          className={`${
            sidebarOpen ? "w-64 lg:w-72" : "w-0"
          } flex-shrink-0 overflow-hidden transition-all duration-300`}
        >
          <Sidebar
            tree={portfolioTree}
            expandedFolders={expandedFolders}
            selectedFile={selectedFile}
            onToggleFolder={handleToggleFolder}
            onSelectFile={handleSelectFile}
          />
        </div>

        {/* Toggle Sidebar Button (mobile) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute bottom-20 left-2 z-50 rounded-md bg-[#21262d] p-2 text-[#8b949e] shadow-lg transition-colors hover:bg-[#30363d] hover:text-[#e6edf3] md:hidden"
        >
          {sidebarOpen ? "◀" : "▶"}
        </button>

        {/* Content Panel */}
        <main className="flex-1 overflow-hidden bg-[#0d1117]">
          <ContentPanel 
            selectedNode={selectedNode} 
            currentPath={currentPath}
          />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
