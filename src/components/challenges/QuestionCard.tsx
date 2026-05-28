import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { ChallengeQuestion } from "@/types/challenge";

export function QuestionCard({
  question,
  current,
  total,
  children,
}: {
  question: ChallengeQuestion;
  current: number;
  total: number;
  children: React.ReactNode;
}) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-wrap gap-2">
        <Badge tone="blue">Prueba {current} de {total}</Badge>
        <Badge>{question.type}</Badge>
      </div>
      {question.scenario ? (
        <div className="mt-5 rounded border border-[#ffb95f]/25 bg-[#ffb95f]/10 p-4 text-sm leading-6 text-slate-200">
          {question.scenario}
        </div>
      ) : null}
      <h1 className="mt-5 text-2xl font-black text-white">
        {question.question}
      </h1>
      <div className="mt-6">{children}</div>
    </Card>
  );
}
