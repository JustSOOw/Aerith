"use client";

import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlowOrbProps {
  color?: "pink" | "green" | "warm" | "gold";
  size?: number;
  intensity?: number;
  className?: string;
}

const COLOR_MAP = {
  pink: "rgba(242, 125, 160, 0.35)",
  green: "rgba(74, 192, 135, 0.3)",
  warm: "rgba(253, 246, 238, 0.4)",
  gold: "rgba(250, 204, 21, 0.25)",
};

export function GlowOrb({
  color = "pink",
  size = 300,
  intensity = 0.6,
  className,
}: GlowOrbProps) {
  const reducedMotion = useReducedMotion();
  const glowColor = COLOR_MAP[color];

  return (
    <>
      <style>{`
        @keyframes orbPulse {
          0%, 100% { transform: scale(0.95); opacity: var(--orb-lo); }
          50% { transform: scale(1.05); opacity: var(--orb-hi); }
        }
      `}</style>
      <div
        className={cn("pointer-events-none absolute rounded-full", className)}
        style={{
          width: size,
          height: size,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          "--orb-lo": intensity * 0.8,
          "--orb-hi": intensity,
          animation: reducedMotion ? "none" : "orbPulse 6s ease-in-out infinite",
          opacity: intensity,
          willChange: "transform, opacity",
        } as React.CSSProperties}
      />
    </>
  );
}
