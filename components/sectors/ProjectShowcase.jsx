// app/components/sectors/ProjectShowcase.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const sectorProjects = {
  construction: [
    { title: "Lisbon Metro Extension", client: "Mota-Engil", stats: "180 workers · 11 months", image: "https://images.pexels.com/photos/940362/pexels-photo-940362.jpeg?w=1200" },
    { title: "Algarve Luxury Villas", client: "Private Developer", stats: "90 workers · 7 months", image: "https://images.pexels.com/photos/14021093/pexels-photo-14021093.jpeg?w=1200" },
    { title: "Porto Bridge Renovation", client: "Infraestruturas de Portugal", stats: "220 workers · On-time", image: "https://images.pexels.com/photos/5800212/pexels-photo-5800212.jpeg?w=1200" }
  ],
  shipbuilding: [
    { title: "Lisbon Naval Shipyard Refit", client: "Navalrocha", stats: "140 specialists", image: "https://images.pexels.com/photos/2377441/pexels-photo-2377441.jpeg?w=1200" },
    { title: "Cargo Vessel Insulation", client: "Lisnave", stats: "80 workers · 6 weeks", image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?w=1200" },
    { title: "Yacht Painting Project", client: "Private Owner", stats: "Marine-grade finish", image:"https://images.pexels.com/photos/3823415/pexels-photo-3823415.jpeg?w=1200"  }
  ],
  hospitality: [
    { title: "Martinhal Sagres Resort", client: "Martinhal Group", stats: "120 staff · Peak season", image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=1200" },
    { title: "Pestana Porto Hotel", client: "Pestana Hotel Group", stats: "85 housekeeping team", image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=1200" },
    { title: "Vila Vita Parc Resort", client: "Vila Vita", stats: "5-star standards", image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?w=1200" }
  ],
  industrial: [
    { title: "Sonae Warehouse Expansion", client: "Sonae MC", stats: "160 workers · 24/7", image: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?w=1200" },
    { title: "AutoEuropa Assembly Support", client: "Volkswagen", stats: "Production line crew", image: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?w=1200" }
  ],
  healthcare: [
    { title: "Hospital de São João", client: "Porto University Hospital", stats: "Sanitation & logistics", image: "https://images.pexels.com/photos/5214962/pexels-photo-5214962.jpeg?w=1200" },
    { title: "Luz Saúde Network", client: "Luz Saúde", stats: "Multiple clinics", image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?w=1200" }
  ],
  corporate: [
    { title: "EDP Headquarters Lisbon", client: "EDP Energias", stats: "Daily office support", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=1200" },
    { title: "Galp Corporate Offices", client: "Galp Energia", stats: "Full facility team", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=1200" }
  ],
  catering: [
    { title: "Corporate Gala Dinner", client: "EDP Annual Event", stats: "200 guests · 5-course menu", image: "https://images.pexels.com/photos/903415/pexels-photo-903415.jpeg?w=1200" },
    { title: "Lisbon Wedding Catering", client: "Private Couple", stats: "150 attendees · Custom cuisine", image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?w=1200" },
    { title: "Conference Buffet Service", client: "Web Summit", stats: "5000+ delegates · Multi-day", image: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?w=1200" }
  ]
};

export function ProjectShowcase({ 
  sectorSlug, 
  heading = "Our Projects", 
  subheading = "Real projects delivered with excellence"
}) {
  const [lightbox, setLightbox] = useState(null);
  const projects = sectorProjects[sectorSlug] || sectorProjects.construction;

  return (
    <>
      <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-big.png')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-blue-600/30 border border-blue-400/40 rounded-full text-blue-300 text-xs sm:text-sm font-black mb-5">
              SELECTED PROJECTS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-black text-white bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
              {heading}
            </h2>

            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
              {subheading}
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                onClick={() => setLightbox(p)}
                className="group cursor-pointer relative"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-2xl group-hover:scale-[1.02]">
                  
                  {/* Gradient Orb */}
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  />

                  {/* Image */}
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-1">{p.title}</h3>
                    <p className="text-blue-300 text-base font-semibold">{p.client}</p>
                    <p className="text-blue-200/80 text-sm mt-1">{p.stats}</p>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Mobile-Friendly Lightbox */}
      {lightbox && (
        <div 
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
        >
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] bg-black/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 text-white text-2xl sm:text-3xl font-light hover:bg-white/20 transition-colors duration-200"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>

            {/* Image */}
            <div className="w-full max-h-[55vh] overflow-hidden rounded-xl border border-white/10 mb-4 sm:mb-6">
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{lightbox.title}</h2>
            <p className="text-blue-300 text-base sm:text-lg font-semibold mb-2">
              Client: {lightbox.client}
            </p>
            <p className="text-blue-200/80 text-sm sm:text-base">{lightbox.stats}</p>
          </div>
        </div>
      )}
    </>
  );
}