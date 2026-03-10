"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpeg"
            alt="Farsan Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-sm font-semibold tracking-wider uppercase mb-2">
              Premium Quality • Authentic Taste
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Aash <span className="text-amber-500 block mt-2">Enterprises</span>
            </h1>
            <p className="text-xl text-zinc-300 max-w-lg leading-relaxed pt-4">
              Authentic Farsan & Traditional Indian Snacks. We specialize in crafting fresh, hygienic and flavour-packed snacks that bring the true taste of tradition to your table.
            </p>
            <div className="flex pt-6 gap-4">
              <Link href="/product" className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-amber-500/30 hover:bg-amber-600 hover:shadow-amber-500/40 hover:-translate-y-1 transition-all flex items-center gap-2">
                Explore Snacks <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3">Our Offerings</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Explore Our Categories</h3>
            <div className="w-24 h-1.5 bg-amber-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Special Kachori", img: "/2.png", desc: "Freshly fried, filled with rich & flavorful masala (75+ Products)" },
              { title: "Crispy Wafers", img: "/3.jpeg", desc: "Light, thin and crunchy wafers perfect for tea time (60+ Products)" },
              { title: "Spicy Bhakarwadi", img: "/4.jpeg", desc: "Traditional snack with authentic Indian taste (50+ Products)" }
            ].map((cat, i) => (
              <motion.div key={i} variants={fadeIn} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                  <Image src={cat.img} alt={cat.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-2xl font-bold mb-2">{cat.title}</h4>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{cat.desc}</p>
                  <Link href="/product" className="inline-block mt-4 text-amber-400 font-semibold text-sm uppercase tracking-wider hover:text-amber-300">View All →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flash Sale Banner */}
      <section className="py-20 bg-amber-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-amber-500/10 skew-x-12 transform origin-top hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 text-amber-600 rounded-full mb-8 shadow-inner"
          >
            <Clock className="w-10 h-10" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 drop-shadow-sm">Farsan Gold <span className="text-amber-600">Flash Sales</span></h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Limited-time flash deals on our freshly prepared farsan snacks. Enjoy authentic taste, premium quality, and irresistible prices — only for a short time. Don&apos;t miss out!
          </p>
          <Link href="/product" className="inline-flex bg-zinc-900 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-zinc-800 hover:shadow-zinc-900/30 hover:-translate-y-1 transition-all items-center gap-2">
            Shop The Sale <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-3">Our Value</h2>
            <h3 className="text-4xl md:text-4xl font-bold text-zinc-900 mb-4">Taste, quality, and trust</h3>
            <p className="text-zinc-500 text-lg">Everything you need in one place</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Fresh & Hygienic", desc: "Prepared daily with strict hygiene standards." },
              { icon: Star, title: "Premium Quality", desc: "Selected raw materials and authentic spices." },
              { icon: ThumbsUp, title: "Authentic Taste", desc: "Traditional recipes that deliver homemade taste." },
              { icon: Clock, title: "Fast & Safe Delivery", desc: "Quick packaging to keep freshness intact." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h4>
                <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900 text-white relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 backdrop-blur-sm p-10 rounded-3xl border border-zinc-700 hover:border-amber-500/50 transition-colors text-left"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg italic text-zinc-300 mb-8 leading-relaxed">
                &quot;Fast delivery and amazing quality. I received my order exactly on time. Highly recommended for any event!&quot;
              </p>
              <div>
                <h5 className="font-bold text-lg text-white">Rahul Sharma</h5>
                <p className="text-amber-500 text-sm">Verified Buyer</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-800/50 backdrop-blur-sm p-10 rounded-3xl border border-zinc-700 hover:border-amber-500/50 transition-colors text-left"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg italic text-zinc-300 mb-8 leading-relaxed">
                &quot;Customer support was excellent and delivery was super fast. The freshness and taste are unmatched. Will definitely order again!&quot;
              </p>
              <div>
                <h5 className="font-bold text-lg text-white">Neha Verma</h5>
                <p className="text-amber-500 text-sm">Verified Buyer</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
