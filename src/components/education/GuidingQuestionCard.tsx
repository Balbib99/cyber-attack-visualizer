import { HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type GuidingQuestionCardProps = {
  question: string;
  description: string;
  label?: string;
  icon?: React.ReactNode;
  variant?: "blue" | "green" | "orange" | "purple" | "neutral";
};

const variantStyles = {
  blue: "border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]",
  green:
    "border-[color:var(--app-success)]/25 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]",
  orange:
    "border-[color:var(--app-warning)]/25 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]",
  purple:
    "border-violet-400/25 bg-violet-400/10 text-violet-700 dark:text-violet-200",
  neutral:
    "border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-[var(--app-text-secondary)]",
};

export function GuidingQuestionCard({
  question,
  description,
  label = "Pregunta guía",
  icon,
  variant = "blue",
}: GuidingQuestionCardProps) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span
          className={cn(
            "grid h-12 w-12 shrink-0 place-items-center rounded-full border",
            variantStyles[variant],
          )}
        >
          {icon ?? <HelpCircle className="h-6 w-6" />}
        </span>
        <div>
          <Badge tone={variant === "purple" ? "blue" : variant === "neutral" ? "neutral" : variant}>
            {label}
          </Badge>
          <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
            {question}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--app-text-secondary)] sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
