import {
  CalendarDays,
  CheckCircle2,
  Eraser,
  Eye,
  GlobeLock,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const steps = [
  { text: "Verifica que la app o web es legítima.", icon: GlobeLock },
  { text: "Añade una marca de agua visible.", icon: Eye },
  { text: "Especifica el uso concreto del documento.", icon: ShieldCheck },
  { text: "Incluye una fecha.", icon: CalendarDays },
  { text: "Comprueba que no tapas datos necesarios.", icon: CheckCircle2 },
  { text: "Envía el documento solo por el canal oficial.", icon: Send },
  { text: "Elimina copias temporales si ya no las necesitas.", icon: Eraser },
];

export function SafetySteps() {
  return (
    <Card className="p-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-7">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.text}
              className="rounded border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-[#adc6ff]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-200">
                {step.text}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
