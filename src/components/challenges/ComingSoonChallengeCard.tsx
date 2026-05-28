import { Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ComingSoonChallengeCardProps = {
  title: string;
  category: string;
  description: string;
};

export function ComingSoonChallengeCard({
  title,
  category,
  description,
}: ComingSoonChallengeCardProps) {
  return (
    <Card className="p-5">
      <div className="mb-5 h-24 rounded border border-white/10 bg-[#050505] lab-grid opacity-90" />
      <div className="flex flex-wrap gap-2">
        <Badge>Próximamente</Badge>
        <Badge tone="blue">{category}</Badge>
      </div>
      <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
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
