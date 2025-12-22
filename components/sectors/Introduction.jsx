"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 

export function Introduction({
  heading,
  subheading,
  text,
  image,
  imageAlt = "Sector team at work",
  highlights = [],
  ctaText = "Get in Touch",
  ctaHref = "/contact"
}) {
  return (
    <section className="relative py-14 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 sm:space-y-6"
          >

            {/* Small Tag */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-medium px-3 py-1.5 rounded-full text-xs sm:text-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Sector Overview
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-slate-900 leading-tight">
              {heading}
            </h2>

            {/* Subheading */}
            {subheading && (
              <p className="text-base sm:text-lg text-gray-800 font-medium">
                {subheading}
              </p>
            )}

            {/* Main Text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {text}
            </p>

            {/* Highlights */}
            {highlights?.length > 0 && (
              <div className="space-y-2 sm:space-y-3">
                {highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="text-gray-800 text-sm sm:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA */}
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm sm:text-base transition-all shadow-sm"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.954, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative group"
          >
            {/* Decorative Layers */}
            <div className="absolute inset-0 -translate-x-4 -translate-y-4 sm:-translate-x-6 sm:-translate-y-6 bg-blue-200 rounded-3xl -z-10" />
            <div className="absolute inset-0 -translate-x-8 -translate-y-8 sm:-translate-x-12 sm:-translate-y-12 bg-blue-100 rounded-3xl -z-20" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

              <Image
                src={image}
                alt={imageAlt}
                width={900}
                height={700}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white z-20">
                <p className="text-xs sm:text-sm font-medium opacity-90">Trusted Teams Across</p>
                <p className="text-xl sm:text-3xl font-bold leading-none">Portugal</p>
              </div>
            </div>

            {/* Floating Premium Badge — FULLY RESPONSIVE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              
              className="
                absolute 
                bg-gradient-to-br from-blue-700 to-indigo-800 
                text-white rounded-2xl px-5 sm:px-8 py-4 sm:py-6 
                shadow-2xl border border-white/30 backdrop-blur-sm 
                z-20

                /* Desktop Position */
                -bottom-6 -right-6 sm:-bottom-8 sm:-right-8

                /* Mobile Fix → place badge inside safely */
                max-sm:bottom-4 max-sm:right-4
              "
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
                <span className="text-xs sm:text-sm font-semibold tracking-wider">
                  PORTUGAL
                </span>
              </div>

              <p className="text-xl sm:text-3xl font-black leading-none">
                NATIONWIDE
              </p>

              <p className="text-[10px] sm:text-xs opacity-90 mt-1">
                From Porto to Algarve
              </p>
            </motion.div>

            {/* Small Floating Stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg border"
            >
              <p className="text-lg sm:text-2xl font-bold text-blue-700">500+</p>
              <p className="text-[10px] sm:text-xs text-gray-700 font-medium">
                Active Workers
              </p>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
