"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "Driveways", href: "/services/driveways" },
  { label: "Foundations", href: "/services/foundations" },
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Auger Work", href: "/services/auger-work" },
  { label: "Stump Removal", href: "/services/stump-removal" },
  { label: "Backyard Work", href: "/services/backyard-work" },
  { label: "General Excavations", href: "/services/excavation" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-16 lg:h-auto lg:py-4"}`}>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/images/cropped-512.png"
              alt="Precision Digger Worx logo"
              width={125}
              height={125}
              className={`rounded-full transition-all duration-300 ${scrolled ? "w-10 h-10" : "w-10 h-10 lg:w-[110px] lg:h-[110px]"}`}
            />
            <span className="font-bold text-stone-900 text-sm sm:text-[20px] leading-tight">
              Precision Digger Worx
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-600">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-amber-600 hover:bg-amber-50 ${
                pathname === "/" ? "text-amber-600 bg-amber-50" : ""
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors hover:text-amber-600 hover:bg-amber-50 ${
                  pathname.startsWith("/services") ? "text-amber-600 bg-amber-50" : ""
                }`}
              >
                Services
                <svg
                  className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-xl shadow-lg border border-stone-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-amber-50 hover:text-amber-600 transition-colors ${
                      isActive(link.href) ? "text-amber-600 bg-amber-50" : "text-stone-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/gallery"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-amber-600 hover:bg-amber-50 ${
                pathname === "/gallery" ? "text-amber-600 bg-amber-50" : ""
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg transition-colors hover:text-amber-600 hover:bg-amber-50 ${
                pathname === "/contact" ? "text-amber-600 bg-amber-50" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0226491618"
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              <span className="hidden sm:inline">Call </span>022 649 1618
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-stone-100 py-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2.5 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* Services accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-stone-600 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="block px-3 py-2.5 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2.5 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-600 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
