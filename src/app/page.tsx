import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GardenHome } from "@/components/homepage/GardenHome";
import { discoverPages } from "@/lib/discover-pages";

export default function Home() {
  const extensionPages = discoverPages();

  return (
    <>
      <Navbar />
      <main>
        <GardenHome extensionPages={extensionPages} />
      </main>
      <Footer />
    </>
  );
}
