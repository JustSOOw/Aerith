import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

export default function NotesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-deep-950 pt-24">
        <Container>
          <h1 className="font-[family-name:var(--font-display)] text-3xl text-warm-100">
            随记
          </h1>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm text-warm-400">
            简单页面示例 — 单文件扩展，自动出现在首页花园小径中。
          </p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
