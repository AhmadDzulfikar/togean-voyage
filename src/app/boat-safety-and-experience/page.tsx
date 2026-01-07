import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function BoatSafetyPage() {
    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
                <h1 className="font-canto text-5xl md:text-7xl mb-6">Boat Safety & Experience</h1>
                <p className="font-avenir text-xl text-neutral-500">Coming soon.</p>
            </main>
            <FooterSection />
        </div>
    );
}
