"use client";

import { useRef } from "react";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import type { GlyphItem, LabeledNote } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowCarousel } from "@/components/ui/ArrowCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Glyph } from "@/components/ui/Glyph";
import { OrbitRing } from "@/components/ui/OrbitRing";
import { BrandLabel } from "@/components/ui/brand/BrandLabel";
import { ReportPreview } from "@/components/sections/ReportPreview";

const { maintenance } = siteConfig;
const PANEL_WIDTH_REM = 15;

function MaintenanceCard({ item, position }: { item: GlyphItem; position: number }) {
  const { t } = useLanguage();

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-card p-6 shadow-[0_24px_50px_-30px_rgb(0_0_0/0.4)] ring-1 ring-card-line">
      <span aria-hidden className="absolute left-0 top-0 h-[3px] w-14 bg-brand" />
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 skew-x-[-10deg] items-center justify-center bg-graphite text-bone transition-colors duration-300 group-hover:bg-brand">
          <Glyph name={item.glyph} className="h-5 w-5 skew-x-[10deg]" />
        </span>
        <span className="font-heading text-3xl font-black italic text-fg/15">{String(position).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-6 font-heading text-2xl font-black uppercase italic leading-[0.95] text-fg">{t(item.title)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{t(item.description)}</p>
    </article>
  );
}

function MaintenanceNote({ note }: { note: LabeledNote }) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-4 border-l-[3px] border-l-brand bg-card p-5 ring-1 ring-card-line">
      <Glyph name={note.glyph} className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
      <p className="text-sm leading-relaxed text-fg-muted">
        <strong className="mb-1 block font-bold text-fg">{t(note.label)}</strong>
        {t(note.body)}
      </p>
    </div>
  );
}

export function Maintenance() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const ringPanels = maintenance.items.map((item, index) => (
    <MaintenanceCard key={item.title.es} item={item} position={index + 1} />
  ));

  return (
    <Section id="maintenance" tone="light">
      <SectionHeading heading={maintenance.heading} kicker={ui.nav.maintenance} />

      <Reveal className="mt-8 hidden lg:block">
        <OrbitRing panels={ringPanels} panelWidthRem={PANEL_WIDTH_REM} label={t(maintenance.heading.title)} />
        <p className="-mt-2 flex justify-center">
          <BrandLabel>{t(ui.maintenance.dragHint)}</BrandLabel>
        </p>
      </Reveal>

      <ArrowCarousel trackRef={trackRef} label={t(maintenance.heading.title)} className="mt-12 lg:hidden">
        <ol className="flex w-max gap-4">
          {maintenance.items.map((item, index) => (
            <li key={item.title.es} data-slide className="h-[17rem] w-[72vw] max-w-[16rem] shrink-0 snap-start">
              <MaintenanceCard item={item} position={index + 1} />
            </li>
          ))}
        </ol>
      </ArrowCarousel>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="h-full">
          <ReportPreview report={maintenance.report} />
        </Reveal>
        <div className="flex flex-col gap-4">
          {maintenance.notes.map((note, index) => (
            <Reveal key={note.label.es} delay={0.08 + index * 0.08}>
              <MaintenanceNote note={note} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
