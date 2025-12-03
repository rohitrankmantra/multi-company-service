"use client";

import React from "react";
import { Users, ShieldCheck, GraduationCap } from "lucide-react";

export default function StaffHero() {
  return (
    <section className="relative w-full py-32 sm:py-28 md:py-40 text-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.45]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full mb-5 sm:mb-6">
          <ShieldCheck className="w-5 h-5 text-white" />
          <span className="text-white text-sm sm:text-base font-semibold tracking-wide">
            OUR STAFF
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
          Professionally Trained,
          <span className="block text-[#80A8FF] mt-1">
            Directly Employed Teams
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10 px-2">
          Our workforce is fully hired, trained and supervised by Company B.
          No subcontractors, no temporary agencies — only reliable, qualified
          and professionally managed teams across Portugal.
        </p>

        {/* Stats */}
        {/* Stats */}
<div className="grid grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto mt-10 sm:mt-14">

  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/10">
    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#80A8FF] mx-auto mb-3" />
    <p className="text-xl sm:text-2xl sm:font-black text-white">1200+</p>
    <p className="text-gray-200 text-sm font-medium">Active Employees</p>
  </div>

  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/10">
    <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[#80A8FF] mx-auto mb-3" />
    <p className="text-xl sm:text-2xl sm:font-black text-white">Internal</p>
    <p className="text-gray-200 text-sm font-medium">Training Academy</p>
  </div>

  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/10">
    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#80A8FF] mx-auto mb-3" />
    <p className="text-xl sm:text-2xl sm:font-black text-white">100%</p>
    <p className="text-gray-200 text-sm font-medium">Direct Employment</p>
  </div>

</div>

      </div>
    </section>
  );
}
