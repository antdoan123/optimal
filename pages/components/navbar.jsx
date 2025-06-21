"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-medium tracking-wide ${scrolled ? "text-gray-900" : "text-white"}`}>
              OPTIMAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } hover:text-purple-600 text-md font-medium transition-colors`}
            >
              About
            </Link>
            <Link
              href="#facilities"
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } hover:text-purple-600 text-md font-medium transition-colors`}
            >
              Facilities
            </Link>
            <Link
              href="#classes"
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } hover:text-purple-600 text-md font-medium transition-colors`}
            >
              Classes
            </Link>
            <Link
              href="#memberships"
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } hover:text-purple-600 text-md font-medium transition-colors`}
            >
              Memberships
            </Link>
            <Link
              href="#contact"
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } hover:text-purple-600 text-md font-medium transition-colors`}
            >
              Contact
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 text-md font-medium transition-all">
              Join Now
            </Button>
          </div>

          {/* Mobile menu button */}
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
              <Link href="#about" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
                About
              </Link>
              <Link href="#facilities" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
                Facilities
              </Link>
              <Link href="#classes" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
                Classes
              </Link>
              <Link href="#memberships" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
                Memberships
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600 text-sm font-medium">
                Contact
              </Link>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-3 text-sm font-medium">
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
