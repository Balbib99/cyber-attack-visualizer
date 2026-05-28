"use client";

import { AlertTriangle, Activity, ShieldCheck } from "lucide-react";
import { Badge, riskTone } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SimulationStep } from "@/types/threat";

export function AttackStepPanel({ step }: { step: SimulationStep }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge tone={riskTone(step.riskLevel)}>Riesgo {step.riskLevel}</Badge>
          <h2 className="mt-4 text-2xl font-black text-white">{step.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            {step.description}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <InfoBlock
          icon={AlertTriangle}
          title="Señal de alerta"
          text={step.alertSignal}
          tone="orange"
        />
        <InfoBlock
          icon={Activity}
          title="Qué está ocurriendo"
          text={step.whatIsHappening}
          tone="blue"
        />
        <InfoBlock
          icon={ShieldCheck}
          title="Cómo defenderte"
          text={step.defenseTip}
          tone="green"
        />
      </div>
    </Card>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  text,
  tone,
}: {
  icon: typeof AlertTriangle;
  title: string;
  text: string;
  tone: "orange" | "blue" | "green";
}) {
  const styles = {
    orange: "border-[#ffb95f]/25 bg-[#ffb95f]/10 text-[#ffddb8]",
    blue: "border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#adc6ff]",
    green: "border-[#4edea3]/25 bg-[#4edea3]/10 text-[#6ffbbe]",
  };

  return (
    <div className={`rounded border p-4 ${styles[tone]}`}>
      <div className="flex gap-3">
        <Icon className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <h3 className="text-sm font-black text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
        </div>
      </div>
    </div>
  );
}
