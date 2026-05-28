"use client";

import { ShieldCheck, Swords } from "lucide-react";

export type SimulatorMode = "attack" | "defense";

type AttackModeToggleProps = {
  mode: SimulatorMode;
  onModeChange: (mode: SimulatorMode) => void;
};

export function AttackModeToggle({ mode, onModeChange }: AttackModeToggleProps) {
  return (
    <div className="grid grid-cols-2 rounded border border-white/10 bg-[#050505] p-1">
      <button
        type="button"
        onClick={() => onModeChange("attack")}
        className={`inline-flex items-center justify-center gap-2 rounded px-3 py-2 text-sm font-bold transition ${
          mode === "attack"
            ? "bg-[#ffb95f]/15 text-[#ffddb8]"
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
            ? "bg-[#4edea3]/15 text-[#6ffbbe]"
            : "text-slate-400 hover:text-white"
        }`}
      >
        <ShieldCheck className="h-4 w-4" />
        Modo defensa
      </button>
    </div>
  );
}
