"use client";

import { useId, useState } from "react";
import { ChevronDown, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";

export function ProjectProblemExpandableText() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  return (
    <div className="mt-5 text-lg leading-8 text-[var(--app-text-secondary)]">
      <p>
        Aunque existan antivirus, cortafuegos o sistemas de detección, el factor
        humano sigue siendo uno de los principales puntos de entrada para los
        ciberdelincuentes. La falta de conocimientos, los malos hábitos
        digitales, la confianza excesiva o un simple descuido pueden convertir a
        cualquier persona en una víctima potencial.
      </p>

      <div
        id={contentId}
        className={isExpanded ? "mt-4 space-y-4" : "hidden"}
      >
        <p>
          A partir de esta reflexión nació AttackFlow Lab: una plataforma
          pensada para acercar la ciberseguridad a cualquier persona,
          independientemente de su nivel técnico, mediante una experiencia
          visual, interactiva y fácil de comprender.
        </p>
        <p>
          El objetivo no es solo explicar riesgos, sino fomentar una cultura de
          prevención basada en conocimiento, práctica y pequeñas decisiones
          cotidianas.
        </p>
        <Card className="border-[#4d8eff]/25 bg-[var(--app-surface-elevated)] p-5">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#4d8eff]/30 bg-[#4d8eff]/10 text-[#1d4ed8] dark:text-[#adc6ff]">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <p className="text-lg font-black leading-8 text-[var(--app-text-primary)]">
              Porque, en muchos casos, la mejor defensa no es una herramienta
              más avanzada, sino una persona mejor informada.
            </p>
          </div>
        </Card>
      </div>

      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={() => setIsExpanded((current) => !current)}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-[#1d4ed8] underline-offset-4 transition hover:text-[#4d8eff] hover:underline focus:outline-none focus:ring-2 focus:ring-[#4d8eff]/35 dark:text-[#adc6ff] dark:hover:text-[#dbe7ff]"
      >
        {isExpanded ? "Ver menos" : "Ver más"}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
