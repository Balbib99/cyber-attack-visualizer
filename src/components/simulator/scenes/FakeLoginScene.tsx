"use client";

import { motion } from "framer-motion";
import { GlobeLock, TriangleAlert } from "lucide-react";
import { SceneFrame } from "@/components/simulator/scenes/SceneFrame";
import type { SceneProps } from "@/components/simulator/scenes/sceneTypes";

export function FakeLoginScene(props: SceneProps) {
  const { mode } = props;

  return (
    <SceneFrame {...props}>
      <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-[#101319]">
        <div className="flex items-center gap-2 border-b border-white/10 p-3">
          <span className="h-3 w-3 rounded-full bg-[#ff6b5f]" />
          <span className="h-3 w-3 rounded-full bg-[#ffb95f]" />
          <span className="h-3 w-3 rounded-full bg-[#4edea3]" />
          <div
            className={`ml-3 flex-1 rounded border px-3 py-2 font-mono text-xs ${
              mode === "defense"
                ? "border-[#4edea3]/45 bg-[#4edea3]/10 text-[#6ffbbe]"
                : "border-[#ff6b5f]/45 bg-[#93000a]/20 text-[#ffb4ab]"
            }`}
          >
            login.seguridad-verificacion.example
          </div>
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-[1fr_18rem]">
          <div className="rounded border border-white/10 bg-[#050505] p-5">
            <GlobeLock className="h-8 w-8 text-[#adc6ff]" />
            <h2 className="mt-4 text-2xl font-black text-white">
              Inicia sesión para continuar
            </h2>
            <div className="mt-5 space-y-3">
              <div className="h-10 rounded border border-white/10 bg-white/[0.04]" />
              <div className="h-10 rounded border border-white/10 bg-white/[0.04]" />
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="h-10 rounded bg-[#4d8eff]"
              />
            </div>
          </div>
          <div className="rounded border border-[#ffb95f]/25 bg-[#ffb95f]/10 p-4">
            <TriangleAlert className="h-6 w-6 text-[#ffddb8]" />
            <h3 className="mt-4 font-black text-white">Fíjate en la URL</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              La interfaz puede parecer real, pero el dominio es la pista clave.
            </p>
          </div>
        </div>
      </div>
    </SceneFrame>
  );
}
