import { cn } from "@/lib/cn";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-soft)] p-6",
        "bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)]",
        "backdrop-blur-[16px]",
        className
      )}
    >
      {children}
    </div>
  );
}
