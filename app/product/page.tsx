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
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pbanner.jpg"
            alt="Our Products Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
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
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-stone-50">
                <Image src="/p.jpg" alt="Rose Water" fill className="object-cover rounded-[20px]" />
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-10 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-rose-600 font-bold tracking-[0.3em] text-xs">
                  <Droplets className="w-5 h-5" />
                  Skincare Essential
                </div>
                 <h3 className="text-xl md:text-3xl font-light text-stone-900 leading-tight tracking-tighter italic">Rose Water <br /><span className="font-semibold text-rose-900">Gulab Jal</span></h3>
                <p className="text-lg text-stone-600 font-light leading-relaxed">
                  Pure & Refreshing Skin Care Essential. Our Rose Water is crafted using carefully selected rose petals to deliver a refreshing and soothing experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                <div className="space-y-6">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Key Benefits</h4>
                  <ul className="space-y-4">
                    {["Hydrates and refreshes skin instantly", "Tightens pores and tones naturally", "Soothes irritation and redness", "Enhances natural glow"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">How to Use</h4>
                  <ul className="space-y-4">
                    {["Spray directly on face", "Use as toner with cotton", "Mix with face packs"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        <span>{item}</span>
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
      <section className="py-24 bg-[#faf9f8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-blue-600 font-bold tracking-[0.3em] text-xs">
                  <Droplets className="w-5 h-5" />
                  Hydration Hero
                </div>
                <h3 className="text-xl md:text-3xl font-light text-stone-900 leading-tight tracking-tighter italic">Pure <br /><span className="font-semibold text-blue-900">Glycerine</span></h3>
                <p className="text-lg text-stone-600 font-light leading-relaxed">
                  Deep Hydration for Soft & Smooth Skin. Our Glycerine helps lock in moisture, keeping skin soft and nourished.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                <div className="space-y-6">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Key Benefits</h4>
                  <ul className="space-y-4">
                    {["Long-lasting hydration", "Prevents dryness", "Improves skin softness", "Supports glowing skin"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">How to Use</h4>
                  <ul className="space-y-4">
                    {["Apply on dry areas", "Mix with rose water", "Use overnight"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-white">
                <Image src="/p3.jpg" alt="Glycerine" fill className="object-cover rounded-[20px]" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perfumes Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              className="relative grid grid-cols-2 gap-6 order-2 lg:order-1"
            >
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-8 border-stone-50">
                <Image src="/p4.jpg" alt="Perfume 1" fill className="object-cover rounded-[20px]" />
              </div>
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-8 border-stone-50 translate-y-12">
                <Image src="/p5.jpg" alt="Perfume 2" fill className="object-cover " />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-10 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-rose-600 font-bold tracking-[0.3em] text-xs">
                  <Wind className="w-5 h-5" />
                  Luxury Fragrance
                </div>
                <h3 className="text-xl md:text-3xl font-light text-stone-900 leading-tight tracking-tighter italic">Exquisite <br /><span className="font-semibold text-rose-900">Perfumes</span></h3>
                <p className="text-lg text-stone-600 font-light leading-relaxed">
                  Long-Lasting Luxury Fragrance. Our perfumes deliver rich and elegant fragrance for every occasion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                <div className="space-y-6">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Fragrance Notes</h4>
                  <ul className="space-y-4">
                    {["Floral (Rose, Jasmine)", "Woody (Oud, Sandalwood)", "Fresh & Citrus"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Sparkles className="w-5 h-5 text-rose-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold text-stone-900 tracking-widest text-xs border-b border-stone-100 pb-3">Usage Tips</h4>
                  <ul className="space-y-4">
                    {["Apply on pulse points", "Do not rub after applying", "Store in a cool place"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                        <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/p6.jpg" alt="Background" fill className="object-cover grayscale" />
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
