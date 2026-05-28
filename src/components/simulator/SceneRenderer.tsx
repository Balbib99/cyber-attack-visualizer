"use client";

import { AnimatePresence } from "framer-motion";
import { CompromisedAccountScene } from "@/components/simulator/scenes/CompromisedAccountScene";
import { CredentialCaptureScene } from "@/components/simulator/scenes/CredentialCaptureScene";
import { CredentialSubmitScene } from "@/components/simulator/scenes/CredentialSubmitScene";
import { DefenseScene } from "@/components/simulator/scenes/DefenseScene";
import { FakeLoginScene } from "@/components/simulator/scenes/FakeLoginScene";
import { MessageCreationScene } from "@/components/simulator/scenes/MessageCreationScene";
import { MessageDeliveryScene } from "@/components/simulator/scenes/MessageDeliveryScene";
import { MessageOpenedScene } from "@/components/simulator/scenes/MessageOpenedScene";
import { SuspiciousLinkScene } from "@/components/simulator/scenes/SuspiciousLinkScene";
import type { SimulatorMode } from "@/components/simulator/AttackModeToggle";
import type { SimulationStep } from "@/types/threat";

type SceneRendererProps = {
  step: SimulationStep;
  mode: SimulatorMode;
};

export function SceneRenderer({ step, mode }: SceneRendererProps) {
  const sceneProps = { step, mode };

  return (
    <AnimatePresence mode="wait">
      <div key={`${step.id}-${mode}`}>
        {step.sceneType === "message-creation" ? (
          <MessageCreationScene {...sceneProps} />
        ) : null}
        {step.sceneType === "message-delivery" ? (
          <MessageDeliveryScene {...sceneProps} />
        ) : null}
        {step.sceneType === "message-opened" ? (
          <MessageOpenedScene {...sceneProps} />
        ) : null}
        {step.sceneType === "suspicious-link" ? (
          <SuspiciousLinkScene {...sceneProps} />
        ) : null}
        {step.sceneType === "fake-login" ? (
          <FakeLoginScene {...sceneProps} />
        ) : null}
        {step.sceneType === "credential-submit" ? (
          <CredentialSubmitScene {...sceneProps} />
        ) : null}
        {step.sceneType === "credential-capture" ? (
          <CredentialCaptureScene {...sceneProps} />
        ) : null}
        {step.sceneType === "compromised-account" ? (
          <CompromisedAccountScene {...sceneProps} />
        ) : null}
        {step.sceneType === "defense" ? <DefenseScene {...sceneProps} /> : null}
      </div>
    </AnimatePresence>
  );
}
