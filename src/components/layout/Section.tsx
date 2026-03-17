import { cn } from "@/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  id?: string;
}

export function Section({
  children,
  variant = "light",
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        "py-[clamp(4rem,10vh,8rem)]",
        variant === "dark"
          ? "bg-deep-950 text-warm-100"
          : "bg-warm-50 text-deep-900",
        className
      )}
    >
      {children}
    </section>
  );
}
