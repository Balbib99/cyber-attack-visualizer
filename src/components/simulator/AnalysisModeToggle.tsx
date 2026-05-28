import { BrainCircuit } from "lucide-react";

type AnalysisModeToggleProps = {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
};

export function AnalysisModeToggle({
  enabled,
  onChange,
}: AnalysisModeToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={enabled}
      onClick={() => onChange(!enabled)}
      className="inline-flex items-center gap-3 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-4 py-3 text-sm font-bold text-[var(--app-text-secondary)] transition hover:border-[#4d8eff]/45 hover:text-[var(--app-text-primary)] focus:outline-none focus:ring-2 focus:ring-[#4d8eff]"
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded border ${
          enabled
            ? "border-[#4d8eff]/40 bg-[#4d8eff]/15 text-[#1d4ed8] dark:text-[#adc6ff]"
            : "border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text-muted)]"
        }`}
      >
        <BrainCircuit className="h-4 w-4" />
      </span>
      <span className="text-left">
        <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
          Modo del simulador
        </span>
        <span className="block">
          {enabled ? "Modo análisis" : "Modo explicación"}
        </span>
      </span>
    </button>
  );
}
