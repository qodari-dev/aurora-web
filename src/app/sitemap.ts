import type { MetadataRoute } from "next";

import { siteUrl } from "@/config/site";
import { locales } from "@/i18n/config";

const absolute = (path: string) => new URL(path, siteUrl).toString();

/**
 * Una entrada por idioma, cada una declarando al resto como alternativa.
 * Al añadir rutas nuevas, listarlas aquí junto con sus traducciones.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: absolute(`/${locale}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map((code) => [code, absolute(`/${code}`)]),
      ),
    },
  }));
}
