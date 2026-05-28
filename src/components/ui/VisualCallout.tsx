import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type VisualCalloutProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: "blue" | "green" | "orange" | "red";
};

const toneStyles = {
  blue: "border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]",
  green: "border-[#4edea3]/30 bg-[#4edea3]/10 text-[#6ffbbe]",
  orange: "border-[#ffb95f]/30 bg-[#ffb95f]/10 text-[#ffddb8]",
  red: "border-[#ff6b5f]/30 bg-[#93000a]/20 text-[#ffb4ab]",
};

export function VisualCallout({
  title,
  description,
  icon: Icon,
  tone = "blue",
}: VisualCalloutProps) {
  return (
    <div className={cn("rounded-lg border p-5", toneStyles[tone])}>
      <div className="flex gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded border border-current/30 bg-black/20">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-black text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
