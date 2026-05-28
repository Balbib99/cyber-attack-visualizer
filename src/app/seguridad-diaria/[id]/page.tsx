import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, FileText, Lightbulb, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { RelatedContentSection } from "@/components/learning/RelatedContentSection";
import { DoDontCard } from "@/components/ui/DoDontCard";
import { RiskSummaryCard } from "@/components/ui/RiskSummaryCard";
import { ScenarioBanner } from "@/components/ui/ScenarioBanner";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SecurityChecklist } from "@/components/ui/SecurityChecklist";
import { ResponsibleNotice } from "@/components/safety/ResponsibleNotice";
import { RecommendedToolCard } from "@/components/safety/RecommendedToolCard";
import { RiskReductionGrid } from "@/components/safety/RiskReductionGrid";
import { SafetySteps } from "@/components/safety/SafetySteps";
import { TipDetailLayout } from "@/components/safety/TipDetailLayout";
import { WatermarkComparison } from "@/components/safety/WatermarkComparison";
import { ScenarioRecommendations } from "@/components/scenarios/ScenarioRecommendations";
import { getSafetyTipById, safetyTips } from "@/data/safetyTips";
import { getThreatById } from "@/data/threats";
import { getLearningContextByTipId } from "@/lib/learningPaths";
import { getScenariosByIds } from "@/lib/scenarioRelations";

type SafetyDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return safetyTips.map((tip) => ({ id: tip.id }));
}

export async function generateMetadata({ params }: SafetyDetailPageProps) {
  const { id } = await params;
  const tip = getSafetyTipById(id);

  return {
    title: tip ? `${tip.title} | AttackFlow Lab` : "Consejo no encontrado",
  };
}

export default async function SafetyDetailPage({
  params,
}: SafetyDetailPageProps) {
  const { id } = await params;
  const tip = getSafetyTipById(id);

  if (!tip) {
    notFound();
  }

  const isDniTip = tip.id === "dni-marca-agua";
  const learningContext = getLearningContextByTipId(tip.id);
  const primaryThreat = learningContext.threat;
  const simulator = learningContext.simulator;
  const challenge = learningContext.challenge;
  const relatedScenarios = getScenariosByIds(tip.relatedScenarioIds);

  return (
    <article className="space-y-10">
      <BackLink />

      <TipDetailLayout tip={tip} />

      {tip.recommendedTool ? (
        <RecommendedToolCard tool={tip.recommendedTool} />
      ) : null}

      <ScenarioBanner
        icon={FileText}
        title="Situación real"
        description={tip.scenario}
      />

      <div className="grid gap-6 xl:grid-cols-[22rem_1fr]">
        <RiskSummaryCard
          title="Riesgo principal"
          riskLevel={tip.importance}
          description={tip.risk}
          icon={AlertTriangle}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <DoDontCard type="do" title="Qué hacer" items={tip.whatToDo} />
          <DoDontCard type="dont" title="Qué evitar" items={tip.whatToAvoid} />
        </div>
      </div>

      {isDniTip ? (
        <>
          <section className="space-y-5">
            <SectionHeader
              eyebrow="Comparativa"
              title="Correcto / Incorrecto"
              description="La diferencia está en que la marca sea específica, visible y compatible con la verificación."
              icon={ShieldCheck}
              tone="green"
            />
            <WatermarkComparison />
          </section>

          <section className="space-y-5">
            <SectionHeader
              eyebrow="Pasos recomendados"
              title="Antes de enviar el documento"
              description="Una checklist visual para reducir errores habituales antes de subir la imagen."
              icon={Lightbulb}
              tone="blue"
            />
            <SafetySteps />
          </section>

          <section className="space-y-5">
            <SectionHeader
              eyebrow="Riesgo que reduces"
              title="Reduce exposición, no la elimina"
              description="La marca de agua no hace que el documento sea invulnerable, pero puede reducir el valor de una copia filtrada."
              icon={AlertTriangle}
              tone="orange"
            />
            <RiskReductionGrid />
          </section>
        </>
      ) : (
        <SecurityChecklist
          title="Checklist rápido antes de actuar"
          items={tip.checklist}
        />
      )}

      <RelatedThreats
        threatIds={tip.relatedThreatIds}
        fallbackLabels={
          isDniTip
            ? [
                "Robo de identidad",
                "Phishing",
                "Filtraciones de datos",
                "Ingeniería social",
              ]
            : []
        }
      />

      {primaryThreat ? (
        <RelatedContentSection
          title="Relacionado con este consejo"
          description="Este consejo forma parte de una ruta de aprendizaje más amplia. Puedes revisar la amenaza, verla en una simulación y practicar con un reto."
          items={[
            {
              type: "threat",
              title: primaryThreat.name,
              href: `/amenazas/${primaryThreat.id}`,
            },
            {
              type: "simulator",
              title: simulator?.title ?? "Simulación relacionada",
              href:
                simulator?.status === "available"
                  ? `/simulador/${simulator.id}`
                  : undefined,
            },
            {
              type: "challenge",
              title: challenge?.title ?? "Reto relacionado",
              href:
                challenge?.status === "available"
                  ? `/retos/${challenge.id}`
                  : undefined,
            },
          ]}
        />
      ) : null}

      <ScenarioRecommendations
        title="Escenario relacionado"
        description="Pon este consejo en práctica con una decisión breve y realista."
        scenarios={relatedScenarios}
      />

      <ResponsibleNotice />
    </article>
  );
}

function RelatedThreats({
  threatIds,
  fallbackLabels = [],
}: {
  threatIds: string[];
  fallbackLabels?: string[];
}) {
  const relatedThreats = threatIds
    .map((threatId) => getThreatById(threatId))
    .filter(Boolean);

  return (
    <Card className="p-6">
      <SectionHeader
        eyebrow="Relación con amenazas"
        title="Por qué este hábito importa"
        description="Este consejo se relaciona con técnicas que intentan engañar a usuarios, reutilizar información o aprovechar datos expuestos."
        icon={AlertTriangle}
        tone="orange"
      />
      <div className="mt-6 flex flex-wrap gap-3">
        {relatedThreats.map((threat) =>
          threat ? (
            <Link
              key={threat.id}
              href={`/amenazas/${threat.id}`}
              className="rounded border border-[#4d8eff]/40 bg-[#4d8eff]/10 px-4 py-2 text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/20"
            >
              {threat.name}
            </Link>
          ) : null,
        )}
        {fallbackLabels.map((label) => (
          <span
            key={label}
            className="rounded border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300"
          >
            {label}
          </span>
        ))}
      </div>
    </Card>
  );
}

function BackLink() {
  return (
    <Link href="/seguridad-diaria" className="text-sm font-bold text-[#adc6ff]">
      Volver a seguridad diaria
    </Link>
  );
}
