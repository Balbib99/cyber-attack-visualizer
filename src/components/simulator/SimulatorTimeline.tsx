"use client";

import { Check } from "lucide-react";
import type { SimulatorStep } from "@/types/simulator";

type SimulatorTimelineProps = {
  steps: SimulatorStep[];
  activeIndex: number;
  onStepChange: (index: number) => void;
};

export function SimulatorTimeline({
  steps,
  activeIndex,
  onStepChange,
}: SimulatorTimelineProps) {
  return (
    <nav
      aria-label="Pasos de la simulación"
      className="rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] p-4"
    >
      <div className="grid gap-3 md:grid-cols-4 xl:grid-cols-8">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isDone = index < activeIndex;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onStepChange(index)}
              aria-current={isActive ? "step" : undefined}
              className={`rounded border p-3 text-left transition focus:outline-none focus:ring-2 focus:ring-[var(--app-primary)]/60 ${
                isActive
                  ? "border-[var(--app-primary)] bg-[var(--app-primary)]/12 shadow-[0_0_24px_rgba(163,64,44,0.14)]"
                  : isDone
                    ? "border-[var(--app-success)]/35 bg-[var(--app-success)]/10"
                    : "border-[var(--app-border)] bg-[var(--app-surface-elevated)] hover:border-[var(--app-primary)]/35"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-[var(--app-text-muted)]">
                  {String(step.order).padStart(2, "0")}
                </span>
                <span
                  className={`grid h-7 w-7 place-items-center rounded border text-xs ${
                    isDone
                      ? "border-[var(--app-success)]/40 bg-[var(--app-success)]/10 text-[var(--app-success)] dark:text-[var(--app-success)]"
                      : isActive
                        ? "border-[var(--app-primary)]/40 bg-[var(--app-primary)]/10 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]"
                        : "border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text-muted)]"
                  }`}
                >
                  {isDone ? <Check className="h-4 w-4" /> : step.order}
                </span>
              </div>
              <p className="mt-3 line-clamp-2 text-xs font-bold leading-5 text-[var(--app-text-primary)]">
                {step.title}
              </p>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
