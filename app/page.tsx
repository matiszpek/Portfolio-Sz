"use client"

import { useState, useRef, useEffect } from "react"
import { TreeNode } from "@/components/tree-node"
import type { FolderData } from "@/types/portfolio"

const portfolioData: FolderData[] = [
  {
    id: "myself",
    name: "Myself",
    color: "#FFD700",
    gradient: "linear-gradient(135deg, #FFF9C4 0%, #FFD700 50%, #FFA000 100%)",
    icon: "📁",
    children: [
      {
        id: "bio",
        name: "Bio",
        isProject: true,
        content: {
          title: "About Me",
          description: "Hi! I'm a passionate developer focused on creating innovative digital experiences.",
          text: "I specialize in building modern web applications with cutting-edge technologies. My journey in tech started 5 years ago, and I've been constantly learning and evolving ever since.",
          image: "/developer-workspace.jpg",
          logo: "/diverse-user-avatars.png",
          tags: ["Creative", "Problem Solver", "Team Player"],
        },
        children: [
          {
            id: "bio-skills",
            name: "Key Skills",
            type: "info",
            content: {
              title: "Core Competencies",
              text: "Full-stack development, UI/UX design, Project management",
              tags: ["Leadership", "Communication", "Innovation"],
            },
          },
        ],
      },
      {
        id: "education",
        name: "Education",
        isProject: true,
        content: {
          title: "Education",
          description: "My academic background and continuous learning journey.",
          text: "Computer Science Degree - University of Technology (2018-2022). Specialized in Software Engineering and AI.",
          image: "/university-graduation.jpg",
          logo: "/graduation-cap.png",
          tags: ["Computer Science", "AI", "Software Engineering"],
        },
      },
      {
        id: "interests",
        name: "Interests",
        isProject: true,
        content: {
          title: "Interests & Hobbies",
          description: "What I love doing outside of coding.",
          text: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source, photography and digital art, playing guitar.",
          image: "/creative-hobbies.png",
          logo: "/heart-icon.png",
          tags: ["Music", "Photography", "Open Source"],
        },
      },
    ],
  },
  {
    id: "abilities",
    name: "Abilities",
    color: "#4FC3F7",
    gradient: "linear-gradient(135deg, #B3E5FC 0%, #4FC3F7 50%, #0288D1 100%)",
    icon: "📁",
    children: [
      {
        id: "frontend",
        name: "Frontend",
        isProject: true,
        content: {
          title: "Frontend Development",
          description: "Building beautiful and performant user interfaces.",
          text: "Expert in modern frontend technologies and frameworks. Creating responsive, accessible, and performant web applications.",
          technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
          image: "/modern-web-interface.png",
          logo: "/react-logo.png",
          tags: ["React", "Next.js", "UI/UX"],
        },
        children: [
          {
            id: "frontend-tools",
            name: "Tools & Frameworks",
            type: "tools",
            content: {
              title: "Frontend Tools",
              tools: [
                { name: "React", logo: "/react-logo.png" },
                { name: "Next.js", logo: "/nextjs-logo.png" },
                { name: "TypeScript", logo: "/typescript-logo.png" },
                { name: "Tailwind", logo: "/tailwind-logo.png" },
              ],
            },
          },
        ],
      },
      {
        id: "backend",
        name: "Backend",
        isProject: true,
        content: {
          title: "Backend Development",
          description: "Robust server-side solutions and APIs.",
          text: "Building scalable backend systems with Node.js and Python. Experience with databases, authentication, and cloud deployment.",
          technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
          image: "/server-database.jpg",
          logo: "/database-icon.png",
          tags: ["APIs", "Databases", "Cloud"],
        },
      },
      {
        id: "ai",
        name: "AI & ML",
        isProject: true,
        content: {
          title: "Artificial Intelligence",
          description: "Implementing intelligent solutions with AI.",
          text: "Building AI-powered applications using modern LLMs and machine learning frameworks.",
          technologies: ["OpenAI", "TensorFlow", "Vercel AI SDK"],
          image: "/artificial-intelligence-network.png",
          logo: "/ai-brain.png",
          tags: ["AI", "Machine Learning", "NLP"],
        },
      },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    color: "#66BB6A",
    gradient: "linear-gradient(135deg, #C8E6C9 0%, #66BB6A 50%, #2E7D32 100%)",
    icon: "📁",
    children: [
      {
        id: "project1",
        name: "E-Commerce Platform",
        isProject: true,
        content: {
          title: "Modern E-Commerce Platform",
          description: "A full-stack e-commerce solution with AI recommendations.",
          text: "Built a complete e-commerce platform with product management, cart functionality, payment integration, and AI-powered product recommendations.",
          technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
          image: "/online-shopping.jpg",
          logo: "/shopping-cart.png",
          tags: ["Full-Stack", "E-Commerce", "AI"],
        },
        children: [
          {
            id: "project1-tech",
            name: "Technologies Used",
            type: "tools",
            content: {
              title: "Tech Stack",
              tools: [
                { name: "Next.js", logo: "/nextjs-logo.png" },
                { name: "TypeScript", logo: "/typescript-logo.png" },
                { name: "Stripe", logo: "/stripe-logo.png" },
                { name: "PostgreSQL", logo: "/postgresql-logo.png" },
              ],
            },
          },
          {
            id: "project1-screenshots",
            name: "Screenshots",
            type: "gallery",
            content: {
              title: "Project Gallery",
              images: ["/online-shopping.jpg", "/checkout-scene.png"],
            },
          },
        ],
      },
      {
        id: "project2",
        name: "AI Chat Assistant",
        isProject: true,
        content: {
          title: "AI-Powered Chat Assistant",
          description: "Intelligent chatbot with natural language understanding.",
          text: "Developed an AI chatbot that helps users with customer support, using advanced NLP and context awareness.",
          technologies: ["React", "OpenAI", "Vercel AI SDK"],
          image: "/chatbot-conversation.jpg",
          logo: "/simple-chat-bubble.png",
          tags: ["AI", "NLP", "Chatbot"],
        },
        children: [
          {
            id: "project2-features",
            name: "Key Features",
            type: "info",
            content: {
              title: "Features",
              text: "Natural language processing, Context-aware responses, Multi-language support, Sentiment analysis",
              tags: ["NLP", "Context-Aware", "Multi-Language"],
            },
          },
        ],
      },
      {
        id: "project3",
        name: "3D Portfolio",
        isProject: true,
        content: {
          title: "3D Interactive Portfolio",
          description: "An immersive 3D portfolio experience.",
          text: "Created an interactive 3D portfolio using WebGL and Three.js, featuring smooth animations and engaging user interactions.",
          technologies: ["React Three Fiber", "Three.js", "WebGL"],
          image: "/3d-graphics.jpg",
          logo: "/3d-cube.png",
          tags: ["3D", "WebGL", "Interactive"],
        },
      },
    ],
  },
  {
    id: "contact",
    name: "Contact",
    color: "#EF5350",
    gradient: "linear-gradient(135deg, #FFCDD2 0%, #EF5350 50%, #C62828 100%)",
    icon: "📁",
    children: [
      {
        id: "email",
        name: "Email",
        isProject: true,
        content: {
          title: "Get in Touch",
          description: "Let's connect and create something amazing together.",
          text: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
          links: [{ label: "your.email@example.com", url: "mailto:your.email@example.com" }],
          image: "/email-inbox.png",
          logo: "/simple-envelope.png",
          tags: ["Available for work"],
        },
      },
      {
        id: "social",
        name: "Social Media",
        isProject: true,
        content: {
          title: "Connect with Me",
          description: "Find me on various platforms.",
          text: "Follow me on social media to stay updated with my latest projects and thoughts.",
          links: [
            { label: "GitHub", url: "https://github.com", icon: "github" },
            { label: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
            { label: "Twitter", url: "https://twitter.com", icon: "twitter" },
          ],
          image: "/interconnected-social-media.png",
          logo: "/network-icon.png",
          tags: ["GitHub", "LinkedIn", "Twitter"],
        },
      },
    ],
  },
]

export default function Page() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const updateView = () => {
      const container = containerRef.current!
      const content = contentRef.current!

      const containerRect = container.getBoundingClientRect()
      const contentRect = content.getBoundingClientRect()

      const padding = 80
      const availableWidth = containerRect.width - padding * 2
      const availableHeight = containerRect.height - padding * 2

      const scaleX = availableWidth / contentRect.width
      const scaleY = availableHeight / contentRect.height

      const newScale = Math.min(1, scaleX, scaleY)

      const scaledWidth = contentRect.width * newScale
      const scaledHeight = contentRect.height * newScale

      const centerX = (containerRect.width - scaledWidth) / 2
      const centerY = (containerRect.height - scaledHeight) / 2

      setScale(newScale)
      setTranslate({ x: centerX, y: centerY })
    }

    const timeoutId = setTimeout(updateView, 100)
    return () => clearTimeout(timeoutId)
  }, [expandedNodes])

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId)
      } else {
        newSet.add(nodeId)
      }
      return newSet
    })
  }

  const resetView = () => {
    setExpandedNodes(new Set())
    setScale(1)
    setTranslate({ x: 0, y: 0 })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Matias Szpekter</h1>
          <p className="text-sm text-slate-400 mt-1">Developer | AI | 3D | Innovation</p>
        </div>
      </header>

      <main ref={containerRef} className="relative h-[calc(100vh-88px)] overflow-hidden">
        <div
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transformOrigin: "top left",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div ref={contentRef} className="inline-flex flex-col gap-4 p-8">
            {portfolioData.map((folder, index) => (
              <TreeNode
                key={folder.id}
                folder={folder}
                isExpanded={expandedNodes.has(folder.id)}
                onToggle={toggleNode}
                expandedNodes={expandedNodes}
                level={0}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>

        {/* Zoom controls */}
        <div className="absolute bottom-6 right-6 flex gap-2 z-50">
          <button
            onClick={() => setScale((s) => Math.min(2, s + 0.1))}
            className="w-12 h-12 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg transition-colors text-xl font-bold backdrop-blur-sm shadow-xl"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={() => setScale((s) => Math.max(0.2, s - 0.1))}
            className="w-12 h-12 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg transition-colors text-xl font-bold backdrop-blur-sm shadow-xl"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            onClick={resetView}
            className="px-4 h-12 bg-slate-800/90 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium backdrop-blur-sm shadow-xl"
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  )
}
