"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* High-quality background – professional office/meeting vibe */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
          alt="Contact us – Professional partnership"
          className="h-full w-full object-cover opacity-70"
        />
        {/* Deep gradient overlay for premium feel & text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Subtle animated glows (same as your How We Work hero) */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main headline – smaller but extremely strong */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Let's Talk
          </h1>
          <p className="mt-4 text-2xl md:text-4xl font-light text-blue-200">
            About Your Next Project in Portugal
          </p>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Whether you need staffing in construction, hospitality, healthcare, logistics, or industrial sectors —
          our 100% direct-employed, EU-certified teams are ready to deliver with transparency and excellence.
        </motion.p>

        {/* Quick contact info chips */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base"
        >
          <div className="flex items-center gap-3 text-gray-200">
            <Phone className="w-5 h-5 text-blue-400" />
            <span>+351 911 234 567</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <Mail className="w-5 h-5 text-blue-400" />
            <span>info@yourcompany.pt</span>
          </div>
          <div className="flex items-center gap-3 text-gray-200">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Porto & Lisbon, Portugal</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact-form"
            className="group inline-flex items-center justify-center gap-3 bg-[#1B3275] hover:bg-slate-800 text-white font-semibold px-10 py-5 rounded-xl text-lg shadow-2xl transition-all duration-300 hover:shadow-[#1B3275]/30 hover:scale-105"
          >
            Send Us a Message
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <a
            href="tel:+351911234567"
            className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-10 py-5 rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </motion.div>

  
      </div>

      {/* Floating minimal accent */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-10 bottom-32 w-20 h-20 border border-white/10 rounded-2xl rotate-45 backdrop-blur-md bg-white/5 hidden lg:block"
      />
    </section>
  );
}