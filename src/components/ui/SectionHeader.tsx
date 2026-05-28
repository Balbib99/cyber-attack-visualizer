import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  tone?: "blue" | "green" | "orange" | "red" | "neutral";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  icon: Icon,
  tone = "blue",
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <Badge tone={tone} className="gap-2">
        {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
        {eyebrow}
      </Badge>
      <h2 className="mt-4 text-2xl font-black text-[var(--app-text-primary)] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
