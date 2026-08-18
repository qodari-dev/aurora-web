import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocument } from "@/components/legal/legal-document";
import { termsByLocale } from "@/content/legal";
import { isComplete } from "@/content/legal/types";
import { isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/terminos">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const doc = termsByLocale[lang];

  return {
    title: doc.title,
    alternates: { canonical: `/${lang}/terminos` },
    /* Mientras falte contenido o quede algún hueco, fuera de los buscadores:
       una página legal a medias es peor que no tenerla indexada. */
    ...(isComplete(doc) ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function TermsPage({
  params,
}: PageProps<"/[lang]/terminos">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <LegalDocument doc={termsByLocale[lang]} locale={lang} />;
}
