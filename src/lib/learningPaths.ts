import { challenges } from "@/data/challenges";
import { safetyTips } from "@/data/safetyTips";
import { simulators } from "@/data/simulators";
import { getThreatById } from "@/data/threats";

export function getLearningContextByThreatId(threatId: string) {
  const threat = getThreatById(threatId);
  const simulator = simulators.find(
    (item) => item.id === threat?.relatedSimulatorId || item.threatId === threatId,
  );
  const challenge = challenges.find(
    (item) => item.id === threat?.relatedChallengeId || item.relatedThreatId === threatId,
  );
  const tipIds = threat?.relatedTipIds ?? threat?.relatedSafetyTipIds ?? [];
  const tips = tipIds
    .map((tipId) => safetyTips.find((tip) => tip.id === tipId))
    .filter(Boolean);

  return {
    threat,
    simulator,
    challenge,
    tips,
  };
}

export function getLearningContextBySimulatorId(simulatorId: string) {
  const simulator = simulators.find((item) => item.id === simulatorId);
  return getLearningContextByThreatId(simulator?.threatId ?? simulatorId);
}

export function getLearningContextByChallengeId(challengeId: string) {
  const challenge = challenges.find((item) => item.id === challengeId);
  return getLearningContextByThreatId(challenge?.relatedThreatId ?? challengeId);
}

export function getLearningContextByTipId(tipId: string) {
  const tip = safetyTips.find((item) => item.id === tipId);
  const primaryThreatId = tip?.relatedThreatIds[0];

  return {
    tip,
    ...getLearningContextByThreatId(primaryThreatId ?? ""),
  };
}
