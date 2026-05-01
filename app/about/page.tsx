"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Shield,
  Target,
  Eye,
  Award,
  Leaf,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f8] font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ab6.jpg"
            alt="Fragods Essence"
            fill
            className="object-cover object-center animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-5xl font-light tracking-tight">About <span className="font-semibold text-rose-400 italic">Fragods</span></h1>
            <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full"></div>
            <h2 className="text-sm md:text-base font-light text-stone-200 mt-6 uppercase tracking-[0.4em]">Our Journey. Our Essence. Our Promise.</h2>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-[10px] font-bold text-rose-600 tracking-[0.4em] uppercase">Who We Are</h2>
                <h3 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight italic">Dedicated to <span className="font-semibold text-rose-900">Natural Purity.</span></h3>
                <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
                  Fragods is a skincare and fragrance brand dedicated to creating high-quality, natural, and effective products. Our range includes rose water, glycerine, and perfumes designed for freshness, hydration, and long-lasting fragrance.
                </p>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-stone-900 tracking-tighter">100%</span>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-2">Natural Purity</span>
                </div>
                <div className="w-[1px] h-12 bg-stone-200"></div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-stone-900 tracking-tighter">Premium</span>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-2">Quality Standards</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[15px] border-stone-50">
                <Image src="/ab.jpg" alt="Our Heritage" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-[#faf9f8]">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold text-rose-600 tracking-[0.4em] uppercase mb-4">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight">Tradition Meets <span className="font-semibold text-rose-900 italic">Modern Formulation</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                icon: Leaf,
                title: "Nature-Inspired",
                desc: "We prioritize pure ingredients sourced directly from the finest botanical origins.",
                img: "/ab1.jpg"
              },
              {
                icon: Award,
                title: "Traditional Roots",
                desc: "Rooted in time-tested beauty rituals passed down through generations.",
                img: "/ab2.jpg"
              },
              {
                icon: Shield,
                title: "Quality Standards",
                desc: "Backed by rigorous quality control to ensure safe and effective formulations.",
                img: "/ab3.jpg"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group bg-white rounded-[3rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-rose-900/20 group-hover:bg-rose-900/10 transition-all"></div>
                </div>
                <div className="p-12 space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 grayscale">
          <Image src="/ab10.jpg" alt="Background" fill className="object-cover" />
        </div>
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-rose-500 rounded-3xl flex items-center justify-center shadow-2xl">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-5xl font-light italic">Our <span className="font-semibold text-rose-400">Mission</span></h3>
              </div>
              <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed italic">
                &quot;To provide pure, reliable, and affordable skincare and fragrance products that enhance everyday confidence.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-stone-800 rounded-3xl flex items-center justify-center border border-stone-700">
                  <Eye className="w-10 h-10 text-rose-500" />
                </div>
                <h3 className="text-3xl md:text-5xl font-light italic">Our <span className="font-semibold text-stone-200">Vision</span></h3>
              </div>
              <p className="text-xl md:text-2xl text-stone-300 font-light leading-relaxed italic">
                &quot;To become a trusted skincare and fragrance brand known for quality and customer satisfaction.&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Different & Promise */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-16"
            >
              <div className="space-y-6">
                <h2 className="text-xs font-bold text-rose-600 tracking-[0.4em] uppercase">What Makes Us Different</h2>
                <h3 className="text-4xl md:text-6xl font-light text-stone-900 leading-tight">Focusing on <span className="font-semibold text-rose-900 italic">Purity & Affordability.</span></h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  "Focus on purity and quality",
                  "Skin-friendly formulations",
                  "Affordable products",
                  "Customer-first approach"
                ].map((text, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-center gap-6 p-8 bg-stone-50 rounded-[2.5rem] border border-stone-100 hover:bg-rose-50 hover:border-rose-200 transition-all duration-300 group">
                    <CheckCircle2 className="w-6 h-6 text-rose-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-widest text-stone-700">{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src="/ab4.jpg" alt="Process 1" fill className="object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src="/ab5.jpg" alt="Process 2" fill className="object-cover" />
                </div>
              </div>
              <div className="pt-24 space-y-6">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src="/ab7.jpg" alt="Process 3" fill className="object-cover" />
                </div>
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src="/ab8.jpg" alt="Process 4" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Promise */}
      <section className="py-32 bg-[#111] text-white">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <h2 className="text-xs font-bold text-rose-500 tracking-[0.5em] uppercase mb-16">Our Product Promise</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-3xl font-light italic">Rose Water</h4>
              <p className="text-stone-400 text-sm tracking-widest uppercase">Refreshing & Hydrating</p>
            </div>
            <div className="w-[1px] h-16 bg-stone-800 hidden md:block"></div>
            <div className="space-y-4">
              <h4 className="text-3xl font-light italic">Glycerine</h4>
              <p className="text-stone-400 text-sm tracking-widest uppercase">Deep Nourishment</p>
            </div>
            <div className="w-[1px] h-16 bg-stone-800 hidden md:block"></div>
            <div className="space-y-4">
              <h4 className="text-3xl font-light italic">Perfumes</h4>
              <p className="text-stone-400 text-sm tracking-widest uppercase">Long-Lasting Fragrance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment & Final Note */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-[10px] font-bold text-rose-600 tracking-[0.4em] uppercase">Our Commitment</h2>
            <h3 className="text-3xl md:text-5xl font-light text-stone-900 max-w-4xl mx-auto leading-tight italic">
              &quot;We are committed to quality, continuous improvement, and customer satisfaction.&quot;
            </h3>
            <div className="w-20 h-[1.5px] bg-rose-500 mx-auto rounded-full"></div>
            <div className="pt-2">
              <p className="text-xl md:text-3xl font-semibold text-rose-900 tracking-tighter">Enhancing Your Natural Beauty, Every Day.</p>
            </div>
            <div className="pt-6">
              <Link href="/product" className="bg-stone-900 text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:bg-rose-600 hover:-translate-y-3 transition-all duration-500 inline-flex items-center gap-4">
                Explore Our Products <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
