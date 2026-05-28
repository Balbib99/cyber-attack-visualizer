import type { SimulatorMode } from "@/components/simulator/AttackModeToggle";
import type { SimulationStep } from "@/types/threat";

export type SceneProps = {
  step: SimulationStep;
  mode: SimulatorMode;
};
