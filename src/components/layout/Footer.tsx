import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { socialLinks, footerSections } from "@/data/footer";
import { Button } from "@/components/ui/button";


export function Footer() {
    return (
        <footer className="bg-[#070707] px-5 py-10 text-white sm:px-10 lg:px-14">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1.6fr] md:gap-8">
                <div>
                    <Link href="/" aria-label="Tareeq home" className="inline-block">
                        <span className="block text-4xl font-black uppercase leading-none tracking-normal">
                            TAREEQ
                        </span>
                    </Link>
                    <p className="mt-6 max-w-48 text-sm font-semibold leading-5 text-white/65">
                        Premium quality clothing for everyday legends.
                    </p>
                    <div className="mt-5 flex items-center gap-5">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-white transition-colors hover:text-white/70"
                            >
                                <Icon className="size-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                {footerSections.map((section) => (
                    <div key={section.title}>
                        <h2 className="text-sm font-black uppercase leading-none text-white">
                            {section.title}
                        </h2>
                        <ul className="mt-5 space-y-2.5">
                            {section.links.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="/#products"
                                        className="text-sm font-semibold text-white/65 transition-colors hover:text-white"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h2 className="text-sm font-black uppercase leading-none text-white">
                        Newsletter
                    </h2>
                    <p className="mt-5 max-w-64 text-sm font-semibold leading-5 text-white/65">
                        Be the first to know about new drops and exclusive offers.
                    </p>
                    <form className="mt-5 flex h-12 max-w-80 border border-white/20" action="#">
                        <input
                            type="email"
                            aria-label="Email address"
                            placeholder="Your email"
                            className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-white outline-none placeholder:text-white/45"
                        />
                        <Button
                            type="submit"
                            aria-label="Subscribe"
                            className="inline-flex h-full w-14 items-center justify-center rounded-none border-l border-white/20 bg-transparent px-0 text-white transition-colors hover:bg-white hover:text-black"
                        >
                            <ArrowRight className="size-6" strokeWidth={2.5} />
                        </Button>
                    </form>
                </div>
            </div>

            <p className="mx-auto mt-9 max-w-7xl text-center text-xs font-black uppercase tracking-normal text-white/35">
                &copy; 2024 TAREEQ. All Rights Reserved.
            </p>
        </footer>
    );
}



