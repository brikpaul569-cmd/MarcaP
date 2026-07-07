# Brikman Paul Morales — Project Charter & SDD Master Spec

> Estrategia basada en **Specification-Driven Development** (SDD): cada cambio es pequeño, está especificado antes de codear, y se verifica contra escenarios concretos.

---

## Resumen del Proyecto

**Marca personal inmersiva** que fusiona Software Engineering y Progressive House music en una experiencia web única.

| Aspecto | Descripción |
|---------|-------------|
| **URL** | `brikmanpaul.dev` |
| **Stack** | Next.js 15, React 19, TypeScript, TailwindCSS, GSAP, Lenis, Three.js/R3F, Framer Motion |
| **Entrega clave** | Lanzamiento musical en Spotify el **17 Julio 2026** |
| **Audiencia** | Reclutadores tech, colaboradores musicales, comunidad dev/design |
| **Diferenciador** | No es un portfolio — es una experiencia sensorial code + música |

### Arquitectura en 3 Capas

```
EXPERIENCIA (lo que el usuario ve/siente)
├─ SPA con navegación anchor + blog aparte
├─ Smooth scroll (Lenis)
├─ Animaciones narrativas (GSAP ScrollTrigger)
├─ Partículas 3D (Three.js / R3F)
└─ Sonido ambiente (Web Audio API)
│
CONTENIDO (lo que se muestra)
├─ Hero + About + Timeline + Proyectos + Música + Blog + Contacto
├─ Datos estáticos en JSON/TS
├─ Blog en MDX
└─ APIs externas: Spotify, GitHub
│
INFRAESTRUCTURA (cómo funciona)
├─ Next.js App Router (SSR/SSG)
├─ TailwindCSS + CSS Modules
├─ Vercel deploy
├─ Resend para email
└─ Vercel Analytics / Plausible
```

### Flujo SDD por Cambio

Cada cambio sigue este ciclo — **nunca se codea sin especificar antes**:

```
PROPONER → ESPECIFICAR → DISEÑAR → TAREAS → CODIFICAR → VERIFICAR → ARCHIVAR
(sdd-propose) (sdd-spec)  (sdd-design) (sdd-tasks) (sdd-apply) (sdd-verify) (sdd-archive)
```

---

## Plan de Cambios Incrementales

La estrategia es dividir el proyecto en **cambios atómicos**, cada uno auto-contenido y desplegable. No hay "meses de trabajo invisible".

### Resumen de Cambios

| # | Cambio | Semana | Resultado visible |
|---|--------|--------|-------------------|
| 0 | **Project Scaffolding** | 1 | Web funcionando en Vercel con colores de marca |
| 1 | **Hero Section** | 1-2 | Landing page con identidad visual |
| 2 | **About + Timeline** | 2-3 | Sección narrativa con cronología |
| 3 | **Projects Grid** | 3-4 | Showcase de software + música |
| 4 | **Contact + Footer** | 4-5 | Formulario funcional + CTA |
| 5 | **Smooth Scroll + GSAP Entrances** | 5 | Animaciones de entrada en todas las secciones |
| 6 | **Navigation + Header** | 5-6 | Navegación global funcional |
| 7 | **Three.js Hero Particles** | 6-7 | Hero con partículas 3D interactivas |
| 8 | **Spotify Release Section** | 7-8 | **Lanzamiento 17 Jul** — centro del universo |
| 9 | **Audio System** | 8-9 | Sonido ambiente + micro-interacciones |
| 10 | **Blog Engine** | 9-10 | Blog funcional + 2 posts |
| 11 | **Performance & Polish** | 10-11 | Lighthouse > 90, accesibilidad |
| 12 | **Blog Content** | 11-12 | 8+ posts publicados |
| 13+ | **Advanced Features** | 13+ | Visualizador, AI demos, etc. |

---

## Cambio 0: Project Scaffolding

El primer cambio es el más importante: crear la base sobre la que todo se construye.

### PROPUESTA

