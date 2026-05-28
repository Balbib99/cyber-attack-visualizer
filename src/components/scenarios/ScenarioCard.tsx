import Link from "next/link";
import { Clock, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { CyberScenario } from "@/types/scenario";
import { scenarioCategoryLabel, scenarioRiskTone } from "./scenarioStyles";

export function ScenarioCard({ scenario }: { scenario: CyberScenario }) {
  return (
    <Card className="p-5 transition hover:border-[#4d8eff]/45 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex flex-wrap gap-2">
        <Badge tone="green">Disponible</Badge>
        <Badge tone="blue">{scenarioCategoryLabel[scenario.category]}</Badge>
        <Badge tone={scenarioRiskTone[scenario.riskLevel]}>
          Riesgo {scenario.riskLevel}
        </Badge>
      </div>

      <h2 className="mt-5 text-2xl font-black text-[var(--app-text-primary)]">
        {scenario.title}
      </h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-[#1d4ed8] dark:text-[#adc6ff]">
        {scenario.subtitle}
      </p>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
        {scenario.description}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <SmallMetric icon={Clock} label="Duración" value={scenario.estimatedTime} />
        <SmallMetric
          icon={ShieldAlert}
          label="Decisiones"
          value={String(scenario.options.length)}
        />
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
          Señales principales
        </p>
        {scenario.warningSigns.slice(0, 3).map((sign) => (
          <div
            key={sign}
            className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-3 py-2 text-sm text-[var(--app-text-secondary)]"
          >
            {sign}
          </div>
        ))}
      </div>

      <Link
        href={`/escenarios/${scenario.id}`}
        className="mt-6 inline-flex w-full justify-center rounded bg-[#4d8eff] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
      >
        Resolver escenario
      </Link>
      <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
        {scenario.relatedSimulatorId ? (
          <Link
            href={`/simulador/${scenario.relatedSimulatorId}`}
            className="rounded border border-[var(--app-border)] px-3 py-2 text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
          >
            Ver simulación
          </Link>
        ) : null}
        {scenario.relatedTipIds?.[0] ? (
          <Link
            href={`/seguridad-diaria/${scenario.relatedTipIds[0]}`}
            className="rounded border border-[var(--app-border)] px-3 py-2 text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
          >
            Ver tip
          </Link>
        ) : null}
        {scenario.relatedChallengeId ? (
          <Link
            href={`/retos/${scenario.relatedChallengeId}`}
            className="rounded border border-[var(--app-border)] px-3 py-2 text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
          >
            Hacer reto
          </Link>
        ) : null}
      </div>
    </Card>
  );
}

function SmallMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-3">
      <Icon className="h-4 w-4 text-[#1d4ed8] dark:text-[#adc6ff]" />
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--app-text-muted)]">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-[var(--app-text-primary)]">
        {value}
      </p>
    </div>
  );
}
