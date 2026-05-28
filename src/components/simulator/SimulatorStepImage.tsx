"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SimulatorStep } from "@/types/simulator";

type SimulatorStepImageProps = {
  step: SimulatorStep;
  priority?: boolean;
};

export function SimulatorStepImage({
  step,
  priority = false,
}: SimulatorStepImageProps) {
  return (
    <motion.figure
      key={step.id}
      initial={{ opacity: 0, y: 14, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="overflow-hidden rounded-lg border border-white/10 bg-[#090b10] p-3 shadow-2xl shadow-black/25"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/10 bg-[#050505]">
        <Image
          src={step.image}
          alt={step.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw"
          className="object-contain"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#06101f]/10" />
      </div>
      <figcaption className="px-1 pt-3 text-sm font-semibold leading-6 text-slate-300">
        {step.title}
      </figcaption>
    </motion.figure>
  );
}
