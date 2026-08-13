import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { headerCta } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/routing";

type ClosingCtaProps = {
  locale: Locale;
};

/**
 * Banda de cierre antes del footer. Más compacta que el resto de secciones,
 * de ahí el espaciado propio en vez del de `Section`.
 */
export async function ClosingCta({ locale }: ClosingCtaProps) {
  const { closingCta: t } = await getDictionary();

  return (
    <Section
      id="cta"
      spacing="none"
      className="bg-surface-alt py-16 text-center lg:py-20"
    >
      {/* Peso normal: en el diseño no es un titular en negrita. */}
      <p className="mx-auto max-w-5xl text-h3 font-normal text-ink-body lg:text-h2">
        {t.title}
      </p>

      <Button
        href={localizedHref(locale, headerCta.href)}
        size="lg"
        className="mt-8"
      >
        {t.cta}
      </Button>
    </Section>
  );
}
