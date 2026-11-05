"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { useLanguage } from "@/hooks/useLanguage";
import { Reveal } from "@/components/ui/Reveal";
import { DiagonalReveal } from "@/components/ui/DiagonalReveal";
import { SectionKicker } from "@/components/ui/brand/SectionKicker";
import { EspinosaWordmark } from "@/components/ui/brand/EspinosaWordmark";

const { closing } = siteConfig;

export function Closing() {
  const { t } = useLanguage();

  return (
    <section
      id="closing"
      className="tone-dark diagonal-top relative isolate flex min-h-[90svh] items-end overflow-hidden pb-20 pt-[calc(3.5vw+8rem)]"
    >
      <Image
        src={closing.image.src}
        alt={t(closing.image.alt)}
        fill
        sizes="100vw"
        className="-z-20 object-cover object-[70%_60%]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-graphite via-graphite/85 to-graphite/20" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-graphite via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <Reveal>
          <SectionKicker label={t(closing.eyebrow)} />
        </Reveal>
        <DiagonalReveal delay={0.1} className="mt-6">
          <EspinosaWordmark size="lg" />
        </DiagonalReveal>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-fg-muted md:text-xl">{t(closing.subtitle)}</p>
        </Reveal>
      </div>
    </section>
  );
}
