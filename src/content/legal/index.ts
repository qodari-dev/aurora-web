import type { Locale } from "@/i18n/config";

import { privacyEn } from "./privacy.en";
import { privacyEs } from "./privacy.es";
import { termsEn } from "./terms.en";
import { termsEs } from "./terms.es";
import type { LegalDocument } from "./types";

/**
 * Documentos legales por idioma.
 *
 * El español es el documento fuente; el inglés es una traducción. Al cambiar
 * el texto en español hay que actualizar la traducción para que no se separen.
 */
export const termsByLocale: Record<Locale, LegalDocument> = {
  es: termsEs,
  en: termsEn,
};

export const privacyByLocale: Record<Locale, LegalDocument> = {
  es: privacyEs,
  en: privacyEn,
};
