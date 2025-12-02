# 🌳 Plan de Portfolio - Árbol de Archivos Interactivo

## 📋 Concepto Principal

Mantener la **metáfora visual de árbol de archivos/carpetas** pero transformándolo en un portfolio profesional y completo. El usuario navega tu portfolio como si explorara un sistema de archivos, pero con diseño moderno y contenido profesional.

---

## 🎨 Diseño Visual

### Paleta de Colores (Dark Theme - Estilo IDE/Terminal)
```
Background:     #0d1117 (GitHub dark)
Surface:        #161b22
Border:         #30363d
Text Primary:   #e6edf3
Text Secondary: #8b949e
Accent Blue:    #58a6ff
Accent Green:   #3fb950
Accent Yellow:  #d29922
Accent Purple:  #a371f7
```

### Tipografía
- **Código/Terminal**: `JetBrains Mono` o `Fira Code`
- **UI**: `Inter` o `Geist`

---

## 🗂️ Estructura del Árbol (Portfolio)

```
📁 matias-szpekter/
├── 📄 README.md          → Hero/Intro (nombre, título, bio corta)
├── 📁 about/
│   ├── 📄 bio.md         → Historia personal, background
│   ├── 📄 education.md   → Formación académica
│   └── 📄 interests.md   → Hobbies e intereses
├── 📁 skills/
│   ├── 📁 frontend/
│   │   ├── 📄 react.ts
│   │   ├── 📄 nextjs.ts
│   │   ├── 📄 typescript.ts
│   │   └── 📄 tailwind.css
│   ├── 📁 backend/
│   │   ├── 📄 nodejs.js
│   │   ├── 📄 python.py
│   │   └── 📄 databases.sql
│   └── 📁 ai-ml/
│       ├── 📄 openai.py
│       └── 📄 langchain.py
├── 📁 projects/
│   ├── 📁 ecommerce-platform/
│   │   ├── 📄 README.md
│   │   ├── 📄 preview.png
│   │   └── 📄 tech-stack.json
│   ├── 📁 ai-chatbot/
│   │   ├── 📄 README.md
│   │   └── 📄 demo.gif
│   └── 📁 3d-portfolio/
│       └── 📄 README.md
├── 📁 experience/
│   ├── 📄 2024-present.md
│   └── 📄 2022-2024.md
├── 📁 contact/
│   ├── 📄 email.txt
│   ├── 📄 linkedin.url
│   ├── 📄 github.url
│   └── 📄 twitter.url
└── 📄 resume.pdf         → Descarga CV
```

---

## 🖥️ Layout de la Página

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER (sticky)                                            │
│  📁 matias-szpekter  |  [GitHub] [LinkedIn] [Email]        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐  ┌──────────────────────────────────┐ │
│  │   FILE TREE     │  │     CONTENT PREVIEW              │ │
│  │   (sidebar)     │  │     (panel derecho)              │ │
│  │                 │  │                                  │ │
│  │  📁 about/      │  │  Cuando seleccionas un archivo   │ │
│  │  📁 skills/     │  │  se muestra su contenido aquí    │ │
│  │  📁 projects/   │  │  con formato estilo Markdown/    │ │
│  │  📁 experience/ │  │  código según el tipo            │ │
│  │  📁 contact/    │  │                                  │ │
│  │  📄 resume.pdf  │  │                                  │ │
│  │                 │  │                                  │ │
│  └─────────────────┘  └──────────────────────────────────┘ │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                     │
│  © 2024 Matias Szpekter • Built with Next.js               │
└─────────────────────────────────────────────────────────────┘
```

---

## 📱 Responsive Design

### Desktop (>1024px)
- Sidebar izquierdo (300px) + Content panel derecho

### Tablet (768px - 1024px)
- Sidebar colapsable + Content panel

### Mobile (<768px)
- Árbol en acordeón/lista vertical
- Content debajo de cada item expandido

---

## ✨ Características y Animaciones

### Interacciones
- [ ] Click en carpeta → Expande/colapsa con animación suave
- [ ] Click en archivo → Muestra contenido en panel derecho
- [ ] Hover en items → Highlight suave
- [ ] Líneas de conexión estilo árbol real

### Animaciones
- [ ] Expansión/colapso de carpetas (Framer Motion)
- [ ] Typing effect en README.md inicial
- [ ] Fade-in del contenido al seleccionar archivo
- [ ] Iconos animados según tipo de archivo

### Extras
- [ ] Breadcrumb de navegación (ej: `matias-szpekter / projects / ecommerce`)
- [ ] Contador de archivos en cada carpeta
- [ ] Barra de "terminal" abajo con info

---

## 📁 Componentes a Crear

```
components/
├── layout/
│   ├── Header.tsx           → Header con navegación
│   ├── Sidebar.tsx          → Árbol de archivos
│   ├── ContentPanel.tsx     → Panel de contenido
│   └── Footer.tsx           → Footer
├── tree/
│   ├── FileTree.tsx         → Componente principal del árbol
│   ├── FolderNode.tsx       → Nodo de carpeta
│   ├── FileNode.tsx         → Nodo de archivo
│   └── TreeLine.tsx         → Líneas de conexión
├── content/
│   ├── MarkdownPreview.tsx  → Renderizar MD
│   ├── CodePreview.tsx      → Código con syntax highlight
│   ├── ProjectCard.tsx      → Card de proyecto
│   ├── SkillBadge.tsx       → Badge de skill
│   └── ContactForm.tsx      → Formulario de contacto
└── ui/
    ├── FileIcon.tsx         → Iconos según extensión
    ├── Button.tsx           → Botones estilizados
    └── Badge.tsx            → Badges/tags
