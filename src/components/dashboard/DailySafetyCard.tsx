import Link from "next/link";
import { FileBadge2, ShieldCheck } from "lucide-react";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SafetyTip } from "@/types/safetyTip";

export function DailySafetyCard({ tip }: { tip: SafetyTip }) {
  return (
    <Card className="overflow-hidden border-[var(--app-success)]/20 p-5 transition hover:border-[var(--app-success)]/40 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex items-center justify-between gap-4">
        <Badge tone="green">Consejo diario</Badge>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[var(--app-success)]/30 bg-[var(--app-success)]/10 text-[var(--app-success)] dark:text-[var(--app-success)]">
          <ShieldCheck className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-5 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary)] dark:text-[var(--app-primary-dark)]">
            <FileBadge2 className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
              Seguridad práctica
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge tone="green">{tip.category}</Badge>
              <Badge tone={riskTone(tip.importance)}>{tip.importance}</Badge>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl font-black text-[var(--app-text-primary)]">{tip.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">{tip.summary}</p>

      <Link
        href={`/seguridad-diaria/${tip.id}`}
        className="mt-5 inline-flex w-full items-center justify-center rounded bg-[var(--app-primary)] px-4 py-2.5 text-sm font-bold text-[var(--app-surface)] transition hover:bg-[var(--app-primary-dark)] hover:text-[var(--app-surface)] sm:w-fit"
      >
        Ver consejo
      </Link>
    </Card>
  );
}
