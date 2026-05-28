import { NextLearningStep } from "@/components/learning/NextLearningStep";
import { SimulatorEmptyState } from "@/components/simulator/SimulatorEmptyState";
import { VisualAttackSimulator } from "@/components/simulator/VisualAttackSimulator";
import { getSimulatorById, simulators } from "@/data/simulators";
import { getLearningContextBySimulatorId } from "@/lib/learningPaths";

type SimulatorPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return simulators
    .filter((simulator) => simulator.status === "available")
    .map((simulator) => ({ id: simulator.id }));
}

export async function generateMetadata({ params }: SimulatorPageProps) {
  const { id } = await params;
  const simulator = getSimulatorById(id);

  return {
    title: simulator
      ? `${simulator.title} | AttackFlow Lab`
      : "Simulador no disponible | AttackFlow Lab",
    description: simulator?.description,
  };
}

export default async function SimulatorPage({ params }: SimulatorPageProps) {
  const { id } = await params;
  const simulator = getSimulatorById(id);

  if (!simulator) {
    return <SimulatorEmptyState reason="not-found" />;
  }

  if (simulator.status === "coming-soon") {
    return (
      <SimulatorEmptyState
        title={simulator.title}
        reason="coming-soon"
      />
    );
  }

  if (simulator.steps.length === 0) {
    return <SimulatorEmptyState title={simulator.title} reason="no-steps" />;
  }

  const learningContext = getLearningContextBySimulatorId(simulator.id);
  const challenge = learningContext.challenge;
  const firstTip = learningContext.tips[0];

  return (
    <div className="space-y-8">
      <VisualAttackSimulator simulator={simulator} />
      <NextLearningStep
        title="Pon a prueba lo aprendido"
        description="Después de ver el flujo visual, practica identificando señales de alerta y eligiendo defensas."
        actions={[
          ...(challenge?.status === "available"
            ? [
                {
                  label: `Hacer ${challenge.title.toLowerCase()}`,
                  href: `/retos/${challenge.id}`,
                  variant: "primary" as const,
                },
              ]
            : []),
          {
            label: firstTip ? "Ver consejos relacionados" : "Ver seguridad diaria",
            href: firstTip ? `/seguridad-diaria/${firstTip.id}` : "/seguridad-diaria",
          },
        ]}
      />
    </div>
  );
}
