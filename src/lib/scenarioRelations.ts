import { scenarios } from "@/data/scenarios";
import type { CyberScenario } from "@/types/scenario";

function isScenario(scenario: CyberScenario | undefined): scenario is CyberScenario {
  return Boolean(scenario);
}

export function getScenariosByIds(ids: string[] = []) {
  return ids
    .map((id) => scenarios.find((scenario) => scenario.id === id))
    .filter(isScenario);
}

export function getScenariosForPath(pathId: string) {
  return scenarios.filter((scenario) => scenario.relatedPathId === pathId);
}

export function getScenariosForSimulator(simulatorId: string) {
  return scenarios.filter((scenario) => scenario.relatedSimulatorId === simulatorId);
}

export function getScenariosForTip(tipId: string) {
  return scenarios.filter((scenario) => scenario.relatedTipIds?.includes(tipId));
}

export function getScenariosForChallenge(challengeId: string) {
  return scenarios.filter((scenario) => scenario.relatedChallengeId === challengeId);
}
