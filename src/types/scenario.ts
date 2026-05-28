export type ScenarioRiskLevel = "bajo" | "medio" | "alto" | "crítico";

export type ScenarioCategory =
  | "phishing"
  | "identidad"
  | "malware"
  | "privacidad"
  | "seguridad-web";

export type ScenarioDecisionOption = {
  id: string;
  label: string;
  description?: string;
  isBestChoice: boolean;
  feedbackTitle: string;
  feedback: string;
  consequence: string;
};

export type ScenarioRelatedContent = {
  label: string;
  href: string;
  type: "amenaza" | "simulación" | "tip" | "reto" | "ruta";
};

export type CyberScenario = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ScenarioCategory;
  riskLevel: ScenarioRiskLevel;
  estimatedTime: string;
  status: "available" | "coming-soon";
  situation: string;
  question: string;
  visualType: "email" | "id-check" | "file-attachment" | "fake-login";
  warningSigns: string[];
  options: ScenarioDecisionOption[];
  recommendedAction: string;
  defensiveTip: string;
  relatedThreatId?: string;
  relatedSimulatorId?: string;
  relatedChallengeId?: string;
  relatedTipIds?: string[];
  relatedPathId?: string;
  relatedContent: ScenarioRelatedContent[];
};
