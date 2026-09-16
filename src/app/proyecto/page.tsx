import Link from "next/link";
import {
  BrainCircuit,
  CheckCircle2,
  Code2,
  Compass,
  DatabaseZap,
  Eye,
  FlaskConical,
  GraduationCap,
  Layers3,
  Lightbulb,
  MonitorSmartphone,
  MoonStar,
  Puzzle,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ProjectProblemExpandableText } from "@/components/project/ProjectProblemExpandableText";

export const metadata = {
  title: "Proyecto | AttackFlow Lab",
  description:
    "Case study profesional de AttackFlow Lab: plataforma educativa e interactiva de ciberseguridad.",
};

const solutionFeatures = [
  {
    title: "Simulaciones visuales",
    description: "Amenazas explicadas paso a paso mediante escenas educativas.",
    icon: Eye,
  },
  {
    title: "Modo análisis",
    description: "Preguntas contextuales integradas dentro de cada simulación.",
    icon: BrainCircuit,
  },
  {
    title: "Seguridad diaria",
    description: "Consejos prácticos para decisiones digitales cotidianas.",
    icon: ShieldCheck,
  },
  {
    title: "Escenarios interactivos",
    description: "Casos realistas para entrenar la toma de decisiones.",
    icon: Puzzle,
  },
  {
    title: "Retos",
    description: "Ejercicios breves para validar conocimientos adquiridos.",
    icon: Trophy,
  },
  {
    title: "Rutas guiadas",
    description: "Recorridos que ordenan el aprendizaje por temas.",
    icon: Route,
  },
];

const learningFlow = [
  { title: "Amenazas", icon: ShieldCheck },
  { title: "Simulaciones", icon: FlaskConical },
  { title: "Modo análisis", icon: BrainCircuit },
  { title: "Consejos prácticos", icon: Lightbulb },
  { title: "Escenarios", icon: Puzzle },
  { title: "Retos", icon: Trophy },
];

const highlightBlocks = [
  {
    title: "Simulaciones visuales",
    description: "Visualización paso a paso de amenazas comunes.",
    icon: Eye,
  },
  {
    title: "Modo análisis",
    description: "Preguntas contextuales integradas en cada simulación.",
    icon: BrainCircuit,
  },
  {
    title: "Seguridad diaria",
    description: "Consejos prácticos aplicables a situaciones reales.",
    icon: ShieldCheck,
  },
  {
    title: "Escenarios",
    description: "Entrenamiento de toma de decisiones.",
    icon: Puzzle,
  },
  {
    title: "Retos",
    description: "Evaluación del conocimiento adquirido.",
    icon: Trophy,
  },
];

