import {
  AlertTriangle,
  BadgeCheck,
  CheckCircle2,
  DatabaseZap,
  KeyRound,
  Link2,
  LockKeyhole,
  Search,
  ShieldCheck,
  Smartphone,
  XCircle,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { WatermarkedIdMockup } from "@/components/safety/WatermarkedIdMockup";
import type { SafetyTip } from "@/types/safetyTip";

export function SafetyTipVisual({ tip }: { tip: SafetyTip }) {
  if (tip.visualType === "watermarked-id") {
    return (
      <div className="space-y-4">
        <WatermarkedIdMockup />
      </div>
    );
  }

  if (tip.visualType === "app-trust") {
    return <AppTrustVisual tip={tip} />;
  }

  if (tip.visualType === "two-factor") {
    return <TwoFactorVisual tip={tip} />;
  }

  if (tip.visualType === "breach-check") {
    return <BreachCheckVisual tip={tip} />;
  }

  if (tip.visualType === "query-safety") {
    return <QuerySafetyVisual tip={tip} />;
  }

  return <LinkCheckVisual tip={tip} />;
}

function VisualShell({
  tip,
  children,
}: {
  tip: SafetyTip;
  children: React.ReactNode;
}) {
  return (
    <Card className="relative min-h-[28rem] overflow-hidden border-[var(--app-primary)]/20 p-5 sm:p-6">
      <div className="absolute right-0 top-0 h-56 w-56 bg-[var(--app-primary)]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 bg-[var(--app-success)]/10 blur-3xl" />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          {tip.imageLabel}
        </p>
        <h2 className="mt-2 text-2xl font-black text-white">
          {tip.visualExample.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          {tip.visualExample.description}
        </p>
        <div className="mt-6">{children}</div>
      </div>
    </Card>
  );
}

function AppTrustVisual({ tip }: { tip: SafetyTip }) {
  return (
    <VisualShell tip={tip}>
      <div className="rounded-lg border border-white/10 bg-[var(--app-surface-elevated)] p-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="h-3 w-3 rounded-full bg-[var(--app-danger)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--app-warning)]" />
          <span className="h-3 w-3 rounded-full bg-[var(--app-success)]" />
          <div className="ml-3 flex-1 rounded border border-[var(--app-success)]/30 bg-[var(--app-success)]/10 px-3 py-2 font-mono text-xs text-[var(--app-success)]">
            https://servicio-oficial.example/verificacion
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_14rem]">
          <div className="space-y-3">
            <TrustRow good label="Dominio oficial confirmado" />
            <TrustRow good label="Política de privacidad visible" />
            <TrustRow good label="Datos solicitados coherentes" />
            <TrustRow label="Promesa urgente o demasiado atractiva" />
          </div>
          <div className="rounded border border-[var(--app-primary)]/20 bg-[var(--app-primary)]/10 p-4">
            <Search className="h-8 w-8 text-[var(--app-primary-dark)]" />
            <p className="mt-4 text-sm font-bold text-white">
              Verifica antes de subir documentos
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Una interfaz bonita no demuestra que el servicio sea legítimo.
            </p>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function TwoFactorVisual({ tip }: { tip: SafetyTip }) {
  return (
    <VisualShell tip={tip}>
      <div className="grid gap-5 lg:grid-cols-[1fr_13rem] lg:items-center">
        <div className="rounded-lg border border-white/10 bg-[var(--app-surface-elevated)] p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Inicio de sesión
              </p>
              <p className="mt-1 font-black text-white">Cuenta protegida</p>
            </div>
            <LockKeyhole className="h-6 w-6 text-[var(--app-success)]" />
          </div>
          <div className="mt-5 space-y-3">
            <div className="rounded border border-white/10 bg-white/[0.03] p-3">
              <div className="flex items-center gap-3">
                <KeyRound className="h-5 w-5 text-[var(--app-primary-dark)]" />
                <div>
                  <p className="text-sm font-bold text-white">Contraseña</p>
                  <p className="text-xs text-slate-500">Primera barrera</p>
                </div>
              </div>
            </div>
            <div className="rounded border border-[var(--app-success)]/25 bg-[var(--app-success)]/10 p-3">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-[var(--app-success)]" />
                <div>
                  <p className="text-sm font-bold text-white">
                    Segundo factor
                  </p>
                  <p className="text-xs text-slate-400">
                    App autenticadora, passkey o llave física
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-[var(--app-primary)]/30 bg-[var(--app-surface-elevated)] p-4 shadow-[0_0_40px_rgba(163,64,44,0.16)]">
          <div className="rounded-[1.25rem] border border-white/10 bg-[var(--app-surface-elevated)] p-4">
            <BadgeCheck className="mx-auto h-9 w-9 text-[var(--app-success)]" />
            <p className="mt-4 text-center text-sm font-black text-white">
              Solicitud verificada
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["4", "8", "2"].map((digit) => (
                <span
                  key={digit}
                  className="rounded border border-white/10 bg-white/[0.04] py-3 text-center font-mono text-lg font-black text-[var(--app-primary-dark)]"
                >
                  {digit}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function LinkCheckVisual({ tip }: { tip: SafetyTip }) {
  return (
    <VisualShell tip={tip}>
      <div className="rounded-lg border border-white/10 bg-[var(--app-surface-elevated)] p-4">
        <div className="rounded border border-[var(--app-warning)]/25 bg-[var(--app-warning)]/10 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-[var(--app-warning)]" />
            <div>
              <p className="font-bold text-white">Acción urgente requerida</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                Tu cuenta será bloqueada si no confirmas el acceso.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded border border-white/10 bg-[var(--app-surface-elevated)] p-4">
          <div className="flex items-center gap-3">
            <Link2 className="h-5 w-5 text-[var(--app-warning)]" />
            <div className="min-w-0 flex-1 font-mono text-xs text-slate-300">
              https://servicio-seguro.example.login-alerta.net/acceso
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <LinkSignal good label="Dominio oficial escrito manualmente" />
            <LinkSignal label="Subdominio que intenta parecer legítimo" />
            <LinkSignal label="Urgencia para introducir credenciales" />
            <LinkSignal good label="Acceso desde app oficial" />
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function BreachCheckVisual({ tip }: { tip: SafetyTip }) {
  return (
    <VisualShell tip={tip}>
      <div className="rounded-lg border border-white/10 bg-[var(--app-surface-elevated)] p-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              Revisión de exposición
            </p>
            <p className="mt-1 font-mono text-sm text-[var(--app-primary-dark)]">
              persona@example.com
            </p>
          </div>
          <DatabaseZap className="h-7 w-7 text-[var(--app-warning)]" />
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <ExposureMetric label="Brechas" value="2" tone="orange" />
          <ExposureMetric label="Contraseñas" value="Revisar" tone="red" />
          <ExposureMetric label="MFA" value="Activar" tone="green" />
        </div>

        <div className="mt-5 space-y-3">
          <LinkSignal label="No reutilices contraseñas antiguas" />
          <LinkSignal good label="Cambia credenciales en servicios afectados" />
          <LinkSignal good label="Activa MFA en cuentas importantes" />
        </div>
      </div>
    </VisualShell>
  );
}

function QuerySafetyVisual({ tip }: { tip: SafetyTip }) {
  return (
    <VisualShell tip={tip}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-[var(--app-danger)]/30 bg-[var(--app-surface-elevated)] p-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <XCircle className="h-4 w-4 text-[var(--app-danger)]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-danger)]">
              Vulnerable
            </span>
          </div>
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-6 text-slate-300">
{`query =
  "SELECT * FROM usuarios " +
  "WHERE email = '" + entrada + "'"`}
          </pre>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            La entrada del usuario se concatena directamente: puede alterar la
            estructura de la consulta.
          </p>
        </div>

        <div className="rounded-lg border border-[var(--app-success)]/30 bg-[var(--app-surface-elevated)] p-4">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <ShieldCheck className="h-4 w-4 text-[var(--app-success)]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-success)]">
              Parametrizada
            </span>
          </div>
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-6 text-slate-300">
{`query =
  "SELECT * FROM usuarios " +
  "WHERE email = ?"
db.run(query, [entrada])`}
          </pre>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            La entrada viaja como parámetro separado: el motor de base de
            datos nunca la interpreta como parte de la consulta.
          </p>
        </div>
      </div>
    </VisualShell>
  );
}

function ExposureMetric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "green" | "orange" | "red";
}) {
  const colors = {
    green: "border-[var(--app-success)]/25 bg-[var(--app-success)]/10 text-[var(--app-success)]",
    orange: "border-[var(--app-warning)]/25 bg-[var(--app-warning)]/10 text-[var(--app-warning)]",
    red: "border-[var(--app-danger)]/25 bg-[var(--app-danger)]/20 text-[var(--app-danger)]",
  };

  return (
    <div className={`rounded border p-4 ${colors[tone]}`}>
      <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-80">
        {label}
      </p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function TrustRow({ label, good = false }: { label: string; good?: boolean }) {
  const Icon = good ? CheckCircle2 : XCircle;

  return (
    <div className="flex items-center gap-3 rounded border border-white/10 bg-white/[0.03] p-3">
      <Icon
        className={`h-5 w-5 ${good ? "text-[var(--app-success)]" : "text-[var(--app-danger)]"}`}
      />
      <span className="text-sm text-slate-200">{label}</span>
    </div>
  );
}

function LinkSignal({ label, good = false }: { label: string; good?: boolean }) {
  const Icon = good ? CheckCircle2 : AlertTriangle;

  return (
    <div
      className={`flex items-start gap-3 rounded border p-3 ${
        good
          ? "border-[var(--app-success)]/20 bg-[var(--app-success)]/10"
          : "border-[var(--app-warning)]/25 bg-[var(--app-warning)]/10"
      }`}
    >
      <Icon
        className={`mt-0.5 h-4 w-4 shrink-0 ${
          good ? "text-[var(--app-success)]" : "text-[var(--app-warning)]"
        }`}
      />
      <span className="text-xs leading-5 text-slate-200">{label}</span>
    </div>
  );
}
