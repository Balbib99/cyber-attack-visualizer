"use client";

import { LearningPathStepCard } from "@/components/learning-paths/LearningPathStepCard";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";
import type { LearningPath } from "@/types/learningPath";

export function LearningPathTimeline({ path }: { path: LearningPath }) {
  const { getProgress, isLoaded } = useChallengeProgress();
  const challengeProgress =
    isLoaded && path.relatedChallengeId
      ? getProgress(path.relatedChallengeId)
      : undefined;
  const challengeCompleted = Boolean(challengeProgress?.completed);

  return (
    <div className="relative space-y-4">
      <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-[var(--app-border)] sm:block" />
      {path.steps.map((step, index) => (
        <div key={step.id} className="relative sm:pl-12">
          <LearningPathStepCard
            step={step}
            index={index}
            completed={step.type === "challenge" && challengeCompleted}
          />
        </div>
      ))}
    </div>
  );
}
