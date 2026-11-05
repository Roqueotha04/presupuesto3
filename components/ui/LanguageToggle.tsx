"use client";

import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={t(ui.languageToggle.label)}
      className="h-9 skew-x-[-12deg] border border-line px-3.5 text-xs font-bold tracking-[0.15em] text-fg transition-colors hover:border-brand hover:text-brand"
    >
      <span className="inline-block skew-x-[12deg]">{locale === "es" ? "EN" : "ES"}</span>
    </button>
  );
}
