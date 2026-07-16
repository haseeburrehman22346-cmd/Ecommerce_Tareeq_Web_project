import Link from "next/link";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

type NavLinkProps = NavItem & {
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, label, className, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "whitespace-nowrap text-sm font-extrabold uppercase leading-none md:text-base text-thread-nav-foreground transition-colors hover:text-thread-nav-hover",
        className
      )}
    >
      {label}
    </Link>
  );
}


