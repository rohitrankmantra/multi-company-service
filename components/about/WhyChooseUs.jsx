"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Users,
  ShieldCheck,
  Clock,
  TrendingUp,
  Award,
  Handshake,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    question: "Are your teams directly employed or outsourced?",
    answer:
      "All personnel are permanent, directly hired employees — never temporary or third-party workers. This ensures full control over training, quality, and reliability.",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    question: "Do you follow European quality and safety standards?",
    answer:
      "Yes. We follow strict ISO-level procedures, safety training, protective equipment compliance, and sector-specific quality protocols in every project.",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    question: "How do you guarantee punctuality and reliability?",
    answer:
      "Teams arrive on time, attendance is tracked digitally, and supervisors monitor each project — ensuring smooth operations without delays.",
    icon: Clock,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    question: "Can you scale teams quickly for urgent projects?",
    answer:
      "From small units to large teams of 200+, we have trained reserves ready to scale nationwide within days.",
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    question: "Do you have experience across multiple sectors?",
    answer:
      "We serve construction sites, shipyards, hotels, hospitals, factories, logistics centers, and public administration buildings across Portugal.",
    icon: Award,
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    question: "Is this a long-term partnership or one-off service?",
    answer:
      "We integrate with your team with dedicated managers, monthly reports, continuous training, and proactive optimization.",
    icon: Handshake,
    gradient: "from-rose-500 to-pink-500",
  },
];

export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-20"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + Stats */}
         <div className="space-y-10">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <span className="inline-block px-5 py-2 bg-blue-100 text-blue-700 font-bold rounded-full text-sm uppercase tracking-wider">
      Trusted by Businesses Nationwide
    </span>

    <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-[#1e3b8a] leading-tight">
      Everything You Need to Know
   
    </h2>

    <p className="text-xl text-slate-600">
      Learn how we operate, our team structure, and why companies trust us across Europe.
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="relative"
  >
    <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl -z-10" />
    <img
      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Professional multi-service team"
      className="rounded-3xl shadow-2xl border-8 border-white object-cover w-full"
    />
    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
      <p className="text-3xl font-bold text-slate-900">150+</p>
      <p className="text-sm text-slate-600 font-medium">Direct Employees Nationwide</p>
    </div>
  </motion.div>
</div>


          {/* Right: FAQ Accordion */}
          <div className="space-y-5">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full text-left bg-white border border-slate-200 rounded-2xl p-6 transition-all hover:border-blue-300 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${faq.gradient} text-white shadow-lg`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-slate-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-14">
                        <p className="text-slate-600 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
