"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { AnalysisSessionSummary } from "@/components/simulator/AnalysisSessionSummary";
import { AnalysisModeToggle } from "@/components/simulator/AnalysisModeToggle";
import { SimulatorControls } from "@/components/simulator/SimulatorControls";
import { SimulatorStepImage } from "@/components/simulator/SimulatorStepImage";
import { SimulatorStepInfo } from "@/components/simulator/SimulatorStepInfo";
import { SimulatorTimeline } from "@/components/simulator/SimulatorTimeline";
import { StepAnalysisQuestion } from "@/components/simulator/StepAnalysisQuestion";
import { getAnalysisQuestion } from "@/data/simulatorAnalysis";
import { formatPercent } from "@/lib/utils";
import type {
  AttackSimulator,
  SimulatorAnalysisQuestion,
  SimulatorRiskLevel,
} from "@/types/simulator";
import type { AnalysisAnswer } from "@/components/simulator/StepAnalysisQuestion";

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
  const [analysisSelections, setAnalysisSelections] = useState<
    Record<string, string>
  >({});
  const [analysisAnswers, setAnalysisAnswers] = useState<
    Record<string, AnalysisAnswer>
  >({});
  const activeStep = simulator.steps[activeIndex];
  const analysisQuestion =
    activeStep.analysisQuestion ??
    getAnalysisQuestion(simulator.id, activeStep.id);
  const analysisQuestionsByStep = useMemo(() => {
    const questions: Record<string, SimulatorAnalysisQuestion> = {};

    simulator.steps.forEach((step) => {
      const question =
        step.analysisQuestion ?? getAnalysisQuestion(simulator.id, step.id);

      if (question) {
        questions[step.id] = question;
      }
    });

    return questions;
  }, [simulator.id, simulator.steps]);
  const totalAnalysisQuestions = Object.keys(analysisQuestionsByStep).length;
  const answeredAnalysisCount = Object.keys(analysisAnswers).filter(
    (stepId) => analysisQuestionsByStep[stepId],
  ).length;
  const correctAnalysisCount = Object.values(analysisAnswers).filter(
    (answer) => answer.isCorrect,
  ).length;
  const analysisComplete =
    totalAnalysisQuestions > 0 &&
    answeredAnalysisCount === totalAnalysisQuestions;
  const activeSelectionId = analysisSelections[activeStep.id];
  const activeAnswer = analysisAnswers[activeStep.id];

  const progress = useMemo(() => {
    if (simulator.steps.length <= 1) {
      return 0;
    }

    return (activeIndex / (simulator.steps.length - 1)) * 100;
  }, [activeIndex, simulator.steps.length]);

  const handleSelectAnalysisOption = (optionId: string) => {
    setAnalysisSelections((current) => ({
      ...current,
      [activeStep.id]: optionId,
    }));
  };

  const handleCheckAnalysisAnswer = () => {
    if (!analysisQuestion || !activeSelectionId || activeAnswer) {
      return;
    }

    const selectedOption = analysisQuestion.options.find(
      (option) => option.id === activeSelectionId,
    );

    if (!selectedOption) {
      return;
    }

    setAnalysisAnswers((current) => ({
      ...current,
      [activeStep.id]: {
        stepId: activeStep.id,
        selectedOptionId: selectedOption.id,
        isCorrect: selectedOption.isCorrect,
      },
    }));
  };

  const handleRetryAnalysisStep = () => {
    setAnalysisSelections((current) => {
      const next = { ...current };
      delete next[activeStep.id];
      return next;
    });
    setAnalysisAnswers((current) => {
      const next = { ...current };
      delete next[activeStep.id];
      return next;
    });
  };

  const handleResetAnalysis = () => {
    setAnalysisSelections({});
    setAnalysisAnswers({});
    setActiveIndex(0);
    setAnalysisMode(true);
  };

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
            {analysisMode ? (
              <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--app-text-muted)]">
                  Observaciones correctas
                </p>
                <p className="mt-2 font-mono text-2xl font-black text-[var(--app-text-primary)]">
                  {correctAnalysisCount} de {totalAnalysisQuestions}
                </p>
                <p className="mt-1 text-xs font-semibold text-[var(--app-text-muted)]">
                  {answeredAnalysisCount} preguntas respondidas
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded bg-[var(--app-bg-muted)]">
                  <motion.div
                    className="h-full rounded bg-[var(--app-success)]"
                    animate={{
                      width:
                        totalAnalysisQuestions > 0
                          ? formatPercent(
                              (correctAnalysisCount / totalAnalysisQuestions) *
                                100,
                            )
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Card>

      <SimulatorTimeline
        steps={simulator.steps}
        activeIndex={activeIndex}
        onStepChange={setActiveIndex}
      />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-start">
        <div className="space-y-4">
          <SimulatorStepImage step={activeStep} priority={activeIndex === 0} />
          {analysisMode ? (
            <StepAnalysisQuestion
              key={activeStep.id}
              stepId={activeStep.id}
              analysisQuestion={analysisQuestion}
              selectedOptionId={activeSelectionId}
              answer={activeAnswer}
              onSelectOption={handleSelectAnalysisOption}
              onCheck={handleCheckAnalysisAnswer}
              onRetry={handleRetryAnalysisStep}
            />
          ) : null}
        </div>
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

      {analysisMode && analysisComplete ? (
        <AnalysisSessionSummary
          correctCount={correctAnalysisCount}
          totalQuestions={totalAnalysisQuestions}
          challengeHref={
            simulator.relatedChallengeId
              ? `/retos/${simulator.relatedChallengeId}`
              : undefined
          }
          challengeLabel={`Ahora haz el reto de ${
            simulator.id === "sql-injection" ? "SQL Injection" : "Phishing"
          }`}
          onReset={handleResetAnalysis}
        />
      ) : null}

    </div>
  );
}
