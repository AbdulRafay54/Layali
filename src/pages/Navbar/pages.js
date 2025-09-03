"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* 🔹 Marquee */}
        <div className="bg-gradient-to-r from-yellow-700 via-yellow-700 to-yellow-600 
                        text-white text-sm font-medium overflow-hidden">
          <div className="animate-marquee whitespace-nowrap py-2 text-center">
            🎉 Now Free Delivery All Over Pakistan. Order Now via WhatsApp! 📦
          </div>
        </div>

        {/* 🔹 Navbar Overlay */}
        <div
          className="relative flex flex-col items-center justify-center
                     bg-transparent md:bg-white/90 backdrop-blur-sm
                     transition-all duration-300 shadow-sm"
        >
          {/* Logo */}
          <div className="flex justify-center py-4">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Layali Logo"
                width={160}
                height={70}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex justify-center w-full bg-[#2b1b14]">
            <ul className="flex space-x-12 text-lg font-semibold text-yellow-400 py-5 tracking-wide">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="./About/pages" className="hover:text-white transition">About</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </nav>

          {/* Hamburger Button (Mobile Only) */}
          <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden absolute right-6 top-1/2 -translate-y-1/2 focus:outline-none"
>
  <div className="relative w-9 h-9 flex items-center justify-center">
    <span
      className={`absolute h-[3px] w-7 rounded-full bg-gradient-to-r from-[#3b2f2f] to-black transition-all duration-300 ${
        isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
      }`}
    ></span>
    <span
      className={`absolute h-[3px] w-7 rounded-full bg-gradient-to-r from-[#3b2f2f] to-black transition-all duration-300 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    ></span>
    <span
      className={`absolute h-[3px] w-7 rounded-full bg-gradient-to-r from-[#3b2f2f] to-black transition-all duration-300 ${
        isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
      }`}
    ></span>
  </div>
</button>
        </div>
      </header>

      {/* 🔹 Hero/Slider ke liye padding (to avoid overlap) */}
      <div className="pt-[170px] md:pt-[220px]"></div>

      {/* 🔹 Mobile Sidebar Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="absolute top-0 right-0 h-full w-72 bg-[#2b1b14] text-yellow-300 p-8 space-y-6 shadow-lg animate-slideIn">
            <button
              onClick={() => setIsOpen(false)}
              className="text-yellow-400 hover:text-white mb-6 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <Link href="/" onClick={() => setIsOpen(false)} className="block text-lg hover:text-white">Home</Link>
            <Link href="./About/pages" onClick={() => setIsOpen(false)} className="block text-lg hover:text-white">About</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="block text-lg hover:text-white">Products</Link>
            <Link href="/reviews" onClick={() => setIsOpen(false)} className="block text-lg hover:text-white">Reviews</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-lg hover:text-white">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
