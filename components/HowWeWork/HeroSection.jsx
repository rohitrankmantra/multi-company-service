"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg"
          alt="How We Work"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Subtle animated glows */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <motion.div animate={{ opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Small but powerful heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            How We Work
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-extrabold text-blue-200">
            Precision. Trust. Results.
          </p>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          A proven system designed for clarity and performance. From discovery to delivery, 
          — every step is transparent, efficient, and built around your success.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full text-lg shadow-2xl transition-all duration-300 hover:shadow-blue-500/25 hover:scale-105"
          >
            See the Process
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Trust indicator (optional but effective) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-sm text-gray-400"
        >
          Trusted by leading teams • 1000+ successful projects • 98% client retention
        </motion.p>
      </div>

      {/* Minimal floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 top-32 w-16 h-16 border border-white/10 rounded-2xl rotate-45 backdrop-blur-md bg-white/5 hidden lg:block"
      />
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-16 bottom-40 w-20 h-20 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-md hidden lg:block"
      />
    </section>
  );
}