"use client";

import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph } from "@/components/ui/Glyph";
import { DiagonalCorner } from "@/components/ui/brand/DiagonalCorner";
import { StageTrajectory } from "@/components/sections/StageTrajectory";

const { process } = siteConfig;

export function Process() {
  const { t } = useLanguage();

  return (
    <Section id="process" tone="light">
      <SectionHeading heading={process.heading} kicker={ui.nav.process} />
      <StageTrajectory
        stages={process.stages}
        label={process.heading.title}
        doesLabel={process.doesLabel}
        deliversLabel={process.deliversLabel}
      />
      <Reveal className="mt-6">
        <aside className="tone-dark relative flex gap-5 overflow-hidden rounded-xl p-6 pr-16 md:p-8 md:pr-28">
          <DiagonalCorner />
          <span className="flex h-10 w-10 shrink-0 skew-x-[-10deg] items-center justify-center bg-brand text-bone">
            <Glyph name={process.rationale.glyph} className="h-5 w-5 skew-x-[10deg]" />
          </span>
          <p className="max-w-3xl text-sm leading-relaxed text-fg-muted md:text-base">
            <strong className="mb-1 block font-heading text-2xl font-black uppercase italic text-fg">
              {t(process.rationale.label)}
            </strong>
            {t(process.rationale.body)}
          </p>
        </aside>
      </Reveal>
    </Section>
  );
}
