import type { NavAction, NavItem } from "@/types/nav"
import { Search, UserRound } from "lucide-react"

export const navItems: NavItem[] = [
  { label: "Home", href: "/#products" },
  { label: "Shop", href: "/#products" },
  { label: "Collections", href: "/#products" },
  { label: "About Us", href: "/#products" },
  { label: "Contact", href: "/#products" },
]

export const navActions: NavAction[] = [
  { label: "Search", href: "/", icon: Search },
  { label: "Account", href: "/", icon: UserRound },
]
