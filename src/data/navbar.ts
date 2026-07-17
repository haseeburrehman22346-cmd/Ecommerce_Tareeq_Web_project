import type { NavAction, NavItem } from "@/types/nav"
import { Search, UserRound } from "lucide-react"

export const navItems: NavItem[] = [
  { label: "Home", href: "/#new-arrivals" },
  { label: "Shop", href: "/#new-arrivals" },
  { label: "Collections", href: "/#new-arrivals" },
  { label: "About Us", href: "/#new-arrivals" },
  { label: "Contact", href: "/#products" },
]

export const navActions: NavAction[] = [
  { label: "Search", href: "/", icon: Search },
  { label: "Account", href: "/", icon: UserRound },
]
