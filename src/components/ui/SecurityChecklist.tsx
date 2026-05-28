import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

type SecurityChecklistProps = {
  title: string;
  items: string[];
};

export function SecurityChecklist({ title, items }: SecurityChecklistProps) {
  return (
    <Card className="p-5">
      <h3 className="text-xl font-black text-white">{title}</h3>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded border border-[#4edea3]/20 bg-[#4edea3]/10 p-4"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#6ffbbe]" />
            <span className="text-sm leading-6 text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
