import type { ComponentType, SVGProps } from "react"

export type NavItem = {
  label: string
  href: string
}

export type NavAction = {
  label: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  badge?: number
}
