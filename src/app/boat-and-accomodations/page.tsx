import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CollectionSlider from "@/components/CollectionSlider";

const boatItems = [
    {
        title: "The Speed of Silence",
        description: "Glide through the archipelago on our premium wooden speedboat. Designed for smooth transfers and sunset cruises.",
        imagePath: "/images/collection/boat-1.png",
        href: "#"
    },
    {
        title: "Lounge & Horizon",
        description: "Shaded comfort, teak decks, and the endless blue. Ideally suited for long lazy days between dives.",
        imagePath: "/images/collection/boat-2.png",
        href: "#"
    },
    {
        title: "Safety & Service",
        description: "Your safety is our ritual. Expert crew, top-tier gear, and genuine care in every interaction.",
        imagePath: "/images/collection/boat-3.png",
        href: "#"
    },
    {
        title: "Lagoon Explorer",
        description: "Navigate shallow reefs and hidden lagoons where larger vessels cannot reach. Pure immersion.",
        imagePath: "/images/collection/boat-4.png",
        href: "#"
    }
];

const stayItems = [
    {
        title: "Pulau Puat Guest House",
        description: "Sustainable luxury woven into the jungle. Wake up to the sound of waves and birdsong.",
        imagePath: "/images/collection/stay-1.png",
        href: "#"
    },
    {
        title: "Malenge Guest House",
        description: "Airy, light-filled rooms with panoramic ocean views. Simplicity meets premium comfort.",
        imagePath: "/images/collection/stay-2.png",
        href: "#"
    },
    {
        title: "Walea Kodi Guest House",
        description: "Your own private terrace for golden hours. Unwind in a hammock where time stands still.",
        imagePath: "/images/collection/stay-3.png",
        href: "#"
    },
    {
        title: "Una Una Guest House",
        description: "Gather under the palms for communal feasting. Warm lights, sand floors, and unforgettable stories.",
        imagePath: "/images/collection/stay-4.png",
        href: "#"
    }
];

export default function BoatAndAccommodationPage() {
    return (
        <div className="bg-white min-h-screen text-neutral-900 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-0 w-full">
                {/* Page Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 px-6">
                    <h1 className="font-canto text-5xl md:text-7xl text-neutral-900 mb-6 tracking-tight">
                        Boat and Accommodation
                    </h1>
                    <p className="font-avenir text-xl md:text-2xl text-neutral-500 font-light max-w-2xl mx-auto">
                        A complete look at how we travel and where you rest.
                        <br className="hidden md:block" />
                        Designed for presence, comfort, and connection.
                    </p>
                </div>

                {/* Boat Collection Slider */}
                <CollectionSlider
                    title="Boat Safety & Experience"
                    variant="boat"
                    items={boatItems}
                />

                {/* Accommodation Collection Slider */}
                <CollectionSlider
                    title="Our Guest Houses"
                    variant="stay"
                    items={stayItems}
                />
            </main>

            <FooterSection />
        </div>
    );
}
