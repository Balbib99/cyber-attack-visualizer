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
      <div className="relative mb-5 h-28 overflow-hidden rounded border border-white/10 bg-[#050505]">
        <div className="absolute inset-0 lab-grid opacity-20" />
        <div className="absolute inset-0 bg-[#4d8eff]/5" />
        <div className="absolute left-4 top-4">
          <Badge>Próximamente</Badge>
        </div>
        <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-[#adc6ff]/60" />
      </div>
      <Badge tone="blue">{category}</Badge>
      <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-4 rounded border border-white/10 bg-white/[0.03] p-3">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Motivo de aprendizaje
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {learningReason}
        </p>
      </div>
      <button
        type="button"
        disabled
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded border border-white/10 px-4 py-2 text-sm font-bold text-slate-500"
      >
        <Lock className="h-4 w-4" />
        En preparación
      </button>
    </Card>
  );
}
