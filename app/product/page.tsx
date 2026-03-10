"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Product() {
    const products = [
        { name: "Crispy Bhakarwadi", img: "/4.jpeg", price: "₹120", category: "Bhakarwadi" },
        { name: "Special Kachori", img: "/2.png", price: "₹90", category: "Kachori" },
        { name: "Classic Wafers", img: "/3.jpeg", price: "₹60", category: "Wafers" },
        { name: "Masala Bhakarwadi", img: "/4.jpeg", price: "₹140", category: "Bhakarwadi" },
        { name: "Spicy Kachori", img: "/2.png", price: "₹100", category: "Kachori" },
        { name: "Diet Chakli", img: "/3.jpeg", price: "₹110", category: "Healthy Snacks" },
        { name: "Farsan Mix", img: "/4.jpeg", price: "₹150", category: "Mix" },
        { name: "Pudina Soya Katori", img: "/2.png", price: "₹130", category: "Healthy Snacks" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-amber-50 py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 max-w-3xl mx-auto px-4 mt-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Our Products</h1>
                    <p className="text-zinc-600 text-lg">Fresh, tasty & premium quality snacks delivered to you.</p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                            >
                                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                                    <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-800 shadow-sm uppercase tracking-wider">
                                        {p.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h4 className="text-xl font-bold text-zinc-900 mb-2">{p.name}</h4>
                                    <div className="flex items-center justify-between mt-auto pt-4">
                                        <span className="text-2xl font-black text-amber-600">{p.price}</span>
                                        <button className="bg-zinc-100 p-3 rounded-full text-zinc-600 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/30 transition-all">
                                            <ShoppingCart className="w-5 h-5 ml-[-1px]" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
