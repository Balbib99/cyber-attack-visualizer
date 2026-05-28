"use client";

import { motion } from "framer-motion";
import { MailWarning, PenLine, Search } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

export function MessageCreationScene(props: SceneProps) {
  const { mode } = props;

  return (
    <SceneFrame {...props}>
      <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
        <div className="rounded-lg border border-white/10 bg-[#101319] p-5">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <PenLine className="h-5 w-5 text-[#adc6ff]" />
            <span className="font-mono text-xs text-slate-400">
              editor_mensaje.phish
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {[
              ["Remitente", "soporte@secure-verificacion.app"],
              ["Asunto", "Verificación pendiente de tu cuenta"],
              ["Tono", "Urgente + autoridad + consecuencia"],
            ].map(([label, value], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.12 }}
                className="rounded border border-white/10 bg-[#050505] p-4"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
                <p className="mt-2 text-sm text-slate-200">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <VisualChip icon={Search} label="Objetivo elegido" />
          <VisualChip icon={MailWarning} label="Marca imitada" />
          <div
            className={`rounded border p-4 ${
              mode === "defense"
                ? "border-[#4edea3]/35 bg-[#4edea3]/10"
                : "border-[#ffb95f]/30 bg-[#ffb95f]/10"
            }`}
          >
            <p className="text-sm font-bold text-white">
              {mode === "defense" ? "Defensa" : "Riesgo"}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {mode === "defense"
                ? "La presión y la urgencia son señales para pausar y verificar."
                : "El mensaje busca parecer normal antes de que revises detalles."}
            </p>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}

function VisualChip({
  icon: Icon,
  label,
}: {
  icon: typeof Search;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded border border-[#4d8eff]/25 bg-[#4d8eff]/10 p-4"
    >
      <Icon className="h-5 w-5 text-[#adc6ff]" />
      <p className="mt-3 text-sm font-bold text-white">{label}</p>
    </motion.div>
  );
}
