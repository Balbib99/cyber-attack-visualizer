import Link from "next/link";
import { DailySafetyCard } from "@/components/dashboard/DailySafetyCard";
import { KnowledgeProgressCard } from "@/components/dashboard/KnowledgeProgressCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { PanelLearningPathCard } from "@/components/learning-paths/PanelLearningPathCard";
import { PanelScenarioCard } from "@/components/scenarios/PanelScenarioCard";
import { ThreatCard } from "@/components/threats/ThreatCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { safetyTips } from "@/data/safetyTips";
import { threats } from "@/data/threats";

export const metadata = {
  title: "Panel | AttackFlow Lab",
  description:
    "Panel de aprendizaje de AttackFlow Lab con amenazas, simulaciones, consejos y progreso.",
};

export default function PanelPage() {
  const criticalThreats = threats.filter(
    (threat) => threat.riskLevel === "Crítico",
  );
  const recommendedThreats = threats.slice(0, 2);
  const featuredTip = safetyTips[0];

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1fr_22rem]">
        <Card className="relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-56 w-56 bg-[#4d8eff]/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <Badge tone="blue">Panel central</Badge>
            <h1 className="mt-5 text-4xl font-black text-white sm:text-5xl">
              Bienvenido, Analista
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              AttackFlow Lab reúne simulaciones visuales, análisis de amenazas
              y consejos prácticos para aprender ciberseguridad con contexto
              real, sin manejar datos sensibles ni entornos productivos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/amenazas"
                className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
              >
                Explorar amenazas
              </Link>
              <Link
                href="/simulaciones"
                className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/10"
              >
                Ver simulaciones
              </Link>
              <Link
                href="/retos"
                className="rounded border border-[#4edea3]/35 px-5 py-3 text-center text-sm font-bold text-[#6ffbbe] transition hover:bg-[#4edea3]/10"
              >
                Practicar con retos
              </Link>
            </div>
          </div>
        </Card>

        <KnowledgeProgressCard />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Amenazas" value="6" detail="Casos educativos activos" />
        <StatCard
          label="Simuladores"
          value="2"
          detail="Phishing y SQL Injection"
          tone="green"
        />
        <StatCard
          label="Riesgo crítico"
          value={String(criticalThreats.length)}
          detail="Amenazas destacadas"
          tone="red"
        />
        <StatCard
          label="Retos"
          value="2"
          detail="Pruebas interactivas iniciales"
          tone="orange"
        />
      </section>

      <PanelLearningPathCard />

      <PanelScenarioCard />

      <section className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_20rem] 2xl:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="min-w-0">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge tone="red">Amenazas destacadas</Badge>
              <h2 className="mt-3 text-2xl font-black text-white">
                Simulaciones recomendadas
              </h2>
            </div>
            <Link href="/amenazas" className="text-sm font-bold text-[#adc6ff]">
              Ver biblioteca
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {recommendedThreats.map((threat) => (
              <ThreatCard key={threat.id} threat={threat} />
            ))}
          </div>
        </div>

        <aside className="min-w-0 xl:pt-[3.15rem]">
          <DailySafetyCard tip={featuredTip} />
        </aside>
      </section>
    </div>
  );
}
