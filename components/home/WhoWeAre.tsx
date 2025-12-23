'use client';

import { motion } from "framer-motion";
import { Building2, Users, Award, Shield } from 'lucide-react';

export function WhoWeAre() {
  const features = [
    {
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-100/50",
      title: 'Service Contracts',
      description:
        'We operate exclusively through service contracts with qualified in-house teams',
    },
    {
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-100/50",
      title: 'Direct Employment',
      description:
        'Our staff is directly hired, trained internally, and supervised by department managers',
    },
    {
      icon: Award,
      color: "text-rose-600",
      bg: "bg-rose-100/50",
      title: 'Professional Standards',
      description:
        'We are not a temporary employment agency—we deliver monitored excellence',
    },
    {
      icon: Shield,
      color: "text-green-600",
      bg: "bg-green-100/50",
      title: 'Quality Assurance',
      description:
        'European procedures with ongoing training and performance monitoring',
    },
  ];

  return (
    <motion.section
      id="who-we-are"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-28 overflow-hidden"
      // style={{
      //   backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
    >

      {/* Motion BG Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-blue-200 blur-3xl rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 blur-3xl rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* UNIQUE HEADING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full shadow-sm tracking-wide mb-4">
            ABOUT OUR COMPANY
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-blue-900 drop-shadow-sm mb-4 tracking-tight">
            Who We Are
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "7rem" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 mx-auto bg-blue-600 rounded-full mb-8 shadow-md"
          />

          <p className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed">
            We specialize in providing operational, technical, and management services for companies,
            public entities, and infrastructure.
          </p>
        </motion.div>

        {/* FEATURES GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {features.map((f, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="
                group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
              "
            >
              <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-5 shadow-inner ${f.bg}`}>
                <f.icon className={`h-10 w-10 ${f.color}`} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition">
                {f.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
