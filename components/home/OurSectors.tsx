  'use client';

  import { motion } from "framer-motion";
  import {
    Construction,
    Anchor,
    Hotel,
    UtensilsCrossed,
    Hospital,
    Factory,
    Building
  } from "lucide-react";
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

  export function OurSectors() {
    const sectors = [
      {
        icon: Construction,
        title: "Construction & Shipyards",
        description:
          "Laborers, site cleaning, material handling, technical support, dedicated operations teams",
        target: "Construction companies, public procurement",
        color: "from-slate-600 to-blue-700",
      },
      {
        icon: Building,
        title: "Offices & Corporate",
        description:
          "Professional cleaning, administrative support, micro-maintenance, operational services",
        target: "Offices, studios, corporate",
        color: "from-blue-600 to-indigo-700",
      },
      {
        icon: Hotel,
        title: "Hospitality",
        description:
          "Housekeeping, stewarding, kitchen assistants, operational support for 4–5-star hotels",
        target: "Hotel chains, boutique hotels, resorts",
        color: "from-amber-600 to-orange-600",
      },
      {
        icon: UtensilsCrossed,
        title: "Catering",
        description:
          "Kitchen porters, washing, prep staff, kitchen support, micro-teams on shifts",
        target: "Restaurants, cafeterias, hotels",
        color: "from-red-600 to-rose-600",
      },
      {
        icon: Hospital,
        title: "Healthcare & Public",
        description:
          "Specialized cleaning, hospital assistants, operational support, internal logistics",
        target: "Hospitals, clinics, public administrations",
        color: "from-emerald-600 to-teal-600",
      },
      {
        icon: Factory,
        title: "Industrial & Logistics",
        description:
          "General workers, warehouse workers, packaging, production support",
        target: "Factories, warehouses, logistics centers",
        color: "from-gray-700 to-slate-600",
      },
      {
        icon: Anchor,
        title: "Shipbuilding",
        description:
          "Technical support, insulation, sanding, painting, logistics and materials handling",
        target: "Shipyards, yacht refits, industrial ports",
        color: "from-blue-700 to-cyan-600",
      },
    ];

    return (
      <motion.section
        id="sectors"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative py-24 overflow-hidden"
      >
        {/* Background Gradient + Grid Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950">
          <svg className="absolute w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-2 bg-blue-200/20 text-blue-100 font-semibold rounded-full tracking-wide mb-6 border border-blue-300/20">
              INDUSTRIAL EXPERTISE
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold text-white drop-shadow mb-6">
              Our Sectors
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "7rem" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-1 mx-auto bg-blue-400 rounded-full mb-8"
            />

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive service solutions across multiple industries throughout Portugal
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <Card className="bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${sector.color} flex items-center justify-center mb-4`}
                    >
                      <sector.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-blue-900">{sector.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-700 text-base leading-relaxed">
                      {sector.description}
                    </CardDescription>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-blue-600 mb-1">Target Clients:</p>
                      <p className="text-sm text-gray-600">{sector.target}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  }
