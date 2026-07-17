"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { newArrivalItems } from "@/data/dailogproduct";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const visibleItemCount = 5;

export default function Dailogproduct() {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll
        ? newArrivalItems
        : newArrivalItems.slice(0, visibleItemCount);

    async function openWhatsAppOrder(item: (typeof newArrivalItems)[number]) {
        const message = [
            "Assalam o Alaikum, I want to order this product:",
            `Product: ${item.title}`,
            `Price: ${item.price}`,
            `Image: ${item.image}`,
        ].join("\n");

        const whatsappUrl = `https://wa.me/923025706287?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    }

    return (
        <div className="mt-8">
            <div className="grid min-h-48 bg-primaryblack text-primary-foreground md:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)]">
                <div className="relative min-h-48 overflow-hidden">
                    <Image
                        src="/assets/imageone.png"
                        alt="Model wearing Tareeq clothing"
                        fill
                        sizes="(max-width: 767px) 100vw, 40vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primaryblack/25" />
                </div>

                <div className="flex items-center px-6 py-10 sm:px-12 lg:px-24">
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-black uppercase leading-none sm:text-3xl">
                            About Tareeq
                        </h2>
                        <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-primary-foreground/80">
                            Tareeq is more than just a brand. It is a mindset. We create pieces
                            that blend comfort, quality and style for the new generation.
                            Wear it. Own it. Live it.
                        </p>
                        <Button
                            render={<Link href="/#products" />}
                            nativeButton={false}
                            variant="outline"
                            size="sm"
                            className="mt-6 rounded-none border-primary-foreground/60 bg-transparent px-6 text-[10px] font-black uppercase text-primary-foreground hover:bg-primary-foreground hover:text-primaryblack"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            <div
                id="new-arrivals"
                className="relative mt-8 flex min-h-16 w-full scroll-mt-24 flex-col items-center justify-center gap-3 bg-card px-4 py-5 min-[360px]:px-6 sm:mt-10 sm:flex-row sm:gap-0 sm:py-5 lg:px-8"
            >
                <h2 className="text-center text-2xl font-black uppercase leading-none min-[360px]:text-3xl">
                    New Arrivals
                </h2>
                <Button
                    type="button"
                    nativeButton
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAll((current) => !current)}
                    className="h-8 rounded-none border-foreground/20 bg-card px-4 text-[10px] font-black uppercase text-foreground hover:bg-muted sm:absolute sm:right-4 min-[360px]:sm:right-6 lg:right-8"
                >
                    {showAll ? "Show Less" : "View All"}
                </Button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 px-4 min-[360px]:px-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
                {visibleItems.map((item) => (
                    <Dialog key={item.image}>
                        <DialogTrigger
                            render={
                                <button
                                    type="button"
                                    className="group block w-full text-left outline-none"
                                    aria-label={`View ${item.title}`}
                                />
                            }
                        >
                            <span className="relative block aspect-[4/5] overflow-hidden bg-muted">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 20vw"
                                    className="object-contain"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-card text-foreground">
                                        <Eye className="size-5" />
                                    </span>
                                </span>
                            </span>
                            <span className="mt-3 block text-[11px] font-black uppercase leading-4 text-foreground">
                                {item.title}
                            </span>
                            <span className="mt-1 block text-xs font-bold leading-none text-foreground/80">
                                {item.price}
                            </span>
                        </DialogTrigger>

                        <DialogContent className="max-w-[calc(100%-2rem)] gap-0 overflow-hidden rounded-none p-0 sm:max-w-3xl">
                            <div className="grid bg-card md:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)]">
                                <div className="relative aspect-[4/5] min-h-[320px] bg-muted md:min-h-[460px]">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 767px) 100vw, 55vw"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-6 sm:p-8">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-black uppercase leading-none sm:text-3xl">
                                            {item.title}
                                        </DialogTitle>
                                        <DialogDescription className="text-base font-bold text-foreground/75">
                                            {item.price}
                                        </DialogDescription>
                                    </DialogHeader>
                                    <p className="mt-6 text-sm font-semibold leading-6 text-foreground/75">
                                        Premium Tareeq everyday wear with clean styling, soft feel,
                                        and a confident streetwear fit.
                                    </p>
                                    <Button
                                        type="button"
                                        nativeButton
                                        size="lg"
                                        onClick={() => openWhatsAppOrder(item)}
                                        className="mt-7 h-10 w-full rounded-none bg-primaryblack px-6 text-[11px] font-black uppercase text-primary-foreground hover:bg-foreground/80 sm:w-auto"
                                    >
                                        Shop Now
                                    </Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}