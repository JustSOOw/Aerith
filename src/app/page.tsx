import { HeroSection } from "@/components/homepage/HeroSection";
import { AboutSection } from "@/components/homepage/AboutSection";
import { GalleryPreview } from "@/components/homepage/GalleryPreview";
import { QuoteSection } from "@/components/homepage/QuoteSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <GalleryPreview />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
