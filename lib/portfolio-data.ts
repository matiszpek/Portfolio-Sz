// ============================================
// 📁 PORTFOLIO DATA - ESTRUCTURA DEL ÁRBOL
// ============================================
// Modifica este archivo para personalizar tu portfolio
// ============================================

export interface TreeNode {
  id: string
  name: string
  type: "folder" | "file"
  extension?: string
  children?: TreeNode[]
  content?: ContentData
}

export interface ContentData {
  // Para README/About
  title?: string
  subtitle?: string
  description?: string
  avatar?: string
  
  // Para Skills
  skills?: Skill[]
  
  // Para Projects
  project?: Project
  
  // Para Experience
  experience?: Experience
  
  // Para Contact
  contactType?: "email" | "social" | "form"
  link?: string
  icon?: string
  
  // Para archivos de código
  code?: string
  language?: string
  
  // Tags generales
  tags?: string[]
}

export interface Skill {
  name: string
  level: number // 0-100
  icon?: string
}

export interface Project {
  title: string
  description: string
  longDescription?: string
  image?: string
  technologies: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  technologies?: string[]
}

// ============================================
// 🎯 TU INFORMACIÓN PERSONAL - EDITA AQUÍ
// ============================================

export const PERSONAL_INFO = {
  name: "Tu Nombre Aquí",           // 👈 Cambia esto
  title: "Full Stack Developer",     // 👈 Cambia esto
  subtitle: "AI Enthusiast | 3D | Innovation",
  email: "tu.email@ejemplo.com",     // 👈 Cambia esto
  github: "https://github.com/tuusuario",      // 👈 Cambia esto
  linkedin: "https://linkedin.com/in/tuusuario", // 👈 Cambia esto
  twitter: "https://twitter.com/tuusuario",    // 👈 Cambia esto
  avatar: "/avatar.png",             // 👈 Agrega tu foto en /public
  resume: "/resume.pdf",             // 👈 Agrega tu CV en /public
  location: "Buenos Aires, Argentina", // 👈 Cambia esto
  available: true,                   // 👈 Disponible para trabajar?
}

// ============================================
// 🌳 ESTRUCTURA DEL ÁRBOL - PORTFOLIO
// ============================================

