'use client';

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-50/50 text-slate-800">
      {/* Subtle background blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-slate-300 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-slate-200 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Upper footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo + About */}
          <motion.div
            className="space-y-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-flex">
              <motion.img
                src="/footerlogo.png"
                alt="Elite Work Solutions"
                className="md:w-[80%] w-[70%] object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-600 relative md:top-[-40px]  ">
              Integrated professional services for companies, institutions, and
              infrastructures throughout Portugal.
            </p>

            <div className="flex gap-4 relative md:top-[-40px] pt-0 ">
              {[
                { href: 'https://facebook.com/companyb', icon: Facebook },
                { href: 'https://twitter.com/companyb', icon: Twitter },
                { href: 'https://linkedin.com/company/companyb', icon: Linkedin },
              ].map(({ href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:scale-110 hover:bg-slate-200 hover:text-slate-900"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Our Sectors */}
          <FooterColumn
            title="Our Sectors"
            items={[
              { label: 'Construction & Shipyards', href: '/sectors/construction' },
              { label: 'Shipbuilding', href: '/sectors/shipbuilding' },
              { label: 'Hospitality', href: '/sectors/hospitality' },
              { label: 'Catering', href: '/sectors/catering' },
              { label: 'Healthcare & Public Entities', href: '/sectors/healthcare' },
              { label: 'Industrial & Logistics', href: '/sectors/industrial' },
              { label: 'Offices & Corporate', href: '/sectors/corporate' },
            ]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            items={[
              { label: 'Home', href: '/' },
              { label: 'Who We Are', href: '/who-we-are' },
              { label: 'How We Work', href: '/how-we-work' },
              { label: 'Our Staff', href: '/our-staff' },
              { label: 'Contact', href: '/contact' },
            ]}
          />

          {/* Contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="space-y-4 text-sm text-slate-600">
              <a href="tel:+35179605019" className="flex items-center gap-3 hover:text-slate-900">
                <Phone size={18} />
                +356 7960 5019
              </a>

              <a href="mailto:solutions.elitework@gmail.com" className="flex items-center gap-3 hover:text-slate-900">
                <Mail size={18} />
                solutions.elitework@gmail.com
              </a>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
               Oporto, Portugal
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 bg-slate-900 py-6 text-center text-sm text-slate-300">
        © {currentYear} Company B. All rights reserved. Designed & Developed by{' '}
        <Link
          href="https://rankmantra.com"
          target="_blank"
          className="font-medium text-slate-100 hover:underline"
        >
          Rankmantra
        </Link>
        .
      </div>
    </footer>
  );
}

/* Reusable column */
function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold">{title}</h3>

      <ul className="space-y-3 text-sm text-slate-600">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-slate-900 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
