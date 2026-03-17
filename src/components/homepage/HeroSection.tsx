"use client";

import { motion } from "motion/react";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { ShimmerText } from "@/components/effects/ShimmerText";
import { AerithButton } from "@/components/ui/AerithButton";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-950">
      {/* Background effects */}
      <FloatingPetals density={22} />
      <GlowOrb color="pink" size={400} intensity={0.5} className="top-[-10%] right-[-5%]" />
      <GlowOrb color="green" size={350} intensity={0.4} className="bottom-[-10%] left-[-5%]" />
      <GlowOrb color="gold" size={200} intensity={0.2} className="top-[30%] left-[20%]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-4 font-[family-name:var(--font-accent)] text-xs tracking-[0.2em] uppercase text-aerith-300/80">
            Final Fantasy VII Remake
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          <ShimmerText>Aerith</ShimmerText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 max-w-md font-[family-name:var(--font-body)] text-base leading-relaxed text-warm-300/80"
        >
          在星光与花海之间，寻找属于你的故事
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 flex gap-4"
        >
          <Link href="/gallery">
            <AerithButton variant="primary" size="lg">
              探索画廊
            </AerithButton>
          </Link>
          <Link href="/about">
            <AerithButton variant="ghost" size="lg" className="text-warm-200 hover:text-aerith-300 hover:decoration-aerith-300">
              了解更多
            </AerithButton>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-warm-400/50">
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
}
