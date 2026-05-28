import Link from "next/link";
import { RotateCcw, Trophy } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { CyberChallenge } from "@/types/challenge";

type ChallengeResultsProps = {
  challenge: CyberChallenge;
  score: number;
  total: number;
  onRestart: () => void;
};

export function ChallengeResults({
  challenge,
  score,
  total,
  onRestart,
}: ChallengeResultsProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const message =
    percentage >= 80
      ? "Excelente. Has reconocido las señales clave y las defensas principales."
      : percentage >= 50
        ? "Buen avance. Revisa las explicaciones para reforzar los puntos dudosos."
        : "Este reto merece otra vuelta. Vuelve a la simulación y repite el ejercicio.";

  return (
    <Card className="p-6 sm:p-8">
      <Trophy className="h-12 w-12 text-[#ffddb8]" />
      <h1 className="mt-5 text-4xl font-black text-white">Reto completado</h1>
      <p className="mt-3 text-lg leading-8 text-slate-300">{message}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Metric label="Puntuación" value={`${score}/${total}`} />
        <Metric label="Porcentaje" value={`${percentage}%`} />
        <Metric label="Reto" value={challenge.title} />
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-2 rounded border border-[#ffb95f]/40 px-5 py-3 text-sm font-bold text-[#ffddb8] transition hover:bg-[#ffb95f]/10"
        >
          <RotateCcw className="h-4 w-4" />
          Repetir reto
        </button>
        <Link
          href={challenge.relatedSimulatorPath}
          className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
        >
          Ver simulación relacionada
        </Link>
        <Link
          href="/retos"
          className="rounded border border-white/10 px-5 py-3 text-center text-sm font-bold text-slate-200 transition hover:bg-white/[0.06]"
        >
          Volver al Centro de retos
        </Link>
      </div>
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-white/10 bg-[#050505] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-2xl font-black text-white">{value}</p>
    </div>
  );
}
