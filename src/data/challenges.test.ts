import { describe, expect, it } from "vitest";
import { challenges, upcomingChallenges } from "./challenges";
import { threats } from "./threats";
import { simulators } from "./simulators";

describe("challenges data", () => {
  it("has unique ids across available and upcoming challenges", () => {
    const ids = [...challenges, ...upcomingChallenges].map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(challenges)("$id resolves its related threat and simulator", (challenge) => {
    if (challenge.relatedThreatId) {
      expect(threats.some((t) => t.id === challenge.relatedThreatId)).toBe(true);
    }
    expect(
      simulators.some((simulator) => simulator.id === challenge.relatedSimulatorId),
    ).toBe(true);
  });

  it.each(challenges)("$id has at least one question", (challenge) => {
    expect(challenge.questions.length).toBeGreaterThan(0);
  });

  for (const challenge of challenges) {
    describe(`${challenge.id} questions`, () => {
      it.each(challenge.questions)("$id is internally consistent", (question) => {
        switch (question.type) {
          case "multiple-choice":
          case "best-defense": {
            expect(question.options?.length ?? 0).toBeGreaterThan(0);
            expect(question.correctOptionId).toBeDefined();
            expect(
              question.options?.some((option) => option.id === question.correctOptionId),
            ).toBe(true);
            break;
          }
          case "true-false": {
            expect(typeof question.correctBoolean).toBe("boolean");
            break;
          }
          case "order-steps": {
            expect(question.items?.length ?? 0).toBeGreaterThan(1);
            const itemIds = (question.items ?? []).map((item) => item.id);
            expect(question.correctOrder).toBeDefined();
            expect([...(question.correctOrder ?? [])].sort()).toEqual(
              [...itemIds].sort(),
            );
            break;
          }
          default:
            throw new Error(`Unhandled question type: ${question.type}`);
        }

        expect(question.explanation.length).toBeGreaterThan(0);
        expect(question.defenseTip.length).toBeGreaterThan(0);
      });
    });
  }
});
