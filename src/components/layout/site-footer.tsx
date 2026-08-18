import { CalendarDays, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { LanguageMenu } from "@/components/layout/language-menu";
import { LinkedinIcon, YoutubeIcon } from "@/components/ui/brand-icons";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/ui/nav-link";
import {
  contactEmail,
  headerCta,
  legalLinks,
  mainNav,
  socialLinks,
} from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type FooterLinkItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const socialIcons = {
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
} as const;

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

  const contact: FooterLinkItem[] = [
    {
      label: contactEmail,
      href: `mailto:${contactEmail}`,
      icon: <Mail className="size-4 shrink-0" aria-hidden />,
    },
    {
      label: dict.nav[headerCta.labelKey],
      href: headerCta.href,
      icon: <CalendarDays className="size-4 shrink-0" aria-hidden />,
    },
  ];

  return (
    // Solo redondea arriba: abajo cierra a ras del final de la página.
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
          {/* Marca: logo, descripción, redes e idioma */}
          <div className="max-w-sm">
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

            <p className="mt-5 text-body-sm text-ink-inverse-muted">
              {t.tagline}
            </p>

            <nav aria-label={t.social} className="mt-6 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.icon];

                return (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex size-9 items-center justify-center rounded-pill border border-white/15 text-ink-inverse transition-colors hover:border-white/40 hover:bg-white/10"
                  >
                    <Icon className="size-4" />
                  </NavLink>
                );
              })}
            </nav>

            <LanguageMenu
              locale={locale}
              label={dict.nav.language}
              className="mt-8"
            />
          </div>

          <FooterColumn title={t.solutions} links={solutions} />
          <FooterColumn title={t.contact} links={contact} />

          {/* Segunda fila: hereda las mismas columnas, así los enlaces legales
              quedan alineados con «Soluciones» y «Contacto».

              En móvil todo se apila y el copyright debe cerrar, después de los
              enlaces legales; `order-last` lo mueve solo en esa disposición. */}
          <p className="order-last text-body text-ink-inverse-muted lg:order-none lg:self-end">
            {t.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>

          {legalLinks.map((item) => (
            <FooterLink
              key={item.labelKey}
              href={localizedHref(locale, item.href)}
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
            <FooterLink
              href={link.href}
              className="inline-flex items-center gap-2"
            >
              {link.icon}
              {link.label}
            </FooterLink>
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
  return (
    <NavLink
      href={href}
      className={cn(
        "text-body text-ink-inverse transition-opacity hover:opacity-75",
        className,
      )}
    >
      {children}
    </NavLink>
  );
}
