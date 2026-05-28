import Link from "next/link";
import { BookOpen, BrainCircuit, Lightbulb, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { LearningPath } from "@/types/learningPath";

const includes = [
  { label: "Amenaza", icon: BookOpen },
  { label: "Simulación", icon: PlayCircle },
  { label: "Tips", icon: Lightbulb },
  { label: "Reto", icon: BrainCircuit },
];

export function GuidedRoutesPreview({ paths }: { paths: LearningPath[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {paths.map((path) => (
        <Card key={path.id} className="p-6">
          <div className="flex flex-wrap gap-2">
            <Badge tone="blue">{path.category}</Badge>
            <Badge>{path.level}</Badge>
            <Badge tone="green">{path.estimatedTime}</Badge>
          </div>
          <h3 className="mt-5 text-2xl font-black text-[var(--app-text-primary)]">
            {path.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
            {path.subtitle}
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-4">
            {includes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-3 text-center"
                >
                  <Icon className="mx-auto h-4 w-4 text-[#1d4ed8] dark:text-[#adc6ff]" />
                  <p className="mt-2 text-xs font-bold text-[var(--app-text-secondary)]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
          <Link
            href={`/rutas/${path.id}`}
            className="mt-6 inline-flex rounded bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
          >
            Ver ruta
          </Link>
        </Card>
      ))}
    </div>
  );
}
