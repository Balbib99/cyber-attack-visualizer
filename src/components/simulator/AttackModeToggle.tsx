"use client";

import { ShieldCheck, Swords } from "lucide-react";

export type SimulatorMode = "attack" | "defense";

type AttackModeToggleProps = {
  mode: SimulatorMode;
  onModeChange: (mode: SimulatorMode) => void;
};

export function AttackModeToggle({ mode, onModeChange }: AttackModeToggleProps) {
  return (
    <div className="grid grid-cols-2 rounded border border-white/10 bg-[var(--app-surface-elevated)] p-1">
      <button
        type="button"
        onClick={() => onModeChange("attack")}
        className={`inline-flex items-center justify-center gap-2 rounded px-3 py-2 text-sm font-bold transition ${
          mode === "attack"
            ? "bg-[var(--app-warning)]/15 text-[var(--app-warning)]"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <Swords className="h-4 w-4" />
        Modo ataque
      </button>
      <button
        type="button"
        onClick={() => onModeChange("defense")}
        className={`inline-flex items-center justify-center gap-2 rounded px-3 py-2 text-sm font-bold transition ${
          mode === "defense"
            ? "bg-[var(--app-success)]/15 text-[var(--app-success)]"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <ShieldCheck className="h-4 w-4" />
        Modo defensa
      </button>
    </div>
  );
}
