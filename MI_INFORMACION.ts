// ============================================================
// 📝 COMPLETA TU INFORMACIÓN AQUÍ
// ============================================================
// Este archivo contiene toda tu información personal para el portfolio.
// Simplemente reemplaza los valores de ejemplo con tu información real.
// Después de completar, copia el contenido a lib/portfolio-data.ts
// ============================================================

// ============================================================
// 🧑 INFORMACIÓN PERSONAL BÁSICA
// ============================================================
export const MI_INFO = {
  // Tu nombre completo
  nombre: "Matias Ariel Szpektor",
  
  // Tu título profesional (ej: "Full Stack Developer", "Frontend Engineer")
  titulo: "",
  
  // Tu ubicación (ciudad, país)
  ubicacion: "Buenos Aires, Argentina",
  
  // Tu email de contacto
  email: "matirulosz@gmail.com",
  
  // URLs de tus redes sociales
  github: "https://github.com/matiszpek",
  linkedin: "https://www.linkedin.com/in/matias-szpektor-2b8800337/",
  twitter: "", // Opcional, dejar "" si no tienes
  
  // Link a tu CV (puedes poner un archivo en /public o un link externo)
  cv: "/cv.pdf",
  
  // Tu foto de perfil (poner en /public y usar "/nombre-archivo.jpg")
  // Dejar "/avatar.png" si no tienes foto aún
  avatar: "/Foto-yo.png",
}

// ============================================================
// 📖 SOBRE MÍ (README)
// ============================================================
export const SOBRE_MI = {
  // Título principal
  titulo: "¡Hola! Soy Matias Szpektor.",
  
  // Subtítulo
  subtitulo: "Desarrollador Full Stack | Apasionado por la tecnología",
  
  // Descripción larga (puedes usar múltiples líneas con ``)
  descripcion: `
Soy un desarrollador apasionado con facilidadad para aprender nuevas tecnologías y 
resolver problemas complejos.

Me especializo en algoritmos, optimizacion e inteligencia artificial. Me encanta 
automatizar e investigar.

Actualmente trabajo como freelancer y siempre estoy buscando 
nuevos desafíos y oportunidades para aprender.
  `.trim(),
  
  // Tags/etiquetas que te describen
  tags: [
    "Python",
    "C++", 
    "JavaScript",
    "ML/AI",
    "Automation",
    "IOT",
    "Problem Solver",
    "Tech Enthusiast",
    "Quick Learner"
  ],
}

// ============================================================
// 💻 HABILIDADES - FRONTEND
// ============================================================


//Me gustaria sacar las habilidades de frontend ya que no me dedico a eso 
// quitar la seccion de frontend

export const SKILLS_FRONTEND = [
  { nombre: "React / Next.js", nivel: 90, icono: "⚛️" },
  { nombre: "TypeScript", nivel: 85, icono: "📘" },
  { nombre: "Tailwind CSS", nivel: 88, icono: "🎨" },
  { nombre: "HTML5 / CSS3", nivel: 95, icono: "🌐" },
  // Agrega más skills...
]





// ============================================================
// 🔧 HABILIDADES - BACKEND
// ============================================================
export const SKILLS_BACKEND = [
{ nombre: "Python", nivel: 95, icono: "🐍" },
  { nombre: "Node.js", nivel: 85, icono: "🟢" },
  { nombre: "PostgreSQL", nivel: 70, icono: "🐘" },
  // Agrega más skills...
]

// ============================================================
// 🤖 HABILIDADES - AI / ML (Opcional)
// ============================================================
export const SKILLS_AI = [
  { nombre: "Neural Networks", nivel: 100, icono: "🤖" },
  { nombre: "TensorFlow", nivel: 90, icono: "🔗" },
  { nombre: "scikit-learn", nivel: 85, icono: "🧠" },
  { nombre: "Machine vision", nivel: 80, icono: "👁️" },
  // Agrega más skills o deja vacío []
]

// ============================================================
// 🛠️ HABILIDADES - HERRAMIENTAS
// ============================================================
export const SKILLS_TOOLS = [
  { nombre: "C++", nivel: 90, icono: "💻" },
  { nombre: "Arduino", nivel: 90, icono: "🔧" },
  { nombre: "Git / GitHub", nivel: 90, icono: "📦" },
  { nombre: "Docker", nivel: 75, icono: "🐳" },
  { nombre: "VS Code", nivel: 95, icono: "💻" },
  { nombre: "Neopixel", nivel: 100, icono: "🚥" },
  { nombre: "Raspberry Pi", nivel: 85, icono: "🍓" }
  // Agrega más tools...
]

