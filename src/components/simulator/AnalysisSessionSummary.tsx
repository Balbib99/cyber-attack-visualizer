import Link from "next/link";
import { ArrowRight, CheckCircle2, RotateCcw, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type AnalysisSessionSummaryProps = {
  correctCount: number;
  totalQuestions: number;
  challengeHref?: string;
  challengeLabel?: string;
  onReset: () => void;
};

export function AnalysisSessionSummary({
  correctCount,
  totalQuestions,
  challengeHref,
  challengeLabel = "Ahora haz el reto",
  onReset,
}: AnalysisSessionSummaryProps) {
  const percentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const message =
    percentage >= 80
      ? "Has observado la mayoría de señales clave. Buen momento para pasar al reto."
      : percentage >= 50
        ? "Vas bien. Revisa las explicaciones y refuerza los pasos donde dudaste."
        : "Tómate otra vuelta con calma. La idea es entrenar la mirada, no acertar a la primera.";

  return (
    <Card className="border-[#4edea3]/25 p-5 sm:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded border border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]">
            <Sparkles className="h-6 w-6" />
          </span>
          <div>
            <Badge tone="green">Resumen del análisis</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              {correctCount} de {totalQuestions} observaciones correctas
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--app-text-secondary)]">
              {message}
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--app-bg-muted)]">
              <div
                className="h-full rounded-full bg-[var(--app-success)]"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center justify-center gap-2 rounded border border-[var(--app-border)] px-4 py-2.5 text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
          >
            <RotateCcw className="h-4 w-4" />
            Repetir análisis
          </button>
          {challengeHref ? (
            <Link
              href={challengeHref}
              className="inline-flex items-center justify-center gap-2 rounded bg-[#4d8eff] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
            >
              {challengeLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-4 py-3 text-sm font-semibold text-[var(--app-text-secondary)]">
        <CheckCircle2 className="h-4 w-4 text-[var(--app-success)]" />
        El resumen solo vive en esta sesión. No se guarda ningún progreso.
      </div>
    </Card>
  );
}
