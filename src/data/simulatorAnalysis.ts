import type { SimulatorAnalysisQuestion } from "@/types/simulator";

type SimulatorAnalysisMap = Record<string, Record<string, SimulatorAnalysisQuestion>>;

export const simulatorAnalysisQuestions: SimulatorAnalysisMap = {
  phishing: {
    "mensaje-falso": {
      question: "¿Qué señal de alerta aparece en esta fase?",
      options: [
        { id: "urgency", label: "El atacante intenta crear sensación de urgencia.", isCorrect: true },
        { id: "no-manipulation", label: "El mensaje no contiene ninguna intención de manipular.", isCorrect: false },
        { id: "verified-url", label: "La víctima ya ha verificado la URL.", isCorrect: false },
      ],
      explanation:
        "Muchos mensajes de phishing se diseñan para generar urgencia, miedo o confianza falsa antes de que la víctima piense con calma.",
    },
    "mensaje-recibido": {
      question: "¿Qué deberías revisar antes de interactuar?",
      options: [
        { id: "sender-context-domain", label: "Remitente, contexto y dominio del mensaje.", isCorrect: true },
        { id: "visual-only", label: "Solo el diseño visual del mensaje.", isCorrect: false },
        { id: "subject-only", label: "Únicamente si el asunto parece importante.", isCorrect: false },
      ],
      explanation:
        "La apariencia visual no basta. El remitente, el contexto y la dirección real son señales clave.",
    },
    "mensaje-abierto": {
      question: "¿Qué elemento aumenta el riesgo?",
      options: [
        { id: "urgent-cta", label: "Una llamada a la acción urgente.", isCorrect: true },
        { id: "short-text", label: "Que el mensaje tenga texto breve.", isCorrect: false },
        { id: "in-inbox", label: "Que aparezca dentro de una bandeja de entrada.", isCorrect: false },
      ],
      explanation:
        "Las llamadas urgentes buscan reducir tu tiempo de análisis y empujarte a actuar.",
    },
    "clic-enlace": {
      question: "¿Cuál sería una acción más segura?",
      options: [
        { id: "verify-url", label: "Verificar la URL antes de hacer clic.", isCorrect: true },
        { id: "professional-button", label: "Hacer clic si el botón parece profesional.", isCorrect: false },
        { id: "share-link", label: "Compartir el enlace para que otra persona lo revise.", isCorrect: false },
      ],
      explanation:
        "Antes de hacer clic, conviene revisar el destino del enlace o acceder manualmente al sitio oficial.",
    },
    "pagina-falsa": {
      question: "¿Qué señal es más importante comprobar?",
      options: [
        { id: "url-domain", label: "La URL y el dominio real.", isCorrect: true },
        { id: "good-design", label: "Solo que la página tenga buen diseño.", isCorrect: false },
        { id: "lock-only", label: "Solo que aparezca un candado.", isCorrect: false },
      ],
      explanation:
        "Una web falsa puede tener buen diseño e incluso HTTPS. La URL y el contexto son fundamentales.",
    },
    "credenciales-capturadas": {
      question: "¿Qué medida reduce el impacto si la contraseña se filtra?",
      options: [
        { id: "mfa", label: "Activar MFA.", isCorrect: true },
        { id: "reuse-password", label: "Reutilizar la misma contraseña.", isCorrect: false },
        { id: "ignore-access", label: "Ignorar accesos sospechosos.", isCorrect: false },
      ],
      explanation:
        "El MFA añade una capa extra que puede dificultar el acceso incluso si alguien obtiene la contraseña.",
    },
    "cuenta-comprometida": {
      question: "¿Qué deberías hacer si sospechas compromiso?",
      options: [
        { id: "react-fast", label: "Cambiar contraseña, revisar sesiones y contactar soporte.", isCorrect: true },
        { id: "wait", label: "Esperar unos días a ver qué ocurre.", isCorrect: false },
        { id: "reuse-another", label: "Usar la misma contraseña en otra cuenta.", isCorrect: false },
      ],
      explanation:
        "Ante un posible compromiso, la reacción rápida ayuda a limitar daños.",
    },
    defensa: {
      question: "¿Qué combinación defensiva es más sólida?",
      options: [
        {
          id: "combined-defense",
          label:
            "Verificar enlaces, usar MFA y no introducir credenciales desde enlaces sospechosos.",
          isCorrect: true,
        },
        { id: "trust-design", label: "Confiar solo en el diseño del mensaje.", isCorrect: false },
        { id: "open-email-links", label: "Abrir siempre los enlaces desde el email.", isCorrect: false },
      ],
      explanation:
        "La defensa efectiva combina verificación, hábitos seguros y capas adicionales como MFA.",
    },
  },
  "sql-injection": {
    "formulario-vulnerable": {
      question: "¿Cuál es el punto de riesgo inicial?",
      options: [
        { id: "untrusted-input", label: "La entrada de usuario no controlada.", isCorrect: true },
        { id: "form-color", label: "El color del formulario.", isCorrect: false },
        { id: "page-images", label: "El uso de imágenes en la página.", isCorrect: false },
      ],
      explanation:
        "Las entradas de usuario deben tratarse siempre como datos no confiables.",
    },
    "entrada-manipulada": {
      question: "¿Qué mala práctica facilita el problema?",
      options: [
        { id: "trust-input", label: "Confiar en la entrada sin validarla.", isCorrect: true },
        { id: "descriptive-text", label: "Usar textos descriptivos en la interfaz.", isCorrect: false },
        { id: "submit-button", label: "Tener un botón de enviar.", isCorrect: false },
      ],
      explanation:
        "La validación ayuda a detectar entradas inesperadas, aunque debe combinarse con consultas seguras.",
    },
    "consulta-insegura": {
      question: "¿Qué defensa es más adecuada?",
      options: [
        { id: "parameterized", label: "Usar consultas parametrizadas.", isCorrect: true },
        { id: "show-errors", label: "Mostrar errores internos al usuario.", isCorrect: false },
        { id: "full-permissions", label: "Dar permisos totales a la aplicación.", isCorrect: false },
      ],
      explanation:
        "Las consultas parametrizadas separan datos e instrucciones y reducen el riesgo de inyección.",
    },
    "datos-expuestos": {
      question: "¿Qué práctica reduce el impacto?",
      options: [
        { id: "least-privilege", label: "Aplicar mínimos privilegios.", isCorrect: true },
        { id: "full-db-access", label: "Permitir acceso total a la base de datos.", isCorrect: false },
        { id: "disable-access-control", label: "Desactivar controles de acceso.", isCorrect: false },
      ],
      explanation:
        "Si la aplicación solo tiene los permisos necesarios, el impacto de una vulnerabilidad puede ser menor.",
    },
    filtracion: {
      question: "¿Qué ayuda a detectar actividad anómala?",
      options: [
        { id: "logs-monitoring", label: "Monitorización y revisión de logs.", isCorrect: true },
        { id: "delete-logs", label: "Eliminar todos los registros.", isCorrect: false },
        { id: "ignore-large-queries", label: "Ignorar grandes consultas inesperadas.", isCorrect: false },
      ],
      explanation:
        "Los logs y la monitorización ayudan a detectar patrones extraños o accesos inusuales.",
    },
    "acceso-no-autorizado": {
      question: "¿Dónde debe aplicarse la autorización?",
      options: [
        { id: "server-side", label: "En el servidor, no solo en la interfaz.", isCorrect: true },
        { id: "hide-buttons", label: "Solo ocultando botones en pantalla.", isCorrect: false },
        { id: "visual-styles", label: "Solo cambiando estilos visuales.", isCorrect: false },
      ],
      explanation:
        "Los controles de seguridad deben estar en el servidor. La interfaz por sí sola no protege.",
    },
    impacto: {
      question: "¿Qué dimensión puede verse afectada?",
      options: [
        { id: "data-service-trust", label: "Datos, servicio y confianza.", isCorrect: true },
        { id: "web-color", label: "Solo el color de la web.", isCorrect: false },
        { id: "icons-only", label: "Solo los iconos del panel.", isCorrect: false },
      ],
      explanation:
        "Una SQL Injection puede afectar datos, disponibilidad, reputación y cumplimiento.",
    },
    defensa: {
      question: "¿Qué combinación defensiva es más adecuada?",
      options: [
        {
          id: "defense-in-depth",
          label:
            "Consultas parametrizadas, validación, mínimos privilegios y monitorización.",
          isCorrect: true,
        },
        { id: "bad-combo", label: "Permisos totales y errores visibles.", isCorrect: false },
        { id: "no-validation", label: "No revisar entradas de usuario.", isCorrect: false },
      ],
      explanation:
        "La defensa debe combinar varias capas: consultas seguras, validación, permisos limitados y observabilidad.",
    },
  },
};

export function getAnalysisQuestion(simulatorId: string, stepId: string) {
  return simulatorAnalysisQuestions[simulatorId]?.[stepId];
}
