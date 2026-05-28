import { FileWarning, IdCard, LockKeyhole, MailWarning } from "lucide-react";
import type { CyberScenario } from "@/types/scenario";

export function ScenarioVisual({
  visualType,
}: {
  visualType: CyberScenario["visualType"];
}) {
  if (visualType === "id-check") {
    return <IdCheckVisual />;
  }

  if (visualType === "file-attachment") {
    return <FileAttachmentVisual />;
  }

  if (visualType === "fake-login") {
    return <FakeLoginVisual />;
  }

  return <EmailVisual />;
}

function Shell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] p-4 shadow-2xl shadow-[var(--app-shadow)]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--app-text-muted)]">
          {label}
        </span>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
        </span>
      </div>
      {children}
    </div>
  );
}

function EmailVisual() {
  return (
    <Shell label="Bandeja de entrada">
      <div className="rounded border border-[color:var(--app-danger)]/25 bg-[var(--app-danger-soft)] p-4">
        <div className="flex items-start gap-3">
          <MailWarning className="mt-1 h-6 w-6 shrink-0 text-[#dc2626] dark:text-[#ffb4ab]" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black text-[var(--app-text-primary)]">
              Tu cuenta será bloqueada
            </p>
            <p className="mt-1 text-xs text-[var(--app-text-muted)]">
              seguridad-alertas@servicio-ejemplo.invalid
            </p>
            <p className="mt-4 text-sm leading-6 text-[var(--app-text-secondary)]">
              Verifica tus datos en las próximas 24 horas para evitar el bloqueo.
            </p>
            <div className="mt-4 inline-flex rounded bg-[#ef4444] px-4 py-2 text-sm font-bold text-white">
              Iniciar sesión ahora
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function IdCheckVisual() {
  return (
    <Shell label="Verificación de identidad">
      <div className="relative overflow-hidden rounded-lg border border-[#4d8eff]/25 bg-[var(--app-surface-elevated)] p-5">
        <div className="absolute inset-x-0 top-1/2 rotate-[-12deg] border-y border-[#4d8eff]/30 bg-[#4d8eff]/10 py-2 text-center text-xs font-black uppercase tracking-[0.16em] text-[#1d4ed8] dark:text-[#adc6ff]">
          Uso exclusivo para verificación - Mayo 2026
        </div>
        <div className="relative flex items-start gap-4">
          <span className="grid h-16 w-16 place-items-center rounded border border-[var(--app-border)] bg-[var(--app-surface)]">
            <IdCard className="h-8 w-8 text-[#1d4ed8] dark:text-[#adc6ff]" />
          </span>
          <div className="space-y-2 text-sm">
            <p className="font-black text-[var(--app-text-primary)]">
              Documento ficticio
            </p>
            <p className="text-[var(--app-text-secondary)]">Nombre: Persona Ejemplo</p>
            <p className="text-[var(--app-text-secondary)]">Documento: 00000000-X</p>
            <p className="text-[var(--app-text-secondary)]">Fecha: 05/2026</p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function FileAttachmentVisual() {
  return (
    <Shell label="Correo con adjunto">
      <div className="rounded border border-[color:var(--app-warning)]/25 bg-[var(--app-warning-soft)] p-4">
        <p className="text-sm font-black text-[var(--app-text-primary)]">
          Factura pendiente
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
          Abre el documento cuanto antes para evitar recargos.
        </p>
        <div className="mt-4 flex items-center gap-3 rounded border border-[var(--app-border)] bg-[var(--app-surface)] p-3">
          <FileWarning className="h-6 w-6 text-[#b45309] dark:text-[#ffddb8]" />
          <div>
            <p className="text-sm font-bold text-[var(--app-text-primary)]">
              factura-pendiente
            </p>
            <p className="text-xs text-[var(--app-text-muted)]">
              Archivo inesperado
            </p>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function FakeLoginVisual() {
  return (
    <Shell label="Navegador">
      <div className="rounded border border-[color:var(--app-danger)]/25 bg-[var(--app-surface-elevated)] p-4">
        <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface)] px-3 py-2 text-xs font-bold text-[#dc2626] dark:text-[#ffb4ab]">
          https://login-servicio-ejemplo.invalid/verificar
        </div>
        <div className="mx-auto mt-5 max-w-sm rounded border border-[var(--app-border)] bg-[var(--app-surface)] p-5">
          <LockKeyhole className="h-8 w-8 text-[#1d4ed8] dark:text-[#adc6ff]" />
          <p className="mt-3 text-lg font-black text-[var(--app-text-primary)]">
            Acceso seguro
          </p>
          <div className="mt-4 space-y-3">
            <div className="h-10 rounded border border-[var(--app-border)] bg-[var(--app-bg-muted)]" />
            <div className="h-10 rounded border border-[var(--app-border)] bg-[var(--app-bg-muted)]" />
            <div className="h-10 rounded bg-[#4d8eff]" />
          </div>
        </div>
      </div>
    </Shell>
  );
}
