'use client';

import { motion } from 'framer-motion';
import { UserCheck, GraduationCap, TrendingUp, Shield } from 'lucide-react';

export function OurStaff() {
  const staffFeatures = [
    {
      icon: UserCheck,
      title: 'Hired by the Company',
      description: 'Direct employment contracts ensuring commitment',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Trained in Our Programs',
      description: 'Comprehensive internal training tailored to each sector and role',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Ongoing Training',
      description: 'Ongoing training for continuous professional development and skills enhancement',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Monitored by Supervisors',
      description: 'Regular oversight by experienced internal department managers',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="our-staff" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900" />
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="staff-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#staff-pattern)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-blue-400 bg-blue-100/20 rounded-full font-semibold tracking-wide mb-4">
            OUR TEAM
          </span>
          <h2 className="text-3xl lg:text-5xl font-black text-white drop-shadow-md mb-4">
            Our Staff
          </h2>
          <div className="h-1 w-24 bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professionally trained, directly employed teams committed to excellence
          </p>
        </div>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staffFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl transform scale-105 transition-transform duration-300" />

              {/* Card content */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg min-h-[250px] flex flex-col">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-100 leading-relaxed flex-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Why Our Team Makes the Difference
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <p className="text-blue-100">Direct Employment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <p className="text-blue-100">Supervision Available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">EU</div>
                <p className="text-blue-100">Quality Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
