import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  Eye,
  MousePointerClick,
  Route,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { IconByName } from "@/components/ui/IconByName";
import { RiskSummaryCard } from "@/components/ui/RiskSummaryCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VisualCallout } from "@/components/ui/VisualCallout";
import { LearningPathCard } from "@/components/learning/LearningPathCard";
import { ThreatHeroVisual } from "@/components/threats/ThreatHeroVisual";
import { getSafetyTipById } from "@/data/safetyTips";
import { getThreatById, threats } from "@/data/threats";
import { getLearningContextByThreatId } from "@/lib/learningPaths";

type ThreatDetailPageProps = {
  params: Promise<{ id: string }>;
};

const phishingMetrics = [
  {
    label: "Vector",
    value: "Email, SMS y enlaces",
    icon: Route,
  },
  {
    label: "Objetivo",
    value: "Credenciales y datos personales",
    icon: Target,
  },
  {
    label: "Defensa clave",
    value: "Verificar antes de hacer clic",
    icon: MousePointerClick,
  },
];

export function generateStaticParams() {
  return threats.map((threat) => ({ id: threat.id }));
}

export async function generateMetadata({ params }: ThreatDetailPageProps) {
  const { id } = await params;
  const threat = getThreatById(id);

  return {
    title: threat ? `${threat.name} | AttackFlow Lab` : "Amenaza no encontrada",
  };
}

export default async function ThreatDetailPage({
  params,
}: ThreatDetailPageProps) {
  const { id } = await params;
  const threat = getThreatById(id);

  if (!threat) {
    notFound();
  }

  const relatedTips = threat.relatedSafetyTipIds
    .map((tipId) => getSafetyTipById(tipId))
    .filter(Boolean);
  const hasHeroImage = Boolean(threat.heroImage && threat.heroImageAlt);
  const learningContext = getLearningContextByThreatId(threat.id);
  const simulatorAvailable =
    learningContext.simulator?.status === "available" && threat.simulatorAvailable;
  const challengeAvailable = learningContext.challenge?.status === "available";

  return (
    <article className="space-y-10">
      <header className="relative overflow-hidden rounded-lg border border-white/10 bg-[#121212]/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
        <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 bg-[#4edea3]/5 blur-3xl" />

        <div
          className={`relative grid gap-8 ${
            hasHeroImage ? "xl:grid-cols-[1fr_29rem]" : ""
          } xl:items-center`}
        >
          <div>
            <Link
              href="/amenazas"
              className="text-sm font-bold text-[#adc6ff] transition hover:text-white"
            >
              Volver al explorador
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="blue">{threat.category}</Badge>
              <Badge tone={riskTone(threat.riskLevel)}>
                Riesgo {threat.riskLevel.toLowerCase()}
              </Badge>
              <Badge>{threat.difficulty}</Badge>
            </div>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-lg border border-[#4d8eff]/35 bg-[#4d8eff]/10 text-[#adc6ff] shadow-[0_0_28px_rgba(77,142,255,0.12)]">
                <IconByName name={threat.icon} className="h-10 w-10" />
              </span>
              <div>
                <h1 className="text-4xl font-black text-white sm:text-6xl">
                  {threat.name}
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                  {threat.overview}
                </p>
              </div>
            </div>

            {threat.id === "phishing" ? (
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {phishingMetrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded border border-white/10 bg-[#050505]/70 p-4"
                    >
                      <Icon className="h-5 w-5 text-[#adc6ff]" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-200">
                        {metric.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : null}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {threat.simulatorAvailable ? (
                <Link
                  href={`/simulador/${threat.id}`}
                  className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
                >
                  Abrir simulador
                </Link>
              ) : (
                <span className="rounded border border-white/10 px-5 py-3 text-center text-sm font-bold text-slate-500">
                  Simulador próximamente
                </span>
              )}
              <a
                href="#mitigaciones"
                className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/10"
              >
                Ver mitigaciones
              </a>
            </div>
          </div>

          {threat.heroImage && threat.heroImageAlt ? (
            <ThreatHeroVisual
              imageSrc={threat.heroImage}
              alt={threat.heroImageAlt}
              label="Escena educativa"
              caption="Resumen visual del flujo de phishing y sus consecuencias"
            />
          ) : null}
        </div>
      </header>

      <LearningPathCard
        threatName={threat.name}
        threatPath={`/amenazas/${threat.id}`}
        simulatorPath={
          learningContext.simulator ? `/simulador/${learningContext.simulator.id}` : undefined
        }
        simulatorAvailable={simulatorAvailable}
        challengePath={
          learningContext.challenge ? `/retos/${learningContext.challenge.id}` : undefined
        }
        challengeAvailable={challengeAvailable}
        tipsPath={
          relatedTips[0] ? `/seguridad-diaria/${relatedTips[0].id}` : "/seguridad-diaria"
        }
        tipsAvailable={relatedTips.length > 0}
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_22rem]">
        <VisualCallout
          icon={Zap}
          tone="blue"
          title="Cómo funciona"
          description={threat.howItWorks}
        />
        <RiskSummaryCard
          title="Impacto"
          riskLevel={threat.riskLevel}
          description={threat.impactSummary}
          icon={AlertTriangle}
        />
      </div>

      <section className="space-y-5">
        <SectionHeader
          eyebrow="Flujo del ataque"
          title="Fases principales"
          description="El patrón se entiende mejor como una cadena de pasos cortos y conectados."
          icon={Route}
          tone="blue"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {threat.flowSteps.map((step, index) => (
            <Card key={step.title} className="p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">
                  Fase {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
                  <IconByName name={step.icon} className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="border-[#ffb95f]/20 p-6">
          <SectionHeader
            eyebrow="Señales de alerta"
            title="Qué observar"
            icon={Eye}
            tone="orange"
          />
          <div className="mt-6 grid gap-3">
            {threat.warningSigns.map((sign) => (
              <div
                key={sign}
                className="rounded border border-[#ffb95f]/20 bg-[#ffb95f]/10 p-4 text-sm leading-6 text-slate-200"
              >
                {sign}
              </div>
            ))}
          </div>
        </Card>

        <Card id="mitigaciones" className="scroll-mt-24 border-[#4edea3]/20 p-6">
          <SectionHeader
            eyebrow="Mitigaciones"
            title="Controles recomendados"
            icon={ShieldCheck}
            tone="green"
          />
          <div className="mt-6 grid gap-3">
            {threat.mitigations.map((mitigation) => (
              <div
                key={mitigation}
                className="rounded border border-[#4edea3]/20 bg-[#4edea3]/10 p-4 text-sm leading-6 text-slate-200"
              >
                {mitigation}
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <SectionHeader
          eyebrow="Seguridad diaria"
          title="Consejos relacionados"
          description="Acciones prácticas que reducen exposición frente a esta amenaza."
          icon={ShieldCheck}
          tone="green"
        />
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {relatedTips.map((tip) =>
            tip ? (
              <Link
                key={tip.id}
                href={`/seguridad-diaria/${tip.id}`}
                className="rounded border border-[#4edea3]/20 bg-[#4edea3]/10 p-4 text-sm font-bold text-[#6ffbbe] transition hover:bg-[#4edea3]/15"
              >
                {tip.title}
              </Link>
            ) : null,
          )}
        </div>
      </Card>
    </article>
  );
}
