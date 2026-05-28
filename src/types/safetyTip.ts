import type { RiskLevel } from "@/types/threat";

export type SafetyTipVisualType =
  | "watermarked-id"
  | "app-trust"
  | "two-factor"
  | "link-check"
  | "breach-check";

export type SafetyTipInfoCard = {
  icon: string;
  title: string;
  description: string;
};

export type RecommendedTool = {
  name: string;
  description: string;
  url?: string;
  officialLabel?: string;
  useCases: string[];
  steps: string[];
  warning?: string;
  note?: string;
};

export type SafetyTip = {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  category: string;
  importance: RiskLevel;
  summary: string;
  scenario: string;
  risk: string;
  whatToDo: string[];
  whatToAvoid: string[];
  checklist: string[];
  imageLabel: string;
  visualExample: {
    title: string;
    description: string;
    watermarkText?: string;
  };
  visualType: SafetyTipVisualType;
  infoCards: SafetyTipInfoCard[];
  recommendedTool?: RecommendedTool;
  relatedThreatIds: string[];
  relatedSimulatorIds?: string[];
  relatedChallengeIds?: string[];
};
