'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardCheck, Clock, Shield, TrendingUp } from 'lucide-react';

export function QualityStandards() {
  const standards = [
    {
      icon: Shield,
      title: 'European Procedures',
      description: 'Full compliance with EU service standards and regulatory requirements'
    },
    {
      icon: ClipboardCheck,
      title: 'Competency Tests',
      description: 'Rigorous evaluation and certification of all team members'
    },
    {
      icon: Clock,
      title: 'Punctual & Disciplined',
      description: 'Consistent attendance and professional conduct standards'
    },
    {
      icon: CheckCircle2,
      title: 'Safety Compliance',
      description: 'Strict adherence to health, safety, and workplace regulations'
    },
    {
      icon: TrendingUp,
      title: 'Performance KPIs',
      description: 'Transparent metrics and regular reporting for client visibility'
    }
  ];

  return (
    <section
      id="quality"
      className="relative py-24 overflow-hidden"
      style={{
        background: 'url("/home/quality.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-6 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full shadow-sm tracking-wide mb-4">
            QUALITY STANDARDS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
            Quality Standards
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Commitment to excellence through systematic quality assurance and continuous improvement
          </p>
        </motion.div>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {standards.slice(0, 3).map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                    <standard.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{standard.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{standard.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.slice(3).map((standard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl text-white"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <standard.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{standard.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{standard.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification / Stats Section */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Certified Excellence Across All Operations
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our quality management system ensures consistent, measurable results that exceed client expectations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['ISO Standards', 'Safety First', 'Client Focus', 'Continuous Improvement'].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <CheckCircle2 className="h-12 w-12 text-blue-400 mb-3" />
                <span className="text-white font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
