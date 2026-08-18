import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocument } from "@/components/legal/legal-document";
import { privacyByLocale } from "@/content/legal";
import { isComplete } from "@/content/legal/types";
import { isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacidad">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const doc = privacyByLocale[lang];

  return {
    title: doc.title,
    alternates: { canonical: `/${lang}/privacidad` },
    ...(isComplete(doc) ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[lang]/privacidad">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <LegalDocument doc={privacyByLocale[lang]} locale={lang} />;
}
