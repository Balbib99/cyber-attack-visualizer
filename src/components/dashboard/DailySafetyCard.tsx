import Link from "next/link";
import { FileBadge2, ShieldCheck } from "lucide-react";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SafetyTip } from "@/types/safetyTip";

export function DailySafetyCard({ tip }: { tip: SafetyTip }) {
  return (
    <Card className="overflow-hidden border-[#4edea3]/20 p-5 transition hover:border-[#4edea3]/40 hover:bg-[#17191c]">
      <div className="flex items-center justify-between gap-4">
        <Badge tone="green">Consejo diario</Badge>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[#4edea3]/30 bg-[#4edea3]/10 text-[#6ffbbe]">
          <ShieldCheck className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-5 rounded border border-white/10 bg-[#050505] p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
            <FileBadge2 className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Seguridad práctica
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge tone="green">{tip.category}</Badge>
              <Badge tone={riskTone(tip.importance)}>{tip.importance}</Badge>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-5 text-xl font-black text-white">{tip.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{tip.summary}</p>

      <Link
        href={`/seguridad-diaria/${tip.id}`}
        className="mt-5 inline-flex w-full items-center justify-center rounded bg-[#4d8eff] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a] sm:w-fit"
      >
        Ver consejo
      </Link>
    </Card>
  );
}
