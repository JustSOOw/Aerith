import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes } from "react";

interface AerithButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "golden";
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  primary:
    "bg-gradient-to-r from-aerith-400 to-aerith-500 text-white shadow-[0_0_20px_rgba(242,125,160,0.2)] hover:shadow-[0_0_30px_rgba(242,125,160,0.4)] hover:-translate-y-px active:scale-[0.97]",
  secondary:
    "border border-lifestream-400 text-lifestream-400 bg-transparent hover:bg-lifestream-50 active:scale-[0.97]",
  ghost:
    "text-aerith-400 bg-transparent hover:underline hover:underline-offset-4 hover:decoration-aerith-400",
  golden:
    "bg-gradient-to-r from-lily-400 to-lily-500 text-deep-900 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:-translate-y-px active:scale-[0.97]",
};

const sizeStyles = {
  sm: "h-8 px-3 text-sm rounded-[var(--radius-soft)]",
  md: "h-10 px-5 text-sm rounded-[var(--radius-soft)]",
  lg: "h-12 px-8 text-base rounded-[var(--radius-soft)]",
};

export function AerithButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: AerithButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-[family-name:var(--font-body)] font-medium transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
