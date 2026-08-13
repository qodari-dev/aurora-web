import { WorkflowPanels } from "@/components/sections/workflow-panels";
import { Section } from "@/components/ui/section";
import { getDictionary } from "@/i18n/dictionaries";

/** Assets en `public/section4/`. */
export async function Workflows() {
  const { workflows: t } = await getDictionary();

  return (
    <Section id="flujos-de-trabajo">
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
