// app/components/sectors/Highlights.jsx   ← FINAL CLEAN VERSION (copy-paste kar de)

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
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50/50 via-white to-slate-50/30">
      
      {/* NEW: Super clean, minimal, white-friendly background pattern */}
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-bold text-sm uppercase tracking-wider rounded-full mb-4">
            {title}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900">
            Why Clients Choose Us
          </h2>
        </motion.div>

        {/* Cards — Same icon, sector color change */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative p-1 rounded-3xl bg-gradient-to-br opacity-80"
              style={{
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                "--tw-gradient-from": "rgba(255,255,255,0.1)",
                "--tw-gradient-to": "rgba(255,255,255,0)",
              }}
            >
              <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-400`}>
                  <CheckCircle2 className="w-10 h-10 text-white drop-shadow-md" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                  {item.title || item}
                </h3>
                <p className="text-slate-600 leading-relaxed">
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