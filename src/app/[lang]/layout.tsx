import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Prerenderiza una versión estática de cada idioma. */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();

  return {
    title: {
      default: dict.metadata.title,
      template: `%s · ${dict.metadata.title}`,
    },
    description: dict.metadata.description,
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
        <SiteHeader locale={lang} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={lang} />
      </body>
    </html>
  );
}
