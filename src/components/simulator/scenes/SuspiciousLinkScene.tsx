"use client";

import { motion } from "framer-motion";
import { Link2, MousePointerClick } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

export function SuspiciousLinkScene(props: SceneProps) {
  const { mode } = props;

  return (
    <SceneFrame {...props}>
      <div className="mx-auto max-w-3xl space-y-5">
        <div className="rounded-lg border border-white/10 bg-[#101319] p-5">
          <div className="flex items-center gap-3">
            <Link2 className="h-5 w-5 text-[#adc6ff]" />
            <span className="font-bold text-white">Destino del enlace</span>
          </div>
          <div className="mt-5 rounded border border-white/10 bg-[#050505] p-4 font-mono text-sm text-slate-300">
            https://login.seguridad-verificacion.example/actualizar
          </div>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: mode === "defense" ? "62%" : "100%" }}
            transition={{ duration: 0.8 }}
            className={`mt-3 h-1 rounded ${
              mode === "defense" ? "bg-[#4edea3]" : "bg-[#ffb95f]"
            }`}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded border border-[#ffb95f]/25 bg-[#ffb95f]/10 p-4">
            <MousePointerClick className="h-5 w-5 text-[#ffddb8]" />
            <h3 className="mt-3 font-black text-white">Click impulsivo</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              El usuario sigue el enlace porque el mensaje parecía urgente.
            </p>
          </div>
          <div className="rounded border border-[#4edea3]/25 bg-[#4edea3]/10 p-4">
            <Link2 className="h-5 w-5 text-[#6ffbbe]" />
            <h3 className="mt-3 font-black text-white">Defensa</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Entra escribiendo la URL oficial o desde la app instalada.
            </p>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
