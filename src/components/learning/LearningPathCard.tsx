import Link from "next/link";
import { BookOpen, Dumbbell, Lightbulb, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type LearningPathCardProps = {
  threatName: string;
  threatPath: string;
  simulatorPath?: string;
  simulatorAvailable?: boolean;
  challengePath?: string;
  challengeAvailable?: boolean;
  tipsPath?: string;
  tipsAvailable?: boolean;
};

const steps = [
  { key: "learn", label: "Aprende", icon: BookOpen },
  { key: "simulate", label: "Simula", icon: PlayCircle },
  { key: "reinforce", label: "Refuerza", icon: Lightbulb },
  { key: "practice", label: "Practica", icon: Dumbbell },
] as const;

export function LearningPathCard({
  threatName,
  threatPath,
  simulatorPath,
  simulatorAvailable,
  challengePath,
  challengeAvailable,
  tipsPath = "/seguridad-diaria",
  tipsAvailable = true,
}: LearningPathCardProps) {
  const paths = {
    learn: threatPath,
    simulate: simulatorAvailable ? simulatorPath : undefined,
    reinforce: tipsAvailable ? tipsPath : undefined,
    practice: challengeAvailable ? challengePath : undefined,
  };

  return (
    <Card className="border-[var(--app-primary)]/20 p-5 sm:p-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Badge tone="blue">Ruta de aprendizaje recomendada</Badge>
          <h2 className="mt-4 text-2xl font-black text-white">
            De concepto a práctica: {threatName}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Sigue una secuencia breve para entender la amenaza, verla en acción
            y practicar decisiones defensivas.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const href = paths[step.key];
          const available = Boolean(href);

          return (
            <div
              key={step.key}
              className="rounded border border-white/10 bg-[var(--app-surface-elevated)]/80 p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded border border-[var(--app-primary)]/30 bg-[var(--app-primary)]/10 text-[var(--app-primary-dark)]">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-4 font-black text-white">{step.label}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                {available ? "Disponible" : "Próximamente"}
              </p>
              {href ? (
                <Link
                  href={href}
                  className="mt-4 inline-flex rounded border border-[var(--app-primary)]/40 px-3 py-2 text-sm font-bold text-[var(--app-primary-dark)] transition hover:bg-[var(--app-primary)]/10"
                >
                  Abrir
                </Link>
              ) : (
                <span className="mt-4 inline-flex rounded border border-white/10 px-3 py-2 text-sm font-bold text-slate-500">
                  En preparación
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
