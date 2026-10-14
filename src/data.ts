import type { ExperienceItem, Project, ProjectCategory, TechnologyGroup } from './types'

export const siteConfig = {
  name: 'Diego de Luna',
  initials: 'DDL',
  role: 'Desarrollo de software · Automatización · Sistemas',
  location: 'Aguascalientes, México',
  email: 'jacoblunade@gmail.com',
  education:
    'Ingeniería en Tecnologías de la Información e Innovación Digital — Universidad Tecnológica Metropolitana de Aguascalientes',
  english: 'Inglés B2',
  // Añade el PDF a public/ y cambia este valor, por ejemplo: '/cv-diego-de-luna.pdf'.
  cvUrl: null as string | null,
  availability: {
    visible: true,
    label: 'Disponible para oportunidades junior, trainee y prácticas',
  },
  links: {
    github: 'https://github.com/Diego7124',
    linkedin: 'https://linkedin.com/in/diego-jacob-de-luna-de-la-cruz-a843a235',
  },
} as const

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const technologyGroups: TechnologyGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    eyebrow: 'Interfaces y experiencia',
    description: 'Construcción de interfaces responsive y flujos claros para web y móvil.',
    items: [
      { name: 'JavaScript / TypeScript', use: 'Lógica de interfaz, tipado y consumo de servicios' },
      { name: 'React', use: 'Componentes, estado y aplicaciones de una sola página' },
      { name: 'React Native', use: 'Experiencias móviles con Expo' },
      { name: 'HTML5 / CSS3', use: 'Semántica, accesibilidad y diseño adaptable' },
      { name: 'Vite / Material UI', use: 'Tooling rápido y sistemas de interfaz consistentes' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    eyebrow: 'APIs y lógica de negocio',
    description: 'Servicios que conectan interfaces, reglas de negocio e integraciones externas.',
    items: [
      { name: 'Node.js / Express', use: 'APIs REST, middleware y servicios empresariales' },
      { name: 'Python', use: 'Automatización, datos y servicios backend' },
      { name: 'Flask', use: 'Aplicaciones web y organización de lógica de negocio' },
      { name: 'FastAPI', use: 'APIs tipadas en proyectos móviles y biométricos' },
      { name: 'REST / Swagger', use: 'Contratos de integración y documentación de endpoints' },
    ],
  },
  {
    id: 'data',
    title: 'Datos',
    eyebrow: 'Persistencia y modelos',
    description: 'Elección y conexión de persistencia según las necesidades de cada sistema.',
    items: [
      { name: 'SQL / PostgreSQL', use: 'Modelado relacional y consultas' },
      { name: 'Firebase / Firestore', use: 'Autenticación y datos para aplicaciones web y móviles' },
      { name: 'MongoDB', use: 'Persistencia documental en proyectos concretos' },
      { name: 'SQLAlchemy', use: 'Modelos ORM y acceso a datos desde Python' },
      { name: 'Flask-Migrate', use: 'Evolución controlada del esquema de base de datos' },
    ],
  },
  {
    id: 'tooling',
    title: 'Integración',
    eyebrow: 'Entrega y colaboración',
    description: 'Herramientas para conectar servicios, documentar y mantener el trabajo visible.',
    items: [
      { name: 'Git / GitHub', use: 'Control de versiones y colaboración' },
      { name: 'APIs externas', use: 'Integración de correo, inventario y otros servicios' },
      { name: 'Microsoft 365', use: 'Soporte, identidad y herramientas empresariales' },
      { name: 'Python / Excel', use: 'Automatización y análisis de información' },
      { name: 'Despliegue web', use: 'Configuración, diagnóstico y mantenimiento de aplicaciones' },
    ],
  },
  {
    id: 'systems',
    title: 'Sistemas',
    eyebrow: 'Operación y soporte',
    description: 'Resolución de incidencias con una mirada completa: usuario, aplicación e infraestructura.',
    items: [
      { name: 'Autenticación y permisos', use: 'Análisis de acceso, roles y cuentas' },
      { name: 'CORS e integración', use: 'Diagnóstico entre frontend, backend y servicios' },
      { name: 'Equipos y software', use: 'Preparación, configuración y mantenimiento' },
      { name: 'VPN y conectividad', use: 'Diagnóstico de red y periféricos' },
      { name: 'Bitácoras y respaldos', use: 'Documentación y continuidad operativa' },
    ],
  },
]

