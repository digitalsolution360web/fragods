"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
  const whatsappNumber = "+919876543210"; // Placeholder number
  const message = "Hi Fragods, I'm interested in your products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 right-8 z-[999] group animate-bounce-slow"
      title="Contact us on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing ring behind the icon */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></div>
        
        {/* Main Icon Button */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <FaWhatsapp className="w-8 h-8" />
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-stone-900 px-4 py-2 rounded-xl text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-stone-100 pointer-events-none">
          Chat with us
        </span>
      </div>
    </motion.a>
  );
}
