"use client"

import { 
  FileText, 
  FileCode, 
  FileJson, 
  FileType,
  Link,
  Database,
  Braces,
  Hash,
  File,
  type LucideIcon
} from "lucide-react"

interface FileIconProps {
  extension?: string
  className?: string
  size?: number
}

// Mapeo de extensiones a iconos y colores
const iconConfig: Record<string, { Icon: LucideIcon; color: string }> = {
  md: { Icon: FileText, color: "#519aba" },
  tsx: { Icon: FileCode, color: "#61dafb" },
  ts: { Icon: FileCode, color: "#3178c6" },
  js: { Icon: FileCode, color: "#f7df1e" },
  jsx: { Icon: FileCode, color: "#61dafb" },
  py: { Icon: FileCode, color: "#3776ab" },
  json: { Icon: FileJson, color: "#cbcb41" },
  css: { Icon: Braces, color: "#264de4" },
  scss: { Icon: Braces, color: "#cc6699" },
  html: { Icon: FileType, color: "#e34f26" },
  sql: { Icon: Database, color: "#f29111" },
  txt: { Icon: FileText, color: "#8b949e" },
  url: { Icon: Link, color: "#58a6ff" },
  pdf: { Icon: FileText, color: "#ff5252" },
  env: { Icon: Hash, color: "#ecd53f" },
}

export function FileIcon({ extension, className, size = 16 }: FileIconProps) {
  const config = iconConfig[extension || ""] || { Icon: File, color: "#8b949e" }
  const { Icon, color } = config

  return (
    <Icon 
      className={className} 
      style={{ color }} 
      size={size}
    />
  )
}

export function getExtensionColor(extension?: string): string {
  return iconConfig[extension || ""]?.color || "#8b949e"
}
