"use client";

import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

type SimulatorControlsProps = {
  canGoBack: boolean;
  canGoForward: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onReset: () => void;
  currentStep?: number;
  totalSteps?: number;
};

export function SimulatorControls({
  canGoBack,
  canGoForward,
  onPrevious,
  onNext,
  onReset,
  currentStep,
  totalSteps,
}: SimulatorControlsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!canGoBack}
          className="inline-flex items-center justify-center gap-2 rounded border border-[var(--app-border)] px-4 py-2 text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!canGoForward}
          className="inline-flex items-center justify-center gap-2 rounded bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Siguiente
          <ArrowRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded border border-[color:var(--app-warning)]/40 px-4 py-2 text-sm font-bold text-[#b45309] transition hover:bg-[var(--app-warning-soft)] dark:text-[#ffddb8]"
        >
          <RotateCcw className="h-4 w-4" />
          Reiniciar
        </button>
      </div>

      {currentStep && totalSteps ? (
        <span className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-3 py-2 text-center font-mono text-xs text-[var(--app-text-secondary)]">
          Paso {currentStep} de {totalSteps}
        </span>
      ) : null}
    </div>
  );
}
