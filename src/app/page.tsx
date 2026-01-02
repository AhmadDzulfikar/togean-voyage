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
import KapalSafetyExperience from "@/components/KapalSafetyExperience";
import LocalCommunity from "@/components/LocalCommunity";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Destination Section */}
        <SpotlightCarousel />
        {/* Safety & Experience Ship Section */}
        <KapalSafetyExperience />
        {/* Local Community Section */}
        <LocalCommunity />
      </main>
    </>
  );
}
