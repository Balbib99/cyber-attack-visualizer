import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { CyberScenario } from "@/types/scenario";
import { RelatedScenarioCard } from "./RelatedScenarioCard";

export function ScenarioRecommendations({
  title = "Escenarios relacionados",
  description = "Practica una decisión real conectada con este contenido.",
  scenarios,
}: {
  title?: string;
  description?: string;
  scenarios: CyberScenario[];
}) {
  if (scenarios.length === 0) {
    return null;
  }

  return (
    <Card className="p-5 sm:p-6">
      <Badge tone="orange">Decide</Badge>
      <h2 className="mt-4 text-2xl font-black text-[var(--app-text-primary)]">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--app-text-secondary)]">
        {description}
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {scenarios.map((scenario) => (
          <RelatedScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>
    </Card>
  );
}
