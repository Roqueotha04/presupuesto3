import type { Localized, SectionId } from "./site.types";

interface UiStrings {
  nav: Record<SectionId, Localized>;
  languageToggle: { label: Localized };
  menu: { open: Localized; close: Localized; label: Localized };
  carousel: { previous: Localized; next: Localized; goTo: Localized };
  maintenance: { dragHint: Localized };
  benefits: { flipHint: Localized };
  footer: {
    rights: Localized;
    preparedBy: Localized;
    visit: Localized;
    confidential: Localized;
    photoNote: Localized;
  };
}

export const ui: UiStrings = {
  nav: {
    hero: { es: "Presupuesto", en: "Proposal" },
    scope: { es: "El agente", en: "The agent" },
    benefits: { es: "Beneficios", en: "Benefits" },
    process: { es: "Etapas", en: "Stages" },
    includes: { es: "Incluye", en: "Includes" },
    maintenance: { es: "Mantenimiento", en: "Maintenance" },
    investment: { es: "Inversión", en: "Investment" },
    nextSteps: { es: "Próximos pasos", en: "Next steps" },
    closing: { es: "Cierre", en: "Closing" },
  },
  languageToggle: {
    label: { es: "Cambiar idioma", en: "Switch language" },
  },
  menu: {
    open: { es: "Abrir menú", en: "Open menu" },
    close: { es: "Cerrar menú", en: "Close menu" },
    label: { es: "Índice del presupuesto", en: "Proposal index" },
  },
  carousel: {
    previous: { es: "Anterior", en: "Previous" },
    next: { es: "Siguiente", en: "Next" },
    goTo: { es: "Ir a la tarjeta", en: "Go to card" },
  },
  maintenance: {
    dragHint: { es: "Arrastrá para girar", en: "Drag to rotate" },
  },
  benefits: {
    flipHint: { es: "Tocá para dar vuelta", en: "Tap to flip" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },
    preparedBy: { es: "Preparado por", en: "Prepared by" },
    visit: { es: "Visitá nuestra web", en: "Visit our website" },
    confidential: {
      es: "Documento confidencial, preparado exclusivamente para la concesionaria.",
      en: "Confidential document, prepared exclusively for the dealership.",
    },
    photoNote: {
      es: "Las motos de las fotos son ilustrativas y no representan stock.",
      en: "Motorcycles in the photos are illustrative and do not represent stock.",
    },
  },
};
