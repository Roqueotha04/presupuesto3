"use client";

import { useRef, useState } from "react";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowCarousel } from "@/components/ui/ArrowCarousel";
import { CoverflowCarousel } from "@/components/ui/CoverflowCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { BenefitCard } from "@/components/sections/BenefitCard";

const { benefits } = siteConfig;
const CARD_WIDTH_REM = 17.5;

export function Benefits() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => setFlippedIndex((current) => (current === index ? null : index));

  const focusCard = (index: number) => {
    setActiveIndex(index);
    setFlippedIndex(null);
  };

  const renderCard = (index: number) => (
    <BenefitCard
      benefit={benefits.items[index]}
      exampleLabel={benefits.exampleLabel}
      position={index + 1}
      isFlipped={flippedIndex === index}
      onFlip={() => toggleFlip(index)}
    />
  );

  return (
    <Section id="benefits" tone="dark">
      <SectionHeading heading={benefits.heading} kicker={ui.nav.benefits} />

      <Reveal delay={0.1} className="mt-14 hidden md:block">
        <CoverflowCarousel
          count={benefits.items.length}
          activeIndex={activeIndex}
          onActiveChange={focusCard}
          label={t(benefits.heading.title)}
          itemWidthRem={CARD_WIDTH_REM}
          renderItem={renderCard}
        />
      </Reveal>

      <Reveal delay={0.1} className="md:hidden">
        <ArrowCarousel trackRef={trackRef} label={t(benefits.heading.title)} className="mt-10">
          <ol className="flex w-max gap-4">
            {benefits.items.map((benefit, index) => (
              <li key={benefit.title.es} data-slide className="h-[25rem] w-[76vw] max-w-[17.5rem] shrink-0 snap-start">
                {renderCard(index)}
              </li>
            ))}
          </ol>
        </ArrowCarousel>
      </Reveal>
    </Section>
  );
}
