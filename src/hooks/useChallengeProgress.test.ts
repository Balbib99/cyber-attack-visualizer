import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useChallengeProgress } from "./useChallengeProgress";

describe("useChallengeProgress", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("starts with no progress and loads asynchronously", async () => {
    const { result } = renderHook(() => useChallengeProgress());

    expect(result.current.isLoaded).toBe(false);

    await waitFor(() => expect(result.current.isLoaded).toBe(true));
    expect(result.current.progress).toEqual([]);
  });

  it("saves a result and computes the percentage", async () => {
    const { result } = renderHook(() => useChallengeProgress());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    act(() => {
      result.current.saveResult("phishing", 3, 4);
    });

    const progress = result.current.getProgress("phishing");
    expect(progress).toMatchObject({
      challengeId: "phishing",
      completed: true,
      score: 3,
      totalQuestions: 4,
      percentage: 75,
      bestScore: 3,
    });
  });

  it("persists the result to localStorage across hook instances", async () => {
    const first = renderHook(() => useChallengeProgress());
    await waitFor(() => expect(first.result.current.isLoaded).toBe(true));

    act(() => {
      first.result.current.saveResult("sql-injection", 4, 4);
    });

    const second = renderHook(() => useChallengeProgress());
    await waitFor(() => expect(second.result.current.isLoaded).toBe(true));

    expect(second.result.current.getProgress("sql-injection")).toMatchObject({
      score: 4,
      totalQuestions: 4,
      percentage: 100,
    });
  });

  it("keeps the best score when a challenge is retried with a lower score", async () => {
    const { result } = renderHook(() => useChallengeProgress());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    act(() => {
      result.current.saveResult("phishing", 4, 4);
    });
    act(() => {
      result.current.saveResult("phishing", 1, 4);
    });

    expect(result.current.getProgress("phishing")).toMatchObject({
      score: 1,
      bestScore: 4,
    });
  });

  it("removes a challenge's progress on reset", async () => {
    const { result } = renderHook(() => useChallengeProgress());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    act(() => {
      result.current.saveResult("phishing", 2, 4);
    });
    expect(result.current.getProgress("phishing")).toBeDefined();

    act(() => {
      result.current.resetChallenge("phishing");
    });
    expect(result.current.getProgress("phishing")).toBeUndefined();
  });

  it("computes global progress across multiple challenges", async () => {
    const { result } = renderHook(() => useChallengeProgress());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    act(() => {
      result.current.saveResult("phishing", 4, 4);
    });
    act(() => {
      result.current.saveResult("sql-injection", 2, 4);
    });

    expect(result.current.globalProgress).toEqual({
      completedCount: 2,
      averagePercentage: 75,
    });
  });

  it("recovers gracefully from corrupted localStorage data", async () => {
    window.localStorage.setItem("attackflow-challenge-progress", "{not json");

    const { result } = renderHook(() => useChallengeProgress());
    await waitFor(() => expect(result.current.isLoaded).toBe(true));

    expect(result.current.progress).toEqual([]);
  });
});
