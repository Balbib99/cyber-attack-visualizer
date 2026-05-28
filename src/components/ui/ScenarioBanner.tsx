import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

type ScenarioBannerProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ScenarioBanner({
  title,
  description,
  icon: Icon,
}: ScenarioBannerProps) {
  return (
    <Card className="relative overflow-hidden p-6 sm:p-7">
      <div className="absolute right-0 top-0 h-32 w-32 bg-[#4d8eff]/10 blur-3xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Situación real
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
          <p className="mt-2 leading-7 text-slate-300">{description}</p>
        </div>
      </div>
    </Card>
  );
}
