import Link from "next/link";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { ChallengeHowItWorks } from "@/components/challenges/ChallengeHowItWorks";
import { ChallengesHero } from "@/components/challenges/ChallengesHero";
import { ComingSoonChallengeCard } from "@/components/challenges/ComingSoonChallengeCard";
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

      <ChallengeHowItWorks />

      <section className="space-y-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Practica"
            title="Retos disponibles"
            description="Ejercicios breves conectados con las simulaciones visuales para pasar de observar a decidir."
          />
          <Link href="/simulaciones" className="text-sm font-bold text-[#adc6ff]">
            Repasar simulaciones
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {availableChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeader
          eyebrow="Roadmap"
          title="Próximos retos"
          description="Nuevos escenarios para practicar identificación de señales, orden de fases y elección de defensas."
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
