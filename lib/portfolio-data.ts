// ============================================
// 📁 PORTFOLIO DATA - ESTRUCTURA DEL ÁRBOL
// ============================================
// Datos de Matias Szpektor
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
  title?: string
  subtitle?: string
  description?: string
  avatar?: string
  skills?: Skill[]
  project?: Project
  experience?: Experience
  contactType?: "email" | "linkedin" | "github" | "social"
  link?: string
  icon?: string
  code?: string
  language?: string
  tags?: string[]
}

export interface Skill {
  name: string
  level: number
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
  current?: boolean
}

// ============================================
// 🎯 INFORMACIÓN PERSONAL
// ============================================

export const PERSONAL_INFO = {
  name: "Matias Ariel Szpektor",
  title: "Developer | AI & Automation Enthusiast",
  subtitle: "Problem Solver | Quick Learner | Tech Enthusiast",
  email: "matirulosz@gmail.com",
  github: "https://github.com/matiszpek",
  linkedin: "https://www.linkedin.com/in/matias-szpektor-2b8800337/",
  twitter: "",
  avatar: "/Foto-yo.png",
  resume: "/cv.pdf",
  location: "Buenos Aires, Argentina",
  available: true,
}

// ============================================
// 🌳 ESTRUCTURA DEL ÁRBOL - PORTFOLIO
// ============================================

