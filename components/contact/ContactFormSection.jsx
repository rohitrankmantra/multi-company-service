"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", company: "", sector: "", phone: "", email: "", message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ firstName: "", lastName: "", company: "", sector: "", phone: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1400);
  };

  const sectors = [
    "Construction & Shipyards",
    "Shipbuilding",
    "Hospitality & Hotels",
    "Catering Services",
    "Healthcare & Public Sector",
    "Industrial & Logistics",
    "Offices & Corporate Facilities",
    "Other",
  ];

  return (
    <section
      id="contact-form"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* BEAUTIFUL MODERN BACKGROUND PATTERN */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle geometric wave pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M0,50 Q25,30 50,50 T100,50" stroke="#1e40af" stroke-width="1.5" fill="none" opacity="0.6"/>
                    <path d="M0,70 Q25,90 50,70 T100,70" stroke="#3b82f6" stroke-width="1" fill="none" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#wave)" />
              </svg>
            `)}")`,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Ultra-subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" fill="white"/>
                <path d="M0,0 H40 M0,40 H40 V0" stroke="#1e40af" stroke-width="0.5" opacity="0.3"/>
              </svg>
            `)}")`,
          }}
        />

        {/* Floating accent blobs */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 -right-32 w-80 h-80 bg-gradient-to-tl from-cyan-400/10 to-blue-600/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2.5 bg-blue-50 text-blue-700 font-bold rounded-full text-sm tracking-wider mb-6"
          >
            GET IN TOUCH
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Start a Conversation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-light"
          >
            Tell us about your project. Our team responds in under <span className="font-bold text-blue-700">2 hours</span> — 
            across all of Portugal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Info & Trust */}
          <div className="space-y-10">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-7">
                {[
                  { icon: Phone, label: "Phone", value: "+356 7960 5019", href: "tel:+35679605019" },
                  { icon: Mail, label: "Email", value: "solutions.elitework@gmail.com", href: "solutions.elitework@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Oporto, Portugal" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-blue-700 font-medium hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 mt-1">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-[#1B3275] via-blue-900 to-indigo-900 rounded-3xl p-8 text-white shadow-2xl"
            >
              <h4 className="text-2xl font-black mb-8 tracking-tight">Why Partners Trust Us</h4>
              <ul className="space-y-5">
                {[
                  "100% Direct Employment",
                  "EU & ISO Certified Standards",
                  "No Subcontractors",
                  "24/7 Dedicated Supervision",
                  "15+ Years in Portugal",
                  "98% Client Retention Rate",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-300 flex-shrink-0" />
                    <span className="font-medium text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 lg:p-14 shadow-2xl border border-white/50">
              {submitted ? (
                <div className="text-center py-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                  >
                    <CheckCircle className="w-14 h-14 text-white" />
                  </motion.div>
                  <h3 className="text-4xl font-black text-slate-900 mb-4">Thank You!</h3>
                  <p className="text-xl text-gray-600">We’ll get back to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Form fields - same as before but with better styling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {["firstName", "lastName", "company", "phone", "email"].map((field) => (
                      <div key={field}>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          {field.includes("first") ? "First Name" : field.includes("last") ? "Last Name" : field.charAt(0).toUpperCase() + field.slice(1).replace("Name", " Name")} *
                        </label>
                        <input
                          type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                          name={field}
                          required
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-base"
                          placeholder={field === "company" ? "ABC Construction Lda" : field === "phone" ? "+351 912 345 678" : field === "email" ? "joao@company.pt" : "João"}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Sector of Interest *</label>
                    <select
                      name="sector"
                      required
                      value={formData.sector}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300"
                    >
                      <option value="">Select a sector</option>
                      {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">How can we help you? *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none"
                      placeholder="Describe your project, number of workers needed, timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1B3275] to-blue-900 hover:from-blue-900 hover:to-indigo-900 text-white font-black py-5 px-8 rounded-2xl sm:text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-4 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending Message..." : (
                      <>
                        Send Message
                        <Send className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}