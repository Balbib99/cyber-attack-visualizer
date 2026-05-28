import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RelatedScenarioLinks } from "@/components/scenarios/RelatedScenarioLinks";
import { ScenarioDecisionRunner } from "@/components/scenarios/ScenarioDecisionRunner";
import { ScenarioVisual } from "@/components/scenarios/ScenarioVisual";
import { ScenarioWarningSigns } from "@/components/scenarios/ScenarioWarningSigns";
import { scenarioCategoryLabel, scenarioRiskTone } from "@/components/scenarios/scenarioStyles";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getScenarioById, scenarios } from "@/data/scenarios";

type ScenarioPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return scenarios
    .filter((scenario) => scenario.status === "available")
    .map((scenario) => ({ id: scenario.id }));
}

export async function generateMetadata({ params }: ScenarioPageProps) {
  const { id } = await params;
  const scenario = getScenarioById(id);

  return {
    title: scenario
      ? `${scenario.title} | Escenarios`
      : "Escenario no encontrado | AttackFlow Lab",
    description: scenario?.description,
  };
}

export default async function ScenarioDetailPage({ params }: ScenarioPageProps) {
  const { id } = await params;
  const scenario = getScenarioById(id);

  if (!scenario || scenario.status !== "available") {
    notFound();
  }

  return (
    <div className="space-y-8">
      <Link
        href="/escenarios"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#1d4ed8] transition hover:text-[#4d8eff] dark:text-[#adc6ff]"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a escenarios
      </Link>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_26rem]">
        <Card className="relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-64 w-64 bg-[#4d8eff]/10 blur-3xl" />
          <div className="relative">
            <div className="flex flex-wrap gap-2">
              <Badge tone="blue">{scenarioCategoryLabel[scenario.category]}</Badge>
              <Badge tone={scenarioRiskTone[scenario.riskLevel]}>
                Riesgo {scenario.riskLevel}
              </Badge>
              <Badge>{scenario.estimatedTime}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-5xl">
              {scenario.title}
            </h1>
            <p className="mt-4 text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
              {scenario.subtitle}
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--app-text-secondary)]">
              {scenario.description}
            </p>
          </div>
        </Card>

        <ScenarioVisual visualType={scenario.visualType} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-6">
          <Card className="p-5">
            <Badge tone="orange">Situación realista</Badge>
            <p className="mt-4 text-lg leading-8 text-[var(--app-text-secondary)]">
              {scenario.situation}
            </p>
          </Card>

          <ScenarioDecisionRunner scenario={scenario} />
        </div>

        <aside className="space-y-5">
          <Card className="p-5">
            <Badge tone="orange">Señales de alerta</Badge>
            <div className="mt-4">
              <ScenarioWarningSigns signs={scenario.warningSigns} />
            </div>
          </Card>

          <Card className="p-5">
            <Badge tone="blue">Relacionado</Badge>
            <div className="mt-4">
              <RelatedScenarioLinks items={scenario.relatedContent} />
            </div>
          </Card>

          <Link
            href="/escenarios"
            className="block rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-4 py-3 text-center text-sm font-bold text-[var(--app-text-secondary)] transition hover:text-[var(--app-text-primary)]"
          >
            Probar otro escenario
          </Link>
        </aside>
      </section>
    </div>
  );
}
