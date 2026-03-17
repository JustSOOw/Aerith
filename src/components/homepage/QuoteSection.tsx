"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { GlowOrb } from "@/components/effects/GlowOrb";

export function QuoteSection() {
  return (
    <section className="relative bg-warm-50 py-[clamp(5rem,12vh,10rem)]">
      <GlowOrb color="warm" size={300} intensity={0.25} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Decorative quote mark */}
          <span className="block font-[family-name:var(--font-display)] text-6xl leading-none text-aerith-300/30">
            &ldquo;
          </span>

          <p className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.5vw,1.75rem)] italic leading-[1.5] text-deep-900/80">
            每个人都有自己的星空。
            <br />
            即使在最黑暗的夜晚，花朵依然会绽放。
          </p>

          <span className="mt-2 block font-[family-name:var(--font-display)] text-6xl leading-none text-aerith-300/30">
            &rdquo;
          </span>

          <footer className="mt-6">
            <cite className="font-[family-name:var(--font-accent)] text-xs not-italic tracking-[0.1em] uppercase text-warm-500">
              — Aerith Gainsborough
            </cite>
          </footer>
        </motion.blockquote>
      </Container>
    </section>
  );
}