```

---

## 📊 Datos (lib/portfolio-data.ts)

```typescript
// Estructura de datos para el árbol
interface TreeNode {
  id: string
  name: string
  type: 'folder' | 'file'
  extension?: string  // .md, .ts, .py, etc.
  icon?: string
  children?: TreeNode[]
  content?: {
    // Contenido específico según tipo
  }
}
```

---

## 🔧 Tecnologías a Usar

| Tecnología | Uso |
|------------|-----|
| Next.js 16 | Framework base |
| Tailwind CSS 4 | Estilos |
| Framer Motion | Animaciones |
| Lucide Icons | Iconos |
| next-themes | Dark/Light mode |
| react-markdown | Renderizar MD |
| react-syntax-highlighter | Syntax highlight |

---

## 📅 Fases de Implementación

### FASE 1: Estructura Base
1. Configurar layout principal (Header, Sidebar, Content)
2. Crear estructura de datos del árbol
3. Implementar componente FileTree básico
4. Verificar build: `npm run build`

### FASE 2: Árbol Interactivo
1. Expandir/colapsar carpetas
2. Selección de archivos
3. Líneas de conexión del árbol
4. Iconos según tipo de archivo
5. Verificar build

### FASE 3: Panel de Contenido
1. Renderizar contenido según tipo de archivo
2. Markdown preview
3. Code preview con syntax highlight
4. Cards de proyectos
5. Verificar build

### FASE 4: Estilos y Animaciones
1. Animaciones con Framer Motion
2. Hover effects
3. Transiciones suaves
4. Responsive design
5. Verificar build

### FASE 5: Contenido Real y Polish
1. Agregar tu información real
2. Screenshots de proyectos
3. Links funcionales
4. Form de contacto
5. SEO y meta tags
6. Build final y deploy

---

## ❓ Preguntas para Ti

1. **¿Qué proyectos reales quieres mostrar?** (necesito nombres, descripciones, tecnologías, links)

2. **¿Tienes imágenes/screenshots de tus proyectos?**

3. **¿Cuál es tu formación académica?** (para education.md)

4. **¿Experiencia laboral?** (trabajos anteriores, freelance, etc.)

5. **¿Links de redes sociales?**
   - GitHub: 
   - LinkedIn:
   - Twitter/X:
   - Email:

6. **¿Quieres mantener la animación de zoom actual** o prefieres navegación más tradicional (click → cambia vista)?

7. **¿Light mode también** o solo dark mode estilo terminal?

8. **¿Terminal/consola falsa abajo** con comandos estilo `> whoami`, `> ls projects`? (sería un toque cool)

---

## ✅ Checklist Pre-Implementación

- [ ] Revisar y aprobar estructura del árbol
- [ ] Confirmar paleta de colores
- [ ] Definir contenido de proyectos
- [ ] Proporcionar links de contacto
- [ ] Decidir sobre animaciones extras

---

**Una vez que revises este plan y me des tu feedback, empiezo con la FASE 1!** 🚀
