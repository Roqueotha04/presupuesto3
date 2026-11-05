"use client";

import { m } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CheckMark } from "@/components/ui/Glyph";
import { BrandLabel } from "@/components/ui/brand/BrandLabel";
import { DiagonalPhoto } from "@/components/ui/brand/DiagonalPhoto";

const { includes } = siteConfig;

function IncludedItems() {
  const { t } = useLanguage();

  return (
    <ul className="flex flex-col">
      {includes.items.map((item, index) => (
        <m.li
          key={item.es}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-4 border-b border-line py-4"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 skew-x-[-10deg] items-center justify-center bg-brand text-bone">
            <CheckMark className="h-3.5 w-3.5 skew-x-[10deg]" />
          </span>
          <span className="text-[0.95rem] leading-relaxed text-fg">{t(item)}</span>
        </m.li>
      ))}
    </ul>
  );
}

function Extras() {
  const { t } = useLanguage();

  return (
    <Reveal className="mt-10">
      <BrandLabel>{t(includes.extrasLabel)}</BrandLabel>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {includes.extras.map((extra) => (
          <li key={extra.es} className="skew-x-[-10deg] border border-line px-4 py-1.5">
            <span className="inline-block skew-x-[10deg] text-sm font-semibold text-fg-muted">{t(extra)}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Includes() {
  return (
    <Section id="includes" tone="dark">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <SectionHeading heading={includes.heading} kicker={ui.nav.includes} />
          <DiagonalPhoto image={includes.image} sizes="(min-width: 1024px) 45vw, 100vw" className="mt-10 aspect-[4/3]" />
        </div>
        <div className="lg:pt-6">
          <IncludedItems />
          <Extras />
        </div>
      </div>
    </Section>
  );
}
