"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { AttackModeToggle, type SimulatorMode } from "@/components/simulator/AttackModeToggle";
import { AttackStepPanel } from "@/components/simulator/AttackStepPanel";
import { AttackTimeline } from "@/components/simulator/AttackTimeline";
import { DefenseInsightCard } from "@/components/simulator/DefenseInsightCard";
import { SceneRenderer } from "@/components/simulator/SceneRenderer";
import { SimulatorControls } from "@/components/simulator/SimulatorControls";
import { formatPercent } from "@/lib/utils";
import type { Threat } from "@/types/threat";

export function AttackSimulator({ threat }: { threat: Threat }) {
  const steps = threat.simulationSteps ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState<SimulatorMode>("attack");
  const activeStep = steps[activeIndex];

  const progress = useMemo(() => {
    if (steps.length === 0) {
      return 0;
    }

    return ((activeIndex + 1) / steps.length) * 100;
  }, [activeIndex, steps.length]);

  if (!activeStep) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#121212]/80 p-6">
        <p className="text-slate-300">
          Este simulador todavía no está disponible para esta amenaza.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-white/10 bg-[#121212]/80 p-5">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <Badge tone={mode === "defense" ? "green" : "blue"}>
              {mode === "defense" ? "Modo defensa activo" : "Modo ataque activo"}
            </Badge>
            <h2 className="mt-3 text-2xl font-black text-white">
              Historia visual: {threat.name}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Avanza por la cadena y cambia a modo defensa para ver dónde se
              puede cortar el ataque.
            </p>
          </div>
          <AttackModeToggle mode={mode} onModeChange={setMode} />
        </div>
        <div className="mt-5 flex items-center gap-4">
          <div className="h-3 flex-1 overflow-hidden rounded border border-white/10 bg-[#050505] p-0.5">
            <motion.div
              className={`h-full rounded ${
                mode === "defense" ? "bg-[#4edea3]" : "bg-[#4d8eff]"
              }`}
              animate={{ width: formatPercent(progress) }}
              transition={{ duration: 0.35 }}
            />
          </div>
          <span className="font-mono text-xs text-slate-400">
            {activeIndex + 1}/{steps.length}
          </span>
        </div>
      </section>

      <AttackTimeline
        steps={steps}
        activeIndex={activeIndex}
        mode={mode}
        onStepChange={setActiveIndex}
      />

      <section className="grid gap-6 xl:grid-cols-[1fr_24rem]">
        <SceneRenderer step={activeStep} mode={mode} />
        <aside className="space-y-5">
          <AttackStepPanel step={activeStep} />
          <DefenseInsightCard step={activeStep} />
        </aside>
      </section>

      <section className="rounded-lg border border-white/10 bg-[#121212]/80 p-5">
        <SimulatorControls
          canGoBack={activeIndex > 0}
          canGoForward={activeIndex < steps.length - 1}
          onPrevious={() => setActiveIndex((value) => Math.max(0, value - 1))}
          onNext={() =>
            setActiveIndex((value) => Math.min(steps.length - 1, value + 1))
          }
          onReset={() => {
            setActiveIndex(0);
            setMode("attack");
          }}
        />
      </section>
    </div>
  );
}
