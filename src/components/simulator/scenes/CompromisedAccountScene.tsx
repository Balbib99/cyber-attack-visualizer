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
              className="rounded-lg border border-[var(--app-danger)]/25 bg-[var(--app-danger)]/20 p-5"
            >
              <Icon className="h-7 w-7 text-[var(--app-danger)]" />
              <h3 className="mt-4 font-black text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{detail}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 rounded border border-[var(--app-warning)]/25 bg-[var(--app-warning)]/10 p-4 text-sm leading-6 text-slate-300">
          En este punto el objetivo es recuperar control: cerrar sesiones,
          cambiar contraseña, revisar métodos de recuperación y activar MFA.
        </div>
      </div>
    </SceneFrame>
  );
}
