import { describe, expect, it } from "vitest";
import { safetyTips } from "./safetyTips";
import { threats } from "./threats";

describe("safetyTips data", () => {
  it("has unique ids", () => {
    const ids = safetyTips.map((tip) => tip.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(safetyTips)("$id references at least one real threat", (tip) => {
    expect(tip.relatedThreatIds.length).toBeGreaterThan(0);
    for (const threatId of tip.relatedThreatIds) {
      expect(threats.some((threat) => threat.id === threatId)).toBe(true);
    }
  });

  it.each(safetyTips)("$id has actionable guidance", (tip) => {
    expect(tip.whatToDo.length).toBeGreaterThan(0);
    expect(tip.whatToAvoid.length).toBeGreaterThan(0);
    expect(tip.checklist.length).toBeGreaterThan(0);
  });

  it("every threat marked as high-risk-or-above has at least one related safety tip", () => {
    const highRisk = threats.filter(
      (threat) => threat.riskLevel === "Alto" || threat.riskLevel === "Crítico",
    );
    for (const threat of highRisk) {
      expect(threat.relatedSafetyTipIds.length).toBeGreaterThan(0);
    }
  });
});
