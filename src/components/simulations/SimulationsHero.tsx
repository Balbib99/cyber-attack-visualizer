import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type SimulationsHeroProps = {
  availableCount: number;
  visualStepsCount: number;
};

export function SimulationsHero({
  availableCount,
  visualStepsCount,
}: SimulationsHeroProps) {
  return (
    <Card className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-56 w-56 bg-[#4edea3]/10 blur-3xl" />
      <div className="relative grid gap-8 xl:grid-cols-[1fr_24rem] xl:items-end">
        <div className="max-w-4xl">
          <Badge tone="blue">Simulaciones visuales</Badge>
          <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-6xl">
            Simulaciones interactivas
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
            Observa cómo funcionan las amenazas paso a paso en un entorno
            visual y seguro.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--app-text-secondary)]">
            Explora simulaciones educativas diseñadas para entender riesgos
            reales sin usar datos sensibles ni ejecutar ataques.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/simulador/phishing"
              className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
            >
              Empezar con Phishing
            </Link>
            <Link
              href="/rutas"
              className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#1d4ed8] transition hover:bg-[#4d8eff]/10 dark:text-[#adc6ff]"
            >
              Ver rutas guiadas
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          <Metric label="Simuladores disponibles" value={String(availableCount)} />
          <Metric label="Pasos visuales" value={String(visualStepsCount)} />
          <Metric label="Entorno" value="Educativo" />
          <Metric label="Datos" value="Ficticios" />
        </div>
      </div>
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--app-text-muted)]">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black text-[var(--app-text-primary)]">
        {value}
      </p>
    </div>
  );
}