export const portfolioTree: TreeNode = {
  id: "root",
  name: "portfolio",
  type: "folder",
  children: [
    // 📄 README.md - Hero/Intro
    {
      id: "readme",
      name: "README.md",
      type: "file",
      extension: "md",
      content: {
        title: PERSONAL_INFO.name,
        subtitle: PERSONAL_INFO.title,
        description: `
¡Hola! 👋 Soy un desarrollador apasionado por crear experiencias digitales innovadoras.

Me especializo en desarrollo web moderno, inteligencia artificial y experiencias 3D interactivas.

📍 ${PERSONAL_INFO.location}
${PERSONAL_INFO.available ? "🟢 Disponible para proyectos" : "🔴 No disponible actualmente"}
        `.trim(),
        avatar: PERSONAL_INFO.avatar,
        tags: ["React", "Next.js", "TypeScript", "AI", "3D"],
      },
    },

    // 📁 about/
    {
      id: "about",
      name: "about",
      type: "folder",
      children: [
        {
          id: "bio",
          name: "bio.md",
          type: "file",
          extension: "md",
          content: {
            title: "Sobre Mí",
            description: `
## Mi Historia

Soy un desarrollador con más de X años de experiencia en el desarrollo de aplicaciones web y móviles.

Mi viaje en la tecnología comenzó cuando... [TU HISTORIA AQUÍ]

## Lo que me motiva

- 🚀 Resolver problemas complejos con soluciones elegantes
- 🎨 Crear interfaces de usuario intuitivas y atractivas
- 🤖 Explorar las posibilidades de la inteligencia artificial
- 🌐 Contribuir a proyectos open source

## Filosofía de trabajo

Creo en el código limpio, las buenas prácticas y el aprendizaje continuo.
            `.trim(),
          },
        },
        {
          id: "education",
          name: "education.md",
          type: "file",
          extension: "md",
          content: {
            title: "Educación",
            description: `
## 🎓 Formación Académica

### Universidad / Instituto
**Carrera o Título** | 2020 - 2024
- Descripción o logros relevantes
- Proyectos destacados

### Certificaciones
- Certificación 1 - Plataforma (Año)
- Certificación 2 - Plataforma (Año)
- Certificación 3 - Plataforma (Año)

### Cursos Destacados
- Curso de X en Plataforma
- Curso de Y en Plataforma
            `.trim(),
          },
        },
        {
          id: "interests",
          name: "interests.md",
          type: "file",
          extension: "md",
          content: {
            title: "Intereses",
            description: `
## 🎯 Más allá del código

Cuando no estoy programando, me gusta:

- 🎮 Gaming
- 📚 Lectura
- 🎵 Música
- 🏃 Deportes
- ✈️ Viajar

## 🔬 Áreas de interés técnico

- Inteligencia Artificial y ML
- Desarrollo 3D y WebGL
- Blockchain y Web3
- DevOps y Cloud
            `.trim(),
          },
        },
      ],
    },

    // 📁 skills/
    {
      id: "skills",
      name: "skills",
      type: "folder",
      children: [
        {
          id: "frontend",
          name: "frontend",
          type: "folder",
          children: [
            {
              id: "react-skill",
              name: "react.tsx",
              type: "file",
              extension: "tsx",
              content: {
                skills: [
                  { name: "React", level: 90, icon: "⚛️" },
                  { name: "Next.js", level: 85, icon: "▲" },
                  { name: "TypeScript", level: 85, icon: "📘" },
                  { name: "Tailwind CSS", level: 90, icon: "🎨" },
                  { name: "Framer Motion", level: 75, icon: "✨" },
                ],
                code: `// Frontend Skills
const skills = {
  frameworks: ["React", "Next.js", "Vue"],
  styling: ["Tailwind", "CSS Modules", "Styled Components"],
  state: ["Zustand", "Redux", "React Query"],
  testing: ["Jest", "Testing Library", "Cypress"]
};`,
                language: "typescript",
              },
            },
          ],
        },
        {
          id: "backend",
          name: "backend",
          type: "folder",
          children: [
            {
              id: "node-skill",
              name: "server.ts",
              type: "file",
              extension: "ts",
              content: {
                skills: [
                  { name: "Node.js", level: 85, icon: "🟢" },
                  { name: "Python", level: 75, icon: "🐍" },
                  { name: "PostgreSQL", level: 80, icon: "🐘" },
                  { name: "MongoDB", level: 75, icon: "🍃" },
                  { name: "GraphQL", level: 70, icon: "◈" },
                ],
                code: `// Backend Skills
const backend = {
  runtime: ["Node.js", "Deno", "Bun"],
  frameworks: ["Express", "Fastify", "NestJS"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  orm: ["Prisma", "Drizzle", "Mongoose"]
};`,
                language: "typescript",
              },
            },
          ],
        },
        {
          id: "ai-ml",
          name: "ai-ml",
          type: "folder",
          children: [
            {
              id: "ai-skill",
              name: "models.py",
              type: "file",
              extension: "py",
              content: {
                skills: [
                  { name: "OpenAI API", level: 80, icon: "🤖" },
                  { name: "LangChain", level: 70, icon: "🔗" },
                  { name: "TensorFlow", level: 60, icon: "🧠" },
                  { name: "Vercel AI SDK", level: 75, icon: "▲" },
                ],
                code: `# AI/ML Skills
ai_stack = {
    "llms": ["OpenAI", "Anthropic", "Llama"],
    "frameworks": ["LangChain", "LlamaIndex"],
    "ml": ["TensorFlow", "PyTorch", "Scikit-learn"],
    "tools": ["Jupyter", "Hugging Face", "Weights & Biases"]
}`,
                language: "python",
              },
            },
          ],
        },
        {
          id: "tools",
          name: "tools",
          type: "folder",
          children: [
            {
              id: "devtools",
              name: "devtools.json",
              type: "file",
              extension: "json",
              content: {
                skills: [
                  { name: "Git", level: 90, icon: "📦" },
                  { name: "Docker", level: 75, icon: "🐳" },
                  { name: "VS Code", level: 95, icon: "💻" },
                  { name: "Linux", level: 70, icon: "🐧" },
                  { name: "Figma", level: 65, icon: "🎨" },
                ],
                code: `{
  "tools": {
    "versionControl": ["Git", "GitHub", "GitLab"],
    "containerization": ["Docker", "Kubernetes"],
    "ci_cd": ["GitHub Actions", "Vercel", "Railway"],
    "editors": ["VS Code", "Neovim", "WebStorm"],
    "design": ["Figma", "Excalidraw"]
  }
}`,
                language: "json",
              },
            },
          ],
        },
      ],
    },

    // 📁 projects/
    {
      id: "projects",
      name: "projects",
      type: "folder",
      children: [
        {
          id: "project-1",
          name: "ecommerce-platform",
          type: "folder",
          children: [
            {
              id: "project-1-readme",
              name: "README.md",
              type: "file",
              extension: "md",
              content: {
                project: {
                  title: "E-Commerce Platform",
                  description: "Plataforma de comercio electrónico moderna con IA",
                  longDescription: `
## 🛒 E-Commerce Platform

Una plataforma de e-commerce completa con recomendaciones personalizadas mediante IA.

### Características
- 🛍️ Catálogo de productos dinámico
- 🤖 Recomendaciones con IA
- 💳 Integración con Stripe
- 📊 Dashboard de analytics
- 🔐 Autenticación segura

### Desafíos resueltos
- Optimización de búsqueda con Elasticsearch
- Sistema de cache distribuido
- Procesamiento de pagos seguro
                  `.trim(),
                  image: "/projects/ecommerce.png",
                  technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL"],
                  github: "https://github.com/user/ecommerce",
                  demo: "https://ecommerce-demo.vercel.app",
                  featured: true,
                },
              },
            },
          ],
        },
        {
          id: "project-2",
          name: "ai-chatbot",
          type: "folder",
          children: [
            {
              id: "project-2-readme",
              name: "README.md",
              type: "file",
              extension: "md",
              content: {
                project: {
                  title: "AI Chat Assistant",
                  description: "Chatbot inteligente con procesamiento de lenguaje natural",
                  longDescription: `
## 🤖 AI Chat Assistant

Un asistente de chat potenciado por IA con capacidades avanzadas de NLP.

### Características
- 💬 Conversación natural
- 🧠 Contexto persistente
- 🌍 Soporte multiidioma
- 📎 Procesamiento de documentos
- 🔊 Text-to-speech

### Tecnología
Construido con el SDK de Vercel AI y modelos de OpenAI.
                  `.trim(),
                  image: "/projects/chatbot.png",
                  technologies: ["React", "Vercel AI SDK", "OpenAI", "TailwindCSS"],
                  github: "https://github.com/user/ai-chatbot",
                  demo: "https://ai-chat-demo.vercel.app",
                  featured: true,
                },
              },
            },
          ],
        },
        {
          id: "project-3",
          name: "3d-portfolio",
          type: "folder",
          children: [
            {
              id: "project-3-readme",
              name: "README.md",
              type: "file",
              extension: "md",
              content: {
                project: {
                  title: "3D Interactive Portfolio",
                  description: "Portfolio con experiencia 3D inmersiva",
                  longDescription: `
## 🎮 3D Interactive Portfolio

Un portfolio creativo con navegación 3D interactiva.

### Características
- 🌐 Escena 3D interactiva
- ✨ Animaciones fluidas
- 🎯 Navegación intuitiva
- 📱 Responsive design
- ⚡ Optimizado para performance

### Stack
Three.js, React Three Fiber, GSAP
                  `.trim(),
                  image: "/projects/3d-portfolio.png",
                  technologies: ["Three.js", "React Three Fiber", "GSAP", "WebGL"],
                  github: "https://github.com/user/3d-portfolio",
                  featured: false,
                },
              },
            },
          ],
        },
      ],
    },

    // 📁 experience/
    {
      id: "experience",
      name: "experience",
      type: "folder",
      children: [
        {
          id: "exp-1",
          name: "2024-present.md",
          type: "file",
          extension: "md",
          content: {
            experience: {
              role: "Senior Full Stack Developer",
              company: "Empresa Tech",
              period: "2024 - Presente",
              description: `
Liderando el desarrollo de aplicaciones web modernas.

**Responsabilidades:**
- Arquitectura de aplicaciones escalables
- Mentoría a desarrolladores junior
- Implementación de CI/CD
- Code reviews y best practices
              `.trim(),
              technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
            },
          },
        },
        {
          id: "exp-2",
          name: "2022-2024.md",
          type: "file",
          extension: "md",
          content: {
            experience: {
              role: "Full Stack Developer",
              company: "Startup ABC",
              period: "2022 - 2024",
              description: `
Desarrollo de productos desde cero hasta producción.

**Logros:**
- Aumenté el performance en 40%
- Implementé sistema de autenticación
- Desarrollé API RESTful
              `.trim(),
              technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
            },
          },
        },
        {
          id: "exp-3",
          name: "2020-2022.md",
          type: "file",
          extension: "md",
          content: {
            experience: {
              role: "Junior Developer",
              company: "Agencia Digital",
              period: "2020 - 2022",
              description: `
Mis primeros pasos en el desarrollo profesional.

**Aprendizajes:**
- Desarrollo web responsive
- Control de versiones con Git
- Metodologías ágiles
              `.trim(),
              technologies: ["HTML", "CSS", "JavaScript", "PHP"],
            },
          },
        },
      ],
    },

    // 📁 contact/
    {
      id: "contact",
      name: "contact",
      type: "folder",
      children: [
        {
          id: "email",
          name: "email.txt",
          type: "file",
          extension: "txt",
          content: {
            contactType: "email",
            title: "Email",
            link: `mailto:${PERSONAL_INFO.email}`,
            description: PERSONAL_INFO.email,
            icon: "📧",
          },
        },
        {
          id: "github",
          name: "github.url",
          type: "file",
          extension: "url",
          content: {
            contactType: "social",
            title: "GitHub",
            link: PERSONAL_INFO.github,
            description: "Mira mi código y proyectos open source",
            icon: "🐙",
          },
        },
        {
          id: "linkedin",
          name: "linkedin.url",
          type: "file",
          extension: "url",
          content: {
            contactType: "social",
            title: "LinkedIn",
            link: PERSONAL_INFO.linkedin,
            description: "Conectemos profesionalmente",
            icon: "💼",
          },
        },
        {
          id: "twitter",
          name: "twitter.url",
          type: "file",
          extension: "url",
          content: {
            contactType: "social",
            title: "Twitter / X",
            link: PERSONAL_INFO.twitter,
            description: "Sígueme para updates y pensamientos tech",
            icon: "🐦",
          },
        },
      ],
    },

    // 📄 resume.pdf
    {
      id: "resume",
      name: "resume.pdf",
      type: "file",
      extension: "pdf",
      content: {
        title: "Curriculum Vitae",
        description: "Descarga mi CV completo en PDF",
        link: PERSONAL_INFO.resume,
      },
    },
  ],
}

