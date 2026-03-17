"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { GlowOrb } from "@/components/effects/GlowOrb";

const images = [
  { src: "/output/backimage/aerith_mood_blessing_light_v1.png", title: "祝福之光" },
  { src: "/output/backimage/aerith_mood_city_warmth_v1.png", title: "城市温度" },
  { src: "/output/backimage/aerith_mood_crystal_prayer_v1.png", title: "水晶祈祷" },
  { src: "/output/backimage/aerith_mood_dreaming_depths_v1.jpg", title: "梦的深处" },
  { src: "/output/backimage/aerith_mood_flower_silence_v1.png", title: "花之静谧" },
  { src: "/output/backimage/aerith_mood_flower_whisper_v1.png", title: "花之低语" },
  { src: "/output/backimage/aerith_mood_forest_breath_v1.png", title: "森林呼吸" },
  { src: "/output/backimage/aerith_mood_gentle_presence_v1.png", title: "温柔存在" },
  { src: "/output/backimage/aerith_mood_healing_silence_v1.png", title: "治愈之静" },
  { src: "/output/backimage/aerith_mood_official_smile_v1.jpg", title: "微笑" },
  { src: "/output/backimage/aerith_mood_open_sky_v1.png", title: "开阔天空" },
  { src: "/output/backimage/aerith_mood_quiet_prayer_v1.png", title: "静默祈祷" },
  { src: "/output/backimage/aerith_mood_sacred_glow_v1.png", title: "神圣光辉" },
  { src: "/output/backimage/aerith_mood_seaside_arrival_v1.png", title: "海边到来" },
  { src: "/output/backimage/aerith_mood_soft_gaze_v1.png", title: "温柔凝望" },
  { src: "/output/backimage/aerith_mood_summer_shore_v1.png", title: "夏日海岸" },
  { src: "/output/backimage/aerith_mood_sunny_bloom_v1.png", title: "阳光绽放" },
  { src: "/output/backimage/aerith_mood_sunset_wandering_v1.png", title: "夕阳漫步" },
  { src: "/output/backimage/aerith_mood_tender_bloom_v1.png", title: "温柔花开" },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null && lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  }, [lightboxIndex]);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-deep-950">
          <FloatingPetals density={12} />
          <GlowOrb color="pink" size={250} intensity={0.3} className="top-0 right-[10%]" />
          <div className="relative z-10 text-center">
            <p className="mb-2 font-[family-name:var(--font-accent)] text-[0.7rem] tracking-[0.15em] uppercase text-aerith-300/80">
              Gallery
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-semibold text-warm-100">
              光影画廊
            </h1>
            <p className="mt-3 font-[family-name:var(--font-body)] text-sm text-warm-300/70">
              Aerith 的世界，以光与花编织的瞬间
            </p>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="bg-warm-50 py-[clamp(3rem,8vh,6rem)]">
          <Container>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className="image-hover-sweep group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-[var(--radius-soft)]"
                  onClick={() => setLightboxIndex(i)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.title}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-3 left-4 font-[family-name:var(--font-display)] text-sm text-warm-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {img.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />

      {/* Lightbox with keyboard navigation */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-950/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].title}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto rounded-[var(--radius-soft)] object-contain"
              />
              <p className="mt-3 text-center font-[family-name:var(--font-display)] text-lg text-warm-200">
                {images[lightboxIndex].title}
              </p>

              {/* Navigation */}
              {lightboxIndex > 0 && (
                <button
                  className="absolute left-[-3rem] top-1/2 -translate-y-1/2 text-warm-300 transition-colors hover:text-aerith-300"
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  aria-label="上一张"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
              )}
              {lightboxIndex < images.length - 1 && (
                <button
                  className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-warm-300 transition-colors hover:text-aerith-300"
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  aria-label="下一张"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              )}

              {/* Close button */}
              <button
                className="absolute -top-10 right-0 text-warm-400 transition-colors hover:text-aerith-300"
                onClick={closeLightbox}
                aria-label="关闭 (ESC)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
