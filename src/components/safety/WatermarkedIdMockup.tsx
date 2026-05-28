import { BadgeCheck, CalendarDays, Eye, FileText, Tag } from "lucide-react";
import { Card } from "@/components/ui/Card";

const watermarkText =
  "Uso exclusivo para verificación en esta aplicación - Mayo 2026";

export function WatermarkedIdMockup() {
  return (
    <Card className="overflow-hidden p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Documento ficticio
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            DNI con marca de agua visible
          </h2>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
          <FileText className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_18rem]">
        <div className="rounded-lg border border-white/10 bg-[#050505] p-4">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-lg border border-[#4d8eff]/35 bg-[#151a22] p-5 shadow-[0_0_40px_rgba(77,142,255,0.12)]">
            <div className="absolute inset-0 lab-grid opacity-20" />
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono text-xs text-[#adc6ff]">
                    DOCUMENTO DE IDENTIDAD FICTICIO
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Uso educativo, sin datos reales
                  </p>
                </div>
                <BadgeCheck className="h-6 w-6 text-[#6ffbbe]" />
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-[8rem_1fr]">
                <div className="rounded border border-white/10 bg-slate-700/40 p-3">
                  <div className="h-24 rounded bg-slate-600/60" />
                  <div className="mt-3 h-2 rounded bg-slate-500/70" />
                  <div className="mt-2 h-2 w-2/3 rounded bg-slate-500/70" />
                </div>
                <div className="space-y-4">
                  <Field label="Nombre" value="Persona Ejemplo" />
                  <Field label="Documento" value="00000000-X" />
                  <Field label="Fecha" value="05/2026" />
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="h-2 rounded bg-slate-600/70" />
                    <div className="h-2 rounded bg-slate-600/70" />
                    <div className="h-2 rounded bg-slate-600/70" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center px-5">
              <div className="-rotate-12 rounded border border-[#adc6ff]/70 bg-[#4d8eff]/20 px-5 py-3 text-center text-sm font-black uppercase leading-6 tracking-wide text-[#d8e2ff] shadow-[0_0_30px_rgba(77,142,255,0.35)]">
                {watermarkText}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          <Callout icon={Eye} title="Marca visible" text="Debe verse sin tener que ampliar la imagen." />
          <Callout icon={BadgeCheck} title="No tapa datos necesarios" text="Nombre, documento y fecha siguen legibles." />
          <Callout icon={CalendarDays} title="Uso concreto y fecha" text="Indica finalidad y mes para limitar contexto." />
        </div>
      </div>
    </Card>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-white/10 bg-white/[0.03] p-3">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 font-mono text-sm text-slate-100">{value}</p>
    </div>
  );
}

function Callout({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Tag;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded border border-[#4d8eff]/25 bg-[#4d8eff]/10 p-4">
      <Icon className="h-5 w-5 text-[#adc6ff]" />
      <h3 className="mt-3 font-black text-white">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
