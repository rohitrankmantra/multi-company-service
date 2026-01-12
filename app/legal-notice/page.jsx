"use client";

import { motion } from "framer-motion";

export default function LegalNotice() {
  return (
    <section className="relative overflow-hidden">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg"
            alt="Legal Notice"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/60 to-slate-950/80" />
        </div>

        {/* Glow */}
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <span className="inline-block px-5 py-2 mb-6 text-sm font-semibold tracking-wider text-blue-300 border border-blue-400/30 rounded-full bg-blue-600/10">
            LEGAL INFORMATION
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Legal Notice
          </h1>
        </motion.div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50">
        <div className="relative max-w-4xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-blue-100"
          >
            <p className="uppercase text-sm tracking-widest text-blue-600 font-semibold mb-6">
              Legal Notice
            </p>

            <h2 className="text-3xl font-black text-[#1e3b8a] mb-8">
              Publisher
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The website <strong>www.eliteworksolutions.com</strong> (hereinafter
              the “Website”) is published by the company{" "}
              <strong>Elite Work Solutions</strong>, registered with the competent
              business authorities, with registered office at{" "}
              <strong>Oporto, Portugal</strong> and whose VAT
              number is <strong>2025070680</strong>.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Tel.:</span>{" "}
                +356 7960 4992
              </p>

           

              <p>
                <span className="font-semibold text-gray-900">Email:</span>{" "}
               solutions.elitework@gmail.com
              </p>
            </div>

            {/* <div className="mt-10 pt-8 border-t border-blue-100">
              <p className="text-gray-700">
                <span className="font-semibold text-gray-900">
                  Publishing Director:
                </span>{" "}
                [Name, Designation, Region / Division]
              </p>
            </div> */}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
