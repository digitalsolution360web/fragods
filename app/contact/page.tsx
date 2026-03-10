"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header */}
            <section className="bg-zinc-900 py-24 text-center mt-0 pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image src="/1.jpeg" alt="Background" fill className="object-cover" />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
                    <p className="text-amber-500 font-medium tracking-widest uppercase text-sm">We&apos;d love to hear from you</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-12"
                        >
                            <div>
                                <h3 className="text-3xl font-bold text-zinc-900 mb-6">Get In Touch</h3>
                                <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                                    Whether you have a question about our products, pricing, need a delivery, or anything else, our team is ready to answer all your questions.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                                        <MapPin className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-zinc-900 mb-2">Visit Us</h4>
                                        <p className="text-zinc-600">123 Dummy Street, Phase 1<br />New Delhi, 110001, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-zinc-900 mb-2">Call Us</h4>
                                        <p className="text-zinc-600">+91 98765 43210</p>
                                        <p className="text-sm text-amber-600 font-medium mt-1">Mon-Sun: 10:00 AM - 08:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                                        <Mail className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-zinc-900 mb-2">Email Us</h4>
                                        <p className="text-zinc-600">contact@dummyemail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
                                <div className="relative w-16 h-16 bg-white rounded-full p-2 border border-gray-200 shadow-sm">
                                    <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-zinc-900">Aash Enterprises</p>
                                    <p className="text-sm text-zinc-500">Trusted quality since inception.</p>
                                </div>
                            </div>

                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-zinc-50 border border-zinc-100 rounded-3xl p-8 md:p-12 shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-zinc-900 mb-8">Send a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                                    <textarea id="message" rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="button" className="w-full bg-amber-500 text-white font-bold rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-amber-600 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all">
                                    Send Message <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
