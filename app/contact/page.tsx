"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Sparkles } from "lucide-react";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-[#faf9f8] font-sans overflow-x-hidden">
            {/* Header Banner */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/ab6.jpg"
                        alt="Contact Fragods"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[3px]"></div>
                </div>
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="space-y-4"
                    >
                        <h1 className="text-3xl md:text-5xl font-light tracking-tight">Connect with <span className="font-semibold text-rose-400 italic">Fragods</span></h1>
                        <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
                        <h2 className="text-sm md:text-base font-light text-stone-200 mt-6 uppercase tracking-[0.4em]">We&apos;d Love to Hear From You</h2>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 relative">
                <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">

                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="space-y-12"
                        >
                            <div className="space-y-6">
                                <h3 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight italic">Get in <span className="font-semibold text-rose-900">Touch</span></h3>
                                <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
                                    Whether you have a question about our products, pricing, or wholesale opportunities, our team is ready to provide the excellence you deserve.
                                </p>
                            </div>

                            <div className="space-y-12">
                                <div className="flex items-start gap-10 group">
                                    <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center shrink-0 border border-stone-100 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                                        <MapPin className="w-8 h-8 text-rose-500 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-[0.3em] mb-4">Visit Our Essence</h4>
                                        <p className="text-xl text-stone-600 font-light leading-relaxed">Fragods Headquarters,<br />Indore, Madhya Pradesh, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-10 group">
                                    <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center shrink-0 border border-stone-100 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                                        <Phone className="w-8 h-8 text-rose-500 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-[0.3em] mb-4">Call Our Experts</h4>
                                        <p className="text-xl text-stone-600 font-light">+91 91310 40182</p>
                                        <p className="text-sm text-rose-500 font-bold mt-3 uppercase tracking-widest">Mon-Sun: 10:00 AM - 08:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-10 group">
                                    <div className="w-20 h-20 bg-white shadow-xl rounded-[2rem] flex items-center justify-center shrink-0 border border-stone-100 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                                        <Mail className="w-8 h-8 text-rose-500 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-stone-900 uppercase tracking-[0.3em] mb-4">Email Us</h4>
                                        <p className="text-xl text-stone-600 font-light">hello@fragods.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-16 border-t border-stone-200 flex items-center gap-8">
                                <div className="relative w-24 h-24 bg-white rounded-[2rem] p-4 border border-stone-100 shadow-2xl flex items-center justify-center">
                                    <Image src="/logo.png" alt="Logo" fill className="object-contain p-4" />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-2xl font-semibold text-stone-900 uppercase tracking-widest">Fragods</p>
                                    <p className="text-sm text-stone-500 uppercase tracking-[0.2em] font-bold">Timeless Purity & Excellence.</p>
                                </div>
                            </div>

                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="bg-white border border-stone-100 rounded-[20px] p-5 md:p-15 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative"
                        >
                            <div className="absolute top-10 right-10 opacity-5">
                                <Sparkles className="w-24 h-24 text-rose-900" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-light text-stone-900 mb-8 italic">Send a <span className="font-semibold text-rose-900">Message</span></h3>
                            <form className="space-y-8">
                                <div className="space-y-4">
                                    <label htmlFor="name" className="text-xs  font-bold text-stone-500 uppercase tracking-widest">Full Name</label>
                                    <input type="text" id="name" className="w-full bg-stone-50 border-b-2 border-stone-100 focus:border-rose-500 px-0 py-5 pl-5 text-stone-900 focus:outline-none transition-all text-xl font-light" placeholder="Your Name" />
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="email" className="text-xs font-bold text-stone-500 uppercase tracking-widest">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-stone-50 border-b-2 border-stone-100 focus:border-rose-500 px-0 py-5  pl-5 text-stone-900 focus:outline-none transition-all text-xl font-light" placeholder="your@email.com" />
                                </div>

                                <div className="space-y-4">
                                    <label htmlFor="message" className="text-xs font-bold text-stone-500 uppercase tracking-widest">Your Message</label>
                                    <textarea id="message" rows={4} className="w-full bg-stone-50 border-b-2 border-stone-100 focus:border-rose-500 px-0 py-5  pl-5 text-stone-900 focus:outline-none transition-all text-xl font-light resize-none" placeholder="How can we assist you?"></textarea>
                                </div>

                                <button type="button" className="w-full bg-rose-600 text-white font-bold rounded-2xl px-10 py-7 flex items-center justify-center gap-4 hover:bg-rose-700 shadow-[0_20px_40px_-10px_rgba(225,29,72,0.4)] hover:-translate-y-2 transition-all duration-300 uppercase tracking-[0.3em] text-xs">
                                    Send Inquiry <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
