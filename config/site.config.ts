import type { SiteConfig } from "./site.types";
import { validateConfig } from "@/lib/validate-config";

const pending = {
  conversationLimit: { es: "[a confirmar]", en: "[to be confirmed]" },
  validityDays: { es: "[a completar]", en: "[to be defined]" },
};

export const siteConfig: SiteConfig = validateConfig({
  site: {
    url: "https://presupuesto-concesionaria.vercel.app",
    defaultLocale: "es",
  },
  company: {
    name: "Generación IA",
    tagline: {
      es: "Agentes de ventas con inteligencia artificial",
      en: "AI-powered sales agents",
    },
    logo: "/generacion-ia-logo.jpg",
    website: "https://institutogeneracionia.com/",
    websiteLabel: "institutogeneracionia.com",
  },
  client: {
    name: "Espinosa Motos",
    city: "Mar del Plata",
    handle: "espinosamotos",
    initials: "EM",
    wordmark: { lead: "Espinosa", tail: "MOTOS" },
  },
  sections: [
    "hero",
    "scope",
    "benefits",
    "process",
    "includes",
    "maintenance",
    "investment",
    "nextSteps",
    "closing",
  ],
  navigation: ["scope", "benefits", "process", "maintenance", "investment"],
  hero: {
    eyebrow: { es: "Presupuesto", en: "Proposal" },
    titleLead: { es: "Agente de ventas con IA", en: "An AI sales agent" },
    titleTail: { es: "para Espinosa Motos", en: "for Espinosa Motos" },
    subtitle: {
      es: "Implementación y mantenimiento mensual de un asistente que atiende Instagram 24/7, precalifica crédito y lleva interesados al local.",
      en: "Implementation and monthly maintenance of an assistant that answers Instagram 24/7, pre-qualifies credit and brings buyers to the showroom.",
    },
    meta: [
      {
        label: { es: "Preparado para", en: "Prepared for" },
        value: { es: "Concesionaria de motos · Mar del Plata", en: "Motorcycle dealership · Mar del Plata" },
        showsClientWordmark: true,
      },
      {
        label: { es: "Preparado por", en: "Prepared by" },
        value: { es: "Generación IA", en: "Generación IA" },
      },
      {
        label: { es: "Fecha", en: "Date" },
        value: { es: "4 de noviembre de 2026", en: "November 4, 2026" },
      },
      {
        label: { es: "Moneda", en: "Currency" },
        value: { es: "Dólares estadounidenses (US$)", en: "US dollars (US$)" },
      },
    ],
    image: {
      src: "/hero-moto.jpg",
      alt: {
        es: "Moto naked negra con el faro encendido al atardecer, sobre un camino de ripio",
        en: "Black naked motorcycle with its headlight on at dusk, on a gravel road",
      },
    },
  },
  scope: {
    heading: {
      number: "01",
      title: { es: "Qué construimos", en: "What we build" },
      intro: {
        es: "Un asistente de ventas con inteligencia artificial, desarrollado a medida, que atiende los mensajes directos de Instagram de la concesionaria las 24 horas. Conversa con un tono personal, sin menús de opciones, entrenado con conversaciones reales de su cuenta, y aclara brevemente que es un asistente de IA.",
        en: "A custom-built AI sales assistant that answers the dealership's Instagram direct messages around the clock. It talks in a personal tone, with no option menus, trained on real conversations from your account, and briefly clarifies that it is an AI assistant.",
      },
    },
    chatStatus: { es: "Agente IA · en línea", en: "AI agent · online" },
    capabilities: [
      {
        glyph: "bolt",
        title: { es: "Respuesta inmediata", en: "Instant replies" },
        description: {
          es: "A cada consulta, también de noche, fines de semana y en los picos después de cada video.",
          en: "To every inquiry, also at night, on weekends and during the spikes after each video.",
        },
      },
      {
        glyph: "idCard",
        title: { es: "Precalificación de crédito por DNI", en: "Credit pre-qualification by ID" },
        description: {
          es: "Hoy se hace a mano en unas 4 plataformas. Si no califica, ofrece la financiación propia del local, siempre con aprobación de una persona.",
          en: "Today it's done by hand across about 4 platforms. If the buyer doesn't qualify, it offers in-house financing, always approved by a person.",
        },
      },
      {
        glyph: "calendar",
        title: { es: "Turnos y seguimiento", en: "Appointments and follow-up" },
        description: {
          es: "Invita a visitar el local o a una reunión online y hace el seguimiento a la semana.",
          en: "Invites buyers to the showroom or an online meeting and follows up a week later.",
        },
      },
      {
        glyph: "handoff",
        title: { es: "Derivación a una persona", en: "Hand-off to a person" },
        description: {
          es: "Desde una bandeja de atención compartida, con todo el historial a la vista.",
          en: "From a shared inbox, with the full conversation history in view.",
        },
      },
      {
        glyph: "chart",
        title: { es: "Reporte mensual", en: "Monthly report" },
        description: {
          es: "De consultas por modelo de moto, para orientar el contenido.",
          en: "Of inquiries per motorcycle model, to guide your content.",
        },
      },
    ],
    conversation: [
      {
        author: "buyer",
        text: { es: "Hola! Vi esta, ¿la tienen?", en: "Hi! Saw this one, do you have it?" },
        attachment: {
          src: "/espinosa-feed.png",
          alt: {
            es: "Publicación de Espinosa Motos con una moto adventure y el título Conocé las opciones",
            en: "Espinosa Motos post showing an adventure motorcycle with the headline Conocé las opciones",
          },
        },
      },
      {
        author: "agent",
        text: {
          es: "¡Hola! Sí, la tenemos. ¿La buscás para ruta o para ciudad?",
          en: "Hi! Yes, we have it. Are you looking at it for the road or the city?",
        },
        capability: 0,
        annotation: { es: "Respondió en 3 s · 23:41", en: "Replied in 3 s · 11:41 pm" },
      },
      { author: "buyer", text: { es: "Ruta. ¿Se puede en cuotas?", en: "Road. Can I pay in installments?" } },
      {
        author: "agent",
        text: {
          es: "Claro. Pasame tu DNI y en un minuto te digo qué financiación te sale.",
          en: "Sure. Send me your ID and in a minute I'll tell you which financing you get.",
        },
        capability: 1,
        annotation: { es: "Precalificación por DNI", en: "ID pre-qualification" },
      },
      {
        author: "agent",
        text: {
          es: "¡Buenas noticias, calificás! ¿Te reservo el sábado a las 10 para verla en el local?",
          en: "Good news, you qualify! Shall I book Saturday at 10 so you can see it at the store?",
        },
        capability: 2,
        annotation: { es: "Turno + seguimiento a la semana", en: "Visit booked + follow-up in a week" },
      },
      { author: "buyer", text: { es: "Dale!", en: "Deal!" } },
      {
        author: "agent",
        text: {
          es: "Listo. Te paso con un vendedor del local, que ya tiene toda la charla.",
          en: "Done. I'm passing you to a salesperson, who already has the whole chat.",
        },
        capability: 3,
        annotation: { es: "Derivado a la bandeja del equipo", en: "Handed to the team inbox" },
      },
      {
        author: "system",
        text: { es: "Consulta registrada · Adventure", en: "Inquiry logged · Adventure" },
        capability: 4,
      },
    ],
  },
  benefits: {
    heading: {
      number: "02",
      title: { es: "Beneficios para Espinosa Motos", en: "What Espinosa Motos gains" },
      intro: {
        es: "Lo que cambia en el día a día del local desde la primera semana.",
        en: "What changes in the store's day-to-day from the very first week.",
      },
    },
    exampleLabel: { es: "En Espinosa Motos", en: "At Espinosa Motos" },
    items: [
      {
        glyph: "inbox",
        title: { es: "Ninguna consulta sin respuesta", en: "No inquiry left unanswered" },
        description: {
          es: "Cada mensaje se contesta al instante. El interesado que consulta en varios lugares recibe primero su respuesta.",
          en: "Every message is answered instantly. The buyer who asks around gets your answer first.",
        },
        example: {
          es: "Quien pregunta por la misma moto en tres locales recibe primero la respuesta de Espinosa.",
          en: "Whoever asks three stores about the same bike gets Espinosa's answer first.",
        },
      },
      {
        glyph: "clock",
        title: { es: "Atención 24/7", en: "24/7 attention" },
        description: {
          es: "El negocio sigue atendiendo fuera de horario y en los picos, sin sumar personal.",
          en: "The business keeps answering after hours and during peaks, without adding staff.",
        },
        example: {
          es: "Sábado 23:40, después de subir un video: las consultas se atienden igual.",
          en: "Saturday 11:40 pm, right after a new video: questions still get answered.",
        },
      },
      {
        glyph: "target",
        title: { es: "Interesados calificados", en: "Qualified buyers" },
        description: {
          es: "El vendedor recibe personas con el crédito ya precalificado y con intención de visitar el local.",
          en: "Salespeople receive people with pre-qualified credit who intend to visit the store.",
        },
        example: {
          es: "El vendedor recibe en el local a alguien que ya sabe qué financiación tiene.",
          en: "Salespeople meet someone who already knows which financing they have.",
        },
      },
      {
        glyph: "equalizer",
        title: { es: "Respuestas consistentes", en: "Consistent answers" },
        description: {
          es: "La misma calidad y la misma información en cada conversación, con el estilo de la casa.",
          en: "The same quality and information in every conversation, in the house style.",
        },
        example: {
          es: "El mismo precio, la misma financiación y el mismo trato cercano en cada chat.",
          en: "The same price, the same financing and the same warm tone in every chat.",
        },
      },
      {
        glyph: "hourglass",
        title: { es: "Más tiempo para vender", en: "More time to sell" },
        description: {
          es: "El equipo deja de repetir respuestas y de revisar DNI a mano, y se enfoca en cerrar ventas en el local.",
          en: "The team stops repeating answers and checking IDs by hand, and focuses on closing sales in the store.",
        },
        example: {
          es: "Nadie del equipo vuelve a revisar DNIs a mano en cuatro plataformas.",
          en: "Nobody on the team checks IDs by hand across four platforms again.",
        },
      },
      {
        glyph: "compass",
        title: { es: "Datos para decidir", en: "Data to decide" },
        description: {
          es: "Sabe qué modelos se consultan más y puede planificar contenido y stock con información real.",
          en: "Know which models get the most questions and plan content and stock with real data.",
        },
        example: {
          es: "Saber si conviene grabar el próximo video de la Adventure o del scooter.",
          en: "Knowing whether the next video should feature the Adventure or the scooter.",
        },
      },
    ],
  },
  process: {
    heading: {
      number: "03",
      title: { es: "Cómo lo vamos a desarrollar", en: "How we'll build it" },
      intro: {
        es: "Trabajamos por etapas, con entregables concretos en cada una, para que pueda ver el avance y validar antes de salir a producción.",
        en: "We work in stages, each with concrete deliverables, so you can see progress and validate before going live.",
      },
    },
    doesLabel: { es: "Qué hacemos", en: "What we do" },
    deliversLabel: { es: "Qué recibe", en: "What you get" },
    stages: [
      {
        title: { es: "Relevamiento", en: "Discovery" },
        does: {
          es: "Revisamos sus chats anteriores, modelos, precios, financiación y la forma de atender del local.",
          en: "We review your past chats, models, prices, financing and how the store serves customers.",
        },
        delivers: {
          es: "Documento de alcance con las reglas del negocio y los casos a cubrir.",
          en: "Scope document with the business rules and the cases to cover.",
        },
      },
      {
        title: { es: "Diseño", en: "Design" },
        does: {
          es: "Definimos el tono, los flujos de conversación, cuándo derivar a una persona y cómo precalificar el crédito.",
          en: "We define the tone, conversation flows, when to hand off to a person and how to pre-qualify credit.",
        },
        delivers: {
          es: "Guía de estilo y flujos de conversación para su aprobación.",
          en: "Style guide and conversation flows for your approval.",
        },
      },
      {
        title: { es: "Construcción", en: "Build" },
        does: {
          es: "Desarrollamos el agente, lo conectamos a Instagram, a la bandeja de atención y a la consulta por DNI.",
          en: "We build the agent and connect it to Instagram, the shared inbox and the ID lookup.",
        },
        delivers: {
          es: "Agente funcionando en un entorno de prueba.",
          en: "Agent running in a test environment.",
        },
      },
      {
        title: { es: "Pruebas con casos reales", en: "Testing with real cases" },
        does: {
          es: "Lo evaluamos con conversaciones reales y casos difíciles, de forma repetida, para medir que responda bien y no invente datos.",
          en: "We evaluate it repeatedly with real conversations and hard cases, to make sure it answers well and never makes things up.",
        },
        delivers: {
          es: "Informe de pruebas y acceso para que su equipo lo pruebe.",
          en: "Test report and access so your team can try it.",
        },
      },
      {
        title: { es: "Ajustes", en: "Adjustments" },
        does: {
          es: "Corregimos lo que detectemos su equipo y nosotros en las pruebas.",
          en: "We fix whatever your team and we detect during testing.",
        },
        delivers: {
          es: "Versión final aprobada por la concesionaria.",
          en: "Final version approved by the dealership.",
        },
      },
      {
        title: { es: "Lanzamiento", en: "Launch" },
        does: {
          es: "Lo activamos en la cuenta de Instagram y acompañamos de cerca las primeras semanas.",
          en: "We switch it on in the Instagram account and stay close during the first weeks.",
        },
        delivers: {
          es: "Agente en producción y capacitación breve al equipo para usar la bandeja.",
          en: "Agent in production and a short training for the team on the inbox.",
        },
      },
    ],
    rationale: {
      glyph: "pulse",
      label: { es: "Por qué así", en: "Why this way" },
      body: {
        es: "El agente no se entrega \"a ciegas\". Cada etapa tiene su validación, y los datos sensibles como precios y crédito se controlan con la información real de la concesionaria, no con lo que la IA suponga.",
        en: "The agent isn't delivered \"blind\". Every stage has its own validation, and sensitive data such as prices and credit are checked against the dealership's real information, never against what the AI assumes.",
      },
    },
  },
  includes: {
    heading: {
      number: "04",
      title: { es: "Qué incluye la implementación", en: "What the implementation includes" },
    },
    items: [
      { es: "Las seis etapas de desarrollo descriptas arriba.", en: "The six development stages described above." },
      {
        es: "Agente de IA en mensajes directos de Instagram, entrenado con el estilo de su cuenta.",
        en: "AI agent in Instagram direct messages, trained on your account's style.",
      },
      {
        es: "Precalificación automática de crédito por DNI, con derivación a financiación propia aprobada por una persona.",
        en: "Automatic credit pre-qualification by ID, with hand-off to in-house financing approved by a person.",
      },
      {
        es: "Invitación a turnos en el local o reunión online, y seguimiento a la semana.",
        en: "Invitations to store visits or online meetings, with a follow-up a week later.",
      },
      {
        es: "Bandeja de atención compartida para que el equipo tome conversaciones.",
        en: "Shared inbox so the team can take over conversations.",
      },
      {
        es: "Registro de consultas por modelo y primer reporte mensual.",
        en: "Inquiry log per model and the first monthly report.",
      },
      {
        es: "Acompañamiento cercano durante las primeras semanas de uso.",
        en: "Close support during the first weeks of use.",
      },
    ],
    extrasLabel: { es: "Ampliaciones a cotizar por separado", en: "Add-ons quoted separately" },
    extras: [
      { es: "WhatsApp", en: "WhatsApp" },
      { es: "Landing de la concesionaria", en: "Dealership landing page" },
      { es: "Control de stock", en: "Stock control" },
      { es: "Publicación programada de videos", en: "Scheduled video publishing" },
    ],
    image: {
      src: "/detalle-tanque.jpg",
      alt: {
        es: "Detalle del tanque blanco y el faro de una moto café racer",
        en: "Close-up of the white tank and headlight of a café racer motorcycle",
      },
    },
  },
  maintenance: {
    heading: {
      number: "05",
      title: { es: "Mantenimiento mensual", en: "Monthly maintenance" },
      intro: {
        es: "Un agente de IA no es un producto que se instala y se olvida: cambian los precios, los modelos, las promociones y la forma en que consultan los clientes. El mantenimiento asegura que siga vendiendo bien todos los meses.",
        en: "An AI agent isn't something you install and forget: prices, models, promotions and the way customers ask all change. Maintenance keeps it selling well every month.",
      },
    },
    items: [
      {
        glyph: "pulse",
        title: { es: "Funcionamiento y monitoreo", en: "Uptime and monitoring" },
        description: {
          es: "Alojamiento del agente y de la bandeja, y control de que esté funcionando y respondiendo bien.",
          en: "Hosting for the agent and inbox, and checks that it's running and answering well.",
        },
      },
      {
        glyph: "sliders",
        title: { es: "Ajustes del agente", en: "Agent tuning" },
        description: {
          es: "Mejoras en las respuestas y el tono a partir de las conversaciones reales.",
          en: "Improvements to answers and tone based on real conversations.",
        },
      },
      {
        glyph: "refresh",
        title: { es: "Actualización de información", en: "Information updates" },
        description: {
          es: "Carga de cambios en modelos, precios y condiciones de financiación.",
          en: "Loading changes to models, prices and financing terms.",
        },
      },
      {
        glyph: "wrench",
        title: { es: "Corrección de errores", en: "Bug fixing" },
        description: {
          es: "Resolución de cualquier falla que se detecte.",
          en: "Resolution of any issue that comes up.",
        },
      },
      {
        glyph: "report",
        title: { es: "Reporte mensual", en: "Monthly report" },
        description: {
          es: "Consultas por modelo y revisión del rendimiento del agente.",
          en: "Inquiries per model and a review of the agent's performance.",
        },
      },
      {
        glyph: "chat",
        title: { es: "Soporte", en: "Support" },
        description: {
          es: "Canal directo con nosotros para consultas y pedidos de cambios.",
          en: "A direct channel with us for questions and change requests.",
        },
      },
    ],
    report: {
      title: { es: "Reporte mensual · Espinosa Motos", en: "Monthly report · Espinosa Motos" },
      subtitle: { es: "Consultas por categoría en un mes", en: "Inquiries per category in a month" },
      unit: { es: "consultas", en: "inquiries" },
      note: { es: "Vista previa con datos ilustrativos.", en: "Preview with illustrative data." },
      rows: [
        { label: { es: "Adventure", en: "Adventure" }, value: 128 },
        { label: { es: "Naked", en: "Naked" }, value: 96 },
        { label: { es: "Scooter", en: "Scooter" }, value: 71 },
        { label: { es: "Enduro", en: "Enduro" }, value: 44 },
        { label: { es: "Street", en: "Street" }, value: 30 },
      ],
    },
    notes: [
      {
        glyph: "bolt",
        label: { es: "Consumo de IA y servidores", en: "AI and server usage" },
        body: {
          es: `Incluido en el abono, hasta ${pending.conversationLimit.es} conversaciones por mes.`,
          en: `Included in the fee, up to ${pending.conversationLimit.en} conversations per month.`,
        },
      },
      {
        glyph: "coins",
        label: {
          es: "Costos que paga la concesionaria, al costo y sin recargo",
          en: "Costs paid by the dealership, at cost with no markup",
        },
        body: {
          es: "Consultas al buró de crédito (por ejemplo, Nosis) para la precalificación por DNI, según la cotización que el buró le haga a la concesionaria.",
          en: "Credit bureau lookups (for example, Nosis) for ID pre-qualification, at the rate the bureau quotes the dealership.",
        },
      },
    ],
  },
  investment: {
    heading: {
      number: "06",
      title: { es: "Inversión y forma de pago", en: "Investment and payment" },
    },
    currency: "US$",
    implementation: {
      label: { es: "Implementación · pago único", en: "Implementation · one-time" },
      amount: 750,
      splits: [
        { label: { es: "50% al inicio", en: "50% upfront" }, amount: 375 },
        { label: { es: "50% a la entrega", en: "50% on delivery" }, amount: 375 },
      ],
    },
    monthly: {
      label: { es: "Mantenimiento mensual", en: "Monthly maintenance" },
      amount: 450,
      period: { es: "/ mes", en: "/ month" },
      note: { es: "Desde la puesta en marcha", en: "From go-live" },
    },
    table: {
      conceptLabel: { es: "Concepto", en: "Item" },
      amountLabel: "US$",
      rows: [
        {
          concept: {
            es: "Anticipo de implementación (50%), al aprobar el presupuesto",
            en: "Implementation deposit (50%), on approval",
          },
          amount: { es: "375", en: "375" },
        },
        {
          concept: {
            es: "Saldo de implementación (50%), a la entrega del proyecto",
            en: "Implementation balance (50%), on delivery",
          },
          amount: { es: "375", en: "375" },
        },
        {
          concept: { es: "Mantenimiento mensual", en: "Monthly maintenance" },
          amount: { es: "450 / mes", en: "450 / month" },
        },
      ],
    },
    footnote: {
      es: "Los importes se fijan en dólares. Si se paga en pesos, se toma el dólar oficial del Banco Nación, tipo vendedor, del día de pago.",
      en: "Amounts are set in US dollars. If paid in pesos, Banco Nación's official selling rate on the payment date applies.",
    },
  },
  nextSteps: {
    heading: {
      number: "07",
      title: { es: "Próximos pasos", en: "Next steps" },
    },
    steps: [
      { es: "Aprobación de este presupuesto y pago del anticipo.", en: "Approval of this proposal and deposit payment." },
      {
        es: "Acceso a la cuenta de Meta e Instagram, y envío de chats anteriores e información comercial.",
        en: "Access to the Meta and Instagram account, plus past chats and commercial information.",
      },
      {
        es: "Pedido de cotización al buró de crédito para las consultas por DNI.",
        en: "Quote request to the credit bureau for ID lookups.",
      },
      { es: "Reunión de inicio para acordar el cronograma.", en: "Kick-off meeting to agree on the schedule." },
      {
        es: "Desarrollo, pruebas, entrega y puesta en marcha.",
        en: "Development, testing, delivery and go-live.",
      },
    ],
    validity: {
      number: "08",
      title: { es: "Validez", en: "Validity" },
      body: {
        es: `Este presupuesto tiene una validez de ${pending.validityDays.es} días desde el 4 de noviembre de 2026.`,
        en: `This proposal is valid for ${pending.validityDays.en} days from November 4, 2026.`,
      },
    },
  },
  closing: {
    eyebrow: { es: "Gracias por su confianza", en: "Thank you for your trust" },
    subtitle: {
      es: "Un agente de ventas con IA, hecho para Espinosa Motos.",
      en: "An AI sales agent, built for Espinosa Motos.",
    },
    image: {
      src: "/cierre-ruta.jpg",
      alt: {
        es: "Moto adventure blanca y roja estacionada en un camino de ripio",
        en: "White and red adventure motorcycle parked on a gravel road",
      },
    },
  },
  seo: {
    title: {
      es: "Presupuesto · Agente de ventas con IA | Generación IA",
      en: "Proposal · AI sales agent | Generación IA",
    },
    description: {
      es: "Presupuesto de implementación y mantenimiento de un agente de ventas con IA para Espinosa Motos.",
      en: "Proposal for implementing and maintaining an AI sales agent for Espinosa Motos.",
    },
  },
});
