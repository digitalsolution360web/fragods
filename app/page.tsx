"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  ShieldCheck,
  Leaf,
  Droplets,
  Sparkles,
  Heart,
  Award
} from "lucide-react";

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

const slides = [
  {
    image: "/12.jpg",
    tagline: "Excellence in Purity",
    title: (
      <>
        Pure Care. <br />
        <span className="font-semibold text-rose-300 italic">Timeless Fragrance.</span> <br />
        Everyday Glow.
      </>
    ),
    description: "Experience the perfect blend of nature and luxury with our premium skincare and fragrance essentials. Refreshing rose water, deeply hydrating glycerine and long-lasting perfumes.",
    cta: "Shop Collection",
    link: "/product"
  },
  {
    image: "/15.jpg",
    tagline: "Luxury Essentials",
    title: (
      <>
        Define Your <br />
        <span className="font-semibold text-rose-300 italic">Signature Scent.</span> <br />
        Natural Luxury.
      </>
    ),
    description: "Our crafted fragrances are designed to linger and inspire. Discover the essence of purity combined with sophisticated aroma profiles.",
    cta: "Explore Products",
    link: "/product"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f8] font-sans overflow-x-hidden">
      {/* Hero Section Slider */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#faf9f8]">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt="Fragods Banner"
              fill
              className="object-cover object-center scale-105 animate-slow-zoom"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl text-white space-y-10"
            >
              <div className="inline-flex items-center gap-3 py-2.5 px-6 rounded-full bg-rose-500/20 border border-rose-500/30 backdrop-blur-md text-rose-100 text-xs font-bold tracking-[0.3em] shadow-2xl">
                <Sparkles className="w-4 h-4 text-rose-300" />
                {slides[currentSlide].tagline}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-stone-200/90 max-w-2xl leading-relaxed font-light">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-wrap pt-8 gap-8">
                <Link href={slides[currentSlide].link} className="bg-rose-600 text-white px-14 py-6 rounded-full font-bold tracking-[0.2em] text-xs shadow-2xl hover:bg-rose-700 hover:shadow-rose-600/40 hover:-translate-y-2 transition-all duration-300 flex items-center gap-4">
                  {slides[currentSlide].cta} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/product" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-14 py-6 rounded-full font-bold tracking-[0.2em] text-xs hover:bg-white/20 hover:-translate-y-2 transition-all duration-300">
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 right-12 z-20 flex items-center gap-6">
          <div className="flex gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group relative h-1.5 transition-all duration-500 rounded-full bg-white/30 overflow-hidden"
                style={{ width: currentSlide === idx ? "48px" : "16px" }}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {currentSlide === idx && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="absolute inset-0 bg-rose-500"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-4 ml-6">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/20 hover:border-white transition-all group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/20 hover:border-white transition-all group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50">
          <span className="text-[10px] tracking-[0.5em] font-bold text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* Signature Collection Section */}
      <section className="py-12 bg-white relative">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-3xl">
              <h2 className="text-[10px] font-bold text-rose-600 tracking-[0.4em] mb-4">Discover</h2>
              <h3 className="text-2xl md:text-4xl font-light text-stone-900 leading-tight italic">Our Signature <br /><span className="font-semibold text-rose-900 italic">Collection</span></h3>
            </div>
            <Link href="/product" className="group flex items-center gap-4 text-stone-900 font-bold tracking-[0.2em] text-xs border-b-2 border-stone-200 pb-2 hover:border-rose-500 transition-all duration-300">
              View All Products <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24"
          >
            {/* Product 1 */}
            <motion.div variants={fadeIn} className="group flex flex-col bg-white border border-stone-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_60px_100px_-20px_rgba(255,100,100,0.18)] hover:border-rose-100 transition-all duration-700">
              <div className="relative h-[420px] w-full overflow-hidden p-6">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                  <Image src="/12.jpg" alt="Rose Water" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                </div>
              </div>
              <div className="px-10 pb-12 flex-1 flex flex-col text-center">
                <div className="flex items-center justify-center gap-3 text-rose-600 mb-5">
                  <Droplets className="w-5 h-5" />
                  <span className="text-xs font-bold tracking-[0.3em]">Pure Skincare</span>
                </div>
                <h4 className="text-2xl font-bold text-stone-900 mb-6 leading-tight">Rose Water <br /><span className="text-lg font-light text-stone-400 italic">(Gulab Jal)</span></h4>
                <Link href="/product" className="mt-auto bg-stone-900 text-white px-8 py-4 rounded-full font-bold tracking-widest text-[10px] hover:bg-rose-600 transition-all duration-300 shadow-xl">
                  Product Details
                </Link>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div variants={fadeIn} className="group flex flex-col bg-white border border-stone-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_60px_100px_-20px_rgba(100,150,255,0.18)] hover:border-blue-100 transition-all duration-700">
              <div className="relative h-[420px] w-full overflow-hidden p-6">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                  <Image src="/13.jpg" alt="Glycerine" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                </div>
              </div>
              <div className="px-10 pb-12 flex-1 flex flex-col text-center">
                <div className="flex items-center justify-center gap-3 text-blue-600 mb-5">
                  <Droplets className="w-5 h-5" />
                  <span className="text-xs font-bold tracking-[0.3em]">Deep Hydration</span>
                </div>
                <h4 className="text-2xl font-bold text-stone-900 mb-6 leading-tight">Premium <br />Glycerine</h4>
                <Link href="/product" className="mt-auto bg-stone-900 text-white px-8 py-4 rounded-full font-bold tracking-widest text-[10px] hover:bg-blue-600 transition-all duration-300 shadow-xl">
                  Product Details
                </Link>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div variants={fadeIn} className="group flex flex-col bg-white border border-stone-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-[0_60px_100px_-20px_rgba(255,180,50,0.18)] hover:border-amber-100 transition-all duration-700">
              <div className="relative h-[420px] w-full overflow-hidden p-6">
                <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                  <Image src="/14.jpg" alt="Perfumes" fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                </div>
              </div>
              <div className="px-10 pb-12 flex-1 flex flex-col text-center">
                <div className="flex items-center justify-center gap-3 text-amber-600 mb-5">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-xs font-bold tracking-[0.3em]">Luxury Scent</span>
                </div>
                <h4 className="text-2xl font-bold text-stone-900 mb-6 leading-tight">Signature <br />Perfumes</h4>
                <Link href="/product" className="mt-auto bg-stone-900 text-white px-8 py-4 rounded-full font-bold tracking-widest text-[10px] hover:bg-amber-600 transition-all duration-300 shadow-xl">
                  Product Details
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visionary Section */}
      <section className="py-24 bg-[#f4f1ed]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-16"
            >
              <div className="space-y-6">
                <h2 className="text-[10px] font-bold text-rose-600 tracking-[0.4em]">The Vision</h2>
                <h3 className="text-3xl md:text-5xl font-light text-stone-900 leading-tight">Your Daily <br /><span className="font-semibold text-rose-900 italic">Beauty & Fragrance</span> Partner</h3>
                <p className="text-lg text-stone-600/90 leading-relaxed font-light max-w-2xl">
                  Fragods is passionate about creating products that combine purity, care, and elegance. Our range is designed to enhance your natural beauty while giving you a refreshing and long-lasting experience.
                </p>
              </div>

              <div className="pt-10 border-t border-stone-300/50">
                <h4 className="text-sm font-bold text-stone-900 tracking-[0.3em] mb-8">The Fragods Advantage</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {[
                    "Instant Skin Refreshment",
                    "Long-Lasting Hydration",
                    "Natural Glow Enhancement",
                    "Confidence-Boosting Fragrance"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-8 bg-white p-10 rounded-[3rem] shadow-sm border border-stone-200/50 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] hover:border-rose-200 transition-all duration-500 group">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-rose-50 flex items-center justify-center shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                        <Sparkles className="w-7 h-7 text-rose-500 group-hover:text-white" />
                      </div>
                      <span className="font-bold text-stone-800 text-sm tracking-widest leading-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[6rem] overflow-hidden relative shadow-[0_60px_120px_-20px_rgba(0,0,0,0.25)] border-[20px] border-white">
                <Image src="/15.jpg" alt="About Fragods" fill className="object-cover" />
              </div>
              {/* Floating Review Card */}
              <div className="absolute -bottom-20 -left-20 bg-white/90 backdrop-blur-3xl p-14 rounded-[5rem] shadow-2xl max-w-lg hidden xl:block border border-white/50">
                <div className="flex items-center gap-10 mb-10">
                  <div className="flex -space-x-6">
                    <div className="w-20 h-20 rounded-full bg-stone-200 border-4 border-white overflow-hidden relative shadow-2xl"><Image src="/16.jpg" alt="User" fill className="object-cover" /></div>
                    <div className="w-20 h-20 rounded-full bg-stone-200 border-4 border-white overflow-hidden relative shadow-2xl"><Image src="/17.jpg" alt="User" fill className="object-cover" /></div>
                    <div className="w-20 h-20 rounded-full bg-stone-200 border-4 border-white overflow-hidden relative shadow-2xl"><Image src="/18.jpg" alt="User" fill className="object-cover" /></div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-current" />)}
                  </div>
                </div>
                <p className="text-2xl font-light text-stone-800 leading-relaxed italic">&quot;Trusted by thousands for their daily beauty and fragrance routine.&quot;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden text-center">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="mb-15">
            <h2 className="text-[10px] font-bold text-rose-600 tracking-[0.6em] mb-6">Why Fragods?</h2>
            <h3 className="text-3xl md:text-5xl font-light text-stone-900">Crafting Excellence</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-24">
            {[
              { icon: Leaf, title: "Natural & Skin-Friendly" },
              { icon: Sparkles, title: "Premium Quality" },
              { icon: Heart, title: "Authentic Experience" },
              { icon: ShieldCheck, title: "Safe Formulations" },
              { icon: Award, title: "Traditional Inspiration" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group"
              >
                <div className="w-32 h-32 bg-stone-50 rounded-[4rem] flex items-center justify-center mx-auto mb-12 transform group-hover:scale-110 group-hover:bg-rose-50 group-hover:-rotate-6 transition-all duration-700 shadow-sm border border-stone-100">
                  <feature.icon className="w-12 h-12 text-rose-500" />
                </div>
                <h4 className="text-xs font-bold text-stone-800 tracking-[0.3em] leading-relaxed">{feature.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-stone-900 text-stone-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-stone-950/40 z-0"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-10 lg:px-10 relative mb-2 z-10">
          <h2 className="text-2xl md:text-5xl font-light mb-12 text-white text-center">Loved by <span className="font-semibold text-rose-500 italic">Many</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {[
              { quote: "Amazing quality rose water! My skin feels so fresh and hydrated throughout the day.", author: "Sophia R." },
              { quote: "The glycerine is a lifesaver for my dry skin. It's so smooth and non-sticky.", author: "James L." },
              { quote: "The perfumes are incredibly long-lasting. I get compliments every single time I wear them.", author: "Elena M." }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/[0.03] backdrop-blur-2xl p-6 rounded-[1.5rem] border border-white/5 flex flex-col justify-between hover:bg-white/[0.07] transition-all duration-700 group hover:-translate-x-4"
              >
                <div>
                  <div className="flex mb-4 text-rose-500">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg text-stone-100/90 mb-6 font-light leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center font-bold text-rose-400 text-xl shadow-2xl">{testimonial.author[0]}</div>
                  <div>
                    <h5 className="font-bold text-white tracking-[0.2em] text-xs">{testimonial.author}</h5>
                    <p className="text-rose-500/50 text-[8px] tracking-[0.4em] mt-1 font-bold">Verified Buyer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image src="/20.jpg" alt="Refresh your routine" fill className="object-cover" />
          <div className="absolute inset-0 bg-stone-900/85 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light mb-5 text-white leading-tight">Elevate Your <br /><span className="font-semibold text-rose-500 italic">Daily Ritual</span></h2>
            <p className="text-lg md:text-xl text-rose-100/80 font-light mb-10 leading-relaxed max-w-4xl mx-auto">
              Discover the transformative power of pure skincare and luxury fragrances. Crafted for excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <Link href="/product" className="bg-rose-600 text-white px-16 py-8 rounded-full font-bold tracking-[0.3em] text-[10px] shadow-[0_25px_50px_-12px_rgba(255,100,100,0.5)] hover:bg-rose-700 hover:shadow-rose-600/70 hover:-translate-y-3 transition-all duration-500">
                Shop Collection
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white/40 backdrop-blur-xl text-white px-16 py-8 rounded-full font-bold tracking-[0.3em] text-[10px] hover:bg-white hover:text-stone-900 hover:border-white hover:-translate-y-3 transition-all duration-500">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
