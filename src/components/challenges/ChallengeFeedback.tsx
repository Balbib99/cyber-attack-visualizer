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
          ? "border-[#4edea3]/30 bg-[#4edea3]/10"
          : "border-[#ff6b5f]/30 bg-[#93000a]/20"
      }`}
    >
      <div className="flex gap-3">
        {isCorrect ? (
          <CheckCircle2 className="h-6 w-6 shrink-0 text-[#6ffbbe]" />
        ) : (
          <XCircle className="h-6 w-6 shrink-0 text-[#ffb4ab]" />
        )}
        <div>
          <h3 className="font-black text-white">
            {isCorrect ? "Respuesta correcta" : "Respuesta incorrecta"}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{explanation}</p>
          <div className="mt-4 rounded border border-[#4edea3]/20 bg-[#4edea3]/10 p-3">
            <div className="flex gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#6ffbbe]" />
              <p className="text-sm leading-6 text-slate-200">{defenseTip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
