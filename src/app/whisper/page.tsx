import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingPetals } from "@/components/effects/FloatingPetals";
import { GlowOrb } from "@/components/effects/GlowOrb";
import { Container } from "@/components/layout/Container";
import { MessageBubble } from "./_components/MessageBubble";

export default function WhisperPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-deep-950">
        {/* Hero */}
        <section className="relative flex min-h-[30vh] items-center justify-center overflow-hidden">
          <FloatingPetals density={8} />
          <GlowOrb color="pink" size={200} intensity={0.2} className="top-0 right-[15%]" />
          <div className="relative z-10 text-center">
            <p className="mb-2 font-[family-name:var(--font-accent)] text-[0.7rem] tracking-[0.15em] uppercase text-aerith-300/60">
              Whisper
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-warm-100">
              花语低声
            </h1>
            <p className="mt-2 font-[family-name:var(--font-body)] text-xs text-warm-400/50">
              这是一个扩展模块示例 — 使用了私有 _components 目录
            </p>
          </div>
        </section>

        {/* Message area */}
        <section className="py-12">
          <Container className="max-w-lg">
            <div className="flex flex-col gap-4">
              <MessageBubble from="aerith" text="你好呀，欢迎来到花园 🌸" />
              <MessageBubble from="user" text="这里真美" />
              <MessageBubble from="aerith" text="每一朵花都有自己的故事。你想听哪一个？" />
              <MessageBubble from="user" text="告诉我关于百合花的故事吧" />
              <MessageBubble from="aerith" text="百合花代表着纯洁和重生。即使在最深的黑暗中，它也能找到光的方向..." />
            </div>

            <p className="mt-8 text-center font-[family-name:var(--font-body)] text-xs text-warm-500/30">
              这个页面演示了复杂模块的扩展方式 — 路由文件夹下可以包含 _components 等私有目录
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
