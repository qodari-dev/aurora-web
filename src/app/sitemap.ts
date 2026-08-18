import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/site";
import { privacyByLocale, termsByLocale } from "@/content/legal";
import { isComplete } from "@/content/legal/types";
import { defaultLocale, locales } from "@/i18n/config";

const absolute = (path: string) => new URL(path, siteUrl).toString();

/**
 * Rutas del sitio. Las legales solo entran si el documento está completo:
 * mientras se sirva con `noindex` no tiene sentido anunciarlo aquí.
 */
const routes = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  ...(isComplete(termsByLocale[defaultLocale])
    ? [{ path: "/terminos", priority: 0.3, changeFrequency: "yearly" as const }]
    : []),
  ...(isComplete(privacyByLocale[defaultLocale])
    ? [
        {
          path: "/privacidad",
          priority: 0.3,
          changeFrequency: "yearly" as const,
        },
      ]
    : []),
];

/** Una entrada por ruta e idioma, cada una declarando al resto como alternativa. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: absolute(`/${locale}${route.path}`),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, absolute(`/${code}${route.path}`)]),
        ),
      },
    })),
  );
}
