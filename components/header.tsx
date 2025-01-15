'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Moon, Sun, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "about", label: "About Us", type: "section" },
    { href: "projects", label: "Projects", type: "section" },
    { href: "achievements", label: "Achievements", type: "section" },
    { href: "gallery", label: "Gallery", type: "section" },
    { href: "contact", label: "Contact Us", type: "section" },
    { href: "/irc2025", label: "IRC2025", type: "page" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.href))
      const scrollPosition = window.scrollY + 100 // Offset for header height

      sections.forEach((section, index) => {
        if (section) {
          const link = document.querySelector(`a[href="#${navItems[index].href}"]`)
          if (link) {
            if (
              section.offsetTop <= scrollPosition &&
              section.offsetTop + section.offsetHeight > scrollPosition
            ) {
              link.classList.add('text-primary')
            } else {
              link.classList.remove('text-primary')
            }
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 flex h-14 items-center">
        <div className="mr-4 flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.svg" alt="Team Robocon IITR Logo" width={40} height={40} />
            <span className="font-bold sm:inline-block">Team Robocon IITR</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium hidden md:flex">
            {navItems.map((item) => (
              <Link
              key={item.href}
              href={item.type === "page" ? item.href : `/#${item.href}`}
              onClick={(e) => {
                if (item.type === "section" && pathname === "/") {
                  e.preventDefault();
                  scrollToSection(item.href);
                }
              }}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
            ))}
          </nav>
          {/* <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button> */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                  key={item.href}
                  href={item.type === "page" ? item.href : `/#${item.href}`}
                  onClick={(e) => {
                    if (item.type === "section" && pathname === "/") {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                    setIsOpen(false);
                  }}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

