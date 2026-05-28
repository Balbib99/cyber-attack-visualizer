import Image from "next/image";
import Link from "next/link";
import { Clock, ListChecks, Play } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { AttackSimulator, SimulatorRiskLevel } from "@/types/simulator";

type AvailableSimulatorCardProps = {
  simulator: AttackSimulator;
};

const riskTone: Record<SimulatorRiskLevel, "green" | "orange" | "red"> = {
  bajo: "green",
  medio: "orange",
  alto: "orange",
  crítico: "red",
};

export function AvailableSimulatorCard({
  simulator,
}: AvailableSimulatorCardProps) {
  const previewImage = simulator.previewImage ?? simulator.steps[0]?.image;
  const previewAlt =
    simulator.previewImageAlt ?? simulator.steps[0]?.imageAlt ?? simulator.title;

  return (
    <Card className="group overflow-hidden transition hover:border-[#4d8eff]/45 hover:bg-[var(--app-surface-elevated)]">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--app-border)] bg-[#050505]">
        {previewImage ? (
          <Image
            src={previewImage}
            alt={previewAlt}
            fill
            sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-[#06101f]/20" />
        <div className="absolute left-4 top-4">
          <Badge tone="green">Disponible</Badge>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          <Badge tone="blue">{simulator.category}</Badge>
          <Badge tone={riskTone[simulator.riskLevel]}>
            Riesgo {simulator.riskLevel}
          </Badge>
        </div>
        <h2 className="mt-5 text-2xl font-black text-white">
          {simulator.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {simulator.description}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <SmallMetric icon={Clock} label="Duración" value={simulator.estimatedTime} />
          <SmallMetric
            icon={ListChecks}
            label="Pasos"
            value={String(simulator.steps.length)}
          />
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={`/simulador/${simulator.id}`}
            className="inline-flex items-center justify-center gap-2 rounded bg-[#4d8eff] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            <Play className="h-4 w-4" />
            Iniciar simulación
          </Link>
          <div className="flex flex-wrap gap-3 text-sm font-bold">
            <Link
              href={`/amenazas/${simulator.threatId}`}
              className="rounded border border-[var(--app-border)] px-3 py-2 text-center text-[var(--app-text-secondary)] transition hover:border-[#4d8eff]/40 hover:bg-[#4d8eff]/10 hover:text-[#adc6ff]"
            >
              Ver amenaza
            </Link>
            {simulator.relatedChallengeId ? (
              <Link
                href={`/retos/${simulator.relatedChallengeId}`}
                className="rounded border border-[var(--app-border)] px-3 py-2 text-center text-[var(--app-text-secondary)] transition hover:border-[#4edea3]/35 hover:bg-[#4edea3]/10 hover:text-[#6ffbbe]"
              >
                Hacer reto
              </Link>
            ) : null}
          </div>
        </div>
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
      <Icon className="h-4 w-4 text-[#adc6ff]" />
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}
