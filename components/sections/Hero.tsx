"use client";

import { m } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { SectionKicker } from "@/components/ui/brand/SectionKicker";
import { DIAGONAL_MASK_HIDDEN, DIAGONAL_MASK_VISIBLE } from "@/components/ui/DiagonalReveal";
import { HeroPhoto } from "@/components/sections/HeroPhoto";
import { QuoteMetaStrip } from "@/components/sections/QuoteMetaStrip";

const { hero } = siteConfig;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function entrance(delay: number) {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE_OUT },
  };
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="tone-dark diagonal-bottom relative isolate flex flex-col overflow-hidden pt-16 lg:min-h-[82svh] lg:justify-center"
    >
      <div aria-hidden className="matte-texture pointer-events-none absolute inset-0 -z-10" />
      <HeroPhoto image={hero.image} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-[calc(3.5vw+2.5rem)] pt-8 md:px-8 lg:pb-[calc(3.5vw+2rem)] lg:pt-10">
        <div className="lg:max-w-[47%]">
          <m.div {...entrance(0.3)}>
            <SectionKicker label={t(hero.eyebrow)} />
          </m.div>
          <m.h1
            initial={{ clipPath: DIAGONAL_MASK_HIDDEN }}
            animate={{ clipPath: DIAGONAL_MASK_VISIBLE }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
            className="mt-5 font-heading text-[clamp(2.8rem,6vw,5rem)] font-black uppercase italic leading-[0.88] tracking-[-0.005em]"
          >
            <span className="block text-fg">{t(hero.titleLead)}</span>
            <span className="block text-brand">{t(hero.titleTail)}</span>
          </m.h1>
          <m.p {...entrance(0.7)} className="mt-5 max-w-md text-base leading-relaxed text-fg-muted">
            {t(hero.subtitle)}
          </m.p>
          <m.div {...entrance(0.85)} className="mt-8">
            <QuoteMetaStrip items={hero.meta} />
          </m.div>
        </div>
      </div>
    </section>
  );
}
