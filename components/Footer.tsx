'use client';

import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Company B</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Integrated professional services for companies, institutions, and infrastructures throughout Portugal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Sectors</h3>
            <ul className="space-y-3 text-blue-100">
              <li>Construction & Shipyards</li>
              <li>Shipbuilding</li>
              <li>Hospitality</li>
              <li>Catering</li>
              <li>Healthcare & Public</li>
              <li>Industrial & Logistics</li>
              <li>Offices & Corporate</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-blue-100">
              <li>Who We Are</li>
              <li>How We Work</li>
              <li>Our Staff</li>
              <li>Quality Standards</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">+351 XXX XXX XXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">contact@companyb.pt</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Portugal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-sm">
              © {currentYear} Company B. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-blue-100">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
