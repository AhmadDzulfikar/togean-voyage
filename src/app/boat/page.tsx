import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ZigzagScrollSections from "@/components/ZigzagScrollSections";
import { boatDetails } from "@/data/boatDetails";
import BackLink from "@/components/BackLink";

export default function BoatPage() {
    return (
        <div className="bg-white min-h-screen text-neutral-900 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-8 pb-24 w-full">

                {/* Back Button & Hero Container */}
                <div className="max-w-[1280px] mx-auto px-4 md:px-8 mb-16 md:mb-24">
                    {/* Back Button */}
                    <div className="pt-6 md:pt-8 mb-12 md:mb-16">
                        <BackLink href="/#boat" label="BACK TO BOAT" />
                    </div>

                    {/* Simple Premium Hero Text */}
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="block font-avenir uppercase tracking-[0.2em] text-neutral-400 mb-4 text-xs md:text-sm">
                            On Board Experience
                        </span>
                        <h1 className="font-canto text-5xl md:text-7xl lg:text-8xl text-neutral-900 mb-8 tracking-tight leading-none">
                            Safety, Service, <br /> & Simple Luxury
                        </h1>
                        <p className="font-avenir text-lg md:text-xl text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed">
                            Discover the details that make every journey smooth, safe, and memorable. From our captain’s expertise to the quiet comfort of the deck.
                        </p>
                    </div>
                </div>

                {/* Zigzag Scroll Section */}
                <ZigzagScrollSections items={boatDetails} />

            </main>

            <FooterSection />
        </div>
    );
}
