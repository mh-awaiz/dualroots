"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#3e2723] via-[#6f4e37] to-[#4b2e2e] text-[#f5e6d3] border-t border-[#8b5e3c]/40">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide text-[#f5e6d3]">
            Dual Roots
          </h2>
          <p className="text-sm mt-5 text-[#e8d8c3] leading-relaxed">
            We deliver premium quality products crafted with passion and
            dedication. Experience luxury, comfort, and authenticity in every
            purchase.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold mb-6 text-[#f5e6d3] text-lg">
            Important Links
          </h3>

          <div className="flex flex-col gap-4 text-sm">
            <Link
              href="/contact"
              className="hover:text-[#d2a679] transition duration-300"
            >
              Contact Us
            </Link>

            <Link
              href="/terms"
              className="hover:text-[#d2a679] transition duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className="hover:text-[#d2a679] transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-6 text-[#f5e6d3] text-lg">
            Follow Us
          </h3>

          <div className="flex gap-6 text-xl">
            <a
              href="#"
              className="hover:text-[#d2a679] transition duration-300"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="hover:text-[#d2a679] transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="hover:text-[#d2a679] transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="hover:text-[#d2a679] transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#8b5e3c]/40 text-center py-5 text-sm text-[#e8d8c3]">
        © {new Date().getFullYear()} Dual Roots. All rights reserved.
      </div>
    </footer>
  );
}
