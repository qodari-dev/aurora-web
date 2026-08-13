import Image from "next/image";

import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n/dictionaries";

export async function ExploreAurora() {
  const { exploreAurora: t } = await getDictionary();

  return (
    <Section
      id="explora-aurora"
      spacing="none"
      /* El fondo va a sangre completa y solo redondea por abajo; el contenido
         se queda dentro del container. `bg-brand-deep` sostiene el color
         mientras carga la imagen. */
      className="rounded-b-card bg-brand-deep"
      containerClassName="py-14 text-center lg:py-16"
      background={
        <Image
          src="/bg-blue.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
      }
    >
      <Image
        src="/logo.png"
        alt=""
        aria-hidden
        width={114}
        height={114}
        sizes="32px"
        className="mx-auto h-8 w-8"
      />
      <h2 className="mt-4 text-h3 text-ink-inverse lg:text-h2">{t.title}</h2>
      <p className="mx-auto mt-4 max-w-3xl text-h4 font-normal text-balance text-ink-inverse-muted">
        {t.subtitle}
      </p>
    </Section>
  );
}
