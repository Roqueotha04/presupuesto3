interface SectionKickerProps {
  label: string;
  number?: string;
}

export function SectionKicker({ label, number }: SectionKickerProps) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-fg-muted">
      {number && (
        <span className="font-heading text-lg font-black italic tracking-normal text-brand">
          {number} <span className="text-fg-muted">/</span>
        </span>
      )}
      {label}
      <span aria-hidden className="h-px w-12 bg-line md:w-20" />
      <span aria-hidden className="h-2 w-4 skew-x-[-24deg] bg-brand" />
    </p>
  );
}
