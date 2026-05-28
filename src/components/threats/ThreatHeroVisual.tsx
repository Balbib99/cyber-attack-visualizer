"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

type ThreatHeroVisualProps = {
  imageSrc: string;
  alt: string;
  label: string;
  caption: string;
};

export function ThreatHeroVisual({
  imageSrc,
  alt,
  label,
  caption,
}: ThreatHeroVisualProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group w-full text-left"
        aria-label="Ampliar imagen educativa de phishing"
      >
        <figure className="overflow-hidden rounded-lg border border-white/10 bg-[#090b10] p-3 shadow-2xl shadow-black/30 transition duration-300 hover:border-[#4d8eff]/45 hover:shadow-[0_0_36px_rgba(77,142,255,0.16)]">
          <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/10 bg-[#050505]">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              priority
              sizes="(min-width: 1280px) 420px, (min-width: 1024px) 38vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.035]"
            />
            <div className="absolute inset-0 bg-[#06101f]/20" />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <Badge tone="blue">{label}</Badge>
            </div>
            <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded border border-white/15 bg-black/50 text-[#adc6ff] backdrop-blur">
              <Maximize2 className="h-4 w-4" />
            </span>
          </div>
          <figcaption className="px-1 pt-3 text-sm leading-6 text-slate-300">
            {caption}
          </figcaption>
        </figure>
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-5xl rounded-lg border border-white/10 bg-[#090b10] p-4 shadow-2xl shadow-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <h2 id={titleId} className="text-sm font-bold text-white">
                {caption}
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-9 w-9 place-items-center rounded border border-white/10 text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                aria-label="Cerrar imagen ampliada"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded border border-white/10 bg-[#050505]">
              <Image
                src={imageSrc}
                alt={alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
