"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AerithCard } from "@/components/ui/AerithCard";
import { AerithButton } from "@/components/ui/AerithButton";
import { Starlight } from "@/components/effects/Starlight";
import { GlowOrb } from "@/components/effects/GlowOrb";

const previewImages = [
  {
    src: "/output/backimage/aerith_mood_flower_whisper_v1.png",
    alt: "花之低语",
    title: "花之低语",
  },
  {
    src: "/output/backimage/aerith_mood_sacred_glow_v1.png",
    alt: "神圣光辉",
    title: "神圣光辉",
  },
  {
    src: "/output/backimage/aerith_mood_sunny_bloom_v1.png",
    alt: "阳光绽放",
    title: "阳光绽放",
  },
];

export function GalleryPreview() {
  return (
    <section className="relative bg-deep-800 py-[clamp(4rem,10vh,8rem)]">
      <Starlight count={30} />
      <GlowOrb color="green" size={250} intensity={0.2} className="top-[10%] right-[10%]" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-[family-name:var(--font-accent)] text-[0.7rem] tracking-[0.15em] uppercase text-lifestream-300">
            画廊
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.2] text-warm-100">
            光影与花海
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AerithCard variant="dark" className="image-hover-sweep group overflow-hidden p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-950/60 to-transparent" />
                  <p className="absolute bottom-3 left-4 font-[family-name:var(--font-display)] text-sm text-warm-100">
                    {img.title}
                  </p>
                </div>
              </AerithCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/gallery">
            <AerithButton variant="secondary" className="border-lifestream-300 text-lifestream-300">
              查看全部
            </AerithButton>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
