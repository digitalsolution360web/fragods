"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-zinc-900 py-24 text-center mt-0 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="/1.jpeg" alt="Background" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-amber-500 font-medium tracking-widest uppercase text-sm">Aash Enterprises</p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image src="/4.jpeg" alt="About Farsan" fill className="object-cover" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-2">Our Story</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">Authentic Farsan & Traditional Indian Snacks</h3>
                            <p className="text-zinc-600 leading-relaxed text-lg">
                                Aash Enterprises is a trusted name in the world of farsan and traditional Indian snacks. We specialize in crafting fresh, hygienic and flavour-packed snacks that bring the true taste of tradition to your table.
                            </p>
                            <p className="text-zinc-600 leading-relaxed text-lg">
                                From crispy Bhakarwadi and spicy Kachori to healthy diet snacks and premium wafers, every product is prepared using quality ingredients and time-tested recipes. Our mission is simple — deliver taste, quality and freshness in every bite.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {[
                                    "Freshly prepared farsan snacks",
                                    "Premium quality ingredients",
                                    "Authentic traditional taste",
                                    "Strict hygiene standards"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                                        <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
