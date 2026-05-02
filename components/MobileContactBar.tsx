"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[998] md:hidden">
      <div
        className="flex items-stretch bg-stone-900"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        {/* Get Free Support Button */}
        <Link
          href="tel:+919131040182"
          className="flex-1  bg-rose-600 text-white text-[10px] font-bold tracking-[0.15em] py-5 px-2 flex items-center justify-center hover:bg-rose-700 active:bg-rose-800 transition-all duration-200"
        >
          Get Free Support
        </Link>

        {/* WhatsApp Icon */}
        <Link
          href="https://wa.me/919131040182?text=Hi%20Fragods%2C%20I%27m%20interested%20in%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="w-25 bg-[#25D366] flex items-center justify-center text-white hover:bg-[#1ebe5d] active:bg-[#17a854] transition-all duration-200 shrink-0"
          aria-label="WhatsApp Us"
        >
          <FaWhatsapp className="w-5 h-5" />
        </Link>

        {/* Phone Icon */}
        <Link
          href="tel:+919131040182"
          className="w-25 bg-rose-700 flex items-center justify-center text-white hover:bg-rose-800 active:bg-rose-900 transition-all duration-200 shrink-0"
          aria-label="Call Us"
        >
          <Phone className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
