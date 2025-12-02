// app/components/sectors/ProjectShowcase.jsx
"use client"
import { motion } from "framer-motion";

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

export function ProjectShowcase({ sectorSlug, heading = "Projects Delivered" }) {
  const projects = sectorProjects[sectorSlug] || sectorProjects.construction;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-black text-slate-900 mb-12">{heading}</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-8 bg-gradient-to-b from-white to-slate-50">
                <h3 className="text-2xl font-black text-slate-900">{p.title}</h3>
                {p.client && <p className="text-slate-600 font-medium mt-1">{p.client}</p>}
                <p className="text-slate-700 mt-4">{p.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}