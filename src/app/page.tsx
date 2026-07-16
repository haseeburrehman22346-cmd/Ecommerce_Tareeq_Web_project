import HeroSection from "@/components/common/Herosection";
import { Footer } from "@/components/layout/Footer";
import Product from "@/components/common/Product";
import { Navbar } from "@/components/layout/NavLink";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background font-sans">
      <Navbar />
      <HeroSection />
      <Product />
      <Footer />
    </main>
  );
}


