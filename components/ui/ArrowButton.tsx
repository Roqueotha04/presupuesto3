import { ChevronIcon } from "@/components/ui/Glyph";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
  label: string;
  className?: string;
}

export function ArrowButton({ direction, onClick, disabled, label, className = "" }: ArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card text-fg shadow-[0_10px_30px_-12px_rgb(0_0_0/0.4)] transition-[color,border-color,opacity] duration-300 hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-0 ${className}`}
    >
      <ChevronIcon direction={direction} />
    </button>
  );
}
