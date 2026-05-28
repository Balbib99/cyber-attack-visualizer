"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ChallengeFeedback } from "@/components/challenges/ChallengeFeedback";
import { ChallengeProgressBar } from "@/components/challenges/ChallengeProgressBar";
import { ChallengeResults } from "@/components/challenges/ChallengeResults";
import { MultipleChoiceQuestion } from "@/components/challenges/MultipleChoiceQuestion";
import { OrderStepsQuestion } from "@/components/challenges/OrderStepsQuestion";
import { QuestionCard } from "@/components/challenges/QuestionCard";
import { TrueFalseQuestion } from "@/components/challenges/TrueFalseQuestion";
import { useChallengeProgress } from "@/hooks/useChallengeProgress";
import type {
  ChallengeOption,
  ChallengeQuestion,
  CyberChallenge,
} from "@/types/challenge";

type AnswerState =
  | { type: "option"; optionId?: string }
  | { type: "boolean"; value?: boolean }
  | { type: "order"; items: ChallengeOption[] };

export function ChallengeRunner({ challenge }: { challenge: CyberChallenge }) {
  const { saveResult, resetChallenge } = useChallengeProgress();
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [isFinished, setIsFinished] = useState(false);
  const activeQuestion = challenge.questions[activeIndex];
  const answer = answers[activeQuestion.id] ?? createInitialAnswer(activeQuestion);
  const isAnswered = activeQuestion.id in results;
  const lastResult = results[activeQuestion.id] ?? null;

  const canCheck = useMemo(() => hasAnswer(answer), [answer]);
  const score = useMemo(
    () => Object.values(results).filter(Boolean).length,
    [results],
  );

  const checkAnswer = () => {
    if (!canCheck || isAnswered) {
      return;
    }

    const isCorrect = evaluateAnswer(activeQuestion, answer);
    setResults((current) => ({
      ...current,
      [activeQuestion.id]: isCorrect,
    }));
  };

  const goNext = () => {
    if (activeIndex === challenge.questions.length - 1) {
      saveResult(challenge.id, score, challenge.questions.length);
      setIsFinished(true);
      return;
    }

    setActiveIndex((value) => value + 1);
  };

  const restart = () => {
    resetChallenge(challenge.id);
    setActiveIndex(0);
    setResults({});
    setAnswers({});
    setIsFinished(false);
  };

  const setCurrentAnswer = (nextAnswer: AnswerState) => {
    setAnswers((current) => ({
      ...current,
      [activeQuestion.id]: nextAnswer,
    }));
  };

  if (isFinished) {
    return (
      <ChallengeResults
        challenge={challenge}
        score={score}
        total={challenge.questions.length}
        onRestart={restart}
      />
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <Link href="/retos" className="text-sm font-bold text-[#adc6ff]">
          Volver al Centro de retos
        </Link>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge tone="green">{challenge.category}</Badge>
          <Badge>{challenge.difficulty}</Badge>
          <Badge>{challenge.estimatedTime}</Badge>
        </div>
        <h1 className="mt-5 text-4xl font-black text-white">
          {challenge.title}
        </h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-300">
          {challenge.description}
        </p>
        <div className="mt-6">
          <ChallengeProgressBar
            current={activeIndex + 1}
            total={challenge.questions.length}
          />
        </div>
      </Card>

      <Card className="border-[#4d8eff]/20 p-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#adc6ff]">
              Antes de practicar
            </p>
            <h2 className="mt-2 text-xl font-black text-white">
              Repasa la simulación visual si necesitas contexto
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              No es obligatorio, pero ver el flujo paso a paso ayuda a responder
              con más criterio.
            </p>
          </div>
          <Link
            href={challenge.relatedSimulatorPath}
            className="rounded border border-[#4d8eff]/40 px-4 py-2 text-center text-sm font-bold text-[#adc6ff] transition hover:bg-[#4d8eff]/10"
          >
            Ver simulación
          </Link>
        </div>
      </Card>

      <QuestionCard
        question={activeQuestion}
        current={activeIndex + 1}
        total={challenge.questions.length}
      >
        {activeQuestion.type === "multiple-choice" ||
        activeQuestion.type === "best-defense" ? (
          <MultipleChoiceQuestion
            options={activeQuestion.options ?? []}
            selectedOptionId={
              answer.type === "option" ? answer.optionId : undefined
            }
            disabled={isAnswered}
            onSelect={(optionId) =>
              setCurrentAnswer({ type: "option", optionId })
            }
          />
        ) : null}

        {activeQuestion.type === "true-false" ? (
          <TrueFalseQuestion
            value={answer.type === "boolean" ? answer.value : undefined}
            disabled={isAnswered}
            onSelect={(value) => setCurrentAnswer({ type: "boolean", value })}
          />
        ) : null}

        {activeQuestion.type === "order-steps" && answer.type === "order" ? (
          <OrderStepsQuestion
            items={answer.items}
            disabled={isAnswered}
            onChange={(items) => setCurrentAnswer({ type: "order", items })}
          />
        ) : null}
      </QuestionCard>

      {isAnswered && lastResult !== null ? (
        <ChallengeFeedback
          isCorrect={lastResult}
          explanation={activeQuestion.explanation}
          defenseTip={activeQuestion.defenseTip}
        />
      ) : null}

      <Card className="p-5">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={checkAnswer}
            disabled={!canCheck || isAnswered}
            className="rounded bg-[#4d8eff] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#adc6ff] hover:text-[#002e6a] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Comprobar respuesta
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!isAnswered}
            className="rounded border border-[#4edea3]/40 px-5 py-3 text-sm font-bold text-[#6ffbbe] transition hover:bg-[#4edea3]/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {activeIndex === challenge.questions.length - 1
              ? "Ver resultados"
              : "Siguiente prueba"}
          </button>
        </div>
      </Card>
    </div>
  );
}

function createInitialAnswer(question: ChallengeQuestion): AnswerState {
  if (question.type === "true-false") {
    return { type: "boolean" };
  }

  if (question.type === "order-steps") {
    return { type: "order", items: question.items ? [...question.items] : [] };
  }

  return { type: "option" };
}

function hasAnswer(answer: AnswerState) {
  if (answer.type === "option") {
    return Boolean(answer.optionId);
  }

  if (answer.type === "boolean") {
    return typeof answer.value === "boolean";
  }

  return answer.items.length > 0;
}

function evaluateAnswer(question: ChallengeQuestion, answer: AnswerState) {
  if (
    (question.type === "multiple-choice" || question.type === "best-defense") &&
    answer.type === "option"
  ) {
    return answer.optionId === question.correctOptionId;
  }

  if (question.type === "true-false" && answer.type === "boolean") {
    return answer.value === question.correctBoolean;
  }

  if (question.type === "order-steps" && answer.type === "order") {
    return (
      question.correctOrder?.join("|") ===
      answer.items.map((item) => item.id).join("|")
    );
  }

  return false;
}