export const portfolioTree: TreeNode = {
  id: "root",
  name: "matias-szpektor",
  type: "folder",
  children: [
    // 📄 README.md - Hero/Intro
    {
      id: "readme",
      name: "README.md",
      type: "file",
      extension: "md",
      content: {
        title: "¡Hola! Soy Matias Szpektor.",
        subtitle: "Desarrollador Full Stack | Apasionado por la tecnología",
        description: `Soy un desarrollador apasionado con facilidad para aprender nuevas tecnologías y resolver problemas complejos.

Me especializo en algoritmos, optimización e inteligencia artificial. Me encanta automatizar e investigar.

Actualmente trabajo como freelancer y siempre estoy buscando nuevos desafíos y oportunidades para aprender.`,
        avatar: PERSONAL_INFO.avatar,
        tags: [
          "Python",
          "C++",
          "JavaScript",
          "ML/AI",
          "Automation",
          "IOT",
          "Problem Solver",
          "Tech Enthusiast",
          "Quick Learner",
        ],
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
            description: `## Mi Historia

Soy estudiante de la Escuela Técnica ORT, cursando la especialización en TIC (Tecnologías de la Información y Comunicación).

Mi pasión por la tecnología comenzó desde muy joven, y me he enfocado en desarrollar habilidades en programación, inteligencia artificial y automatización.

## Lo que me motiva

- 🧠 Resolver problemas complejos con soluciones creativas
- 🤖 Explorar las posibilidades de la inteligencia artificial
- ⚡ Automatizar procesos y optimizar sistemas
- 🔧 Trabajar con hardware y software (IoT)
- 📚 Aprender constantemente nuevas tecnologías

## Filosofía

Creo en el aprendizaje continuo, la experimentación y en encontrar soluciones elegantes a problemas difíciles.`,
          },
        },
        {
          id: "education",
          name: "education.md",
          type: "file",
          extension: "md",
          content: {
            title: "Educación",
            description: `## 🎓 Formación Académica

### Escuela Técnica ORT
**Bachiller con especialización en TIC** | 2021 - 2025
- Especialización en desarrollo de software
- Aprendizaje de diversas tecnologías
- Proyectos prácticos integradores

### Hebraica - Curso EDMA
**Certificación en Liderazgo Comunitario** | 2022 - 2024
- Liderazgo y organización de actividades
- Trabajo en equipo y comunicación
- Gestión de proyectos comunitarios`,
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
          id: "backend",
          name: "backend",
          type: "folder",
          children: [
            {
              id: "python-skill",
              name: "python.py",
              type: "file",
              extension: "py",
              content: {
                skills: [
                  { name: "Python", level: 95, icon: "🐍" },
                  { name: "Node.js", level: 85, icon: "🟢" },
                  { name: "PostgreSQL", level: 70, icon: "🐘" },
                ],
                code: `# Backend Skills - Matias Szpektor

backend_stack = {
    "languages": ["Python", "JavaScript", "Node.js"],
    "databases": ["PostgreSQL", "SQLite"],
    "frameworks": ["FastAPI", "Express"],
    "specialties": ["Automation", "Data Processing", "APIs"]
}

def solve_problem(challenge):
    """Mi enfoque: analizar, diseñar, implementar, optimizar"""
    solution = analyze(challenge)
    return implement(solution)`,
                language: "python",
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
                  { name: "Neural Networks", level: 100, icon: "🤖" },
                  { name: "TensorFlow", level: 90, icon: "🔗" },
                  { name: "scikit-learn", level: 85, icon: "🧠" },
                  { name: "Machine Vision", level: 80, icon: "👁️" },
                ],
                code: `# AI/ML Skills - Matias Szpektor

import tensorflow as tf
from sklearn import models

ai_expertise = {
    "deep_learning": ["Neural Networks", "CNNs", "RNNs"],
    "frameworks": ["TensorFlow", "Keras", "scikit-learn"],
    "computer_vision": ["OpenCV", "Image Processing"],
    "applications": ["Pattern Recognition", "Automation", "Optimization"]
}

class AIEnthusiast:
    def __init__(self):
        self.passion = "Machine Learning"
        self.focus = "Practical Applications"
    
    def build_model(self, problem):
        return innovative_solution(problem)`,
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
                  { name: "C++", level: 90, icon: "💻" },
                  { name: "Arduino", level: 90, icon: "🔧" },
                  { name: "Git / GitHub", level: 90, icon: "📦" },
                  { name: "Docker", level: 75, icon: "🐳" },
                  { name: "VS Code", level: 95, icon: "💻" },
                  { name: "Neopixel", level: 100, icon: "🚥" },
                  { name: "Raspberry Pi", level: 85, icon: "🍓" },
                ],
                code: `{
  "developer": "Matias Szpektor",
  "tools": {
    "languages": ["C++", "Python", "JavaScript"],
    "hardware": ["Arduino", "Raspberry Pi", "Neopixel", "ESP32"],
    "software": ["VS Code", "Git", "Docker", "Jupyter"],
    "iot": ["RF Communication", "Sensors", "Actuators"]
  },
  "specialties": ["Embedded Systems", "IoT", "Automation"]
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
          id: "project-trevian",
          name: "TREVIAN",
          type: "folder",
          children: [
            {
              id: "trevian-readme",
              name: "README.md",
              type: "file",
              extension: "md",
              content: {
                project: {
                  title: "TREVIAN",
                  description: "Aplicación mobile de creación de plantillas ortopédicas personalizadas.",
                  longDescription: `## 👟 TREVIAN - Plantillas Ortopédicas Personalizadas

Creación de plantillas personalizadas sin necesidad de especialistas ni salir de casa.

### 🎯 Problema que resuelve
- Acceso a plantillas ortopédicas sin necesidad de visitar especialistas
- Proceso automatizado de medición y creación

### 🔧 Desafíos técnicos
- Detección precisa de la planta del pie
- Cálculo de rotación y dimensiones
- Algoritmo de generación de plantilla personalizada

### 📚 Aprendizajes
- Programación 3D con Blender y BPY
- Estructuración de proyectos escalables y complejos
- Procesamiento de modelos 3D`,
                  image: "/proyectos/proyecto1.png",
                  technologies: ["Python", "Blender", "BPY", "Jupyter"],
                  github: "https://github.com/matiszpek/TREVIAN",
                  demo: "",
                  featured: true,
                },
              },
            },
          ],
        },
        {
          id: "project-223d",
          name: "223D",
          type: "folder",
          children: [
            {
              id: "223d-readme",
              name: "README.md",
              type: "file",
              extension: "md",
              content: {
                project: {
                  title: "223D",
                  description: "Transformador de dibujos a modelo 3D.",
                  longDescription: `## ✏️ 223D - De Dibujo a 3D

Transformador de fotos de dibujos dibujados a mano en papel a modelos 3D utilizando algoritmos propios.

### 🎯 Concepto
Convertir dibujos 2D hechos a mano en modelos 3D listos para imprimir o visualizar.

### 🔧 Tecnología
- Python y OpenCV para procesamiento de imágenes
- Algoritmos inventados por nosotros para la conversión 2D→3D
- Generación automática de modelos 3D

### 📚 Aprendizajes
- Algoritmos de procesamiento de imágenes
- Programación 3D
- Desarrollo de algoritmos originales`,
                  image: "/proyectos/proyecto2.png",
                  technologies: ["Python", "OpenCV", "Image Processing"],
                  github: "https://github.com/matiszpek/Proyecto-4to",
                  demo: "",
                  featured: true,
                },
              },
            },
          ],
        },
        {
          id: "project-neodrift",
          name: "NeoDrift",
          type: "folder",
          children: [
            {
              id: "neodrift-readme",
              name: "README.md",
              type: "file",
              extension: "md",
              content: {
                project: {
                  title: "NeoDrift",
                  description: "Auto de derrape RC recubierto de Neopixels personalizables.",
                  longDescription: `## 🚗 NeoDrift - RC Drift Car con LEDs

Auto de derrape a control remoto recubierto de Neopixels personalizables, controlado vía radiofrecuencia desde una app móvil.

### 🎮 Características
- Control por radiofrecuencia
- LEDs Neopixel programables
- App de control personalizada

### 🔧 Desafíos
- Integración de hardware y software
- Programación de microcontroladores
- Diseño de sistemas embebidos
- Comunicación RF bidireccional

### 📚 Aprendizajes
- Programación en C++ para Arduino
- Control de radiofrecuencia
- Manejo de Neopixels
- Desarrollo de apps de escritorio`,
                  image: "",
                  technologies: ["C++", "Arduino", "Neopixel", "RF"],
                  github: "https://github.com/matiszpek/Proyecto3ro",
                  demo: "",
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
          id: "exp-hebraica",
          name: "2025-present.md",
          type: "file",
          extension: "md",
          content: {
            experience: {
              role: "Madrij",
              company: "Hebraica",
              period: "2025 - Presente",
              description: `Líder comunitario en Hebraica, organizando actividades y proyectos.

**Responsabilidades:**
- Organización de actividades para jóvenes
- Liderazgo de grupos
- Planificación de proyectos comunitarios
- Desarrollo de habilidades de comunicación`,
              technologies: ["Liderazgo", "Organización", "Comunicación"],
              current: true,
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
            description: "La mejor forma de contactarme para propuestas laborales.",
            icon: "📧",
          },
        },
        {
          id: "github-contact",
          name: "github.url",
          type: "file",
          extension: "url",
          content: {
            contactType: "github",
            title: "GitHub",
            link: PERSONAL_INFO.github,
            description: "Revisa mis proyectos y contribuciones.",
            icon: "🐙",
          },
        },
        {
          id: "linkedin-contact",
          name: "linkedin.url",
          type: "file",
          extension: "url",
          content: {
            contactType: "linkedin",
            title: "LinkedIn",
            link: PERSONAL_INFO.linkedin,
            description: "Conectemos profesionalmente.",
            icon: "💼",
          },
        },
      ],
    },

    // 📄 resume.pdf
    {
      id: "resume",
      name: "cv.pdf",
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

// Helper functions
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
  }
  return icons[extension || ""] || "📄"
}

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
