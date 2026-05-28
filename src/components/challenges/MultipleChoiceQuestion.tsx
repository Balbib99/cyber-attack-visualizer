import type { ChallengeOption } from "@/types/challenge";

type MultipleChoiceQuestionProps = {
  options: ChallengeOption[];
  selectedOptionId?: string;
  onSelect: (optionId: string) => void;
  disabled?: boolean;
};

export function MultipleChoiceQuestion({
  options,
  selectedOptionId,
  onSelect,
  disabled = false,
}: MultipleChoiceQuestionProps) {
  return (
    <div className="grid gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(option.id)}
          className={`rounded border p-4 text-left text-sm font-semibold leading-6 transition ${
            selectedOptionId === option.id
              ? "border-[#4d8eff] bg-[#4d8eff]/12 text-white"
              : "border-white/10 bg-[#050505] text-slate-300 hover:border-[#4d8eff]/35"
          } disabled:cursor-not-allowed`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
}
