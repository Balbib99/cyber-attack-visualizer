import type { LearningPath } from "@/types/learningPath";

export const learningPaths: LearningPath[] = [
  {
    id: "phishing",
    title: "Phishing e ingeniería social",
    subtitle:
      "Aprende cómo los mensajes falsos intentan manipular decisiones reales.",
    description:
      "Recorre una ruta guiada para entender el phishing, observar una simulación visual, revisar consejos prácticos y completar un reto de conocimiento.",
    level: "inicial",
    category: "Ingeniería social",
    estimatedTime: "15-20 min",
    status: "available",
    featured: true,
    relatedThreatId: "phishing",
    relatedSimulatorId: "phishing",
    relatedChallengeId: "phishing",
    relatedTipIds: [
      "revisar-enlaces-sospechosos",
      "reconocer-pagina-falsa",
      "activar-2fa",
    ],
    relatedScenarioIds: ["email-urgente", "login-dudoso"],
    steps: [
      {
        id: "phishing-threat",
        type: "threat",
        title: "Entiende la amenaza",
        description:
          "Conoce qué es el phishing, cómo funciona y qué impacto puede tener.",
        href: "/amenazas/phishing",
        estimatedTime: "3 min",
        required: true,
      },
      {
        id: "phishing-simulator",
        type: "simulator",
        title: "Observa la simulación",
        description:
          "Visualiza paso a paso cómo un mensaje falso puede derivar en robo de credenciales.",
        href: "/simulador/phishing",
        estimatedTime: "5 min",
        required: true,
      },
      {
        id: "phishing-tips",
        type: "tip",
        title: "Revisa consejos relacionados",
        description:
          "Aprende a comprobar URLs, reconocer páginas falsas y proteger cuentas importantes.",
        href: "/seguridad-diaria",
        estimatedTime: "5 min",
        required: false,
      },
      {
        id: "phishing-scenario",
        type: "scenario",
        title: "Practica una decisión real",
        description:
          "Resuelve un escenario cotidiano para decidir qué hacer ante un email urgente o un login dudoso.",
        href: "/escenarios/email-urgente",
        estimatedTime: "3 min",
        required: false,
      },
      {
        id: "phishing-challenge",
        type: "challenge",
        title: "Completa el reto",
        description:
          "Pon a prueba lo aprendido con preguntas y ejercicios prácticos sobre phishing.",
        href: "/retos/phishing",
        estimatedTime: "5 min",
        required: true,
      },
    ],
  },
  {
    id: "sql-injection",
    title: "Seguridad web básica",
    subtitle:
      "Comprende cómo una entrada no controlada puede poner en riesgo una aplicación.",
    description:
      "Explora una ruta guiada sobre SQL Injection desde un enfoque visual, conceptual y defensivo, sin payloads reales ni instrucciones ofensivas.",
    level: "inicial",
    category: "Seguridad web",
    estimatedTime: "15-20 min",
    status: "available",
    featured: true,
    relatedThreatId: "sql-injection",
    relatedSimulatorId: "sql-injection",
    relatedChallengeId: "sql-injection",
    relatedTipIds: ["verificar-app-fiable"],
    relatedScenarioIds: [],
    steps: [
      {
        id: "sql-threat",
        type: "threat",
        title: "Entiende la amenaza",
        description:
          "Conoce el riesgo de mezclar entradas de usuario con consultas sin protección.",
        href: "/amenazas/sql-injection",
        estimatedTime: "3 min",
        required: true,
      },
      {
        id: "sql-simulator",
        type: "simulator",
        title: "Observa la simulación",
        description:
          "Visualiza de forma segura y abstracta cómo una entrada manipulada puede exponer datos.",
        href: "/simulador/sql-injection",
        estimatedTime: "5 min",
        required: true,
      },
      {
        id: "sql-tips",
        type: "tip",
        title: "Buenas prácticas relacionadas",
        description:
          "Refuerza conceptos como validación, consultas seguras, mínimos privilegios y control de errores.",
        href: "/seguridad-diaria",
        estimatedTime: "5 min",
        required: false,
      },
      {
        id: "sql-scenario",
        type: "scenario",
        title: "Practica decisiones reales",
        description:
          "Explora escenarios cotidianos para entrenar criterio antes de pasar al reto de conocimiento.",
        href: "/escenarios",
        estimatedTime: "3 min",
        required: false,
      },
      {
        id: "sql-challenge",
        type: "challenge",
        title: "Completa el reto",
        description:
          "Comprueba tus conocimientos sobre SQL Injection con ejercicios defensivos.",
        href: "/retos/sql-injection",
        estimatedTime: "5 min",
        required: true,
      },
    ],
  },
];

export const upcomingLearningPaths = [
  {
    id: "xss",
    title: "XSS y seguridad del navegador",
    category: "Aplicaciones web",
    description: "Aprender a reconocer contenido no confiable y renderizado seguro.",
  },
  {
    id: "brute-force",
    title: "Fuerza bruta y protección de cuentas",
    category: "Autenticación",
    description: "Refuerzo de cuentas con MFA, bloqueo progresivo y buenas contraseñas.",
  },
  {
    id: "ransomware",
    title: "Ransomware y respuesta defensiva",
    category: "Malware",
    description: "Prevención, copias seguras y decisiones iniciales ante incidentes.",
  },
  {
    id: "mitm",
    title: "Man-in-the-Middle y redes seguras",
    category: "Redes",
    description: "Señales de intercepción, HTTPS y hábitos en redes públicas.",
  },
];

export function getLearningPathById(id: string) {
  return learningPaths.find((path) => path.id === id);
}
