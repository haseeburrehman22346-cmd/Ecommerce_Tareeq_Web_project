import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative isolate flex flex-1 overflow-hidden bg-background min-h-[calc(100vh-160px)] md:min-h-[calc(100vh-108px)]">
      <Image
        src="/threads-hero.png"
        alt="Model wearing a black oversized hoodie"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover object-[66%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/60 to-transparent md:hidden" />

      <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-10 min-[360px]:px-6 sm:px-10 lg:px-20">
        <div className="max-w-[480px] text-foreground">
          <p className="mb-4 text-xs font-black uppercase leading-none sm:text-sm">
            New collection
          </p>
          <h1 className="max-w-[390px] text-[44px] font-black uppercase leading-[0.9] min-[360px]:text-[56px] sm:text-[76px] md:text-[86px] [font-family:Impact,var(--font-geist-sans),sans-serif]">
            Wear your identity
          </h1>
          <p className="mt-5 text-sm font-semibold leading-6 min-[360px]:text-base min-[360px]:leading-7 text-foreground/80 sm:text-lg">
            Premium quality. Timeless style.
          </p>
          <Button
            render={<Link href="/#products" />}
            nativeButton={false}
            size="lg"
            className="mt-7 h-10 min-w-28 min-[360px]:min-w-32 rounded-none bg-primaryblack px-7 text-[11px] font-black uppercase leading-none text-primary-foreground hover:bg-foreground/80"
          >
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
}





