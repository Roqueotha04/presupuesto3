"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { EspinosaWordmark } from "@/components/ui/brand/EspinosaWordmark";

const { company } = siteConfig;

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="tone-dark border-t border-line bg-ink">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-sm">
          <EspinosaWordmark size="md" />
          <p className="mt-4 text-xs leading-relaxed text-fg-muted">{t(ui.footer.confidential)}</p>
          <p className="mt-1 text-xs leading-relaxed text-fg-muted">{t(ui.footer.photoNote)}</p>
        </div>

        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t(ui.footer.visit)}: ${company.name}`}
          className="group flex items-center gap-4"
        >
          <span className="text-right">
            <span className="block text-[0.64rem] font-bold uppercase tracking-[0.2em] text-fg-muted">
              {t(ui.footer.preparedBy)}
            </span>
            <span className="mt-1 block font-heading text-2xl font-extrabold italic text-fg">{company.name}</span>
            <span className="block text-xs text-fg-muted transition-colors group-hover:text-brand">{company.websiteLabel} ↗</span>
          </span>
          <Image src={company.logo} alt={company.name} width={150} height={150} className="h-12 w-12 rounded-xl" />
        </a>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-6xl px-6 py-5 text-xs text-fg-muted md:px-8">
          © {new Date().getFullYear()} {company.name}. {t(ui.footer.rights)}
        </p>
      </div>
    </footer>
  );
}
