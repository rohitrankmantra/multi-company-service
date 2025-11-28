"use client";

import { WhoWeAreHero } from "@/components/about/WhoWeAreHero.jsx";
import { WhoWeAreIntro } from "@/components/about/WhoWeAreIntro.jsx";
import { OurValues } from "@/components/about/OurValues.jsx";
import { WhyChooseUs } from "@/components/about/WhyChooseUs.jsx";

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <WhoWeAreHero />

      {/* INTRO SECTION */}
      <WhoWeAreIntro />

      {/* OUR VALUES */}
      <OurValues />

      {/* WHY CHOOSE US FAQ SECTION */}
      <WhyChooseUs />

    </main>
  );
}
