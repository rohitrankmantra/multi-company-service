import React from "react";
import {
  HiOutlineChat,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiOutlineEye,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { motion } from "framer-motion";

export default function WorkSection() {
  const processSteps = [
    {
      id: 1,
      title: "Customer Needs Analysis",
      description:
        "We assess your sector-specific goals—whether construction, hospitality, healthcare, or industrial services—and tailor solutions to local, regional, or international operational environments. Our approach ensures full compliance with EU and global standards from day one.",
      icon: <HiOutlineChat className="w-8 h-8 text-white" />,
    },
    {
      id: 2,
      title: "Customized Operational Proposal",
      description:
        "Our proposals blend efficiency with compliance, drawing from in-house expertise across multiple industries and international markets. We outline clear, actionable steps for seamless integration, minimizing disruptions while maximizing ROI.",
      icon: <HiOutlineSearch className="w-8 h-8 text-white" />,
    },
    {
      id: 3,
      title: "Internal Team Assignment",
      description:
        "100% direct-employed teams, rigorously trained and vetted, are assigned based on your project's demands—locally or internationally. This guarantees specialized skills, cultural alignment, and unwavering reliability across all regions of operation.",
      icon: <HiOutlineUserGroup className="w-8 h-8 text-white" />,
    },
    {
      id: 4,
      title: "Constant Supervision",
      description:
        "24/7 oversight by certified supervisors ensures real-time adjustments and strict adherence to safety and performance KPIs. Proactive monitoring keeps projects on track across dynamic global environments, including logistics, shipbuilding, and industrial operations.",
      icon: <HiOutlineEye className="w-8 h-8 text-white" />,
    },
    {
      id: 5,
      title: "Monthly Reports & Quality Control",
      description:
        "Transparent reports track milestones, KPIs, and continuous improvements, backed by ISO-compliant audits. This fosters operational excellence, client confidence, and long-term partnerships across international markets.",
      icon: <HiOutlineDocumentReport className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* PREMIUM BACKGROUND PATTERN */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Wave Pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="waves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                    <path d="M0,100 Q50,50 100,100 T200,100" stroke="#1e40af" stroke-width="2" fill="none" opacity="0.4"/>
                    <path d="M0,140 Q50,190 100,140 T200,140" stroke="#3b82f6" stroke-width="1.5" fill="none" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#waves)" />
              </svg>
            `)}")`,
            backgroundSize: "300px 300px",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
              <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" fill="white"/>
                <path d="M0,0 H80 M0,80 H80 V0 M40,0 V80 M0,40 H80" stroke="#1e3a8a" stroke-width="0.5" opacity="0.15"/>
              </svg>
            `)}")`,
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-indigo-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-cyan-400/10 to-blue-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/5 via-transparent to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 bg-blue-50 text-blue-700 font-bold rounded-full text-sm tracking-wider mb-6"
          >
            OUR PROVEN PROCESS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Built for the World’s
            <span className="block text-[#1B3275]">
              Most Demanding Sectors
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed"
          >
            From consultation to execution — 100% direct-employed, globally deployed teams delivering
            <span className="font-bold text-blue-700"> measurable results</span> across Europe and international markets.
          </motion.p>

          <p className="mt-4 text-sm font-semibold tracking-wide text-blue-700 uppercase">
            Global Operations • Local Expertise • EU & International Compliance
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-1.5 mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full mt-8"
          />
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1B3275]/20 via-blue-400/30 to-[#1B3275]/20 hidden lg:block rounded-full" />

          <div className="space-y-20 lg:space-y-32">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-10 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 lg:w-20 lg:h-20 rounded-3xl bg-gradient-to-br from-[#1B3275] via-blue-800 to-indigo-900 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-blue-600/10 rounded-full blur-xl -z-10" />
                </div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-sm rounded-full mb-4">
                      Step {step.id} of 5
                    </span>
                    <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-md md:text-lg text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-24"
        >
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Ready to experience this process firsthand?
          </p>
          <a
            href="/contact"
            className="group inline-flex items-center gap-1  md:gap-4 bg-gradient-to-r from-[#1B3275] to-blue-900 hover:from-blue-900 hover:to-indigo-900 text-white font-semibold px-6 py-5 md:px-6 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Request Free Consultation
            <svg
              className="w-6 h-6 group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
