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
        <div className="rounded-lg border border-white/10 bg-[var(--app-surface-elevated)] p-5">
          <KeyRound className="h-7 w-7 text-[var(--app-primary-dark)]" />
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
              ? "border-[var(--app-success)]/40 bg-[var(--app-success)]/10 text-[var(--app-success)]"
              : "border-[var(--app-warning)]/40 bg-[var(--app-warning)]/10 text-[var(--app-warning)]"
          }`}
        >
          <Send className="h-7 w-7" />
        </motion.div>
        <div className="rounded-lg border border-[var(--app-danger)]/25 bg-[var(--app-danger)]/20 p-5">
          <p className="font-mono text-xs text-[var(--app-danger)]">POST /capture</p>
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
    <div className="rounded border border-white/10 bg-[var(--app-surface-elevated)] px-3 py-3 font-mono text-sm text-slate-300">
      {label}
    </div>
  );
}
