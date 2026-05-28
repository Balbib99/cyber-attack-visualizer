"use client";

import { motion } from "framer-motion";
import { Inbox, MailWarning } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

export function MessageDeliveryScene(props: SceneProps) {
  const { mode } = props;

  return (
    <SceneFrame {...props}>
      <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-[#101319] p-5">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <Inbox className="h-5 w-5 text-[#adc6ff]" />
          <span className="font-bold text-white">Bandeja de entrada</span>
        </div>
        <div className="mt-4 space-y-3">
          {["Factura mensual", "Código de acceso", "Verificación pendiente"].map(
            (subject, index) => {
              const suspicious = index === 2;

              return (
                <motion.div
                  key={subject}
                  initial={{ opacity: 0, x: suspicious ? 32 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 }}
                  className={`rounded border p-4 ${
                    suspicious
                      ? mode === "defense"
                        ? "border-[#4edea3]/45 bg-[#4edea3]/10"
                        : "border-[#ffb95f]/45 bg-[#ffb95f]/10"
                      : "border-white/10 bg-[#050505]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-bold text-white">{subject}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {suspicious
                          ? "soporte@secure-verificacion.app"
                          : "notificaciones@servicio.real"}
                      </p>
                    </div>
                    {suspicious ? (
                      <MailWarning className="h-5 w-5 text-[#ffddb8]" />
                    ) : null}
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </div>
    </SceneFrame>
  );
}
