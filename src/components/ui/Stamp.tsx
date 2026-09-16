import type { RiskLevel } from "@/types/threat";
import { cn } from "@/lib/utils";

type StampTone =
  | "accent"
  | "success"
  | "muted"
  | "risk-critico"
  | "risk-alto"
  | "risk-medio"
  | "risk-bajo";

type StampProps = {
  children: React.ReactNode;
  tone?: StampTone;
  className?: string;
};

const toneStyles: Record<StampTone, string> = {
  accent: "border-[var(--app-primary)] text-[var(--app-primary)]",
  success: "border-[var(--app-success)] text-[var(--app-success)]",
  muted: "border-[var(--app-border-strong)] text-[var(--app-text-muted)]",
  "risk-critico": "border-[var(--app-risk-critico)] text-[var(--app-risk-critico)]",
  "risk-alto": "border-[var(--app-risk-alto)] text-[var(--app-risk-alto)]",
  "risk-medio": "border-[var(--app-risk-medio)] text-[var(--app-risk-medio)]",
  "risk-bajo": "border-[var(--app-risk-bajo)] text-[var(--app-risk-bajo)]",
};

/** Sello rotado tipo expediente. Reservado para el dato que más importa en el
 * contexto (nivel de riesgo, estado de un reto) — no usar como decoración. */
export function Stamp({ children, tone = "accent", className }: StampProps) {
  return (
    <span
      className={cn(
        "inline-block -rotate-3 whitespace-nowrap rounded-sm border-[3px] border-double px-2 py-1 font-mono text-[0.66rem] uppercase tracking-[0.04em]",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function riskStampTone(risk: RiskLevel): StampTone {
  const tones: Record<RiskLevel, StampTone> = {
    Bajo: "risk-bajo",
    Medio: "risk-medio",
    Alto: "risk-alto",
    Crítico: "risk-critico",
  };

  return tones[risk];
}