export const projectFilters: Array<'Todos' | ProjectCategory> = [
  'Todos',
  'Frontend',
  'Backend',
  'Full Stack',
  'Automatización',
  'Sistemas',
]

export const projects: Project[] = [
  {
    id: 'control-asistencia-qr',
    number: '01',
    title: 'Sistema de control de asistencia con QR',
    shortTitle: 'Asistencia QR',
    summary:
      'Mantenimiento y evolución de un sistema interno de asistencia, con foco en registros, ubicaciones, autenticación y continuidad operativa.',
    type: 'Sistema empresarial',
    visibility: 'Caso anonimizado · sin repositorio público',
    categories: ['Full Stack', 'Sistemas'],
    technologies: ['React', 'JavaScript', 'APIs REST', 'Firebase', 'Microsoft Identity'],
    contribution:
      'Atendí incidencias, ajusté el flujo de registro y la bitácora, trabajé con identificadores de empleados y ubicaciones, y participé en cambios de autenticación y permisos.',
    problem:
      'Un sistema de asistencia en operación necesita registros consistentes y una integración confiable entre usuarios, ubicaciones, permisos y servicios de identidad.',
    objective:
      'Mantener estable el flujo existente y evolucionarlo sin interrumpir el uso cotidiano de la herramienta.',
    architecture: [
      'Interfaz web en React para los flujos de registro y consulta.',
      'Servicios API y Firebase para autenticación y datos, según el componente.',
      'Integración de identidad orientada a usuarios de Microsoft.',
    ],
    challenges: [
      {
        title: 'Cambios sobre un sistema existente',
        solution: 'Revisión del flujo actual, correcciones acotadas y validación de la integración antes del despliegue.',
      },
      {
        title: 'Autenticación y permisos',
        solution: 'Análisis de acceso y adaptación del inicio de sesión para reducir fricción con cuentas empresariales.',
      },
    ],
    results: [
      'Mejoras aplicadas al flujo de registro y a la bitácora.',
      'Incidencias de integración y despliegue atendidas.',
      'No se publican métricas ni datos operativos por tratarse de un sistema interno.',
    ],
    links: [],
    accent: 'blue',
    visual: 'flow',
  },
  {
    id: 'inventario-web',
    number: '02',
    title: 'Sistema de inventario web',
    shortTitle: 'Inventario web',
    summary:
      'Aplicación cliente-servidor para organizar productos, movimientos, permisos y reportes dentro de una operación de inventario.',
    type: 'Aplicación full stack',
    visibility: 'API pública verificada en GitHub',
    categories: ['Full Stack', 'Backend', 'Sistemas'],
    technologies: ['React', 'Vite', 'Material UI', 'Node.js', 'Express', 'Firebase', 'Render'],
    contribution:
      'Trabajo sobre la separación frontend/backend, consumo de servicios, autenticación, manejo de datos y mantenimiento del sistema en despliegue.',
    problem:
      'La información de inventario necesita controles de acceso, trazabilidad de movimientos y una fuente de datos consistente para distintas áreas.',
    objective:
      'Ofrecer una base mantenible para consultar productos, registrar movimientos y obtener reportes sin mezclar la interfaz con la lógica del servidor.',
    architecture: [
      'Frontend React + Vite con componentes de Material UI.',
      'API REST en Node.js + Express con validación y manejo centralizado de errores.',
      'Firebase Admin y autenticación por token; despliegue backend preparado para Render.',
    ],
    challenges: [
      {
        title: 'Permisos por rol y área',
        solution: 'Middleware de autenticación y autorización para diferenciar administradores, inventario y usuarios.',
      },
      {
        title: 'Operación observable',
        solution: 'Logging con Winston, rate limiting y respuestas de error consistentes para facilitar diagnóstico.',
      },
    ],
    results: [
      'API con rutas para productos, áreas, usuarios, movimientos, reportes y dashboard.',
      'Protecciones de seguridad y validación documentadas en el repositorio público.',
      'Sin cifras de uso publicadas; el alcance se describe desde el código disponible.',
    ],
    links: [
      {
        label: 'Ver API en GitHub',
        href: 'https://github.com/Diego7124/cielitohome_storage_backend',
        kind: 'code',
      },
    ],
    accent: 'cyan',
    visual: 'inventory',
  },
  {
    id: 'check-in-app',
    number: '03',
    title: 'Gestión móvil de entradas y salidas',
    shortTitle: 'Check-in móvil',
    summary:
      'Aplicación móvil para registrar check-in y check-out con geolocalización, historial personal y vista administrativa.',
    type: 'Aplicación móvil',
    visibility: 'Repositorio público verificado',
    categories: ['Frontend', 'Full Stack'],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase Auth', 'Firestore', 'Expo Location'],
    contribution:
      'Implementación de autenticación, navegación protegida, captura de ubicación y separación de vistas para usuario y administración.',
    problem:
      'Los registros de entrada y salida requieren contexto de tiempo, ubicación y permisos para ser útiles y confiables.',
    objective:
      'Concentrar el registro móvil y la consulta de historial en una experiencia directa, con acceso según el rol del usuario.',
    architecture: [
      'Aplicación React Native con navegación basada en archivos mediante Expo Router.',
      'Firebase Authentication para identidad y Firestore para persistencia.',
      'Servicio de ubicación de Expo para asociar contexto geográfico al registro.',
    ],
    challenges: [
      {
        title: 'Acceso seguro a información',
        solution: 'Rutas protegidas y reglas para limitar la lectura personal, reservando la vista global al rol administrador.',
      },
      {
        title: 'Experiencia móvil contextual',
        solution: 'Integración de timestamps, geolocalización y estados claros de check-in/check-out.',
      },
    ],
    results: [
      'Flujos de autenticación y registro documentados en el repositorio.',
      'Historial personal, búsqueda y filtros administrativos implementados.',
      'No se reportan métricas de adopción o uso.',
    ],
    links: [
      {
        label: 'Ver código',
        href: 'https://github.com/Diego7124/CheckInApp',
        kind: 'code',
      },
    ],
    accent: 'violet',
    visual: 'mobile',
  },
  {
    id: 'control-cambios',
    number: '04',
    title: 'Gestor de control de cambios',
    shortTitle: 'Control de cambios',
    summary:
      'Backend para organizar solicitudes y registros de cambios de software con un modelo relacional y migraciones controladas.',
    type: 'Aplicación backend',
    visibility: 'Caso privado · información técnica proporcionada',
    categories: ['Backend', 'Sistemas'],
    technologies: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Flask-Migrate'],
    contribution:
      'Desarrollo de la capa backend, modelado de datos y organización de migraciones para mantener la evolución del esquema.',
    problem:
      'Los cambios de software necesitan un registro estructurado para conocer qué se solicita, qué se modifica y cómo evoluciona el proceso.',
    objective:
      'Centralizar la información de cambios en una aplicación con persistencia relacional y una base fácil de mantener.',
    architecture: [
      'Aplicación Flask para rutas, reglas y manejo de solicitudes.',
      'PostgreSQL como base relacional y SQLAlchemy como capa ORM.',
      'Flask-Migrate para versionar cambios del esquema.',
    ],
    challenges: [
      {
        title: 'Evolución del modelo de datos',
        solution: 'Migraciones reproducibles para introducir cambios sin recrear manualmente la base.',
      },
      {
        title: 'Trazabilidad técnica',
        solution: 'Organización de entidades y relaciones alrededor del ciclo de una solicitud de cambio.',
      },
    ],
    results: [
      'Base backend organizada para registrar y consultar cambios.',
      'Esquema versionado mediante migraciones.',
      'Sin repositorio, capturas ni métricas públicas confirmadas.',
    ],
    links: [],
    accent: 'orange',
    visual: 'changes',
  },
  {
    id: 'telegram-sheets',
    number: '05',
    title: 'Bot de Telegram para automatización',
    shortTitle: 'Bot + Sheets',
    summary:
      'Integración en Python entre Telegram y Google Sheets para facilitar consultas, captura de información y tareas repetitivas.',
    type: 'Automatización',
    visibility: 'Caso privado · información técnica proporcionada',
    categories: ['Automatización', 'Backend'],
    technologies: ['Python', 'python-telegram-bot', 'Google Sheets'],
    contribution:
      'Construcción del flujo de interacción del bot y conexión con hojas de cálculo como fuente sencilla de información.',
    problem:
      'Consultar o capturar datos manualmente en una hoja puede añadir pasos y fricción a tareas frecuentes.',
    objective:
      'Llevar acciones concretas a una interfaz conversacional accesible desde Telegram.',
    architecture: [
      'Comandos y manejadores implementados con python-telegram-bot.',
      'Capa de integración para leer o registrar información en Google Sheets.',
      'Respuestas conversacionales orientadas a tareas puntuales.',
    ],
    challenges: [
      {
        title: 'Datos de entrada variables',
        solution: 'Flujos guiados y validación antes de consultar o escribir información.',
      },
      {
        title: 'Siguiente evolución posible',
        solution: 'Como mejora futura: roles, auditoría y manejo más granular de errores; no se presentan como funciones actuales.',
      },
    ],
    results: [
      'Integración funcional planteada alrededor de Telegram y Google Sheets.',
      'Automatización de pasos de consulta o captura sin afirmar métricas no verificadas.',
      'Sin enlace público confirmado.',
    ],
    links: [],
    accent: 'green',
    visual: 'bot',
  },
  {
    id: 'checador-facial',
    number: '06',
    title: 'Checador con reconocimiento facial',
    shortTitle: 'Asistencia facial',
    summary:
      'Sistema móvil de asistencia con reconocimiento facial, horarios, permisos y reportes para perfiles de usuario y administración.',
    type: 'Proyecto full stack',
    visibility: 'Repositorio público verificado',
    categories: ['Full Stack', 'Backend', 'Sistemas'],
    technologies: ['React Native', 'Expo', 'FastAPI', 'Python', 'SQLAlchemy', 'DeepFace'],
    contribution:
      'Desarrollo de la aplicación móvil y API, autenticación con JWT, persistencia y flujo biométrico para registro y verificación.',
    problem:
      'El control de asistencia necesita identificar al usuario, validar reglas de entrada/salida y mantener historiales útiles para distintos roles.',
    objective:
      'Construir una experiencia móvil integral que combine identidad, asistencia, horarios, permisos y reportes.',
    architecture: [
      'Frontend React Native + Expo con Zustand y Axios.',
      'API FastAPI con SQLAlchemy, autenticación JWT y base SQLite.',
      'DeepFace con ArcFace y RetinaFace para registro y comparación facial.',
    ],
    challenges: [
      {
        title: 'Consistencia biométrica',
        solution: 'Registro con varias capturas, promedio de embeddings y normalización antes de comparar.',
      },
      {
        title: 'Reglas del día',
        solution: 'Validación para evitar entradas duplicadas y exigir una entrada previa antes de la salida.',
      },
    ],
    results: [
      'Roles, horarios, permisos e historiales implementados según el README público.',
      'API con endpoints documentados y flujo de verificación facial.',
      'Sin métricas públicas de precisión en producción o número de usuarios.',
    ],
    links: [
      {
        label: 'Ver código',
        href: 'https://github.com/Diego7124/ChecadorTIID',
        kind: 'code',
      },
    ],
    accent: 'blue',
    visual: 'face',
  },
  {
    id: 'ticket-automation',
    number: '07',
    title: 'Automatización de tickets operativos',
    shortTitle: 'Ticket automation',
    summary:
      'Plataforma cliente-servidor para crear, revisar y dar seguimiento a tickets conectados con inventario, auditoría y notificaciones.',
    type: 'Aplicación full stack',
    visibility: 'Repositorio público verificado',
    categories: ['Full Stack', 'Backend', 'Automatización'],
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'Firestore', 'Resend', 'Swagger'],
    contribution:
      'Separación frontend/backend, servicios de tickets, integración de inventario, auditoría, notificaciones y visualización de métricas.',
    problem:
      'Un proceso de tickets que toca inventario y aprobaciones necesita estados claros, trazabilidad y comunicación entre participantes.',
    objective:
      'Unificar el ciclo del ticket y desacoplar la interfaz de las integraciones y reglas del servidor.',
    architecture: [
      'Frontend React + Vite para captura, historial, administración y analítica.',
      'API Express con servicios separados para tickets, inventario, stock y usuarios.',
      'Firestore, Firebase Auth, notificaciones de correo, documentos y eventos en tiempo real.',
    ],
    challenges: [
      {
        title: 'Integraciones con varios servicios',
        solution: 'Servicios desacoplados y un cliente de API para aislar inventario, correo, auditoría y documentos.',
      },
      {
        title: 'Seguimiento del flujo',
        solution: 'Estados explícitos, registros de auditoría y paneles para consultar el avance.',
      },
    ],
    results: [
      'Flujo de tickets y servicios de soporte visibles en el código público.',
      'Documentación Swagger y proveedores de correo configurables desde el backend.',
      'No se publican volúmenes de tickets ni datos internos.',
    ],
    links: [
      {
        label: 'Ver código',
        href: 'https://github.com/Diego7124/TicketAutomatization',
        kind: 'code',
      },
    ],
    accent: 'violet',
    visual: 'tickets',
  },
]

