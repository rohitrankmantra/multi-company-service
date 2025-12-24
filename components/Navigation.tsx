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

  const closeMobile = () => setIsMobileMenuOpen(false);

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
      href: "/sectors/corporate",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}
    >
      <div className=" mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 ">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/footerlogo.png" 
              alt="Elite Work Solutions" 
              className={`h-28 w-auto object-contain shrink-0`} 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12  ">
            <Link
              href="/"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              Home
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/who-we-are"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              Who We Are
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            {/* Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}
            >
              <button
                className={`relative flex items-center text-base font-medium group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                Sectors
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />

                <span className="absolute left-0 bottom-[-3px] h-[4px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {isMegaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-[-150px] mt-4 w-[780px] bg-gradient-to-br from-white to-blue-50 shadow-2xl rounded-2xl p-6 overflow-hidden border border-blue-100"
                  >
                    {/* Decorative top border with gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
                    
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      {sectors.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          whileHover={{ 
                            scale: 1.02, 
                            y: -2,
                            transition: { duration: 0.15 }
                          }}
                        >
                          <Link
                            href={item.href}
                            className="group relative flex items-start space-x-4 p-5 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-blue-50/80 transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg overflow-hidden"
                          >
                            {/* Icon with glow effect on hover */}
                            <motion.div 
                              className="flex-shrink-0"
                              whileHover={{ scale: 1.1 }}
                            >
                              <item.icon className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                            </motion.div>
                            
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-base leading-tight">
                                {item.label}
                              </p>
                              <p className="text-sm text-gray-600 leading-tight mt-1">
                                {item.desc}
                              </p>
                            </div>
                            
                            {/* Subtle arrow indicator */}
                            <motion.div 
                              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ x: 10 }}
                              animate={{ x: 0 }}
                            >
                              <ChevronDown className="h-4 w-4 text-gray-400 rotate-90" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                  
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/how-we-work"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              How We Work
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/our-staff"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              Our Staff
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className={`relative text-base font-medium group ${
                isScrolled ? 'text-gray-700' : 'text-gray-700'
              }`}
            >
              Contact
              <span className="absolute left-0 bottom-[-3px] h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>

            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-4">
                Request Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button – hides when menu is open */}
          {!isMobileMenuOpen && (
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-gray-700'}`} />
            </button>
          )}

          {isMobileMenuOpen && (
            <button
              className="lg:hidden"
              onClick={closeMobile}
            >
              <X className={`h-6 w-6 ${isScrolled ? 'text-blue-900' : 'text-white'}`} />
            </button>
          )}

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" onClick={closeMobile} className="block">
              Home
            </Link>

            <Link href="/who-we-are" onClick={closeMobile} className="block">
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
                    onClick={closeMobile}
                    className="flex items-center space-x-3 py-1"
                  >
                    <item.icon className="h-5 w-5 text-blue-600" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/how-we-work" onClick={closeMobile} className="block">
              How We Work
            </Link>

            <Link href="/our-staff" onClick={closeMobile} className="block">
              Our Staff
            </Link>
            <Link href="/contact" onClick={closeMobile} className="block">
              Contact 
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

