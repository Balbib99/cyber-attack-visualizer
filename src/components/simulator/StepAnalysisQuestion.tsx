"use client";

import { AlertTriangle, CheckCircle2, HelpCircle, SearchCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { SimulatorAnalysisQuestion } from "@/types/simulator";

export type AnalysisAnswer = {
  stepId: string;
  selectedOptionId: string;
  isCorrect: boolean;
};

type StepAnalysisQuestionProps = {
  stepId: string;
  analysisQuestion?: SimulatorAnalysisQuestion;
  selectedOptionId?: string;
  answer?: AnalysisAnswer;
  onSelectOption: (optionId: string) => void;
  onCheck: () => void;
  onRetry: () => void;
};

export function StepAnalysisQuestion({
  stepId,
  analysisQuestion,
  selectedOptionId,
  answer,
  onSelectOption,
  onCheck,
  onRetry,
}: StepAnalysisQuestionProps) {
  if (!analysisQuestion) {
    return (
      <Card className="p-5">
        <Badge tone="blue">Modo análisis</Badge>
        <div className="mt-4 flex items-start gap-3 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
          <HelpCircle className="mt-0.5 h-5 w-5 text-[#1d4ed8] dark:text-[#adc6ff]" />
          <p className="text-sm leading-6 text-[var(--app-text-secondary)]">
            Este paso no tiene análisis disponible todavía.
          </p>
        </div>
      </Card>
    );
  }

  const selectedOption = analysisQuestion.options.find(
    (option) => option.id === selectedOptionId,
  );
  const answeredOption = analysisQuestion.options.find(
    (option) => option.id === answer?.selectedOptionId,
  );
  const isAnswered = Boolean(answer);

  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
          <SearchCheck className="h-5 w-5" />
        </span>
        <div>
          <Badge tone="blue">Modo análisis</Badge>
          <h2 className="mt-3 text-xl font-black text-[var(--app-text-primary)]">
            {analysisQuestion.question}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
            Observa la escena y elige la señal, mala práctica o defensa clave.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {analysisQuestion.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isAnsweredSelection = answer?.selectedOptionId === option.id;
          const revealCorrect = isAnswered && option.isCorrect;
          const revealWrong = isAnsweredSelection && !option.isCorrect;

          return (
            <motion.button
              key={option.id}
              type="button"
              layout
              disabled={isAnswered}
              onClick={() => onSelectOption(option.id)}
              className={cn(
                "rounded border p-4 text-left text-sm font-semibold leading-6 transition focus:outline-none focus:ring-2 focus:ring-[#4d8eff]",
                isSelected
                  ? "border-[#4d8eff] bg-[#4d8eff]/10 text-[var(--app-text-primary)]"
                  : "border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-[var(--app-text-secondary)] hover:border-[#4d8eff]/45",
                revealCorrect &&
                  "border-[color:var(--app-success)]/45 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]",
                revealWrong &&
                  "border-[color:var(--app-warning)]/45 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]",
                isAnswered && "cursor-default",
              )}
              whileTap={!isAnswered ? { scale: 0.985 } : undefined}
            >
              <span className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current">
                  {revealCorrect ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : revealWrong ? (
                    <AlertTriangle className="h-3.5 w-3.5" />
                  ) : null}
                </span>
                <span>{option.label}</span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!selectedOption || isAnswered}
          onClick={onCheck}
          className="rounded bg-[#4d8eff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Comprobar
        </button>
        {isAnswered ? (
          <button
            type="button"
            onClick={onRetry}
            className="rounded border border-[var(--app-border)] px-5 py-3 text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
          >
            Volver a elegir
          </button>
        ) : null}
      </div>

      {answer ? (
        <motion.div
          key={`${stepId}-${answer.selectedOptionId}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`mt-5 rounded border p-4 text-sm leading-6 ${
            answer.isCorrect
              ? "border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]"
              : "border-[color:var(--app-warning)]/30 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]"
          }`}
        >
          <p className="font-black">
            {answer.isCorrect ? "Buena observación" : "No exactamente"}
          </p>
          {!answer.isCorrect && answeredOption ? (
            <p className="mt-2">
              Marcaste: <span className="font-bold">{answeredOption.label}</span>.
            </p>
          ) : null}
          {!answer.isCorrect ? (
            <p className="mt-2">
              La opción correcta aparece resaltada en verde para que puedas
              comparar la señal clave.
            </p>
          ) : null}
          <p className="mt-2">{analysisQuestion.explanation}</p>
        </motion.div>
      ) : null}
    </Card>
  );
}
