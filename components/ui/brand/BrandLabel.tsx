type LabelTone = "muted" | "onBrand";

interface BrandLabelProps {
  children: string;
  tone?: LabelTone;
}

const toneClasses: Record<LabelTone, { text: string; mark: string }> = {
  muted: { text: "text-fg-muted", mark: "bg-brand" },
  onBrand: { text: "text-bone", mark: "bg-graphite" },
};

export function BrandLabel({ children, tone = "muted" }: BrandLabelProps) {
  const styles = toneClasses[tone];

  return (
    <span className={`flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.2em] ${styles.text}`}>
      {children}
      <span aria-hidden className={`h-1.5 w-3 shrink-0 skew-x-[-24deg] ${styles.mark}`} />
    </span>
  );
}
