import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/common/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/NavLink";
import { CONTACT_EMAIL, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/data/contact";


export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background font-sans">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl flex-1 px-5 py-12 sm:px-10 sm:py-16 lg:px-14">
        <h1 className="text-4xl font-black uppercase leading-none tracking-normal sm:text-5xl">
          Contact Us
        </h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <ContactForm />

          <aside className="flex flex-col gap-6 border-t border-foreground/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <h2 className="text-sm font-black uppercase tracking-wide">
              Reach Us Directly
            </h2>

            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3"
            >
              <MessageCircle className="mt-0.5 size-5 shrink-0" strokeWidth={2.5} />
              <span>
                <span className="block text-xs font-black uppercase tracking-wide">
                  WhatsApp
                </span>
                <span className="mt-1 block text-sm font-semibold text-foreground/65 transition-colors group-hover:text-foreground">
                  +{WHATSAPP_NUMBER}
                </span>
              </span>
            </Link>

            <Link href={`tel:+${WHATSAPP_NUMBER}`} className="group flex items-start gap-3">
              <Phone className="mt-0.5 size-5 shrink-0" strokeWidth={2.5} />
              <span>
                <span className="block text-xs font-black uppercase tracking-wide">
                  Phone
                </span>
                <span className="mt-1 block text-sm font-semibold text-foreground/65 transition-colors group-hover:text-foreground">
                  +{WHATSAPP_NUMBER}
                </span>
              </span>
            </Link>

            <Link href={`mailto:${CONTACT_EMAIL}`} className="group flex items-start gap-3">
              <Mail className="mt-0.5 size-5 shrink-0" strokeWidth={2.5} />
              <span>
                <span className="block text-xs font-black uppercase tracking-wide">
                  Email
                </span>
                <span className="mt-1 block text-sm font-semibold text-foreground/65 transition-colors group-hover:text-foreground">
                  {CONTACT_EMAIL}
                </span>
              </span>
            </Link>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
