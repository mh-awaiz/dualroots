"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#6D3F25] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-center">
        {/* Center Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:opacity-90 transition"
        >
          YourLogo
        </Link>

        {/* Cart Icon (Right Side) */}
        <div className="absolute right-6 flex items-center">
          <div className="relative cursor-pointer hover:scale-110 transition duration-200">
            <FaShoppingCart size={22} />

            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 bg-white text-[#6D3F25] text-xs font-semibold rounded-full px-1.5 py-0.5">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
