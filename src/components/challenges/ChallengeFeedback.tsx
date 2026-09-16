import { CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

type ChallengeFeedbackProps = {
  isCorrect: boolean;
  explanation: string;
  defenseTip: string;
};

export function ChallengeFeedback({
  isCorrect,
  explanation,
  defenseTip,
}: ChallengeFeedbackProps) {
  return (
    <div
      className={`rounded border p-5 ${
        isCorrect
          ? "border-[var(--app-success)]/30 bg-[var(--app-success)]/10"
          : "border-[var(--app-danger)]/30 bg-[var(--app-danger)]/20"
      }`}
    >
      <div className="flex gap-3">
        {isCorrect ? (
          <CheckCircle2 className="h-6 w-6 shrink-0 text-[var(--app-success)]" />
        ) : (
          <XCircle className="h-6 w-6 shrink-0 text-[var(--app-danger)]" />
        )}
        <div>
          <h3 className="font-black text-white">
            {isCorrect ? "Respuesta correcta" : "Respuesta incorrecta"}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{explanation}</p>
          <div className="mt-4 rounded border border-[var(--app-success)]/20 bg-[var(--app-success)]/10 p-3">
            <div className="flex gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[var(--app-success)]" />
              <p className="text-sm leading-6 text-slate-200">{defenseTip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
