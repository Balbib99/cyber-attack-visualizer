import { CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

const correctItems = [
  "La marca de agua indica el uso concreto.",
  "Incluye el nombre de la app o finalidad.",
  "Incluye fecha.",
  "No tapa datos necesarios para la verificación.",
  "Es visible y difícil de eliminar sin manipular la imagen.",
];

const incorrectItems = [
  "Enviar el documento sin marca de agua.",
  "Usar una marca demasiado pequeña.",
  "Tapar datos obligatorios.",
  "Usar un texto genérico como “copia”.",
  "Reutilizar la misma imagen para varias plataformas.",
];

export function WatermarkComparison() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <ComparisonCard
        title="Bien aplicado"
        items={correctItems}
        type="good"
      />
      <ComparisonCard title="Evita esto" items={incorrectItems} type="bad" />
    </div>
  );
}

function ComparisonCard({
  title,
  items,
  type,
}: {
  title: string;
  items: string[];
  type: "good" | "bad";
}) {
  const isGood = type === "good";
  const Icon = isGood ? CheckCircle2 : XCircle;

  return (
    <Card className={`p-5 ${isGood ? "border-[var(--app-success)]/25" : "border-[var(--app-danger)]/25"}`}>
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded border ${
            isGood
              ? "border-[var(--app-success)]/40 bg-[var(--app-success)]/10 text-[var(--app-success)]"
              : "border-[var(--app-danger)]/40 bg-[var(--app-danger)]/20 text-[var(--app-danger)]"
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-black text-white">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span
              className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                isGood ? "bg-[var(--app-success)]" : "bg-[var(--app-danger)]"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
