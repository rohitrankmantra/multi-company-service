'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="https://wa.me/351000000000?text=Hello%20I%20need%20more%20information"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white shadow-xl rounded-full p-4 flex items-center justify-center transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
      </motion.div>

      {/* Call Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="tel:+351000000000"
          className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl rounded-full p-4 flex items-center justify-center transition-all duration-300"
        >
          <Phone className="h-6 w-6" />
        </a>
      </motion.div>

    </div>
  );
}
