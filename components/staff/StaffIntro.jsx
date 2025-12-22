"use client";

import { motion } from "framer-motion";
import { Users2, Award, BriefcaseBusiness, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StaffIntro() {
  const highlights = [
    {
      icon: Users2,
      color: "text-blue-600",
      bg: "bg-blue-500/10",
      label: "Dedicated Workforce",
      desc: "1,200+ professionals directly employed and internally trained for long-term reliability.",
    },
    {
      icon: Award,
      color: "text-indigo-600",
      bg: "bg-indigo-500/10",
      label: "Certified Excellence",
      desc: "All teams hold EU-recognized certifications and follow strict operational protocols.",
    },
    {
      icon: BriefcaseBusiness,
      color: "text-teal-600",
      bg: "bg-teal-500/10",
      label: "Structured Leadership",
      desc: "Clear hierarchies, dedicated supervisors, and transparent reporting on every project.",
    },
    {
      icon: Building2,
      color: "text-violet-600",
      bg: "bg-violet-500/10",
      label: "Nationwide Deployment",
      desc: "Rapid mobilization from Porto to Algarve with regional coordination centers.",
    },
  ];

  return (
    <section className="relative py-32 lg:py-40 bg-white overflow-hidden">
      {/* Elegant Light Geometric Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
                    <path d="M0,60 Q30,30 60,60 T120,60" stroke="#1e40af" stroke-width="1" fill="none"/>
                    <path d="M0,80 Q30,110 60,80 T120,80" stroke="#3b82f6" stroke-width="0.8" fill="none"/>
                    <circle cx="60" cy="60" r="2" fill="#6366f1"/>
                  </pattern>
                </defs>
                <rect width="120" height="120" fill="url(#grid)" />
              </svg>
            `)}")`,
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      {/* Floating Light Orbs */}
      <motion.div
        animate={{ y: [0, -60, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/10 via-transparent to-indigo-500/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 60, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-[450px] h-[450px] bg-gradient-to-tl from-teal-400/10 via-transparent to-violet-500/5 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Small Elegant Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-3 text-[#1B3275] font-bold text-sm tracking-widest uppercase">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#1B3275] to-transparent" />
            Our Foundation
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#1B3275] to-transparent" />
          </span>
        </motion.div>

        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 leading-tight">
            People First.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1B3275] via-blue-700 to-indigo-800">
              Performance Always.
            </span>
          </h2>
          <p className="mt-8 text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
            Every service we deliver is powered by a directly employed, rigorously trained, 
            and professionally managed team — the true backbone of Company B’s reputation across Portugal.
          </p>
        </motion.div>

        {/* Glassmorphic Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative p-8 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className={`inline-flex p-5 rounded-2xl ${item.bg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-10 h-10 ${item.color}`} />
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3">{item.label}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Elegant CTA */}
        
      </div>
    </section>
  );
}