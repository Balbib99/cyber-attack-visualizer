import Link from "next/link";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { IconByName } from "@/components/ui/IconByName";
import type { Threat } from "@/types/threat";

export function ThreatCard({ threat }: { threat: Threat }) {
  return (
    <Card className="flex h-full flex-col p-5 transition hover:border-[#4d8eff]/50 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Badge tone="blue">{threat.category}</Badge>
          <Badge tone={riskTone(threat.riskLevel)}>
            Riesgo {threat.riskLevel}
          </Badge>
          <Badge>{threat.difficulty}</Badge>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
          <IconByName name={threat.icon} className="h-5 w-5" />
        </span>
      </div>
      <h3 className="mt-5 text-xl font-black text-[var(--app-text-primary)]">{threat.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--app-text-secondary)]">
        {threat.shortDescription}
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <Link
          href={`/amenazas/${threat.id}`}
          className="rounded bg-[#4d8eff] px-4 py-2 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
        >
          Ver detalles
        </Link>
        {threat.simulatorAvailable ? (
          <Link
            href={`/simulador/${threat.id}`}
            className="rounded border border-[#4d8eff]/40 px-4 py-2 text-center text-sm font-bold text-[#1d4ed8] transition hover:bg-[#4d8eff]/10 dark:text-[#adc6ff]"
          >
            Abrir simulador
          </Link>
        ) : (
          <span className="rounded border border-[var(--app-border)] px-4 py-2 text-center text-sm font-bold text-[var(--app-text-muted)]">
            Simulador próximamente
          </span>
        )}
      </div>
    </Card>
  );
}
