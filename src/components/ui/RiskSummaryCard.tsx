import type { LucideIcon } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { RiskLevel } from "@/types/threat";

type RiskSummaryCardProps = {
  title: string;
  riskLevel: RiskLevel;
  description: string;
  icon?: LucideIcon;
};

export function RiskSummaryCard({
  title,
  riskLevel,
  description,
  icon: Icon = AlertTriangle,
}: RiskSummaryCardProps) {
  return (
    <Card className="border-[var(--app-danger)]/25 p-5">
      <div className="flex items-center justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded border border-[var(--app-danger)]/35 bg-[var(--app-danger)]/20 text-[var(--app-danger)]">
          <Icon className="h-5 w-5" />
        </span>
        <Badge tone={riskTone(riskLevel)}>Riesgo {riskLevel}</Badge>
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </Card>
  );
}