```yaml
intent: Inicializar el proyecto Next.js con configuración completa
in_scope:
  - create-next-app con TypeScript + Tailwind + App Router
  - Configurar ESLint + Prettier
  - Tailwind config con colores de marca
  - Font loading (Space Mono, Inter, JetBrains Mono)
  - CSS variables para el sistema de color
  - Git init + .gitignore
  - Deploy a Vercel
  - ESTRUCTURA DE CARPETAS completa
  - Componente Container + index placeholder
out_scope:
  - Contenido real (About, proyectos, etc.)
  - Animaciones
  - APIs
```

### ESPECIFICACIÓN

#### Requirement: Next.js app con Tailwind

The system MUST initialize a Next.js 15 project with TypeScript strict mode, App Router, and TailwindCSS.

**Scenario: Project init**
- GIVEN el directorio `MarcaP/` existe
- WHEN se ejecuta `npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"`
- THEN el proyecto tiene `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.js`
- AND `tsconfig.json` tiene `strict: true`

**Scenario: Tailwind brand colors**
- GIVEN `tailwind.config.ts` existe
- WHEN se configura
- THEN incluye color `deep-space: #0F1419`, `neon-cyan: #00D9FF`, `warm-amber: #FFB800`, `pulsing-magenta: #FF00FF`, `dark-grey: #1A1F2E`, `light-grey: #E8EAED`, `accent-blue: #4A90FF`, `deep-magenta: #8B00FF`
- AND define los 4 gradientes como `backgroundImage`

#### Requirement: Font loading

The system MUST load Space Mono, Inter, and JetBrains Mono via `next/font/google` in the root layout.

**Scenario: Fonts available as CSS variables**
- GIVEN `app/layout.tsx` existe
- WHEN se configura
- THEN Space Mono (400, 700) está cargado como `--font-space-mono`
- AND Inter (400, 500, 600, 700) está cargado como `--font-inter`
- AND JetBrains Mono (400, 500, 600) está cargado como `--font-jetbrains`
- AND `font-display: swap` está activo

#### Requirement: Folder structure

The project MUST follow the folder structure defined in the MASTERPLAN.

**Scenario: All directories created**
- GIVEN el proyecto existe
- WHEN se corre el scaffolding
- THEN existen los directorios `src/app`, `src/components/{sections,layout,projects,animations,common,forms,three}`, `src/hooks`, `src/lib/{animations,spotify,github,email,validation}`, `src/content/{blog,music}`, `src/styles`, `src/types`, `public/{fonts,images,videos,sounds}`, `.github/workflows`, `.vscode`

#### Requirement: CSS Variables

The system MUST define CSS custom properties for the brand color system.

**Scenario: CSS variables in globals.css**
- GIVEN `src/styles/globals.css` existe
- WHEN se cargan las variables en `:root`
- THEN incluye `--color-deep-space`, `--color-neon-cyan`, `--color-warm-amber`, `--color-pulsing-magenta`
- AND incluye `--color-dark-grey`, `--color-light-grey`, `--color-accent-blue`, `--color-deep-magenta`
- AND incluye `--gradient-cyber-pulse`, `--gradient-sonic-wave`, `--gradient-depth-void`, `--gradient-human-touch`

#### Requirement: ESLint + Prettier

The project MUST have ESLint with Next.js recommended config and Prettier for formatting.

**Scenario: Lint runs without errors**
- GIVEN `.eslintrc.json` y `.prettierrc` existen
- WHEN se ejecuta `npm run lint`
- THEN pasa sin errores en el template inicial

#### Requirement: Git + Deploy

The project MUST be initialized with Git and deployed to Vercel.

**Scenario: Git repo initialized**
- GIVEN el directorio del proyecto
- WHEN se ejecuta `git init`
- THEN existe `.git` y un commit inicial con todos los archivos de scaffolding
- AND `.gitignore` excluye `node_modules/`, `.next/`, `.env.local`

**Scenario: Vercel deploy**
- GIVEN el repo está en GitHub (o se deploya desde CLI)
- WHEN se conecta a Vercel
- THEN el build pasa y la URL de preview funciona mostrando el layout base

### DISEÑO TÉCNICO

