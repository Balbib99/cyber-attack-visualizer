import Link from "next/link";
import {
  BrainCircuit,
  Lightbulb,
  MessageSquareWarning,
  PlayCircle,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const learningCards = [
  {
    title: "Simulaciones visuales",
    description:
      "Observa cómo avanza una amenaza paso a paso sin usar entornos reales ni datos sensibles.",
    cta: "Ver simulaciones",
    href: "/simulaciones",
    icon: PlayCircle,
  },
  {
    title: "Tips del día a día",
    description:
      "Aprende buenas prácticas útiles, como revisar enlaces, proteger cuentas o enviar documentos con más seguridad.",
    cta: "Ver tips",
    href: "/seguridad-diaria",
    icon: Lightbulb,
  },
  {
    title: "Escenarios prácticos",
    description:
      "Entrena decisiones reales ante emails sospechosos, archivos inesperados o webs dudosas.",
    cta: "Resolver escenarios",
    href: "/escenarios",
    icon: MessageSquareWarning,
  },
  {
    title: "Retos interactivos",
    description:
      "Comprueba lo aprendido con preguntas, decisiones y ejercicios breves.",
    cta: "Ir a retos",
    href: "/retos",
    icon: BrainCircuit,
  },
];

export function LearnByDoingCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {learningCards.map((card) => (
        <LearningCard key={card.title} {...card} />
      ))}
    </div>
  );
}

function LearningCard({
  title,
  description,
  cta,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="group p-6 transition hover:border-[#4d8eff]/45 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-2xl font-black text-[var(--app-text-primary)]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
            {description}
          </p>
          <Link
            href={href}
            className="mt-5 inline-flex rounded border border-[#4d8eff]/35 px-4 py-2 text-sm font-bold text-[#1d4ed8] transition group-hover:bg-[#4d8eff] group-hover:text-white dark:text-[#adc6ff]"
          >
            {cta}
          </Link>
        </div>
      </div>
    </Card>
  );
}
