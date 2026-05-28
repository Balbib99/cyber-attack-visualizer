import Link from "next/link";
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  PlayCircle,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { LearningPathStep, LearningPathStepType } from "@/types/learningPath";

const stepMeta: Record<
  LearningPathStepType,
  { label: string; cta: string; icon: LucideIcon }
> = {
  threat: { label: "Amenaza", cta: "Ver amenaza", icon: BookOpen },
  simulator: { label: "Simulación", cta: "Abrir simulación", icon: PlayCircle },
  tip: { label: "Tip práctico", cta: "Ver tips", icon: Lightbulb },
  challenge: { label: "Reto", cta: "Hacer reto", icon: BrainCircuit },
};

export function LearningPathStepCard({
  step,
  index,
  completed,
}: {
  step: LearningPathStep;
  index: number;
  completed?: boolean;
}) {
  const meta = stepMeta[step.type];
  const Icon = meta.icon;

  return (
    <article
      className={cn(
        "relative rounded border border-[var(--app-border)] bg-[var(--app-surface)] p-5 transition hover:border-[#4d8eff]/45 hover:bg-[var(--app-surface-elevated)]",
        completed && "border-[color:var(--app-success)]/35",
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex items-center gap-3 sm:block">
          <span className="grid h-11 w-11 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 font-mono text-sm font-black text-[#1d4ed8] dark:text-[#adc6ff]">
            {index + 1}
          </span>
          <span className="grid h-11 w-11 place-items-center rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-[#1d4ed8] dark:text-[#adc6ff] sm:mt-3">
            <Icon className="h-5 w-5" />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2">
            <Badge tone="blue">{meta.label}</Badge>
            {step.required ? <Badge tone="orange">Obligatorio</Badge> : null}
            {completed ? <Badge tone="green">Validado</Badge> : null}
          </div>
          <h3 className="mt-4 text-xl font-black text-[var(--app-text-primary)]">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
            {step.description}
          </p>
          {step.estimatedTime ? (
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--app-text-muted)]">
              Tiempo estimado: {step.estimatedTime}
            </p>
          ) : null}
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          {completed ? (
            <CheckCircle2 className="h-6 w-6 text-[var(--app-success)]" />
          ) : null}
          <Link
            href={step.href}
            className="rounded bg-[#4d8eff] px-4 py-2 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            {meta.cta}
          </Link>
        </div>
      </div>
    </article>
  );
}
