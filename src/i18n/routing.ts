import { defaultLocale, isLocale, type Locale } from "./config";

/** Prefija una ruta interna con el idioma. Anclas y URLs externas se dejan intactas. */
export function localizedHref(locale: Locale, href: string) {
  if (href.startsWith("#") || /^[a-z]+:/i.test(href)) return href;
  return `/${locale}${href === "/" ? "" : href}`;
}

/** Cambia el idioma de un pathname conservando el resto de la ruta. */
export function switchLocalePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = locale;
  } else {
    segments.unshift(locale);
  }

  return `/${segments.join("/")}`;
}

/** Idioma actual a partir del pathname (para Client Components). */
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return first && isLocale(first) ? first : defaultLocale;
}
