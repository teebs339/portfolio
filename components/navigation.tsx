"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const isMobile = useMobile()

  if (isMobile) {
    return <MobileNavigation />
  }

  return <DesktopNavigation />
}

function DesktopNavigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navItems.map((item) => {
        const sectionId = item.href.substring(1)
        const isActive = activeSection === sectionId
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`
              px-4 py-2 text-sm font-medium rounded-md transition-smooth
              ${isActive
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }
            `}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-2 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-base font-medium rounded-lg hover:bg-muted hover:text-primary transition-smooth"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
