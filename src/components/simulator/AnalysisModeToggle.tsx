import { BrainCircuit, BookOpenText } from "lucide-react";

type AnalysisModeToggleProps = {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
};

const options = [
  {
    label: "Modo explicación",
    description: "Aprender viendo",
    enabled: false,
    icon: BookOpenText,
  },
  {
    label: "Modo análisis",
    description: "Responder por paso",
    enabled: true,
    icon: BrainCircuit,
  },
] as const;

export function AnalysisModeToggle({
  enabled,
  onChange,
}: AnalysisModeToggleProps) {
  return (
    <div
      role="group"
      aria-label="Modo del simulador"
      className="rounded-lg border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-1.5"
    >
      <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = enabled === option.enabled;

          return (
            <button
              key={option.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option.enabled)}
              className={`flex items-center gap-3 rounded-md border px-3 py-2.5 text-left transition focus:outline-none focus:ring-2 focus:ring-[#4d8eff]/60 ${
                isActive
                  ? "border-[#4d8eff]/45 bg-[#4d8eff]/12 text-[#1d4ed8] shadow-sm dark:text-[#adc6ff]"
                  : "border-transparent text-[var(--app-text-secondary)] hover:bg-[var(--app-surface)] hover:text-[var(--app-text-primary)]"
              }`}
            >
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded border ${
                  isActive
                    ? "border-[#4d8eff]/35 bg-[#4d8eff]/10"
                    : "border-[var(--app-border)] bg-[var(--app-surface)]"
                }`}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-black">{option.label}</span>
                <span className="block text-xs font-semibold text-[var(--app-text-muted)]">
                  {option.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
