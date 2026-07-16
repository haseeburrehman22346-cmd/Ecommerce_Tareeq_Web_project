"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "@/components/common/NavLink";
import { cn } from "@/lib/utils";
import { navItems, navActions } from "@/data/navbar";
import { Button } from "@base-ui/react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeMenu, isMenuOpen]);

  return (
    <header className="relative z-50 w-full bg-thread-nav text-thread-nav-foreground">
      <div className="flex h-8 items-center justify-center bg-thread-topbar px-2 text-[10px] min-[360px]:text-xs font-bold uppercase text-thread-topbar-foreground">
        Free shipping on orders over $100
      </div>

      <nav className="mx-auto grid min-h-16 w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-3 min-[360px]:min-h-20 min-[360px]:gap-4 min-[360px]:px-4 sm:px-8 md:grid-cols-[1fr_auto_1fr] lg:px-14">
        <Button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex size-9 items-center justify-center text-thread-nav-foreground transition-colors hover:text-thread-nav-hover min-[360px]:size-10 md:hidden"
        >
          <Menu className="size-6" strokeWidth={2.5} />
        </Button>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.label} {...item} />
          ))}
        </div>

        <Link
          href="/"
          className="justify-self-start text-center md:justify-self-center text-2xl font-black uppercase leading-none tracking-normal min-[360px]:text-3xl"
          aria-label="Tareeq home"
          onClick={closeMenu}
        >
          TAREEQ
        </Link>

        <div className="flex items-center justify-end gap-1 min-[360px]:gap-3 sm:gap-4">
          {navActions.map(({ href, label, icon: Icon, badge }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className={cn(
                "relative inline-flex size-9 items-center justify-center min-[360px]:size-11 text-thread-nav-foreground transition-colors hover:text-thread-nav-hover"
              )}
            >
              <Icon className="size-5 min-[360px]:size-6" strokeWidth={2.5} />
              {badge ? (
                <span className="absolute right-0 top-1 flex size-4 items-center justify-center rounded-full bg-thread-nav-foreground text-[10px] font-bold leading-none text-thread-nav">
                  {badge}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </nav>

      {isMenuOpen ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-foreground/35 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <aside
            id="mobile-navigation"
            className="fixed left-0 top-0 z-50 flex h-dvh w-[280px] max-w-[82vw] flex-col bg-thread-nav px-5 py-5 shadow-2xl md:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <Link href="/" aria-label="Tareeq home" onClick={closeMenu}>

              </Link>
              <Button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="inline-flex size-10 items-center justify-center text-thread-nav-foreground transition-colors hover:text-thread-nav-hover"
              >
                <X className="size-6" strokeWidth={2.5} />
              </Button>
            </div>

            <div className="flex flex-col border-t border-thread-nav-foreground/10 pt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  {...item}
                  className="border-b border-thread-nav-foreground/10 py-5 text-base"
                  onClick={closeMenu}
                />
              ))}
            </div>
          </aside>
        </>
      ) : null}
    </header>
  );
}






