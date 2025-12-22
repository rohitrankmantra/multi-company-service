// app/components/Hero.jsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export function Hero({
  title,
  subtitle,
  image,
  ctaText = "Get Started",
  ctaHref = "#",
  secondaryCtaText,
  secondaryCtaHref,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dynamic Gradient Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-black/40 "
      />

      {/* Optional Floating Particles / Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="text-5xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
          >
            {title.split(' ').map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden"
              >
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: i * 0.07 + 0.4, duration: 0.8, ease: "easeOut" }}
                  className="inline-block"
                >
                  {word + (i < title.split(' ').length - 1 ? '\u00A0' : '')}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-xl text-blue-100/90 font-light max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Link href={ctaHref}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37,99,235,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-2xl shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <span>{ctaText}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>

            {secondaryCtaText && (
              <Link href={secondaryCtaHref || "#"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-5 border-2 border-white/50 text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 font-medium text-lg rounded-2xl transition-all duration-300"
                >
                  {secondaryCtaText}
                </motion.button>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}