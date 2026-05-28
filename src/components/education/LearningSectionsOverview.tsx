import Link from "next/link";
import {
  BookOpen,
  BrainCircuit,
  LayoutDashboard,
  Lightbulb,
  Map,
  MessageSquareWarning,
  PlayCircle,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

const sections = [
  {
    title: "Rutas",
    question: "¿Por dónde empiezo?",
    description: "Recorridos guiados que ordenan el aprendizaje.",
    cta: "Ver rutas",
    href: "/rutas",
    icon: Map,
  },
  {
    title: "Amenazas",
    question: "¿Qué es esto y por qué importa?",
    description: "Explicaciones claras para entender riesgos comunes.",
    cta: "Explorar amenazas",
    href: "/amenazas",
    icon: ShieldAlert,
  },
  {
    title: "Simulaciones",
    question: "¿Cómo ocurre paso a paso?",
    description: "Flujos visuales para ver cómo avanza una amenaza.",
    cta: "Ver simulaciones",
    href: "/simulaciones",
    icon: PlayCircle,
  },
  {
    title: "Seguridad diaria",
    question: "¿Qué puedo hacer en mi día a día?",
    description: "Consejos prácticos y herramientas útiles.",
    cta: "Ver consejos",
    href: "/seguridad-diaria",
    icon: Lightbulb,
  },
  {
    title: "Escenarios",
    question: "¿Qué decisión tomaría?",
    description: "Casos cotidianos para practicar decisiones reales.",
    cta: "Resolver escenarios",
    href: "/escenarios",
    icon: MessageSquareWarning,
  },
  {
    title: "Retos",
    question: "¿He entendido lo aprendido?",
    description: "Ejercicios breves para comprobar conocimientos.",
    cta: "Ir a retos",
    href: "/retos",
    icon: BrainCircuit,
  },
  {
    title: "Panel",
    question: "¿Qué puedo hacer ahora?",
    description: "Resumen y accesos rápidos para continuar.",
    cta: "Entrar al panel",
    href: "/panel",
    icon: LayoutDashboard,
  },
];

export function LearningSectionsOverview() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {sections.map((section) => (
        <SectionOverviewCard key={section.href} {...section} />
      ))}
      <Card className="hidden p-5 xl:block">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--app-success)]/30 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]">
          <BookOpen className="h-5 w-5" />
        </span>
        <h3 className="mt-5 text-xl font-black text-[var(--app-text-primary)]">
          Un flujo conectado
        </h3>
        <p className="mt-3 text-sm leading-6 text-[var(--app-text-secondary)]">
          Aprende, observa, decide y comprueba sin salir del mismo recorrido.
        </p>
      </Card>
    </div>
  );
}

function SectionOverviewCard({
  title,
  question,
  description,
  cta,
  href,
  icon: Icon,
}: {
  title: string;
  question: string;
  description: string;
  cta: string;
  href: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="group p-5 transition hover:border-[#4d8eff]/40 hover:bg-[var(--app-surface-elevated)]">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
            {title}
          </p>
          <h3 className="mt-2 text-lg font-black text-[var(--app-text-primary)]">
            {question}
          </h3>
          <p className="mt-2 text-sm leading-6 text-[var(--app-text-secondary)]">
            {description}
          </p>
          <Link
            href={href}
            className="mt-4 inline-flex text-sm font-bold text-[#1d4ed8] transition group-hover:text-[#4d8eff] dark:text-[#adc6ff]"
          >
            {cta}
          </Link>
        </div>
      </div>
    </Card>
  );
}
