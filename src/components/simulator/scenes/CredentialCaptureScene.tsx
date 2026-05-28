"use client";

import { motion } from "framer-motion";
import { DatabaseZap, KeyRound } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

export function CredentialCaptureScene(props: SceneProps) {
  return (
    <SceneFrame {...props}>
      <div className="mx-auto max-w-3xl rounded-lg border border-[#ff6b5f]/25 bg-[#101319] p-5">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <DatabaseZap className="h-5 w-5 text-[#ffb4ab]" />
          <span className="font-mono text-xs text-[#ffb4ab]">
            panel_atacante/capturas
          </span>
        </div>
        <div className="mt-5 space-y-3">
          {["usuario@ejemplo.com", "password_hash: ********", "timestamp: ahora"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.16 }}
                className="flex items-center gap-3 rounded border border-[#ff6b5f]/20 bg-[#93000a]/20 p-4"
              >
                <KeyRound className="h-4 w-4 text-[#ffb4ab]" />
                <span className="font-mono text-sm text-slate-200">{item}</span>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </SceneFrame>
  );
}
