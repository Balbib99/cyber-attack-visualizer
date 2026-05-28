"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

type SceneFrameProps = SceneProps & {
  children: React.ReactNode;
};

export function SceneFrame({ children, mode }: SceneFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -8 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="relative min-h-[34rem] overflow-hidden rounded-lg border border-white/10 bg-[#07090d] p-5 sm:p-6"
    >
      <div className="absolute inset-0 lab-grid opacity-20" />
      <div className="absolute right-0 top-0 h-52 w-52 bg-[#4d8eff]/10 blur-3xl" />
      {mode === "defense" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 border-2 border-[#4edea3]/35 bg-[#4edea3]/5"
        />
      ) : null}
      <div className="relative z-10">{children}</div>
      {mode === "defense" ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded border border-[#4edea3]/35 bg-[#07130f]/90 px-3 py-2 text-xs font-bold text-[#6ffbbe]"
        >
          <ShieldCheck className="h-4 w-4" />
          Defensa activa
        </motion.div>
      ) : null}
    </motion.div>
  );
}
