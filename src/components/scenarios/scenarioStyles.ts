import type { ScenarioRiskLevel } from "@/types/scenario";

export const scenarioRiskTone: Record<
  ScenarioRiskLevel,
  "green" | "orange" | "red"
> = {
  bajo: "green",
  medio: "orange",
  alto: "orange",
  crítico: "red",
};

export const scenarioCategoryLabel = {
  phishing: "Phishing",
  identidad: "Identidad",
  malware: "Malware",
  privacidad: "Privacidad",
  "seguridad-web": "Seguridad web",
};
