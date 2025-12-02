# Interactive Mind Map Portfolio

Un portfolio web personal interactivo con diseño tipo mapa mental estilo NotebookLM, construido con Next.js, React, TypeScript, Tailwind CSS y Framer Motion.

## ✨ Características

- **Mapa mental tipo árbol horizontal** con nodos expandibles y líneas conectoras
- **Animaciones smooth** con transiciones fluidas usando Framer Motion
- **Auto-escalado del viewport** que ajusta el zoom automáticamente al expandir nodos
- **Tarjetas de proyecto personalizadas** con imagen overlay, logo, información y tags
- **Tema oscuro moderno** con scrollbars personalizados
- **4 carpetas principales**: Myself, Abilities, Projects, Contact (colores personalizables)
- **Diseño 100% responsive** para desktop, tablet y móvil
- **Componentes modulares y reutilizables**

## 🚀 Instalación y Uso

### Opción 1: Usando shadcn CLI (Recomendado)

\`\`\`bash
npx shadcn@latest init
\`\`\`

### Opción 2: Instalación Manual

\`\`\`bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Estructura del Proyecto

\`\`\`
├── app/
│   ├── page.tsx           # Página principal con árbol mind-map
│   ├── layout.tsx         # Layout con metadata SEO
│   └── globals.css        # Estilos globales y animaciones
├── components/
│   ├── tree-node.tsx      # Componente de nodo de árbol reutilizable
│   └── project-card.tsx   # Componente de tarjeta de proyecto
├── types/
│   └── portfolio.ts       # TypeScript interfaces
└── public/                # Imágenes y assets
\`\`\`

## 🎨 Personalización

### 1. Actualizar tu información personal

En `app/page.tsx`, modifica el objeto `portfolioData`:

\`\`\`typescript
const portfolioData: FolderData[] = [
  {
    id: "myself",
    name: "Myself",
    color: "#FFD700", // Cambia el color
    children: [
      {
        id: "bio",
        name: "Bio",
        content: {
          title: "Tu Título",
          description: "Tu descripción",
          text: "Tu biografía detallada...",
          image: "/tu-imagen.jpg",
          logo: "/tu-logo.png",
          tags: ["Tag1", "Tag2"],
        },
      },
    ],
  },
  // Agrega más carpetas...
]
\`\`\`

### 2. Personalizar colores de carpetas

- **Myself**: Amarillo (`#FFD700`)
- **Abilities**: Azul (`#4FC3F7`)
- **Projects**: Verde (`#66BB6A`)
- **Contact**: Rojo (`#EF5350`)

### 3. Agregar imágenes y logos

1. Coloca las imágenes en la carpeta `public/`
2. Referéncialas en los objetos de contenido:
   - `image`: Imagen de fondo para las tarjetas (se muestra con transparencia)
   - `logo`: Logo/ícono del proyecto

### 4. Modificar header

En `app/page.tsx`, actualiza:
- Nombre: "Matias Szpekter"
- Rol: "Developer | AI | 3D | Innovation"

## 🌳 Cómo funciona el Mapa Mental

1. **Nodos principales**: 4 carpetas en el lado izquierdo
2. **Expandir árbol**: Click en una carpeta para expandir sus hijos
3. **Ver detalles**: Click en cualquier subcarpeta para ver la tarjeta de proyecto
4. **Navegación**: Las líneas conectan visualmente los nodos padre-hijo
5. **Auto-escala**: El viewport se ajusta automáticamente para mostrar todo el contenido

## 🎯 Controles de Zoom

- **Botón +**: Acercar zoom
- **Botón -**: Alejar zoom
- **Reset**: Volver al 100% de escala
- **Auto-scale**: Se activa automáticamente al expandir nodos

## 📱 Diseño Responsive

- **Desktop**: Árbol horizontal con espacio completo
- **Tablet**: Árbol adaptativo con scroll
- **Mobile**: Layout vertical optimizado

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde v0 (Más Rápido)

1. Click en el botón **"Publish"** en v0
2. Conecta tu cuenta de Vercel
3. ¡Listo! Tu sitio estará en producción

### Opción 2: Deploy Manual

\`\`\`bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

O conecta tu repositorio de GitHub con Vercel para deploys automáticos.

## 🛠️ Tecnologías Utilizadas

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de UI con nuevas features
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling utility-first
- **Framer Motion** - Animaciones fluidas y transiciones
- **Lucide React** - Iconos SVG modernos
- **Next.js Image** - Optimización de imágenes

## 💡 Características Técnicas

- **Auto-scaling viewport**: Ajuste automático de zoom basado en contenido expandido
- **Animaciones smooth**: Transiciones ease-out de 0.3-0.5s
- **Lazy loading**: Imágenes optimizadas con Next.js Image
- **Estructura modular**: Componentes reutilizables y mantenibles
- **TypeScript strict**: Type safety completo
- **Responsive design**: Mobile-first approach

## 🎨 Tarjetas de Proyecto

Cada tarjeta incluye:
- **Imagen de fondo** con overlay de color de carpeta
- **Logo** del proyecto (80x80px)
- **Nombre del proyecto** como título
- **Descripción** breve
- **Texto detallado** de información
- **Tecnologías** utilizadas (badges)
- **Tags** personalizados con el color de la carpeta
- **Links externos** (opcional)

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 💡 Mejoras Futuras

- Agregar drag & drop para reorganizar nodos
- Implementar búsqueda y filtrado de contenido
- Agregar zoom y pan con gestos táctiles
- Exportar el mapa mental como imagen
- Modo colaborativo en tiempo real
- Integración con CMS headless

## 🤝 Soporte

Para preguntas o problemas, contacta: your.email@example.com

---

Hecho con ❤️ usando v0 by Vercel
