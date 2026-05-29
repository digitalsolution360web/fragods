"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Droplets,
  Sparkles,
  CheckCircle2,
  Wind,
  ShieldCheck,
  Leaf,
  Zap,
  ArrowRight,
  Heart
} from "lucide-react";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f8] font-sans overflow-x-hidden">
      {/* Header Banner */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fragods-spana.webp"
            alt="Our Products Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[3px]"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">Our <span className="font-semibold text-rose-400 italic">Products</span></h1>
            <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-light text-stone-200 mt-8">Experience Purity. Feel the Fragrance.</h2>
            <p className="max-w-2xl mx-auto text-stone-300 font-light leading-relaxed text-lg">
              Discover a premium range of skincare and fragrance essentials designed to refresh, nourish, and elevate your daily routine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rose Water Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              className="relative order-2 lg:order-1 w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-stone-50 bg-[#f9f9f9]">
                <Image src="/fragods-air-freshner.webp" alt="Air Freshener" fill className="object-contain p-4 rounded-[20px]" />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-rose-600 font-bold tracking-[0.3em] text-xs">
                  <Wind className="w-5 h-5" />
                  Home Fragrance
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-stone-900 leading-tight tracking-tighter italic">Air Freshener <br /><span className="font-bold text-rose-900">Refreshing Aura</span></h3>
                <p className="text-base text-stone-700 font-normal leading-relaxed">
                  Transform your space with our premium Air Freshener. Elegantly formulated to neutralize odors and replace them with a delightful, long-lasting scent.
                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {["Eliminates odors instantly", "Long-lasting fragrance", "Creates a welcoming atmosphere", "Safe for daily indoor use"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                        <span className="font-medium text-stone-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 w-full md:w-auto text-center md:text-left">
                    <Link href="/contact" className="inline-flex bg-stone-900 border-2 border-stone-900 text-white px-8 py-3 rounded-full font-bold tracking-[0.2em] text-[10px] hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-xl shadow-stone-200">
                      Bulk Enquiry
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">How to Use</h4>
                  <ul className="space-y-2">
                    {["Shake well before use", "Spray towards the center of room", "Avoid direct contact with fabrics"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        <span className="font-medium text-stone-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Glycerine Section */}
      <section className="py-12 md:py-16 bg-[#faf9f8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-blue-600 font-bold tracking-[0.3em] text-xs">
                  <Droplets className="w-5 h-5" />
                  Premium Quality
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-stone-900 leading-tight tracking-tighter italic">Liquid <br /><span className="font-bold text-blue-900">Paraffin</span></h3>
                <p className="text-base text-stone-700 font-normal leading-relaxed">
                  Highly refined Liquid Paraffin crafted for purity and consistency. Ideal for specialized treatments and retaining extreme skin moisture.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {["Acts as a strong emollient", "Prevents severe skin dryness", "Protects against moisture loss", "Highly refined and pure"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span className="font-medium text-stone-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">How to Use</h4>
                  <ul className="space-y-2">
                    {["Apply to extremely dry patches", "Use as directed by experts", "Mix with creams if required"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        <span className="font-medium text-stone-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-4 w-full md:w-auto text-center md:text-left">
                <Link href="/contact" className="inline-flex bg-stone-900 border-2 border-stone-900 text-white px-8 py-3 rounded-full font-bold tracking-[0.2em] text-[10px] hover:bg-[#faf9f8] hover:text-stone-900 transition-all duration-300 shadow-xl shadow-stone-200">
                  Bulk Enquiry
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white bg-[#f9f9f9]">
                <Image src="/fragods-liquid-paraffin.webp" alt="Liquid Paraffin" fill className="object-contain p-4 rounded-[20px]" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfumes Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              className="relative order-2 lg:order-1 w-full max-w-[280px] sm:max-w-sm lg:max-w-md mx-auto"
            >
              <div className="aspect-[4/3] sm:aspect-square rounded-[3rem] overflow-hidden shadow-xl border-[10px] border-stone-50 bg-[#fbfbfb] flex items-center justify-center relative group p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/50 via-stone-50/50 to-stone-100/50 opacity-80"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-rose-200/30 to-amber-100/30 rounded-full blur-3xl"></div>

                <div className="relative w-[45%] h-[85%] z-10 transform -translate-y-4 group-hover:scale-105 group-hover:-translate-y-6 transition-all duration-700 drop-shadow-2xl">
                  <Image src="/fragods-original-perfume.webp" alt="Original Perfume" fill className="object-contain" />
                </div>

                <div className="relative w-[45%] h-[80%] z-20 transform translate-y-6 -ml-6 group-hover:scale-105 group-hover:translate-y-4 group-hover:translate-x-2 transition-all duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
                  <Image src="/fragods-oucellent.webp" alt="Oucellent" fill className="object-contain" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100/50 rounded-full blur-3xl opacity-60 -z-10"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-rose-600 font-bold tracking-[0.3em] text-xs">
                  <Wind className="w-5 h-5" />
                  Luxury Fragrance & Oils
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-stone-900 leading-tight tracking-tighter italic">Signature <br /><span className="font-bold text-rose-900">Collections</span></h3>
                <p className="text-base text-stone-700 font-normal leading-relaxed">
                  Discover our premium range featuring original long-lasting perfumes and luxurious collections like Oucellent. Crafted for an unforgettable aura.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Fragrance Notes</h4>
                  <ul className="space-y-2">
                    {["Floral (Rose, Jasmine)", "Woody (Oud, Sandalwood)", "Fresh & Citrus"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Sparkles className="w-5 h-5 text-rose-500 shrink-0" />
                        <span className="font-medium text-stone-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Usage Tips</h4>
                  <ul className="space-y-2">
                    {["Apply on pulse points", "Do not rub after applying", "Store in a cool place"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        <span className="font-medium text-stone-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-4 w-full md:w-auto text-center md:text-left">
                <Link href="/contact" className="inline-flex bg-stone-900 border-2 border-stone-900 text-white px-8 py-3 rounded-full font-bold tracking-[0.2em] text-[10px] hover:bg-white hover:text-stone-900 transition-all duration-300 shadow-xl shadow-stone-200">
                  Bulk Enquiry
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/fragods-castor-oils.webp" alt="Background" fill className="object-cover grayscale" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="text-center mb-15">
            <h2 className="text-xs font-bold text-rose-500 tracking-[0.5em] mb-8">Quality Promise</h2>
            <h3 className="text-3xl md:text-5xl font-light">Why Choose <span className="font-semibold text-rose-500">Our Products</span></h3>
            <div className="w-32 h-[2px] bg-rose-500 mx-auto mt-12 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Leaf, title: "Quality ingredients", desc: "Sourced from the finest natural origins." },
              { icon: Heart, title: "Skin-friendly formulations", desc: "Gentle on all skin types, everyday." },
              { icon: Sparkles, title: "Natural inspiration", desc: "Pure essences captured in every bottle." },
              { icon: ShieldCheck, title: "Reliable results", desc: "Trusted by thousands for consistent care." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-xl p-8 rounded-[3.5rem] border border-white/10 text-center hover:bg-white/10 hover:-translate-y-4 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-rose-500 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-widest leading-tight">{feature.title}</h4>
                <p className="text-stone-400 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-5"
          >
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 leading-tight tracking-tighter">Upgrade Your <br /><span className="font-semibold text-rose-900 italic">Daily Routine</span></h2>
            <p className="text-2xl md:text-3xl text-stone-500 font-light max-w-3xl mx-auto leading-relaxed">
              Experience the luxury of nature. Elevate your self-care ritual with Fragods today.
            </p>
            <div className="flex flex-wrap justify-center gap-10 pt-3">
              <Link href="/contact" className="bg-rose-600 text-white px-16 py-8 rounded-full font-bold tracking-[0.3em] text-[10px] shadow-2xl hover:bg-rose-700 hover:-translate-y-3 transition-all duration-500 flex items-center gap-4">
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="bg-stone-900 text-white px-16 py-8 rounded-full font-bold tracking-[0.3em] text-[10px] hover:bg-stone-800 hover:-translate-y-3 transition-all duration-500 flex items-center gap-4">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
