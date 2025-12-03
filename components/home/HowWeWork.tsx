'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Users, Eye, BarChart3 } from 'lucide-react';

export function HowWeWork() {
  const steps = [
    { icon: Search, title: 'Customer Needs Analysis', description: 'Comprehensive assessment of your operational requirements and objectives' },
    { icon: FileText, title: 'Customized Operational Proposal', description: 'Tailored service plan designed specifically for your sector and needs' },
    { icon: Users, title: 'Internal Team Assignment', description: 'Deployment of qualified, trained professionals dedicated to your operations' },
    { icon: Eye, title: 'Constant Supervision', description: 'Ongoing monitoring and management by experienced department supervisors' },
    { icon: BarChart3, title: 'Monthly Reports & Quality Control', description: 'Regular performance metrics, feedback sessions, and continuous improvement' }
  ];

  return (
    <section
      id="how-we-work"
      className="relative py-24  bg-cover bg-center"
      style={{ backgroundImage: "url('/home/timeline.jpg')" }}
    >
      {/* Gradient + Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/60 to-blue-100/60" />

        {/* Floating blobs */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 8 + i, repeat: Infinity, repeatType: 'mirror' }}
            className="absolute rounded-full bg-blue-300/30"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
            }}
          />
        ))}

        {/* Geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i + 100}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0], rotate: 360 }}
            transition={{ duration: 12 + i, repeat: Infinity }}
            className="absolute w-24 h-24 border border-blue-200/20 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="relative max-w-3xl mx-auto text-center mb-16 px-6 z-10">
        <span className="inline-block px-4 py-2 text-blue-600 bg-blue-100/30 rounded-full font-semibold tracking-wide mb-4">
          OUR PROCESS
        </span>
        <h2 className="text-3xl lg:text-5xl font-black text-blue-900 drop-shadow-md mb-4">
          How We Work
        </h2>
        <div className="h-1 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          A systematic approach to delivering excellence in every engagement, ensuring clarity, quality, and client satisfaction.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* Vertical line for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 transform -translate-x-1/2 rounded-full" />

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col lg:flex-row items-center gap-6"
            >
              {/* Number Circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white font-bold text-lg shadow-lg flex-shrink-0 z-10">
                {index + 1}
              </div>

              {/* Connector line for mobile */}
              {index < steps.length - 1 && <div className="absolute left-5 top-12 lg:hidden h-12 w-1 bg-blue-300 rounded-full"></div>}

              {/* Step Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`bg-white rounded-3xl p-6 lg:p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 flex-1 ${
                  index % 2 === 0 ? 'lg:ml-8 lg:text-right' : 'lg:mr-8 lg:text-left'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <step.icon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-blue-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
