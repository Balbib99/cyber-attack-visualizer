import Link from "next/link";
import { AlertTriangle, ArrowUpRight, CheckCircle2, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { RecommendedTool } from "@/types/safetyTip";

export function RecommendedToolCard({ tool }: { tool: RecommendedTool }) {
  return (
    <Card className="overflow-hidden border-[var(--app-primary)]/25 p-5 sm:p-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="blue">Herramienta recomendada</Badge>
            {tool.officialLabel ? <Badge>{tool.officialLabel}</Badge> : null}
          </div>

          <div className="mt-5 flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded border border-[var(--app-primary)]/35 bg-[var(--app-primary)]/10 text-[var(--app-primary-dark)]">
              <Wrench className="h-6 w-6" />
            </span>
            <div>
              <h2 className="text-2xl font-black text-white">{tool.name}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                {tool.description}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Casos de uso
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tool.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded border border-[var(--app-success)]/25 bg-[var(--app-success)]/10 px-3 py-2 text-xs font-bold text-[var(--app-success)]"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {tool.note ? (
            <div className="mt-5 rounded border border-[var(--app-primary)]/25 bg-[var(--app-primary)]/10 p-4 text-sm leading-6 text-slate-200">
              {tool.note}
            </div>
          ) : null}

          {tool.url ? (
            <Link
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded bg-[var(--app-primary)] px-5 py-3 text-sm font-bold text-[var(--app-surface)] transition hover:bg-[var(--app-primary-dark)] hover:text-[var(--app-surface)]"
            >
              Abrir herramienta
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="space-y-4">
          <div className="rounded border border-white/10 bg-[var(--app-surface-elevated)]/80 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Pasos prácticos
            </p>
            <ol className="mt-4 space-y-3">
              {tool.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded border border-[var(--app-primary)]/35 bg-[var(--app-primary)]/10 font-mono text-xs font-black text-[var(--app-primary-dark)]">
                    {index + 1}
                  </span>
                  <span className="text-slate-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {tool.warning ? (
            <div className="rounded border border-[var(--app-warning)]/30 bg-[var(--app-warning)]/10 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--app-warning)]" />
                <div>
                  <p className="font-bold text-white">Aviso responsable</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {tool.warning}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded border border-[var(--app-success)]/25 bg-[var(--app-success)]/10 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--app-success)]" />
                <p className="text-sm leading-6 text-slate-300">
                  Usa este recurso como apoyo dentro de un proceso de revisión,
                  no como garantía absoluta de seguridad.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
