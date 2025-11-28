'use client';

import { HeroSection } from '@/components/home/HeroSection';
import { WhoWeAre } from '@/components/home/WhoWeAre';
import { OurSectors } from '@/components/home/OurSectors';
import { HowWeWork } from '@/components/home/HowWeWork';
import { OurStaff } from '@/components/home/OurStaff';
import { QualityStandards } from '@/components/home/QualityStandards';
import { ContactSection } from '@/components/home/ContactSection';
import { ClientTestimonials } from '../components/home/ClientTestimonials';

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
