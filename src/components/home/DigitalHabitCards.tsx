import { Link2, LogIn, Send } from "lucide-react";
import { Card } from "@/components/ui/Card";

const habits = [
  {
    title: "Antes de hacer clic",
    description: "Respira, revisa el remitente y confirma el destino del enlace.",
    icon: Link2,
  },
  {
    title: "Antes de compartir datos",
    description: "Comprueba el contexto y limita el uso de documentos sensibles.",
    icon: Send,
  },
  {
    title: "Antes de iniciar sesión",
    description: "Verifica URL, dominio y señales de confianza reales.",
    icon: LogIn,
  },
];

export function DigitalHabitCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {habits.map((habit) => {
        const Icon = habit.icon;

        return (
          <Card key={habit.title} className="p-5">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl font-black text-[var(--app-text-primary)]">
              {habit.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
              {habit.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
