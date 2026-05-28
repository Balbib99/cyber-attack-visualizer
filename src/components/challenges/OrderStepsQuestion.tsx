import { ArrowDown, ArrowUp } from "lucide-react";
import type { ChallengeOption } from "@/types/challenge";

type OrderStepsQuestionProps = {
  items: ChallengeOption[];
  onChange: (items: ChallengeOption[]) => void;
  disabled?: boolean;
};

export function OrderStepsQuestion({
  items,
  onChange,
  disabled = false,
}: OrderStepsQuestionProps) {
  const move = (index: number, direction: -1 | 1) => {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= items.length) {
      return;
    }

    const next = [...items];
    const [item] = next.splice(index, 1);
    next.splice(nextIndex, 0, item);
    onChange(next);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="flex items-center gap-3 rounded border border-white/10 bg-[#050505] p-3"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-[#4d8eff]/10 font-mono text-xs font-bold text-[#adc6ff]">
            {index + 1}
          </span>
          <p className="flex-1 text-sm font-semibold leading-6 text-slate-200">
            {item.text}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={disabled || index === 0}
              onClick={() => move(index, -1)}
              className="grid h-8 w-8 place-items-center rounded border border-white/10 text-slate-300 disabled:opacity-30"
              aria-label={`Subir ${item.text}`}
            >
              <ArrowUp className="h-4 w-4" />
            </button>
            <button
              type="button"
              disabled={disabled || index === items.length - 1}
              onClick={() => move(index, 1)}
              className="grid h-8 w-8 place-items-center rounded border border-white/10 text-slate-300 disabled:opacity-30"
              aria-label={`Bajar ${item.text}`}
            >
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
