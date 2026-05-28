import type { RiskLevel } from "@/types/threat";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "green" | "orange" | "red" | "neutral";
  className?: string;
};

const toneStyles = {
  blue:
    "border-[color:var(--app-primary)]/30 bg-[var(--app-primary-soft)] text-[var(--app-primary-dark)]",
  green:
    "border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]",
  orange:
    "border-[color:var(--app-warning)]/30 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]",
  red:
    "border-[color:var(--app-danger)]/30 bg-[var(--app-danger-soft)] text-[#dc2626] dark:text-[#ffb4ab]",
  neutral:
    "border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-[var(--app-text-secondary)]",
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border px-2.5 py-1 text-xs font-semibold",
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
