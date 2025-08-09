"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#facilities", label: "Facilities" },
    { href: "#classes", label: "Classes" },
    { href: "#memberships", label: "Memberships" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-[88px]">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <img
              src="/optimallogo.png"
              alt="Optimal Gym Logo"
              className="h-[96px] w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  scrolled ? "text-gray-800" : "text-white"
                } hover:text-purple-600 text-md font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-md font-medium transition-all">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "text-gray-900" : "text-white"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-800 hover:text-purple-600 text-md font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 text-md font-medium">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
