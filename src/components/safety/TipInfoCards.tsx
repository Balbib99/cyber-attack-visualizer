import { IconByName } from "@/components/ui/IconByName";
import type { SafetyTipInfoCard } from "@/types/safetyTip";

export function TipInfoCards({ cards }: { cards: SafetyTipInfoCard[] }) {
  return (
    <div className="grid gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded border border-white/10 bg-[var(--app-surface-elevated)]/80 p-4"
        >
          <span className="grid h-10 w-10 place-items-center rounded border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary-dark)]">
            <IconByName name={card.icon} className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-black text-white">{card.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
