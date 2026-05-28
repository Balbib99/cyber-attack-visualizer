import { AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { CyberScenario, ScenarioDecisionOption } from "@/types/scenario";

export function ScenarioFeedback({
  option,
  scenario,
}: {
  option: ScenarioDecisionOption;
  scenario: CyberScenario;
}) {
  const Icon = option.isBestChoice ? CheckCircle2 : AlertTriangle;

  return (
    <Card
      className={`p-5 ${
        option.isBestChoice
          ? "border-[color:var(--app-success)]/35"
          : "border-[color:var(--app-warning)]/35"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded border ${
            option.isBestChoice
              ? "border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]"
              : "border-[color:var(--app-warning)]/30 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <Badge tone={option.isBestChoice ? "green" : "orange"}>
            {option.isBestChoice ? "Mejor decisión" : "Decisión mejorable"}
          </Badge>
          <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
            {option.feedbackTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
            {option.feedback}
          </p>
          <p className="mt-3 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-3 text-sm leading-6 text-[var(--app-text-secondary)]">
            <strong className="text-[var(--app-text-primary)]">Consecuencia:</strong>{" "}
            {option.consequence}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-2">
        <div className="rounded border border-[color:var(--app-success)]/25 bg-[var(--app-success-soft)] p-4 text-sm leading-6 text-[#047857] dark:text-[var(--app-success)]">
          <ShieldCheck className="mb-2 h-5 w-5" />
          <strong>Acción recomendada:</strong> {scenario.recommendedAction}
        </div>
        <div className="rounded border border-[#4d8eff]/25 bg-[#4d8eff]/10 p-4 text-sm leading-6 text-[#1d4ed8] dark:text-[#adc6ff]">
          <strong>Consejo defensivo:</strong> {scenario.defensiveTip}
        </div>
      </div>
    </Card>
  );
}
