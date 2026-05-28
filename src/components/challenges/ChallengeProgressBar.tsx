type ChallengeProgressBarProps = {
  current: number;
  total: number;
};

export function ChallengeProgressBar({ current, total }: ChallengeProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          Progreso del reto
        </span>
        <span className="font-mono text-xs text-slate-300">
          {current}/{total}
        </span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded bg-white/10">
        <div
          className="h-full rounded bg-[#4d8eff] transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
