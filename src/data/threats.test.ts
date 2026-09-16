import { describe, expect, it } from "vitest";
import { threats } from "./threats";
import { challenges } from "./challenges";
import { simulators } from "./simulators";
import { safetyTips } from "./safetyTips";

const riskLevels = ["Bajo", "Medio", "Alto", "Crítico"];
const difficulties = ["Inicial", "Intermedio", "Avanzado"];

describe("threats data", () => {
  it("has unique ids", () => {
    const ids = threats.map((threat) => threat.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(threats)(
    "$id has the required non-empty content fields",
    (threat) => {
      expect(threat.name.length).toBeGreaterThan(0);
      expect(threat.category.length).toBeGreaterThan(0);
      expect(threat.shortDescription.length).toBeGreaterThan(0);
      expect(threat.overview.length).toBeGreaterThan(0);
      expect(threat.howItWorks.length).toBeGreaterThan(0);
      expect(threat.impactSummary.length).toBeGreaterThan(0);
      expect(riskLevels).toContain(threat.riskLevel);
      expect(difficulties).toContain(threat.difficulty);
      expect(threat.flowSteps.length).toBeGreaterThan(0);
      expect(threat.warningSigns.length).toBeGreaterThan(0);
      expect(threat.mitigations.length).toBeGreaterThan(0);
    },
  );

  it.each(threats)(
    "$id only references safety tips that actually exist",
    (threat) => {
      const tipIds = new Set(safetyTips.map((tip) => tip.id));
      for (const tipId of threat.relatedSafetyTipIds) {
        expect(tipIds.has(tipId)).toBe(true);
      }
    },
  );

  it.each(threats)(
    "$id's related simulator/challenge ids resolve when set",
    (threat) => {
      if (threat.relatedSimulatorId) {
        expect(
          simulators.some((simulator) => simulator.id === threat.relatedSimulatorId),
        ).toBe(true);
      }
      if (threat.relatedChallengeId) {
        expect(
          challenges.some((challenge) => challenge.id === threat.relatedChallengeId),
        ).toBe(true);
      }
    },
  );

  it("marks simulatorAvailable only when a simulator actually exists for it", () => {
    for (const threat of threats) {
      if (threat.simulatorAvailable) {
        expect(threat.relatedSimulatorId).toBeDefined();
        expect(
          simulators.some((simulator) => simulator.id === threat.relatedSimulatorId),
        ).toBe(true);
      }
    }
  });
});
