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
  { labelKey: "customerService", href: "#servicio-al-cliente" },
  { labelKey: "operations", href: "#operaciones" },
  { labelKey: "marketing", href: "#marketing" },
];

export const headerCta = {
  labelKey: "cta",
  href: "#demo",
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
