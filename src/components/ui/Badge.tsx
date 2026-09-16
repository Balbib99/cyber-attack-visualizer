import type { RiskLevel } from "@/types/threat";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "green" | "orange" | "red" | "neutral";
  className?: string;
};

const toneStyles = {
  blue:
    "border-[color:var(--app-primary)]/40 bg-[var(--app-primary-soft)] text-[var(--app-primary)]",
  green:
    "border-[color:var(--app-success)]/40 bg-[var(--app-success-soft)] text-[var(--app-success)]",
  orange:
    "border-[color:var(--app-warning)]/40 bg-[var(--app-warning-soft)] text-[var(--app-warning)]",
  red:
    "border-[color:var(--app-danger)]/40 bg-[var(--app-danger-soft)] text-[var(--app-danger)]",
  neutral:
    "border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-[var(--app-text-secondary)]",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.04em]",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function riskTone(risk: RiskLevel): BadgeProps["tone"] {
  const tones: Record<RiskLevel, BadgeProps["tone"]> = {
    Bajo: "green",
    Medio: "orange",
    Alto: "orange",
    Crítico: "red",
  };

  return tones[risk];
}
