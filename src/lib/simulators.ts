import { simulators } from "@/data/simulators";
import { threats } from "@/data/threats";

export function getAvailableSimulators() {
  return simulators.filter(
    (simulator) => simulator.status === "available" && simulator.steps.length > 0,
  );
}

export function getSimulatorByThreatId(threatId: string) {
  return simulators.find((simulator) => simulator.threatId === threatId);
}

export function getComingSoonSimulators() {
  return threats
    .filter((threat) => !getSimulatorByThreatId(threat.id))
    .map((threat) => ({
      id: threat.id,
      title: threat.name,
      category: threat.category,
      description: threat.shortDescription,
      learningReason: getLearningReason(threat.id),
    }));
}

function getLearningReason(threatId: string) {
  const reasons: Record<string, string> = {
    xss: "Entender cómo una interfaz puede ejecutar contenido no confiable.",
    "brute-force": "Visualizar intentos repetidos y controles de bloqueo.",
    ransomware: "Recorrer el impacto operativo y las defensas de recuperación.",
    "man-in-the-middle": "Comprender la intercepción de tráfico y señales de red.",
  };

  return reasons[threatId] ?? "Aprender el patrón visual del ataque y sus defensas.";
}
