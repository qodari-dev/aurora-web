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

/** Canal comercial de WhatsApp. El número debe ir sin espacios ni símbolos. */
export const whatsappHref = "https://wa.me/573243008918";

/**
 * Redes sociales del footer. Se muestran como iconos, así que `label` es el
 * texto accesible, no un texto visible.
 *
 * YouTube está retirado hasta que exista el canal; para reactivarlo basta
 * añadir `{ label: "YouTube", href: "…", icon: "youtube" }`, que el icono
 * sigue disponible en `brand-icons.tsx`.
 */
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/linkaurora",
    icon: "linkedin",
  },
  {
    label: "WhatsApp",
    href: whatsappHref,
    icon: "whatsapp",
  },
] as const;

/** Correo de contacto. No se traduce, así que no vive en los diccionarios. */
export const contactEmail = "hello@linkaurora.com";

export const legalLinks: NavItem[] = [
  { labelKey: "privacy", href: "/privacidad" },
  { labelKey: "terms", href: "/terminos" },
];
