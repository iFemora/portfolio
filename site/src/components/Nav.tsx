"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/now", label: "Now" },
];

export default function Nav() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg)] border-b border-[var(--border)] transition-colors">
      <nav
        className="max-w-layout mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Name / Logo */}
        <Link
          href="/"
          className="font-serif text-[var(--text)] text-lg font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          Femi Siji-Kenneth
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-[var(--text)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors ml-2"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-[var(--text)]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
          <div className="max-w-layout mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-[var(--text)]" : "text-[var(--muted)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
