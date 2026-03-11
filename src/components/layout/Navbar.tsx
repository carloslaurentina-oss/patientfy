"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { buttonVariants } from "@/components/ui/Button";

const navItems = [
  {
    label: "About",
    href: "/about-us",
    dropdown: [
      { label: "Mission", href: "/about-us#mission" },
      { label: "Team", href: "/about-us/team" },
      { label: "Office", href: "/about-us#office" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [],
  },
  {
    label: "Treatments",
    href: "/treatments",
    dropdown: [],
  },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "Insurance", href: "/insurance" },
      { label: "Financing", href: "/financing" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-neutral-25/95 backdrop-blur-sm shadow-sm" : "bg-neutral-25"
        } ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="container-large padding-global">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-8 w-auto text-neutral-1000" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                // biome-ignore lint/a11y/noStaticElementInteractions: <explanation>
                  <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-medium text-neutral-800 hover:text-neutral-1000 transition-colors py-2"
                  >
                    {item.label}
                    {item.dropdown.length > 0 && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                        focusable="false"
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                  </Link>
                  {item.dropdown.length > 0 && (
                    <div
                      className={`absolute top-full left-0 min-w-[180px] bg-white border border-neutral-100 shadow-lg transition-all duration-200 ${
                        openDropdown === item.label
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-1000 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact-us"
                className="text-sm font-medium text-neutral-800 hover:text-neutral-1000 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:8657778484"
                className="button-secondary-dark text-sm"
              >
                <strong>(865) 777-8484</strong>
              </a>
              <Link href="/contact-us" className={buttonVariants()}>
                Book Now
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
                </svg>
              </Link>
            </div>

            {/* Mobile trigger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-neutral-800 transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-neutral-800 transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-neutral-800 transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 pt-16 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="padding-global py-8 flex flex-col gap-6 h-full overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-neutral-100 pb-4">
              <p className="text-base font-semibold text-neutral-1000 mb-3">
                {item.label}
              </p>
              {item.dropdown.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block py-2 text-sm text-neutral-600 hover:text-primary-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {sub.label}
                </Link>
              ))}
              {item.dropdown.length === 0 && (
                <Link
                  href={item.href}
                  className="block py-2 text-sm text-neutral-600 hover:text-primary-500"
                  onClick={() => setMobileOpen(false)}
                >
                  View all
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact-us"
            className="text-base font-semibold text-neutral-1000"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <div className="flex flex-col gap-3 mt-auto pt-8 border-t border-neutral-100">
            <Link href="/contact-us" className={buttonVariants({ class: "text-center" })} onClick={() => setMobileOpen(false)}>
              Book Now
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="square" />
              </svg>
            </Link>
            <a href="tel:8657778484" className={buttonVariants({ variant: "secondary-dark", class: "text-center" })}>
              (865) 777-8484
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
