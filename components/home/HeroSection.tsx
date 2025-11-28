'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    title: 'Integrated Professional\nServices',
    subtitle:
      'For Companies, Institutions, and Infrastructures Throughout Portugal',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
  },
  {
    title: 'Construction & Industrial\nExcellence',
    subtitle:
      'Specialized teams for construction sites, shipyards, and industrial facilities',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
  },
  {
    title: 'Hospitality & Healthcare\nServices',
    subtitle:
      'Premium operational support for hotels, resorts, hospitals, and public institutions',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
  },
];

// 👉 Slide-only animation (no fade)
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    scale: 0.98,
  }),
  center: {
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    scale: 0.98,
  }),
};

export function HeroSection() {
  const [[currentSlide, direction], setCurrentSlide] = useState([0, 0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = (newDirection: number) => {
    setCurrentSlide(([prevSlide]) => {
      const newIndex =
        (prevSlide + newDirection + slides.length) % slides.length;
      return [newIndex, newDirection];
    });
  };

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => paginate(1), 7000);
  };

  useEffect(() => {
    if (!isPaused) resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const onDotClick = (index: number) => {
    const newDirection = index > currentSlide ? 1 : -1;
    setCurrentSlide([index, newDirection]);
    resetTimer();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence custom={direction} initial={false}>
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              className="absolute inset-0 z-20"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
              }}
              style={{ willChange: 'transform' }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-75"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-slate-900/90 pointer-events-none" />

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                viewBox="0 0 800 600"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <circle cx="400" cy="300" r="350" fill="url(#grad1)">
                  <animate
                    attributeName="r"
                    values="350;360;350"
                    dur="15s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-30 flex h-full items-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl text-white drop-shadow-lg">
  <motion.h1
  key={`title-${currentSlide}`}
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: -20, opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-wide whitespace-pre-line"
>
  {(() => {
    const words = slides[currentSlide].title.replace("\n", " ").split(" ");
    const firstWord = words[0];
    const restWords = words.slice(1).join(" ");

    return (
      <>
        <span className="block">{firstWord}</span>
        <span className="block">{restWords}</span>
      </>
    );
  })()}
</motion.h1>



          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-blue-200 mb-8 tracking-wide drop-shadow"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.ul
            key={`points-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 mb-10"
          >
            {[
              'Employees, internally trained',
              'European quality standards',
              'Tailored solutions for each sector',
            ].map((point) => (
              <li
                key={point}
                className="flex items-center space-x-4 text-lg md:text-xl font-medium"
              >
                <CheckCircle2 className="h-7 w-7 text-blue-400 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </motion.ul>

      <motion.button
  onClick={scrollToContact}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="group bg-white text-blue-900 px-10 py-4 text-lg font-semibold 
             rounded-xl shadow-lg flex items-center gap-3 transition-all 
             duration-300 hover:bg-blue-50"
>
  Request a Consultation

  <ChevronRight 
    className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" 
  />
</motion.button>

        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? 'bg-white w-10 h-3 shadow-lg'
                : 'bg-white/50 w-3 h-3 hover:w-5 hover:h-3 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
