import { Card } from "@/components/ui/Card";

type StatCardProps = {
  label: string;
  value: string;
  detail: string;
  tone?: "blue" | "green" | "orange" | "red";
};

const toneStyles = {
  blue: "text-[#adc6ff]",
  green: "text-[#6ffbbe]",
  orange: "text-[#ffddb8]",
  red: "text-[#ffb4ab]",
};

export function StatCard({ label, value, detail, tone = "blue" }: StatCardProps) {
  return (
    <Card className="p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className={`mt-4 text-3xl font-black ${toneStyles[tone]}`}>{value}</p>
      <p className="mt-2 text-sm text-slate-400">{detail}</p>
    </Card>
  );
}
