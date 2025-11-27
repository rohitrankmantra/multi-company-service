'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { OurSectors } from '@/components/sections/OurSectors';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { OurStaff } from '@/components/sections/OurStaff';
import { QualityStandards } from '@/components/sections/QualityStandards';
import { ContactSection } from '@/components/sections/ContactSection';
import { ClientTestimonials } from './../components/sections/ClientTestimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <WhoWeAre />
      <OurSectors />
      <HowWeWork />
      <OurStaff />
      <QualityStandards />
      <ClientTestimonials/>
      <ContactSection />
    </main>
  );
}
