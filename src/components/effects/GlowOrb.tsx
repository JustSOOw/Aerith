"use client";

import { motion } from "motion/react";
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
    <motion.div
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        opacity: intensity,
      }}
      animate={
        reducedMotion
          ? {}
          : {
              scale: [0.95, 1.05, 0.95],
              opacity: [intensity * 0.8, intensity, intensity * 0.8],
            }
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
