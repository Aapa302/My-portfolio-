"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Showcase", href: "#showcase" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  onAboutClick?: () => void;
}

export default function Navbar({ onAboutClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030303]/80 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Mark & Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-[2px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full rounded-full bg-[#030303] flex items-center justify-center font-display font-bold text-white text-lg tracking-tight group-hover:bg-transparent transition-colors duration-300">
                H
              </div>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-neutral-300 transition-colors">
              HANU AAPA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.name === "About" && onAboutClick) {
                    e.preventDefault();
                    onAboutClick();
                  }
                }}
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-white/10 bg-[#030303]/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (item.name === "About" && onAboutClick) {
                      e.preventDefault();
                      onAboutClick();
                    }
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
