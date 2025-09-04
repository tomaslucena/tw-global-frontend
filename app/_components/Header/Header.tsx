"use client"

import React, { useState } from "react";
import Button from "@/app/_components/Button/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Find Us", href: "#findus" },
  { label: "Social Responsibility", href: "#social" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white w-full">
      <div className="mx-auto max-w-[1280px] flex items-center justify-between py-3 md:py-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center gap-2">
            {/* Placeholder logo */}
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-lg text-gray-600">
              LOGO
            </div>
          </a>
        </div>

        {/* Middle + Right: Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <Button>FRANCHISES</Button>
        </div>

        {/* Hamburger: Mobile Nav */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in absolute left-0 right-0 top-full z-40">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#franchises"
              className="mt-2 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              FRANCHISES
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
