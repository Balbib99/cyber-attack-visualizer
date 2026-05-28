import type { AttackSimulator } from "@/types/simulator";

export const simulators: AttackSimulator[] = [
  {
    id: "phishing",
    threatId: "phishing",
    title: "Simulador de phishing",
    subtitle:
      "Aprende cómo un mensaje falso puede convertirse en robo de credenciales.",
    description:
      "Recorre paso a paso un ataque de phishing y descubre qué señales de alerta deberías revisar antes de hacer clic o introducir tus datos.",
    category: "Ingeniería social",
    riskLevel: "crítico",
    estimatedTime: "4-5 min",
    status: "available",
    relatedChallengeId: "phishing",
    relatedTipIds: [
      "revisar-enlaces-sospechosos",
      "reconocer-pagina-falsa",
      "activar-2fa",
    ],
    previewImage: "/images/simulators/phishing/step-01-message-fake.webp",
    previewImageAlt: "Vista previa del simulador de phishing",
    steps: [
      {
        id: "mensaje-falso",
        order: 1,
        title: "Mensaje falso",
        image: "/images/simulators/phishing/step-01-message-fake.webp",
        imageAlt: "Mensaje falso preparado por un atacante",
        shortDescription: "El atacante diseña un mensaje que parece legítimo.",
        whatIsHappening:
          "El ataque comienza con un mensaje preparado para generar confianza, urgencia o miedo.",
        alertSignal: "Asunto alarmista, remitente extraño o petición inesperada.",
        defenseTip:
          "Desconfía de mensajes urgentes que te pidan actuar de inmediato.",
        riskLevel: "medio",
      },
      {
        id: "mensaje-recibido",
        order: 2,
        title: "Mensaje recibido",
        image: "/images/simulators/phishing/step-02-message-received.webp",
        imageAlt: "Usuario recibiendo un mensaje sospechoso",
        shortDescription: "La víctima recibe el mensaje en su correo o móvil.",
        whatIsHappening:
          "El mensaje llega como si procediera de un servicio conocido, aunque realmente no lo sea.",
        alertSignal:
          "Remitente poco claro o dominio que no coincide con el servicio real.",
        defenseTip: "Revisa siempre quién envía el mensaje antes de interactuar.",
        riskLevel: "alto",
      },
      {
        id: "mensaje-abierto",
        order: 3,
        title: "Mensaje abierto",
        image: "/images/simulators/phishing/step-03-message-opened.webp",
        imageAlt: "Mensaje de phishing abierto con llamada a la acción",
        shortDescription:
          "La víctima abre el mensaje y encuentra una llamada a la acción.",
        whatIsHappening:
          "El contenido intenta convencer a la víctima para pulsar un botón o enlace.",
        alertSignal: "Lenguaje urgente, amenazas o promesas demasiado llamativas.",
        defenseTip:
          "No actúes desde el propio mensaje si tienes dudas. Accede escribiendo la web oficial.",
        riskLevel: "alto",
      },
      {
        id: "clic-enlace",
        order: 4,
        title: "Clic en el enlace",
        image: "/images/simulators/phishing/step-04-link-click.webp",
        imageAlt: "Clic en un enlace sospechoso",
        shortDescription: "La víctima pulsa un enlace sin verificarlo.",
        whatIsHappening:
          "El enlace redirige a una página controlada por el atacante o a un entorno fraudulento.",
        alertSignal: "URL acortada, dominio extraño o dirección distinta a la oficial.",
        defenseTip:
          "Antes de hacer clic, pasa el cursor sobre el enlace o verifica la dirección.",
        riskLevel: "crítico",
      },
      {
        id: "pagina-falsa",
        order: 5,
        title: "Página falsa",
        image: "/images/simulators/phishing/step-05-fake-login.webp",
        imageAlt: "Página falsa de inicio de sesión",
        shortDescription:
          "Se abre una página que imita un inicio de sesión real.",
        whatIsHappening:
          "La página busca que la víctima introduzca sus credenciales creyendo que está en un servicio legítimo.",
        alertSignal: "URL incorrecta, errores visuales o ausencia de señales de confianza.",
        defenseTip:
          "Comprueba siempre la URL antes de introducir usuario y contraseña.",
        riskLevel: "crítico",
      },
      {
        id: "credenciales-capturadas",
        order: 6,
        title: "Credenciales capturadas",
        image: "/images/simulators/phishing/step-06-credentials-captured.webp",
        imageAlt: "Credenciales capturadas por un atacante",
        shortDescription: "Los datos introducidos llegan al atacante.",
        whatIsHappening:
          "La víctima envía sus credenciales a una página falsa, y el atacante puede intentar usarlas.",
        alertSignal:
          "Inicio de sesión inesperado, redirecciones extrañas o actividad posterior sospechosa.",
        defenseTip:
          "Activa MFA y cambia la contraseña si sospechas que has introducido datos en una web falsa.",
        riskLevel: "crítico",
      },
      {
        id: "cuenta-comprometida",
        order: 7,
        title: "Cuenta comprometida",
        image: "/images/simulators/phishing/step-07-account-compromised.webp",
        imageAlt: "Cuenta comprometida tras un ataque de phishing",
        shortDescription:
          "El atacante puede acceder a la cuenta o usar la información robada.",
        whatIsHappening:
          "El impacto puede incluir robo de datos, suplantación o acceso a otros servicios.",
        alertSignal:
          "Accesos desconocidos, cambios de contraseña o actividad no reconocida.",
        defenseTip:
          "Revisa sesiones activas, cambia contraseñas y contacta con el soporte del servicio.",
        riskLevel: "crítico",
      },
      {
        id: "defensa",
        order: 8,
        title: "Defensa",
        image: "/images/simulators/phishing/step-08-defense.webp",
        imageAlt: "Medidas de defensa contra phishing",
        shortDescription:
          "Varias medidas pueden cortar el ataque antes de que tenga éxito.",
        whatIsHappening:
          "La prevención se basa en verificar remitente, revisar enlaces, usar MFA y no introducir credenciales desde enlaces sospechosos.",
        alertSignal:
          "Cualquier solicitud inesperada de datos personales o credenciales debe revisarse con calma.",
        defenseTip:
          "Verifica antes de hacer clic, usa MFA y reporta mensajes sospechosos.",
        riskLevel: "bajo",
      },
    ],
  },
  {
    id: "sql-injection",
    threatId: "sql-injection",
    title: "Simulador de SQL Injection",
    subtitle:
      "Aprende cómo una entrada no controlada puede poner en riesgo una base de datos.",
    description:
      "Visualiza de forma segura y abstracta cómo una aplicación vulnerable puede exponer información si no valida correctamente las entradas ni usa consultas seguras.",
    category: "Seguridad web",
    riskLevel: "crítico",
    estimatedTime: "4-5 min",
    status: "available",
    relatedChallengeId: "sql-injection",
    relatedTipIds: ["verificar-app-fiable"],
    previewImage:
      "/images/simulators/sql-injection/step-01-vulnerable-form.webp",
    previewImageAlt: "Vista previa del simulador de SQL Injection",
    steps: [
      {
        id: "formulario-vulnerable",
        order: 1,
        title: "Formulario vulnerable",
        image: "/images/simulators/sql-injection/step-01-vulnerable-form.webp",
        imageAlt: "Formulario web conectado a una base de datos",
        shortDescription: "Una aplicación recibe datos desde un formulario.",
        whatIsHappening:
          "El usuario introduce información en un campo que la aplicación enviará al servidor.",
        alertSignal:
          "Si la entrada no se valida, puede convertirse en un punto vulnerable.",
        defenseTip: "Valida y controla siempre los datos recibidos desde formularios.",
        riskLevel: "medio",
      },
      {
        id: "entrada-manipulada",
        order: 2,
        title: "Entrada manipulada",
        image: "/images/simulators/sql-injection/step-02-malicious-input.webp",
        imageAlt: "Campo de entrada manipulado de forma abstracta",
        shortDescription:
          "El atacante introduce una entrada diseñada para alterar la lógica.",
        whatIsHappening:
          "La entrada intenta modificar cómo la aplicación interpreta la petición.",
        alertSignal:
          "Caracteres inesperados, patrones anómalos o entradas fuera del formato esperado.",
        defenseTip:
          "No confíes en la entrada del usuario. Aplica validación y consultas parametrizadas.",
        riskLevel: "alto",
      },
      {
        id: "consulta-insegura",
        order: 3,
        title: "Consulta insegura",
        image: "/images/simulators/sql-injection/step-03-unsafe-query.webp",
        imageAlt: "Consulta insegura representada de forma abstracta",
        shortDescription:
          "La aplicación construye una consulta sin protección suficiente.",
        whatIsHappening:
          "El riesgo aparece cuando los datos del usuario se mezclan de forma insegura con la consulta.",
        alertSignal:
          "Construcción dinámica de consultas sin separación clara entre datos e instrucciones.",
        defenseTip: "Usa consultas parametrizadas u ORM configurado correctamente.",
        riskLevel: "crítico",
      },
      {
        id: "datos-expuestos",
        order: 4,
        title: "Datos expuestos",
        image: "/images/simulators/sql-injection/step-04-database-exposed.webp",
        imageAlt: "Base de datos expuesta de forma conceptual",
        shortDescription: "La base de datos puede quedar expuesta.",
        whatIsHappening:
          "Una consulta insegura puede permitir acceder a información que no debería estar disponible.",
        alertSignal:
          "Respuestas anómalas, errores de base de datos o datos inesperados en pantalla.",
        defenseTip: "Oculta errores internos, limita permisos y valida cada operación.",
        riskLevel: "crítico",
      },
      {
        id: "filtracion",
        order: 5,
        title: "Filtración",
        image: "/images/simulators/sql-injection/step-05-data-leak.webp",
        imageAlt: "Filtración de datos desde una base de datos",
        shortDescription: "La información sale del entorno protegido.",
        whatIsHappening:
          "Si el ataque tiene éxito, pueden filtrarse datos de usuarios o información sensible.",
        alertSignal:
          "Consultas inusuales, grandes volúmenes de datos o patrones de acceso extraños.",
        defenseTip: "Monitoriza accesos, limita resultados y aplica mínimos privilegios.",
        riskLevel: "crítico",
      },
      {
        id: "acceso-no-autorizado",
        order: 6,
        title: "Acceso no autorizado",
        image:
          "/images/simulators/sql-injection/step-06-unauthorized-access.webp",
        imageAlt: "Acceso no autorizado representado con una puerta digital",
        shortDescription:
          "El atacante puede saltarse controles o acceder a zonas restringidas.",
        whatIsHappening:
          "Una vulnerabilidad puede permitir acciones no previstas por la aplicación.",
        alertSignal:
          "Cambios de permisos, accesos administrativos inesperados o acciones fuera del flujo normal.",
        defenseTip:
          "Aplica autorización en servidor y no dependas solo de controles de interfaz.",
        riskLevel: "crítico",
      },
      {
        id: "impacto",
        order: 7,
        title: "Impacto",
        image: "/images/simulators/sql-injection/step-07-business-impact.webp",
        imageAlt: "Impacto de SQL Injection en una aplicación",
        shortDescription:
          "La vulnerabilidad afecta a datos, servicio y confianza.",
        whatIsHappening:
          "El impacto puede incluir exposición de datos, interrupción del servicio, pérdida de confianza y riesgo legal.",
        alertSignal:
          "Alertas de seguridad, comportamiento irregular o incidentes de datos.",
        defenseTip:
          "Registra eventos, revisa logs y aplica un plan de respuesta a incidentes.",
        riskLevel: "alto",
      },
      {
        id: "defensa",
        order: 8,
        title: "Defensa",
        image: "/images/simulators/sql-injection/step-08-defense.webp",
        imageAlt: "Defensas contra SQL Injection",
        shortDescription:
          "El ataque puede prevenirse con buenas prácticas de desarrollo seguro.",
        whatIsHappening:
          "La defensa se basa en separar datos de instrucciones, validar entradas y limitar permisos.",
        alertSignal:
          "La ausencia de validación, pruebas de seguridad o control de permisos aumenta el riesgo.",
        defenseTip:
          "Usa consultas parametrizadas, validación, mínimos privilegios, logs y revisiones de seguridad.",
        riskLevel: "bajo",
      },
    ],
  },
];

export function getSimulatorById(id: string) {
  return simulators.find((simulator) => simulator.id === id);
}
