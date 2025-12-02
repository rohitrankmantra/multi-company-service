// app/sectors/[slug]/page.jsx
import { notFound } from "next/navigation";
import { sectorsData } from "../data";
import { Hero } from "@/components/sectors/Hero";
import { Introduction } from "@/components/sectors/Introduction";
import { Highlights } from "@/components/sectors/Highlights";
import {ProjectShowcase} from "@/components/sectors/ProjectShowcase"

export function generateStaticParams() {
  return Object.keys(sectorsData).map((slug) => ({ slug }));
}

export default function Page({ params }) {
  const { slug } = params;
  const sector = sectorsData[slug];

  if (!sector) notFound();

  return (
    <>
      {/* Hero */}
      <Hero
        title={sector.title}
        subtitle={sector.subtitle}
        image={sector.image}
        ctaText={sector.ctaText}
        ctaHref={sector.ctaHref}
      />

     {sector.sections.map((section, idx) => {
  switch (section.type) {
    case "intro":
      return (
        <Introduction
          key={idx}
          heading={section.heading}
          subheading={section.subheading}
          text={section.text}
          image={section.image}
          imageAlt={section.imageAlt}
          highlights={section.highlights}
          ctaText={section.ctaText}
          ctaHref={section.ctaHref}
        />
      );

    case "highlights":
      return (
        <Highlights
          key={idx}
          title={section.title}
          variant={section.variant}
          items={section.items}
        />
      );

    case "projects":
      return <ProjectShowcase key={idx} sectorSlug={slug} heading={section.heading} />;

    default:
      return null;
  }
})}

    </>
  );
}
