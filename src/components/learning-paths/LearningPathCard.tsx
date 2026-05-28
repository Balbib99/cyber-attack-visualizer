"use client";

import Link from "next/link";
import { Clock, ListChecks, Route, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";
import type { LearningPath } from "@/types/learningPath";
import { getPathProgressFromChallenge } from "./LearningPathProgress";

export function LearningPathCard({ path }: { path: LearningPath }) {
  const { getProgress, isLoaded } = useChallengeProgress();
  const challengeProgress =
    isLoaded && path.relatedChallengeId
      ? getProgress(path.relatedChallengeId)
      : undefined;
  const progress = getPathProgressFromChallenge(path, challengeProgress?.percentage);

  return (
    <Card className="p-5 transition hover:border-[#4d8eff]/45 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex flex-wrap gap-2">
        <Badge tone="green">Disponible</Badge>
        <Badge tone="blue">{path.category}</Badge>
        <Badge>{path.level}</Badge>
      </div>

      <h2 className="mt-5 text-2xl font-black text-[var(--app-text-primary)]">
        {path.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
        {path.description}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        <Metric icon={Clock} label="Tiempo" value={path.estimatedTime} />
        <Metric icon={ListChecks} label="Pasos" value={String(path.steps.length)} />
        <Metric icon={Trophy} label="Progreso" value={`${progress.percentage}%`} />
        <Metric icon={Route} label="Nivel" value={path.level} />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Link
          href={`/rutas/${path.id}`}
          className="inline-flex items-center justify-center rounded bg-[#4d8eff] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
        >
          Ver ruta
        </Link>
        <div className="flex flex-wrap gap-3 text-sm font-bold">
          {path.relatedSimulatorId ? (
            <Link
              href={`/simulador/${path.relatedSimulatorId}`}
              className="rounded border border-[var(--app-border)] px-3 py-2 text-center text-[var(--app-text-secondary)] transition hover:border-[#4d8eff]/40 hover:bg-[#4d8eff]/10 hover:text-[#1d4ed8] dark:hover:text-[#adc6ff]"
            >
              Abrir simulación
            </Link>
          ) : null}
          {path.relatedChallengeId ? (
            <Link
              href={`/retos/${path.relatedChallengeId}`}
              className="rounded border border-[var(--app-border)] px-3 py-2 text-center text-[var(--app-text-secondary)] transition hover:border-[#4edea3]/35 hover:bg-[#4edea3]/10 hover:text-[#047857] dark:hover:text-[#6ffbbe]"
            >
              Hacer reto
            </Link>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-3">
      <Icon className="h-4 w-4 text-[#1d4ed8] dark:text-[#adc6ff]" />
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--app-text-muted)]">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-[var(--app-text-primary)]">
        {value}
      </p>
    </div>
  );
}
