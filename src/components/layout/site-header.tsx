import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { NavLink } from "@/components/ui/nav-link";
import { Logo } from "@/components/ui/logo";
import { headerCta, mainNav } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/routing";

type SiteHeaderProps = {
  locale: Locale;
};

export async function SiteHeader({ locale }: SiteHeaderProps) {
  const dict = await getDictionary();

  const items = mainNav.map((item) => ({
    label: dict.nav[item.labelKey],
    href: localizedHref(locale, item.href),
  }));

  const cta = {
    label: dict.nav[headerCta.labelKey],
    href: localizedHref(locale, headerCta.href),
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <Container className="flex h-header items-center justify-between gap-6">
        <Logo locale={locale} label={dict.nav.home} />

        <nav
          aria-label={dict.metadata.title}
          className="hidden items-center gap-10 md:flex"
        >
          {items.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="text-body text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={cta.href} size="lg" className="hidden md:inline-flex">
            {cta.label}
          </Button>
          <MobileNav
            items={items}
            cta={cta}
            labels={{ open: dict.nav.openMenu, close: dict.nav.closeMenu }}
          />
        </div>
      </Container>
    </header>
  );
}
