"use client";

import { m } from "framer-motion";
import type { MonthlyReport } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { BrandAvatar } from "@/components/ui/brand/BrandAvatar";

interface ReportPreviewProps {
  report: MonthlyReport;
}

export function ReportPreview({ report }: ReportPreviewProps) {
  const { t } = useLanguage();
  const maxValue = Math.max(...report.rows.map((row) => row.value));

  return (
    <article className="h-full rounded-xl bg-card p-6 shadow-[0_24px_50px_-30px_rgb(0_0_0/0.35)] ring-1 ring-card-line md:p-7">
      <header className="flex items-center gap-3 border-b border-line pb-4">
        <BrandAvatar className="h-9 w-9 text-sm" />
        <div>
          <h3 className="font-heading text-xl font-black uppercase italic leading-none text-fg">{t(report.title)}</h3>
          <p className="mt-1 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-fg-muted">{t(report.subtitle)}</p>
        </div>
      </header>

      <ul className="mt-6 flex flex-col gap-4">
        {report.rows.map((row, index) => (
          <li
            key={row.label.es}
            aria-label={`${t(row.label)}: ${row.value} ${t(report.unit)}`}
            className="grid grid-cols-[5.5rem_1fr_2.75rem] items-center gap-3"
          >
            <span aria-hidden className="font-heading text-lg font-extrabold uppercase italic text-fg">{t(row.label)}</span>
            <span aria-hidden className="h-2.5 overflow-hidden bg-graphite/[0.07]">
              <m.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: row.value / maxValue }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="block h-full origin-left rounded-r-[4px] bg-brand"
              />
            </span>
            <span aria-hidden className="text-right text-sm font-bold tabular-nums text-fg">{row.value}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-fg-muted">{t(report.note)}</p>
    </article>
  );
}
