import { CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

type DoDontCardProps = {
  type: "do" | "dont";
  title: string;
  items: string[];
};

export function DoDontCard({ type, title, items }: DoDontCardProps) {
  const isDo = type === "do";
  const Icon = isDo ? CheckCircle2 : XCircle;

  return (
    <Card className={`p-5 ${isDo ? "border-[var(--app-success)]/25" : "border-[var(--app-danger)]/25"}`}>
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded border ${
            isDo
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
                isDo ? "bg-[var(--app-success)]" : "bg-[var(--app-danger)]"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
