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
    <Card className={`p-5 ${isDo ? "border-[#4edea3]/25" : "border-[#ff6b5f]/25"}`}>
      <div className="flex items-center gap-3">
        <span
          className={`grid h-10 w-10 place-items-center rounded border ${
            isDo
              ? "border-[#4edea3]/40 bg-[#4edea3]/10 text-[#6ffbbe]"
              : "border-[#ff6b5f]/40 bg-[#93000a]/20 text-[#ffb4ab]"
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
                isDo ? "bg-[#4edea3]" : "bg-[#ff6b5f]"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
