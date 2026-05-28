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
      className="rounded-lg border border-white/10 bg-[#121212]/80 p-4"
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
              className={`rounded border p-3 text-left transition ${
                isActive
                  ? "border-[#4d8eff] bg-[#4d8eff]/12 shadow-[0_0_24px_rgba(77,142,255,0.14)]"
                  : isDone
                    ? "border-[#4edea3]/35 bg-[#4edea3]/10"
                    : "border-white/10 bg-[#050505] hover:border-[#4d8eff]/35"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-slate-500">
                  {String(step.order).padStart(2, "0")}
                </span>
                <span
                  className={`grid h-7 w-7 place-items-center rounded border text-xs ${
                    isDone
                      ? "border-[#4edea3]/40 bg-[#4edea3]/10 text-[#6ffbbe]"
                      : isActive
                        ? "border-[#4d8eff]/40 bg-[#4d8eff]/10 text-[#adc6ff]"
                        : "border-white/10 bg-white/[0.04] text-slate-400"
                  }`}
                >
                  {isDone ? <Check className="h-4 w-4" /> : step.order}
                </span>
              </div>
              <p className="mt-3 line-clamp-2 text-xs font-bold leading-5 text-slate-200">
                {step.title}
              </p>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
