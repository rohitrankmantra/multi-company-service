"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowLeft, ArrowRight } from "lucide-react";

// ✔ correct import for Swiper v11
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Miguel Santos",
      position: "Chief Executive Officer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Ana Rodrigues",
      position: "Director of Operations",
      img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Ricardo Almeida",
      position: "Head of Human Resources",
      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      name: "Beatriz Ferreira",
      position: "Training & Quality Manager",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <section className="relative py-24 bg-[#f1f1f1] overflow-hidden">

      {/* MINI HEADING */}
      <p className="text-center text-sm font-semibold tracking-wider text-[#1B3275] uppercase">
        Our People • Our Strength
      </p>

      {/* Main Heading */}
      <div className="text-center mb-16 px-6 mt-2">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900"
        >
          Our <span className="text-[#1B3275]">Leadership Team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 text-lg max-w-2xl mx-auto mt-4"
        >
          Experienced professionals ensuring discipline, industry standards, and operational excellence.
        </motion.p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Custom Arrows */}
        <div className="absolute -top-20 right-0 flex gap-4 z-20">
          <button
            className="swiper-prev bg-[#1B3275] text-white w-12 h-12 rounded-full 
                       flex items-center justify-center hover:bg-slate-900 duration-300 shadow-lg"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            className="swiper-next bg-[#1B3275] text-white w-12 h-12 rounded-full 
                       flex items-center justify-center hover:bg-slate-900 duration-300 shadow-lg"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {leaders.map((leader, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/40 backdrop-blur-xl border border-white/50 
                           rounded-2xl shadow-xl overflow-hidden group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-72 object-cover group-hover:scale-110 duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-[#1B3275] font-medium mt-1">{leader.position}</p>

                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 mt-4 rounded-full 
                               bg-[#1B3275] text-white hover:bg-slate-900 duration-300 mx-auto"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
