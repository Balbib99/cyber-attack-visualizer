export type SimulatorRiskLevel = "bajo" | "medio" | "alto" | "crítico";

export type SimulatorStep = {
  id: string;
  order: number;
  title: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  whatIsHappening: string;
  alertSignal: string;
  defenseTip: string;
  riskLevel: SimulatorRiskLevel;
};

export type AttackSimulator = {
  id: string;
  threatId: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  riskLevel: SimulatorRiskLevel;
  estimatedTime: string;
  status: "available" | "coming-soon";
  relatedChallengeId?: string;
  relatedTipIds?: string[];
  previewImage?: string;
  previewImageAlt?: string;
  steps: SimulatorStep[];
};
