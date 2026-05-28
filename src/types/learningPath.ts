export type LearningPathLevel = "inicial" | "intermedio" | "avanzado";

export type LearningPathStepType =
  | "threat"
  | "simulator"
  | "tip"
  | "challenge";

export type LearningPathStep = {
  id: string;
  type: LearningPathStepType;
  title: string;
  description: string;
  href: string;
  estimatedTime?: string;
  required?: boolean;
};

export type LearningPath = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: LearningPathLevel;
  category: string;
  estimatedTime: string;
  status: "available" | "coming-soon";
  featured?: boolean;
  relatedThreatId?: string;
  relatedSimulatorId?: string;
  relatedChallengeId?: string;
  relatedTipIds?: string[];
  relatedScenarioIds?: string[];
  steps: LearningPathStep[];
};
