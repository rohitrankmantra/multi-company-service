"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function WhoWeAreIntro() {
  const highlights = [
    "Directly Hired & Professionally Trained Teams",
    "Compliant with Highest European Standards",
    "Custom-Tailored Solutions Across Industries",
    "Proven Track Record in Hospitality & Healthcare",
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden py-24 lg:py-32">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] mix-blend-overlay"></div>
      </div>

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-medium px-4 py-2 rounded-full text-sm uppercase tracking-wider"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Who We Are
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Delivering{" "}
              <span className="relative">
                <span className="relative z-10">Operational</span>
                <span className="absolute inset-0 text-blue-600 -z-10 opacity-20 blur-xl">Operational</span>
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
              We are a trusted Portuguese multi-service company providing operational, technical, 
              and management excellence across hospitality, healthcare, corporate environments, 
              and beyond. Every team member is directly employed, rigorously trained, and dedicated 
              to upholding the highest European standards.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 p-1 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Discover More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative border behind image */}
            <div className="absolute inset-0 translate-x-6 translate-y-6 bg-blue-600/20 rounded-3xl -z-10"></div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional team collaborating in modern office"
                className="w-full max-w-lg lg:max-w-2xl rounded-3xl shadow-2xl object-cover border-8 border-white"
              />

              {/* Floating badge on image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl px-6 py-4 border border-slate-100"
              >
                <p className="text-sm font-semibold text-slate-600">Serving Portugal</p>
                <p className="text-2xl font-bold text-blue-600">Since 2018</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