// Helper para obtener icono según extensión
export function getFileIcon(extension?: string): string {
  const icons: Record<string, string> = {
    md: "📝",
    tsx: "⚛️",
    ts: "📘",
    js: "📒",
    py: "🐍",
    json: "📋",
    css: "🎨",
    html: "🌐",
    sql: "🗃️",
    txt: "📄",
    url: "🔗",
    pdf: "📕",
    png: "🖼️",
    jpg: "🖼️",
    gif: "🎞️",
  }
  return icons[extension || ""] || "📄"
}

// Helper para obtener color según extensión
export function getFileColor(extension?: string): string {
  const colors: Record<string, string> = {
    md: "#519aba",
    tsx: "#61dafb",
    ts: "#3178c6",
    js: "#f7df1e",
    py: "#3776ab",
    json: "#cbcb41",
    css: "#264de4",
    html: "#e34f26",
    sql: "#f29111",
    txt: "#8b949e",
    url: "#58a6ff",
    pdf: "#ff5252",
  }
  return colors[extension || ""] || "#8b949e"
}

// Helper para obtener icono SVG por extensión (más profesional)
export function getFileIconSvg(extension?: string): { icon: string; color: string } {
  const iconMap: Record<string, { icon: string; color: string }> = {
    md: { icon: "markdown", color: "#519aba" },
    tsx: { icon: "react", color: "#61dafb" },
    ts: { icon: "typescript", color: "#3178c6" },
    js: { icon: "javascript", color: "#f7df1e" },
    py: { icon: "python", color: "#3776ab" },
    json: { icon: "json", color: "#cbcb41" },
    css: { icon: "css", color: "#264de4" },
    html: { icon: "html", color: "#e34f26" },
    sql: { icon: "database", color: "#f29111" },
    txt: { icon: "file-text", color: "#8b949e" },
    url: { icon: "link", color: "#58a6ff" },
    pdf: { icon: "file-text", color: "#ff5252" },
  }
  return iconMap[extension || ""] || { icon: "file", color: "#8b949e" }
}
