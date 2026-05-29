"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AnalysisModeToggle } from "@/components/simulator/AnalysisModeToggle";
import { SimulatorControls } from "@/components/simulator/SimulatorControls";
import { SimulatorStepImage } from "@/components/simulator/SimulatorStepImage";
import { SimulatorStepInfo } from "@/components/simulator/SimulatorStepInfo";
import { SimulatorTimeline } from "@/components/simulator/SimulatorTimeline";
import { StepAnalysisQuestion } from "@/components/simulator/StepAnalysisQuestion";
import { getAnalysisQuestion } from "@/data/simulatorAnalysis";
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
  const [analysisMode, setAnalysisMode] = useState(false);
  const activeStep = simulator.steps[activeIndex];
  const analysisQuestion =
    activeStep.analysisQuestion ??
    getAnalysisQuestion(simulator.id, activeStep.id);

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
              href="/simulaciones"
              className="text-sm font-bold text-[#1d4ed8] transition hover:text-[#4d8eff] dark:text-[#adc6ff] dark:hover:text-white"
            >
              Volver a simulaciones
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="blue">{simulator.category}</Badge>
              <Badge tone={riskTone[simulator.riskLevel]}>
                Riesgo {simulator.riskLevel}
              </Badge>
              <Badge>{simulator.estimatedTime}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-5xl">
              {simulator.title}
            </h1>
            <p className="mt-4 text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
              {simulator.subtitle}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--app-text-secondary)]">
              {simulator.description}
            </p>
          </div>
          <div className="grid min-w-56 gap-3">
            <AnalysisModeToggle
              enabled={analysisMode}
              onChange={setAnalysisMode}
            />
            <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--app-text-muted)]">
                Avance del recorrido
              </p>
              <p className="mt-2 font-mono text-2xl font-black text-[var(--app-text-primary)]">
                Paso {activeIndex + 1} de {simulator.steps.length}
              </p>
              <p className="mt-1 text-xs font-semibold text-[var(--app-text-muted)]">
                {formatPercent(progress)} completado
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded bg-[var(--app-bg-muted)]">
                <motion.div
                  className="h-full rounded bg-[#4d8eff]"
                  animate={{ width: formatPercent(progress) }}
                  transition={{ duration: 0.3 }}
                />
              </div>
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
        <div className="space-y-5">
          <SimulatorStepInfo step={activeStep} />
          {analysisMode ? (
            <StepAnalysisQuestion
              key={activeStep.id}
              analysisQuestion={analysisQuestion}
            />
          ) : null}
        </div>
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
