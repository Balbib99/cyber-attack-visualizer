import { IconByName } from "@/components/ui/IconByName";
import type { SafetyTipInfoCard } from "@/types/safetyTip";

export function TipInfoCards({ cards }: { cards: SafetyTipInfoCard[] }) {
  return (
    <div className="grid gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded border border-white/10 bg-[#050505]/80 p-4"
        >
          <span className="grid h-10 w-10 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
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
