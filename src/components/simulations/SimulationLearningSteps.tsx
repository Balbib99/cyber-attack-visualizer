import { AlertTriangle, Eye, ShieldCheck, Telescope } from "lucide-react";
import { Card } from "@/components/ui/Card";

const learningSteps = [
  {
    title: "Observa el paso visual",
    description: "Empieza por la escena, no por un bloque largo de teoría.",
    icon: Eye,
  },
  {
    title: "Entiende qué ocurre",
    description: "Identifica la acción principal y su impacto en la cadena.",
    icon: Telescope,
  },
  {
    title: "Detecta la señal",
    description: "Reconoce la pista que debería hacerte pausar.",
    icon: AlertTriangle,
  },
  {
    title: "Aprende la defensa",
    description: "Conecta el riesgo con una acción concreta de protección.",
    icon: ShieldCheck,
  },
];

export function SimulationLearningSteps() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {learningSteps.map((step, index) => {
        const Icon = step.icon;

        return (
          <Card key={step.title} className="p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="grid h-10 w-10 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
                <Icon className="h-5 w-5" />
              </span>
            </div>
            <h3 className="mt-5 font-black text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {step.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
