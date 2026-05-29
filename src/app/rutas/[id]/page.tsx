import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { LearningPathProgress } from "@/components/learning-paths/LearningPathProgress";
import { LearningPathTimeline } from "@/components/learning-paths/LearningPathTimeline";
import { ScenarioRecommendations } from "@/components/scenarios/ScenarioRecommendations";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getLearningPathById, learningPaths } from "@/data/learningPaths";
import { getScenariosByIds } from "@/lib/scenarioRelations";

type LearningPathDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return learningPaths.map((path) => ({ id: path.id }));
}

export async function generateMetadata({ params }: LearningPathDetailPageProps) {
  const { id } = await params;
  const path = getLearningPathById(id);

  return {
    title: path
      ? `${path.title} | Rutas de aprendizaje`
      : "Ruta no encontrada | AttackFlow Lab",
    description: path?.description,
  };
}

export default async function LearningPathDetailPage({
  params,
}: LearningPathDetailPageProps) {
  const { id } = await params;
  const path = getLearningPathById(id);

  if (!path) {
    notFound();
  }

  const relatedScenarios = getScenariosByIds(path.relatedScenarioIds);

  return (
    <div className="space-y-8">
      <Link
        href="/rutas"
        className="inline-flex items-center gap-2 text-sm font-bold text-[#1d4ed8] transition hover:text-[#4d8eff] dark:text-[#adc6ff]"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a rutas
      </Link>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <Card className="relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-64 w-64 bg-[#4d8eff]/10 blur-3xl" />
          <div className="relative max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <Badge tone="blue">{path.category}</Badge>
              <Badge>{path.level}</Badge>
              <Badge tone="green">Disponible</Badge>
              <Badge>{path.estimatedTime}</Badge>
            </div>
            <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-5xl">
              {path.title}
            </h1>
            <p className="mt-4 text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
              {path.subtitle}
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--app-text-secondary)]">
              {path.description}
            </p>
          </div>
        </Card>

        <LearningPathProgress path={path} />
      </section>

      <section className="space-y-5">
        <div className="max-w-3xl">
          <Badge tone="blue">Timeline</Badge>
          <h2 className="mt-4 text-3xl font-black text-[var(--app-text-primary)]">
            Fases de la ruta
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
            Sigue los bloques en orden para conectar teoría, simulación visual,
            consejos prácticos, decisiones reales y validación final.
          </p>
        </div>
        <LearningPathTimeline path={path} />
      </section>

      <ScenarioRecommendations
        title="Escenarios relacionados"
        description="Antes del reto, practica una decisión real conectada con esta ruta."
        scenarios={relatedScenarios}
      />

      <Card className="p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge tone="green">Siguiente paso</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              Continúa practicando cuando termines la ruta
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--app-text-secondary)]">
              El reto relacionado guarda tu progreso en este navegador y sirve
              como validación práctica del módulo.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {path.relatedChallengeId ? (
              <Link
                href={`/retos/${path.relatedChallengeId}`}
                className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
              >
                Hacer reto
              </Link>
            ) : null}
            <Link
              href="/panel"
              className="rounded border border-[var(--app-border)] px-5 py-3 text-center text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
            >
              Volver al panel
            </Link>
            <Link
              href="/simulaciones"
              className="rounded border border-[var(--app-border)] px-5 py-3 text-center text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
            >
              Ver simulaciones
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
