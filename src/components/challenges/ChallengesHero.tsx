import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ChallengesHeroProps = {
  availableCount: number;
  totalQuestions: number;
};

export function ChallengesHero({
  availableCount,
  totalQuestions,
}: ChallengesHeroProps) {
  return (
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
      <div className="relative grid gap-8 xl:grid-cols-[1fr_24rem] xl:items-end">
        <div className="max-w-4xl">
          <Badge tone="green">Zona Practica</Badge>
          <h1 className="mt-5 text-4xl font-black text-white sm:text-6xl">
            Centro de retos
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#adc6ff]">
            Pon a prueba lo que has aprendido con ejercicios interactivos de
            ciberseguridad.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-300">
            Completa pruebas cortas, identifica señales de alerta, ordena fases
            de ataque y elige las mejores defensas para mejorar tu progreso de
            conocimiento.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/retos/phishing"
              className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
            >
              Empezar reto de phishing
            </Link>
            <Link
              href="/simulaciones"
              className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/10"
            >
              Ver simulaciones
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <Metric label="Retos disponibles" value={String(availableCount)} />
          <Metric label="Pruebas iniciales" value={String(totalQuestions)} />
          <Metric label="Progreso" value="Local" />
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
