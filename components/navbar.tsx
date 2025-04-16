"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Code, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "#home",
      label: "Home",
      active: activeSection === "home",
    },
    {
      href: "#about",
      label: "Sobre",
      active: activeSection === "about",
    },
    {
      href: "#projects",
      label: "Projetos",
      active: activeSection === "projects",
    },
    {
      href: "#templates",
      label: "Modelos",
      active: activeSection === "templates",
    },
    {
      href: "#contact",
      label: "Contato",
      active: activeSection === "contact",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "templates", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background text-foreground shadow-sm">
      <div className="container flex h-20 items-center justify-between md:px-16">
        {/* Logo com animação de entrada da esquerda */}
        <motion.a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center space-x-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Code className="h-6 w-6" />
          <span className="font-bold text-xl text-primary">Daniel Cardoso</span>
        </motion.a>

        {/* Menu com animação de entrada da direita */}
        <motion.nav
          className="hidden md:flex gap-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {routes.map((route) => (
            <a
              key={route.href}
              href={route.href}
              onClick={(e) => handleClick(e, route.href)}
              className={cn(
                "text-sm md:text-lg font-medium transition-colors hover:text-slate-600",
                route.active ? "text-primary" : "text-gray-950"
              )}
            >
              {route.label}
            </a>
          ))}
        </motion.nav>

        {/* Botão de menu (para telas menores) com animação de entrada da direita */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="hover:bg-accent">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="hidden">Navegacao</SheetTitle>
              <div className="flex flex-col space-y-4 mt-8">
                {routes.map((route) => (
                  <a
                    key={route.href}
                    href={route.href}
                    onClick={(e) => handleClick(e, route.href)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      route.active ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {route.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </header>
  )
}
