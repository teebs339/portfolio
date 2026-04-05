"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Home, Briefcase, Code, Award, FileText, GraduationCap, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { personalInfo } from "@/lib/data"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Achievements", href: "/achievements", icon: Award },
  { name: "Certifications", href: "/certifications", icon: FileText },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Contact", href: "/#contact", icon: Mail },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [sheetOpen, setSheetOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/#contact") return false
    return pathname === href
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
          {personalInfo.name}
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                title={item.name}
                className={cn(
                  "inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-smooth",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden lg:inline">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation - Hamburger + Sheet */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-smooth",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
