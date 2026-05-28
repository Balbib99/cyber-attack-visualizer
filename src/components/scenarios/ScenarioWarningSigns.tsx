import { AlertTriangle } from "lucide-react";

export function ScenarioWarningSigns({ signs }: { signs: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {signs.map((sign) => (
        <div
          key={sign}
          className="flex items-start gap-3 rounded border border-[color:var(--app-warning)]/25 bg-[var(--app-warning-soft)] p-3 text-sm leading-6 text-[#92400e] dark:text-[#ffddb8]"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{sign}</span>
        </div>
      ))}
    </div>
  );
}
