import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ScenarioRelatedContent } from "@/types/scenario";

export function RelatedScenarioLinks({
  items,
}: {
  items: ScenarioRelatedContent[];
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={`${item.type}-${item.href}`}
          href={item.href}
          className="flex items-center justify-between gap-3 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] px-4 py-3 text-sm font-bold text-[var(--app-text-secondary)] transition hover:border-[#4d8eff]/40 hover:text-[var(--app-text-primary)]"
        >
          <span>{item.label}</span>
          <ArrowRight className="h-4 w-4 shrink-0" />
        </Link>
      ))}
    </div>
  );
}
