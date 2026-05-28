"use client";

import { motion } from "framer-motion";
import { KeyRound, Send } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

export function CredentialSubmitScene(props: SceneProps) {
  const { mode } = props;

  return (
    <SceneFrame {...props}>
      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-[1fr_12rem_1fr] md:items-center">
        <div className="rounded-lg border border-white/10 bg-[#101319] p-5">
          <KeyRound className="h-7 w-7 text-[#adc6ff]" />
          <h3 className="mt-4 text-xl font-black text-white">Formulario falso</h3>
          <div className="mt-5 space-y-3">
            <Field label="usuario@ejemplo.com" />
            <Field label="••••••••••" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0.3, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.9 }}
          className={`grid h-20 place-items-center rounded border ${
            mode === "defense"
              ? "border-[#4edea3]/40 bg-[#4edea3]/10 text-[#6ffbbe]"
              : "border-[#ffb95f]/40 bg-[#ffb95f]/10 text-[#ffddb8]"
          }`}
        >
          <Send className="h-7 w-7" />
        </motion.div>
        <div className="rounded-lg border border-[#ff6b5f]/25 bg-[#93000a]/20 p-5">
          <p className="font-mono text-xs text-[#ffb4ab]">POST /capture</p>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Los datos salen del navegador hacia un destino controlado por el
            atacante.
          </p>
        </div>
      </div>
    </SceneFrame>
  );
}

function Field({ label }: { label: string }) {
  return (
    <div className="rounded border border-white/10 bg-[#050505] px-3 py-3 font-mono text-sm text-slate-300">
      {label}
    </div>
  );
}
