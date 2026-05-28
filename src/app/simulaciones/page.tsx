import { Clock, PlayCircle, Radar, ShieldCheck } from "lucide-react";
import { AvailableSimulatorCard } from "@/components/simulations/AvailableSimulatorCard";
import { ComingSoonSimulatorCard } from "@/components/simulations/ComingSoonSimulatorCard";
import { SimulationLearningSteps } from "@/components/simulations/SimulationLearningSteps";
import { SimulationsHero } from "@/components/simulations/SimulationsHero";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  getAvailableSimulators,
  getComingSoonSimulators,
} from "@/lib/simulators";

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

      <div className="flex flex-wrap gap-2">
        {["Todos", "Ingeniería social", "Seguridad web", "Próximamente"].map(
          (filter) => (
            <span
              key={filter}
              className="rounded-full border border-[var(--app-border)] bg-[var(--app-surface)] px-4 py-2 text-sm font-bold text-[var(--app-text-secondary)]"
            >
              {filter}
            </span>
          ),
        )}
      </div>

      <section className="space-y-5">
        <SectionHeader
          eyebrow="Disponibles"
          title="Biblioteca visual de simulaciones"
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

      <Card className="border-[color:var(--app-success)]/25 p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <div>
            <Badge tone="green">Entorno educativo seguro</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              Aprende sin usar datos reales
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--app-text-secondary)]">
              Las simulaciones son visuales y educativas. No ejecutan ataques
              reales, no usan datos personales y evitan instrucciones ofensivas.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
