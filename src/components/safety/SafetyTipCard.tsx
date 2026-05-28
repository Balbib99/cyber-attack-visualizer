import Link from "next/link";
import {
  BadgeCheck,
  FileBadge2,
  Link2,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SafetyTip, SafetyTipVisualType } from "@/types/safetyTip";

const visualIcons: Record<SafetyTipVisualType, typeof ShieldCheck> = {
  "watermarked-id": FileBadge2,
  "app-trust": Search,
  "two-factor": Smartphone,
  "link-check": Link2,
  "breach-check": BadgeCheck,
};

export function SafetyTipCard({ tip }: { tip: SafetyTip }) {
  const Icon = visualIcons[tip.visualType] ?? ShieldCheck;

  return (
    <Card className="group flex h-full flex-col overflow-hidden p-5 transition hover:border-[#4edea3]/40 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone="green">{tip.category}</Badge>
          <Badge tone={riskTone(tip.importance)}>{tip.importance}</Badge>
          {tip.recommendedTool ? <Badge tone="blue">Incluye herramienta</Badge> : null}
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded border border-[#4edea3]/30 bg-[#4edea3]/10 text-[#6ffbbe] transition group-hover:scale-[1.03]">
          <Icon className="h-6 w-6" />
        </span>
      </div>

      <div className="mt-5 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          {tip.badge ?? "Consejo práctico"}
        </p>
        <h3 className="mt-2 text-xl font-black text-white">{tip.title}</h3>
      </div>

      <p className="mt-4 flex-1 text-sm leading-6 text-slate-400">
        {tip.summary}
      </p>

      {tip.recommendedTool ? (
        <p className="mt-4 text-xs font-bold text-[#adc6ff]">
          Recurso: {tip.recommendedTool.name}
        </p>
      ) : null}

      <Link
        href={`/seguridad-diaria/${tip.id}`}
        className="mt-5 inline-flex w-fit rounded bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
      >
        Ver consejo
      </Link>
    </Card>
  );
}
