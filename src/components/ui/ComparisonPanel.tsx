import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/Card";

type ComparisonPanelProps = {
  correctTitle?: string;
  incorrectTitle?: string;
  correctItems: string[];
  incorrectItems: string[];
};

export function ComparisonPanel({
  correctTitle = "Correcto",
  incorrectTitle = "Incorrecto",
  correctItems,
  incorrectItems,
}: ComparisonPanelProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card className="border-[#4edea3]/25 p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded bg-[#4edea3]/10 text-[#6ffbbe]">
            <Check className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-black text-white">{correctTitle}</h3>
        </div>
        <ul className="mt-5 space-y-3">
          {correctItems.map((item) => (
            <li key={item} className="text-sm leading-6 text-slate-300">
              {item}
            </li>
          ))}
        </ul>
      </Card>
      <Card className="border-[#ff6b5f]/25 p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded bg-[#93000a]/20 text-[#ffb4ab]">
            <X className="h-5 w-5" />
          </span>
          <h3 className="text-lg font-black text-white">{incorrectTitle}</h3>
        </div>
        <ul className="mt-5 space-y-3">
          {incorrectItems.map((item) => (
            <li key={item} className="text-sm leading-6 text-slate-300">
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
