import Link from "next/link";
import { RelatedInlineLinks } from "@/components/education/RelatedInlineLinks";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Stamp, riskStampTone } from "@/components/ui/Stamp";
import type { Threat } from "@/types/threat";

export function ThreatCard({ threat }: { threat: Threat }) {
  return (
    <Card
      notch
      className="relative flex h-full flex-col p-5 transition hover:border-[var(--app-primary)]/60"
    >
      <div className="absolute right-4 top-4">
        <Stamp tone={riskStampTone(threat.riskLevel)}>{threat.riskLevel}</Stamp>
      </div>
      <div className="flex flex-wrap gap-2 pr-24">
        <Badge tone="blue">{threat.category}</Badge>
        <Badge>{threat.difficulty}</Badge>
      </div>
      <h3 className="mt-5 text-xl text-[var(--app-text-primary)]">
        {threat.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--app-text-secondary)]">
        {threat.shortDescription}
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <Link
          href={`/amenazas/${threat.id}`}
          className="rounded bg-[var(--app-primary)] px-4 py-2 text-center text-sm font-bold text-[var(--app-surface)] transition hover:bg-[var(--app-primary-dark)] hover:text-[var(--app-surface)]"
        >
          Ver detalles
        </Link>
        {threat.simulatorAvailable ? (
          <RelatedInlineLinks
            label="También puedes ver"
            links={[{ label: "Simulador", href: `/simulador/${threat.id}` }]}
          />
        ) : (
          <span className="text-sm font-bold text-[var(--app-text-muted)]">
            Simulador próximamente
          </span>
        )}
      </div>
    </Card>
  );
}
