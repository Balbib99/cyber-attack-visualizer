import type { CyberChallenge } from "@/types/challenge";

export const challenges: CyberChallenge[] = [
  {
    id: "phishing",
    title: "Reto de Phishing",
    subtitle: "Detecta señales de engaño antes de hacer clic.",
    description:
      "Practica con preguntas cortas sobre mensajes sospechosos, páginas falsas y defensas clave.",
    category: "Ingeniería social",
    difficulty: "básico",
    estimatedTime: "3-4 min",
    relatedThreatId: "phishing",
    relatedSimulatorId: "phishing",
    relatedSimulatorPath: "/simulador/phishing",
    relatedTipIds: [
      "revisar-enlaces-sospechosos",
      "reconocer-pagina-falsa",
      "activar-2fa",
    ],
    status: "available",
    questions: [
      {
        id: "phishing-senal",
        type: "multiple-choice",
        question: "¿Cuál es una señal habitual de un mensaje de phishing?",
        options: [
          { id: "a", text: "El mensaje usa un tono urgente y pide actuar rápido." },
          { id: "b", text: "El mensaje no contiene ningún enlace." },
          { id: "c", text: "El remitente siempre pertenece a tu lista de contactos." },
          { id: "d", text: "El mensaje solo contiene información pública." },
        ],
        correctOptionId: "a",
        explanation:
          "Muchos ataques de phishing intentan generar urgencia para que la víctima actúe sin comprobar remitente, enlaces o contexto.",
        defenseTip:
          "Antes de hacer clic, revisa remitente, URL y motivo del mensaje.",
      },
      {
        id: "phishing-diseno",
        type: "true-false",
        question: "Si una página tiene un diseño profesional, siempre es segura.",
        correctBoolean: false,
        explanation:
          "Una página falsa puede imitar un diseño profesional. La apariencia por sí sola no garantiza que sea legítima.",
        defenseTip:
          "Comprueba la URL, el certificado, el contexto de acceso y evita entrar desde enlaces sospechosos.",
      },
      {
        id: "phishing-orden",
        type: "order-steps",
        question: "Ordena las fases básicas de un ataque de phishing.",
        items: [
          { id: "prepare", text: "El atacante prepara un mensaje falso." },
          { id: "receive", text: "La víctima recibe el mensaje." },
          { id: "click", text: "La víctima pulsa un enlace sospechoso." },
          { id: "fake-page", text: "Se abre una página falsa." },
          { id: "credentials", text: "La víctima introduce credenciales." },
          { id: "capture", text: "El atacante captura los datos." },
        ],
        correctOrder: [
          "prepare",
          "receive",
          "click",
          "fake-page",
          "credentials",
          "capture",
        ],
        explanation:
          "El phishing suele avanzar desde un mensaje diseñado para engañar hasta una acción de la víctima que entrega información sensible.",
        defenseTip:
          "Romper la cadena en cualquier punto puede evitar el ataque: no hacer clic, verificar URL o usar MFA.",
      },
      {
        id: "phishing-defensa",
        type: "best-defense",
        question:
          "Recibes un email urgente que te pide iniciar sesión para evitar el bloqueo de tu cuenta. ¿Cuál es la mejor primera acción?",
        options: [
          { id: "a", text: "Hacer clic rápido para evitar el bloqueo." },
          { id: "b", text: "Responder al correo pidiendo más información." },
          { id: "c", text: "Acceder escribiendo manualmente la dirección oficial del servicio." },
          { id: "d", text: "Reenviar el correo a otros contactos." },
        ],
        correctOptionId: "c",
        explanation:
          "Acceder manualmente al sitio oficial evita depender del enlace recibido, que podría llevar a una página falsa.",
        defenseTip:
          "No introduzcas credenciales desde enlaces recibidos por email o SMS si no has verificado su legitimidad.",
      },
    ],
  },
  {
    id: "sql-injection",
    title: "Reto de SQL Injection",
    subtitle: "Reconoce causas y defensas sin usar payloads reales.",
    description:
      "Practica conceptos defensivos sobre validación, consultas seguras, permisos y monitorización.",
    category: "Seguridad web",
    difficulty: "intermedio",
    estimatedTime: "3-4 min",
    relatedThreatId: "sql-injection",
    relatedSimulatorId: "sql-injection",
    relatedSimulatorPath: "/simulador/sql-injection",
    relatedTipIds: ["verificar-app-fiable"],
    status: "available",
    questions: [
      {
        id: "sqli-causa",
        type: "multiple-choice",
        question:
          "¿Cuál es una causa común de una vulnerabilidad de SQL Injection?",
        options: [
          { id: "a", text: "Mezclar entradas del usuario con consultas sin protección adecuada." },
          { id: "b", text: "Usar imágenes optimizadas en la web." },
          { id: "c", text: "Tener una contraseña larga." },
          { id: "d", text: "Usar HTTPS." },
        ],
        correctOptionId: "a",
        explanation:
          "La vulnerabilidad aparece cuando la aplicación no separa correctamente los datos introducidos por el usuario de la lógica de consulta.",
        defenseTip:
          "Usa consultas parametrizadas, validación de entradas y controles de permisos.",
      },
      {
        id: "sqli-validacion",
        type: "true-false",
        question:
          "Validar las entradas del usuario ayuda a reducir el riesgo de SQL Injection.",
        correctBoolean: true,
        explanation:
          "La validación ayuda a detectar formatos inesperados y reduce entradas peligrosas, aunque debe combinarse con consultas parametrizadas.",
        defenseTip:
          "No confíes nunca en datos enviados por el usuario. Valida, parametriza y limita permisos.",
      },
      {
        id: "sqli-orden",
        type: "order-steps",
        question: "Ordena el flujo conceptual de una SQL Injection.",
        items: [
          { id: "form", text: "La aplicación muestra un formulario." },
          { id: "input", text: "El atacante introduce una entrada manipulada." },
          { id: "unsafe", text: "La aplicación procesa la entrada de forma insegura." },
          { id: "database", text: "La base de datos recibe una consulta alterada." },
          { id: "exposure", text: "Pueden exponerse datos o acciones no autorizadas." },
          { id: "defense", text: "Se aplican defensas como consultas seguras y validación." },
        ],
        correctOrder: ["form", "input", "unsafe", "database", "exposure", "defense"],
        explanation:
          "El problema se produce cuando una entrada no controlada altera la forma en que la aplicación consulta la base de datos.",
        defenseTip:
          "Separa siempre datos e instrucciones usando consultas parametrizadas.",
      },
      {
        id: "sqli-mejor-defensa",
        type: "best-defense",
        question: "¿Cuál es una de las mejores defensas contra SQL Injection?",
        options: [
          { id: "a", text: "Usar consultas parametrizadas." },
          { id: "b", text: "Mostrar errores internos completos al usuario." },
          { id: "c", text: "Guardar todos los permisos con rol administrador." },
          { id: "d", text: "Desactivar los logs de seguridad." },
        ],
        correctOptionId: "a",
        explanation:
          "Las consultas parametrizadas ayudan a evitar que la entrada del usuario se interprete como parte de la lógica de consulta.",
        defenseTip:
          "Combina consultas parametrizadas, mínimos privilegios, validación y monitorización.",
      },
    ],
  },
];

export const upcomingChallenges = [
  {
    id: "xss",
    title: "Reto de XSS",
    category: "Aplicaciones web",
    description: "Detectar contenido no confiable y defensas de renderizado seguro.",
  },
  {
    id: "brute-force",
    title: "Reto de Brute Force",
    category: "Autenticación",
    description: "Practicar bloqueo progresivo, MFA y señales de intentos repetidos.",
  },
  {
    id: "ransomware",
    title: "Reto de Ransomware",
    category: "Malware",
    description: "Relacionar fases de impacto con recuperación y copias seguras.",
  },
  {
    id: "man-in-the-middle",
    title: "Reto de Man-in-the-Middle",
    category: "Redes",
    description: "Reconocer señales de intercepción y buenas prácticas de conexión.",
  },
];

export function getChallengeById(id: string) {
  return challenges.find((challenge) => challenge.id === id);
}