```
src/app/layout.tsx          ← Root layout con fonts + CSS variables
src/app/page.tsx             ← Page placeholder con Container
src/app/globals.css          ← Tailwind directives + CSS variables
src/styles/colors.css        ← CSS variables puras (referencia)
src/styles/typography.css    ← Font-face / font variables
src/components/common/Container.tsx  ← Wrapper max-w-7xl centrado
tailwind.config.ts           ← Brand colors, fonts, custom spacing
tsconfig.json                ← strict: true + path aliases
.eslintrc.json               ← Next.js core-web-vitals + prettier
.prettierrc                  ← semi, singleQuote, tabWidth
.gitignore                   ← Next.js standard
```

### TAREAS

```
Phase 1: Project Creation
├─ 1.1 npx create-next-app@latest . — TypeScript + Tailwind + App Router + src/
├─ 1.2 Configurar tsconfig.json: strict true, path alias @/*
├─ 1.3 Configurar tailwind.config.ts: brand colors + fonts + gradients + spacing scale
├─ 1.4 Crear src/styles/colors.css con CSS variables
├─ 1.5 Crear src/styles/typography.css con font assignments
├─ 1.6 Configurar app/layout.tsx: Space Mono + Inter + JetBrains Mono via next/font
├─ 1.7 Crear app/globals.css: @tailwind directives + import colors.css + typography.css
├─ 1.8 Crear src/components/common/Container.tsx
├─ 1.9 Crear app/page.tsx con Container + título placeholder usando colores de marca

Phase 2: Tooling
├─ 2.1 Configurar .eslintrc.json con Next.js + prettier plugin
├─ 2.2 Configurar .prettierrc
├─ 2.3 Crear .vscode/settings.json con formateo on save
├─ 2.4 Verificar npm run lint pasa

Phase 3: Folder Structure
├─ 3.1 Crear todas las carpetas de src/components/{sections,layout,projects,animations,common,forms,three}
├─ 3.2 Crear src/hooks, src/lib/{animations,spotify,github,email,validation}, src/content/{blog,music}, src/styles, src/types
├─ 3.3 Crear .github/workflows, public/{fonts,images,videos,sounds}

Phase 4: Git + Deploy
├─ 4.1 git init + git add . + git commit -m "feat: initial Next.js scaffold with brand identity"
├─ 4.2 Deploy a Vercel (verificar build)
├─ 4.3 Verificar URL de preview muestra el layout con colores de marca
```

---

## Cambio 1: Hero Section

### PROPUESTA

```yaml
intent: Implementar el Hero de la landing page
in_scope:
  - Componente Hero.tsx con estructura visual completa
  - "Software Architect by day. Electronic Composer by night."
  - "Both, obsessively."
  - Scroll indicator animado
  - Entrance animation inicial (GSAP)
  - Responsive (mobile-first)
out_scope:
  - Partículas Three.js (son del Cambio 7)
  - Sonido ambiente (Cambio 9)
```

### ESPECIFICACIÓN

#### Requirement: Hero visual structure

The Hero section MUST display the main title and subtitle centered, full viewport height.

**Scenario: Hero renders on landing**
- GIVEN el usuario visita `/`
- WHEN la página carga
- THEN ve un Hero de 100vh con fondo DEEP SPACE
- AND el texto "Software Architect by day." en SPACE MONO bold
- AND "Electronic Composer by night." en SPACE MONO bold
- AND "Both, obsessively." en SPACE MONO (tamaño menor)
- AND un scroll indicator animado abajo

**Scenario: Responsive**
- GIVEN el viewport es mobile
- WHEN se renderiza el Hero
- THEN H1 es 36px (vs 56-72px en desktop)
- AND el texto no se corta horizontalmente

#### Requirement: Hero entrance animation

The Hero MUST animate in on page load using GSAP.

**Scenario: Title entrance sequence**
- GIVEN la página acaba de cargar
- WHEN pasan 600ms
- THEN el título principal ha hecho fade in + slide up desde y: 100px en 1000ms
- AND el subtítulo aparece 500ms después con fade in
- AND el scroll indicator aparece al final con opacity 0→1 pulsante

### DISEÑO

