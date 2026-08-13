import { MediaCardGrid } from "@/components/ui/media-card-grid";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n/dictionaries";

/** Assets en `public/section5/`. Destino del enlace «Marketing» del header. */
export async function Marketing() {
  const { marketing: t } = await getDictionary();

  return (
    <Section id="marketing" className="bg-surface-neutral">
      <h2 className="max-w-[15em] text-h2 text-brand lg:text-h1">{t.title}</h2>
      <p className="mt-5 max-w-2xl text-body-lg text-ink-body">
        {t.description}
      </p>

      <MediaCardGrid
        className="mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        cards={[t.campaigns, t.leads, t.sales]}
        image={{
          width: 1077,
          height: 1077,
          sizes: "(min-width: 1024px) 365px, (min-width: 640px) 50vw, 100vw",
        }}
      />
    </Section>
  );
}
