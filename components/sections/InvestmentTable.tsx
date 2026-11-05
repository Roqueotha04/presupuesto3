"use client";

import type { InvestmentContent } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";

interface InvestmentTableProps {
  table: InvestmentContent["table"];
}

export function InvestmentTable({ table }: InvestmentTableProps) {
  const { t } = useLanguage();

  return (
    <table className="w-full border-collapse text-left text-sm">
      <thead>
        <tr className="border-b-2 border-brand text-[0.64rem] font-bold uppercase tracking-[0.2em] text-fg-muted">
          <th scope="col" className="py-3 pr-4 font-bold">{t(table.conceptLabel)}</th>
          <th scope="col" className="py-3 text-right font-bold">{table.amountLabel}</th>
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row.concept.es} className="border-b border-line">
            <td className="py-4 pr-4 text-fg-muted">{t(row.concept)}</td>
            <td className="whitespace-nowrap py-4 text-right font-heading text-2xl font-black italic text-fg">{t(row.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
