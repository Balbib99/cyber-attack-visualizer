# AttackFlow Lab

AttackFlow Lab es una plataforma educativa e interactiva de ciberseguridad en español. Permite aprender cómo funcionan amenazas comunes mediante simulaciones visuales, consejos prácticos, herramientas recomendadas y retos de conocimiento.

El proyecto está pensado como una pieza de portfolio: combina frontend moderno, UX educativa, diseño de producto y contenido aplicado de ciberseguridad con un enfoque defensivo.

## Demo

Demo: Añadir enlace cuando esté desplegado.

## Objetivo del proyecto

Muchas explicaciones de ciberseguridad son demasiado teóricas, técnicas o difíciles de aplicar al día a día. AttackFlow Lab busca hacer el aprendizaje más visual y práctico:

- Entender amenazas mediante flujos paso a paso.
- Relacionar riesgos con situaciones reales.
- Aplicar buenas prácticas de seguridad diaria.
- Practicar con retos cortos y feedback inmediato.
- Conectar aprendizaje, simulación, tips y progreso.

## Funcionalidades principales

- Landing principal orientada a reclutadores y portfolio.
- Panel interno de aprendizaje.
- Biblioteca de amenazas de ciberseguridad.
- Simuladores visuales paso a paso para Phishing y SQL Injection.
- Simulaciones basadas en imágenes educativas locales.
- Consejos de seguridad diaria con mockups visuales.
- Tip del DNI con marca de agua y documento ficticio.
- Herramientas recomendadas como VirusTotal, Have I Been Pwned, Google Safe Browsing e INCIBE.
- Centro de retos interactivos.
- Retos de Phishing y SQL Injection.
- Preguntas tipo test, verdadero/falso, ordenar pasos y elegir la mejor defensa.
- Progreso de conocimiento guardado en localStorage.
- Rutas de aprendizaje conectadas entre amenazas, simuladores, tips y retos.
- Tema claro/oscuro con paleta soft cyber.
- Diseño responsive.

## Capturas

> Añadir capturas de la landing, panel, simuladores, tips y centro de retos.

Estructura sugerida:

```md
docs/screenshots/
├── landing.png
├── panel.png
├── simulador-phishing.png
├── tip-dni.png
└── retos.png
```

## Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/` | Landing de presentación del proyecto |
| `/panel` | Panel interno de aprendizaje |
| `/amenazas` | Biblioteca de amenazas |
| `/amenazas/[id]` | Detalle de amenaza y ruta de aprendizaje |
| `/simulaciones` | Hub de simuladores visuales |
| `/simulador/[id]` | Simulador paso a paso |
| `/seguridad-diaria` | Consejos prácticos de seguridad |
| `/seguridad-diaria/[id]` | Detalle visual de cada tip |
| `/retos` | Centro de retos |
| `/retos/[id]` | Ejecución de reto interactivo |

## Stack técnico

Tecnologías detectadas en el proyecto:

- Next.js 16 con App Router.
- React 19.
- TypeScript.
- Tailwind CSS 4.
- Framer Motion.
- lucide-react para iconografía.
- next/image para imágenes optimizadas.
- localStorage para progreso de retos y preferencia de tema.
- Datos mock locales en TypeScript.
- ESLint con configuración de Next.js.

No hay backend, base de datos ni autenticación en esta versión. La aplicación está planteada como frontend educativo preparado para crecer.

## Instalación y ejecución

Instala dependencias:

```bash
npm install
```

Ejecuta el entorno de desarrollo:

```bash
npm run dev
```

Abre:

```bash
http://localhost:3000
```

Genera build de producción:

```bash
npm run build
```

Ejecuta el build:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Estructura del proyecto

```txt
src/
├── app/                 # Rutas con Next.js App Router
├── components/          # Componentes reutilizables por dominio
│   ├── challenges/
│   ├── dashboard/
│   ├── layout/
│   ├── learning/
│   ├── safety/
│   ├── simulations/
│   ├── simulator/
│   ├── theme/
│   ├── threats/
│   └── ui/
├── data/                # Datos mock locales
├── hooks/               # Hooks de cliente
├── lib/                 # Utilidades y helpers
└── types/               # Tipos TypeScript
```

## Enfoque educativo y defensivo

AttackFlow Lab no está diseñado para enseñar explotación ofensiva. El contenido se centra en:

- Comprender riesgos comunes.
- Identificar señales de alerta.
- Aprender mitigaciones.
- Aplicar buenas prácticas.
- Tomar mejores decisiones antes de compartir datos o credenciales.

En el caso de SQL Injection, las explicaciones se mantienen conceptuales y defensivas, sin payloads reales ni instrucciones explotables.

## Valor como proyecto de portfolio

Este proyecto demuestra:

- Arquitectura frontend escalable con App Router.
- Modelado de datos mock tipado.
- Componentización por dominio.
- Diseño visual premium con estética dark tech.
- Theming claro/oscuro con persistencia local.
- UX educativa orientada a aprendizaje guiado.
- Rutas conectadas entre contenido informativo y práctica.
- Uso de imágenes optimizadas y mockups visuales.
- Estado local con localStorage.
- Atención a accesibilidad básica y responsive design.

## Rutas de aprendizaje

La aplicación conecta contenido mediante rutas guiadas:

1. Aprende una amenaza.
2. Observa una simulación visual.
3. Consulta tips o herramientas relacionadas.
4. Practica con un reto.
5. Revisa tu progreso.

Ejemplos implementados:

- Phishing: amenaza, simulador, tips relacionados y reto.
- SQL Injection: amenaza, simulador conceptual y reto defensivo.

## Tema claro/oscuro

La aplicación incluye un sistema propio de tema claro/oscuro:

- Tema oscuro como experiencia principal dark tech.
- Tema claro soft cyber con fondo gris azulado.
- Preferencia persistida en localStorage.
- Toggle accesible en la navegación.

## Mejoras futuras

Ideas planteadas para próximas iteraciones:

- Añadir más simuladores visuales.
- Crear tips específicos para SQL Injection: validación de entradas, consultas seguras, errores internos y mínimos privilegios.
- Incorporar más retos y niveles de dificultad.
- Añadir métricas de progreso más detalladas.
- Explorar React Flow para diagramas interactivos.
- Añadir animaciones más avanzadas con Framer Motion.
- Crear capturas y demo pública en Vercel.
- Añadir tests automatizados.
- Evaluar una futura capa backend para persistir progreso real.

## Estado del proyecto

Versión frontend funcional orientada a portfolio. Usa datos locales y no maneja datos reales de usuarios.

## Licencia

Pendiente de definir.
