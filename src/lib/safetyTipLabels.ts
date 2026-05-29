import type { SafetyTip } from "@/types/safetyTip";

export type SafetyTipLabel =
  | "Gu\u00eda visual"
  | "Herramienta recomendada"
  | "Recurso pr\u00e1ctico";

export function getSafetyTipLabel(tip: SafetyTip): SafetyTipLabel {
  if (tip.visualType === "watermarked-id") {
    return "Gu\u00eda visual";
  }

  if (tip.recommendedTool) {
    return "Herramienta recomendada";
  }

  return "Recurso pr\u00e1ctico";
}
