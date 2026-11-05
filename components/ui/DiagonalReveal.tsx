"use client";

import type { ReactNode } from "react";
import { m } from "framer-motion";

interface DiagonalRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const DIAGONAL_MASK_HIDDEN = "polygon(0% -25%, 0% -25%, -30% 125%, -30% 125%)";
export const DIAGONAL_MASK_VISIBLE = "polygon(0% -25%, 130% -25%, 100% 125%, -30% 125%)";

export function DiagonalReveal({ children, delay = 0, className }: DiagonalRevealProps) {
  return (
    <m.div
      className={className}
      initial={{ clipPath: DIAGONAL_MASK_HIDDEN }}
      whileInView={{ clipPath: DIAGONAL_MASK_VISIBLE }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </m.div>
  );
}
