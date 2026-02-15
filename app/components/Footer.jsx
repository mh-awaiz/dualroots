"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#4E2C1C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">YourBrand</h2>
          <p className="text-sm mt-4 text-gray-300 leading-relaxed">
            We deliver premium quality products with trust and fast shipping.
            Built with passion and dedication.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Important Links</h3>
          <div className="flex flex-col gap-3 text-sm">
            <Link
              href="/terms"
              className="hover:text-[#D2B48C] transition duration-200"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#D2B48C] transition duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-5 text-xl">
            <a
              href="#"
              className="hover:text-[#D2B48C] transition duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-[#D2B48C] transition duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-[#D2B48C] transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-[#D2B48C] transition duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#6D3F25] text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
