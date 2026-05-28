import Link from "next/link";
import {
  BrainCircuit,
  CheckCircle2,
  MessageSquareWarning,
  MousePointerClick,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { ScenarioCard } from "@/components/scenarios/ScenarioCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { scenarios } from "@/data/scenarios";

export const metadata = {
  title: "Escenarios prácticos | AttackFlow Lab",
  description:
    "Casos prácticos para entrenar decisiones reales ante situaciones cotidianas de ciberseguridad.",
};

const flowSteps = [
  {
    title: "Lee la situación",
    description: "Empieza por una escena breve y realista.",
    icon: MessageSquareWarning,
  },
  {
    title: "Elige una decisión",
    description: "Selecciona cómo actuarías antes de ver la respuesta.",
    icon: MousePointerClick,
  },
  {
    title: "Recibe feedback",
    description: "Comprende consecuencias y señales de alerta.",
    icon: BrainCircuit,
  },
  {
    title: "Aprende la acción segura",
    description: "Cierra con una recomendación defensiva clara.",
    icon: ShieldCheck,
  },
];

export default function ScenariosPage() {
  const availableScenarios = scenarios.filter(
    (scenario) => scenario.status === "available",
  );

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] p-6 shadow-2xl shadow-[var(--app-shadow)] sm:p-8 lg:p-10">
        <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
        <div className="relative grid gap-8 xl:grid-cols-[1fr_24rem] xl:items-end">
          <div className="max-w-4xl">
            <Badge tone="orange">Practica sin presión</Badge>
            <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-6xl">
              Escenarios prácticos
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
              Practica decisiones reales sin miedo a equivocarte.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--app-text-secondary)]">
              Cada escenario te plantea una situación breve, varias decisiones
              posibles y feedback inmediato para entender consecuencias y
              buenas prácticas.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/escenarios/email-urgente"
                className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
              >
                Empezar con email sospechoso
              </Link>
              <Link
                href="/retos"
                className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#1d4ed8] transition hover:bg-[#4d8eff]/10 dark:text-[#adc6ff]"
              >
                Ver Centro de retos
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <Metric label="Escenarios disponibles" value={String(availableScenarios.length)} />
            <Metric label="Formato" value="Decisiones guiadas" />
            <Metric label="Respuesta" value="Feedback inmediato" />
            <Metric label="Privacidad" value="Sin datos reales" />
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Casos"
          title="Escenarios disponibles"
          description="Practica situaciones concretas antes de encontrarlas en el mundo real."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {availableScenarios.map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Método"
          title="Cómo funciona"
          description="Los escenarios entrenan decisiones. Los retos comprueban conocimiento. Juntos completan la parte práctica."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {flowSteps.map((step, index) => (
            <FlowStep key={step.title} index={index} {...step} />
          ))}
        </div>
      </section>

      <Card className="p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]">
            <CheckCircle2 className="h-5 w-5" />
          </span>
          <div>
            <Badge tone="green">No pasa nada por equivocarse</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              Decidir bien también se entrena
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--app-text-secondary)]">
              Las amenazas suelen aprovechar momentos de prisa, duda o
              confianza. Estos escenarios te ayudan a reconocer señales y elegir
              una acción segura antes de que el riesgo escale.
            </p>
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
      <h2 className="mt-4 text-3xl font-black text-[var(--app-text-primary)]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--app-text-muted)]">
        {label}
      </p>
      <p className="mt-2 text-xl font-black text-[var(--app-text-primary)]">
        {value}
      </p>
    </div>
  );
}

function FlowStep({
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
