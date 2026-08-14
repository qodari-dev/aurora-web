import Image from "next/image";

import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Assets en `public/section7/`. La imagen es una sola pieza (isotipo, tarjetas
 * de código y conectores) y no lleva texto traducible, así que se comparte
 * entre idiomas; solo el `alt` sale del diccionario.
 */
export async function Data() {
  const { data: t } = await getDictionary();

  return (
    <Section
      id="datos"
      bleed={
        /* El diagrama sangra más ancho que el contenedor de texto, como en el
           diseño. El propio PNG trae el margen transparente alrededor. */
        <Image
          src="/section7/image.png"
          alt={t.imageAlt}
          width={4320}
          height={1569}
          sizes="100vw"
          className="mx-auto mt-12 h-auto w-full max-w-[1600px] lg:mt-16"
        />
      }
      background={
        <Image
          src="/section7/bg.png"
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
      {/* Columnas asimétricas: el titular necesita más ancho que la
          descripción para partir en dos líneas, como en el diseño. */}
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
        <h2 className="text-h2 text-brand lg:text-h1">{t.title}</h2>
        <p className="text-body-lg text-ink-body lg:pt-2">{t.description}</p>
      </div>
    </Section>
  );
}