const technicalChallenges = [
  {
    title: "Experiencia educativa sin backend",
    description:
      "La app organiza aprendizaje, simulación y práctica usando datos locales y estado de cliente.",
    icon: GraduationCap,
  },
  {
    title: "Arquitectura escalable",
    description:
      "Los modelos permiten añadir nuevas amenazas, simuladores, retos y escenarios sin rehacer páginas.",
    icon: Layers3,
  },
  {
    title: "Estado interactivo",
    description:
      "Los simuladores gestionan modo análisis, respuestas por paso y resumen de sesión sin persistencia.",
    icon: DatabaseZap,
  },
  {
    title: "Responsive completo",
    description:
      "Cada flujo se adapta a desktop, tablet y móvil manteniendo jerarquía visual.",
    icon: MonitorSmartphone,
  },
  {
    title: "Tema claro y oscuro",
    description:
      "La paleta de expediente (papel/rust en claro, tablero cálido en oscuro) mantiene contraste y personalidad visual en ambos modos.",
    icon: MoonStar,
  },
  {
    title: "Componentes reutilizables",
    description:
      "Cards, badges, layouts, timelines y secciones educativas se componen de forma consistente.",
    icon: Code2,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vercel",
];

const demonstrates = [
  {
    title: "Diseño de producto",
    description: "Definición de recorridos, jerarquía de secciones y foco de usuario.",
    icon: Compass,
  },
  {
    title: "UX/UI",
    description: "Interfaz amable, clara y accesible para conceptos complejos.",
    icon: Sparkles,
  },
  {
    title: "Arquitectura Frontend",
    description: "Estructura de datos y componentes preparada para crecer.",
    icon: Layers3,
  },
  {
    title: "React y TypeScript",
    description: "Estado local, tipado y composición de experiencias interactivas.",
    icon: Code2,
  },
  {
    title: "Diseño educativo",
    description: "Transformación de teoría en aprendizaje visual y práctico.",
    icon: GraduationCap,
  },
  {
    title: "Ciberseguridad aplicada",
    description: "Enfoque defensivo, responsable y sin instrucciones ofensivas.",
    icon: ShieldCheck,
  },
];

export default function ProjectCaseStudyPage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_26rem] lg:items-center">
        <div>
          <Badge tone="blue">Case Study</Badge>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-[var(--app-text-primary)] sm:text-7xl">
            AttackFlow Lab
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
            Un laboratorio frontend sin backend: Next.js 16 con App Router,
            datos mock tipados en TypeScript y estado de cliente para simular
            6 amenazas, evaluar 6 retos y persistir progreso en localStorage.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/simulaciones"
              className="rounded bg-[var(--app-primary)] px-5 py-3 text-center text-sm font-bold text-[var(--app-surface)] transition hover:bg-[var(--app-primary-dark)] hover:text-[var(--app-surface)]"
            >
              Ver simulaciones
            </Link>
            <a
              href="https://github.com/Balbib99/cyber-attack-visualizer"
              target="_blank"
              rel="noreferrer"
              className="rounded border border-[var(--app-border)] px-5 py-3 text-center text-sm font-bold text-[var(--app-text-secondary)] transition hover:border-[var(--app-primary)]/40 hover:text-[var(--app-text-primary)]"
            >
              Ver GitHub
            </a>
          </div>
        </div>
        <HeroCaseStudyVisual />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SoftIllustration />
        <div>
          <SectionIntro
            eyebrow="El problema"
            title="¿Qué problema quería resolver?"
            description="Durante mi formación en ciberseguridad llegué a una conclusión que se repetía en muchos casos de estudio e incidentes analizados: la tecnología por sí sola no es suficiente para protegernos."
          />
          <ProjectProblemExpandableText />
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="La solución"
          title="La solución propuesta"
          description="Diseñé una plataforma educativa donde los usuarios pueden aprender amenazas comunes, visualizar cómo funcionan paso a paso y practicar la toma de decisiones en entornos seguros."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {solutionFeatures.map((feature) => (
            <IconCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Arquitectura educativa"
          title="Arquitectura de aprendizaje"
          description="Cada sección cumple una función concreta dentro del recorrido educativo."
        />
        <Card className="p-5 sm:p-6">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {learningFlow.map((item, index) => (
              <FlowStep
                key={item.title}
                icon={item.icon}
                index={index + 1}
                title={item.title}
              />
            ))}
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Producto"
          title="Características principales"
          description="Bloques preparados para sustituir fácilmente los placeholders por capturas reales del producto."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlightBlocks.map((block) => (
            <FeaturePreview key={block.title} {...block} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Ingeniería"
          title="Retos técnicos abordados"
          description="El proyecto combina diseño de experiencia, arquitectura frontend y estado interactivo sin depender de servicios externos."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {technicalChallenges.map((challenge) => (
            <IconCard key={challenge.title} {...challenge} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Stack"
          title="Tecnologías utilizadas"
          description="Sin servidor ni base de datos: toda la lógica —progreso, tema, resultados de retos— vive en el cliente. Es una decisión deliberada, no una limitación: mantiene el proyecto desplegable como sitio estático y fuerza un modelo de datos tipado y disciplinado."
        />
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--app-border)] bg-[var(--app-surface)] px-5 py-3 text-sm font-black text-[var(--app-text-primary)] shadow-lg shadow-[var(--app-shadow)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <Card className="overflow-hidden p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[3rem_minmax(0,1fr)]">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
            <Lightbulb className="h-6 w-6" />
          </span>
          <div>
            <Badge tone="green">Insight</Badge>
            <h2 className="mt-4 text-3xl font-black text-[var(--app-text-primary)]">
              Lo que aprendí desarrollando AttackFlow Lab
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--app-text-secondary)]">
              Modelar una amenaza como dato tipado (Threat) en vez de como
              texto suelto obligó a decidir, para cada una, qué es una &ldquo;señal
              de alerta&rdquo; verificable y qué es una mitigación real, no solo
              describir el ataque. Ese ejercicio de tipado terminó siendo más
              un ejercicio de análisis de seguridad que de ingeniería de
              software.
            </p>
          </div>
        </div>
      </Card>

      <section className="space-y-6">
        <SectionIntro
          eyebrow="Valor portfolio"
          title="¿Qué demuestra este proyecto?"
          description="Una muestra integral de producto frontend, UX educativa y ciberseguridad aplicada desde un enfoque defensivo."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {demonstrates.map((item) => (
            <IconCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <Card className="relative overflow-hidden p-6 text-center sm:p-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-[var(--app-primary)]/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <Badge tone="blue">Explora el producto</Badge>
          <h2 className="mt-5 text-4xl font-black text-[var(--app-text-primary)]">
            Explora AttackFlow Lab
          </h2>
          <p className="mt-4 leading-7 text-[var(--app-text-secondary)]">
            Puedes recorrer simulaciones, practicar con escenarios y comprobar
            conocimientos directamente desde la aplicación.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/simulaciones"
              className="rounded bg-[var(--app-primary)] px-5 py-3 text-center text-sm font-bold text-[var(--app-surface)] transition hover:bg-[var(--app-primary-dark)] hover:text-[var(--app-surface)]"
            >
              Ir a simulaciones
            </Link>
            <Link
              href="/rutas"
              className="rounded border border-[var(--app-primary)]/40 px-5 py-3 text-center text-sm font-bold text-[var(--app-primary)] transition hover:bg-[var(--app-primary)]/10 dark:text-[var(--app-primary-dark)]"
            >
              Explorar rutas
            </Link>
            <Link
              href="/retos"
              className="rounded border border-[var(--app-border)] px-5 py-3 text-center text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
            >
              Ver retos
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge tone="blue">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-black text-[var(--app-text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 leading-7 text-[var(--app-text-secondary)]">
        {description}
      </p>
    </div>
  );
}

function IconCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="p-5">
      <span className="grid h-11 w-11 place-items-center rounded border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-xl font-black text-[var(--app-text-primary)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
        {description}
      </p>
    </Card>
  );
}

function FlowStep({
  title,
  icon: Icon,
  index,
}: {
  title: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <div className="relative rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
      <div className="flex items-center justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs font-black text-[var(--app-text-muted)]">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-4 font-black text-[var(--app-text-primary)]">{title}</p>
      {index < learningFlow.length ? (
        <p className="mt-2 text-xs font-bold text-[var(--app-text-muted)]">
          continúa hacia la siguiente fase
        </p>
      ) : (
        <p className="mt-2 text-xs font-bold text-[var(--app-text-muted)]">
          valida lo aprendido
        </p>
      )}
    </div>
  );
}

function FeaturePreview({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
        <PlaceholderVisual icon={Icon} title={title} />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black text-[var(--app-text-primary)]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
          {description}
        </p>
      </div>
    </Card>
  );
}

function PlaceholderVisual({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded border border-[var(--app-border)] bg-[var(--app-bg-muted)]">
      <div className="absolute inset-0 lab-grid opacity-[0.08]" />
      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 px-3 py-1 text-xs font-bold text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
        <Icon className="h-4 w-4" />
        Placeholder captura
      </div>
      <div className="absolute inset-x-4 bottom-4 rounded border border-[var(--app-border)] bg-[var(--app-surface)]/90 p-4 backdrop-blur">
        <p className="text-sm font-black text-[var(--app-text-primary)]">
          {title}
        </p>
        <div className="mt-3 h-2 rounded-full bg-[var(--app-primary)]/20">
          <div className="h-full w-2/3 rounded-full bg-[var(--app-primary)]" />
        </div>
      </div>
    </div>
  );
}

function HeroCaseStudyVisual() {
  return (
    <Card className="relative overflow-hidden p-5">
      <div className="absolute -right-10 top-0 h-40 w-40 bg-[var(--app-primary)]/20 blur-3xl" />
      <div className="absolute -bottom-10 left-0 h-40 w-40 bg-[var(--app-success)]/20 blur-3xl" />
      <div className="relative space-y-4">
        <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
              <Target className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
                Product case
              </p>
              <p className="font-black text-[var(--app-text-primary)]">
                Aprender, observar y practicar
              </p>
            </div>
          </div>
        </div>
        {[
          "Simulación visual",
          "Pregunta contextual",
          "Escenario práctico",
          "Reto de conocimiento",
        ].map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-3"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--app-primary-soft)] font-mono text-xs font-black text-[var(--app-primary-dark)]">
              {index + 1}
            </span>
            <span className="text-sm font-bold text-[var(--app-text-secondary)]">
              {item}
            </span>
            <CheckCircle2 className="ml-auto h-4 w-4 text-[var(--app-success)]" />
          </div>
        ))}
      </div>
    </Card>
  );
}

function SoftIllustration() {
  return (
    <Card className="relative min-h-80 overflow-hidden p-6">
      <div className="absolute inset-0 lab-grid opacity-[0.08]" />
      <div className="absolute right-6 top-8 h-28 w-28 rounded-full bg-[var(--app-primary)]/15 blur-2xl" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div>
          <Badge tone="orange">Antes</Badge>
          <h3 className="mt-4 text-2xl font-black text-[var(--app-text-primary)]">
            Conceptos difíciles de visualizar
          </h3>
        </div>
        <div className="grid gap-3">
          {["Demasiada teoría", "Poca práctica", "Baja claridad visual"].map(
            (item) => (
              <div
                key={item}
                className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-4 py-3 text-sm font-bold text-[var(--app-text-secondary)]"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </Card>
  );
}
