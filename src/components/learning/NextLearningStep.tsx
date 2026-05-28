import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type LearningAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type NextLearningStepProps = {
  title: string;
  description: string;
  actions: LearningAction[];
};

export function NextLearningStep({
  title,
  description,
  actions,
}: NextLearningStepProps) {
  return (
    <Card className="border-[#4edea3]/20 p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded border border-[#4edea3]/30 bg-[#4edea3]/10 text-[#6ffbbe]">
            <Sparkles className="h-6 w-6" />
          </span>
          <div>
            <Badge tone="green">Siguiente paso recomendado</Badge>
            <h2 className="mt-3 text-2xl font-black text-white">{title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={
                action.variant === "primary"
                  ? "inline-flex items-center justify-center gap-2 rounded bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
                  : "inline-flex items-center justify-center gap-2 rounded border border-[#4d8eff]/40 px-4 py-2 text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/10"
              }
            >
              {action.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}
