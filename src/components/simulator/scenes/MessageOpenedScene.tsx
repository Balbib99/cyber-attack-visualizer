"use client";

import { motion } from "framer-motion";
import { AlertTriangle, MousePointerClick } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

export function MessageOpenedScene(props: SceneProps) {
  const { mode } = props;

  return (
    <SceneFrame {...props}>
      <div className="mx-auto max-w-2xl rounded-lg border border-white/10 bg-[#101319] p-5">
        <div className="rounded border border-white/10 bg-[#050505] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Mensaje abierto
          </p>
          <h2 className="mt-4 text-2xl font-black text-white">
            Tu cuenta requiere verificación inmediata
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Hemos detectado actividad inusual. Verifica tu identidad antes de
            que finalice el día para evitar restricciones.
          </p>
          <motion.button
            initial={{ scale: 0.96 }}
            animate={{ scale: [0.96, 1.02, 1] }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={`mt-6 inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-black ${
              mode === "defense"
                ? "border border-[#4edea3]/40 bg-[#4edea3]/10 text-[#6ffbbe]"
                : "bg-[#4d8eff] text-white"
            }`}
          >
            <MousePointerClick className="h-4 w-4" />
            Verificar ahora
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded border border-[#ffb95f]/30 bg-[#ffb95f]/10 p-4"
        >
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-[#ffddb8]" />
            <p className="text-sm leading-6 text-slate-300">
              La urgencia es una señal: intenta que actúes antes de verificar.
            </p>
          </div>
        </motion.div>
      </div>
    </SceneFrame>
  );
}
