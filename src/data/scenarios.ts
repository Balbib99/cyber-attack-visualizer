import type { CyberScenario } from "@/types/scenario";

export const scenarios: CyberScenario[] = [
  {
    id: "email-urgente",
    title: "Email urgente sospechoso",
    subtitle: "Decide cómo actuar ante un mensaje que intenta meterte prisa.",
    description:
      "Practica qué hacer cuando recibes un email que amenaza con bloquear tu cuenta si no actúas de inmediato.",
    category: "phishing",
    riskLevel: "alto",
    estimatedTime: "3 min",
    status: "available",
    situation:
      "Recibes un email que dice que tu cuenta será bloqueada en 24 horas si no verificas tus datos. El mensaje incluye un botón grande para iniciar sesión.",
    question: "¿Qué harías primero?",
    visualType: "email",
    warningSigns: [
      "Tono urgente o alarmista.",
      "Solicitud inesperada de inicio de sesión.",
      "Botón o enlace que pide actuar rápido.",
      "Remitente que no has verificado.",
    ],
    options: [
      {
        id: "click-link",
        label: "Hacer clic en el botón del email",
        description: "Acceder directamente desde el enlace recibido.",
        isBestChoice: false,
        feedbackTitle: "Decisión arriesgada",
        feedback:
          "Hacer clic directamente puede llevarte a una página falsa diseñada para robar tus credenciales.",
        consequence:
          "Podrías terminar introduciendo tus datos en una web controlada por un atacante.",
      },
      {
        id: "reply-email",
        label: "Responder al email preguntando si es real",
        description: "Contestar al remitente para pedir confirmación.",
        isBestChoice: false,
        feedbackTitle: "No es la mejor opción",
        feedback:
          "Si el remitente es fraudulento, responder confirma que tu cuenta está activa y puede exponerte a más intentos.",
        consequence:
          "El atacante podría seguir presionándote o enviarte nuevos enlaces.",
      },
      {
        id: "manual-access",
        label: "Entrar escribiendo manualmente la web oficial",
        description: "Abrir el navegador y escribir la dirección oficial del servicio.",
        isBestChoice: true,
        feedbackTitle: "Buena decisión",
        feedback:
          "Acceder manualmente evita depender del enlace recibido y reduce el riesgo de caer en una página falsa.",
        consequence:
          "Puedes comprobar el estado real de tu cuenta desde un canal confiable.",
      },
      {
        id: "forward-contacts",
        label: "Reenviar el email a otras personas",
        description: "Avisar a otros reenviando el mensaje completo.",
        isBestChoice: false,
        feedbackTitle: "Cuidado con reenviar",
        feedback:
          "Reenviar el mensaje puede propagar el enlace sospechoso y aumentar el riesgo para otras personas.",
        consequence:
          "Otros usuarios podrían hacer clic creyendo que el mensaje viene recomendado por ti.",
      },
    ],
    recommendedAction:
      "Accede siempre desde la web oficial escribiendo la dirección manualmente o usando un marcador de confianza.",
    defensiveTip:
      "Revisa remitente, URL, contexto y urgencia antes de interactuar con mensajes inesperados.",
    relatedContent: [
      { label: "Ver amenaza: Phishing", href: "/amenazas/phishing", type: "amenaza" },
      { label: "Ver simulación de Phishing", href: "/simulador/phishing", type: "simulación" },
      { label: "Hacer reto de Phishing", href: "/retos/phishing", type: "reto" },
      { label: "Ruta de Phishing", href: "/rutas/phishing", type: "ruta" },
    ],
  },
  {
    id: "app-solicita-dni",
    title: "App que solicita el DNI",
    subtitle: "Aprende a actuar cuando una plataforma pide documentos sensibles.",
    description:
      "Practica cómo reducir riesgos cuando una app legítima solicita una foto del DNI o un documento de identidad.",
    category: "identidad",
    riskLevel: "alto",
    estimatedTime: "4 min",
    status: "available",
    situation:
      "Una aplicación te pide subir una foto del DNI por ambas caras y un selfie para verificar tu identidad. La app parece legítima, pero no quieres enviar el documento sin precauciones.",
    question: "¿Cuál sería una buena práctica antes de enviar el documento?",
    visualType: "id-check",
    warningSigns: [
      "Se solicita un documento sensible.",
      "No sabes exactamente para qué se usará la imagen.",
      "El documento podría reutilizarse si se filtrara.",
      "Debes verificar que la app y el canal son legítimos.",
    ],
    options: [
      {
        id: "send-clean",
        label: "Enviar la imagen limpia sin modificar",
        description: "Subir el documento tal cual, sin ninguna marca.",
        isBestChoice: false,
        feedbackTitle: "Podría ser arriesgado",
        feedback:
          "Aunque la app sea legítima, una copia limpia del documento podría reutilizarse si se filtrara.",
        consequence: "El documento sería más fácil de usar fuera del contexto original.",
      },
      {
        id: "watermark",
        label: "Añadir una marca de agua con uso concreto y fecha",
        description:
          "Usar un texto visible como 'Uso exclusivo para esta verificación - Mayo 2026'.",
        isBestChoice: true,
        feedbackTitle: "Buena práctica",
        feedback:
          "Una marca de agua visible puede reducir el riesgo de reutilización indebida del documento.",
        consequence: "Si la imagen se filtrase, sería más difícil usarla para otros fines.",
      },
      {
        id: "cover-all-data",
        label: "Tapar todos los datos importantes",
        description: "Ocultar nombre, número de documento y fecha.",
        isBestChoice: false,
        feedbackTitle: "Puede impedir la verificación",
        feedback:
          "Si tapas datos necesarios, la plataforma podría no poder verificar tu identidad.",
        consequence: "La solicitud podría ser rechazada o tendrías que repetir el envío.",
      },
      {
        id: "send-chat",
        label: "Enviar el DNI por cualquier chat de soporte",
        description: "Mandarlo por un canal alternativo más rápido.",
        isBestChoice: false,
        feedbackTitle: "Canal incorrecto",
        feedback:
          "Enviar documentos sensibles por canales no oficiales aumenta el riesgo de exposición.",
        consequence: "Podrías perder control sobre dónde queda almacenado el documento.",
      },
    ],
    recommendedAction:
      "Verifica la legitimidad de la app, usa canales oficiales y añade una marca de agua visible que indique finalidad y fecha sin tapar datos necesarios.",
    defensiveTip:
      "Una marca de agua no elimina el riesgo, pero puede reducir la reutilización indebida si la imagen se filtra.",
    relatedContent: [
      { label: "Ver consejo del DNI", href: "/seguridad-diaria/dni-marca-agua", type: "tip" },
      { label: "Ver consejos de seguridad diaria", href: "/seguridad-diaria", type: "tip" },
    ],
  },
  {
    id: "archivo-adjunto",
    title: "Archivo adjunto inesperado",
    subtitle: "Decide qué hacer antes de abrir un archivo que no esperabas.",
    description:
      "Practica cómo actuar ante un archivo adjunto sospechoso que podría esconder malware o ransomware.",
    category: "malware",
    riskLevel: "crítico",
    estimatedTime: "3 min",
    status: "available",
    situation:
      "Recibes un correo con un archivo adjunto llamado 'factura-pendiente'. No esperabas ese documento y el mensaje te pide abrirlo cuanto antes.",
    question: "¿Cuál es la acción más prudente?",
    visualType: "file-attachment",
    warningSigns: [
      "Archivo inesperado.",
      "Mensaje con presión para abrirlo rápido.",
      "Remitente no verificado.",
      "Nombre de archivo genérico o alarmista.",
    ],
    options: [
      {
        id: "open-file",
        label: "Abrir el archivo para comprobarlo",
        description: "Ver rápidamente de qué se trata.",
        isBestChoice: false,
        feedbackTitle: "Decisión peligrosa",
        feedback:
          "Abrir archivos inesperados puede ejecutar contenido malicioso o iniciar una infección.",
        consequence: "Podrías comprometer tu equipo o tus archivos.",
      },
      {
        id: "verify-sender",
        label: "Verificar el remitente por un canal independiente",
        description: "Contactar por otro medio para confirmar si el archivo es legítimo.",
        isBestChoice: true,
        feedbackTitle: "Buena decisión",
        feedback:
          "Confirmar por un canal independiente ayuda a evitar abrir archivos enviados por suplantación.",
        consequence: "Puedes validar el origen antes de exponerte al riesgo.",
      },
      {
        id: "forward-file",
        label: "Reenviarlo a otra persona para que lo abra",
        description: "Pedir a alguien que lo compruebe.",
        isBestChoice: false,
        feedbackTitle: "No traslades el riesgo",
        feedback:
          "Reenviar un archivo sospechoso puede poner en peligro a otras personas.",
        consequence: "Podrías propagar el problema.",
      },
      {
        id: "upload-private",
        label: "Subir cualquier archivo a una herramienta online sin revisar su contenido",
        description: "Analizarlo directamente en una web externa.",
        isBestChoice: false,
        feedbackTitle: "Depende del archivo",
        feedback:
          "Herramientas como VirusTotal pueden ayudar, pero no deberías subir documentos personales o confidenciales.",
        consequence: "Podrías compartir información privada con terceros.",
      },
    ],
    recommendedAction:
      "Verifica el remitente, no abras adjuntos inesperados y usa herramientas de análisis solo con archivos no confidenciales.",
    defensiveTip:
      "Si el archivo contiene información privada, consulta con soporte técnico o usa canales internos seguros antes de subirlo a servicios externos.",
    relatedContent: [
      { label: "Ver consejos de seguridad diaria", href: "/seguridad-diaria", type: "tip" },
    ],
  },
  {
    id: "login-dudoso",
    title: "Web de inicio de sesión dudosa",
    subtitle: "Entrena cómo revisar una página antes de introducir credenciales.",
    description:
      "Practica qué señales comprobar antes de escribir usuario y contraseña en una página de login.",
    category: "phishing",
    riskLevel: "alto",
    estimatedTime: "3 min",
    status: "available",
    situation:
      "Después de pulsar un enlace, llegas a una página de inicio de sesión que se parece a un servicio conocido. La URL parece extraña y no recuerdas haber solicitado iniciar sesión.",
    question: "¿Qué deberías hacer?",
    visualType: "fake-login",
    warningSigns: [
      "URL extraña o dominio no oficial.",
      "Llegaste desde un enlace recibido.",
      "Página que solicita credenciales sin contexto claro.",
      "Diseño parecido a un servicio real, pero no suficiente para confiar.",
    ],
    options: [
      {
        id: "enter-credentials",
        label: "Introducir tus credenciales si el diseño parece profesional",
        description: "Confiar en la apariencia visual de la página.",
        isBestChoice: false,
        feedbackTitle: "La apariencia no garantiza seguridad",
        feedback:
          "Una página falsa puede imitar muy bien el diseño de una web legítima.",
        consequence: "Tus credenciales podrían acabar en manos de un atacante.",
      },
      {
        id: "check-url",
        label: "Revisar la URL y acceder desde la web oficial",
        description: "Cerrar la página y entrar manualmente al servicio.",
        isBestChoice: true,
        feedbackTitle: "Buena decisión",
        feedback:
          "Comprobar la URL y acceder desde la web oficial reduce el riesgo de introducir datos en una página falsa.",
        consequence: "Mantienes el control sobre dónde introduces tus credenciales.",
      },
      {
        id: "ignore-url",
        label: "Ignorar la URL si aparece un candado",
        description: "Confiar solo en que la página usa HTTPS.",
        isBestChoice: false,
        feedbackTitle: "HTTPS no basta",
        feedback:
          "Una web falsa también puede usar HTTPS. El candado no garantiza que la página sea legítima.",
        consequence: "Podrías confiar en una señal insuficiente.",
      },
      {
        id: "save-password",
        label: "Guardar la contraseña en el navegador",
        description: "Dejar que el navegador recuerde los datos.",
        isBestChoice: false,
        feedbackTitle: "No soluciona el problema",
        feedback: "Guardar la contraseña no verifica que la web sea legítima.",
        consequence:
          "El problema principal sigue siendo introducir datos en un sitio dudoso.",
      },
    ],
    recommendedAction:
      "Cierra la página sospechosa, escribe manualmente la dirección oficial y verifica la URL antes de iniciar sesión.",
    defensiveTip:
      "Revisa dominio, contexto, HTTPS y señales de alerta. Si tienes dudas, no introduzcas credenciales.",
    relatedContent: [
      { label: "Ver simulación de Phishing", href: "/simulador/phishing", type: "simulación" },
      { label: "Hacer reto de Phishing", href: "/retos/phishing", type: "reto" },
      { label: "Ver amenaza: Phishing", href: "/amenazas/phishing", type: "amenaza" },
    ],
  },
];

export function getScenarioById(id: string) {
  return scenarios.find((scenario) => scenario.id === id);
}
