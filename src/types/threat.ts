export type RiskLevel = "Bajo" | "Medio" | "Alto" | "Crítico";

export type ThreatDifficulty = "Inicial" | "Intermedio" | "Avanzado";

export type ThreatFlowStep = {
  title: string;
  description: string;
  icon: string;
};

export type SimulationSceneType =
  | "message-creation"
  | "message-delivery"
  | "message-opened"
  | "suspicious-link"
  | "fake-login"
  | "credential-submit"
  | "credential-capture"
  | "compromised-account"
  | "defense";

export type SimulationStep = {
  id: string;
  nodeLabel: string;
  icon: string;
  title: string;
  description: string;
  riskLevel: RiskLevel;
  alertSignal: string;
  whatIsHappening: string;
  defenseTip: string;
  sceneType: SimulationSceneType;
  optionalVisualLabels?: string[];
  technicalNote: string;
  mitigation: string;
};

export type Threat = {
  id: string;
  name: string;
  icon: string;
  category: string;
  riskLevel: RiskLevel;
  difficulty: ThreatDifficulty;
  shortDescription: string;
  overview: string;
  howItWorks: string;
  flowSteps: ThreatFlowStep[];
  impactSummary: string;
  warningSigns: string[];
  mitigations: string[];
  relatedSafetyTipIds: string[];
  relatedSimulatorId?: string;
  relatedChallengeId?: string;
  relatedTipIds?: string[];
  simulatorAvailable: boolean;
  heroImage?: string;
  heroImageAlt?: string;
  simulationSteps?: SimulationStep[];
};
