import { ThreatCard } from "@/components/threats/ThreatCard";
import { GuidingQuestionCard } from "@/components/education/GuidingQuestionCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { threats } from "@/data/threats";
import { ShieldAlert } from "lucide-react";

export default function ThreatExplorerPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] p-6 shadow-2xl shadow-[var(--app-shadow)] sm:p-8 lg:p-10">
        <div className="absolute right-0 top-0 h-72 w-72 bg-[#4d8eff]/10 blur-3xl" />
        <div className="relative max-w-4xl">
          <Badge tone="blue">Explorador de amenazas</Badge>
          <h1 className="mt-5 text-4xl font-black text-[var(--app-text-primary)] sm:text-6xl">
            Entiende las amenazas más comunes
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 text-[#1d4ed8] dark:text-[#adc6ff]">
            Aprende cómo funcionan y qué señales conviene reconocer antes de
            actuar.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--app-text-secondary)]">
            Esta biblioteca explica amenazas desde un enfoque educativo y
            defensivo, con contexto, dificultad y enlaces hacia simulaciones
            cuando están disponibles.
          </p>
          <p className="mt-5 text-sm font-bold text-[var(--app-text-muted)]">
            Empieza aquí si quieres entender el concepto.
          </p>
        </div>
      </section>

      <GuidingQuestionCard
        question="¿Qué es esto y por qué importa?"
        description="Entiende amenazas comunes, su impacto y las medidas que ayudan a reducir riesgos antes de pasar a la práctica."
        icon={<ShieldAlert className="h-6 w-6" />}
        variant="orange"
      />

      <section className="space-y-5">
        <div className="max-w-3xl">
          <Badge tone="green">Biblioteca</Badge>
          <h2 className="mt-4 text-3xl font-black text-[var(--app-text-primary)]">
            Conceptos que se pueden entender y prevenir
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
            Recorre cada amenaza con calma: qué es, cómo se reconoce y qué
            hábitos ayudan a reducir exposición.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {threats.map((threat) => (
            <ThreatCard key={threat.id} threat={threat} />
          ))}
        </div>
      </section>

      <Card className="p-6">
        <Badge tone="blue">Consejo</Badge>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--app-text-secondary)]">
          No necesitas memorizar todos los términos técnicos. Empieza por
          reconocer señales habituales, revisar el contexto y usar canales
          oficiales antes de compartir datos o credenciales.
        </p>
      </Card>
    </div>
  );
}
