"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 border-b-[3px] ${
      scrolled 
        ? "bg-white/95 backdrop-blur-xl shadow-sm py-2 md:py-4 border-rose-500" 
        : "bg-transparent py-3 md:py-8 border-transparent"
    }`}>
      <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group relative z-10">
            <div className="relative w-36 h-9 md:w-56 md:h-14 transition-all duration-500 group-hover:scale-105 active:scale-95">
              <Image
                src="/logo.png"
                alt="Fragods Logo"
                fill
                className={`object-contain object-left transition-all duration-700 ${
                  scrolled 
                    ? "brightness-0 opacity-90" // Black logo on white background
                    : "brightness-0 invert contrast-200" // White logo on dark background
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-16">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-bold tracking-[0.15em] text-[13px] transition-all duration-500 relative group ${
                  scrolled ? "text-stone-900 hover:text-rose-600" : "text-white hover:text-rose-200"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-500 group-hover:w-full ${
                  scrolled ? "bg-rose-600" : "bg-rose-400"
                }`}></span>
              </Link>
            ))}
            <Link 
              href="/product" 
              className={`px-10 py-4 rounded-full font-bold text-[12px] tracking-[0.2em] flex items-center gap-3 transition-all duration-500 active:scale-95 shadow-2xl ${
                scrolled 
                  ? "bg-rose-600 text-white hover:bg-rose-700 hover:shadow-rose-600/40" 
                  : "bg-white text-stone-900 hover:bg-stone-100 hover:shadow-white/20"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-2xl transition-all duration-300 ${
                scrolled ? "text-stone-900 hover:bg-stone-100" : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? <X className="h-6 w-6 md:h-8 md:w-8" /> : <Menu className="h-6 w-6 md:h-8 md:w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-white/98 backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col h-full items-center justify-center space-y-12 px-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-light text-stone-900 tracking-tighter hover:text-rose-600 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/product"
              onClick={() => setIsOpen(false)}
              className="w-full max-w-sm bg-rose-600 text-white px-10 py-6 rounded-3xl font-bold tracking-[0.3em] text-xs flex items-center justify-center gap-4 shadow-2xl"
            >
              <ShoppingBag className="w-5 h-5" />
              Shop Now
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-4 rounded-full border border-stone-200 text-stone-400 hover:text-stone-900 transition-all"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
