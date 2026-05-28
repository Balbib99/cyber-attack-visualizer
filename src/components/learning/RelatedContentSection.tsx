import Link from "next/link";
import { BookOpen, Dumbbell, Lightbulb, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type RelatedItemType = "threat" | "simulator" | "challenge" | "tip";

type RelatedContentItem = {
  type: RelatedItemType;
  title: string;
  href?: string;
  status?: "available" | "coming-soon";
};

type RelatedContentSectionProps = {
  title?: string;
  description?: string;
  items: RelatedContentItem[];
};

const icons = {
  threat: BookOpen,
  simulator: PlayCircle,
  challenge: Dumbbell,
  tip: Lightbulb,
};

const labels = {
  threat: "Amenaza",
  simulator: "Simulación",
  challenge: "Reto",
  tip: "Consejo",
};

export function RelatedContentSection({
  title = "Relacionado con este consejo",
  description = "Continúa el recorrido con contenido conectado a este tema.",
  items,
}: RelatedContentSectionProps) {
  const visibleItems = items.filter(Boolean);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <Card className="p-5 sm:p-6">
      <Badge tone="blue">Contenido conectado</Badge>
      <h2 className="mt-4 text-2xl font-black text-white">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
        {description}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {visibleItems.map((item) => {
          const Icon = icons[item.type];
          const status = item.status ?? (item.href ? "available" : "coming-soon");
          const content = (
            <div className="h-full rounded border border-white/10 bg-[#050505]/80 p-4 transition hover:border-[#4d8eff]/35">
              <span className="grid h-10 w-10 place-items-center rounded border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#adc6ff]">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                {labels[item.type]}
              </p>
              <h3 className="mt-2 font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm font-bold text-[#adc6ff]">
                {status === "available" ? "Abrir contenido" : "Próximamente"}
              </p>
            </div>
          );

          return item.href ? (
            <Link key={`${item.type}-${item.title}`} href={item.href}>
              {content}
            </Link>
          ) : (
            <div key={`${item.type}-${item.title}`}>{content}</div>
          );
        })}
      </div>
    </Card>
  );
}
