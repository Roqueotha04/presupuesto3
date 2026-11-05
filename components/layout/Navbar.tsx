"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useScroll } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { ui } from "@/config/i18n";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { EspinosaWordmark } from "@/components/ui/brand/EspinosaWordmark";

const { navigation } = siteConfig;

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <m.span aria-hidden style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand" />
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden className="h-5 w-5">
      <path d={isOpen ? "M6 6l12 12M18 6 6 18" : "M4 8h16M4 16h16"} />
    </svg>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("click", closeOnOutsideClick);
    return () => document.removeEventListener("click", closeOnOutsideClick);
  }, [isOpen]);

  return (
    <header ref={headerRef} className="tone-dark fixed inset-x-0 top-0 z-50 border-b border-line bg-graphite/95 backdrop-blur">
      <nav aria-label={t(ui.menu.label)} className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a href="#hero" className="transition-opacity hover:opacity-85">
          <EspinosaWordmark size="sm" />
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navigation.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative py-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-fg-muted transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:text-fg hover:after:scale-x-100"
              >
                {t(ui.nav[id])}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? t(ui.menu.close) : t(ui.menu.open)}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center text-fg md:hidden"
          >
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </nav>
      <ScrollProgress />

      <AnimatePresence>
        {isOpen && (
          <m.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            {navigation.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-line px-6 py-4 font-heading text-2xl font-black uppercase italic text-fg transition-colors hover:text-brand"
                >
                  {t(ui.nav[id])}
                </a>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
