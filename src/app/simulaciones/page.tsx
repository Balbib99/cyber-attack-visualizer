import { AvailableSimulatorCard } from "@/components/simulations/AvailableSimulatorCard";
import { ComingSoonSimulatorCard } from "@/components/simulations/ComingSoonSimulatorCard";
import { SimulationLearningSteps } from "@/components/simulations/SimulationLearningSteps";
import { SimulationsHero } from "@/components/simulations/SimulationsHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  getAvailableSimulators,
  getComingSoonSimulators,
} from "@/lib/simulators";
import { Clock, PlayCircle, Radar } from "lucide-react";

export default function SimulationsPage() {
  const availableSimulators = getAvailableSimulators();
  const comingSoonSimulators = getComingSoonSimulators();
  const visualStepsCount = availableSimulators.reduce(
    (total, simulator) => total + simulator.steps.length,
    0,
  );

  return (
    <div className="space-y-12">
      <SimulationsHero
        availableCount={availableSimulators.length}
        visualStepsCount={visualStepsCount}
      />

      <section className="space-y-5">
        <SectionHeader
          eyebrow="Disponibles"
          title="Simuladores listos para iniciar"
          description="Escenarios visuales completos con señales de alerta, explicación breve y consejos defensivos."
          icon={PlayCircle}
          tone="green"
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {availableSimulators.map((simulator) => (
            <AvailableSimulatorCard key={simulator.id} simulator={simulator} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader
          eyebrow="Roadmap"
          title="Simuladores en preparación"
          description="Contenido futuro diseñado como una ruta visual de aprendizaje, no como una sección incompleta."
          icon={Clock}
          tone="blue"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {comingSoonSimulators.map((simulator) => (
            <ComingSoonSimulatorCard
              key={simulator.id}
              title={simulator.title}
              category={simulator.category}
              description={simulator.description}
              learningReason={simulator.learningReason}
            />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader
          eyebrow="Método"
          title="Cómo funciona una simulación"
          description="Cada simulación está pensada para aprender mirando primero y leyendo solo lo necesario."
          icon={Radar}
          tone="blue"
        />
        <SimulationLearningSteps />
      </section>
    </div>
  );
}
