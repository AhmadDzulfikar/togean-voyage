/**
 * Homepage
 * 
 * Section naming convention:
 * - Hero: Top video section
 * - Destination: SpotlightCarousel section
 * - Safety & Experience Ship: KapalSafetyExperience section
 * - Local Community: LocalCommunity zig-zag parallax section
 */

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import ProgramCarousel from "@/components/ProgramCarousel";
import WildlifeCarousel from "@/components/WildlifeCarousel";
import KapalSafetyExperience from "@/components/KapalSafetyExperience";
import AccommodationSection from "@/components/AccommodationSection";
import LocalCommunity from "@/components/LocalCommunity";
import BlogSection from "@/components/BlogSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Destination Section */}
        <SpotlightCarousel />
        {/* Program Section */}
        <ProgramCarousel />
        {/* Safety & Experience Ship Section */}
        <KapalSafetyExperience />
        {/* Accommodation Section */}
        <AccommodationSection />
        {/* Wildlife Section */}
        <WildlifeCarousel />
        {/* Local Community Section */}
        <LocalCommunity />
        {/* Blog Section */}
        <BlogSection />
        {/* Footer Section */}
        <FooterSection />
      </main>
    </>
  );
}
