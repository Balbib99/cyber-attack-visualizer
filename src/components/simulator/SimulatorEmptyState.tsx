import Link from "next/link";
import { Clock, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/Card";

type SimulatorEmptyStateProps = {
  title?: string;
  reason?: "not-found" | "coming-soon" | "no-steps";
};

export function SimulatorEmptyState({
  title = "Simulador no disponible",
  reason = "not-found",
}: SimulatorEmptyStateProps) {
  const message =
    reason === "coming-soon"
      ? "Este simulador está preparado en la biblioteca, pero todavía no está publicado."
      : reason === "no-steps"
        ? "Este simulador no tiene pasos configurados todavía."
        : "No hemos encontrado un simulador con ese identificador.";

  return (
    <Card className="p-8">
      <div className="max-w-2xl">
        <span className="grid h-12 w-12 place-items-center rounded border border-[color:var(--app-warning)]/35 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]">
          {reason === "coming-soon" ? (
            <Clock className="h-6 w-6" />
          ) : (
            <ShieldAlert className="h-6 w-6" />
          )}
        </span>
        <h1 className="mt-5 text-3xl font-black text-[var(--app-text-primary)]">{title}</h1>
        <p className="mt-3 leading-7 text-[var(--app-text-secondary)]">{message}</p>
        <Link
          href="/simulaciones"
          className="mt-6 inline-flex rounded bg-[#4d8eff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
        >
          Volver a simulaciones
        </Link>
      </div>
    </Card>
  );
}
