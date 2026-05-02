"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 pt-24 pb-12 relative overflow-hidden">
            {/* Soft Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] -translate-y-1/2 -z-0"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-stone-800/20 rounded-full blur-[100px] translate-y-1/2 -z-0"></div>

            <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">

                    {/* Brand Identity Side */}
                    <div className="lg:col-span-5 space-y-10">
                        <Link href="/" className="inline-block group">
                            <div className="relative w-64 h-16 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src="/logo.png"
                                    alt="Fragods Logo"
                                    fill
                                    className="object-contain object-left brightness-0 invert contrast-200"
                                />
                            </div>
                        </Link>
                        <p className="text-xl text-stone-400 font-light leading-relaxed max-w-lg">
                            Your Everyday Beauty & Fragrance Partner. Dedicated to combining purity, traditional care, and modern elegance.
                        </p>
                        <div className="flex items-center gap-6">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Twitter, href: "#" }
                            ].map((social, i) => (
                                <Link 
                                    key={i} 
                                    href={social.href}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:bg-rose-600 hover:text-white hover:border-rose-600 transition-all duration-300 shadow-xl"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links & Info Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Explore */}
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold text-white tracking-[0.4em] flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-rose-500"></span>
                                Explore
                            </h4>
                            <ul className="space-y-4">
                                {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                            className="text-stone-400 hover:text-rose-400 transition-colors flex items-center gap-4 group"
                                        >
                                            <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                            <span className="font-bold tracking-widest text-[12px]">{item}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold text-white tracking-[0.4em] flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-rose-500"></span>
                                Contact
                            </h4>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4 group">
                                    <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
                                    <span className="text-[12px] font-bold text-stone-400 leading-relaxed tracking-widest">
                                        Fragods HQ, Indore, MP, India
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <Phone className="w-5 h-5 text-rose-500 shrink-0" />
                                    <span className="text-[12px] font-bold text-stone-400 tracking-widest">+91 91310 40182</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <Mail className="w-5 h-5 text-rose-500 shrink-0" />
                                    <span className="text-[12px] font-bold text-stone-400 tracking-widest">hello@fragods.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-bold text-white tracking-[0.4em] flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-rose-500"></span>
                                Newsletter
                            </h4>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder:text-stone-600 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all shadow-inner"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-rose-600 text-white px-5 rounded-xl hover:bg-rose-700 transition-all active:scale-95">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[12px] font-bold text-stone-500 tracking-[0.3em] flex items-center gap-2">
                        © {new Date().getFullYear()} Fragods. Crafted with <Heart className="w-4 h-4 text-rose-600 fill-rose-600" /> for Excellence.
                    </p>
                    <div className="flex gap-10">
                        <Link href="#" className="text-[12px] font-bold text-stone-600 hover:text-rose-400 tracking-[0.3em] transition-colors">Privacy</Link>
                        <Link href="#" className="text-[12px] font-bold text-stone-600 hover:text-rose-400 tracking-[0.3em] transition-colors">Terms</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