```
src/components/sections/Hero.tsx    ← Componente 'use client' con GSAP
src/app/page.tsx                     ← Importar Hero como primera sección
src/lib/animations/easing-functions.ts  ← Curvas de easing compartidas
```

---

## Cambio 2: About + Timeline

### PROPUESTA

```yaml
intent: Sección narrativa About + Timeline visual
in_scope:
  - About.tsx con texto de historia personal
  - Timeline.tsx con hitos cronológicos
  - Datos en src/content/timeline.json
  - Entrance animations (sin scroll-trigger, solo on-load)
out_scope:
  - Animaciones scroll-linked (Cambio 5)
  - Contenido real del About (lo escribe el usuario)
```

---

## Cambio 3: Projects Grid

### PROPUESTA

```yaml
intent: Grid de proyectos de software + música
in_scope:
  - SoftwareProjects.tsx con grid de cards
  - MusicProjects.tsx con releases
  - ProjectCard.tsx componente reutilizable
  - src/content/projects.json + src/content/music/releases.json
  - Hover states básicos (CSS)
out_scope:
  - Three.js visualizer
  - Spotify API integration (Cambio 8)
```

---

## Cambio 4: Contact + Footer

### PROPUESTA

```yaml
intent: Formulario de contacto + footer
in_scope:
  - ContactForm.tsx con react-hook-form + zod
  - API route /api/contact (Resend)
  - Footer.tsx con links sociales
out_scope:
  - Micro-animaciones de focus (Cambio 5)
```

---

## Cambio 5: Smooth Scroll + GSAP Entrances

### PROPUESTA

```yaml
intent: Conectar Lenis + ScrollTrigger para animaciones narrativas
in_scope:
  - SmoothScroll.tsx wrapper con Lenis
  - ScrollAnimator.tsx componente genérico
  - useScrollTrigger hook
  - useParallax hook
  - Entrance animations en TODAS las secciones
out_scope:
  - Three.js (Cambio 7)
  - Audio (Cambio 9)
```

---

## Cambio 6: Navigation + Header

### PROPUESTA

```yaml
intent: Navegación global con anchor links + indicador de sección activa
in_scope:
  - Header.tsx con logo + nav links
  - Indicador de sección activa (Intersection Observer)
  - Smooth scroll a anchors
  - Mobile hamburger menu
```

---

## Cambio 7: Three.js Hero Particles

### PROPUESTA

```yaml
intent: Partículas 3D interactivas en el Hero
in_scope:
  - React Three Fiber setup
  - ParticleField.tsx con 100-200 partículas
  - Mouse tracking hook
  - Performance: lazy load, 60fps
  - Mobile fallback (desactivar en móviles lentos)
```

---

## Cambio 8: Spotify Release Section

### PROPUESTA

```yaml
intent: Sección inmersiva para el lanzamiento del 17 Julio
in_scope:
  - Countdown timer reactivo
  - Album art showcase con partículas en órbita
  - Waveform visualization (SVG/Canvas)
  - CTAs: pre-add, follow, share
  - Mouse tracking effects
  - Sección completa FULL-SCREEN
```

---

## Cambio 9: Audio System

### PROPUESTA

```yaml
intent: Sistema de sonido ambiente + micro-interacciones
in_scope:
  - Web Audio API wrapper (playSound)
  - Ambient soundscape en Hero y Spotify section
  - Interaction sounds (hover, click, submit)
  - Audio controls (mute/unmute)
  - prefers-reduced-motion support
```

---

## Cambios 10-13+

Ver `MASTERPLAN_BRIKMAN_PAUL_MORALES.md` para especificaciones detalladas de Blog, Performance, Advanced Features.

---

## Cómo Ejecutar Cada Cambio

Cada cambio sigue este proceso:

1. **Yo propongo** el cambio en SDD (proposal + spec + design + tasks)
2. **Vos reviewás** y aprobás o ajustás
3. **Implementamos** juntos con `sdd-apply`
4. **Verificamos** contra los escenarios de la spec
5. **Archivamos** y pasamos al siguiente

No hay presión de hacer todo de una vez. Cada cambio es autónomo, deployable y te da dopamina al verlo funcionando.
