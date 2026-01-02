/**
 * Homepage
 * 
 * Section naming convention:
 * - Hero: Top video section
 * - Destination: SpotlightCarousel section
 * - Kapal Safety & Experience: BoatsHospitalityIntro section
 * - Local Community: LocalCommunity zig-zag parallax section
 */

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import BoatsHospitalityIntro from "@/components/BoatsHospitalityIntro";
import LocalCommunity from "@/components/LocalCommunity";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Destination Section */}
        <SpotlightCarousel />
        {/* Kapal Safety & Experience Section */}
        <BoatsHospitalityIntro />
        {/* Local Community Section */}
        <LocalCommunity />
      </main>
    </>
  );
}