// ============================================================
// 🚀 PROYECTOS
// ============================================================
// Agrega todos tus proyectos aquí
export const PROYECTOS = [
  {
    id: "proyecto-1",
    titulo: "TREVIAN",
    descripcionCorta: "Applicacion mobile de creacion de plantillas ortopedicas personalizadas.",
    descripcionLarga: `
Creacion de plantillas personalizadas sin necesiadad de especialistas ni salir de casa.
Creada utilizando python para el procesamiento de modelos 3D.
Desafiado en detectar planta de pie y rotacion y un algoritmo para la creacion de plantilla segun pie
Aprendido: programacion 3D, estruturacion de proyecto escalable y complejo y plantillas   `.trim(),
    tecnologias: ["Python", "Blender", "BPY", "Jupyter"],
    imagen: "/proyectos/proyecto1.png", // Opcional, poner en /public/proyectos/
    demo: "", // URL del demo
    github: "https://github.com/matiszpek/TREVIAN", // URL del repo
    destacado: true, // true si es un proyecto importante
  },
  {
    id: "proyecto-2",
    titulo: "223D",
    descripcionCorta: "Transformador de dibujos a modelo 3D.",
    descripcionLarga: `
Transformador de fotos de dibujos dibujados a mano en papel a modelos 3D utilizando algoritmos inventados por nosotros.
Utilizando Python y OpenCV para el procesamiento de imagenes y creacion de modelos 3D.
Desafiado en procesamiento de imagenes, creacion de algoritmos y programacion 3D.
Aprendido: algoritmos de procesamiento de imagenes y programacion 3D.
    `.trim(),
    tecnologias: ["Python"],
    imagen: "/proyectos/proyecto2.png",
    demo: "",
    github: "https://github.com/matiszpek/Proyecto-4to",
    destacado: true,
  },
  {
    id: "proyecto-3",
    titulo: "NeoDrift",
    descripcionCorta: "Auto de derrape a control remoto recubierto de Neopixels personalizables.",
    descripcionLarga: `
    Auto de derrape a control remoto recubierto de Neopixels personalizables. 
    Controlado via radiofrecuencia desde una app movil.
    Desafiado en integracion de hardware y software, programacion de microcontroladores y diseño de sistemas embebidos.
    Aprendido: programacion en C++ para Arduino, control de radiofrecuencia, control de Neopixels y desarrollo de apps escritorio basicas.`.trim(),
    tecnologias: ["C++", "Arduino", "Neopixel", "RF"],
    imagen: "",
    demo: "",
    github: "https://github.com/matiszpek/Proyecto3ro",
    destacado: false,
  },
  // Agrega más proyectos siguiendo el mismo formato...
]

// ============================================================
// 💼 EXPERIENCIA LABORAL
// ============================================================
export const EXPERIENCIA = [
  {
    id: "exp-1",
    puesto: "Madrij",
    empresa: "Hebraica",
    periodo: "2025 - Presente",
    actual: true, // true si es tu trabajo actual
    descripcion: `
Lider comunitario en Hebraica, organizando actividades y proyectos.
    `.trim(),
    tecnologias: ["Liderazgo", "Organización", "Comunicación"],
  }
  // Agrega más experiencias...
]

// ============================================================
// 🎓 EDUCACIÓN (Opcional)
// ============================================================
export const EDUCACION = [
  {
    titulo: "Bachiller con especialización en Tecnologías de la Información y la Comunicación (TIC)",
    institucion: "Escuela Técnica ORT",
    periodo: "2021 - 2025",
    descripcion: "Especialización en desarrollo de software y aprendizaje de diversas tecnologías.",
  },
  {
    titulo: "Curso de Madrij (EDMA)",
    institucion: "Hebraica",
    periodo: "2022 - 2024",
    descripcion: "Certificación en liderazgo comunitario y organización de actividades.",
  },
  // Agrega más educación...
]

// ============================================================
// 📧 INFORMACIÓN DE CONTACTO
// ============================================================
export const CONTACTO = {
  email: {
    titulo: "Email",
    descripcion: "La mejor forma de contactarme para propuestas laborales.",
    link: "mailto:matirulosz@gmail.com",
  },
  linkedin: {
    titulo: "LinkedIn", 
    descripcion: "Conectemos profesionalmente.",
    link: "https://linkedin.com/in/matias-szpektor-2b8800337/",
  },
  github: {
    titulo: "GitHub",
    descripcion: "Revisa mis proyectos y contribuciones.",
    link: "https://github.com/matiszpek",
  },
}

// ============================================================
// ✅ CUANDO TERMINES:
// ============================================================
// 1. Guarda este archivo
// 2. Avísame y actualizaré automáticamente lib/portfolio-data.ts
//    con toda tu información
// ============================================================
