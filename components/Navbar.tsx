"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-md shadow-sm border-b border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-48 h-14 transition-opacity hover:opacity-90">
              <Image
                src="/logo.png"
                alt="Brand Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 192px) 100vw, 192px"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-300 font-medium hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-white text-black px-5 py-2.5 rounded-full font-bold shadow-md hover:bg-zinc-200 hover:-translate-y-0.5 transition-all flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-zinc-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 shadow-xl absolute w-full animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <button className="w-full bg-white text-black px-5 py-3 rounded-full font-bold shadow-md hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
