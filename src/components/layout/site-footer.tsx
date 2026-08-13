import Image from "next/image";
import Link from "next/link";

import { LanguageMenu } from "@/components/layout/language-menu";
import { Container } from "@/components/ui/container";
import { contactLinks, legalLinks, mainNav } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type FooterLinkItem = { label: string; href: string };

type SiteFooterProps = {
  locale: Locale;
};

export async function SiteFooter({ locale }: SiteFooterProps) {
  const dict = await getDictionary();
  const t = dict.footer;

  const solutions: FooterLinkItem[] = mainNav.map((item) => ({
    label: dict.nav[item.labelKey],
    href: localizedHref(locale, item.href),
  }));

  return (
    <footer className="relative isolate overflow-hidden rounded-t-card bg-brand-deep">
      {/* TODO: reutiliza el fondo del banner «Explora Aurora»; falta el export
          propio del footer si en el Figma es otro. */}
      <Image
        src="/bg-blue.png"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />

      <Container className="py-12 lg:py-11">
        <div className="grid gap-y-10 lg:grid-cols-[1fr_auto_auto] lg:gap-x-24 lg:gap-y-28">
          {/* Marca + idioma */}
          <div>
            <Link href={`/${locale}`} aria-label={dict.nav.home}>
              <Image
                src="/aurora-logo-white.png"
                alt="Aurora"
                width={338}
                height={75}
                sizes="150px"
                className="h-6 w-auto"
              />
            </Link>
            <LanguageMenu
              locale={locale}
              label={dict.nav.language}
              className="mt-6"
            />
          </div>

          <FooterColumn title={t.solutions} links={solutions} />
          <FooterColumn title={t.contact} links={contactLinks} />

          {/* Segunda fila: hereda las mismas columnas, así los enlaces legales
              quedan alineados con «Soluciones» y «Contacto». */}
          <p className="text-body text-ink-inverse-muted lg:self-end">
            {t.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>

          {legalLinks.map((item) => (
            <FooterLink
              key={item.labelKey}
              href={item.href}
              className="lg:self-end"
            >
              {dict.nav[item.labelKey]}
            </FooterLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLinkItem[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-body font-semibold text-ink-inverse">{title}</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <FooterLink href={link.href}>{link.label}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  /* `mailto:` no debe abrir pestaña nueva; solo las URLs externas. */
  const opensNewTab = href.startsWith("http");

  return (
    <Link
      href={href}
      {...(opensNewTab ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "text-body text-ink-inverse transition-opacity hover:opacity-75",
        className,
      )}
    >
      {children}
    </Link>
  );
}
