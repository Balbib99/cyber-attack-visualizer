type TrueFalseQuestionProps = {
  value?: boolean;
  onSelect: (value: boolean) => void;
  disabled?: boolean;
};

export function TrueFalseQuestion({
  value,
  onSelect,
  disabled = false,
}: TrueFalseQuestionProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        { label: "Verdadero", value: true },
        { label: "Falso", value: false },
      ].map((option) => (
        <button
          key={option.label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(option.value)}
          className={`rounded border p-5 text-center text-lg font-black transition ${
            value === option.value
              ? "border-[var(--app-primary)] bg-[var(--app-primary)]/12 text-white"
              : "border-white/10 bg-[var(--app-surface-elevated)] text-slate-300 hover:border-[var(--app-primary)]/35"
          } disabled:cursor-not-allowed`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
