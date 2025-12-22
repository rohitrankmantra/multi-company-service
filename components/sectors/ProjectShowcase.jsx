// app/components/sectors/ProjectShowcase.jsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const sectorProjects = {
  construction: [
    { title: "Lisbon Metro Extension", client: "Mota-Engil", stats: "180 workers · 11 months", image: "https://images.pexels.com/photos/221902/pexels-photo-221902.jpeg?w=1200" },
    { title: "Algarve Luxury Villas", client: "Private Developer", stats: "90 workers · 7 months", image: "https://images.pexels.com/photos/263503/pexels-photo-263503.jpeg?w=1200" },
    { title: "Porto Bridge Renovation", client: "Infraestruturas de Portugal", stats: "220 workers · On-time", image: "https://images.pexels.com/photos/442192/pexels-photo-442192.jpeg?w=1200" }
  ],
  shipbuilding: [
    { title: "Lisbon Naval Shipyard Refit", client: "Navalrocha", stats: "140 specialists", image: "https://images.pexels.com/photos/2377441/pexels-photo-2377441.jpeg?w=1200" },
    { title: "Cargo Vessel Insulation", client: "Lisnave", stats: "80 workers · 6 weeks", image: "https://images.pexels.com/photos/163428/pexels-photo-163428.jpeg?w=1200" },
    { title: "Yacht Painting Project", client: "Private Owner", stats: "Marine-grade finish", image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?w=1200" }
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
    { title: "Luz Saúde Network", client: "Luz Saúde", stats: "Multiple clinics", image: "https://images.pexels.com/photos/6683003/pexels-photo-6683003.jpeg?w=1200" }
  ],
  corporate: [
    { title: "EDP Headquarters Lisbon", client: "EDP Energias", stats: "Daily office support", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=1200" },
    { title: "Galp Corporate Offices", client: "Galp Energia", stats: "Full facility team", image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=1200" }
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
      <section className="relative py-16 md:py-24 bg-slate-900 text-white">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
          >
            <span className="inline-block px-4 py-2 bg-blue-600/30 border border-blue-400/40 rounded-full text-blue-300 text-xs sm:text-sm font-semibold mb-5">
              SELECTED PROJECTS
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-black text-white bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-tight">
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
                className="group cursor-pointer"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition duration-500 group-hover:scale-[1.02]">
                  
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
            className="relative w-full max-w-2xl max-h-[90vh] bg-black rounded-2xl p-4 sm:p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute -top-10 right-0 text-white text-4xl sm:text-5xl font-light"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>

            {/* Image */}
            <div className="w-full max-h-[55vh] overflow-hidden rounded-xl border border-white/10 mb-4 sm:mb-6">
              <img
                src={lightbox.image}
                alt=""
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
