import { cn } from "@/lib/cn";

interface AerithBadgeProps {
  children: React.ReactNode;
  color?: "pink" | "green" | "gold" | "neutral";
  className?: string;
}

const colorStyles = {
  pink: "bg-aerith-100 text-aerith-600 border-aerith-200",
  green: "bg-lifestream-100 text-lifestream-600 border-lifestream-200",
  gold: "bg-lily-100 text-lily-700 border-lily-200",
  neutral: "bg-warm-200 text-warm-700 border-warm-300",
};

export function AerithBadge({
  children,
  color = "pink",
  className,
}: AerithBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-0.5",
        "font-[family-name:var(--font-accent)] text-[0.7rem] uppercase tracking-[0.05em]",
        "transition-shadow duration-200 hover:shadow-[0_0_12px_rgba(242,125,160,0.15)]",
        colorStyles[color],
        className
      )}
    >
      {children}
    </span>
  );
}
