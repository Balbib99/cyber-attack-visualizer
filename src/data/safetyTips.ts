import type { SafetyTip } from "@/types/safetyTip";

export const safetyTips: SafetyTip[] = [
  {
    id: "dni-marca-agua",
    title: "Enviar tu DNI con más seguridad",
    subtitle:
      "Aprende a usar una marca de agua para limitar el uso indebido de tus documentos.",
    badge: "Mockup visual",
    category: "Protección de identidad",
    importance: "Alto",
    summary:
      "Aprende a usar una marca de agua para limitar el uso indebido de tus documentos.",
    scenario:
      "Una app o plataforma legítima te pide subir una foto del DNI y un selfie para verificar tu identidad.",
    risk:
      "Una imagen limpia del documento puede reutilizarse fuera de contexto para intentos de suplantación, verificaciones no autorizadas o uso fuera del propósito original si llega a filtrarse.",
    whatToDo: [
      "Añade una marca de agua visible con el uso concreto del documento.",
      "Incluye el nombre de la app, plataforma o finalidad.",
      "Añade una fecha para contextualizar el uso.",
      "Comprueba que la marca no tapa datos necesarios para la verificación.",
      "Envía el documento únicamente por el canal oficial.",
    ],
    whatToAvoid: [
      "Enviar el documento sin marca de agua cuando puedes evitarlo.",
      "Usar una marca demasiado pequeña o casi invisible.",
      "Tapar nombre, número de documento, fecha de validez o fotografía.",
      "Usar textos genéricos como copia.",
      "Reutilizar la misma imagen en varias plataformas.",
    ],
    checklist: [
      "La app o web es legítima.",
      "La marca de agua es visible.",
      "El texto indica uso concreto y fecha.",
      "No tapa datos necesarios.",
      "El envío se hace por canal oficial.",
      "Las copias temporales se eliminan si ya no hacen falta.",
    ],
    imageLabel: "Mockup de documento ficticio con marca de agua",
    visualExample: {
      title: "Documento ficticio con uso limitado",
      description:
        "La marca debe dificultar la reutilización de la imagen, pero permitir que los datos necesarios se sigan verificando.",
      watermarkText:
        "Uso exclusivo para verificación en esta aplicación - Mayo 2026",
    },
    visualType: "watermarked-id",
    infoCards: [
      {
        icon: "Eye",
        title: "Marca visible",
        description:
          "Debe poder leerse con claridad para indicar el uso concreto del documento.",
      },
      {
        icon: "FileLock2",
        title: "Datos legibles",
        description:
          "No tapes nombre, número de documento, fecha de validez ni otros datos necesarios.",
      },
      {
        icon: "ShieldCheck",
        title: "Contexto limitado",
        description:
          "Incluye finalidad y fecha para reducir el valor de una copia reutilizada.",
      },
    ],
    recommendedTool: {
      name: "Marca de agua personalizada",
      description:
        "Antes de enviar una copia de un documento sensible a una plataforma legítima, puedes añadir una marca de agua visible indicando el uso concreto del documento.",
      officialLabel: "Recurso práctico",
      useCases: [
        "Verificación de identidad en una app legítima.",
        "Envío de documentación para un trámite.",
        "Compartir una copia minimizando reutilización indebida.",
      ],
      steps: [
        "Verifica que la app o web es legítima.",
        "Añade una marca de agua visible.",
        "Especifica el uso concreto y la fecha.",
        "No tapes datos necesarios para la verificación.",
        "Envía el documento solo por canales oficiales.",
        "Borra copias temporales si ya no las necesitas.",
      ],
      warning:
        "Esta práctica reduce el riesgo de reutilización indebida, pero no lo elimina. Si una entidad exige una imagen sin modificaciones, revisa sus condiciones y usa solo canales oficiales.",
    },
    relatedThreatIds: ["phishing", "man-in-the-middle"],
    relatedSimulatorIds: ["phishing"],
    relatedChallengeIds: ["phishing"],
  },
  {
    id: "verificar-app-fiable",
    title: "Verificar si una aplicación es fiable",
    subtitle:
      "Evalúa señales de confianza antes de subir documentos personales a una app o web.",
    badge: "Consejo práctico",
    category: "Privacidad",
    importance: "Alto",
    summary:
      "Antes de subir documentos personales, valida que el servicio exista, sea oficial y realmente necesite esos datos.",
    scenario:
      "Una web promete una oferta, empleo, préstamo o trámite rápido y solicita documentos personales para continuar.",
    risk:
      "Un servicio falso o poco confiable puede recopilar documentos para fraude, spam dirigido o robo de identidad.",
    whatToDo: [
      "Busca la empresa por una vía independiente.",
      "Comprueba dominio, reseñas y canales oficiales.",
      "Revisa qué datos solicita y por qué.",
      "Detén el proceso si la urgencia parece artificial.",
    ],
    whatToAvoid: [
      "Subir documentos desde enlaces inesperados.",
      "Ignorar dominios raros o errores visibles.",
      "Confiar solo en una interfaz bonita.",
      "Aceptar permisos que no encajan con el servicio.",
    ],
    checklist: [
      "Dominio oficial confirmado.",
      "Empresa y contacto verificables.",
      "Solicitud de datos razonable.",
      "No hay presión excesiva ni promesas irreales.",
    ],
    imageLabel: "Panel de verificación de servicio",
    visualExample: {
      title: "Semáforo de confianza",
      description:
        "Dominio oficial, datos de contacto y política clara suben la confianza. Urgencia y enlaces acortados la reducen.",
    },
    visualType: "app-trust",
    infoCards: [
      {
        icon: "Search",
        title: "Comprueba fuera del enlace",
        description:
          "Busca la entidad desde el navegador o una fuente independiente, no solo desde el mensaje recibido.",
      },
      {
        icon: "PanelTop",
        title: "Revisa el dominio",
        description:
          "El dominio, HTTPS y datos de contacto deben encajar con el servicio real.",
      },
      {
        icon: "ShieldAlert",
        title: "Detecta presión",
        description:
          "Urgencia artificial, premios o amenazas son señales para detenerse y verificar.",
      },
    ],
    recommendedTool: {
      name: "INCIBE / Oficina de Seguridad del Internauta",
      description:
        "Recurso oficial en España con guías, avisos y ayuda para ciudadanos sobre seguridad digital.",
      url: "https://www.incibe.es/ciudadania",
      officialLabel: "Recurso oficial",
      useCases: [
        "Buscar orientación ante una estafa.",
        "Consultar guías de seguridad.",
        "Aprender buenas prácticas digitales.",
      ],
      steps: [
        "Accede al portal ciudadano de INCIBE.",
        "Busca la guía o aviso relacionado con tu caso.",
        "Contrasta la información antes de compartir datos.",
        "Si ya has enviado información sensible, contacta con la entidad afectada.",
      ],
      warning:
        "En caso de fraude, pérdida económica o suplantación, puede ser necesario contactar también con la entidad afectada y con las autoridades correspondientes.",
    },
    relatedThreatIds: ["phishing"],
    relatedSimulatorIds: ["phishing"],
    relatedChallengeIds: ["phishing"],
  },
  {
    id: "activar-2fa",
    title: "Activar autenticación en dos factores",
    subtitle:
      "Añade una segunda barrera para proteger cuentas importantes aunque la contraseña se filtre.",
    badge: "Mockup visual",
    category: "Cuentas",
    importance: "Alto",
    summary:
      "Añade una segunda barrera para que una contraseña filtrada no sea suficiente para entrar en tu cuenta.",
    scenario:
      "Usas correo, banca online, redes sociales, herramientas cloud o cuentas profesionales con datos sensibles.",
    risk:
      "Si una contraseña se filtra, reutiliza o adivina, la cuenta queda mucho más expuesta sin un segundo factor.",
    whatToDo: [
      "Activa 2FA primero en el correo principal.",
      "Prioriza passkeys, app autenticadora o llave física si están disponibles.",
      "Guarda códigos de recuperación en un lugar seguro.",
      "Revisa sesiones abiertas y métodos de recuperación.",
    ],
    whatToAvoid: [
      "Reutilizar contraseñas entre servicios.",
      "Guardar códigos de recuperación en capturas visibles.",
      "Aceptar solicitudes 2FA que no has iniciado.",
      "Confiar solo en SMS si tienes opciones más fuertes.",
    ],
    checklist: [
      "2FA activo en correo principal.",
      "Códigos de recuperación guardados.",
      "Métodos de recuperación revisados.",
      "Sesiones antiguas cerradas.",
    ],
    imageLabel: "Cuenta protegida por segundo factor",
    visualExample: {
      title: "Acceso con doble confirmación",
      description:
        "Contraseña más segundo factor: si una pieza falla, la cuenta aún tiene una barrera adicional.",
    },
    visualType: "two-factor",
    infoCards: [
      {
        icon: "KeyRound",
        title: "Prioriza cuentas clave",
        description:
          "Empieza por correo principal, banca, redes y herramientas de trabajo.",
      },
      {
        icon: "LockKeyhole",
        title: "Usa métodos fuertes",
        description:
          "Passkeys, app autenticadora o llave física suelen ser mejores opciones que solo SMS.",
      },
      {
        icon: "ListChecks",
        title: "Guarda recuperación",
        description:
          "Conserva códigos de respaldo en un lugar seguro antes de cerrar la configuración.",
      },
    ],
    recommendedTool: {
      name: "Aplicación de autenticación",
      description:
        "Una aplicación de autenticación permite generar códigos temporales para añadir una capa extra de seguridad al iniciar sesión.",
      officialLabel: "Recurso práctico",
      useCases: [
        "Proteger el correo principal.",
        "Proteger banca, redes sociales y servicios cloud.",
        "Reducir el impacto si alguien obtiene tu contraseña.",
      ],
      steps: [
        "Entra en la configuración de seguridad de tu cuenta.",
        "Busca Autenticación en dos pasos o MFA.",
        "Escanea el código QR con una app de autenticación.",
        "Guarda los códigos de recuperación en un lugar seguro.",
        "Comprueba que puedes iniciar sesión correctamente.",
      ],
      warning:
        "No guardes los códigos de recuperación en el mismo sitio que tu contraseña. Si pierdes el segundo factor, podrías quedarte sin acceso.",
    },
    relatedThreatIds: ["brute-force", "phishing"],
    relatedSimulatorIds: ["phishing"],
    relatedChallengeIds: ["phishing"],
  },
  {
    id: "revisar-enlaces-sospechosos",
    title: "Revisar enlaces sospechosos",
    subtitle:
      "Aprende a inspeccionar el destino real antes de introducir credenciales.",
    badge: "Consejo práctico",
    category: "Phishing",
    importance: "Crítico",
    summary:
      "Comprueba el destino real antes de introducir credenciales en cualquier enlace inesperado.",
    scenario:
      "Recibes un email, SMS o mensaje directo que te pide iniciar sesión para evitar un bloqueo o confirmar un pago.",
    risk:
      "El enlace puede abrir una página falsa que copia la apariencia del servicio real y captura credenciales o códigos temporales.",
    whatToDo: [
      "Mira el dominio completo antes de entrar.",
      "Accede desde la app oficial si tienes dudas.",
      "Busca señales de urgencia, amenazas o errores.",
      "Reporta el mensaje si parece fraudulento.",
    ],
    whatToAvoid: [
      "Introducir credenciales desde enlaces acortados.",
      "Confiar en dominios parecidos pero no exactos.",
      "Enviar códigos temporales por chat.",
      "Ignorar avisos del navegador.",
    ],
    checklist: [
      "Dominio revisado.",
      "Mensaje esperado y coherente.",
      "Acceso hecho desde canal oficial.",
      "Sin solicitud extraña de códigos.",
    ],
    imageLabel: "Comparación de enlace legítimo y falso",
    visualExample: {
      title: "URL bajo inspección",
      description:
        "Los dominios parecidos buscan pasar desapercibidos. La parte importante suele estar justo antes del primer slash.",
    },
    visualType: "link-check",
    infoCards: [
      {
        icon: "MailWarning",
        title: "Observa el contexto",
        description:
          "Un mensaje inesperado con urgencia merece revisión antes de pulsar.",
      },
      {
        icon: "Search",
        title: "Inspecciona la URL",
        description:
          "Comprueba el dominio completo y evita enlaces acortados o direcciones parecidas.",
      },
      {
        icon: "ShieldCheck",
        title: "Accede por canal oficial",
        description:
          "Si tienes dudas, abre la app o escribe la web oficial manualmente.",
      },
    ],
    recommendedTool: {
      name: "VirusTotal",
      description:
        "Servicio que permite analizar URLs, dominios, IPs y archivos sospechosos usando múltiples motores y fuentes de seguridad.",
      url: "https://www.virustotal.com/",
      officialLabel: "Servicio externo",
      useCases: [
        "Comprobar una URL sospechosa antes de abrirla.",
        "Revisar un dominio dudoso.",
        "Analizar un archivo descargado antes de ejecutarlo.",
      ],
      steps: [
        "Copia la URL o dominio sospechoso.",
        "Abre VirusTotal.",
        "Usa la pestaña URL para pegar el enlace.",
        "Revisa si hay detecciones o avisos.",
        "Si el resultado es dudoso o aparece marcado por varias fuentes, no abras el enlace.",
      ],
      warning:
        "No subas documentos personales, DNI, contratos, nóminas ni archivos confidenciales. Las muestras enviadas a servicios de análisis pueden ser compartidas o revisadas por terceros.",
      note:
        "Un resultado limpio no garantiza seguridad absoluta. Usa la herramienta como apoyo, no como única decisión.",
    },
    relatedThreatIds: ["phishing", "man-in-the-middle"],
    relatedSimulatorIds: ["phishing"],
    relatedChallengeIds: ["phishing"],
  },
  {
    id: "comprobar-email-filtraciones",
    title: "Comprobar si tu email aparece en filtraciones",
    subtitle:
      "Revisa si tu correo aparece en brechas conocidas y decide qué cuentas conviene reforzar.",
    badge: "Recurso práctico",
    category: "Cuentas",
    importance: "Alto",
    summary:
      "Comprueba si una dirección de correo aparece en filtraciones conocidas y refuerza las cuentas afectadas.",
    scenario:
      "Sospechas que una contraseña antigua se ha filtrado o quieres revisar la exposición de tu correo principal.",
    risk:
      "Una filtración puede facilitar ataques de relleno de credenciales, phishing personalizado o intentos de acceso en servicios donde reutilizaste contraseña.",
    whatToDo: [
      "Consulta si tu correo aparece en brechas conocidas.",
      "Cambia contraseñas antiguas o reutilizadas.",
      "Prioriza el correo principal y servicios críticos.",
      "Activa MFA en cuentas importantes.",
    ],
    whatToAvoid: [
      "Reutilizar contraseñas filtradas.",
      "Ignorar avisos de acceso desconocido.",
      "Usar la misma contraseña en correo y servicios externos.",
      "Compartir capturas con datos personales visibles.",
    ],
    checklist: [
      "Correo revisado.",
      "Contraseñas afectadas cambiadas.",
      "MFA activado en cuentas críticas.",
      "Sesiones desconocidas cerradas.",
    ],
    imageLabel: "Panel conceptual de exposición de correo",
    visualExample: {
      title: "Correo bajo revisión",
      description:
        "El objetivo es convertir una señal de exposición en acciones concretas: cambiar claves, evitar reutilización y activar MFA.",
    },
    visualType: "breach-check",
    infoCards: [
      {
        icon: "DatabaseZap",
        title: "Busca exposición",
        description:
          "Comprueba si tu correo aparece asociado a filtraciones conocidas.",
      },
      {
        icon: "RefreshCw",
        title: "Cambia claves",
        description:
          "Actualiza contraseñas reutilizadas o antiguas en cuentas relevantes.",
      },
      {
        icon: "LockKeyhole",
        title: "Refuerza accesos",
        description:
          "Activa MFA y revisa sesiones abiertas en servicios importantes.",
      },
    ],
    recommendedTool: {
      name: "Have I Been Pwned",
      description:
        "Permite comprobar si una dirección de correo aparece en filtraciones de datos conocidas.",
      url: "https://haveibeenpwned.com/",
      officialLabel: "Servicio externo",
      useCases: [
        "Saber si tu correo aparece en una brecha conocida.",
        "Detectar si debes cambiar contraseñas antiguas.",
        "Revisar el riesgo de reutilizar contraseñas.",
      ],
      steps: [
        "Escribe tu dirección de correo.",
        "Revisa si aparece asociada a filtraciones.",
        "Cambia las contraseñas afectadas.",
        "No reutilices contraseñas antiguas.",
        "Activa MFA en cuentas importantes.",
      ],
      warning:
        "Si tu correo aparece en una filtración, no significa necesariamente que todas tus cuentas estén comprometidas, pero sí conviene revisar contraseñas y seguridad.",
    },
    relatedThreatIds: ["phishing", "brute-force"],
    relatedSimulatorIds: ["phishing"],
    relatedChallengeIds: ["phishing"],
  },
  {
    id: "reconocer-pagina-falsa",
    title: "Reconocer una página falsa antes de iniciar sesión",
    subtitle:
      "Contrasta señales técnicas y visuales antes de introducir usuario, contraseña o códigos temporales.",
    badge: "Consejo práctico",
    category: "Phishing",
    importance: "Crítico",
    summary:
      "Aprende a revisar una web dudosa antes de introducir credenciales o información sensible.",
    scenario:
      "Un enlace recibido por email o SMS abre una página que parece imitar el inicio de sesión de un servicio conocido.",
    risk:
      "Una página falsa puede capturar credenciales, códigos de un solo uso o datos personales aunque visualmente parezca profesional.",
    whatToDo: [
      "Comprueba el dominio completo.",
      "Contrasta la URL con el canal oficial.",
      "Revisa si hay urgencia artificial o errores visibles.",
      "No introduzcas credenciales si el contexto no encaja.",
    ],
    whatToAvoid: [
      "Confiar solo en el diseño de la página.",
      "Introducir códigos temporales desde enlaces recibidos.",
      "Ignorar dominios parecidos al oficial.",
      "Descargar archivos desde páginas de acceso dudosas.",
    ],
    checklist: [
      "URL revisada.",
      "Dominio oficial confirmado.",
      "Acceso iniciado desde canal confiable.",
      "Sin peticiones inesperadas de datos o códigos.",
    ],
    imageLabel: "Mockup de navegador con señales de alerta",
    visualExample: {
      title: "Página de inicio de sesión dudosa",
      description:
        "Un diseño convincente puede esconder un dominio incorrecto, presión artificial o un flujo de acceso fuera de contexto.",
    },
    visualType: "link-check",
    infoCards: [
      {
        icon: "PanelTop",
        title: "Mira la barra de dirección",
        description:
          "La URL completa importa más que el logotipo o el aspecto visual.",
      },
      {
        icon: "AlertTriangle",
        title: "Desconfía de la urgencia",
        description:
          "Bloqueos inmediatos o amenazas suelen buscar que actúes sin revisar.",
      },
      {
        icon: "ShieldCheck",
        title: "Usa el acceso oficial",
        description:
          "Abre la app o escribe la dirección manualmente si tienes dudas.",
      },
    ],
    recommendedTool: {
      name: "Google Safe Browsing Site Status",
      description:
        "Permite consultar si una URL aparece marcada como peligrosa en los sistemas de navegación segura de Google.",
      url: "https://transparencyreport.google.com/safe-browsing/search",
      officialLabel: "Servicio externo",
      useCases: [
        "Revisar una web dudosa.",
        "Comprobar enlaces recibidos por email o SMS.",
        "Contrastar señales antes de introducir credenciales.",
      ],
      steps: [
        "Copia la dirección de la web.",
        "Abre Google Safe Browsing Site Status.",
        "Pega la URL en el buscador.",
        "Revisa si aparece marcada como peligrosa.",
        "Si tienes dudas, no introduzcas credenciales.",
      ],
      warning:
        "Que una web no aparezca marcada como peligrosa no garantiza que sea segura. Comprueba también dominio, contexto, HTTPS y señales visuales.",
    },
    relatedThreatIds: ["phishing", "man-in-the-middle"],
    relatedSimulatorIds: ["phishing"],
    relatedChallengeIds: ["phishing"],
  },
];

export function getSafetyTipById(id: string) {
  return safetyTips.find((tip) => tip.id === id);
}
