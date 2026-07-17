import Image from "next/image";
import Link from "next/link";

import Dailogproduct from "@/components/common/Dailogproduct";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { categoryItems } from "@/data/product";
import { reviews } from "@/data/product";



export default function Product() {
    return (
        <section id="products" className="w-full scroll-mt-24 bg-card text-foreground">
            <div className="w-full py-8">
                <div className="w-full">
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        autoplay
                        className="group/carousel w-full"
                        aria-label="Shop categories"
                    >
                        <CarouselContent className="-ml-2">
                            {categoryItems.map((item) => (
                                <CarouselItem
                                    key={item.image}
                                    className="basis-full pl-2 md:basis-1/2 xl:basis-1/4"
                                >
                                    <Link
                                        href={item.href}
                                        draggable={false}
                                        className="group relative block aspect-[5/4] cursor-grab overflow-hidden bg-muted active:cursor-grabbing"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.alt}
                                            fill
                                            draggable={false}
                                            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                                            className="select-none object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-foreground/5 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                                            <h3 className="text-xl font-black uppercase leading-none sm:text-2xl">
                                                {item.title}
                                            </h3>
                                            <p className="mt-4 text-[10px] font-black uppercase leading-none">
                                                Shop now
                                            </p>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-3 size-10 border-none bg-card/80 text-foreground opacity-0 transition-opacity hover:bg-card focus-visible:opacity-100 group-hover/carousel:opacity-100 sm:left-5" />
                        <CarouselNext className="right-3 size-10 border-none bg-card/80 text-foreground opacity-0 transition-opacity hover:bg-card focus-visible:opacity-100 group-hover/carousel:opacity-100 sm:right-5" />
                    </Carousel>

                    <Dailogproduct />
                </div>
            </div>


            <div className="bg-card px-5 py-9 text-center text-foreground sm:px-10">
                <h2 className="text-xl font-black uppercase leading-none sm:text-2xl">
                    What Our Customers Say
                </h2>

                <div className="mx-auto mt-9 grid max-w-6xl gap-7 md:grid-cols-3 md:gap-0">
                    {reviews.map((review, index) => (
                        <div
                            key={review.name}
                            className="px-6 md:border-r md:border-foreground/20 md:last:border-r-0"
                        >
                            <p className="text-xl leading-none">*****</p>
                            <p className="mx-auto mt-4 max-w-[270px] text-sm font-semibold leading-5">
                                &quot;{review.quote}&quot;
                            </p>
                            <p className="mt-5 text-[10px] font-black uppercase tracking-[0.35em]">
                                - {review.name}
                            </p>
                            {index === 1 ? (
                                <p className="mt-4 text-lg leading-none" aria-hidden="true">
                                    &bull; &bull;
                                </p>
                            ) : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}




