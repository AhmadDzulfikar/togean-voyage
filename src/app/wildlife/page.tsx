import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WildlifeIntroScroll from "@/components/WildlifeIntroScroll";
import { wildlifeSpecies } from "@/data/wildlifeSpecies";

export default function WildlifePage() {
    return (
        <div className="bg-white min-h-screen text-neutral-900">
            <Navbar />

            {/* SECTION 1: HERO (FULL 1 SCREEN) */}
            <header className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/wildlife/hero.webp"
                        alt="Togean Islands seascape with wildlife mood"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    {/* Subtle Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
                </div>

                {/* Overlay Text */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="font-canto text-5xl md:text-7xl lg:text-8xl text-white tracking-wide shadow-sm">
                        Wildlife at Togean
                    </h1>
                </div>
            </header>

            <main>
                {/* SECTION 2: SCROLL INTRO BLOCK */}
                <WildlifeIntroScroll />

                {/* SECTION 3: SPECIES GALLERY */}
                <section className="w-full max-w-[1280px] mx-auto px-6 pb-32">
                    {/* Gallery Header */}
                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h2 className="font-canto text-4xl md:text-5xl text-neutral-900 mb-6">
                            A field guide to Togean and Luwuk
                        </h2>
                        <p className="font-avenir text-lg text-neutral-600 leading-relaxed">
                            A quick look at the marine icons and forest dwellers you may encounter across reefs, mangroves, and island trails.
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                        {wildlifeSpecies.map((species) => (
                            <div key={species.id} className="group flex flex-col">
                                {/* Image Card */}
                                <div className="aspect-[4/5] relative overflow-hidden rounded-sm bg-neutral-100 mb-6">
                                    <Image
                                        src={species.image}
                                        alt={species.name}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                {/* Text Info */}
                                <div className="text-center sm:text-left">
                                    <h3 className="font-canto text-2xl text-neutral-900 mb-1">
                                        {species.name}
                                    </h3>
                                    {/* Optional: Local Name or just keep it simple as requested "Image + Name only" 
                                        User said: "Each card: image + animal name ... Optional tiny category label in font-avenir"
                                        I will add the local name as a subtle subtitle if available, as it adds value. 
                                    */}
                                    <p className="font-avenir text-sm text-neutral-500 italic">
                                        {species.localName}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <FooterSection />
        </div>
    );
}
