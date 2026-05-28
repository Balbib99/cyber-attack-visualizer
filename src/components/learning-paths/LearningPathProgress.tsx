"use client";

import { CheckCircle2, CircleDashed } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";
import type { LearningPath } from "@/types/learningPath";

export function getPathProgressFromChallenge(
  path: LearningPath,
  challengePercentage?: number,
) {
  const completedChallenge = (challengePercentage ?? 0) >= 100;
  const requiredSteps = path.steps.filter((step) => step.required).length;
  const completedRequiredSteps = completedChallenge ? requiredSteps : 0;
  const percentage = completedChallenge ? 100 : 0;

  return {
    completedRequiredSteps,
    requiredSteps,
    percentage,
    completedChallenge,
  };
}

export function LearningPathProgress({ path }: { path: LearningPath }) {
  const { getProgress, isLoaded } = useChallengeProgress();
  const challengeProgress =
    isLoaded && path.relatedChallengeId
      ? getProgress(path.relatedChallengeId)
      : undefined;
  const progress = getPathProgressFromChallenge(path, challengeProgress?.percentage);

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Progreso de ruta
          </p>
          <p className="mt-2 text-3xl font-black text-[var(--app-text-primary)]">
            {progress.percentage}%
          </p>
        </div>
        {progress.completedChallenge ? (
          <CheckCircle2 className="h-9 w-9 text-[#6ffbbe]" />
        ) : (
          <CircleDashed className="h-9 w-9 text-[#adc6ff]" />
        )}
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded bg-white/10">
        <div
          className="h-full rounded bg-[#4d8eff]"
          style={{ width: `${progress.percentage}%` }}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">
        Completa el reto relacionado para validar esta ruta. Los pasos de
        lectura y simulación se muestran como guía visual.
      </p>
      <p className="mt-3 text-xs font-bold text-slate-500">
        {progress.completedRequiredSteps} de {progress.requiredSteps} pasos
        obligatorios validados
      </p>
    </Card>
  );
}
