import { WorkflowPanels } from "@/components/sections/workflow-panels";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { getDictionary } from "@/i18n/dictionaries";

/** Assets en `public/section4/`. Destino del enlace «Operaciones». */
export async function Workflows() {
  const { workflows: t } = await getDictionary();

  return (
    <Section
      id="operaciones"
      background={
        <Image
          src="/section4/bg.png"
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
      <h2 className="max-w-[15em] text-h2 text-brand lg:text-h1">{t.title}</h2>
      <p className="mt-5 max-w-2xl text-body-lg text-ink-body">
        {t.description}
      </p>

      <WorkflowPanels
        className="mt-12 lg:mt-16"
        expandLabel={t.expandLabel}
        panels={[t.schedule, t.certificates, t.procedures, t.collections]}
      />
    </Section>
  );
}
