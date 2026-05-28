import { LockKeyhole } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type RoadmapPath = {
  id: string;
  title: string;
  category: string;
  description: string;
};

export function LearningPathRoadmap({ paths }: { paths: RoadmapPath[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {paths.map((path) => (
        <Card key={path.id} className="p-5 opacity-90">
          <div className="flex items-center justify-between gap-3">
            <span className="grid h-10 w-10 place-items-center rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] text-[var(--app-text-muted)]">
              <LockKeyhole className="h-5 w-5" />
            </span>
            <Badge>Próximamente</Badge>
          </div>
          <h3 className="mt-5 text-lg font-black text-[var(--app-text-primary)]">
            {path.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
            {path.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
