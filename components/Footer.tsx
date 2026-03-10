import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-300 pt-16 pb-8 border-t-[6px] border-amber-500 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="relative w-48 h-12 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Brand Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Authentic Farsan & Traditional Indian Snacks. Freshly prepared farsan snacks made with premium ingredients, delivering authentic taste and trusted quality.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-800/50 w-fit px-3 py-1.5 rounded-full border border-zinc-700/50">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>FSSI Code: 13317008000404</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3 pb-2 text-sm">
                            {['Home', 'About Us', 'Products', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                                        className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-amber-400 transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            Contact Us
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">123 Dummy Street, Phase 1,<br />New Delhi, 110001, India</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail className="w-5 h-5 text-amber-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">contact@dummyemail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            Newsletter
                        </h4>
                        <p className="text-zinc-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-white placeholder:text-zinc-500"
                            />
                            <button
                                type="submit"
                                className="w-full bg-amber-500 text-white font-medium rounded-lg px-4 py-3 text-sm hover:bg-amber-600 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Aash Enterprises. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-sm text-zinc-500">
                        <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
