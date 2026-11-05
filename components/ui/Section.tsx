import type { ReactNode } from "react";
import type { SectionId } from "@/config/site.types";

export type SectionTone = "light" | "dark";

interface SectionProps {
  id: SectionId;
  tone: SectionTone;
  className?: string;
  children: ReactNode;
}

export function Section({ id, tone, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`tone-${tone} relative isolate scroll-mt-16 overflow-x-clip py-20 md:py-28 ${className}`}>
      {tone === "dark" && <div aria-hidden className="matte-texture pointer-events-none absolute inset-0 -z-10" />}
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">{children}</div>
    </section>
  );
}
