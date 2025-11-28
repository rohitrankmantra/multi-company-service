"use client";

import { motion } from "framer-motion";
import { Target, Users, Shield, Heart, Zap, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence in Everything",
    desc: "We don’t settle for good enough. Every task, every interaction, every solution is executed with precision and pride.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "People First",
    desc: "Our teams are family. We invest in their growth, well-being, and professional development — because great people deliver great results.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Uncompromising Integrity",
    desc: "Transparency, ethics, and accountability are non-negotiable. Your trust is our most valuable asset.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Heart,
    title: "Passion & Care",
    desc: "We genuinely care about our clients, their goals, and the people we serve every day.",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Innovation & Agility",
    desc: "We adapt quickly, embrace smart technology, and continuously improve how we deliver value.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Reliability You Can Count On",
    desc: "When we commit, we deliver. On time. On budget. Every single time.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

export function OurValues() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold tracking-wider mb-6">
            CORE VALUES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-white leading-tight">
            What Drives Us Every Day
          </h2>
          <p className="mt-6 text-xl text-blue-100/80 leading-relaxed">
            These are not just words on a wall — they are the foundation of who we are and how we operate.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-2xl group-hover:scale-[1.02]">
                {/* Gradient Orb */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${value.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>

                {/* Text */}
                <h3 className="mt-6 text-2xl font-bold text-white">{value.title}</h3>
                <p className="mt-4 text-blue-100 leading-relaxed">{value.desc}</p>

                {/* Shine Effect on Hover */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}