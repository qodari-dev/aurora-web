import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, isLocale, locales } from "@/i18n/config";

/**
 * Elige el mejor idioma soportado a partir de la cabecera `Accept-Language`.
 * Parser mínimo (sin dependencias): ordena por `q` y devuelve la primera
 * coincidencia por código base (`es-419` -> `es`).
 */
function resolveLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.slice(2)) : 1 };
    })
    .filter((entry) => entry.tag && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const base = tag.split("-")[0];
    if (isLocale(base)) return base;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const locale = resolveLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  // Excluye internos de Next, la API y cualquier archivo con extensión
  // (imágenes de /public, robots.txt, sitemap.xml, ...).
  matcher: ["/((?!_next|api|.*\\.).*)"],
};
