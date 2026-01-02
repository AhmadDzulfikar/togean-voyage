import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import BoatsHospitalityIntro from "@/components/BoatsHospitalityIntro";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SpotlightCarousel />
        <BoatsHospitalityIntro />
      </main>
    </>
  );
}
