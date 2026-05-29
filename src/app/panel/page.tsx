import Link from "next/link";
import { BookOpen, FlaskConical, LayoutDashboard, ShieldCheck, Trophy } from "lucide-react";
import { DailySafetyCard } from "@/components/dashboard/DailySafetyCard";
import { KnowledgeProgressCard } from "@/components/dashboard/KnowledgeProgressCard";
import { GuidingQuestionCard } from "@/components/education/GuidingQuestionCard";
import { PanelLearningPathCard } from "@/components/learning-paths/PanelLearningPathCard";
import { PanelScenarioCard } from "@/components/scenarios/PanelScenarioCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { safetyTips } from "@/data/safetyTips";

export const metadata = {
  title: "Panel | AttackFlow Lab",
  description:
    "Panel de aprendizaje de AttackFlow Lab con rutas, escenarios, consejos y progreso.",
};

const quickLinks = [
  {
    title: "Simulaciones",
    description: "Observa amenazas paso a paso.",
    href: "/simulaciones",
    icon: FlaskConical,
  },
  {
    title: "Retos",
    description: "Comprueba lo aprendido.",
    href: "/retos",
    icon: Trophy,
  },
  {
    title: "Seguridad diaria",
    description: "Aplica consejos prácticos.",
    href: "/seguridad-diaria",
    icon: ShieldCheck,
  },
];

export default function PanelPage() {
  const featuredTip = safetyTips[0];

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_22rem]">
        <Card className="relative overflow-hidden p-6 sm:p-8">
          <div className="absolute right-0 top-0 h-56 w-56 bg-[#4d8eff]/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <Badge tone="blue">Panel central</Badge>
            <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-5xl">
              Bienvenido a tu panel
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--app-text-secondary)]">
              Un punto de partida para continuar una ruta, resolver una decisión
              práctica o revisar un consejo sin perderte entre todas las secciones.
            </p>
          </div>
        </Card>

        <KnowledgeProgressCard />
      </section>

      <GuidingQuestionCard
        question={"\u00bfQué puedo hacer ahora?"}
        description="Encuentra la siguiente actividad recomendada y accede rápido a las secciones clave."
        icon={<LayoutDashboard className="h-6 w-6" />}
        variant="blue"
      />

      <PanelLearningPathCard />

      <section className="grid gap-6 xl:grid-cols-2">
        <PanelScenarioCard />
        <DailySafetyCard tip={featuredTip} />
      </section>

      <Card className="p-5">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
            <BookOpen className="h-5 w-5" />
          </span>
          <div>
            <Badge tone="blue">Accesos rápidos</Badge>
            <h2 className="mt-2 text-2xl font-black text-[var(--app-text-primary)]">
              Explora cuando quieras profundizar
            </h2>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4 transition hover:border-[#4d8eff]/40 hover:bg-[#4d8eff]/10"
              >
                <Icon className="h-5 w-5 text-[#1d4ed8] dark:text-[#adc6ff]" />
                <p className="mt-3 font-black text-[var(--app-text-primary)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--app-text-secondary)]">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
