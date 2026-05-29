"use client";

import Link from "next/link";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";
import { Card } from "@/components/ui/Card";

export function KnowledgeProgressCard() {
  const { globalProgress, isLoaded } = useChallengeProgress();

  const completedText = isLoaded
    ? `${globalProgress.completedCount} retos completados`
    : "Progreso local";
  const suggested =
    globalProgress.completedCount === 0
      ? {
          label: "Empieza por la simulación de Phishing",
          href: "/simulador/phishing",
        }
      : globalProgress.completedCount === 1
        ? {
            label: "Continúa con SQL Injection",
            href: "/simulador/sql-injection",
          }
        : {
            label: "Revisar nuevas rutas",
            href: "/retos",
          };

  return (
    <Card className="p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--app-text-muted)]">
        Progreso de conocimiento
      </p>
      <p className="mt-4 text-4xl font-black text-[#6ffbbe]">
        {isLoaded ? `${globalProgress.averagePercentage}%` : "--"}
      </p>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
        {completedText}. Practica con pruebas cortas y feedback inmediato.
      </p>
      <div className="mt-6 h-2 overflow-hidden rounded bg-[var(--app-surface-elevated)]">
        <div
          className="h-full rounded bg-[#4edea3]"
          style={{ width: `${globalProgress.averagePercentage}%` }}
        />
      </div>
      <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
        Siguiente paso sugerido
      </p>
      <Link
        href={suggested.href}
        className="mt-5 inline-flex rounded border border-[#4edea3]/35 px-4 py-2 text-sm font-bold text-[#6ffbbe] transition hover:bg-[#4edea3]/10"
      >
        {suggested.label}
      </Link>
    </Card>
  );
}
