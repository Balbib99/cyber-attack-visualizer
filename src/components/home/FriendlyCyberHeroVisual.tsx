import {
  CheckCircle2,
  FileText,
  GraduationCap,
  Link2,
  LockKeyhole,
  MailWarning,
  Route,
  ShieldCheck,
} from "lucide-react";

const floatingCards = [
  {
    title: "Phishing",
    text: "Reconoce urgencia falsa",
    icon: MailWarning,
    tone: "orange",
  },
  {
    title: "DNI seguro",
    text: "Marca de agua visible",
    icon: FileText,
    tone: "green",
  },
  {
    title: "URL sospechosa",
    text: "Verifica antes de hacer clic",
    icon: Link2,
    tone: "blue",
  },
  {
    title: "Reto completado",
    text: "Feedback inmediato",
    icon: CheckCircle2,
    tone: "green",
  },
] as const;

export function FriendlyCyberHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[#22d3ee]/20 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-[#4edea3]/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-lg border border-[var(--app-border)] bg-[var(--app-surface)] p-5 shadow-2xl shadow-[var(--app-shadow)]">
        <div className="absolute inset-0 lab-grid opacity-[0.08]" />
        <div className="relative">
          <div className="flex items-center justify-between gap-4 rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--app-text-muted)]">
                  Ruta visual
                </p>
                <p className="font-black text-[var(--app-text-primary)]">
                  Aprende con calma
                </p>
              </div>
            </div>
            <ShieldCheck className="h-7 w-7 text-[#047857] dark:text-[#6ffbbe]" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {floatingCards.map((item, index) => (
              <MiniLearningCard key={item.title} index={index + 1} {...item} />
            ))}
          </div>

          <div className="mt-5 rounded border border-[#4d8eff]/25 bg-[#4d8eff]/10 p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--app-surface)] text-[#1d4ed8] dark:text-[#adc6ff]">
                <Route className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-black text-[var(--app-text-primary)]">
                    Progreso guiado
                  </p>
                  <p className="font-mono text-xs font-black text-[#1d4ed8] dark:text-[#adc6ff]">
                    5 fases
                  </p>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--app-bg-muted)]">
                  <div className="h-full w-3/4 rounded-full bg-[#4d8eff]" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 rounded border border-[color:var(--app-success)]/25 bg-[var(--app-success-soft)] px-4 py-3 text-sm font-bold text-[#047857] dark:text-[var(--app-success)]">
            <LockKeyhole className="h-4 w-4" />
            Entorno educativo, sin datos reales
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniLearningCard({
  title,
  text,
  icon: Icon,
  tone,
  index,
}: {
  title: string;
  text: string;
  icon: typeof MailWarning;
  tone: "blue" | "green" | "orange";
  index: number;
}) {
  const toneClass = {
    blue: "border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]",
    green:
      "border-[color:var(--app-success)]/25 bg-[var(--app-success-soft)] text-[#047857] dark:text-[var(--app-success)]",
    orange:
      "border-[color:var(--app-warning)]/25 bg-[var(--app-warning-soft)] text-[#b45309] dark:text-[#ffddb8]",
  }[tone];

  return (
    <div className="rounded border border-[var(--app-border)] bg-[var(--app-surface-elevated)] p-4">
      <div className="flex items-start gap-3">
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded ${toneClass}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-black text-[var(--app-text-primary)]">{title}</p>
          <p className="mt-1 text-sm leading-5 text-[var(--app-text-secondary)]">
            {text}
          </p>
        </div>
        <span className="ml-auto font-mono text-xs font-black text-[var(--app-text-muted)]">
          0{index}
        </span>
      </div>
    </div>
  );
}
