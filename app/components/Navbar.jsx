"use client";

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#3e2723]/95 via-[#6f4e37]/95 to-[#4b2e2e]/95 shadow-lg border-b border-[#8b5e3c]/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Hamburger Icon (Left) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#f5e6d3] hover:text-[#d2a679] transition duration-300"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Center Logo */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold tracking-wide text-[#f5e6d3] hover:text-[#d2a679] transition duration-300"
        >
          Dual Roots
        </Link>

        {/* Cart Icon (Right) */}
        <div className="relative cursor-pointer group">
          <FaShoppingCart
            size={22}
            className="text-[#f5e6d3] group-hover:text-[#d2a679] transition duration-300"
          />

          <span className="absolute -top-2 -right-2 bg-[#d2a679] text-[#3e2723] text-xs font-semibold rounded-full px-2 py-0.5 shadow-md">
            0
          </span>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="bg-[#5a3e36]/95 backdrop-blur-lg border-t border-[#8b5e3c]/30 shadow-xl">
          <div className="flex flex-col items-center gap-6 py-8 text-[#f5e6d3] text-lg font-medium">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d2a679] transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d2a679] transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
