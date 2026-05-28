"use client";

import { motion } from "framer-motion";
import { AlertTriangle, MonitorUp, ShieldAlert } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

const alerts = [
  {
    title: "Nuevo inicio de sesión",
    detail: "Ubicación desconocida",
    icon: MonitorUp,
  },
  {
    title: "Cambio de recuperación",
    detail: "Teléfono añadido",
    icon: ShieldAlert,
  },
  {
    title: "Actividad sospechosa",
    detail: "Mensajes enviados",
    icon: AlertTriangle,
  },
];

export function CompromisedAccountScene(props: SceneProps) {
  return (
    <SceneFrame {...props}>
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-5 md:grid-cols-3">
          {alerts.map(({ title, detail, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.14 }}
              className="rounded-lg border border-[#ff6b5f]/25 bg-[#93000a]/20 p-5"
            >
              <Icon className="h-7 w-7 text-[#ffb4ab]" />
              <h3 className="mt-4 font-black text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 rounded border border-[#ffb95f]/25 bg-[#ffb95f]/10 p-4 text-sm leading-6 text-slate-300">
          En este punto el objetivo es recuperar control: cerrar sesiones,
          cambiar contraseña, revisar métodos de recuperación y activar MFA.
        </div>
      </div>
    </SceneFrame>
  );
}
