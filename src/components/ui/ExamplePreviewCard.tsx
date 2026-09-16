import { BadgeCheck, FileText, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { SafetyTip } from "@/types/safetyTip";

type ExamplePreviewCardProps = {
  tip: SafetyTip;
};

export function ExamplePreviewCard({ tip }: ExamplePreviewCardProps) {
  const watermark = tip.visualExample.watermarkText;

  return (
    <Card className="overflow-hidden p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            {tip.imageLabel}
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            {tip.visualExample.title}
          </h3>
        </div>
        <span className="grid h-10 w-10 place-items-center rounded border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary-dark)]">
          <FileText className="h-5 w-5" />
        </span>
      </div>

      {watermark ? (
        <div className="mt-6 rounded-lg border border-white/10 bg-[var(--app-surface-elevated)] p-4">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-lg border border-[var(--app-primary)]/30 bg-[var(--app-surface-elevated)] p-5">
            <div className="absolute inset-0 lab-grid opacity-20" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[var(--app-primary-dark)]">
                  DOCUMENTO FICTICIO
                </span>
                <BadgeCheck className="h-5 w-5 text-[var(--app-success)]" />
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-4">
                <div className="h-24 rounded border border-white/10 bg-slate-700/40" />
                <div className="space-y-3">
                  <div className="h-3 w-3/4 rounded bg-slate-500/60" />
                  <div className="h-3 w-1/2 rounded bg-slate-500/60" />
                  <div className="h-3 w-2/3 rounded bg-slate-500/60" />
                  <div className="h-3 w-1/3 rounded bg-slate-500/60" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-2 rounded bg-slate-600/60" />
                <div className="h-2 rounded bg-slate-600/60" />
                <div className="h-2 rounded bg-slate-600/60" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <div className="-rotate-12 rounded border border-[var(--app-primary-dark)]/60 bg-[var(--app-primary)]/15 px-4 py-2 text-center text-sm font-black uppercase tracking-wide text-[var(--app-primary-soft)] shadow-[0_0_30px_rgba(163,64,44,0.25)]">
                {watermark}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-[var(--app-primary)]/20 bg-[var(--app-primary)]/10 p-5">
          <ShieldCheck className="h-8 w-8 text-[var(--app-primary-dark)]" />
          <p className="mt-4 text-sm leading-6 text-slate-300">
            {tip.visualExample.description}
          </p>
        </div>
      )}

      <p className="mt-5 text-sm leading-6 text-slate-400">
        {tip.visualExample.description}
      </p>
    </Card>
  );
}
