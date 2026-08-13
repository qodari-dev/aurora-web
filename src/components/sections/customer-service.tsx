import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { headerCta } from "@/config/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizedHref } from "@/i18n/routing";

type CustomerServiceProps = {
  locale: Locale;
};

export async function CustomerService({ locale }: CustomerServiceProps) {
  const { customerService: t } = await getDictionary();

  return (
    <Section
      id="servicio-al-cliente"
      background={
        <Image
          src="/hero/bg.png"
          alt=""
          aria-hidden
          fill
          priority
          /* `sizes` deliberadamente por debajo del tamaño real: la imagen es un
             degradado difuso, así que se sirve a menor resolución sin que se
             note. Con `100vw` el navegador pedía 3840px = 542 KB; así son ~122 KB. */
          sizes="40vw"
          className="-z-10 object-cover"
        />
      }
    >
      {/* Titular + descripción */}
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        {/* `max-w` en `em` escala con el tamaño de fuente y mantiene el
            salto de línea del diseño ("Impulsando el / servicio al cliente"). */}
        <h2 className="max-w-[10em] text-h2 text-brand lg:text-h1">
          {t.title}
        </h2>
        <p className="text-body-lg text-ink-body lg:pt-2">{t.description}</p>
      </div>

      {/* Cards */}
      {/* Las imágenes van casi a sangre (padding de la card) y el bloque de
          texto lleva un sangrado extra, como en el diseño. */}
      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3">
        <Card className="flex flex-col p-4 lg:col-span-2">
          {/* La imagen ya trae borde y sombra propios */}
          <Image
            src={t.panel.image}
            alt={t.panel.imageAlt}
            width={2235}
            height={1400}
            sizes="(min-width: 1024px) 760px, 100vw"
            className="h-auto w-full"
          />
          <div className="mt-8 px-2 pb-2 lg:px-6">
            <CardTitle>{t.panel.title}</CardTitle>
            <CardDescription className="mt-3">
              {t.panel.description}
            </CardDescription>
          </div>
        </Card>

        <Card variant="outlined" className="flex flex-col p-4 bg-transparent">
          <div className="flex flex-1 items-center justify-center py-6">
            <Image
              src={t.control.image}
              alt={t.control.imageAlt}
              width={984}
              height={1236}
              sizes="(min-width: 1024px) 350px, 80vw"
              className="h-auto w-full max-w-sm"
            />
          </div>
          <div className="mt-8 px-2 pb-2 lg:px-6">
            <CardTitle>{t.control.title}</CardTitle>
            <CardDescription className="mt-3">
              {t.control.description}
            </CardDescription>
          </div>
        </Card>
      </div>

      <Button
        href={localizedHref(locale, headerCta.href)}
        size="lg"
        className="mt-12"
      >
        {t.cta}
      </Button>
    </Section>
  );
}
