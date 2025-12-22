"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/7213549/pexels-photo-7213549.jpeg"
          alt="Contact us – Professional partnership"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
      </div>

      {/* Animated glows */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-[-5rem] top-[-5rem] h-80 w-80 rounded-full bg-blue-600/20 blur-3xl md:h-96 md:w-96"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl md:h-80 md:w-80"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12 text-center">
        {/* Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let’s Talk
          </h1>
          <p className="mt-4 text-lg font-light text-blue-200 sm:text-xl md:text-2xl">
            About Your Next Project in World.
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          Whether you need staffing in construction, hospitality, healthcare,
          logistics, or industrial sectors — our 100% direct-employed,
          EU-certified teams deliver with transparency and excellence.
        </motion.p>

        {/* Contact chips */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
        >
          <div className="flex items-center gap-3 text-sm text-gray-200 sm:text-base">
            <Phone className="h-5 w-5 text-blue-400" />
            <span>+356 7960 5019</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-200 sm:text-base">
            <Mail className="h-5 w-5 text-blue-400" />
            <span>solutions.elitework@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-200 sm:text-base">
            <MapPin className="h-5 w-5 text-blue-400" />
            <span>Oporto, Portugal</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact-form"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#1B3275] px-8 py-4 text-base font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-[#1B3275]/30 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
          >
            Send Us a Message
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="tel:+35679605019"
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:w-auto sm:px-10 sm:py-5"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Floating accent (desktop only) */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-10 hidden h-20 w-20 rotate-45 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md lg:block"
      />
    </section>
  );
}
