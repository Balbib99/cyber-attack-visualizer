"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { ChallengeProgress } from "@/types/challenge";

const STORAGE_KEY = "attackflow-challenge-progress";

function readProgress(): ChallengeProgress[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ChallengeProgress[]) : [];
  } catch {
    return [];
  }
}

function writeProgress(progress: ChallengeProgress[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function useChallengeProgress() {
  const [progress, setProgress] = useState<ChallengeProgress[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setProgress(readProgress());
      setIsLoaded(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const saveResult = useCallback(
    (challengeId: string, score: number, totalQuestions: number) => {
      const now = new Date().toISOString();
      const percentage =
        totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

      setProgress((current) => {
        const existing = current.find((item) => item.challengeId === challengeId);
        const nextItem: ChallengeProgress = {
          challengeId,
          completed: true,
          score,
          totalQuestions,
          percentage,
          updatedAt: now,
          completedAt: now,
          bestScore: Math.max(score, existing?.bestScore ?? 0),
        };
        const next = [
          ...current.filter((item) => item.challengeId !== challengeId),
          nextItem,
        ];
        writeProgress(next);
        return next;
      });
    },
    [],
  );

  const resetChallenge = useCallback((challengeId: string) => {
    setProgress((current) => {
      const next = current.filter((item) => item.challengeId !== challengeId);
      writeProgress(next);
      return next;
    });
  }, []);

  const getProgress = useCallback(
    (challengeId: string) =>
      progress.find((item) => item.challengeId === challengeId),
    [progress],
  );

  const globalProgress = useMemo(() => {
    if (progress.length === 0) {
      return {
        completedCount: 0,
        averagePercentage: 0,
      };
    }

    const completed = progress.filter((item) => item.completed);
    const averagePercentage = Math.round(
      progress.reduce((total, item) => total + item.percentage, 0) /
        progress.length,
    );

    return {
      completedCount: completed.length,
      averagePercentage,
    };
  }, [progress]);

  return {
    isLoaded,
    progress,
    globalProgress,
    getProgress,
    saveResult,
    resetChallenge,
  };
}
