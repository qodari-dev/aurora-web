import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { isLocale, type Locale } from "./config";

import type es from "./dictionaries/es.json";

/**
 * Los diccionarios se cargan con `import()` dinámico: solo el idioma
 * solicitado llega al servidor en cada request, y nada de esto viaja al cliente.
 */
const dictionaries = {
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
} satisfies Record<Locale, () => Promise<unknown>>;

/** `es.json` es la fuente de verdad de la forma del diccionario. */
export type Dictionary = typeof es;

/**
 * Devuelve el diccionario del idioma de la ruta actual.
 * Solo se puede llamar desde Server Components.
 */
export async function getDictionary(): Promise<Dictionary> {
  const locale = await lang();

  if (!locale || !isLocale(locale)) notFound();

  return dictionaries[locale]() as Promise<Dictionary>;
}
