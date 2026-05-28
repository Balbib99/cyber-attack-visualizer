"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SimulatorControls } from "@/components/simulator/SimulatorControls";
import { SimulatorStepImage } from "@/components/simulator/SimulatorStepImage";
import { SimulatorStepInfo } from "@/components/simulator/SimulatorStepInfo";
import { SimulatorTimeline } from "@/components/simulator/SimulatorTimeline";
import { formatPercent } from "@/lib/utils";
import type { AttackSimulator, SimulatorRiskLevel } from "@/types/simulator";

type VisualAttackSimulatorProps = {
  simulator: AttackSimulator;
};

const riskTone: Record<SimulatorRiskLevel, "green" | "orange" | "red"> = {
  bajo: "green",
  medio: "orange",
  alto: "orange",
  crítico: "red",
};

export function VisualAttackSimulator({ simulator }: VisualAttackSimulatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = simulator.steps[activeIndex];

  const progress = useMemo(() => {
    if (simulator.steps.length <= 1) {
      return 0;
    }

    return (activeIndex / (simulator.steps.length - 1)) * 100;
  }, [activeIndex, simulator.steps.length]);

  return (
    <div className="space-y-6">
      <Card className="relative overflow-hidden p-6 sm:p-8">
        <div className="absolute right-0 top-0 h-64 w-64 bg-[#4d8eff]/10 blur-3xl" />
        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <Link
              href="/amenazas"
              className="text-sm font-bold text-[#adc6ff] transition hover:text-white"
            >
              Volver al explorador
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="blue">{simulator.category}</Badge>
              <Badge tone={riskTone[simulator.riskLevel]}>
                Riesgo {simulator.riskLevel}
              </Badge>
              <Badge>{simulator.estimatedTime}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-black text-white sm:text-5xl">
              {simulator.title}
            </h1>
            <p className="mt-4 text-xl font-semibold leading-8 text-[#adc6ff]">
              {simulator.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              {simulator.description}
            </p>
          </div>
          <div className="min-w-48 rounded border border-white/10 bg-[#050505] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Avance del recorrido
            </p>
            <p className="mt-2 font-mono text-2xl font-black text-white">
              Paso {activeIndex + 1} de {simulator.steps.length}
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-500">
              {formatPercent(progress)} completado
            </p>
            <div className="mt-3 h-2 overflow-hidden rounded bg-white/10">
              <motion.div
                className="h-full rounded bg-[#4d8eff]"
                animate={{ width: formatPercent(progress) }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </Card>

      <SimulatorTimeline
        steps={simulator.steps}
        activeIndex={activeIndex}
        onStepChange={setActiveIndex}
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <SimulatorStepImage step={activeStep} priority={activeIndex === 0} />
        <SimulatorStepInfo step={activeStep} />
      </section>

      <Card className="p-5">
        <SimulatorControls
          canGoBack={activeIndex > 0}
          canGoForward={activeIndex < simulator.steps.length - 1}
          currentStep={activeIndex + 1}
          totalSteps={simulator.steps.length}
          onPrevious={() => setActiveIndex((value) => Math.max(0, value - 1))}
          onNext={() =>
            setActiveIndex((value) =>
              Math.min(simulator.steps.length - 1, value + 1),
            )
          }
          onReset={() => setActiveIndex(0)}
        />
      </Card>

    </div>
  );
}
