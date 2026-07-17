"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

type NavLinkProps = NavItem & {
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, label, className, onClick }: NavLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const [path, hash] = href.split("#");
    if (!hash || (path || "/") !== pathname) return;

    const target = document.getElementById(hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "whitespace-nowrap text-sm font-extrabold uppercase leading-none md:text-base text-thread-nav-foreground transition-colors hover:text-thread-nav-hover",
        className
      )}
    >
      {label}
    </Link>
  );
}
