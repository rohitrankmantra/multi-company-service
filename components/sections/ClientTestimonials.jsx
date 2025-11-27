'use client';

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/navigation';

export function ClientTestimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Ravi Sharma",
      role: "Facility Manager, TechCorp",
      review:
        "Their team is extremely professional, punctual and well-trained. We never had to follow-up on anything. Highly recommended!",
    },
    {
      name: "Arjun Patel",
      role: "Admin Head, SecurePro",
      review:
        "The discipline and European-style quality process truly reflects in their service. Fantastic experience.",
    },
    {
      name: "Nishita Verma",
      role: "HR Manager, BlueArc Pvt Ltd",
      review:
        "Best service management company we’ve worked with. Very reliable and always on time.",
    },
    {
      name: "Imran Khan",
      role: "Operations Head, MetroLine",
      review:
        "Their staff is trained, humble, and always well-prepared. Extremely satisfied with the performance.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#f8fbff] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold tracking-wide">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 text-blue-900">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Custom Arrows */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center transition"
          >
            <ArrowLeft className="text-white w-6 h-6" />
          </button>

          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center transition"
          >
            <ArrowRight className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="p-8 rounded-2xl bg-white border border-blue-100 shadow-md hover:shadow-xl transition-all h-full flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="w-10 h-10 text-blue-500 mb-4" />

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {item.review}
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-blue-900">{item.name}</h4>
                  <p className="text-gray-500">{item.role}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
