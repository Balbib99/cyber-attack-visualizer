export type ChallengeDifficulty = "básico" | "intermedio" | "avanzado";

export type ChallengeQuestionType =
  | "multiple-choice"
  | "true-false"
  | "order-steps"
  | "best-defense";

export type ChallengeOption = {
  id: string;
  text: string;
};

export type ChallengeQuestion = {
  id: string;
  type: ChallengeQuestionType;
  question: string;
  scenario?: string;
  options?: ChallengeOption[];
  correctOptionId?: string;
  correctBoolean?: boolean;
  correctOrder?: string[];
  items?: ChallengeOption[];
  explanation: string;
  defenseTip: string;
};

export type CyberChallenge = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  difficulty: ChallengeDifficulty;
  estimatedTime: string;
  relatedThreatId?: string;
  relatedSimulatorId: string;
  relatedSimulatorPath: string;
  relatedTipIds?: string[];
  status: "available" | "coming-soon";
  questions: ChallengeQuestion[];
};

export type ChallengeProgress = {
  challengeId: string;
  completed: boolean;
  score: number;
  totalQuestions: number;
  percentage: number;
  updatedAt: string;
  completedAt?: string;
  bestScore?: number;
};
