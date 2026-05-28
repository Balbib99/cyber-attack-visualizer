"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { SimulationStep } from "@/types/threat";

export function DefenseInsightCard({ step }: { step: SimulationStep }) {
  return (
    <Card className="border-[#4edea3]/25 p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded border border-[#4edea3]/40 bg-[#4edea3]/10 text-[#6ffbbe]">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6ffbbe]">
            Defensa relacionada
          </p>
          <h3 className="text-lg font-black text-white">Corta la cadena aquí</h3>
        </div>
      </div>
      <motion.p
        key={step.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-4 leading-7 text-slate-300"
      >
        {step.mitigation}
      </motion.p>
    </Card>
  );
}
