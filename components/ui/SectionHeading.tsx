"use client";

import type { ChapterHeading, Localized } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal } from "@/components/ui/Reveal";
import { DiagonalReveal } from "@/components/ui/DiagonalReveal";
import { SectionKicker } from "@/components/ui/brand/SectionKicker";

interface SectionHeadingProps {
  heading: ChapterHeading;
  kicker: Localized;
}

export function SectionHeading({ heading, kicker }: SectionHeadingProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl">
      <Reveal>
        <SectionKicker number={heading.number} label={t(kicker)} />
      </Reveal>
      <DiagonalReveal delay={0.08}>
        <h2 className="mt-5 font-heading text-[clamp(2.6rem,6.5vw,4.75rem)] font-black uppercase italic leading-[0.9] tracking-[-0.005em] text-fg">
          {t(heading.title)}
        </h2>
      </DiagonalReveal>
      {heading.intro && (
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg">{t(heading.intro)}</p>
        </Reveal>
      )}
    </div>
  );
}
