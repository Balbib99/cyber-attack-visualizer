import Link from "next/link";
import { BadgeCheck, CalendarDays, FileText, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function FeaturedTipSection() {
  return (
    <Card className="overflow-hidden p-6 sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-center">
        <div>
          <Badge tone="green">Tip destacado</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--app-text-primary)] sm:text-4xl">
            Enviar tu DNI con más seguridad
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--app-text-secondary)]">
            Aprende a usar una marca de agua visible para limitar el uso
            indebido de documentos sensibles cuando una plataforma legítima
            solicita verificación.
          </p>
          <Link
            href="/seguridad-diaria/dni-marca-agua"
            className="mt-6 inline-flex rounded bg-[#4d8eff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            Ver consejo
          </Link>
        </div>

        <CompactWatermarkedDocument />
      </div>
    </Card>
  );
}

function CompactWatermarkedDocument() {
  const watermarkText = "Uso exclusivo para verificación - Mayo 2026";

  return (
    <div className="rounded-lg border border-[#4d8eff]/25 bg-[var(--app-surface-elevated)] p-4">
      <div className="relative overflow-hidden rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] p-5">
        <div className="absolute inset-0 lab-grid opacity-[0.08]" />
        <div className="relative z-10">
          <div className="flex items-center justify-between border-b border-[var(--app-border)] pb-4">
            <div>
              <p className="font-mono text-xs font-bold text-[#1d4ed8] dark:text-[#adc6ff]">
                DOCUMENTO FICTICIO
              </p>
              <p className="mt-1 text-xs text-[var(--app-text-muted)]">
                Uso educativo, sin datos reales
              </p>
            </div>
            <FileText className="h-6 w-6 text-[#1d4ed8] dark:text-[#adc6ff]" />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[7rem_1fr]">
            <div className="rounded border border-[var(--app-border)] bg-[var(--app-bg-muted)] p-3">
              <div className="h-24 rounded bg-[var(--app-surface-elevated)]" />
              <div className="mt-3 h-2 rounded bg-[#4d8eff]/20" />
              <div className="mt-2 h-2 w-2/3 rounded bg-[#4d8eff]/20" />
            </div>
            <div className="space-y-3">
              <Field label="Nombre" value="Persona Ejemplo" />
              <Field label="Documento" value="00000000-X" />
              <Field label="Fecha" value="05/2026" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center px-5">
          <div className="-rotate-12 rounded border border-[#4d8eff]/50 bg-[#4d8eff]/15 px-4 py-2 text-center text-xs font-black uppercase leading-5 tracking-wide text-[#1d4ed8] shadow-lg shadow-[#4d8eff]/10 dark:text-[#d8e2ff]">
            {watermarkText}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <MiniPoint icon={ShieldCheck} text="Marca visible" />
        <MiniPoint icon={BadgeCheck} text="Datos legibles" />
        <MiniPoint icon={CalendarDays} text="Uso y fecha" />
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-3">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--app-text-muted)]">
        {label}
      </p>
      <p className="mt-1 font-mono text-sm text-[var(--app-text-primary)]">
        {value}
      </p>
    </div>
  );
}

function MiniPoint({
  icon: Icon,
  text,
}: {
  icon: typeof ShieldCheck;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2 text-xs font-bold text-[var(--app-text-secondary)]">
      <Icon className="h-4 w-4 text-[#047857] dark:text-[#6ffbbe]" />
      {text}
    </div>
  );
}
