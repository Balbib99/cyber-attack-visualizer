"use client";

import Link from "next/link";
import { Clock, ListChecks, Play, Trophy } from "lucide-react";
import { RelatedInlineLinks } from "@/components/education/RelatedInlineLinks";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Stamp } from "@/components/ui/Stamp";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";
import type { CyberChallenge } from "@/types/challenge";

export function ChallengeCard({ challenge }: { challenge: CyberChallenge }) {
  const { getProgress, isLoaded } = useChallengeProgress();
  const progress = isLoaded ? getProgress(challenge.id) : undefined;
  const statusTone = progress?.completed ? "success" : progress ? "accent" : "muted";
  const statusLabel = progress?.completed
    ? "Resuelto"
    : progress
      ? "En curso"
      : "Sin abrir";

  return (
    <Card
      notch
      className="relative p-5 transition hover:border-[var(--app-primary)]/45"
    >
      <div className="absolute right-4 top-4">
        <Stamp tone={statusTone}>{statusLabel}</Stamp>
      </div>
      <div className="flex flex-wrap gap-2 pr-24">
        <Badge tone="blue">{challenge.category}</Badge>
        <Badge>{challenge.difficulty}</Badge>
      </div>
      <h2 className="mt-5 text-2xl text-[var(--app-text-primary)]">
        {challenge.title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
        {challenge.description}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Metric icon={Clock} label="Duración" value={challenge.estimatedTime} />
        <Metric
          icon={ListChecks}
          label="Pruebas"
          value={String(challenge.questions.length)}
        />
        <Metric
          icon={Trophy}
          label="Progreso"
          value={progress ? `${progress.percentage}%` : "Sin iniciar"}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <Link
          href={`/retos/${challenge.id}`}
          className="inline-flex items-center justify-center gap-2 rounded bg-[var(--app-primary)] px-4 py-2.5 text-sm font-bold text-[var(--app-surface)] transition hover:bg-[var(--app-primary-dark)] hover:text-[var(--app-surface)]"
        >
          <Play className="h-4 w-4" />
          {progress?.completed ? "Continuar" : "Iniciar reto"}
        </Link>
        <RelatedInlineLinks
          label="También puedes ver"
          links={[
            { label: "Ruta completa", href: `/rutas/${challenge.id}` },
            { label: "Simulación", href: challenge.relatedSimulatorPath },
          ]}
        />
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
      <Icon className="h-4 w-4 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]" />
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--app-text-muted)]">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-[var(--app-text-primary)]">
        {value}
      </p>
    </div>
  );
}
