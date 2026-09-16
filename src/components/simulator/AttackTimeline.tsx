"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { IconByName } from "@/components/ui/IconByName";
import type { SimulationStep } from "@/types/threat";
import type { SimulatorMode } from "@/components/simulator/AttackModeToggle";

type AttackTimelineProps = {
  steps: SimulationStep[];
  activeIndex: number;
  mode: SimulatorMode;
  onStepChange: (index: number) => void;
};

export function AttackTimeline({
  steps,
  activeIndex,
  mode,
  onStepChange,
}: AttackTimelineProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-[var(--app-surface-elevated)]/80 p-4">
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-9">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isComplete = index < activeIndex;

          return (
            <button
              key={step.id}
              type="button"
              onClick={() => onStepChange(index)}
              className={`relative rounded border p-3 text-left transition ${
                isActive
                  ? mode === "defense"
                    ? "border-[var(--app-success)] bg-[var(--app-success)]/12"
                    : "border-[var(--app-primary)] bg-[var(--app-primary)]/12"
                  : isComplete
                    ? "border-[var(--app-success)]/30 bg-[var(--app-success)]/8"
                    : "border-white/10 bg-[var(--app-surface-elevated)] hover:border-[var(--app-primary)]/35"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="active-step-ring"
                  className={`absolute inset-0 rounded border ${
                    mode === "defense"
                      ? "border-[var(--app-success)]/50"
                      : "border-[var(--app-primary)]/50"
                  }`}
                />
              ) : null}
              <div className="relative flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`grid h-8 w-8 place-items-center rounded border ${
                    isComplete
                      ? "border-[var(--app-success)]/40 bg-[var(--app-success)]/10 text-[var(--app-success)]"
                      : isActive
                        ? "border-[var(--app-primary)]/40 bg-[var(--app-primary)]/10 text-[var(--app-primary-dark)]"
                        : "border-white/10 bg-white/[0.03] text-slate-400"
                  }`}
                >
                  {isComplete ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <IconByName name={step.icon} className="h-4 w-4" />
                  )}
                </span>
              </div>
              <p className="relative mt-3 line-clamp-2 text-xs font-bold leading-5 text-slate-200">
                {step.nodeLabel}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
