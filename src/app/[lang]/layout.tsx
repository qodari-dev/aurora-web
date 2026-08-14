import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { openGraphImage, siteUrl } from "@/config/site";
import {
  defaultLocale,
  isLocale,
  locales,
  openGraphLocales,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import AuroraWidget from "@/components/aurora-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Prerenderiza una versión estática de cada idioma. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dict = await getDictionary();
  const { siteName, title, description } = dict.metadata;

  return {
    /* Resuelve las rutas relativas de abajo a URLs absolutas, que es lo que
       exigen los crawlers de redes sociales. */
    metadataBase: siteUrl,
    /* La marca se concatena aquí y no vive en `title`: así la plantilla de
       subpáginas queda «Precios | Aurora» y no arrastra el eslogan entero. */
    title: { default: `${title} | ${siteName}`, template: `%s | ${siteName}` },
    description,

    /* Le dice a Google que ES y EN son traducciones, no contenido duplicado. */
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((code) => [code, `/${code}`])),
        "x-default": `/${defaultLocale}`,
      },
    },

    openGraph: {
      type: "website",
      /* Sin la marca al final: `og:site_name` ya la muestra aparte en la
         tarjeta, y repetirla la deja redundante. */
      siteName,
      title,
      description,
      url: `/${lang}`,
      locale: openGraphLocales[lang],
      alternateLocale: locales
        .filter((code) => code !== lang)
        .map((code) => openGraphLocales[code]),
      images: [{ ...openGraphImage, alt: siteName }],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [openGraphImage.url],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-surface text-ink">
        <AuroraWidget />
        <SiteHeader locale={lang} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
