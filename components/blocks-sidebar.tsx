"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const components = [
  {
    title: "Components",
    items: [
      {
        title: "Scroll Sync Accordion",
        href: "/blocks",
      },
      {
        title: "Component Showcase",
        href: "/blocks/component-showcase",
      },
      {
        title: "Hero",
        href: "/blocks/hero",
      },
      {
        title: "Forms",
        href: "/blocks/forms",
      },
    ],
  },
]

export function BlocksSidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 border-r border-border bg-background h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2">
            <h2 className="text-xl font-bold">DopeCN</h2>
          </Link>
          <ThemeToggle />
        </div>

        <nav className="space-y-6">
          {components.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 rounded-md text-sm transition-colors",
                          isActive
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

