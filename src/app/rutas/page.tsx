import Link from "next/link";
import {
  BookOpen,
  BrainCircuit,
  Lightbulb,
  MessageSquareWarning,
  PlayCircle,
  Route,
  type LucideIcon,
} from "lucide-react";
import { GuidingQuestionCard } from "@/components/education/GuidingQuestionCard";
import { LearningPathCard } from "@/components/learning-paths/LearningPathCard";
import { LearningPathRoadmap } from "@/components/learning-paths/LearningPathRoadmap";
import { LearningPathsHero } from "@/components/learning-paths/LearningPathsHero";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { learningPaths, upcomingLearningPaths } from "@/data/learningPaths";

export const metadata = {
  title: "Rutas de aprendizaje | AttackFlow Lab",
  description:
    "Recorridos guiados que conectan amenazas, simulaciones, consejos y retos de ciberseguridad.",
};

const howItWorks = [
  {
    title: "Entiende la amenaza",
    description: "Empieza por el contexto, el impacto y las señales clave.",
    icon: BookOpen,
  },
  {
    title: "Observa la simulación",
    description: "Mira el flujo paso a paso con una escena visual defensiva.",
    icon: PlayCircle,
  },
  {
    title: "Revisa tips prácticos",
    description: "Conecta el riesgo con decisiones reales del día a día.",
    icon: Lightbulb,
  },
  {
    title: "Practica decisiones reales",
    description: "Entrena situaciones cotidianas sin miedo a equivocarte.",
    icon: MessageSquareWarning,
  },
  {
    title: "Completa el reto",
    description: "Valida lo aprendido con feedback inmediato y progreso local.",
    icon: BrainCircuit,
  },
];

export default function LearningPathsPage() {
  const availablePaths = learningPaths.filter(
    (path) => path.status === "available",
  );
  const stepsPerPath = availablePaths[0]?.steps.length ?? 0;

  return (
    <div className="space-y-12">
      <LearningPathsHero
        availableCount={availablePaths.length}
        stepsPerPath={stepsPerPath}
      />

      <GuidingQuestionCard
        question="¿Por dónde empiezo?"
        description="Sigue recorridos guiados que conectan amenazas, simulaciones, consejos, escenarios y retos para aprender sin saltarte pasos."
        icon={<Route className="h-6 w-6" />}
      />

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Disponibles"
          title="Rutas disponibles"
          description="Elige un recorrido completo para aprender, simular, decidir y practicar sin perderte."
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {availablePaths.map((path) => (
            <LearningPathCard key={path.id} path={path} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Formato"
          title="Una ruta combina varias formas de aprender"
          description="Las rutas no sustituyen al resto de secciones: las ordenan para que avances con una secuencia clara."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((item, index) => (
            <HowItWorksCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Roadmap"
          title="Próximas rutas"
          description="Contenido planificado para ampliar el mapa de aprendizaje de AttackFlow Lab."
        />
        <LearningPathRoadmap paths={upcomingLearningPaths} />
      </section>

      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge tone="green">Aprende y practica</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              ¿Prefieres ir directo al entrenamiento?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
              Puedes entrar al Centro de retos y validar conocimientos por tema.
            </p>
          </div>
          <Link
            href="/retos"
            className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            Ver Centro de retos
          </Link>
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
      <h2 className="mt-4 text-3xl font-black text-[var(--app-text-primary)]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function HowItWorksCard({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs font-black text-[var(--app-text-muted)]">
          0{index + 1}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-black text-[var(--app-text-primary)]">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
        {description}
      </p>
    </Card>
  );
}
