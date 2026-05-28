import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Dumbbell,
  GraduationCap,
  PlayCircle,
  Route,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { simulators } from "@/data/simulators";

const problemCards = [
  {
    title: "Aprendizaje visual",
    description:
      "Convierte amenazas abstractas en flujos paso a paso fáciles de seguir.",
    icon: PlayCircle,
  },
  {
    title: "Casos aplicables",
    description:
      "Relaciona phishing, cuentas, documentos y enlaces con decisiones reales.",
    icon: ShieldCheck,
  },
  {
    title: "Práctica guiada",
    description:
      "Los retos permiten comprobar comprensión con feedback inmediato.",
    icon: Dumbbell,
  },
];

const features = [
  {
    title: "Simuladores visuales",
    description: "Escenarios paso a paso para Phishing y SQL Injection.",
    icon: PlayCircle,
  },
  {
    title: "Seguridad diaria",
    description: "Tips prácticos con mockups, checklists y avisos responsables.",
    icon: ShieldCheck,
  },
  {
    title: "Herramientas recomendadas",
    description: "Recursos como VirusTotal, Have I Been Pwned o INCIBE.",
    icon: Wrench,
  },
  {
    title: "Centro de retos",
    description: "Test, verdadero/falso, ordenar fases y elegir defensas.",
    icon: BrainCircuit,
  },
  {
    title: "Progreso local",
    description: "Resultados guardados en el navegador sin backend.",
    icon: CheckCircle2,
  },
  {
    title: "Rutas conectadas",
    description: "Aprende, simula, consulta tips y practica en una misma ruta.",
    icon: Route,
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "LocalStorage",
  "Diseño responsive",
  "Arquitectura por componentes",
  "Datos mock locales",
];

export default function HomePage() {
  const availableSimulators = simulators.filter(
    (simulator) => simulator.status === "available",
  );

  return (
    <div className="space-y-14">
      <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[#121212]/80 p-6 sm:p-8 xl:p-10">
        <div className="absolute right-0 top-0 h-80 w-80 bg-[#4d8eff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 bg-[#4edea3]/10 blur-3xl" />
        <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <Badge tone="blue">Proyecto FullStack</Badge>
              <Badge tone="green">Ciberseguridad</Badge>
              <Badge>Next.js</Badge>
              <Badge>Aprendizaje interactivo</Badge>
            </div>
            <h1 className="mt-6 text-5xl font-black text-white sm:text-7xl">
              AttackFlow Lab
            </h1>
            <p className="mt-5 max-w-3xl text-2xl font-semibold leading-9 text-[#adc6ff]">
              Aprende ciberseguridad de forma visual, práctica e interactiva.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Una plataforma educativa que combina simulaciones visuales de
              ataques, consejos prácticos de seguridad diaria y retos
              interactivos para reforzar conocimientos.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/panel"
                className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
              >
                Entrar al panel
              </Link>
              <Link
                href="/simulaciones"
                className="rounded border border-[#4d8eff]/40 px-5 py-3 text-center text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/10"
              >
                Ver simulaciones
              </Link>
            </div>
          </div>

          <Card className="relative overflow-hidden border-[#4d8eff]/25 p-5">
            <div className="absolute inset-0 lab-grid opacity-30" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Learning OS
                </span>
                <Sparkles className="h-5 w-5 text-[#6ffbbe]" />
              </div>
              {[
                "Amenaza detectada",
                "Simulación visual",
                "Tip aplicado",
                "Reto completado",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded border border-white/10 bg-[#050505]/80 p-3"
                >
                  <span className="grid h-8 w-8 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 font-mono text-xs font-black text-[#adc6ff]">
                    {index + 1}
                  </span>
                  <span className="text-sm font-bold text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Problema"
          title="Qué problema resuelve"
          description="Muchas plataformas explican ciberseguridad de forma demasiado teórica. AttackFlow Lab la convierte en una experiencia visual, aplicable y medible."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {problemCards.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <LearningModeCard
          title="Aprende"
          description="Explora amenazas, simulaciones visuales, tips prácticos, herramientas recomendadas y buenas prácticas."
          icon={BookOpen}
          href="/simulaciones"
          cta="Explorar contenido"
          tone="blue"
          items={[
            "Amenazas comunes",
            "Simulaciones paso a paso",
            "Consejos de seguridad diaria",
            "Herramientas reales",
          ]}
        />
        <LearningModeCard
          title="Practica"
          description="Pon a prueba lo aprendido con retos cortos, feedback inmediato y progreso guardado en local."
          icon={Dumbbell}
          href="/retos"
          cta="Ir al Centro de retos"
          tone="green"
          items={[
            "Preguntas tipo test",
            "Verdadero/falso",
            "Ordenar pasos",
            "Elegir la mejor defensa",
          ]}
        />
      </section>

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Producto"
          title="Funcionalidades destacadas"
          description="La app conecta contenido, simulación y práctica sin depender de backend ni datos reales."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionIntro
          eyebrow="Disponibles"
          title="Simuladores completos"
          description="Dos escenarios visuales ya implementados para aprender mirando primero y practicando después."
        />
        <div className="grid gap-6 xl:grid-cols-2">
          {availableSimulators.map((simulator) => (
            <SimulatorPreview key={simulator.id} simulator={simulator} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_24rem]">
        <Card className="p-6">
          <Badge tone="blue">Tecnologías utilizadas</Badge>
          <h2 className="mt-4 text-3xl font-black text-white">
            Frontend moderno preparado para crecer
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Esta versión está orientada a portfolio: usa datos mock/locales, no
            incluye backend ni autenticación, y deja una arquitectura clara para
            futuras integraciones.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-bold text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </Card>

        <Card className="border-[#4edea3]/20 p-6">
          <GraduationCap className="h-10 w-10 text-[#6ffbbe]" />
          <h2 className="mt-4 text-2xl font-black text-white">
            Pensado para portfolio
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Demuestra desarrollo frontend moderno, diseño de producto, UX
            educativa, estructuración de contenido, componentes reutilizables y
            comprensión práctica de ciberseguridad.
          </p>
        </Card>
      </section>

      <Card className="relative overflow-hidden p-6 sm:p-8">
        <div className="absolute right-0 top-0 h-56 w-56 bg-[#4d8eff]/10 blur-3xl" />
        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <Badge tone="green">Explora AttackFlow Lab</Badge>
            <h2 className="mt-4 text-3xl font-black text-white">
              Entra en la experiencia de aprendizaje
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Empieza por el panel, prueba un reto o revisa consejos de
              seguridad diaria aplicables.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/panel"
              className="rounded bg-[#4d8eff] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
            >
              Entrar al panel
            </Link>
            <Link
              href="/retos"
              className="rounded border border-[#4edea3]/35 px-5 py-3 text-center text-sm font-bold text-[#6ffbbe] transition hover:bg-[#4edea3]/10"
            >
              Ver retos
            </Link>
            <Link
              href="/seguridad-diaria"
              className="rounded border border-white/10 px-5 py-3 text-center text-sm font-bold text-slate-200 transition hover:bg-white/[0.06]"
            >
              Ver consejos
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <Badge tone="blue">{eyebrow}</Badge>
      <h2 className="mt-4 text-3xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="p-5">
      <span className="grid h-11 w-11 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
    </Card>
  );
}

function LearningModeCard({
  title,
  description,
  icon: Icon,
  href,
  cta,
  tone,
  items,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  cta: string;
  tone: "blue" | "green";
  items: string[];
}) {
  const colors =
    tone === "green"
      ? "border-[#4edea3]/25 bg-[#4edea3]/10 text-[#6ffbbe]"
      : "border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]";

  return (
    <Card className="p-6">
      <span className={`grid h-12 w-12 place-items-center rounded border ${colors}`}>
        <Icon className="h-6 w-6" />
      </span>
      <h2 className="mt-5 text-3xl font-black text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded border border-white/10 bg-[#050505]/80 px-3 py-2 text-sm text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
      <Link
        href={href}
        className="mt-6 inline-flex rounded bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
      >
        {cta}
      </Link>
    </Card>
  );
}

function SimulatorPreview({
  simulator,
}: {
  simulator: (typeof simulators)[number];
}) {
  const previewImage = simulator.previewImage ?? simulator.steps[0]?.image;
  const previewAlt =
    simulator.previewImageAlt ?? simulator.steps[0]?.imageAlt ?? simulator.title;

  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#050505]">
        {previewImage ? (
          <Image
            src={previewImage}
            alt={previewAlt}
            fill
            sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
          />
        ) : null}
        <div className="absolute left-4 top-4">
          <Badge tone="green">Disponible</Badge>
        </div>
      </div>
      <div className="p-5">
        <Badge tone="blue">{simulator.category}</Badge>
        <h3 className="mt-4 text-2xl font-black text-white">
          {simulator.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {simulator.description}
        </p>
        <Link
          href={`/simulador/${simulator.id}`}
          className="mt-5 inline-flex rounded bg-[#4d8eff] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a]"
        >
          Abrir simulador
        </Link>
      </div>
    </Card>
  );
}
