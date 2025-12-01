'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  Building2,
  Hammer,
  Ship,
  Hotel,
  Utensils,
  Hospital,
  Factory,
  Briefcase,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMegaOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectors = [
    {
      icon: Hammer,
      label: "Construction & Shipyards",
      desc: "Labor support, cleaning, logistics & demolition",
      href: "/sectors/construction",
    },
    {
      icon: Ship,
      label: "Shipbuilding",
      desc: "Technical support, sanding, insulation, painting",
      href: "/sectors/shipbuilding",
    },
    {
      icon: Hotel,
      label: "Hospitality",
      desc: "Housekeeping, stewarding, kitchen assistants",
      href: "/sectors/hospitality",
    },
    {
      icon: Utensils,
      label: "Catering",
      desc: "Kitchen helpers, washing, prep staff",
      href: "/sectors/catering",
    },
    {
      icon: Hospital,
      label: "Healthcare & Public Entities",
      desc: "Hospital support, logistics & specialized cleaning",
      href: "/sectors/healthcare",
    },
    {
      icon: Factory,
      label: "Industrial & Logistics",
      desc: "Warehouse, packaging, production teams",
      href: "/sectors/industrial",
    },
    {
      icon: Briefcase,
      label: "Offices & Corporate",
      desc: "Cleaning, admin help, micro-maintenance",
      href: "/sectors/offices",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Building2 className={`h-8 w-8 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              Company B
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">

            {/* Standard Links */}
            <Link
              href="/who-we-are"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Who We Are
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <button
                className={`relative flex items-center text-base font-medium group ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Sectors
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />

                {/* Hover underline */}
                <span className="absolute left-0 bottom-[-3px] h-[4px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>

              {/* Mega Menu */}
              <AnimatePresence>
                {isMegaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute left-[-150px] mt-4 w-[780px] bg-white shadow-xl rounded-xl p-8 grid grid-cols-2 gap-6 border border-gray-100"
                  >
                    {sectors.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition"
                      >
                        <item.icon className="h-7 w-7 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">{item.label}</p>
                          <p className="text-sm text-gray-600 leading-tight">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link
              href="/how-we-work"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              How We Work
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/our-staff"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Our Staff
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            {/* CTA Button */}
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2">
                Request Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="px-6 py-4 space-y-4">

            <Link href="/who-we-are" className="block text-left">
              Who We Are
            </Link>

            <details className="border border-gray-200 rounded-lg p-3">
              <summary className="cursor-pointer font-medium text-gray-800 flex items-center">
                Sectors <ChevronDown className="ml-2 h-4 w-4" />
              </summary>
              <div className="mt-3 space-y-3">
                {sectors.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 py-1"
                  >
                    <item.icon className="h-5 w-5 text-blue-600" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/how-we-work" className="block text-left">
              How We Work
            </Link>

            <Link href="/blogs" className="block text-left">
              Blogs
            </Link>

            <Link href="/contact">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2">
                Request Consultation
              </Button>
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
