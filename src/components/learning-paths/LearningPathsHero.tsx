import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function LearningPathsHero({
  availableCount,
  stepsPerPath,
}: {
  availableCount: number;
  stepsPerPath: number;
}) {
  return (
    <Card className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
      <div className="relative grid gap-8 xl:grid-cols-[1fr_24rem] xl:items-end">
        <div className="max-w-4xl">
          <Badge tone="blue">Rutas guiadas</Badge>
          <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-6xl">
            Rutas de aprendizaje
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
            Recorridos guiados para aprender sin saltarte pasos.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--app-text-secondary)]">
            Empieza entendiendo el riesgo, observa una simulación visual, revisa
            consejos prácticos y valida lo aprendido con un reto.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rutas/phishing"
              className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
            >
              Empezar con Phishing
            </Link>
            <Link
              href="/retos"
              className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#1d4ed8] transition hover:bg-[#4d8eff]/10 dark:text-[#adc6ff]"
            >
              Ver Centro de retos
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <Metric label="Rutas disponibles" value={String(availableCount)} />
          <Metric label="Pasos por ruta" value={String(stepsPerPath)} />
          <Metric label="Formato" value="Guiado" />
          <Metric label="Práctica" value="Incluida" />
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
