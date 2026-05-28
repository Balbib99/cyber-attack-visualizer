import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SafetyTip } from "@/types/safetyTip";

export function SafetyTipCard({ tip }: { tip: SafetyTip }) {
  return (
    <Card className="flex h-full flex-col p-5 transition hover:border-[#4edea3]/40 hover:bg-[#17191c]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone="green">{tip.category}</Badge>
          <Badge tone={riskTone(tip.importance)}>{tip.importance}</Badge>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[#4edea3]/30 bg-[#4edea3]/10 text-[#6ffbbe]">
          <ShieldCheck className="h-5 w-5" />
        </span>
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{tip.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
        {tip.summary}
      </p>
      <Link
        href={`/seguridad-diaria/${tip.id}`}
        className="mt-6 w-fit rounded bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
      >
        Ver guía
      </Link>
    </Card>
  );
}
