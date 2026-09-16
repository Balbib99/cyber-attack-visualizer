import Link from "next/link";
import { ArrowRight, MessageSquareWarning } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { CyberScenario } from "@/types/scenario";
import { scenarioCategoryLabel, scenarioRiskTone } from "./scenarioStyles";

export function RelatedScenarioCard({
  scenario,
}: {
  scenario: CyberScenario;
}) {
  return (
    <Card className="p-4 transition hover:border-[var(--app-primary)]/45 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[color:var(--app-warning)]/30 bg-[var(--app-warning-soft)] text-[var(--app-warning)] dark:text-[var(--app-warning)]">
          <MessageSquareWarning className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2">
            <Badge tone="blue">{scenarioCategoryLabel[scenario.category]}</Badge>
            <Badge tone={scenarioRiskTone[scenario.riskLevel]}>
              Riesgo {scenario.riskLevel}
            </Badge>
          </div>
          <h3 className="mt-3 text-lg font-black text-[var(--app-text-primary)]">
            {scenario.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
            {scenario.subtitle}
          </p>
          <Link
            href={`/escenarios/${scenario.id}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[var(--app-primary)] transition hover:text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]"
          >
            Resolver escenario
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
