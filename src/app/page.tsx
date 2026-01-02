import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SpotlightCarousel from "@/components/SpotlightCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SpotlightCarousel />
      </main>
    </>
  );
}
