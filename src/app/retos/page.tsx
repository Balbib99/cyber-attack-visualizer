import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { ChallengeHowItWorks } from "@/components/challenges/ChallengeHowItWorks";
import { ChallengesHero } from "@/components/challenges/ChallengesHero";
import { ComingSoonChallengeCard } from "@/components/challenges/ComingSoonChallengeCard";
import { GuidingQuestionCard } from "@/components/education/GuidingQuestionCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { challenges, upcomingChallenges } from "@/data/challenges";

export const metadata = {
  title: "Centro de retos | AttackFlow Lab",
  description:
    "Retos interactivos de ciberseguridad con feedback inmediato y progreso local.",
};

export default function ChallengesPage() {
  const availableChallenges = challenges.filter(
    (challenge) => challenge.status === "available",
  );
  const totalQuestions = availableChallenges.reduce(
    (total, challenge) => total + challenge.questions.length,
    0,
  );

  return (
    <div className="space-y-10">
      <ChallengesHero
        availableCount={availableChallenges.length}
        totalQuestions={totalQuestions}
      />

      <GuidingQuestionCard
        question={"\u00bfHe entendido lo aprendido?"}
        description="Comprueba tus conocimientos con ejercicios breves, feedback inmediato y retos relacionados con lo que has visto."
        icon={<BrainCircuit className="h-6 w-6" />}
        variant="purple"
      />

      <ChallengeHowItWorks />

      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Practica"
            title="Retos disponibles"
            description="Ejercicios breves conectados con las simulaciones visuales para pasar de observar a comprobar."
          />
          <Link
            href="/simulaciones"
            className="text-sm font-bold text-[#1d4ed8] transition hover:text-[#4d8eff] dark:text-[#adc6ff]"
          >
            Repasar simulaciones
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {availableChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </section>

      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge tone="orange">Decisiones reales</Badge>
            <h2 className="mt-3 text-2xl font-black text-[var(--app-text-primary)]">
              También puedes practicar con escenarios cotidianos
            </h2>
            <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
              Los retos comprueban conocimiento; los escenarios entrenan qué
              decisión tomar ante una situación concreta.
            </p>
          </div>
          <Link
            href="/escenarios"
            className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#1d4ed8] transition hover:bg-[#4d8eff]/10 dark:text-[#adc6ff]"
          >
            Ver escenarios
          </Link>
        </div>
      </Card>

      <section className="space-y-5">
        <SectionHeader
          eyebrow="Roadmap"
          title="Próximos retos"
          description="Nuevos ejercicios para practicar identificación de señales, orden de fases y elección de defensas."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {upcomingChallenges.map((challenge) => (
            <ComingSoonChallengeCard
              key={challenge.id}
              title={challenge.title}
              category={challenge.category}
              description={challenge.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
