"use client";

import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { learningPaths } from "@/data/learningPaths";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";
import { getPathProgressFromChallenge } from "./LearningPathProgress";

export function PanelLearningPathCard() {
  const { getProgress, isLoaded } = useChallengeProgress();
  const phishingPath = learningPaths.find((path) => path.id === "phishing");
  const sqlPath = learningPaths.find((path) => path.id === "sql-injection");
  const phishingProgress =
    isLoaded && phishingPath?.relatedChallengeId
      ? getProgress(phishingPath.relatedChallengeId)
      : undefined;
  const recommendedPath = phishingProgress?.completed && sqlPath ? sqlPath : phishingPath;

  if (!recommendedPath) {
    return null;
  }

  const challengeProgress =
    isLoaded && recommendedPath.relatedChallengeId
      ? getProgress(recommendedPath.relatedChallengeId)
      : undefined;
  const progress = getPathProgressFromChallenge(
    recommendedPath,
    challengeProgress?.percentage,
  );

  return (
    <Card className="p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 place-items-center rounded border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
            <Route className="h-6 w-6" />
          </span>
          <div>
            <Badge tone="blue">Continúa tu ruta de aprendizaje</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              {recommendedPath.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--app-text-secondary)]">
              Sigue un recorrido guiado con amenaza, simulación, tips y reto
              para consolidar lo aprendido.
            </p>
          </div>
        </div>
        <div className="min-w-[12rem]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
            Progreso
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded bg-[var(--app-bg-muted)]">
            <div
              className="h-full rounded bg-[var(--app-primary)]"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
          <Link
            href={`/rutas/${recommendedPath.id}`}
            className="mt-4 inline-flex items-center gap-2 rounded bg-[var(--app-primary)] px-4 py-2 text-sm font-bold text-[var(--app-surface)] transition hover:bg-[var(--app-primary-dark)] hover:text-[var(--app-surface)]"
          >
            Continuar ruta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
