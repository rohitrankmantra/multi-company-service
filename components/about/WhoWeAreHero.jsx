"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function WhoWeAreHero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=90"
          alt="Corporate background"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
      </div>

      {/* Floating Gradient Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.22, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-blue-500/30 rounded-full blur-[120px] sm:blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="absolute bottom-10 right-0 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] bg-cyan-400/25 rounded-full blur-[110px] sm:blur-[140px]"
      />

      {/* Pattern overlays */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/white-lines.png')]"></div>
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/tiny-grid.png')]"></div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden sm:block absolute left-[12%] top-[25%] w-10 h-10 md:w-12 md:h-12 bg-white/10 border border-white/20 backdrop-blur-xl rotate-12 rounded-lg"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="hidden sm:block absolute right-[8%] top-[35%] w-12 h-12 md:w-16 md:h-16 bg-blue-500/10 border border-white/10 backdrop-blur-xl rounded-full"
      />

      {/* Floating images */}
      <motion.img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80"
        className="hidden md:block absolute w-14 h-14 md:w-20 md:h-20 object-cover rounded-xl opacity-20 blur-[1px] top-[18%] left-[65%]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
        className="hidden md:block absolute w-16 h-16 md:w-24 md:h-24 object-cover rounded-xl opacity-20 blur-[2px] bottom-[20%] right-[20%]"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-20 text-center max-w-4xl px-4 sm:px-6">

        <motion.h1
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
        >
          Trusted Partners.
          <span className="block text-blue-300">
            Proven Excellence.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto"
        >
          Delivering operational, technical and management services across Portugal — 
          powered by trained professionals, trusted leadership, and a commitment to excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg shadow-xl transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="#introduction"
            className="inline-flex items-center justify-center gap-2 border border-white/30 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg transition duration-300"
          >
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
}
