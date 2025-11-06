"use client"

import React, { useState } from "react";
import Button from "@/app/_components/Button/Button";
import Image from "next/image";
import Link from "next/link";

import Logo from '@/app/_assets/images/logo-header.svg'

import styles from "./header.module.scss";

const navLinks = [
  { label: "ABOUT", href: "/about-us" },
  { label: "SHOPS", href: "/shops" },
  { label: "TESTIMONIALS", href: "/#testimonials" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`${styles.header} sticky top-0 z-50 bg-white w-full p-4 lg:p-0`}>
      <div className="mx-auto max-w-[1280px] flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Twist & Buckle Logo" width={156} height={86} />
          </a>
        </div>

        {/* Middle + Right: Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <Button size="md" href="/franchises">FRANCHISES</Button>
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
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/franchises"
              size="sm"
              onClick={() => setMenuOpen(false)}
            >
              FRANCHISES
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
