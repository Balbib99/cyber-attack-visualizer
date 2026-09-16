import { Info } from "lucide-react";

export function ResponsibleNotice() {
  return (
    <div className="rounded-lg border border-[var(--app-primary)]/25 bg-[var(--app-primary)]/10 p-5">
      <div className="flex gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded border border-[var(--app-primary)]/35 bg-black/20 text-[var(--app-primary-dark)]">
          <Info className="h-5 w-5" />
        </span>
        <div>
          <h2 className="font-black text-white">Aviso responsable</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Esta recomendación no sustituye las instrucciones oficiales de la
            plataforma ni el asesoramiento legal. Si una entidad exige una
            imagen sin modificaciones, revisa sus condiciones y utiliza
            únicamente canales oficiales.
          </p>
        </div>
      </div>
    </div>
  );
}
