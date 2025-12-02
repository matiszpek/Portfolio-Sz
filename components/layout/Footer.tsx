import { Github, Heart } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/portfolio-data"

export function Footer() {
  return (
    <footer className="border-t border-[#30363d] bg-[#0d1117] px-4 py-3">
      <div className="flex flex-col items-center justify-between gap-2 text-xs text-[#8b949e] sm:flex-row">
        <div className="flex items-center gap-1">
          <span>© {new Date().getFullYear()}</span>
          <span>{PERSONAL_INFO.name}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-500" /> using Next.js
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-colors hover:text-[#e6edf3]"
          >
            <Github className="h-3 w-3" />
            <span>Source</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
