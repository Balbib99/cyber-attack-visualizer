import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type VisualCalloutProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: "blue" | "green" | "orange" | "red";
};

const toneStyles = {
  blue: "border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary-dark)]",
  green: "border-[var(--app-success)]/30 bg-[var(--app-success)]/10 text-[var(--app-success)]",
  orange: "border-[var(--app-warning)]/30 bg-[var(--app-warning)]/10 text-[var(--app-warning)]",
  red: "border-[var(--app-danger)]/30 bg-[var(--app-danger)]/20 text-[var(--app-danger)]",
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
