"use client";

import { Activity, AlertTriangle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SimulatorRiskLevel, SimulatorStep } from "@/types/simulator";

type SimulatorStepInfoProps = {
  step: SimulatorStep;
};

const riskTone: Record<SimulatorRiskLevel, "green" | "orange" | "red"> = {
  bajo: "green",
  medio: "orange",
  alto: "orange",
  crítico: "red",
};

export function SimulatorStepInfo({ step }: SimulatorStepInfoProps) {
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={riskTone[step.riskLevel]}>
          Riesgo {step.riskLevel}
        </Badge>
        <Badge tone="blue">Paso {step.order}</Badge>
      </div>

      <h2 className="mt-4 text-2xl font-black text-white">{step.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        {step.shortDescription}
      </p>

      <div className="mt-5 grid gap-3">
        <InfoTile
          icon={Activity}
          title="Qué está ocurriendo"
          text={step.whatIsHappening}
          tone="blue"
        />
        <InfoTile
          icon={AlertTriangle}
          title="Señal de alerta"
          text={step.alertSignal}
          tone="orange"
        />
        <InfoTile
          icon={ShieldCheck}
          title="Cómo defenderte"
          text={step.defenseTip}
          tone="green"
        />
      </div>
    </Card>
  );
}

function InfoTile({
  icon: Icon,
  title,
  text,
  tone,
}: {
  icon: typeof Activity;
  title: string;
  text: string;
  tone: "blue" | "orange" | "green";
}) {
  const styles = {
    blue: "border-[#4d8eff]/25 bg-[#4d8eff]/10 text-[#adc6ff]",
    orange: "border-[#ffb95f]/25 bg-[#ffb95f]/10 text-[#ffddb8]",
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
