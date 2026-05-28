"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { SimulatorAnalysisQuestion } from "@/types/simulator";

type StepAnalysisQuestionProps = {
  analysisQuestion?: SimulatorAnalysisQuestion;
};

export function StepAnalysisQuestion({
  analysisQuestion,
}: StepAnalysisQuestionProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [checkedOptionId, setCheckedOptionId] = useState<string | null>(null);

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
  const checkedOption = analysisQuestion.options.find(
    (option) => option.id === checkedOptionId,
  );

  return (
    <Card className="p-5">
      <Badge tone="blue">Modo análisis</Badge>
      <h2 className="mt-4 text-xl font-black text-[var(--app-text-primary)]">
        {analysisQuestion.question}
      </h2>

      <div className="mt-5 grid gap-3">
        {analysisQuestion.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isChecked = checkedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setSelectedOptionId(option.id);
                setCheckedOptionId(null);
              }}
              className={cn(
                "rounded border p-4 text-left text-sm font-semibold leading-6 transition focus:outline-none focus:ring-2 focus:ring-[#4d8eff]",
                isSelected
                  ? "border-[#4d8eff] bg-[#4d8eff]/10 text-[var(--app-text-primary)]"
                  : "border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-[var(--app-text-secondary)] hover:border-[#4d8eff]/45",
                isChecked &&
                  option.isCorrect &&
                  "border-[color:var(--app-success)]/45 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]",
                isChecked &&
                  !option.isCorrect &&
                  "border-[color:var(--app-warning)]/45 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]",
              )}
            >
              <span className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-current">
                  {isChecked ? (
                    option.isCorrect ? (
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    ) : (
                      <AlertTriangle className="h-3.5 w-3.5" />
                    )
                  ) : null}
                </span>
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          disabled={!selectedOption}
          onClick={() => setCheckedOptionId(selectedOptionId)}
          className="rounded bg-[#4d8eff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Comprobar
        </button>
        {checkedOption ? (
          <button
            type="button"
            onClick={() => {
              setSelectedOptionId(null);
              setCheckedOptionId(null);
            }}
            className="rounded border border-[var(--app-border)] px-5 py-3 text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
          >
            Volver a elegir
          </button>
        ) : null}
      </div>

      {checkedOption ? (
        <div
          className={`mt-5 rounded border p-4 text-sm leading-6 ${
            checkedOption.isCorrect
              ? "border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]"
              : "border-[color:var(--app-warning)]/30 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]"
          }`}
        >
          <p className="font-black">
            {checkedOption.isCorrect ? "Correcto" : "Revisa esta decisión"}
          </p>
          <p className="mt-2">{analysisQuestion.explanation}</p>
        </div>
      ) : null}
    </Card>
  );
}
