"use client";

import { m } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const { nextSteps } = siteConfig;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const LINE_DURATION_S = 1.4;

function itemEntrance(index: number) {
  return {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, delay: 0.15 + index * 0.18, ease: EASE_OUT },
  };
}

function TimelineLine() {
  const drawn = { duration: LINE_DURATION_S, ease: EASE_OUT };

  return (
    <>
      <span aria-hidden className="absolute bottom-0 left-[0.55rem] top-1 w-0.5 bg-line lg:inset-x-0 lg:bottom-auto lg:top-[0.6rem] lg:h-0.5 lg:w-auto" />
      <m.span
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={drawn}
        className="absolute bottom-0 left-[0.55rem] top-1 w-0.5 origin-top bg-brand lg:hidden"
      />
      <m.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={drawn}
        className="absolute inset-x-0 top-[0.6rem] hidden h-0.5 origin-left bg-brand lg:block"
      />
    </>
  );
}

function TimelineNode({ isFinal = false }: { isFinal?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute left-0 top-0 z-10 block skew-x-[-24deg] ring-4 ring-bone lg:static ${isFinal ? "h-[1.35rem] w-7 bg-graphite" : "h-[1.35rem] w-5 bg-brand"}`}
    />
  );
}

function ValidityMilestone({ index }: { index: number }) {
  const { t } = useLanguage();
  const { validity } = nextSteps;

  return (
    <m.li {...itemEntrance(index)} className="relative pl-10 lg:pl-0">
      <TimelineNode isFinal />
      <div className="tone-dark relative mt-0 overflow-hidden rounded-xl p-5 lg:mt-6">
        <span aria-hidden className="absolute left-0 top-0 h-[3px] w-14 bg-brand" />
        <p className="font-heading text-lg font-black italic text-brand">
          {validity.number} <span className="text-fg-muted">/</span>
        </p>
        <h3 className="mt-1 font-heading text-3xl font-black uppercase italic leading-none text-fg">{t(validity.title)}</h3>
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">{t(validity.body)}</p>
      </div>
    </m.li>
  );
}

export function NextSteps() {
  const { t } = useLanguage();

  return (
    <Section id="nextSteps" tone="light">
      <SectionHeading heading={nextSteps.heading} kicker={ui.nav.nextSteps} />
      <ol className="relative mt-14 grid gap-9 lg:grid-cols-[repeat(5,minmax(0,1fr))_minmax(0,1.5fr)] lg:gap-6">
        <TimelineLine />
        {nextSteps.steps.map((step, index) => (
          <m.li key={step.es} {...itemEntrance(index)} className="relative pl-10 lg:pl-0">
            <TimelineNode />
            <span className="block font-heading text-5xl font-black italic leading-none text-brand lg:mt-5">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-medium leading-relaxed text-fg">{t(step)}</p>
          </m.li>
        ))}
        <ValidityMilestone index={nextSteps.steps.length} />
      </ol>
    </Section>
  );
}
