import type { Threat } from "@/types/threat";

export const threats: Threat[] = [
  {
    id: "phishing",
    name: "Phishing",
    icon: "MailWarning",
    category: "Ingeniería social",
    riskLevel: "Crítico",
    difficulty: "Inicial",
    shortDescription:
      "Mensajes que imitan servicios legítimos para robar credenciales, documentos o códigos.",
    overview:
      "El phishing explota confianza, urgencia y apariencia visual. La víctima cree interactuar con un servicio real, pero entrega datos a un entorno controlado por el atacante.",
    howItWorks:
      "El ataque combina un pretexto creíble, un canal de entrega y una página o formulario que captura información.",
    flowSteps: [
      {
        title: "Pretexto",
        icon: "Search",
        description:
          "El atacante elige una excusa: verificación, pago, bloqueo o documento pendiente.",
      },
      {
        title: "Entrega",
        icon: "Send",
        description:
          "El mensaje llega por correo, SMS, chat o red social con apariencia legítima.",
      },
      {
        title: "Captura",
        icon: "KeyRound",
        description:
          "La víctima introduce credenciales, códigos o adjunta información sensible.",
      },
      {
        title: "Abuso",
        icon: "ShieldAlert",
        description: "La información se usa para acceder a cuentas o ampliar el ataque.",
      },
    ],
    impactSummary:
      "Puede causar toma de cuentas, exposición de documentos, fraude económico y acceso inicial a entornos corporativos.",
    warningSigns: [
      "Dominio parecido al real, pero con letras cambiadas.",
      "Urgencia artificial: bloqueo, multa o pago inmediato.",
      "Solicitud de códigos temporales fuera de contexto.",
      "Archivos o enlaces inesperados.",
    ],
    mitigations: [
      "Acceder desde la app oficial o escribiendo la URL manualmente.",
      "Activar autenticación en dos factores.",
      "Validar remitente, dominio y contexto antes de introducir datos.",
      "Reportar mensajes sospechosos.",
    ],
    relatedSafetyTipIds: [
      "revisar-enlaces-sospechosos",
      "reconocer-pagina-falsa",
      "activar-2fa",
      "comprobar-email-filtraciones",
      "dni-marca-agua",
    ],
    relatedSimulatorId: "phishing",
    relatedChallengeId: "phishing",
    simulatorAvailable: true,
    heroImage: "/images/threats/phishing-visual-flow.png",
    heroImageAlt:
      "Escena educativa que resume un ataque de phishing paso a paso",
    simulationSteps: [
      {
        id: "preparacion-mensaje",
        nodeLabel: "Preparación",
        icon: "Search",
        title: "El atacante prepara un mensaje falso",
        description:
          "Se diseña una excusa creíble con apariencia de servicio legítimo.",
        riskLevel: "Medio",
        alertSignal: "Mensaje con urgencia y petición inesperada.",
        whatIsHappening:
          "El atacante combina marca, tono y pretexto para que el mensaje parezca familiar.",
        defenseTip:
          "Desconfía de solicitudes inesperadas y verifica por un canal independiente.",
        sceneType: "message-creation",
        optionalVisualLabels: ["Pretexto", "Urgencia", "Marca imitada"],
        technicalNote: "target_context = servicio + urgencia + identidad visual",
        mitigation: "Confirmar solicitudes inesperadas por un canal independiente.",
      },
      {
        id: "entrega-mensaje",
        nodeLabel: "Entrega",
        icon: "MailWarning",
        title: "La víctima recibe un email o SMS aparentemente legítimo",
        description:
          "El mensaje entra en la bandeja como si viniera de una entidad conocida.",
        riskLevel: "Alto",
        alertSignal: "Remitente parecido al real, pero no exacto.",
        whatIsHappening:
          "El atacante intenta pasar el primer filtro: que el usuario abra el mensaje.",
        defenseTip:
          "Revisa el remitente completo y no confíes solo en el nombre mostrado.",
        sceneType: "message-delivery",
        optionalVisualLabels: ["Bandeja", "Remitente sospechoso", "Asunto urgente"],
        technicalNote: "delivery_vector = email | sms | mensajería",
        mitigation: "Revisar remitente, dominio y contexto antes de abrir.",
      },
      {
        id: "mensaje-abierto",
        nodeLabel: "Apertura",
        icon: "Eye",
        title: "La víctima abre el mensaje",
        description:
          "El contenido usa lenguaje urgente para empujar una decisión rápida.",
        riskLevel: "Alto",
        alertSignal: "Amenaza de bloqueo o pérdida de acceso.",
        whatIsHappening:
          "El mensaje reduce el tiempo de reflexión y aumenta la presión emocional.",
        defenseTip:
          "Pausa, comprueba si esperabas ese aviso y busca señales de manipulación.",
        sceneType: "message-opened",
        optionalVisualLabels: ["Presión", "Botón principal", "Texto alarmista"],
        technicalNote: "social_pressure = urgencia + autoridad + consecuencia",
        mitigation: "No actuar con prisa ante mensajes que amenazan o presionan.",
      },
      {
        id: "enlace-sospechoso",
        nodeLabel: "Enlace",
        icon: "Route",
        title: "La víctima pulsa un enlace sospechoso",
        description:
          "El enlace parece legítimo, pero dirige a un dominio controlado por el atacante.",
        riskLevel: "Crítico",
        alertSignal: "URL parecida, acortada o con subdominios confusos.",
        whatIsHappening:
          "El enlace mueve a la víctima desde el canal original a una página falsa.",
        defenseTip:
          "Escribe la URL oficial manualmente o abre la app instalada.",
        sceneType: "suspicious-link",
        optionalVisualLabels: ["Dominio falso", "Click", "Redirección"],
        technicalNote: "redirect_target = lookalike_domain",
        mitigation: "Comprobar el dominio completo antes de introducir información.",
      },
      {
        id: "login-falso",
        nodeLabel: "Portal falso",
        icon: "PanelTop",
        title: "Se abre una página falsa de inicio de sesión",
        description:
          "La página copia colores, logotipo y formularios del servicio real.",
        riskLevel: "Crítico",
        alertSignal: "La URL no coincide con el dominio oficial.",
        whatIsHappening:
          "La interfaz busca generar confianza visual mientras oculta el dominio real.",
        defenseTip:
          "Comprueba la barra de direcciones antes de escribir cualquier credencial.",
        sceneType: "fake-login",
        optionalVisualLabels: ["URL falsa", "Formulario imitado", "Logo copiado"],
        technicalNote: "fake_portal = cloned_ui + credential_form",
        mitigation: "Usar gestor de contraseñas; no autocompletará en dominios falsos.",
      },
      {
        id: "envio-credenciales",
        nodeLabel: "Credenciales",
        icon: "KeyRound",
        title: "La víctima introduce sus credenciales",
        description:
          "Usuario y contraseña se escriben en un formulario controlado por el atacante.",
        riskLevel: "Crítico",
        alertSignal: "Solicitud de contraseña o código sin haber iniciado una acción real.",
        whatIsHappening:
          "Los datos no van al servicio legítimo: se envían al atacante o a un panel intermedio.",
        defenseTip:
          "No introduzcas credenciales si llegaste desde un enlace inesperado.",
        sceneType: "credential-submit",
        optionalVisualLabels: ["Usuario", "Contraseña", "Enviar"],
        technicalNote: "credential_submit = username + password",
        mitigation: "Detener el proceso y acceder desde el canal oficial.",
      },
      {
        id: "captura-datos",
        nodeLabel: "Captura",
        icon: "DatabaseZap",
        title: "El atacante captura los datos",
        description:
          "Las credenciales quedan almacenadas para probar acceso al servicio real.",
        riskLevel: "Crítico",
        alertSignal: "Redirección extraña o error después de iniciar sesión.",
        whatIsHappening:
          "El atacante ya tiene datos reutilizables y puede intentar entrar rápidamente.",
        defenseTip:
          "Cambia la contraseña y cierra sesiones si sospechas que introdujiste datos.",
        sceneType: "credential-capture",
        optionalVisualLabels: ["Panel atacante", "Credenciales capturadas", "Intento de acceso"],
        technicalNote: "capture_store = credential_dump",
        mitigation: "Rotar contraseña, revisar sesiones y activar 2FA.",
      },
      {
        id: "cuenta-comprometida",
        nodeLabel: "Compromiso",
        icon: "ShieldAlert",
        title: "La cuenta queda comprometida",
        description:
          "El atacante intenta iniciar sesión, cambiar recuperación o leer información privada.",
        riskLevel: "Crítico",
        alertSignal: "Inicio de sesión desde ubicación o dispositivo desconocido.",
        whatIsHappening:
          "La cuenta puede usarse para fraude, spam, robo de datos o nuevos ataques.",
        defenseTip:
          "Activa alertas de inicio de sesión y revisa actividad reciente.",
        sceneType: "compromised-account",
        optionalVisualLabels: ["Sesión nueva", "Alerta", "Actividad anómala"],
        technicalNote: "account_takeover_attempt = valid_credentials",
        mitigation: "Cerrar sesiones, cambiar contraseña y revisar métodos de recuperación.",
      },
      {
        id: "defensa",
        nodeLabel: "Defensa",
        icon: "ShieldCheck",
        title: "Cómo defenderse o cortar el ataque",
        description:
          "La cadena puede romperse verificando URL, evitando enlaces inesperados y usando MFA.",
        riskLevel: "Bajo",
        alertSignal: "La mejor señal es detectar el engaño antes de entregar datos.",
        whatIsHappening:
          "Las defensas reducen la probabilidad de captura y limitan el impacto si una contraseña se filtra.",
        defenseTip:
          "Usa MFA, gestor de contraseñas, revisión de URL y reporte de mensajes sospechosos.",
        sceneType: "defense",
        optionalVisualLabels: ["MFA", "URL verificada", "Reporte"],
        technicalNote: "defense_chain = verify_url + mfa + report",
        mitigation: "Combinar hábitos de verificación con controles técnicos.",
      },
    ],
  },
  {
    id: "sql-injection",
    name: "SQL Injection",
    icon: "DatabaseZap",
    category: "Aplicaciones web",
    riskLevel: "Alto",
    difficulty: "Intermedio",
    shortDescription:
      "Entradas maliciosas que alteran consultas a bases de datos.",
    overview:
      "SQL Injection ocurre cuando una aplicación mezcla entrada del usuario con consultas SQL sin parametrización segura.",
    howItWorks:
      "El atacante prueba campos o parámetros para modificar la consulta y extraer, alterar o borrar información.",
    flowSteps: [
      { title: "Entrada", icon: "PanelTop", description: "Se localiza un campo que afecta a una consulta." },
      { title: "Prueba", icon: "Code2", description: "Se envían caracteres especiales para observar cambios." },
      { title: "Extracción", icon: "DatabaseZap", description: "Se refinan payloads para leer datos no autorizados." },
      { title: "Pivot", icon: "Route", description: "Se buscan tokens, usuarios o privilegios útiles." },
    ],
    impactSummary:
      "Puede exponer datos personales, modificar registros o permitir bypass de autenticación.",
    warningSigns: [
      "Errores de base de datos visibles.",
      "Parámetros sin validación de tipo o formato.",
      "Consultas construidas por concatenación.",
    ],
    mitigations: [
      "Usar consultas parametrizadas u ORM seguro.",
      "Validar tipo, longitud y formato.",
      "Aplicar privilegios mínimos en base de datos.",
    ],
    relatedSafetyTipIds: ["verificar-app-fiable"],
    relatedSimulatorId: "sql-injection",
    relatedChallengeId: "sql-injection",
    simulatorAvailable: true,
  },
  {
    id: "xss",
    name: "XSS",
    icon: "Code2",
    category: "Aplicaciones web",
    riskLevel: "Alto",
    difficulty: "Intermedio",
    shortDescription:
      "Ejecución de scripts en el navegador mediante contenido no confiable.",
    overview:
      "XSS aparece cuando una aplicación renderiza contenido no confiable sin escape o sanitización adecuada.",
    howItWorks:
      "El atacante introduce código en formularios, URLs o contenido persistente que se ejecuta en sesiones de otros usuarios.",
    flowSteps: [
      { title: "Entrada", icon: "PanelTop", description: "Se encuentra un campo que muestra contenido del usuario." },
      { title: "Inyección", icon: "Code2", description: "Se prueba si el navegador interpreta el contenido." },
      { title: "Ejecución", icon: "MonitorUp", description: "El script corre en el contexto de la aplicación." },
      { title: "Abuso", icon: "ShieldAlert", description: "Se intenta robar sesión o manipular la interfaz." },
    ],
    impactSummary:
      "Puede permitir robo de tokens, cambios de interfaz o redirecciones a sitios maliciosos.",
    warningSigns: [
      "Campos que aceptan HTML sin control.",
      "Uso de renderizado peligroso.",
      "URLs con scripts o eventos embebidos.",
    ],
    mitigations: [
      "Escapar contenido por defecto.",
      "Sanitizar HTML permitido.",
      "Aplicar Content Security Policy.",
    ],
    relatedSafetyTipIds: ["verificar-app-fiable"],
    simulatorAvailable: false,
  },
  {
    id: "brute-force",
    name: "Brute Force",
    icon: "LockKeyhole",
    category: "Autenticación",
    riskLevel: "Medio",
    difficulty: "Inicial",
    shortDescription:
      "Intentos automatizados de contraseña hasta encontrar una combinación válida.",
    overview:
      "La fuerza bruta automatiza pruebas de acceso contra cuentas, paneles o servicios expuestos.",
    howItWorks:
      "Usa listas de contraseñas comunes, credenciales filtradas o patrones repetidos contra formularios de login.",
    flowSteps: [
      { title: "Usuarios", icon: "Users", description: "Se reúne una lista de cuentas objetivo." },
      { title: "Diccionario", icon: "ListChecks", description: "Se prepara una lista de contraseñas probables." },
      { title: "Automatización", icon: "RefreshCw", description: "Se lanzan intentos repetidos." },
      { title: "Acceso", icon: "KeyRound", description: "Se validan credenciales que funcionan." },
    ],
    impactSummary:
      "Puede causar toma de cuentas, abuso de servicios y bloqueos masivos.",
    warningSigns: [
      "Muchos intentos fallidos.",
      "Accesos desde ubicaciones inusuales.",
      "Intentos contra usuarios inactivos.",
    ],
    mitigations: [
      "Rate limiting y bloqueo progresivo.",
      "Autenticación en dos factores.",
      "Detección de contraseñas filtradas.",
    ],
    relatedSafetyTipIds: ["activar-2fa"],
    simulatorAvailable: false,
  },
  {
    id: "ransomware",
    name: "Ransomware",
    icon: "FileLock2",
    category: "Malware",
    riskLevel: "Crítico",
    difficulty: "Avanzado",
    shortDescription:
      "Malware que cifra datos o sistemas para exigir un rescate.",
    overview:
      "El ransomware combina acceso inicial, movimiento lateral, exfiltración y cifrado para presionar a la víctima.",
    howItWorks:
      "Puede entrar mediante phishing, credenciales robadas o vulnerabilidades sin parchear.",
    flowSteps: [
      { title: "Entrada", icon: "DoorOpen", description: "Se consigue acceso inicial al entorno." },
      { title: "Expansión", icon: "Route", description: "Se elevan privilegios y se busca alcance." },
      { title: "Exfiltración", icon: "UploadCloud", description: "Se copian datos para presión adicional." },
      { title: "Cifrado", icon: "FileLock2", description: "Se bloquean archivos o sistemas críticos." },
    ],
    impactSummary:
      "Puede interrumpir operaciones, provocar pérdida de datos y exposición pública de información sensible.",
    warningSigns: [
      "Procesos de cifrado anómalos.",
      "Accesos administrativos inesperados.",
      "Copias masivas fuera de horario.",
    ],
    mitigations: [
      "Copias de seguridad aisladas y probadas.",
      "Segmentación de red.",
      "EDR y monitorización de comportamiento.",
    ],
    relatedSafetyTipIds: ["revisar-enlaces-sospechosos", "activar-2fa"],
    simulatorAvailable: false,
  },
  {
    id: "man-in-the-middle",
    name: "Man-in-the-Middle",
    icon: "Wifi",
    category: "Redes",
    riskLevel: "Alto",
    difficulty: "Avanzado",
    shortDescription:
      "Intercepción de comunicaciones entre usuario y servicio.",
    overview:
      "Un atacante se sitúa entre dos partes para observar, degradar o manipular tráfico si el canal no está protegido.",
    howItWorks:
      "Puede apoyarse en Wi-Fi inseguro, certificados falsos, DNS manipulado o puntos de acceso fraudulentos.",
    flowSteps: [
      { title: "Posición", icon: "Wifi", description: "El atacante queda en el camino del tráfico." },
      { title: "Intercepción", icon: "Eye", description: "Observa solicitudes y respuestas." },
      { title: "Manipulación", icon: "Shuffle", description: "Altera datos si el canal lo permite." },
      { title: "Captura", icon: "KeyRound", description: "Obtiene credenciales, sesiones o datos privados." },
    ],
    impactSummary:
      "Puede exponer credenciales, manipular transacciones y capturar datos en redes inseguras.",
    warningSigns: [
      "Avisos de certificado.",
      "Redes Wi-Fi abiertas con nombres parecidos.",
      "Redirecciones inesperadas.",
    ],
    mitigations: [
      "Usar HTTPS y no ignorar avisos de certificado.",
      "Evitar redes públicas para operaciones sensibles.",
      "Usar VPN confiable cuando sea apropiado.",
    ],
    relatedSafetyTipIds: ["dni-marca-agua", "revisar-enlaces-sospechosos"],
    simulatorAvailable: false,
  },
];

export function getThreatById(id: string) {
  return threats.find((threat) => threat.id === id);
}
