"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const SHEETBEST_URL =
  "https://api.sheetbest.com/sheets/1187d393-08dc-4e56-9108-21a289b07e85"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [announcement, setAnnouncement] = useState(null)

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // announcement fetch
  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch(SHEETBEST_URL)
        const data = await res.json()

        console.log("Sheetbest data:", data)

        if (!Array.isArray(data) || data.length === 0) return

        // Find the row where name is "ALERT" (or any special marker you pick)
        const alertRow = data.find(
          (row) =>
            String(row.name || "")
              .toLowerCase()
              .trim() === "alert"
        )

        if (!alertRow) return

        // Use duration as the message, description as optional url
        const message = (alertRow.duration || "").trim()
        const url = (alertRow.description || "").trim() || null

        if (message) {
          setAnnouncement({ message, url })
        }
      } catch (err) {
        console.error("Announcement fetch error:", err)
      }
    }

    fetchAnnouncement()
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#amenities", label: "Amenities" },
    { href: "#classes", label: "Classes" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Notification Bar */}
      {announcement && (
        <div className="w-full bg-purple-700 text-white text-xs sm:text-sm px-4 sm:px-6 py-2 flex items-center justify-center">
          {announcement.url ? (
            <a
              href={announcement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline flex items-center gap-1"
            >
              {announcement.message}
            </a>
          ) : (
            <span>{announcement.message}</span>
          )}
        </div>
      )}

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
