"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { CyberScenario } from "@/types/scenario";
import { RelatedScenarioLinks } from "./RelatedScenarioLinks";
import { ScenarioFeedback } from "./ScenarioFeedback";

export function ScenarioDecisionRunner({
  scenario,
}: {
  scenario: CyberScenario;
}) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [checkedOptionId, setCheckedOptionId] = useState<string | null>(null);
  const selectedOption = scenario.options.find(
    (option) => option.id === selectedOptionId,
  );
  const checkedOption = scenario.options.find(
    (option) => option.id === checkedOptionId,
  );

  return (
    <div className="space-y-5">
      <Card className="p-5">
        <Badge tone="blue">Decisión</Badge>
        <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
          {scenario.question}
        </h2>
        <div className="mt-5 grid gap-3">
          {scenario.options.map((option) => {
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
                  "rounded border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#4d8eff]",
                  isSelected
                    ? "border-[#4d8eff] bg-[#4d8eff]/10"
                    : "border-[var(--app-border)] bg-[var(--app-surface-elevated)] hover:border-[#4d8eff]/45",
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border",
                      isSelected
                        ? "border-[#4d8eff] bg-[#4d8eff] text-white"
                        : "border-[var(--app-border)]",
                    )}
                  >
                    {isSelected || isChecked ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : null}
                  </span>
                  <span>
                    <span className="block font-bold text-[var(--app-text-primary)]">
                      {option.label}
                    </span>
                    {option.description ? (
                      <span className="mt-1 block text-sm leading-6 text-[var(--app-text-secondary)]">
                        {option.description}
                      </span>
                    ) : null}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          disabled={!selectedOption}
          onClick={() => setCheckedOptionId(selectedOptionId)}
          className="mt-5 rounded bg-[#4d8eff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Comprobar decisión
        </button>
      </Card>

      {checkedOption ? (
        <>
          <ScenarioFeedback option={checkedOption} scenario={scenario} />
          <Card className="p-5">
            <Badge tone="blue">Enlaces relacionados</Badge>
            <div className="mt-4">
              <RelatedScenarioLinks items={scenario.relatedContent} />
            </div>
          </Card>
        </>
      ) : null}
    </div>
  );
}
