"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Link2, ShieldCheck, Smartphone } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

const defenses = [
  {
    title: "Verificar URL",
    detail: "Entrar desde el dominio oficial.",
    icon: Link2,
  },
  {
    title: "MFA activo",
    detail: "Un segundo factor limita el daño.",
    icon: Smartphone,
  },
  {
    title: "Reportar",
    detail: "Ayuda a cortar la campaña.",
    icon: BadgeCheck,
  },
];

export function DefenseScene(props: SceneProps) {
  return (
    <SceneFrame {...props} mode="defense">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-5 md:grid-cols-3">
          {defenses.map(({ title, detail, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.12 }}
              className="rounded-lg border border-[#4edea3]/25 bg-[#4edea3]/10 p-5"
            >
              <Icon className="h-7 w-7 text-[#6ffbbe]" />
              <h3 className="mt-4 font-black text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded border border-[#4d8eff]/25 bg-[#4d8eff]/10 p-5"
        >
          <div className="flex gap-3">
            <ShieldCheck className="h-6 w-6 text-[#adc6ff]" />
            <p className="leading-7 text-slate-300">
              La defensa funciona mejor como cadena: detectar señales, evitar
              introducir datos, usar MFA y reportar el intento.
            </p>
          </div>
        </motion.div>
      </div>
    </SceneFrame>
  );
}