export const experience: ExperienceItem[] = [
  {
    index: 'A',
    title: 'Aplicaciones empresariales',
    context: 'Mantenimiento y mejora continua',
    description:
      'Participación práctica en sistemas existentes, atendiendo incidencias y cambios sin perder de vista la operación diaria.',
    points: [
      'Diagnóstico de autenticación, permisos, CORS e integración frontend/backend.',
      'Mantenimiento de flujos, bitácoras y datos operativos.',
      'Apoyo en despliegues, validación de cambios y seguimiento posterior.',
    ],
  },
  {
    index: 'B',
    title: 'Soporte y operación de TI',
    context: 'Usuarios, equipos y conectividad',
    description:
      'Resolución de problemas técnicos con comunicación clara y documentación suficiente para reducir reincidencias.',
    points: [
      'Preparación de equipos e instalación de aplicaciones empresariales.',
      'Soporte a Microsoft 365, OneDrive, VPN, conectividad y periféricos.',
      'Administración de accesos y permisos dentro del alcance asignado.',
    ],
  },
  {
    index: 'C',
    title: 'Automatización y documentación',
    context: 'Procesos repetibles y trazables',
    description:
      'Uso de software, scripts y documentación para hacer más consistentes las tareas técnicas y su seguimiento.',
    points: [
      'Automatización con Python y apoyo en análisis de datos con Excel.',
      'Elaboración de procedimientos, respaldos y bitácoras técnicas.',
      'Coordinación de cambios y seguimiento con distintas áreas.',
    ],
  },
]

export const workSteps = [
  { number: '01', title: 'Comprender', text: 'Aterrizo el problema, el contexto y quién necesita la solución.' },
  { number: '02', title: 'Diagnosticar', text: 'Reviso datos, flujo actual, restricciones y causa raíz.' },
  { number: '03', title: 'Diseñar', text: 'Defino una solución proporcionada y una forma clara de validarla.' },
  { number: '04', title: 'Implementar', text: 'Construyo por partes, pruebo integraciones y cuido los estados de error.' },
  { number: '05', title: 'Documentar', text: 'Dejo decisiones, configuración y uso comprensibles para el siguiente cambio.' },
  { number: '06', title: 'Mejorar', text: 'Doy seguimiento a lo desplegado y convierto hallazgos en ajustes concretos.' },
] as const
