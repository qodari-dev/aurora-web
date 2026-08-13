/**
 * Configuración de idiomas.
 * Para añadir un idioma: agregarlo aquí, crear `dictionaries/<code>.json`
 * y registrarlo en `dictionaries.ts`.
 */
export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Nombre del idioma en su propio idioma (para el selector). */
export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
