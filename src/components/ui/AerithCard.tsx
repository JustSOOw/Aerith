import { cn } from "@/lib/cn";

interface AerithCardProps {
  children: React.ReactNode;
  glow?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

export function AerithCard({
  children,
  glow = false,
  variant = "light",
  className,
}: AerithCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-soft)] p-6 transition-all duration-300",
        "hover:-translate-y-1",
        variant === "light"
          ? "bg-warm-200/70 border border-warm-300/50 hover:shadow-[0_0_30px_rgba(242,125,160,0.1)]"
          : "bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] backdrop-blur-[16px] hover:shadow-[0_0_30px_rgba(242,125,160,0.15)]",
        glow && "shadow-[0_0_40px_rgba(242,125,160,0.15)]",
        className
      )}
    >
      {children}
    </div>
  );
}
