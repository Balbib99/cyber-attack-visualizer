import { Lock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ComingSoonSimulatorCardProps = {
  title: string;
  category: string;
  description: string;
  learningReason: string;
};

export function ComingSoonSimulatorCard({
  title,
  category,
  description,
  learningReason,
}: ComingSoonSimulatorCardProps) {
  return (
    <Card className="overflow-hidden p-5 opacity-95">
      <div className="relative mb-5 h-28 overflow-hidden rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)]">
        <div className="absolute inset-0 lab-grid opacity-10" />
        <div className="absolute left-4 top-4">
          <Badge>Próximamente</Badge>
        </div>
        <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-[#1d4ed8]/50 dark:text-[#adc6ff]/60" />
      </div>
      <Badge tone="blue">{category}</Badge>
      <h3 className="mt-4 text-xl font-black text-[var(--app-text-primary)]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
        {description}
      </p>
      <div className="mt-4 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-3">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
          Motivo de aprendizaje
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
          {learningReason}
        </p>
      </div>
      <button
        type="button"
        disabled
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded border border-[var(--app-border)] px-4 py-2 text-sm font-bold text-[var(--app-text-muted)]"
      >
        <Lock className="h-4 w-4" />
        En preparación
      </button>
    </Card>
  );
}
