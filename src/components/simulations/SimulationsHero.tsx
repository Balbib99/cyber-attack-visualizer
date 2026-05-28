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
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-56 w-56 bg-[#4edea3]/5 blur-3xl" />
      <div className="relative grid gap-8 xl:grid-cols-[1fr_24rem] xl:items-end">
        <div className="max-w-4xl">
          <Badge tone="blue">Laboratorio visual</Badge>
          <h1 className="mt-5 text-4xl font-black text-white sm:text-6xl">
            Simulaciones interactivas
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#adc6ff]">
            Aprende cómo funcionan los ataques paso a paso mediante escenarios
            visuales y consejos defensivos.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Cada simulación usa imágenes educativas, señales de alerta y medidas
            de protección para ayudarte a reconocer riesgos sin depender de
            explicaciones largas.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/simulador/phishing"
              className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
            >
              Iniciar phishing
            </Link>
            <Link
              href="/amenazas"
              className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/10"
            >
              Explorar amenazas
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          <Metric label="Simuladores disponibles" value={String(availableCount)} />
          <Metric label="Pasos visuales" value={String(visualStepsCount)} />
          <Metric label="Enfoque" value="Defensivo" />
        </div>
      </div>
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-white/10 bg-[#050505]/80 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black text-white">{value}</p>
    </div>
  );
}
