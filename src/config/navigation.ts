import type { Dictionary } from "@/i18n/dictionaries";

/**
 * Enlaces del header. `labelKey` apunta a `nav` en los diccionarios, de modo
 * que añadir un enlace obliga a traducirlo en `es.json` y `en.json`.
 *
 * `href` puede ser un ancla (`#seccion`) o una ruta interna (`/producto`);
 * las rutas se prefijan con el idioma en `localizedHref`.
 */
export type NavItem = {
  labelKey: keyof Dictionary["nav"];
  href: string;
};

export const mainNav: NavItem[] = [
  /* Apunta a «Convierte conversaciones en crecimiento empresarial», que es la
     sección donde están las tarjetas de servicio al cliente y PQRS. */
  { labelKey: "customerService", href: "#crecimiento" },
  { labelKey: "operations", href: "#operaciones" },
  { labelKey: "marketing", href: "#marketing" },
];

/**
 * CTA principal. Lo usan los cuatro botones «Agenda un demo» (header, menú
 * móvil, servicio al cliente y cierre), así que cambiar el destino aquí los
 * actualiza todos.
 *
 * Apunta a la página de reservas de Google Calendar. Si algún día se quiere
 * mantener a la gente dentro del sitio, se sustituye por una ruta propia
 * (p. ej. `/agendar`) que embeba el calendario.
 */
export const headerCta = {
  labelKey: "cta",
  href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3EsUMxoQPrB0E8us3oRa-arfEbiL57s9Cz3RhQVF0Ydd-UyqJ-JZy3FEnmXTFTurXk0T8cRLeH",
} satisfies NavItem;

/**
 * Columna «Contacto» del footer. Las redes van con etiqueta fija (son nombres
 * de marca, no se traducen).
 * TODO: faltan las URLs reales de LinkedIn y YouTube.
 */
export const contactLinks = [
  { label: "LinkedIN", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "hello@linkaurora.com", href: "mailto:hello@linkaurora.com" },
];

/** TODO: apuntan a `#` hasta que existan las páginas legales. */
export const legalLinks: NavItem[] = [
  { labelKey: "privacy", href: "#" },
  { labelKey: "terms", href: "#" },
];
