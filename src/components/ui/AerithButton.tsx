"use client";

import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, type MouseEvent, useRef } from "react";

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
  onClick,
  ...props
}: AerithButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // Ripple effect
    if (variant !== "ghost" && buttonRef.current) {
      const button = buttonRef.current;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
        width: 0; height: 0;
        left: ${x}px; top: ${y}px;
        transform: translate(-50%, -50%);
        pointer-events: none;
        animation: buttonRipple 0.5s ease-out forwards;
      `;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    }

    onClick?.(e);
  };

  return (
    <>
      <style>{`
        @keyframes buttonRipple {
          0% { width: 0; height: 0; opacity: 1; }
          100% { width: 200px; height: 200px; opacity: 0; }
        }
      `}</style>
      <button
        ref={buttonRef}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden font-[family-name:var(--font-body)] font-medium transition-all duration-200",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
