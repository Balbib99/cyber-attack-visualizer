import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const badges = [
  "Datos ficticios",
  "Sin backend",
  "Enfoque defensivo",
  "Proyecto portfolio",
];

export function SafeLearningCallout() {
  return (
    <Card className="border-[color:var(--app-success)]/25 p-6 sm:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]">
          <ShieldCheck className="h-7 w-7" />
        </span>
        <div className="min-w-0 flex-1">
          <Badge tone="green">Seguro para aprender</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--app-text-primary)]">
            Un entorno educativo, no ofensivo
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--app-text-secondary)]">
            AttackFlow Lab no usa datos reales, no ejecuta ataques y evita
            instrucciones ofensivas. Todo está diseñado para aprender desde un
            enfoque defensivo, visual y responsable.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-3 py-2 text-sm font-bold text-[var(--app-text-secondary)]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
