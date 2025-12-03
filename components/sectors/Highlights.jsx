"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Highlights({ 
  title = "Our Core Strengths", 
  items = [], 
  variant = "default"
}) {
  if (!items || items.length === 0) return null;

  const themes = {
    construction: "from-amber-500 to-orange-600",
    shipbuilding: "from-blue-600 to-cyan-500",
    hospitality: "from-emerald-500 to-teal-600",
    industrial: "from-slate-600 to-zinc-800",
    healthcare: "from-rose-500 to-pink-600",
    default: "from-blue-600 to-cyan-500"
  };

  const gradient = themes[variant] || themes.default;

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="1.2" fill="#94a3b8" opacity="0.6"/>
                <circle cx="10" cy="10" r="0.8" fill="#cbd5e1" opacity="0.4"/>
                <circle cx="50" cy="50" r="0.8" fill="#cbd5e1" opacity="0.4"/>
                <circle cx="10" cy="50" r="0.8" fill="#cbd5e1" opacity="0.4"/>
                <circle cx="50" cy="10" r="0.8" fill="#cbd5e1" opacity="0.4"/>
              </svg>
            `)}")`,
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <span className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full mb-3 sm:mb-4">
            {title}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Why Clients Choose Us
          </h2>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-br opacity-80"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                "--tw-gradient-from": "rgba(255,255,255,0.12)",
                "--tw-gradient-to": "rgba(255,255,255,0)",
              }}
            >
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-7 md:p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3">
                
                {/* Icon */}
                <div className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-400`}>
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-md" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 mb-2 sm:mb-3">
                  {item.title || item}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description || item.desc || item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
