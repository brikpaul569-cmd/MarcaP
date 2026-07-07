# MASTERPLAN: BRIKMAN PAUL MORALES
## Marca Personal Inmersiva: Software Engineering × Progressive House Music

**Documento de Estrategia Completa**  
**Versión 1.0**  
**Última actualización: Julio 2026**

---

## ÍNDICE

1. [Visión y Propósito](#visión-y-propósito)
2. [Identidad de Marca](#identidad-de-marca)
3. [Estrategia de Contenido y Experiencia](#estrategia-de-contenido-y-experiencia)
4. [Arquitectura del Sitio](#arquitectura-del-sitio)
5. [Arquitectura Técnica](#arquitectura-técnica)
6. [Experiencia Visual: Sección por Sección](#experiencia-visual-sección-por-sección)
7. [Experiencia Musical y Sonora](#experiencia-musical-y-sonora)
8. [Sistema de Animaciones](#sistema-de-animaciones)
9. [Integración Three.js y WebGL](#integración-threejs-y-webgl)
10. [Roadmap de Desarrollo](#roadmap-de-desarrollo)
11. [Buenas Prácticas y Convenciones](#buenas-prácticas-y-convenciones)
12. [Benchmarking y Referencias](#benchmarking-y-referencias)

---

## VISIÓN Y PROPÓSITO

### El Concepto Central

**"Un continuum digital donde la arquitectura de código y la arquitectura sonora convergen en una experiencia sensorial única."**

Brikman Paul Morales no es solo un desarrollador o productor musical. Es un **arquitecto de experiencias** que fusiona:
- **Lógica**: Full Stack Development, IA, Spring Boot, Angular, Next.js
- **Emoción**: Progressive House, creación musical, producción en Spotify
- **Sensorialidad**: Cinemática visual, interactividad táctil, sonido envolvente

### Objetivo Primario

No buscar empleo. Crear una marca tan distintiva y memorable que cuando alguien vea `brikmanpaul.dev` piense:

> *"Este tipo hace cosas que nunca había visto. ¿Qué me está por mostrar?"*

### Promesa de la Marca

1. **Innovación Sensorial**: Cada interacción es diseñada deliberadamente para sorprender
2. **Autenticidad**: Muestra real quién eres (developer + artista), no una versión filtrada
3. **Mastercraft**: Calidad de ejecución comparable con estudios de Awwwards
4. **Coherencia**: Visual, sonora, interactiva y narrativa son inseparables

---

## IDENTIDAD DE MARCA

### 1. Paleta de Colores

#### Colores Primarios (Identidad Core)

```
DEEP SPACE BLUE      #0F1419
Uso: Fondo principal, base oscura
- Profundidad digital
- Evoca el espacio, minimalismo, sofisticación
- Evita el puro negro (#000) para mantener warmth digital

NEON CYAN            #00D9FF
Uso: Acentos, CTA, interactividad
- Contraste máximo sobre DEEP SPACE
- Evoca síntesis, futurismo, energía
- Referencia: Synthwave, cyberpunk premium
- Comunica: "Tech forward", inovación

WARM AMBER           #FFB800
Uso: Acentos secundarios, "humanidad"
- Contraste con cyan, crea balance visual
- Representa lo analógico, lo humano dentro de lo digital
- Evoca: Calor, creatividad, music production
- Aplicación: Highlights, detalles en música

PULSING MAGENTA      #FF00FF
Uso: Énfasis emocional, transiciones
- Puente entre cyan y amber
- Energía, movimiento, danza
- Aplicación: Hover states, animaciones de impacto
- Referencia: Progressive house visual aesthetic
```

#### Colores Secundarios (Contexto)

```
DARK GREY            #1A1F2E
Uso: Elementos secundarios, containers
- Contraste sutil con DEEP SPACE
- Separación visual sin ruptura

LIGHT GREY           #E8EAED
Uso: Tipografía principal, elementos claros
- Alto contraste para accesibilidad
- Limpieza y claridad

ACCENT BLUE          #4A90FF
Uso: Enlaces, información adicional
- Más suave que NEON CYAN
- Para áreas menos críticas visualmente

DEEP MAGENTA         #8B00FF
Uso: Gradientes, overlays
- Versión más oscura de PULSING MAGENTA
- Profundidad en transiciones
```

#### Paleta de Gradientes (Experiencias Emocionales)

```
1. CYBER PULSE
   Linear: NEON CYAN → PULSING MAGENTA
   Ángulo: 135deg
   Uso: Hero, transiciones críticas
   Sensación: Energía, futuro inmediato

2. SONIC WAVE
   Linear: WARM AMBER → NEON CYAN
   Ángulo: 45deg
   Uso: Secciones musicales
   Sensación: Frecuencias, vibración

3. DEPTH VOID
   Radial: CENTER (DEEP SPACE) → EDGE (DEEP MAGENTA)
   Uso: Backgrounds, efectos de profundidad
   Sensación: Inmersión, espacio infinito

4. HUMAN TOUCH
   Linear: WARM AMBER → DEEP SPACE
   Ángulo: 180deg
   Uso: Transiciones suaves, secciones reflexivas
   Sensación: Calidez, introspección
```

#### Justificación de la Paleta

La paleta NO es accidental. Responde a:

**Visual Strategy**:
- DEEP SPACE + NEON CYAN = Referencia directa a la estética Premium Tech/Synthwave
- WARM AMBER = Humaniza lo digital (tú eres más que código)
- PULSING MAGENTA = Lienzo musical (frecuencias, ritmo, vibración)

**Psicología del Color**:
- Azul profundo: Confianza, sofisticación, estabilidad técnica
- Cyan: Innovación, futuro, energía positiva
- Amber: Calidez, creatividad, inclusión
- Magenta: Emoción, movimiento, danza

**Precedentes**:
- Locomotive: Tipografía + espacios negativos
- Active Theory: Gradientes fluidos como metáfora
- Noir Pixel: Minimalismo + acentos atrevidos
- Resn: Profundidad mediante color y movimiento

---

### 2. Tipografía

#### Fuentes Seleccionadas

```
HEADING (H1, H2, H3)
Nombre: SPACE MONO BOLD
Fallback: Courier Prime
Peso: 700
Tamaño: Variable (fluido)
Característica: Monoespaciada, geométrica, técnica
Justificación: 
  - Comunica precisión y código
  - Referencia a terminal/desarrollo
  - Distinguible, memorable
  - Funciona bien en pantallas (sans-serif pura)
Aplicación:
  - Títulos de secciones
  - Navegación principal
  - Números, datos técnicos

BODY (Párrafos, contenido)
Nombre: INTER
Fallback: System Stack (-apple-system, BlinkMacSystemFont, segoe ui)
Peso: 400, 500
Tamaño: 16px base (fluido)
Características: Clean, accesible, 5 pesos disponibles
Justificación:
  - Diseñada para pantallas digitales (Raskin)
  - Excelente legibilidad en cuerpos largos
  - Neutral pero con personalidad
  - Múltiples pesos para jerarquía
Aplicación:
  - Body copy
  - Descripciones
  - Textos extensos
  - Subtítulos

ACCENT / LABEL
Nombre: JETBRAINS MONO
Fallback: Monaco
Peso: 500, 600
Tamaño: 12-14px
Características: Monoespaciada técnica, legible
Justificación:
  - Refuerza la identidad "developer"
  - Perfecta para tags, labels, código
  - Familiar para programadores
Aplicación:
  - Tech stack labels
  - Años en timeline
  - Badges, tags
  - Código snippets
  - Detalles técnicos
```

#### Sistema de Tipografía (Scale)

```
Display/Hero
H1: 56-72px / Line-height: 1.2 / Weight: 700 (SPACE MONO)
Uso: Hero title, sección principal

Section Title
H2: 36-48px / Line-height: 1.3 / Weight: 700 (SPACE MONO)
Uso: Títulos de secciones principales

Subsection
H3: 24-32px / Line-height: 1.4 / Weight: 700 (SPACE MONO)
Uso: Subtítulos, títulos de tarjetas

Heading 4
H4: 18-20px / Line-height: 1.4 / Weight: 500 (INTER)
Uso: Heading de contenido, titles menores

Body Large
p.lg: 18px / Line-height: 1.6 / Weight: 400 (INTER)
Uso: Lead paragraphs, introductoria

Body Regular
p: 16px / Line-height: 1.6 / Weight: 400 (INTER)
Uso: Contenido principal

Body Small
p.sm: 14px / Line-height: 1.6 / Weight: 400 (INTER)
Uso: Descripciones, metadata

Caption
span.caption: 12px / Line-height: 1.4 / Weight: 500 (JETBRAINS MONO)
Uso: Labels, tags, badges

Code
code: 13px / Line-height: 1.5 / Weight: 500 (JETBRAINS MONO)
Uso: Inline code, snippets
```

#### Reglas Tipográficas

**Jerarquía Visual**:
- H1 siempre SPACE MONO, peso 700
- Body siempre INTER, weight 400
- Números/técnico siempre JETBRAINS MONO

**Contraste de Colores**:
- Sobre DEEP SPACE BLUE: usar LIGHT GREY (#E8EAED)
- Sobre NEON CYAN: usar DEEP SPACE BLUE (#0F1419)
- Sobre WARM AMBER: usar DEEP SPACE BLUE (#0F1419)

**Espaciado**:
- Letter-spacing: 0 (default INTER)
- Letter-spacing: 0.05em para SPACE MONO en H1
- Letter-spacing: 0.1em para JETBRAINS MONO en labels

**Responsive**:
- H1: 56px (desktop) → 36px (mobile)
- H2: 48px (desktop) → 28px (mobile)
- Body: 16px (desktop) → 15px (mobile)

---

### 3. Moodboard y Refrencias Visuales

#### Inspiración: Estudios y Trabajos Premium

```
LOCOMOTIVE STUDIOS
├─ Referencia: Uso de scroll como narración
├─ Elemento clave: Smooth scroll con GSAP + ScrollTrigger
├─ Aplicación en Brikman:
│  └─ Cada sección entra de manera narrativa
│  └─ El contenido responde al scroll como en una película
├─ Visual: Espacios negativos, tipografía bold
└─ Sensación: "Cinematic web"

ACTIVE THEORY
├─ Referencia: Gradientes fluidos, transformaciones suaves
├─ Elemento clave: Motion values, color shifts dinámicos
├─ Aplicación en Brikman:
│  └─ Gradientes que cambian según scroll
│  └─ Transiciones suaves entre secciones
├─ Visual: Colores vibrantes, geometrías fluidas
└─ Sensación: "Organic motion"

NOIR PIXEL
├─ Referencia: Minimalismo + acentos atrevidos
├─ Elemento clave: Uso restringido de color, impacto máximo
├─ Aplicación en Brikman:
│  └─ Fondo oscuro (DEEP SPACE)
│  └─ Acentos NEON CYAN puntuales y efectivos
├─ Visual: Mucho espacio negativo, tipografía grande
└─ Sensación: "Elegant minimalism"

CUBERTO
├─ Referencia: Tipografía oversize, composición audaz
├─ Elemento clave: Escala, peso visual
├─ Aplicación en Brikman:
│  └─ H1 muy grandes en hero
│  └─ Uso de oversize para títulos de proyectos
├─ Visual: Bold, confident, clear
└─ Sensación: "Confident design"

DOGSTUDIO
├─ Referencia: Interactividad micro, respuesta a mouse
├─ Elemento clave: Particles, trails, mouse tracking
├─ Aplicación en Brikman:
│  └─ Partículas en sección de música
│  └─ Trails del mouse
├─ Visual: Detalle, sorpresa, engagement
└─ Sensación: "Playful intelligence"

RESN
├─ Referencia: Narrativa visual profunda, tema/concepto fuerte
├─ Elemento clave: Coherencia total entre contenido y forma
├─ Aplicación en Brikman:
│  └─ Cada sección cuenta una historia
│  └─ El diseño refuerza el mensaje
├─ Visual: Fuerte, memorable, único
└─ Sensación: "Storytelling first"
```

#### Estética Visual General

```
ARQUITECTURA VISUAL
├─ Ratio 16:9 para compositions (cineático)
├─ Espacios negativos generosos (breathing room)
├─ Tipografía como elemento gráfico (no solo texto)
├─ Movimiento constante pero no caótico
├─ Contraste alto (accesibilidad + impacto)
└─ Simetría rota (dinamismo)

LENGUAJE VISUAL
├─ Lineal: Líneas delgadas para separación, dirección
├─ Orgánico: Curvas en transiciones, animaciones
├─ Geométrico: Cuadrados, círculos para elementos UI
├─ Digital: Gradientes, glow, efectos de luz
└─ Temporal: El movimiento es forma

COMPOSICIÓN
├─ Grid 12 columnas (Tailwind standard)
├─ Máx. ancho: 1440px (para contenido)
├─ Padding: 80px (desktop) / 40px (mobile)
├─ Gutter: 32px (desktop) / 16px (mobile)
├─ Profundidad mediante z-index + transform
└─ Air: El espacio blanco tiene valor
```

---

### 4. Storytelling y Narrativa

#### Acto I: El Misterio (Hero → Intro)

**Pregunta Central**: *"¿Quién es Brikman Paul Morales?"*

La página comienza con ambigüedad intencional. El usuario no sabe si está en el portfolio de un developer, un productor musical, o algo completamente diferente. Esto genera curiosidad.

**Sensación**: Intriga, sofisticación, anticipación

**Elementos**:
- Título enigmático (no simplemente "Full Stack Developer")
- Soundscape ambient (sin voces)
- Partículas o geometrías en movimiento
- Scroll requerido para entender la propuesta

#### Acto II: La Revelación (About → Timeline)

**Pregunta Central**: *"¿Cómo fusiona alguien desarrollo y música?"*

Se revela gradualmente:
1. Tu historia personal
2. El cruce entre code y sound
3. Tu filosofía: arquitectura = composición

**Sensación**: Comprensión, admiración, resonancia emocional

**Elementos**:
- Timeline visual que mezcla hitos técnicos y musicales
- Textos que explican la intersección
- Visuales que refuerzan "continuidad entre mundos"
- Posiblemente video o secuencia cinemática

#### Acto III: La Prueba (Projects)

**Pregunta Central**: *"¿Qué evidencia tienes de que esto es real?"*

Demostración: Proyectos técnicos Y proyectos musicales, ambos con la misma calidad obsesiva.

**Sensación**: Inspiración, validación, "wow"

**Elementos**:
- Proyectos destacados con contexto
- Screenshots, videos, live demos donde es posible
- Testimonios o datos (stars, listening numbers, etc.)
- Interactividad (hover states ricos, transiciones)

#### Acto IV: La Invitación (CTA + Spotify Release + Contact)

**Pregunta Central**: *"¿Qué sigue? ¿Cómo interactúo con esto?"*

Múltiples CTAs:
- Escuchar tu música en Spotify (17 de julio)
- Explorar código en GitHub
- Colaborar via email
- Seguir en redes

**Sensación**: Posibilidad, apertura, "qué viene después"

**Elementos**:
- Spotify release showcase (cinemático)
- Email contact con micro-interacciones
- Links a GitHub, sociales
- Posiblemente newsletter signup

#### Narrativa Emocional Subrayada

```
VIAJE DEL USUARIO
├─ Entrada: "¿Quién es?"
├─ Desarrollo: "Wow, entiendo ahora"
├─ Clímax: "Esto es increíble"
├─ Resolución: "¿Cómo puedo participar?"
└─ Salida: "Seguiré este proyecto"

PROMESA EN CADA ACTO
├─ Acto I: "Hay algo especial aquí"
├─ Acto II: "Lo entiendo y me emociona"
├─ Acto III: "Es realmente válido"
└─ Acto IV: "Quiero ser parte de esto"
```

---

### 5. Personalidad de Marca (Tone of Voice)

#### En Texto

```
NO somos:
├─ Corporate (demasiado formal)
├─ Casual demás (demasiado familiar)
├─ Técnico puro (inaccesible)
├─ Artístico puro (poco profesional)
└─ Arrogante (aunque somos buenos)

SÍ somos:
├─ Claridad sin condescendencia
├─ Confianza sin arrogancia
├─ Técnico pero accesible
├─ Apasionado pero profesional
├─ Único pero relatable
└─ Forward-thinking pero human
```

#### Ejemplos de Tone

**Hero Headline**: 
❌ "Full Stack Developer & Music Producer"
❌ "Welcome to my mind"
✅ "Software architect by day. Electronic composer by night. Both, obsessively."

**About Section Opening**:
❌ "I am a developer with X years of experience..."
❌ "I code and make music because I'm cool"
✅ "I've come to realize that architecture lives everywhere. In code. In composition. In the spaces between moments."

**Project Description**:
❌ "Built with React, Node.js, MongoDB"
✅ "An AI system trained on 50K electroacoustic signals. The interface is a sonified data explorer where every interaction is a note."

#### Principios Narrativos

1. **Específico, no genérico**: Evitar clichés de "passionate developer"
2. **Sensorial**: Usar lenguaje que apele a los sentidos
3. **Coherencia**: El tone refleja la paleta de colores y movimiento
4. **Honestidad**: Mostrar genuino interés, no performatividad
5. **Brevedad**: Cada palabra cuenta; menos es más

---

### 6. Sistema de Animaciones (Visión General)

#### Principios de Movimiento

```
FILOSOFÍA DE MOVIMIENTO
├─ Propósito: Cada animación comunica algo
├─ Timing: 300-600ms para interacciones normales
├─ Easing: cubic-bezier personalizado (no ease-in-out lineal)
├─ Microinteractions: Feedback inmediato, imperceptible pero satisfactorio
├─ Cinemática: Largo > corto. Fluido > snappy (excepto CTAs)
└─ Respeto: No abrumar; animar lo importante
```

#### Familia de Animaciones

```
1. ENTRANCE ANIMATIONS
   - Elementos entran al viewport con propósito
   - Timing: 600-800ms
   - Easing: cubic-bezier(0.34, 1.56, 0.64, 1) [slight bounce]
   - Ejemplo: Fade in + slide up

2. SCROLL-BASED ANIMATIONS
   - Elementos responden al scroll
   - Powered by GSAP ScrollTrigger
   - Parallax sutil, revelación progresiva
   - Ejemplo: Título que se revela conforme scrolls

3. HOVER INTERACTIONS
   - Buttons, links, cards responden al hover
   - Timing: 300ms
   - Easing: cubic-bezier(0.4, 0, 0.2, 1)
   - Ejemplo: Scale + color shift

4. CLICK/PRESS ANIMATIONS
   - Feedback táctil en mobile y desktop
   - Timing: 150ms
   - Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
   - Ejemplo: Scale down + color flash

5. TRANSITION ANIMATIONS
   - Entre secciones o vistas
   - Timing: 800-1000ms
   - Easing: cubic-bezier(0.4, 0, 0.2, 1)
   - Ejemplo: Fade + blur out, fade + blur in

6. GENERATIVE/CONTINUOUS ANIMATIONS
   - Partículas, "respiración" de elementos
   - Timing: 3-5 segundos
   - Easing: ease-in-out (suave, hypnotic)
   - Ejemplo: Partículas danzando, gradientes fluyendo

7. PARALLAX & DEPTH
   - Capas moviéndose a diferentes velocidades
   - Powered by Lenis + ScrollTrigger
   - Crea ilusión de profundidad
   - Ejemplo: Background se mueve lento, texto rápido
```

#### Curvas de Easing Personalizadas

```
CUBIC_BEZIERS = {
  // Snappy, modern
  "sharp": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  
  // Smooth, bouncy
  "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
  
  // Cinematic ease-in-out
  "cinematic": "cubic-bezier(0.4, 0, 0.2, 1)",
  
  // Elastic feel
  "elastic": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  
  // Slow entrance
  "slowEntry": "cubic-bezier(0.17, 0.67, 0.83, 0.67)",
  
  // Back to top (easing in and out)
  "backEase": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
}
```

---

### 7. Inspiración Visual Final

#### Referencias por Elemento

```
HERO SECTION
├─ Inspiración: Active Theory (gradientes fluidos)
├─ + Dogstudio (micro-interactividad)
├─ Resultado: Entrada épica pero no abrumadora

TIMELINE
├─ Inspiración: Locomotive (narrativa via scroll)
├─ + Cuberto (escala, boldness)
├─ Resultado: Cronología visual

PROJECTS GRID
├─ Inspiración: Noir Pixel (minimalismo + contraste)
├─ + Resn (narrativa visual)
├─ Resultado: Showcase limpio pero impactante

SPOTIFY SECTION
├─ Inspiración: Dogstudio (interactividad sensorial)
├─ + Active Theory (motion value animations)
├─ Resultado: Experiencia inmersiva pre-release

BLOG/ARTICLES
├─ Inspiración: Locomotive (long-form reading experience)
├─ + Typography as design
├─ Resultado: Content que se siente premium

CONTACT
├─ Inspiración: Cuberto (directness, clarity)
├─ + Micro-interactions (satisfacción)
├─ Resultado: Formulario que no se siente como spam
```

---

## ESTRATEGIA DE CONTENIDO Y EXPERIENCIA

### 1. Ejes de Contenido

#### Eje 1: Código & Arquitectura

```
TEMA CENTRAL: "Architecture as Craftsmanship"

Historias a contar:
├─ Cómo aprendiste a pensar en sistemas
├─ Evolución técnica (Java → Spring Boot → Next.js)
├─ Filosofía de código limpio y escalable
├─ Proyectos que demuestran mastery
└─ Open source contributions (si los hay)

Formatos:
├─ Project showcases (con context, no solo capturas)
├─ Blog deep-dives en arquitectura
├─ Code philosophy articles
├─ "Learn from my mistakes" posts
└─ Técnica + storytelling
```

#### Eje 2: Música & Producción

```
TEMA CENTRAL: "Sound Design as Data Sculpting"

Historias a contar:
├─ Journey hacia Progressive House
├─ Cómo la música te hace mejor developer
├─ Filosofía detrás del sonido
├─ Release (17 de julio) como centerpiece
├─ Proceso creativo: de concepto a distribución
└─ Sonic branding de tu marca

Formatos:
├─ Spotify release showcase (cinemático)
├─ Behind-the-scenes de producción
├─ Blog sobre proceso creativo
├─ Audio essays (posiblemente)
├─ Interactive sound visualization
└─ "Music tech" intersection posts
```

#### Eje 3: IA & Innovación

```
TEMA CENTRAL: "Intelligence at the Intersection"

Historias a contar:
├─ Proyectos de IA que has construido
├─ Cómo IA + music es un territorio inexplorado
├─ Reflexiones sobre el futuro
├─ Ethical AI, responsible innovation
└─ Herramientas y técnicas

Formatos:
├─ Project showcases
├─ Technical writeups
├─ Experimental demos
├─ Blog: "AI in [domain]"
└─ Tools / resources shared
```

### 2. Experiencia Emocional por Sección

```
LANDING
├─ Emoción: Intriga, anticipación
├─ Sensación: "¿Qué es esto?"
├─ Rol: Hook, invitation

ABOUT (HISTORIA)
├─ Emoción: Empatía, inspiración
├─ Sensación: "Entiendo tu viaje"
├─ Rol: Connection, context

TIMELINE
├─ Emoción: Admiración, momentum
├─ Sensación: "Wow, mira cómo ha evolucionado"
├─ Rol: Credibility, progression

SOFTWARE PROJECTS
├─ Emoción: Asombro técnico
├─ Sensación: "¿Cómo hizo eso?"
├─ Rol: Proof of skill, inspiration

MUSIC PROJECTS
├─ Emoción: Inspiración artística, conexión emocional
├─ Sensación: "Esto me toca emocionalmente"
├─ Rol: Humanization, artistry proof

AI PROJECTS
├─ Emoción: Futurismo, posibilidad
├─ Sensación: "El futuro es ahora"
├─ Rol: Innovation showcase

SPOTIFY RELEASE
├─ Emoción: Éxtasis, anticipación
├─ Sensación: "Quiero escuchar esto"
├─ Rol: Main CTA, release countdown

BLOG
├─ Emoción: Aprendizaje, reflexión
├─ Sensación: "Esto es valioso"
├─ Rol: Thought leadership, SEO, community

CONTACT
├─ Emoción: Apertura, posibilidad colaborativa
├─ Sensación: "Puedo llegar a esta persona"
├─ Rol: Conversion point
```

---

## ARQUITECTURA DEL SITIO

### Mapa de Sitio Completo

```
BRIKMANPAUL.DEV
│
├─ / (LANDING)
│  └─ Hero
│     └─ Interactive intro sequence
│        Temas: Code + Music + IA
│        Duración visual: 8-12 segundos
│        CTA: "Explore my world" (scroll indicator)
│
├─ /#about (ABOUT / STORY)
│  └─ Narrative section
│     └─ "Who is Brikman Paul Morales?"
│     └─ Your origin story
│     └─ Why code + music?
│     └─ Philosophy section
│     Duración lectura: 3-5 minutos
│
├─ /#timeline (TIMELINE)
│  └─ Visual chronology
│     └─ 2015 - First code line
│     └─ 2018 - First music production
│     └─ 2020 - First AI project
│     └─ 2023 - Fusion moment
│     └─ 2024 - Public release
│     └─ 2025 - Current momentum
│     └─ 2026 - What's next?
│     Interactive: Hover over years, see details
│
├─ /#software (SOFTWARE ENGINEERING)
│  └─ Project grid / list
│     └─ 4-6 flagship projects
│        Cada uno con:
│        - Screenshot / video
│        - Title + tagline
│        - Tech stack
│        - Result / impact
│        - CTA (view code / live demo)
│
│     Proyectos sugeridos:
│     ├─ "Architecture project" (Spring Boot + design)
│     ├─ "Full stack SaaS" (Next.js, design, UX)
│     ├─ "Real-time application" (Socket.io, performance)
│     ├─ "Data visualization" (React, Three.js)
│     ├─ "Mobile-first app" (Angular, responsive)
│     └─ "Experimental project" (cutting edge tech)
│
├─ /#music (MUSIC PRODUCTION)
│  └─ Music portfolio
│     └─ Featured releases
│     └─ Spotify integration
│     └─ Behind-the-scenes
│     └─ Equipment / tools used
│     └─ Production philosophy
│
│     Key elements:
│     ├─ Current Spotify stats
│     ├─ Featured tracks (embeds)
│     ├─ Production timeline
│     └─ Genre deep-dive (Progressive House)
│
├─ /#spotify-release (RELEASE: [TRACK NAME])
│  └─ EPIC SECTION (Centro del universo visual)
│     └─ Release date: July 17, 2026
│     └─ Countdown timer
│     └─ Animated visualizer
│     └─ Waveform visualization
│     └─ Behind-the-scenes video
│     └─ About the track
│     └─ Pre-add to playlist CTAs
│
│     Visual strategy:
│     ├─ Full-screen immersive
│     ├─ Responds to scroll (background reacts)
│     ├─ Mouse tracking (particles)
│     ├─ Soundscape (ambient, not intrusive)
│     └─ Countdown pressure (urgency, FOMO)
│
├─ /#ai (ARTIFICIAL INTELLIGENCE)
│  └─ IA projects & experiments
│     └─ 2-3 featured projects
│     └─ Each with visualization
│     └─ Technical writeups
│     └─ Results / learnings
│     └─ Ethical considerations
│
├─ /blog (BLOG)
│  └─ Article list
│     └─ 8-12 initial articles
│     └─ Categories: Code / Music / AI / Thoughts
│     └─ Search functionality
│     └─ Tags system
│
│  └─ /blog/[slug] (Individual article)
│     └─ Long-form content
│     └─ Table of contents
│     └─ Code snippets with syntax highlighting
│     └─ Related articles
│     └─ Comment section (Disqus, Giscus)
│     └─ Share buttons
│
├─ /#contact (CONTACT)
│  └─ Email form
│  └─ Social links
│  └─ Availability status
│  └─ Response time expectation
│  └─ Calendly embed (opcional)
│
├─ /links (LINK TREE)
│  └─ All important links centralized
│     ├─ Spotify
│     ├─ GitHub
│     ├─ LinkedIn
│     ├─ Twitter/X
│     ├─ Instagram
│     └─ Newsletter signup
│
├─ /uses (GEAR & TOOLS)
│  └─ Equipment list
│     ├─ Development setup
│     ├─ Music production gear
│     ├─ Software licenses
│     └─ Recommended resources
│
└─ /sitemap.xml
   /robots.txt
   /feed.xml (RSS)
```

### Estructura de URLs

```
Protocol: https
Domain: brikmanpaul.dev (primary)

Navigation Strategy:
├─ Anchor-based for main sections (smooth scroll)
│  └─ /#about, /#timeline, /#software, etc.
│  └─ Reason: Single-page experience, no page reloads
│
├─ Separate routes for scalable content
│  └─ /blog/[slug] - Articles grow over time
│  └─ /projects/[slug] - Project details (optional)
│  └─ /uses - Static content
│  └─ /sitemap - Static content

No:
├─ /portfolio (redundant with /)
├─ /about (use /#about)
├─ /projects (use /#software)
├─ /contact (use /#contact)
```

---

## ARQUITECTURA TÉCNICA

### 1. Stack Tecnológico

```
FRAMEWORK & RUNTIME
├─ Next.js 15 (App Router)
│  └─ Server-side rendering (SSR)
│  └─ Static generation (SSG) donde aplique
│  └─ API routes (serverless)
│  └─ Image optimization (next/image)
│
├─ React 19
│  └─ Functional components (hooks)
│  └─ Server components donde aplique
│  └─ Suspense para async data
│
└─ TypeScript
   └─ Strict mode enabled
   └─ Type safety throughout
```

#### Librerías de Estilo & Animación

```
STYLING
├─ TailwindCSS
│  └─ Custom config (colores de marca, tipografía)
│  └─ Plugins: typography, animation
│  └─ PurgeCSS para production
│
├─ CSS Modules (para overrides complejos)
│  └─ Naming: [Component].module.css
│  └─ BEM methodology
│
└─ CSS Variables (para temas dinámicos)
   └─ :root --color-primary, etc.
   └─ Fallbacks para navegadores antiguos

ANIMACIONES
├─ GSAP (GreenSock Animation Platform)
│  └─ ScrollTrigger plugin (scroll-based animations)
│  └─ Timeline construction
│  └─ Advanced easing
│
├─ Framer Motion
│  └─ React-native animations
│  └─ Gesture support (no necesario pero nice-to-have)
│  └─ Layout animations
│
├─ Lenis (Smooth Scroll)
│  └─ Wrapper para smooth scroll experience
│  └─ GSAP compatible
│  └─ Mobile-friendly
│
└─ Three.js + React Three Fiber
   └─ 3D graphics
   └─ WebGL rendering
   └─ Performance optimization
```

#### Librerías de UI & Utilidades

```
COMPONENT LIBRARY
├─ shadcn/ui (optional pero recomendado)
│  └─ Accessible components
│  └─ Fully customizable
│  └─ Built on Radix UI + Tailwind
│
├─ Radix UI (si no usas shadcn)
│  └─ Unstyled, accessible primitives
│  └─ Popover, Dialog, Dropdown, etc.
│
└─ Headless UI
   └─ Tabs, Disclosure, etc.

UTILITIES
├─ clsx (className utility)
│  └─ Conditional CSS class names
│
├─ tailwind-merge
│  └─ Merge Tailwind classes properly
│
├─ next-themes
│  └─ Dark/light mode toggle (opcional)
│
├─ react-hook-form
│  └─ Form state management
│  └─ Contact form
│
├─ zod o yup
│  └─ Schema validation (forms)
│
└─ lucide-react
   └─ Icon library
   └─ 400+ icons, customizable
```

#### Data & Content

```
CMS / CONTENT
├─ MDX / Markdown
│  └─ Blog posts como archivos MDX
│  └─ Front matter para metadata
│  └─ Syntax highlighting con shiki o prism
│
├─ next/mdx (o contentlayer)
│  └─ Compilación automática de MDX
│  └─ Type-safe content queries
│
└─ Alternativa: Sanity / Strapi (para scalability futura)

ANALYTICS & SEO
├─ next-seo
│  └─ Meta tags, structured data
│  └─ Open Graph, Twitter cards
│
├─ Vercel Analytics
│  └─ Performance metrics
│  └─ Web Vitals tracking
│
├─ Plausible o Fathom
│  └─ Privacy-friendly analytics
│  └─ No cookies pesados
│
└─ Google Search Console
   └─ Indexing monitoring
   └─ Keyword analytics

APIs & INTEGRATIONS
├─ Spotify API
│  └─ Fetch your releases, stats
│  └─ Embed player
│
├─ GitHub API
│  └─ Fetch repos for projects showcase
│  └─ Readme parsing
│
├─ Resend / SendGrid / Mailgun
│  └─ Email form submissions
│  └─ Transactional emails
│
└─ Giscus / Disqus (opcional)
   └─ Comments en blog
```

### 2. Estructura de Carpetas

```
brikmanpaul.dev/
│
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       ├── lighthouse-ci.yml
│       └── test.yml
│
├── .vscode/
│   └── settings.json (shared config)
│
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/
│       ├── fonts/
│       │   ├── space-mono-latin.woff2
│       │   ├── inter-latin.woff2
│       │   └── jetbrains-mono-latin.woff2
│       ├── images/
│       │   ├── og-image.png
│       │   ├── projects/
│       │   │   ├── project-1.webp
│       │   │   └── ...
│       │   └── timeline/
│       │       └── ...
│       └── videos/
│           ├── hero-background.mp4
│           └── spotify-release.mp4
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.tsx (root layout)
│   │   ├── page.tsx (landing / index)
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx (blog list)
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx (article detail)
│   │   │   └── layout.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── contact/route.ts (email submission)
│   │   │   ├── spotify/route.ts (fetch data)
│   │   │   └── blog/route.ts (optional API for blog)
│   │   │
│   │   ├── uses/
│   │   │   └── page.tsx (gear & tools)
│   │   │
│   │   └── links/
│   │       └── page.tsx (link tree)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx (navigation)
│   │   │   ├── Footer.tsx
│   │   │   ├── SmoothScroll.tsx (Lenis wrapper)
│   │   │   └── Navigation.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── SoftwareProjects.tsx
│   │   │   ├── MusicProjects.tsx
│   │   │   ├── AIProjects.tsx
│   │   │   ├── SpotifyRelease.tsx
│   │   │   ├── Blog.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   └── ProjectDetail.tsx
│   │   │
│   │   ├── animations/
│   │   │   ├── ParticleField.tsx (Three.js)
│   │   │   ├── ScrollAnimator.tsx (GSAP trigger)
│   │   │   ├── HeroAnimation.tsx
│   │   │   ├── TimelineAnimation.tsx
│   │   │   └── Visualizer.tsx (audio visualization)
│   │   │
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Link.tsx
│   │   │   ├── CodeBlock.tsx
│   │   │   └── ShareButtons.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── NewsletterForm.tsx
│   │   │   └── FormField.tsx
│   │   │
│   │   └── three/
│   │       ├── Scene.tsx (Three.js scene setup)
│   │       ├── Camera.tsx
│   │       ├── Lights.tsx
│   │       ├── Mesh.tsx (geometric objects)
│   │       └── useFrame.tsx (animation loop)
│   │
│   ├── hooks/
│   │   ├── useScrollTrigger.ts (GSAP wrapper)
│   │   ├── useParallax.ts
│   │   ├── useMouseTracker.ts
│   │   ├── useTheme.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useSpotifyData.ts (fetch Spotify API)
│   │   └── useInView.ts (intersection observer)
│   │
│   ├── lib/
│   │   ├── utils.ts (clsx, cn, etc.)
│   │   ├── constants.ts (siteConfig, colors, etc.)
│   │   ├── metadata.ts (SEO metadata)
│   │   ├── animations/
│   │   │   ├── gsap-config.ts
│   │   │   ├── easing-functions.ts
│   │   │   ├── timeline-utils.ts
│   │   │   └── scroll-animations.ts
│   │   │
│   │   ├── spotify/
│   │   │   ├── client.ts (Spotify API client)
│   │   │   ├── types.ts
│   │   │   └── queries.ts
│   │   │
│   │   ├── github/
│   │   │   ├── client.ts (GitHub API client)
│   │   │   └── types.ts
│   │   │
│   │   ├── email/
│   │   │   ├── templates/
│   │   │   │   ├── contact-confirmation.tsx
│   │   │   │   └── contact-notification.tsx
│   │   │   └── send.ts
│   │   │
│   │   └── validation/
│   │       └── schemas.ts (zod schemas)
│   │
│   ├── content/
│   │   ├── projects.json (o projects.ts)
│   │   ├── blog/
│   │   │   ├── post-1.mdx
│   │   │   ├── post-2.mdx
│   │   │   └── ...
│   │   ├── music/
│   │   │   ├── releases.json
│   │   │   └── equipment.json
│   │   └── timeline.json
│   │
│   ├── styles/
│   │   ├── globals.css (Tailwind, variables, resets)
│   │   ├── animations.css (GSAP + custom animations)
│   │   ├── three.css (Three.js specific)
│   │   └── colors.css (CSS variables for brand colors)
│   │
│   └── types/
│       ├── index.ts (main types)
│       ├── content.ts
│       ├── api.ts
│       └── animations.ts
│
├── .env.local (local secrets)
├── .env.example (public template)
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.js
├── package.json
├── pnpm-lock.yaml (o package-lock.json)
├── README.md
├── DEPLOYMENT.md (instrucciones deploy)
├── ARCHITECTURE.md (este documento)
└── LICENSE
```

### 3. Configuraciones Clave

#### next.config.ts

```typescript
CONFIGURACIONES CRÍTICAS:
├─ Image optimization
│  └─ Formatos: WEBP + PNG fallback
│  └─ Sizes responsivas
│  └─ Lazy loading
│
├─ Font optimization
│  └─ next/font para SPACE MONO, INTER, JETBRAINS
│  └─ Preload críticas
│  └─ Font display: swap
│
├─ Performance
│  └─ Compression: gzip + brotli
│  └─ Code splitting automático
│  └─ Tree-shaking activado
│
├─ Security headers
│  └─ CSP (Content Security Policy)
│  └─ X-Frame-Options
│  └─ X-Content-Type-Options
│
└─ Redirects & rewrites
   └─ Old URLs → new structure
   └─ API route rewrites
```

#### tailwind.config.ts

```typescript
CUSTOMIZACIÓN CRÍTICA:
├─ Colors
│  └─ Importar palette de marca exactamente
│  └─ Crear palettes secundarias
│
├─ Typography
│  └─ font-family para SPACE MONO, INTER, JETBRAINS
│  └─ Letter-spacing personalizado
│
├─ Animation
│  └─ keyframes personalizados
│  └─ Duration presets
│
├─ Spacing
│  └─ Scale personalizada
│
└─ Plugins
   └─ @tailwindcss/typography
   └─ @tailwindcss/forms
   └─ Custom plugins para animaciones
```

#### tsconfig.json

```typescript
CONFIGURACIÓN STRICT:
├─ strict: true (all strict flags)
├─ noImplicitAny: true
├─ strictNullChecks: true
├─ strictFunctionTypes: true
├─ noUnusedLocals: true
├─ noUnusedParameters: true
├─ noImplicitReturns: true
└─ forceConsistentCasingInFileNames: true
```

### 4. Patrones de Desarrollo

#### Convenciones de Nombres

```
COMPONENTES
├─ PascalCase: Hero.tsx, ProjectCard.tsx
├─ Organized by: layout, sections, components, forms, animations
│
FILES & FOLDERS
├─ kebab-case: hero-section, project-card
├─ Carpetas con index.ts/tsx cuando son módulos
│
VARIABLES & FUNCTIONS
├─ camelCase: const animationDuration = 300
├─ Boolean con "is", "has", "can": isLoading, hasError
├─ Constants con UPPER_SNAKE_CASE: MAX_FILE_SIZE
│
TYPES & INTERFACES
├─ PascalCase: interface ProjectProps, type AnimationConfig
├─ Suffix con "Props": interface HeroProps
├─ Suffix con "State": type AppState
```

#### Component Structure

```typescript
// Template para componentes React

'use client' // Si necesita interactividad

import { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import styles from './ComponentName.module.css'

// 1. TIPOS
interface ComponentNameProps {
  title: string
  className?: string
  children?: ReactNode
  // Props específicas
}

// 2. COMPONENTE
const ComponentName: FC<ComponentNameProps> = ({
  title,
  className,
  children,
}) => {
  // Hooks
  // State
  // Effects
  // Helpers
  
  return (
    <div className={cn('base-classes', className)}>
      {/* JSX */}
    </div>
  )
}

// 3. EXPORT
export { ComponentName }
export type { ComponentNameProps }
```

#### Organización de Hooks

```typescript
// Ubicación: src/hooks/[hookName].ts

import { useEffect, useState, useRef } from 'react'

/**
 * Descripción clara del hook
 * @param {Type} param - Descripción
 * @returns {ReturnType} - Descripción
 */
export function useHookName(param: Type): ReturnType {
  // Lógica
  return value
}
```

#### Pattern: Animaciones con GSAP

```typescript
// Pattern recurrente para scroll animations
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AnimatedSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const element = containerRef.current
    if (!element) return
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 20%',
        scrub: false, // Solo para scroll-linked si necesitas
      },
    })
    
    tl.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
    })
    
    return () => {
      tl.kill() // Cleanup
    }
  }, [])
  
  return <div ref={containerRef}>Content</div>
}
```

---

## EXPERIENCIA VISUAL: SECCIÓN POR SECCIÓN

### 1. LANDING / HERO

#### Estructura Visual

```
┌─────────────────────────────────────┐
│                                     │
│        INTERACTIVE BACKGROUND       │ Altura: 100vh
│        (Partículas, gradientes)     │
│                                     │
│            ┌─────────────┐          │
│            │  MAIN TITLE │          │ Centrado, oversize
│            │ + SUBTITLE  │          │ Animación: Fade in + scale
│            └─────────────┘          │
│                                     │
│             SCROLL INDICATOR        │ Animado, pulsante
│                                     │
└─────────────────────────────────────┘
```

#### Qué Siente el Usuario

**En la entrada (primeros 2 segundos)**:
- Sorpresa: "¿Qué es esto?"
- Intriga: Colores, movimiento, pero no claridad inmediata
- Sofisticación: "Esta página se siente premium"

**Mientras scrollea**:
- Anticipación: "Quiero ver qué sigue"
- Invitación: "Entra, hay más aquí"
- Energía: El fondo responde, se siente vivo

#### Qué Aparece

```
LAYER 1: Background (Background Particle Field)
├─ Three.js scene con geometrías flotantes
├─ Colores: Gradientes CYBER PULSE
├─ Movimiento: Lento, orgánico, flotación
├─ Responsividad: Ligero parallax en mouse

LAYER 2: Main Content (Typography)
├─ H1: "Software Architect by day."
├─ H1 segundaria: "Electronic Composer by night."
├─ H2 (subtitle): "Both, obsessively."
├─ Tipografía: SPACE MONO, bold, 56-72px
├─ Color: LIGHT GREY sobre DEEP SPACE

LAYER 3: CTA / Scroll Indicator
├─ "Explore my world" (subtle text)
├─ Animated arrow / chevron
├─ Color: NEON CYAN pulsante
├─ Efecto: Fade in y down infinitamente
```

#### Cómo Entra

**Timeline de entrada (primera interacción)**:

```
T=0ms: Página carga
├─ Background oscuro instant
├─ Partículas invisible

T=100ms: Fade in background
├─ Duration: 1200ms
├─ Opacity: 0 → 1
├─ Easing: ease-out

T=600ms: Fade + scale título
├─ Duration: 1000ms
├─ H1 entra desde bottom (y: +100px)
├─ Scale: 0.9 → 1
├─ Opacity: 0 → 1
├─ Easing: cubic-bezier(0.34, 1.56, 0.64, 1)

T=1100ms: Subtitle fade in
├─ Duration: 800ms
├─ Opacity: 0 → 1
├─ Stagger: 100ms entre líneas

T=1600ms: Scroll indicator fade in
├─ Duration: 600ms
├─ Opacity: 0 → 1
└─ Inicia animación pulsante
```

#### Cómo Sale (Scroll Down)

**Cuando usuario scrollea hacia abajo**:

```
T=Scroll: 0 (hero visible completamente)
├─ Opacity: 100%
├─ Scale: 100%

T=Scroll: 50vh (half viewport scrolled)
├─ Opacity: 50%
├─ Scale: 95%
├─ Blur: 0px → 2px
├─ ParallaxY: 0 → -50px

T=Scroll: 100vh (hero completely scrolled out)
├─ Opacity: 0%
├─ Scale: 90%
├─ Blur: 5px
├─ Display: none (optimization)
```

#### Animaciones

```
PARTICLE FIELD ANIMATION
├─ Duración: Infinita
├─ Tipo: Floating + rotation
├─ Velocidad: 0.5-1px por frame
├─ Interactividad: Responde a mouse
│  └─ Partículas se acercan a cursor
│  └─ Efecto "attracting" suave
│  └─ Vuelven a posición lentamente
│
TITLE ENTRANCE
├─ Duración: 1000ms
├─ Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
├─ Properties: opacity, transform
│
SCROLL INDICATOR
├─ Duración: 1500ms (loop)
├─ Easing: ease-in-out
├─ Properties: opacity (0.3 ↔ 1), y (0 ↔ 10px)
│
SUBTLE PARALLAX
├─ On scroll: Background moves slower than text
├─ Factor: 0.5 (half speed)
├─ Creates depth illusion
```

#### Sonido (Experiencia Sonora)

```
AMBIENT SOUNDSCAPE (opcional, auto-play muted)
├─ Tipo: Ambient pad (Progressive House vibes)
├─ Duración: 10-15 segundos loop
├─ Volume: Baja (-20dB)
├─ Fade in: 3000ms (muy suave)
├─ Start: Cuando página carga
├─ Unmute: Solo si usuario interactúa
│
DESCUBRIMIENTO: No asume auto-play
├─ Visual indicator: "🔊 Click to sound"
├─ Texto pequeño, subtle
├─ Interactividad: Click = toggle audio + visual feedback
```

---

### 2. ABOUT / STORY

#### Estructura Visual

```
┌──────────────────────────────────────────┐
│  ╔═══════════════════════════════════╗   │
│  ║        YOUR STORY / ABOUT          ║   │
│  ║   Narrative Rich Text Content      ║   │
│  ║                                    ║   │
│  ║  Paragraph 1: Origin               ║   │ Ancho: Max 700px
│  ║  Paragraph 2: Evolution            ║   │ Centrado
│  ║  ...                               ║   │
│  ║                                    ║   │
│  ║  [Quote / Highlight Block]         ║   │
│  ║                                    ║   │
│  ║  Paragraph N: Philosophy           ║   │
│  ║                                    ║   │
│  ║  ┌─────────────────────────────┐   ║   │
│  ║  │  Code + Music = Philosophy  │   ║   │ Visual break
│  ║  └─────────────────────────────┘   ║   │
│  ║                                    ║   │
│  ║  Final thoughts...                 ║   │
│  ╚═══════════════════════════════════╝   │
│                                          │
└──────────────────────────────────────────┘
```

#### Qué Siente el Usuario

**Lectura inicial**:
- Conexión: "Soy más que código, entiendo"
- Admiración: "Su trayectoria es cool"
- Intriga: "¿Cómo junta estas cosas?"

**Mientras scrollea**:
- Profundidad: "Hay pensamiento detrás"
- Resonancia: Algunos párrafos tocan emocionalmente
- Claridad: Entiende la propuesta

#### Qué Aparece

```
HEADER SECTION
├─ Número visible: "01" (pequeño, gris)
├─ Título: "Who is Brikman Paul Morales?"
├─ Subtítulo: Corta frase provocadora
│
BODY CONTENT
├─ Máximo 4-5 párrafos de contexto
├─ Tipografía: INTER, 16-18px
├─ Color: LIGHT GREY
├─ Line-height: 1.6-1.8 (lectura cómoda)
│
HIGHLIGHT / QUOTE BLOCK
├─ Background: DEEP MAGENTA (sutil, 10% opacity)
├─ Borde izquierdo: NEON CYAN (4px)
├─ Contenido: Cita o insight clave
├─ Tipografía: SPACE MONO, 18-20px, italic
│
VISUAL BREAK
├─ Puede ser: Imagen, gráfico, o simplemente espacio
├─ Propósito: Break de lectura, tiempo de procesamiento
```

#### Cómo Entra

```
T=Scroll (sección en 80% viewport):
├─ Header number fade in: 600ms
├─ Title fade in + slide up: 800ms (stagger 100ms)
├─ Body paragraphs: Fade in progresivo
│  └─ Each paragraph: 400ms stagger
│
Overall effect:
├─ Sensación: Revelación gradual
├─ Speed: Moderada, contemplativa
├─ Easing: ease-out
```

#### Cómo Sale

```
T=Scroll (sección sale de viewport):
├─ All elements fade out: 600ms
├─ Blur increases: 0 → 3px
├─ Scale: 100% → 95%
├─ ParallaxY: 0 → -30px (más lento que el scroll)
```

#### Animaciones Especiales

```
TEXT REVEAL (Efecto de subrayado revelan texto)
├─ Línea horizontal bajo H2
├─ Anima de izquierda a derecha
├─ Duración: 1000ms
├─ Easing: ease-out-quad
├─ Starts: Cuando H2 es visible
│
HIGHLIGHT BLOCK FADE
├─ Primero: Background oscuro (0% opacity)
├─ Luego: Fade in a 5-10% opacity
├─ Duración: 800ms
├─ Easing: ease-out
│
WORD-BY-WORD FADE (Opcional)
├─ La cita se anima palabra por palabra
├─ Solo si usuario está atento (hover detect)
├─ Duration: 50ms per word
├─ Create: Cinematic narrative feeling
```

---

### 3. TIMELINE

#### Estructura Visual

```
2015          2018          2021          2024          2027
 │             │             │             │             │
 ├─ First      ├─ First      ├─ Fusion     ├─ Release   ├─ Next
 │  Code Line  │  Track      │  Moment     │  Public    │  Phase
 │             │             │             │             │
 └─────────────┴─────────────┴─────────────┴─────────────┘
         │             │             │
         ┌─────────────┴─────────────┬─────────────┐
         │                           │             │
    [DETAIL]                    [DETAIL]      [DETAIL]
    [TECH STACK]               [AUDIO CLIP]   [VISION]
```

#### Qué Siente el Usuario

**Visualmente**:
- Momentum: "Ha crecido constantemente"
- Coherencia: "Las piezas encajan"
- Futuro: "¿Qué sigue?"

**Interactivamente**:
- Control: Puede explorar los detalles
- Satisfacción: Los detalles aparecen smoothly
- Narrative: Ve la progresión claramente

#### Qué Aparece

```
TIMELINE CONTAINER
├─ Línea horizontal (NEON CYAN, 2px)
├─ Correr todo el viewport horizontalmente
│
TIMELINE POINTS (Anos/Hitos)
├─ Visual: Círculos (6-8px, NEON CYAN)
├─ Text: Año centrado (JETBRAINS MONO, 14px)
├─ Interactividad: Hover = highlight
│
DETAIL CARDS (On click/tap)
├─ Aparecen above/below línea
├─ Contenido:
│  ├─ Título del hito
│  ├─ Descripción (2-3 líneas)
│  ├─ Tech stack (si es dev) o details
│  ├─ Emoji / icon
│  └─ Año en JETBRAINS MONO
│
VISUAL CONNECTIONS
├─ Líneas conectan punto → detalle
├─ Color: WARM AMBER gradualmente a NEON CYAN
├─ Animadas: Se dibujan on appearance
```

#### Cómo Entra

```
ON SCROLL (sección entra en viewport):
├─ Timeline base line fade in: 800ms
├─ Points aparecen uno a uno: 100ms stagger
│  └─ Efecto: Puntaditas en la línea
├─ Years fade in: Con cada punto
│
EFFECT:
├─ Sensación: Timeline siendo revelada
├─ Timing: Deliberado, ceremonial
```

#### Cómo Sale

```
ON SCROLL OUT:
├─ All elements fade out: 600ms
├─ Line shrinks: 100% → 80% width
├─ Points scale down: 1 → 0.5
```

#### Animaciones

```
POINT PULSE
├─ Duración: 2000ms loop
├─ On hover: Amplified pulse
├─ Glow effect: Halo around point
├─ Color: Mantiene NEON CYAN
│
DETAIL CARD REVEAL
├─ Origin: Scale 0.8, opacity 0
├─ Target: Scale 1, opacity 1
├─ Duration: 400ms
├─ Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
│
LINE DRAW
├─ Línea que conecta punto a detail
├─ Animada: stroke-dasharray animation
├─ Duration: 600ms
├─ Easing: ease-out
│
GRADIENT SHIFT (Línea principal)
├─ Gradualmente: Color cambia izq→dcha
├─ WARM AMBER → NEON CYAN
├─ Duration: 3000ms infinite
├─ Effect: Sensación de movimiento temporal
```

---

### 4. SOFTWARE PROJECTS

#### Estructura Visual

```
PROJECTS SECTION
├─ Header: "Software Engineering"
├─ Subheader: "Mastercraft in Motion"
│
PROJECTS GRID
├─ Layout: 2 columnas (desktop) / 1 (mobile)
├─ Gap: 40px
│
┌─────────────────────────────────────┐
│                                     │
│        PROJECT CARD 1               │  Hover: Elevate
│   ┌─────────────────────────────┐   │         Scale 1.05
│   │  [IMAGE/VIDEO]              │   │         Shadow
│   │                             │   │         Text reveals
│   ├─────────────────────────────┤   │
│   │ Title                       │   │
│   │ Tagline: "Built with X,Y"  │   │
│   │                             │   │
│   │ 3 tags: React | TypeScript  │   │
│   │         | GraphQL           │   │
│   │                             │   │
│   │ [View Code] [Live Demo]     │   │
│   └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘

Similar: PROJECT CARD 2, 3, 4, 5, 6
```

#### Qué Siente el Usuario

**Visualmente**:
- Profesionalismo: "Esto es real work"
- Variedad: "Multifacético técnicamente"
- Competencia: "Sabe qué hace"

**Interactivamente**:
- Curiosidad: Quiere ver detalles
- Control: Puede escoger qué explorar
- Inspiración: "Quiero hacer esto también"

#### Qué Aparece

```
PROJECT CARD
├─ VISUAL LAYER
│  ├─ Screenshot / GIF / Video
│  ├─ Aspect ratio: 16:9 (cineático)
│  └─ Border radius: 8px
│
├─ CONTENT LAYER
│  ├─ Title (H3, SPACE MONO, bold)
│  ├─ Tagline (p, INTER, 16px, subtle color)
│  ├─ Description (2-3 líneas, p.sm)
│  │
│  ├─ TECH STACK
│  │  ├─ 3-5 tags pequeños
│  │  ├─ Background: DEEP MAGENTA 20% opacity
│  │  ├─ Texto: JETBRAINS MONO, 12px
│  │  └─ Ejemplos: React, TypeScript, GraphQL
│  │
│  ├─ METRICS (opcional)
│  │  ├─ "500+ users" o "4.8★"
│  │  ├─ Pequeño, JETBRAINS MONO
│  │  └─ Color: WARM AMBER
│  │
│  └─ CTAs
│     ├─ [View Code] (Button primaria)
│     ├─ [Live Demo] (Button secundaria)
│     ├─ [Case Study] (Link)
│     └─ [GitHub] (Icon link)
│
└─ INTERACTIVE LAYER
   ├─ Hover: Card elevates, shadow
   ├─ Image zoom: Suave, 1 → 1.05
   └─ Text reveal: Descripción slide up
```

#### Qué Proyectos Mostrar (Sugerencias)

```
PROJECT 1: "Architecture Foundation"
├─ Tech: Spring Boot, Java, PostgreSQL
├─ Propósito: Demostrar backend mastery
├─ Visual: Diagram, architecture, clean
├─ CTA: "View Code" (GitHub)
│
PROJECT 2: "Next.js SaaS"
├─ Tech: Next.js, TypeScript, Tailwind, Auth
├─ Propósito: Full stack modernidad
├─ Visual: UI/UX showcase
├─ CTA: "Live Demo" (deployed)
│
PROJECT 3: "Real-time Application"
├─ Tech: WebSockets, React, Node.js
├─ Propósito: Performance, concurrency
├─ Visual: Animation, live interaction
├─ CTA: "Live Demo" + "View Code"
│
PROJECT 4: "Data Visualization"
├─ Tech: Three.js, D3.js, React
├─ Propósito: Creative + technical
├─ Visual: Animated 3D or interactive chart
├─ CTA: "Explore" (embedded experience)
│
PROJECT 5: "Mobile-First App"
├─ Tech: Angular, RxJS, NGRX
├─ Propósito: Mobile expertise
├─ Visual: Phone mockup
├─ CTA: "Live Demo" (responsive)
│
PROJECT 6: "AI/ML Experiment"
├─ Tech: Python, TensorFlow, Next.js
├─ Propósito: Cutting edge
├─ Visual: Results, visualization
├─ CTA: "GitHub" + "Blog post"
```

#### Cómo Entra

```
ON SCROLL (projects section visible):
├─ Header fade in + slide up: 800ms
├─ Grid items cascade: 150ms stagger
│  └─ Each: Fade in + scale (0.8 → 1)
│  └─ Duration: 600ms each
├─ Overall effect: Progressive reveal
```

#### Animaciones

```
CARD HOVER STATE
├─ Scale: 1 → 1.05
├─ Shadow: 0 → 0 20px 40px rgba(0,0,0,0.3)
├─ Duration: 300ms
├─ Easing: ease-out
│
IMAGE ZOOM (Inside card on hover)
├─ Scale: 1 → 1.1
├─ Duration: 400ms
├─ Easing: ease-out
│
TEXT REVEAL
├─ Description y CTAs: Opacity 0 → 1
├─ Y: 20px → 0
├─ Duration: 300ms
├─ Delay: 50ms (después del scale)
│
TAG ANIMATION (Hover)
├─ Individual tags: Scale 1 → 1.1
├─ Color: JETBRAINS color → NEON CYAN
├─ Duration: 200ms
├─ Stagger: 30ms
```

---

### 5. MUSIC PROJECTS

#### Estructura Visual

```
MUSIC SECTION
├─ Header: "Sound Architecture"
├─ Subheader: "Electronic Compositions"
│
RELEASES GRID
├─ Layout: 3 columnas (desktop) / 2 (tablet) / 1 (mobile)
├─ Cada item: Album art + details
│
┌──────────────────────────────┐
│                              │
│    [ALBUM ART - 1:1]         │  On hover:
│                              │  - Art zooms
│    Track Name                │  - Play button appears
│    Release Date              │  - Spotify link
│                              │
│    ★★★★★ (Rating/Streams)   │
│    "123K plays"              │
│                              │
│    [SPOTIFY] [DOWNLOAD]      │
│                              │
└──────────────────────────────┘
```

#### Qué Siente el Usuario

**Visualmente**:
- Creatividad: "Es artista de verdad"
- Profesionalismo: "Los releases se ven legítimos"
- Energía: "Esta música tiene groove"

**Sonoramente** (si reproduce):
- Inmersión: "El sonido es de calidad"
- Inspiración: "Quiero escuchar más"
- Conexión: "Esto toca emocionalmente"

#### Qué Aparece

```
FEATURED RELEASE (Grande, principal)
├─ Album artwork (1:1, 400x400px mín)
├─ Waveform visualization (Three.js)
├─ Track info: Name, Release date, BPM
├─ Play button (Spotify embed)
├─ Description: 1-2 párrafos sobre el track
├─ Production details:
│  ├─ Genre: Progressive House
│  ├─ BPM: 128
│  ├─ Key: G minor
│  └─ Mood: [descriptores]
│
RELEASES GRID (Histórico)
├─ 5-8 releases adicionales
├─ Igual estructura pero más compacta
├─ Ordenado: Más reciente primero
│
SPOTIFY STATS (Sección pequeña)
├─ Total followers
├─ Total streams
├─ Top tracks
├─ Visualización: Simple counter, no gráfico
```

#### Cómo Entra

```
ON SCROLL (music section visible):
├─ Header fade in: 600ms
├─ Featured release: Fade in + scale
│  ├─ Duration: 800ms
│  └─ Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
├─ Grid items: Cascade reveal
│  ├─ Stagger: 100ms
│  ├─ Duration: 600ms each
│  └─ Direction: Left to right
├─ Waveform: Draws progressively
│  └─ Stroke-dasharray animation
│  └─ Duration: 1200ms
```

#### Animaciones

```
ALBUM ART HOVER
├─ Scale: 1 → 1.08
├─ Rotation: 0 → 2deg (subtle)
├─ Shadow: Aumenta
├─ Duration: 300ms
│
PLAY BUTTON REVEAL
├─ Opacity: 0 → 1
├─ Scale: 0.8 → 1
├─ Duration: 200ms
│ 
WAVEFORM ANIMATION
├─ Tipo: Growing bars (como Spotify)
├─ Duration: 2000ms infinite (si playing)
├─ Colors: NEON CYAN → WARM AMBER gradient
│
INFO SLIDE UP
├─ Description, stats, details
├─ Y: 20px → 0
├─ Opacity: 0 → 1
├─ Duration: 400ms
├─ Delay: 100ms después del hover
```

---

### 6. AI PROJECTS

#### Estructura Visual

**Similar a SOFTWARE PROJECTS pero con énfasis en visualización y experimentación**

```
AI SECTION
├─ Header: "Intelligence at Play"
├─ Subheader: "Experiments & Implementations"
│
AI PROJECT CARDS (2-3 destacadas)
├─ Layout: Flexible (puede variar)
├─ Cada card:
│  ├─ [VISUALIZATION/GIF]
│  ├─ Title
│  ├─ Problem → Solution narrative
│  ├─ Tech: TensorFlow, Python, LangChain, etc.
│  ├─ Result: Metrics, impact
│  └─ CTAs: GitHub, Blog Post, Try It
```

#### Contenido Sugerido

```
AI PROJECT 1: "Sound Synthesis with ML"
├─ Combine: Music production + IA
├─ Demo: Audio generator trained on your catalog
├─ Tech: TensorFlow, MagentaJS
├─ Visualization: Spectrogram, waveform generator
│
AI PROJECT 2: "Code Quality Analyzer"
├─ Tech: LangChain, OpenAI API
├─ Demo: Paste código, recibe análisis
├─ Features: Bug detection, optimization suggestions
│
AI PROJECT 3: "Generative Art"
├─ Tech: DALL-E API, Three.js
├─ Demo: Interactive canvas
├─ Visualization: 3D rendering of generated imagery
```

---

### 7. SPOTIFY RELEASE (HERO SECTION PARTE 2)

#### Importancia Estratégica

**Esta es una de las secciones más críticas.** Release el 17 de julio es punto de quiebre en tu narrativa. Es donde Software Engineering + Music convergen visiblemente.

#### Estructura Visual

```
┌─────────────────────────────────────────────┐
│                                             │
│    SPOTIFY RELEASE - [TRACK NAME]           │
│                                             │
│    Countdown Timer:                         │
│    ⏰ 15 días, 7 horas, 42 minutos         │
│                                             │
│    ┌──────────────────────────────────┐    │
│    │  [ALBUM ART - 1:1, LARGE]        │    │ Parallax on scroll
│    │                                  │    │ Particles around
│    │  Interactive visual effects      │    │
│    │  (responsive to mouse)           │    │
│    └──────────────────────────────────┘    │
│                                             │
│    ✨ About the Release                    │
│    "A 7-minute journey through..."         │
│                                             │
│    TECHNICAL DETAILS:                      │
│    • Genre: Progressive House               │
│    • BPM: 128                               │
│    • Key: G Minor                           │
│    • Duration: 7:32                        │
│    • Produced: [Tools used]                 │
│                                             │
│    PRODUCTION PHILOSOPHY:                   │
│    "This track explores the space where...  │
│    code architecture meets harmonic..."     │
│                                             │
│    [PRE-ADD TO PLAYLIST]                   │
│    [FOLLOW ON SPOTIFY]                     │
│    [SHARE] [SAVE]                          │
│                                             │
│    Waveform visualization below             │
│    (Interactive, responds to mouse)        │
│                                             │
└─────────────────────────────────────────────┘
```

#### Qué Siente el Usuario

**Inmediatamente**:
- Excitación: "Esta música sale en X días"
- Urgencia: Countdown refuerza FOMO
- Legítima: "Es un release profesional"

**Al explorar**:
- Anticipación: Quiere escucharlo
- Conexión: Entiende la narrativa detrás
- Validación: "Es real, es profesional"

#### Qué Aparece (Detallado)

```
LAYER 1: BACKGROUND
├─ Gradiente animado: CYBER PULSE
├─ Partículas en movimiento
├─ Responsivas a mouse movement
├─ Efecto parallax subtle
│
LAYER 2: COUNTDOWN TIMER
├─ Grande, bold, SPACE MONO
├─ Actualiza cada segundo
├─ Color: NEON CYAN
├─ Sub-text: "UNTIL RELEASE"
│
LAYER 3: ALBUM ARTWORK
├─ Cuadrado perfecto (1:1)
├─ Size: 300x300px (responsive)
├─ Border: 2px NEON CYAN
├─ Shadow: Glow effect
├─ Rotación: Suave, -2 a +2 degrees
│
LAYER 4: PARTICLE ORBIT
├─ Pequeñas partículas orbitan el artwork
├─ Color: WARM AMBER
├─ Responsivas a mouse
│
LAYER 5: CONTENT TEXT
├─ About the release: 2-3 párrafos
├─ Production details: Bulleted
├─ Production philosophy: Italicado, WARM AMBER
│
LAYER 6: WAVEFORM VISUALIZER
├─ SVG or Canvas-based
├─ Represents el audio track
├─ Interactivo: Click para avanzar (preview)
├─ Colors: Gradiente NEON CYAN → PULSING MAGENTA
│
LAYER 7: CTAs
├─ [PRE-ADD TO PLAYLIST] (Primary, cyan)
├─ [FOLLOW] (Secondary, outline)
├─ [SHARE] [SAVE] (Tertiary icons)
```

#### Cómo Entra

```
ON FIRST LOAD:
├─ Background fade in: 1000ms
├─ Album art: Fade in + scale + rotate
│  └─ Duration: 1200ms
│  └─ Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
├─ Countdown starts immediately
│  └─ Ticking visual effect
├─ Particles: Fade in + begin orbit
│  └─ Duration: 1500ms
│  └─ Stagger: 200ms per particle
├─ Text content: Fade in progressively
│  └─ Stagger: 200ms between paragraphs
├─ Waveform: Draws (stroke-dasharray)
│  └─ Duration: 2000ms
```

#### Interactividad Específica

```
MOUSE MOVEMENT (Sección entera)
├─ Partículas: Atraídas suavemente al cursor
│  └─ Max distance: 100px
│  └─ Easing: ease-out
│  └─ Return to orbit: 3000ms after mouse stop
├─ Album art: Rotación adicional basada en mouse
│  └─ Max rotation: 5 degrees
│  └─ Easing: ease-out
│  └─ Sensitivity: 0.05
│
SCROLL INTERACTIONS
├─ Background responde al scroll
│  └─ Parallax: Background moves slower
│  └─ Factor: 0.3
├─ Album art: Parallax adicional
│  └─ Factor: 0.5
│  └─ Slight scale change: 1 → 1.05
│
WAVEFORM HOVER
├─ Cursor over waveform: Tooltip appears
│  └─ Tiempo en el track
│  └─ "Click to preview"
├─ Click en waveform: Scroll el audio (si embed permite)
│
BUTTON HOVER (CTAs)
├─ Primary button: Scale + glow
│  └─ Scale: 1 → 1.05
│  └─ Glow: 0 → 0 0 20px NEON CYAN
│  └─ Duration: 200ms
├─ Secondary button: Underline reveal
│  └─ Left to right
│  └─ Duration: 300ms
```

#### Animaciones Continuas

```
COUNTDOWN TICKER
├─ Cada segundo: Parpadea y actualiza
├─ Efecto visual: Brightness pulse
│  └─ Opacity: 1 → 0.7 → 1
│  └─ Duration: 200ms
│
PARTICLE ORBIT
├─ Duración: 20-30 segundos per orbit
├─ Path: SVG circle path
├─ Speed: Constant, no easing (orbital feel)
├─ Direction: Clockwise
│
WAVEFORM PULSE
├─ Si no hay play: Subtle respire
│  └─ Opacity: Fluctúa suavemente
│  └─ Duration: 3000ms
├─ Si hay play: Barras reaccionan a audio
│  └─ Height animada por frecuencias
└─ Colors: Gradual shift CYAN → MAGENTA → CYAN
```

#### Sonido (Experiencia Sonora)

```
AMBIENCE
├─ Soundscape de 30 segundos
├─ Loop infinito
├─ Volume: -15dB (background only)
├─ Fade in: 3 segundos
├─ Contains: Pad progresivo house-ish
│
PREVIEW CLIP (Optional)
├─ 30-second preview del track
├─ Disponible en Spotify embed
├─ O: Custom player controlable
│
INTERACTION SOUNDS (Subtle)
├─ Click CTA: 100ms synth beep (NEON CYAN sound)
├─ Waveform hover: 50ms glitch sound
├─ Volume: -25dB (barely noticeable)
├─ Purpose: Haptic audio feedback
```

---

### 8. BLOG SECTION

#### Estructura Visual

**Landing / List View**:

```
BLOG SECTION
├─ Header: "Thoughts & Insights"
├─ Subheader: "Code, Music, AI, and the space between"
│
SEARCH / FILTER
├─ Search box: Buscar por título, autor, contenido
├─ Filter tags: #Code #Music #AI #Thoughts
├─ Layout toggle: List / Grid
│
ARTICLES LIST
├─ Card por artículo:
│  ├─ Date (JETBRAINS MONO, gris)
│  ├─ Category badge (pequeño, color category)
│  ├─ Title (H3, SPACE MONO)
│  ├─ Excerpt (150 palabras)
│  ├─ Reading time (10 min read)
│  ├─ Tags (3-5 tags pequeños)
│  └─ [Read More] link
│
PAGINATION / INFINITE SCROLL
├─ Mostrar 10-12 articles por página
├─ Bottom: "Load more" button
├─ O: Infinite scroll (Intersection Observer)
```

**Article Detail View**:

```
ARTICLE PAGE
├─ Hero: Title + metadata
│  ├─ Date, author, reading time
│  ├─ Category badge
│  └─ Share buttons
│
├─ TABLE OF CONTENTS (si es largo)
│  ├─ Auto-generado de headings
│  ├─ Sticky sidebar o top
│  └─ Links internos navegables
│
├─ ARTICLE BODY
│  ├─ Markdown renderizado
│  ├─ Code blocks: Syntax highlighting (shiki)
│  ├─ Blockquotes: Estilizados
│  ├─ Images: Responsive, lazy-loaded
│  ├─ Links: Con hover effects
│  └─ Footnotes / asides
│
├─ RELATED ARTICLES (Bottom)
│  ├─ 3 artículos recomendados
│  ├─ Basado en tags
│  └─ Card pequeño con thumbnail
│
├─ COMMENTS (Giscus/Disqus)
│  ├─ Sección comentarios
│  ├─ GitHub-based (Giscus recomendado)
│  └─ Dark mode support
│
└─ FOOTER
   └─ Navigation a artículo anterior/siguiente
```

#### Estrategia de Contenido

```
CATEGORÍAS DE ARTÍCULOS:

1. CODE / ARCHITECTURE (40%)
   ├─ "Building scalable backends with Spring Boot"
   ├─ "Next.js patterns that changed my mind"
   ├─ "TypeScript: From skeptic to believer"
   ├─ "Real-time systems: Lessons learned"
   └─ "Open source: Why I contribute"

2. MUSIC / PRODUCTION (30%)
   ├─ "Progressive house: Finding your sound"
   ├─ "Home studio: From software to hardware"
   ├─ "The 128 BPM sweet spot"
   ├─ "Sonic branding for digital products"
   └─ "Making beats while debugging code"

3. AI / INNOVATION (20%)
   ├─ "AI isn't magic, it's math"
   ├─ "Building with LangChain"
   ├─ "Ethics in generative AI"
   └─ "ML in music production"

4. META / THOUGHTS (10%)
   ├─ "Why I built this website"
   ├─ "The art of context switching"
   ├─ "Remote work + creative output"
   └─ "2026: What's next?"
```

#### Cómo Entra

```
BLOG LIST (On scroll):
├─ Header fade in: 600ms
├─ Filter/search fade in: 400ms
├─ Articles cascade reveal: 100ms stagger
│  └─ Fade in + slide up
│  └─ Duration: 500ms each

BLOG ARTICLE (On load):
├─ Title fade in: 600ms
├─ Metadata slide down: 400ms
├─ Body content: Progressive reveal
│  └─ Paragraph by paragraph
│  └─ Stagger: 100ms
├─ Code blocks: Appear with highlight animation
│  └─ Duration: 300ms
└─ Images: Lazy load + fade in
```

#### Animaciones

```
ARTICLE CARD HOVER
├─ Scale: 1 → 1.02
├─ Shadow: Aumenta
├─ Title: Color shift (LIGHT GREY → NEON CYAN)
├─ Duration: 200ms
│
CODE BLOCK SYNTAX HIGHLIGHTING
├─ Line backgrounds: Fade in
├─ Text color: Animate per token
├─ Duration: 150ms per line
│
TABLE OF CONTENTS SCROLL
├─ Activo: Link que denotas current section
├─ Highlight: Animate a NEON CYAN
├─ Sticky: Position fixed on scroll
│
LINK HOVER (Intra-artículo)
├─ Underline: Reveal left-to-right
├─ Color: LIGHT GREY → NEON CYAN
├─ Duration: 200ms
```

---

### 9. CONTACT SECTION

#### Estructura Visual

```
┌──────────────────────────────────────┐
│                                      │
│         LET'S COLLABORATE             │
│                                      │
│    ┌────────────────────────────┐   │
│    │                            │   │
│    │  CONTACT FORM:             │   │
│    │                            │   │
│    │  Email:    [_________]     │   │
│    │  Subject:  [_________]     │   │
│    │  Message:  [_________]     │   │
│    │             [_________]     │   │
│    │             [_________]     │   │
│    │                            │   │
│    │  [SEND MESSAGE] button     │   │
│    │                            │   │
│    │  "Typically reply in 24h"  │   │
│    │                            │   │
│    └────────────────────────────┘   │
│                                      │
│    OR                                 │
│                                      │
│    DIRECT LINKS:                     │
│    [📧 Email]  [💬 Twitter]         │
│    [🐙 GitHub]  [🎵 Spotify]        │
│    [💼 LinkedIn]  [📸 Instagram]    │
│                                      │
└──────────────────────────────────────┘
```

#### Qué Siente el Usuario

**Visualmente**:
- Accesibilidad: "Puedo contactarlo"
- Profesionalismo: "Responde genuinamente"
- Apertura: "Está disponible"

**Interactivamente**:
- Control: Sé exactamente cómo contactar
- Satisfacción: Feedback inmediato al enviar
- Confianza: Validación clara

#### Qué Aparece

```
SECTION HEADER
├─ "Let's collaborate" (o similar)
├─ Subheader: "I'm always interested in..."
├─ Tipografía: SPACE MONO para header

CONTACT FORM
├─ Fields:
│  ├─ Email (required)
│  ├─ Name (required)
│  ├─ Subject (required)
│  ├─ Message (required, textarea)
│  └─ Optional: Project type, budget, timeline
│
├─ Form styling:
│  ├─ Input borders: DEEP MAGENTA 20% opacity
│  ├─ Focus state: Border NEON CYAN, glow
│  ├─ Placeholder: Gris oscuro, italic
│  ├─ Focus ring: Outline NEON CYAN
│  └─ Error state: WARM AMBER border
│
├─ Button:
│  ├─ Text: "Send Message"
│  ├─ Primary button style (NEON CYAN bg)
│  ├─ Hover: Scale + glow
│  ├─ Submit: Shows spinner
│  └─ Success: Confirmation message

RESPONSE MESSAGE
├─ Success:
│  ├─ "Thanks for reaching out!"
│  ├─ "I'll respond within 24 hours."
│  └─ Fade in from form
├─ Error:
│  ├─ "Oops, algo salió mal."
│  ├─ Motivo específico
│  └─ Color: WARM AMBER

SOCIAL / DIRECT LINKS
├─ Grid de links a:
│  ├─ Email directo
│  ├─ Twitter/X
│  ├─ GitHub
│  ├─ Spotify
│  ├─ LinkedIn
│  └─ Instagram
├─ Icons: lucide-react, 24-32px
├─ Hover: Scale + color change
```

#### Cómo Entra

```
ON SCROLL (contact visible):
├─ Header fade in + slide up: 800ms
├─ Form fade in: 600ms
├─ Input fields: Cascade reveal
│  └─ Stagger: 100ms
│  └─ Duration: 400ms each
├─ Button: Fade in + pulse
│  └─ Duration: 600ms
├─ Social links: Fade in
│  └─ Stagger: 50ms
│  └─ Duration: 300ms
```

#### Animaciones

```
INPUT FOCUS STATE
├─ Border color: DEEP MAGENTA → NEON CYAN
├─ Glow: 0 → 0 0 10px NEON CYAN
├─ Duration: 200ms
├─ Easing: ease-out
│
FORM SUBMIT
├─ Button: Shows spinner
│  └─ Infinito rotation: 2000ms per rotation
│  └─ Color: NEON CYAN
├─ Form fade out (si success)
│  └─ Fade: 1 → 0.5
│  └─ Scale: 1 → 0.95
│  └─ Duration: 300ms
├─ Success message fade in
│  └─ Fade: 0 → 1
│  └─ Scale: 0.8 → 1
│  └─ Duration: 600ms
│
ERROR MESSAGE
├─ Shake animation (micro)
│  └─ X: 0 → 5 → -5 → 0
│  └─ Duration: 400ms
├─ Border flash: Red → Normal
│  └─ Duration: 200ms

SOCIAL LINK HOVER
├─ Scale: 1 → 1.2
├─ Color: LIGHT GREY → NEON CYAN
├─ Duration: 200ms
├─ Rotation: 0 → 5deg (playful)
```

#### Backend / API

```
EMAIL SUBMISSION FLOW:

User fills form → [Submit]
         ↓
Validation (client-side, zod)
         ↓
API Route: /api/contact (POST)
         ↓
Server validation (server-side)
         ↓
Rate limiting check (protection)
         ↓
Send email to you (Resend/SendGrid)
         ↓
Send confirmation to user
         ↓
Return success response
         ↓
Display confirmation UI
```

---

## EXPERIENCIA MUSICAL Y SONORA

### 1. Filosofía de Sonido

```
LA IDENTIDAD SONORA NO ES SUPERFICIAL

Tu sitio web es un espacio digital.
Como espacio físico, tiene acústica.
Como música, tiene ritmo.

PRINCIPIO 1: Subtlety as Power
├─ Sonidos se usan raramente pero intencionalmente
├─ No auto-play que asuste
├─ Audio es siempre discreet (-15dB a -25dB)
├─ Usuario controla si quiere sonido

PRINCIPIO 2: Progressive House as DNA
├─ Sonidos evocan el género (128 BPM energy)
├─ Aunque no hay "beats" explícitos
├─ Soundscapes: Ambient pads, sintetizadores, texturas
├─ Temporal: Builds, transitions, releases

PRINCIPIO 3: Sonic Branding
├─ Ciertos sonidos = Tu marca
├─ Consistencia: Mismo sonido en eventos iguales
├─ Memoria: Usuario asocia sonido con "Brikman"
```

### 2. Audio Elementos por Sección

#### HERO

```
AMBIENT PAD (Intro Soundscape)
├─ Instrumento: Ethereal synthesizer pad
├─ Duración: 12 segundos, loop
├─ BPM implícito: 128 (Progressive House)
├─ Frequency: Mid-high (soothing)
├─ Volume: -20dB
├─ Fade in: 3000ms
├─ Start: On page load
├─ End: Cuando usuario scrollea 50vh

MICRO-SOUND (Scroll Indicator)
├─ Click/tone subtle en loop infinito
├─ Duración: 100ms
├─ Volumen: -30dB
├─ Pitch: High (A4, ~440Hz)
├─ Interval: 1500ms entre repeticiones
├─ Purpose: Auditory CTA (scroll down)
```

#### TIMELINE

```
POINT REVEAL SOUND
├─ Tipo: Ascending glitch / whoosh
├─ Duración: 150ms
├─ Volumen: -25dB
├─ Frequency: 500-2000Hz sweep
├─ Timing: Cuando cada point aparece
├─ Easing: Exponential
├─ Purpose: Sonic feedback

DETAIL CARD SOUND
├─ Tipo: Soft chord (sus2) resolved
├─ Duración: 300ms
├─ Volumen: -20dB
├─ Nota: G-B-D (G major sus2)
├─ Timing: Cuando detail card entra
├─ Instrumentation: Synth string pad
└─ Purpose: Emotional "yes, this is good"
```

#### SPOTIFY RELEASE SECTION

```
AMBIENT SOUNDSCAPE (Background)
├─ Type: Progressive house intro/pad
├─ Duration: 45 seconds, loop
├─ BPM: 128
├─ Elements:
│  ├─ Ethereal pad (basic)
│  ├─ Subtle filtered bass line (sub-bass felt, no seen)
│  ├─ Delayed strings
│  └─ Hall reverb
├─ Volume: -18dB (slightly louder than others)
├─ Start: Auto-play muted, or user click
├─ Purpose: Immersive context
│
COUNTDOWN TICK
├─ Tipo: Metronome soft click
├─ Duración: 50ms
├─ Volumen: -30dB
├─ Pitch: Neutral, click sound (no melodic)
├─ Frequency: Each second the countdown updates
├─ Purpose: Urgency through sound
│
INTERACTION SOUNDS
├─ Button hover: Bright synth note (500Hz)
├─ Button click: Chord resolution (G-B-D-G)
│  └─ Duration: 200ms
│  └─ Volume: -25dB
│  └─ Purpose: Tactile audio feedback
│
WAVEFORM HOVER
├─ Type: Glitch / digital chirp
├─ Duration: 80ms
├─ Volume: -28dB
├─ Pitch: Varying (f rom 800-1200Hz)
├─ Purpose: "You can interact with this"
```

#### BLOG SECTION

```
AMBIENT (Subtle)
├─ No ambient específico
├─ O: Very subtle 10-second pad loop
├─ Volume: -35dB (barely perceptible)
├─ Purpose: Presence without distraction

CODE BLOCK REVEAL
├─ Type: Subtle digital chime
├─ Duration: 200ms
├─ Volume: -28dB
├─ Pitch: Ascending minor third
├─ Purpose: "Look at this code"

LINK HOVER (Internal)
├─ Type: Soft click
├─ Duration: 80ms
├─ Volume: -30dB
├─ Purpose: Tactile feedback
```

#### CONTACT SECTION

```
FORM FOCUS
├─ Type: Soft "activation" sound
├─ Duration: 150ms
├─ Volume: -25dB
├─ Pitch: G4 (sol)
├─ Purpose: "Field ready for input"

FORM SUBMIT
├─ Loading: Spinner sound
│  └─ Whoosh loop: 1200ms per rotation
│  └─ Volume: -22dB
│  └─ Pitch: Ranging 200-800Hz
│
├─ Success: Chord resolution (triumphant)
│  └─ Duration: 400ms
│  └─ Notes: G-B-D-G-B (ascending arpeggio)
│  └─ Volume: -18dB (more prominent)
│  └─ Instrumentation: Bell / synth lead
│  └─ Feeling: Celebration, completion
│
└─ Error: Minor chord (sad)
   └─ Duration: 300ms
   └─ Notes: G-Bb-D (G minor)
   └─ Volume: -22dB
   └─ Feeling: "Oops, let's fix this"
```

### 3. Especificaciones Técnicas de Audio

#### Formatos y Compresión

```
Format: WebM (Vorbis codec)
├─ Bitrate: 128kbps
├─ Sample rate: 48kHz
├─ Size: Mínimo, máximo 1MB per file
│
Fallback: MP3
├─ Bitrate: 192kbps
├─ Sample rate: 44.1kHz
│
Delivery:
├─ Host: CDN (Vercel, AWS CloudFront)
├─ Lazy load: Solo cuando sección entra en viewport
├─ Cache: 1 año (immutable)
```

#### Implementación Web Audio API

```typescript
// Pattern para reproducir sonidos
export function playSound(
  soundKey: 'hover' | 'click' | 'success' | 'error',
  options?: { volume?: number }
) {
  // Usar Web Audio API
  // Crear oscillator o load pre-rendered audio
  // Play con volume control
  // Fade out después de duración
}

// Alternatively: HTML5 audio tags
<audio id="sound-click" src="/sounds/click.webm" preload="auto" />
```

### 4. Consideraciones de Accesibilidad & Preferencias

```
prefers-reduced-motion
├─ Respect user preference
├─ Si disabled: No auto-play sonidos
├─ Si disabled: Sonidos más suaves

Audio Controls
├─ Sempre opción mute/unmute
├─ Global volume slider (opcional)
├─ Per-section audio toggle (opcional)

Default State
├─ Sounds MUTED on page load
├─ User must opt-in to audio
├─ Visual indicator: 🔊 "Click for sound"
```

---

## SISTEMA DE ANIMACIONES

### 1. Estrategia General

```
ANIMACIONES NO SON DECORACIÓN

Cada movimiento tiene propósito:
├─ Comunicar estado (hover, active, disabled)
├─ Guiar atención (entrance, emphasis)
├─ Proporcionar feedback (click, load, error)
├─ Crear emoción (joy, anticipation, awe)
├─ Establecer ritmo (pacing, flow)
└─ Narrar historia (transition, progression)

PRINCIPIOS:
├─ Propósito primero, velocidad después
├─ Coherencia: Animaciones similares = comportamiento similar
├─ Respeto: No abrumar, siempre opt-in para efectos fuertes
├─ Performance: 60fps en todos los dispositivos
└─ Accesibilidad: prefers-reduced-motion respeto
```

### 2. Tabla de Duraciones Estándar

```
MICRO (50-100ms)
├─ Uso: Hover states, micro-interactions
├─ Easing: ease-out, sharp
├─ Sensación: Responsive, snappy
└─ Ejemplos: Button scale, color flash

QUICK (150-300ms)
├─ Uso: Small transitions, feedback
├─ Easing: cubic-bezier(0.34, 1.56, 0.64, 1)
├─ Sensación: Immediate, satisfying
└─ Ejemplos: Click effects, open dropdown

MEDIUM (400-600ms)
├─ Uso: Section entrance, moderate transitions
├─ Easing: cubic-bezier(0.4, 0, 0.2, 1)
├─ Sensación: Smooth, intentional
└─ Ejemplos: Fade in, slide up, scale

SLOW (800-1200ms)
├─ Uso: Major transitions, narrative moments
├─ Easing: cubic-bezier(0.4, 0, 0.2, 1)
├─ Sensación: Cinematic, dramatic
└─ Ejemplos: Hero entrance, section transitions

LONG (1500ms+)
├─ Uso: Sustained animations, loops
├─ Easing: Varies (ease-in-out for loops)
├─ Sensación: Meditative, immersive
└─ Ejemplos: Particle field, background pulse, infinite loops
```

### 3. Easing Functions Personalizadas

```javascript
// Colección de easing curves usadas en el sitio

const easingFunctions = {
  // ENTRANCE ANIMATIONS
  entrance: 'cubic-bezier(0.34, 1.56, 0.64, 1)',  // Bouncy entry
  entrySmooth: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',  // Slower, controlled
  
  // INTERACTIVE (Hover, click)
  interaction: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Standard Material easing
  snappy: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',  // Quick response
  
  // TRANSITIONS (Section to section)
  transition: 'cubic-bezier(0.4, 0, 0.2, 1)',  // Smooth, cinematic
  slowTransition: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',  // Slower narrative
  
  // LOOPS (Continuous, subtle)
  loop: 'ease-in-out',  // Natural, breathing
  floatLoop: 'cubic-bezier(0.42, 0, 0.58, 1)',  // Floating, effortless
  
  // SPECIAL EFFECTS
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',  // Overshoot
  backEase: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',  // Back movement
}
```

### 4. Patrones de Animación Recurrentes

#### Patrón 1: Entrance on Scroll

```typescript
export function useEntranceAnimation(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    gsap.set(element, { opacity: 0, y: 50 })
    
    ScrollTrigger.create({
      trigger: element,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        })
      },
    })
  }, [ref])
}
```

#### Patrón 2: Hover Scale + Color

```css
/* Using Tailwind + CSS */
.interactive-element {
  @apply transition-all duration-300 ease-out;
}

.interactive-element:hover {
  @apply scale-105 text-[#00D9FF] shadow-lg;
}

/* Or GSAP for more control */
gsap.to(element, {
  scale: 1.05,
  color: '#00D9FF',
  boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
  duration: 0.3,
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
  overwrite: 'auto',
})
```

#### Patrón 3: Staggered Cascade

```typescript
// Multiple elements entering with delay
gsap.to(elements, {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  stagger: {
    amount: 0.3,  // Total stagger time
    from: 'start',  // Start from first
    ease: 'none',  // Linear stagger
  },
})
```

#### Patrón 4: Parallax on Scroll

```typescript
export function useParallax(ref: RefObject<HTMLElement>, speed = 0.5) {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    gsap.to(element, {
      y: 'random(-100, 100)',  // Varies per scroll
      scrollTrigger: {
        trigger: element,
        scrub: 0.5,  // Link to scrollbar
        markers: false,
      },
    })
  }, [ref, speed])
}
```

#### Patrón 5: Mouse Tracker Effect

```typescript
export function useMouseTracker(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    document.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(element, {
        x: x * 0.1,  // Dampen movement
        y: y * 0.1,
        duration: 0.3,
        ease: 'power1.out',
      })
    })
  }, [ref])
}
```

---

## INTEGRACIÓN THREE.JS Y WEBGL

### 1. Casos de Uso de Three.js en el Sitio

```
HERO PARTICLE FIELD
├─ 100-200 partículas flotando
├─ Responden a mouse (atracción)
├─ Gradientes de color (CYBER PULSE)
├─ Rotación continua
├─ Parallax en scroll
├─ Performance: 60fps en 2060+ cards

SPOTIFY SECTION PARTICLES
├─ Órbita alrededor del artwork
├─ Colores: WARM AMBER, NEON CYAN
├─ Interactividad: Mouse tracking
├─ Performance: < 5MB memoria

DATA VISUALIZATION (SI APLICA)
├─ 3D charts, graphs
├─ Interactivos, rotables
├─ Performance optimizado

BACKGROUND EFFECTS (OPCIONAL)
├─ Mesh shaders, visuals
├─ Generativo, nunca idéntico
├─ Audio-reactive (future)
```

### 2. Arquitectura Three.js + React

```typescript
// Patrón: Canvas component con React Three Fiber

'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import ParticleField from '@/components/three/ParticleField'

export function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 30] }}
      gl={{ antialias: true, alpha: true }}
    >
      <ParticleField />
      <OrbitControls autoRotate />
    </Canvas>
  )
}

// Particle Field Component
function ParticleField() {
  const particlesRef = useRef()
  
  useFrame(() => {
    // Update particles each frame
    // Respond to mouse
    // Animate positions
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial size={0.5} sizeAttenuation />
    </points>
  )
}
```

### 3. Performance Optimization

```
CRITICAL PERFORMANCE TARGETS

FCP (First Contentful Paint): < 1.5s
├─ Hero visible rápidamente
├─ Canvas puede lazy-load

LCP (Largest Contentful Paint): < 2.5s
├─ Hero complete
├─ Partículas animando

CLS (Cumulative Layout Shift): < 0.1
├─ No unexpected layout jumps

TTFB (Time to First Byte): < 0.6s
├─ Server-side optimization
├─ CDN caching

FID (First Input Delay): < 100ms
├─ Smooth interaction
├─ No blocking JavaScript

TECHNICAL MEASURES:

Canvas Optimization:
├─ Limit particle count (200 max)
├─ Use BufferGeometry, not Geometry
├─ Instancing para múltiples meshes
├─ Lazy-load Three.js (use dynamic imports)
├─ Dispose textures/geometries on unmount

Image Optimization:
├─ WEBP + PNG fallback
├─ Responsive sizes
├─ Lazy loading with next/image
├─ Compress all PNGs/JPGs

Code Splitting:
├─ Three.js en separate bundle
├─ Dynamic imports con React.lazy()
├─ Suspense fallback para loading

Caching:
├─ Service worker para assets
├─ CDN para static files
├─ 1 año cache headers para versioned files
```

---

## ROADMAP DE DESARROLLO

### Fase 1: Foundation (Mes 1-2)

**Objetivo**: MVP funcional, estructura base, no visual polish yet

```
SEMANA 1-2: Setup & Architecture
├─ [ ] Next.js 15 project initialized
├─ [ ] TypeScript strict mode configured
├─ [ ] Tailwind setup con variables de marca
├─ [ ] Folder structure created
├─ [ ] ESLint, Prettier configured
├─ [ ] Git repo initialized, CI/CD setup
├─ [ ] Vercel deployment configured

SEMANA 3-4: Core Pages (No Styling)
├─ [ ] Landing page (basic layout)
├─ [ ] About page (content, semantic HTML)
├─ [ ] Timeline page (data structure)
├─ [ ] Software projects (grid, data)
├─ [ ] Music projects (grid, data)
├─ [ ] Blog structure (list, individual post)
├─ [ ] Contact page (form, no styling)
├─ [ ] Navigation & basic routing

SEMANA 5-6: Content & Data
├─ [ ] Write About page (1000+ words)
├─ [ ] Create Timeline data (8-10 hitos)
├─ [ ] Add 4-6 software projects (descriptions)
├─ [ ] Add 5-8 music releases (data)
├─ [ ] Write 3-4 blog posts (to seed content)
├─ [ ] Create projects.json schema
├─ [ ] Set up MDX for blog posts

SEMANA 7-8: Core Functionality
├─ [ ] Email form submission (backend)
├─ [ ] Form validation (zod schemas)
├─ [ ] Spotify API integration (fetch releases)
├─ [ ] GitHub API integration (fetch repos)
├─ [ ] Analytics setup (Vercel Analytics)
├─ [ ] SEO meta tags (next-seo)
├─ [ ] Sitemap generation
├─ [ ] RSS feed for blog

DELIVERABLES BY END OF PHASE 1:
└─ [ ] Working MVP with all pages
    [ ] Content populated
    [ ] Forms functional
    [ ] Mobile responsive (basic)
    [ ] Deployed to Vercel
    [ ] No fancy animations yet
```

### Fase 2: Visual Identity (Mes 3-4)

**Objetivo**: Implementar diseño visual, animaciones básicas, Three.js setup

```
SEMANA 9-10: Color & Typography
├─ [ ] Tailwind config: Brand colors
├─ [ ] Font loading: SPACE MONO, INTER, JETBRAINS
├─ [ ] CSS variables: Color system
├─ [ ] Button components (styled)
├─ [ ] Card components (styled)
├─ [ ] Link components (custom)
├─ [ ] Badge components
├─ [ ] Input/form components (shadcn/ui)

SEMANA 11-12: Layout & Sections
├─ [ ] Hero section (visual design)
├─ [ ] About section (styling)
├─ [ ] Timeline section (visual, no animation)
├─ [ ] Projects grid (styling)
├─ [ ] Contact section (styled form)
├─ [ ] Footer (styled)
├─ [ ] Navigation polish
├─ [ ] Mobile optimization

SEMANA 13-14: Animations (Basic)
├─ [ ] GSAP + ScrollTrigger setup
├─ [ ] Lenis smooth scroll
├─ [ ] Entrance animations (fade in, slide)
├─ [ ] Hover state animations
├─ [ ] Scroll trigger basics
├─ [ ] Framer Motion setup (React animations)
├─ [ ] Button animations
├─ [ ] Form field animations

SEMANA 15-16: Three.js & WebGL
├─ [ ] React Three Fiber setup
├─ [ ] Particle field component (simple)
├─ [ ] Hero background (basic particles)
├─ [ ] Mouse interaction hook
├─ [ ] Performance optimization
├─ [ ] Mobile fallback (canvas/shader)
├─ [ ] Testing en múltiples dispositivos

DELIVERABLES BY END OF PHASE 2:
└─ [ ] Visually complete site
    [ ] Brand colors & typography throughout
    [ ] Basic animations (entrance, hover)
    [ ] Three.js particles in hero
    [ ] Smooth scroll active
    [ ] Mobile responsive
    [ ] No complex interactions yet
```

### Fase 3: Interactivity & Polish (Mes 5-6)

**Objetivo**: Micro-interacciones, Spotify release section, audio, refinement

```
SEMANA 17-18: Spotify Release Section
├─ [ ] Countdown timer (reactive)
├─ [ ] Album art showcase
├─ [ ] Particle orbit animation
├─ [ ] Waveform visualization
├─ [ ] Release description/details
├─ [ ] CTA buttons (pre-add, follow)
├─ [ ] Mouse tracking effects
├─ [ ] Parallax on scroll

SEMANA 19-20: Audio & Sonics
├─ [ ] Audio files: Record/produce micro-sounds
├─ [ ] Web Audio API setup
├─ [ ] Sound player implementation
├─ [ ] Interaction sounds (hover, click)
├─ [ ] Ambient soundscapes
├─ [ ] Audio controls (mute, volume)
├─ [ ] Spotify embed integration

SEMANA 21-22: Advanced Animations
├─ [ ] Timeline animation (line drawing, points)
├─ [ ] Project card animations (complex)
├─ [ ] Staggered cascades (multiple elements)
├─ [ ] SVG animations (icons, borders)
├─ [ ] Text reveal animations
├─ [ ] Scroll-linked animations (scrub)
├─ [ ] Parallax depth effects

SEMANA 23-24: Polish & Performance
├─ [ ] Code splitting (lazy load Three.js)
├─ [ ] Image optimization (all images)
├─ [ ] Bundle size analysis (reduce)
├─ [ ] Animation frame rate optimization
├─ [ ] Memory leaks check (Chrome DevTools)
├─ [ ] Lighthouse audit (target: >90)
├─ [ ] Cross-browser testing
├─ [ ] Accessibility audit (WCAG 2.1 AA)

DELIVERABLES BY END OF PHASE 3:
└─ [ ] Fully interactive site
    [ ] Spotify release section complete
    [ ] Audio integrated
    [ ] Advanced animations throughout
    [ ] 60fps on modern devices
    [ ] Lighthouse score >90
    [ ] Accessible to 95%+ users
```

### Fase 4: Blog & Content (Mes 7)

**Objetivo**: Seed content, blog pipeline, ongoing value

```
SEMANA 25-26: Blog Foundation
├─ [ ] Blog template refinement
├─ [ ] Syntax highlighting setup (shiki)
├─ [ ] Code block styling
├─ [ ] Related articles logic
├─ [ ] Search functionality (fuse.js o similar)
├─ [ ] Tags system
├─ [ ] Categories system
├─ [ ] Table of contents (auto-generated)

SEMANA 27-28: Blog Content
├─ [ ] Write 6-8 initial blog posts
│  ├─ 2 code/architecture posts
│  ├─ 2 music/production posts
│  ├─ 1 AI/tech post
│  ├─ 1 meta/thoughts post
│  └─ 1-2 "how I built this" posts
├─ [ ] Add images to posts (optimized)
├─ [ ] Internal linking strategy
├─ [ ] SEO optimization per post
├─ [ ] Social preview images

DELIVERABLES BY END OF PHASE 4:
└─ [ ] 8+ blog posts published
    [ ] Blog section fully functional
    [ ] RSS feed active
    [ ] Search working
    [ ] Commenting system (optional)
```

### Fase 5: Advanced & Future Features (Mes 8+)

**Objetivo**: Differentiators, experimental features, awards-worthy

```
POSSIBLE ENHANCEMENTS:

1. INTERACTIVE EXPERIENCES
   ├─ AI code analyzer (paste code, get feedback)
   ├─ Music visualizer (play Spotify, visualize)
   ├─ 3D portfolio tour (navigate 3D space)
   └─ Generative art canvas (interactive art)

2. COMMUNITY & ENGAGEMENT
   ├─ Comments on blog (Giscus)
   ├─ Newsletter signup + automation
   ├─ Discord community (link)
   ├─ GitHub discussions

3. PERFORMANCE ENHANCEMENTS
   ├─ Service worker (offline support)
   ├─ WebP compression (all images)
   ├─ Streaming responses (incremental rendering)
   ├─ Code splitting granularity increase

4. ANALYTICS & INSIGHTS
   ├─ Custom analytics dashboard (hidden)
   ├─ Heatmaps (scroll depth, clicks)
   ├─ User journey tracking
   ├─ Performance monitoring

5. COLLABORATIONS & INTEGRATIONS
   ├─ Spotify API (real-time stats)
   ├─ GitHub contribution graph
   ├─ Twitter/X timeline embed
   ├─ YouTube video embeds
```

### Timeline Visual

```
MONTH 1 (Foundation)     MONTH 2 (Foundation)
├─ Week 1-2             ├─ Week 9-10
│  Setup, Config        │  Colors, Typography
│                       │
├─ Week 3-4             ├─ Week 11-12
│  Core Pages           │  Layout & Design
│                       │
├─ Week 5-6             ├─ Week 13-14
│  Content & Data       │  Basic Animations
│                       │
└─ Week 7-8             └─ Week 15-16
   Functionality           Three.js Setup

MONTH 3 (Polish)        MONTH 4 (Polish)
├─ Week 17-18           ├─ Week 25-26
│  Spotify Section      │  Blog Foundation
│  CTA focus            │
├─ Week 19-20           ├─ Week 27-28
│  Audio & Sonics       │  Blog Content
│                       │
├─ Week 21-22           └─ LAUNCH READY ✓
│  Advanced Anims       
│                       FUTURE (Months 9+)
└─ Week 23-24           ├─ Enhancements
   Final Polish         ├─ Community features
   Lighthouse >90       └─ Advanced features
```

### Success Metrics (End of Roadmap)

```
PERFORMANCE TARGETS:
├─ Lighthouse Score: > 95 (all categories)
├─ Core Web Vitals:
│  ├─ LCP: < 2.0s
│  ├─ FID: < 100ms
│  └─ CLS: < 0.05
├─ Bundle Size: < 200KB (gzipped)
├─ Time to Interactive: < 2.5s

ENGAGEMENT METRICS:
├─ Average session time: > 3 minutes
├─ Pages per session: > 3
├─ Scroll depth (hero): > 50%
├─ CTA click-through: > 10%
├─ Form completion: > 25%

AWWWARDS-WORTHY CRITERIA:
├─ Visual Design: Unique, cohesive, memorable
├─ Creativity: Novel interactions, fresh approach
├─ Technical Execution: Smooth, optimized, cutting-edge
├─ Content Quality: Valuable, well-written, authentic
├─ Accessibility: WCAG 2.1 AA minimum, preferably AAA
├─ Mobile Experience: Fully responsive, fast
├─ Originality: Doesn't feel like a template
└─ Storytelling: Cohesive narrative throughout
```

---

## BUENAS PRÁCTICAS Y CONVENCIONES

### 1. Estructura de Código y Organización

#### Component Organization

```
Each component file should follow this pattern:

/components/
  /sections/
    /Hero/
      Hero.tsx              # Component
      Hero.module.css       # Styles (if complex)
      use-hero-animation.ts # Custom hook (if complex)
      index.ts              # Export
      types.ts              # TypeScript interfaces
      README.md             # Documentation

Always export:
├─ Component as default
├─ Types as named exports
├─ Examples/usage in component file comment
```

#### Naming Consistency

```
COMPONENTS:
├─ PascalCase for component files: Hero.tsx, ProjectCard.tsx
├─ kebab-case for folder names: /hero-section, /project-card
├─ Suffix with context: HeaderNav.tsx, ProjectCardLarge.tsx

HOOKS:
├─ Prefix with "use": useAnimation, useScrollTrigger
├─ File: use-animation.ts (kebab-case in filename)
├─ Export: useAnimation (camelCase in code)

UTILITIES:
├─ camelCase: formatDate, cn, clamp
├─ File location: /lib/utils.ts
└─ Organize by category: /lib/animations, /lib/validation

TYPES:
├─ PascalCase: ProjectProps, AnimationConfig
├─ Suffix "Props" for component props: HeroProps
├─ File: types.ts co-located with usage
```

#### Folder Structure Deep Dive

```
SRC
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   ├── global.css          # Global styles
│   ├── (routes)/           # Grouped routes
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   ├── [slug]/
│   │   │   └── layout.tsx
│   │   └── uses/
│   └── api/                # API routes
│       ├── contact/
│       ├── spotify/
│       └── middleware.ts
│
├── components/             # Reusable components
│   ├── sections/           # Full-page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Timeline.tsx
│   │   ├── SpotifyRelease.tsx
│   │   ├── Projects.tsx
│   │   ├── Music.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   │
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Nav.tsx
│   │   └── SmoothScroll.tsx (Lenis wrapper)
│   │
│   ├── projects/           # Project-specific components
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── ProjectModal.tsx
│   │   └── ProjectDetail.tsx
│   │
│   ├── animations/         # Animation components
│   │   ├── ParticleField.tsx (Three.js)
│   │   ├── ScrollAnimator.tsx
│   │   ├── HeroAnimation.tsx
│   │   ├── TimelineAnimation.tsx
│   │   └── Visualizer.tsx
│   │
│   ├── common/             # Generic UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   ├── Link.tsx
│   │   ├── CodeBlock.tsx
│   │   └── ShareButtons.tsx
│   │
│   ├── forms/              # Form components
│   │   ├── ContactForm.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── FormField.tsx
│   │
│   └── three/              # Three.js components
│       ├── Scene.tsx
│       ├── ParticleSystem.tsx
│       ├── Lights.tsx
│       └── useFrame.tsx
│
├── hooks/                  # Custom React hooks
│   ├── use-scroll-trigger.ts
│   ├── use-parallax.ts
│   ├── use-mouse-tracker.ts
│   ├── use-in-view.ts
│   ├── use-theme.ts
│   ├── use-media-query.ts
│   └── use-spotify-data.ts
│
├── lib/                    # Utilities & constants
│   ├── utils.ts            # General utilities (cn, clamp, etc.)
│   ├── constants.ts        # App-wide constants
│   ├── metadata.ts         # SEO metadata
│   │
│   ├── animations/         # Animation utilities
│   │   ├── gsap-config.ts  # GSAP defaults
│   │   ├── easing-functions.ts
│   │   ├── scroll-animations.ts
│   │   └── timeline-utils.ts
│   │
│   ├── spotify/            # Spotify API integration
│   │   ├── client.ts
│   │   ├── types.ts
│   │   └── queries.ts
│   │
│   ├── github/             # GitHub API integration
│   │   ├── client.ts
│   │   └── types.ts
│   │
│   ├── email/              # Email handling
│   │   ├── templates/
│   │   │   ├── contact-confirmation.tsx
│   │   │   └── contact-notification.tsx
│   │   └── send.ts
│   │
│   └── validation/         # Form validation
│       └── schemas.ts
│
├── content/                # Content files
│   ├── projects.json
│   ├── music/
│   │   ├── releases.json
│   │   └── equipment.json
│   ├── timeline.json
│   └── blog/               # MDX blog posts
│       ├── post-1.mdx
│       ├── post-2.mdx
│       └── ...
│
├── styles/                 # Global styles
│   ├── globals.css         # Tailwind, resets
│   ├── animations.css      # GSAP animations
│   ├── colors.css          # CSS variables
│   └── typography.css      # Font setup
│
├── types/                  # Global TypeScript types
│   ├── index.ts
│   ├── content.ts
│   ├── api.ts
│   └── animations.ts
│
└── public/                 # Static assets
    ├── fonts/
    ├── images/
    ├── videos/
    └── sounds/
```

### 2. TypeScript Best Practices

#### Type Definition

```typescript
// ✅ DO: Type everything, use proper exports

// types/index.ts
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link: string
  image: string
  featured: boolean
}

export type ProjectCardProps = {
  project: Project
  variant?: 'default' | 'featured'
}

// ❌ DON'T: Use `any`, loose typing
const data: any = fetchData()  // Bad

// ✅ DO: Generic types for reusability
interface ApiResponse<T> {
  data: T
  status: 'success' | 'error'
  message: string
}

const response: ApiResponse<Project[]> = await fetchProjects()
```

#### Component Typing

```typescript
// ✅ DO: Type props clearly
interface HeroProps {
  title: string
  subtitle?: string
  className?: string
  onCTA?: () => void
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, className, onCTA }) => {
  return <div className={className}>{title}</div>
}

// Alternatively (modern):
const Hero = ({ title, subtitle, className, onCTA }: HeroProps) => {
  // ...
}

// ❌ DON'T: Loose prop typing
const Hero = (props: any) => {}
```

### 3. React Patterns

#### Custom Hooks

```typescript
// ✅ DO: Extract logic into reusable hooks

export function useScrollTrigger(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current
    if (!element) return
    
    const animation = gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        onEnter: () => element.classList.add('visible'),
      },
    })
    
    return () => {
      animation.scrollTrigger?.kill()
    }
  }, [ref])
}

// Usage:
const MyComponent = () => {
  const ref = useRef(null)
  useScrollTrigger(ref)
  return <div ref={ref}>Content</div>
}

// ❌ DON'T: Inline complex logic
const MyComponent = () => {
  useEffect(() => {
    // 50 lines of animation code here
  }, [])
}
```

#### Server vs Client Components

```typescript
// ✅ DO: Use Server Components by default
// app/page.tsx (no 'use client')
export default async function Page() {
  const data = await fetchData()  // Runs on server
  return <BlogList posts={data} />
}

// ✅ DO: Use Client Components only for interactivity
// components/BlogList.tsx
'use client'

export function BlogList({ posts }) {
  const [filter, setFilter] = useState('')  // Client state
  // ...
}

// ❌ DON'T: Everything as 'use client'
'use client'  // Unnecessary, increases bundle size
export default function Page() {
  const data = staticContent  // Could be SSR
}
```

### 4. Performance Optimization Guidelines

```
CODE SPLITTING:
├─ Use dynamic imports for heavy libraries
├─ import dynamic from 'next/dynamic'
├─ Example: Dynamic import for Three.js, GSAP for specific sections

BUNDLE SIZE:
├─ Target: < 200KB gzipped total
├─ Use: next-bundle-analyzer to track
├─ Remove: Unused dependencies regularly
├─ Prefer: Tree-shakeable libraries

IMAGE OPTIMIZATION:
├─ Use: next/image for all images
├─ Format: WebP primary, PNG fallback
├─ Sizes: Define responsive sizes
├─ Lazy load: Enable by default

RENDERING:
├─ SSG: Use for static content (blog, timeline)
├─ SSR: Use for personalized content
├─ ISR: Use for semi-static content (releases)
├─ Avoid: Full-page SSR if possible
```

### 5. Animación Best Practices

```typescript
// ✅ DO: Clean up animations on unmount
useEffect(() => {
  const animation = gsap.to(element, { /* ... */ })
  
  return () => {
    animation.kill()  // Clean up
  }
}, [])

// ✅ DO: Respect user preferences
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches

if (!prefersReducedMotion) {
  // Run animations
}

// ✅ DO: Use composition for complex animations
const timeline = gsap.timeline()
timeline.add(fadeIn, 0)
timeline.add(slideUp, 0.2)  // Offset

// ❌ DON'T: Long-running intervals without cleanup
setInterval(() => {
  // Animation code
}, 16)  // Memory leak!

// ✅ DO: Use requestAnimationFrame for frame-based updates
let animationId
function animate() {
  // Update frame
  animationId = requestAnimationFrame(animate)
}

return () => cancelAnimationFrame(animationId)
```

### 6. Accesibilidad (a11y)

```
CRITICAL A11Y REQUIREMENTS:

COLOR CONTRAST:
├─ Text: 4.5:1 ratio minimum (WCAG AA)
├─ Large text (18+px): 3:1 ratio
├─ Interactive elements: 3:1 ratio
└─ Tool: WebAIM Contrast Checker

SEMANTIC HTML:
├─ Use <button>, <nav>, <main>, <article>
├─ Avoid: <div> for buttons
├─ Links: <a> tags, not <span> with onclick
├─ Forms: <label>, <input>, <button>

ARIA ATTRIBUTES:
├─ aria-label for icon buttons
├─ aria-labelledby for complex regions
├─ aria-live for dynamic updates
├─ role="presentation" for decorative elements

KEYBOARD NAVIGATION:
├─ All interactive: Tab-accessible
├─ Focus visible: Always visible indicator
├─ Escape key: Close modals
├─ Enter/Space: Activate buttons

IMAGES:
├─ Alt text: Always present, descriptive
├─ SVG: <title>, <desc> tags
├─ Decorative: aria-hidden="true"

MOTION:
├─ prefers-reduced-motion: Always respect
├─ Auto-play: Audio/video never auto-play
├─ Seizure risk: Avoid flashing (>3Hz)
```

### 7. Testing & Quality Assurance

```
TESTING STACK:

Unit Tests:
├─ Framework: Vitest (faster than Jest)
├─ Coverage: > 80% for utilities/hooks
├─ Location: __tests__ folders co-located

Component Tests:
├─ Framework: React Testing Library
├─ Focus: User behavior, not implementation
├─ Coverage: Critical components

E2E Tests:
├─ Framework: Playwright or Cypress
├─ Coverage: User journeys (contact form, blog, etc.)
├─ Run: On merge requests, before deploy

Accessibility Tests:
├─ Tool: axe-core (automated)
├─ Manual: Keyboard navigation, screen reader
├─ Target: WCAG 2.1 AA minimum

Performance Tests:
├─ Lighthouse CI (automated)
├─ Lighthouse score: > 90 on all metrics
├─ Core Web Vitals: All "good"

Cross-browser Testing:
├─ Chrome/Edge (latest 2 versions)
├─ Firefox (latest 2 versions)
├─ Safari (latest 2 versions)
├─ Mobile: iOS Safari, Chrome
```

### 8. Git & Version Control

```
COMMIT CONVENTIONS:

Format: <type>(<scope>): <subject>

Types:
├─ feat: New feature
├─ fix: Bug fix
├─ refactor: Code restructure
├─ style: Formatting, not logic
├─ docs: Documentation
├─ perf: Performance improvements
├─ test: Tests added/updated
├─ chore: Dependencies, build config

Examples:
├─ feat(hero): add particle animation
├─ fix(contact): validate email field
├─ refactor(animations): extract gsap timeline logic
├─ docs(readme): update installation steps

BRANCH NAMING:
├─ feature/feature-name
├─ fix/bug-name
├─ refactor/area-name
├─ docs/update-name

PR CHECKLIST:
- [ ] Tests pass
- [ ] No console warnings/errors
- [ ] Lighthouse score check
- [ ] Mobile responsiveness verified
- [ ] Accessibility check (axe)
- [ ] Performance impact assessed
```

---

## BENCHMARKING Y REFERENCIAS

### 1. Estudios de Referencia Detallados

#### LOCOMOTIVE STUDIOS

```
WHAT MAKES THEM SPECIAL:

1. Scroll as Narrative
   └─ Every element responds to scroll
   └─ Smooth transitions between sections
   └─ User controls pacing (scroll speed)
   
2. Typography Mastery
   └─ Oversize headings
   └─ Meaningful contrast
   └─ Generous letter-spacing
   
3. Performance
   └─ 60fps animations even on laptop
   └─ Minimal JavaScript
   └─ Image optimization

HOW TO APPLY TO BRIKMAN:
├─ Use GSAP ScrollTrigger extensively
├─ Make scroll feel smooth (Lenis)
├─ Leverage typography as visual element
├─ Each section: Different "mood"
└─ Pacing: Let user control experience
```

#### ACTIVE THEORY

```
WHAT MAKES THEM SPECIAL:

1. Color Gradients
   └─ Subtle gradients everywhere
   └─ Dynamic (can change)
   └─ Colors feel organic, not flat
   
2. Motion Values (Framer Motion)
   └─ Values animate, drive other properties
   └─ Interconnected animations
   └─ Smooth, layered transitions
   
3. Micro-interactions
   └─ Every hover, click, scroll has purpose
   └─ Details matter immensely

HOW TO APPLY TO BRIKMAN:
├─ Gradients: Cyber Pulse everywhere
├─ Use Framer Motion for value-driven animations
├─ Interconnect animations (color → scale → shadow)
├─ Micro-interactions: Hover effects, form focus
└─ Details: Subtle glow, shadows, color shifts
```

#### NOIR PIXEL

```
WHAT MAKES THEM SPECIAL:

1. Minimalism
   └─ Few colors (mostly black/white + 1-2 accents)
   └─ Lots of white space
   └─ Clean, sharp typography
   
2. Bold Accents
   └─ Color appears rarely, maximizes impact
   └─ High contrast
   └─ Draws eye immediately
   
3. Confidence
   └─ No "filler" content
   └─ Every element has reason
   └─ Respects user time

HOW TO APPLY TO BRIKMAN:
├─ DEEP SPACE + minimal accent colors
├─ Use NEON CYAN strategically (CTAs, key moments)
├─ Generous padding/margins
├─ No unnecessary elements
└─ Quiet confidence in design
```

#### CUBERTO

```
WHAT MAKES THEM SPECIAL:

1. Typography Scale
   └─ Headers are HUGE
   └─ Creates visual hierarchy
   └─ Monospace + serif combinations
   
2. Spatial Awareness
   └─ Perfect balance of elements
   └─ Composition always pleasing
   
3. Grid Foundation
   └─ Everything aligns to grid
   └─ But not rigid (human feel)

HOW TO APPLY TO BRIKMAN:
├─ H1/H2 large and commanding (56-72px)
├─ Careful composition (every pixel matters)
├─ SPACE MONO for headings (monospace)
├─ Grid-based layout (12 columns)
└─ Break grid intentionally for human touch
```

#### DOGSTUDIO

```
WHAT MAKES THEM SPECIAL:

1. Playfulness
   └─ Animations feel joyful
   └─ Surprises: Hover effects reveal unexpected things
   
2. Micro-animations
   └─ Particles, trails, small movements
   └─ Mouse tracking
   └─ Creates engagement
   
3. Perfection in Details
   └─ Easing curves precise
   └─ Timing perfect
   └─ Polish evident

HOW TO APPLY TO BRIKMAN:
├─ Particle field in hero (playful)
├─ Hover effects have personality
├─ Mouse tracking in Spotify section
├─ Micro sounds for interactions
└─ Attention to easing and timing
```

#### RESN

```
WHAT MAKES THEM SPECIAL:

1. Conceptual Clarity
   └─ Design serves the idea
   └─ Every visual choice motivated
   
2. Narrative Structure
   └─ Clear beginning, middle, end
   └─ User understands journey
   
3. Uniqueness
   └─ Doesn't look like anyone else
   └─ Memorable visual language

HOW TO APPLY TO BRIKMAN:
├─ Central concept: Code + Music fusion
├─ Every visual reinforces this concept
├─ Narrative: Act I (mystery) → Act II (revelation) → Act III (proof) → Act IV (invitation)
├─ Unique visual language (not template-based)
└─ Distinctive enough to be remembered
```

### 2. Technical Benchmarks

```
PERFORMANCE TARGETS:

Lighthouse Score:
├─ Performance: 95+
├─ Accessibility: 95+
├─ Best Practices: 95+
├─ SEO: 100

Core Web Vitals:
├─ LCP: < 2.0s
├─ FID: < 100ms
├─ CLS: < 0.05

Network:
├─ First byte: < 600ms
├─ Total load: < 3s
├─ JS size: < 200KB (gzipped)
├─ CSS size: < 50KB (gzipped)

Responsiveness:
├─ Mobile-first design
├─ Touch targets: 44x44px minimum
├─ Font size: 16px+ on mobile
└─ Max viewport width: 1440px

Accessibility:
├─ WCAG 2.1 AA minimum
├─ Ideally: WCAG 2.1 AAA
├─ Color contrast: 7:1 preferred
├─ Keyboard navigation: 100% accessible
└─ Screen reader: Fully compatible
```

### 3. Design Inspiration Checklist

```
BEFORE BUILDING EACH SECTION, CHECK:

□ Color Palette:
  └─ Using DEEP SPACE, NEON CYAN, WARM AMBER, PULSING MAGENTA?
  └─ Gradients from defined list?
  
□ Typography:
  └─ SPACE MONO for headings?
  └─ INTER for body?
  └─ JETBRAINS for technical?
  └─ Sizes from scale?
  
□ Spacing:
  └─ Multiple of 4px?
  └─ Consistent padding/margins?
  └─ Breathing room?
  
□ Animations:
  └─ Has purpose?
  └─ Respects prefers-reduced-motion?
  └─ 300-600ms typical duration?
  └─ Proper easing curve?
  
□ Interactions:
  └─ Hover states clear?
  └─ Focus visible?
  └─ Feedback on action?
  
□ Accessibility:
  └─ Color contrast adequate?
  └─ Alt text on images?
  └─ ARIA labels where needed?
  └─ Keyboard navigable?
  
□ Mobile:
  └─ Text readable?
  └─ Buttons tappable?
  └─ Scroll smooth?
  └─ Animations performant?
```

---

## RESUMEN EJECUTIVO

### El Viaje en Una Oración

**Brikmanpaul.dev no es un portafolio: es una experiencia inmersiva que funde arquitectura de código con arquitectura sonora, demostrando que la excelencia existe en ambas dimensiones.**

### Puntos Clave

**Visual Identity**:
- Paleta: DEEP SPACE + NEON CYAN + WARM AMBER + PULSING MAGENTA
- Tipografía: SPACE MONO (headers) + INTER (body) + JETBRAINS (tech)
- Estética: Synthwave-inspired, Progressive House energy, Premium tech vibes

**Arquitectura**:
- Stack: Next.js 15, React 19, TypeScript, GSAP, Lenis, Three.js, Framer Motion
- Estructura: Single-page con secciones smooth-scrollables + blog separado
- Performance: Target >95 Lighthouse, <2s LCP

**Experiencia**:
- 4 Actos narrativos: Misterio → Revelación → Prueba → Invitación
- Micro-interacciones, audio, partículas, visualizadores
- Spotify release como centerpiece (July 17, 2026)

**Desarrollo**:
- Roadmap 8 meses: Foundation → Visual → Interactivity → Content
- Fase por fase, MVP-first, iterativo
- Target: Awwwards-worthy final product

### Próximos Pasos

1. **Aprobación**: Review este documento, feedback, adjustments
2. **Setup**: Iniciar Fase 1 (Next.js project, folder structure, config)
3. **Content**: Mientras tanto, redactar About, bio, project descriptions
4. **Timeline**: Publicar cada mes siguiente conforme avanza desarrollo
5. **Iterate**: Cada fase incluye review, adjustments, refinements

---

## APPENDIX: Archivos de Referencia

### A. Color Reference

```css
/* CSS Variables for brand */
:root {
  --color-deep-space: #0F1419;
  --color-neon-cyan: #00D9FF;
  --color-warm-amber: #FFB800;
  --color-pulsing-magenta: #FF00FF;
  
  --color-dark-grey: #1A1F2E;
  --color-light-grey: #E8EAED;
  --color-accent-blue: #4A90FF;
  --color-deep-magenta: #8B00FF;
  
  --gradient-cyber-pulse: linear-gradient(135deg, var(--color-neon-cyan), var(--color-pulsing-magenta));
  --gradient-sonic-wave: linear-gradient(45deg, var(--color-warm-amber), var(--color-neon-cyan));
  --gradient-depth-void: radial-gradient(circle, var(--color-deep-space), var(--color-deep-magenta));
  --gradient-human-touch: linear-gradient(180deg, var(--color-warm-amber), var(--color-deep-space));
}
```

### B. Easing Reference

```javascript
// Copiar-pegar easing curves
const easing = {
  entrance: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  snappy: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  cinematic: 'cubic-bezier(0.4, 0, 0.2, 1)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
}
```

### C. Font Setup Template

```tsx
// app/layout.tsx
import { Space_Mono, Inter, JetBrains_Mono } from 'next/font/google'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

// Use in className or CSS
<body className={`${spaceMono.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
```

---

**Documento completado.**  
**Version 1.0 - Final para desarrollo.**  
**Listo para fase 1: Foundation.**

Cualquier pregunta o ajuste necesario, este documento es tu blueprint completo.

¡Adelante con Brikman Paul Morales. El mundo no está listo para lo que vas a crear! 🚀
