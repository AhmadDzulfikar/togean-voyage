import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function BoatAndAccommodationPage() {
    return (
        <div className="bg-white min-h-screen text-neutral-900 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24 w-full">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 px-6">
                    <h1 className="font-canto text-5xl md:text-7xl text-neutral-900 mb-6 tracking-tight">
                        Boat and Accommodation
                    </h1>
                    <p className="font-avenir text-xl md:text-2xl text-neutral-500 font-light">
                        A complete look at how we travel and where you rest
                    </p>
                </div>

                {/* Boat Section Placeholder */}
                <section className="max-w-[1280px] mx-auto px-6 md:px-12 mb-24">
                    <div className="bg-neutral-50 p-12 text-center rounded-sm border border-neutral-100">
                        <h2 className="font-canto text-3xl text-neutral-800 mb-4">Boat Safety & Experience</h2>
                        <p className="font-avenir text-neutral-600">Detailed boat specifications and safety features coming soon.</p>
                    </div>
                </section>

                {/* Accommodation Section Placeholder */}
                <section className="max-w-[1280px] mx-auto px-6 md:px-12 mb-24">
                    <div className="bg-neutral-50 p-12 text-center rounded-sm border border-neutral-100">
                        <h2 className="font-canto text-3xl text-neutral-800 mb-4">Accommodation</h2>
                        <p className="font-avenir text-neutral-600">Guest house details and amenities coming soon.</p>
                    </div>
                </section>
            </main>

            <FooterSection />
        </div>
    );
}
