import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SafetyTipVisual } from "@/components/safety/SafetyTipVisual";
import { TipInfoCards } from "@/components/safety/TipInfoCards";
import type { SafetyTip } from "@/types/safetyTip";

type TipDetailLayoutProps = {
  tip: SafetyTip;
};

export function TipDetailLayout({ tip }: TipDetailLayoutProps) {
  return (
    <section className="space-y-6">
      <header className="relative overflow-hidden rounded-lg border border-white/10 bg-[#121212]/80 p-6 sm:p-8">
        <div className="absolute right-0 top-0 h-64 w-64 bg-[#4d8eff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 bg-[#4edea3]/10 blur-3xl" />
        <div className="relative max-w-4xl">
          <div className="flex flex-wrap gap-2">
            <Badge tone="blue">{tip.badge ?? "Consejo práctico"}</Badge>
            <Badge tone="green">{tip.category}</Badge>
            <Badge tone={riskTone(tip.importance)}>
              Importancia {tip.importance.toLowerCase()}
            </Badge>
          </div>
          <h1 className="mt-5 text-4xl font-black text-white sm:text-6xl">
            {tip.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            {tip.subtitle ?? tip.summary}
          </p>
        </div>
      </header>

      <Card className="overflow-hidden border-[#4d8eff]/20 p-4 sm:p-5">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_22rem]">
          <SafetyTipVisual tip={tip} />
          <aside className="min-w-0">
            <TipInfoCards cards={tip.infoCards} />
          </aside>
        </div>
      </Card>
    </section>
  );
}
