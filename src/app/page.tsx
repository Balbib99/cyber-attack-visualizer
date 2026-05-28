import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { DigitalHabitCards } from "@/components/home/DigitalHabitCards";
import { FeaturedTipSection } from "@/components/home/FeaturedTipSection";
import { FriendlyCyberHeroVisual } from "@/components/home/FriendlyCyberHeroVisual";
import { GuidedRoutesPreview } from "@/components/home/GuidedRoutesPreview";
import { HomeSectionHeader } from "@/components/home/HomeSectionHeader";
import { LearnByDoingCards } from "@/components/home/LearnByDoingCards";
import { SafeLearningCallout } from "@/components/home/SafeLearningCallout";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { learningPaths } from "@/data/learningPaths";

export default function HomePage() {
  const featuredPaths = learningPaths.filter((path) => path.featured).slice(0, 2);

  return (
    <div className="space-y-20 pb-6">
      <section className="relative overflow-hidden rounded-lg border border-[var(--app-border)] bg-[linear-gradient(135deg,var(--app-surface),var(--app-surface-elevated))] px-6 py-10 shadow-2xl shadow-[var(--app-shadow)] sm:px-8 lg:px-10">
        <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 bg-[#4edea3]/10 blur-3xl" />

        <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)] xl:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <Badge tone="blue">Ciberseguridad cercana</Badge>
              <Badge tone="green">Aprendizaje visual</Badge>
              <Badge>Proyecto portfolio</Badge>
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-[var(--app-text-primary)] sm:text-7xl">
              Ciberseguridad para todos, paso a paso.
            </h1>

            <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-[#1d4ed8] dark:text-[#adc6ff]">
              Aprende a reconocer amenazas digitales, proteger tus datos y
              tomar mejores decisiones online con simulaciones visuales, tips
              prácticos y retos interactivos.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--app-text-secondary)]">
              AttackFlow Lab convierte conceptos de ciberseguridad en
              experiencias claras, visuales y aplicables al día a día.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/rutas"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#4d8eff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
              >
                Empezar recorrido
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/simulaciones"
                className="inline-flex items-center justify-center rounded border border-[#4d8eff]/40 px-5 py-3 text-sm font-bold text-[#1d4ed8] transition hover:bg-[#4d8eff]/10 dark:text-[#adc6ff]"
              >
                Ver simulaciones
              </Link>
              <Link
                href="/panel"
                className="inline-flex items-center justify-center px-2 py-3 text-sm font-bold text-[var(--app-text-secondary)] transition hover:text-[var(--app-text-primary)]"
              >
                Entrar al panel
              </Link>
            </div>
          </div>

          <FriendlyCyberHeroVisual />
        </div>
      </section>

      <section className="space-y-6">
        <HomeSectionHeader
          eyebrow="Vida digital"
          title="Un hábito para la vida digital"
          description="Cada día recibimos enlaces, formularios, archivos y solicitudes de datos. AttackFlow Lab te ayuda a interpretar esas situaciones con calma y actuar con más seguridad."
          align="center"
        />
        <DigitalHabitCards />
      </section>

      <section className="space-y-6">
        <HomeSectionHeader
          eyebrow="Aprende haciendo"
          title="De mirar una amenaza a tomar una mejor decisión"
          description="La experiencia combina simulación, consejos prácticos, escenarios y retos breves para aprender sin saturarte."
        />
        <LearnByDoingCards />
      </section>

      <FeaturedTipSection />

      <section className="space-y-6">
        <HomeSectionHeader
          eyebrow="Rutas guiadas"
          title="Empieza por un recorrido claro"
          description="Empieza por una ruta guiada y avanza desde la explicación hasta la práctica."
        />
        <GuidedRoutesPreview paths={featuredPaths} />
      </section>

      <SafeLearningCallout />

      <Card className="relative overflow-hidden p-6 sm:p-8">
        <div className="absolute right-0 top-0 h-56 w-56 bg-[#4d8eff]/10 blur-3xl" />
        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-[#1d4ed8] dark:text-[#adc6ff]">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-[0.16em]">
                Empieza con calma
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--app-text-primary)] sm:text-4xl">
              Empieza con una decisión sencilla: aprender con calma.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--app-text-secondary)]">
              Explora una ruta, revisa un tip práctico o prueba un escenario
              interactivo.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rutas"
              className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
            >
              Ver rutas
            </Link>
            <Link
              href="/escenarios"
              className="rounded border border-[color:var(--app-warning)]/40 px-5 py-3 text-center text-sm font-bold text-[#b45309] transition hover:bg-[var(--app-warning-soft)] dark:text-[#ffddb8]"
            >
              Resolver escenario
            </Link>
            <Link
              href="/panel"
              className="rounded border border-[var(--app-border)] px-5 py-3 text-center text-sm font-bold text-[var(--app-text-secondary)] transition hover:bg-[var(--app-surface-elevated)] hover:text-[var(--app-text-primary)]"
            >
              Entrar al panel
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
