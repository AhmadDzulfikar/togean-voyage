"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { destinations } from "@/data/destinations";
import BackLink from "@/components/BackLink";

export default function DestinationsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-white min-h-screen pt-8 pb-24 md:pb-32 px-4 md:px-8">
                <div className="mx-auto max-w-[1280px]">
                    <div className="pt-6 md:pt-8 mb-8">
                        <BackLink href="/#destinations" label="BACK TO HOME" />
                    </div>
                    {/* Header */}
                    <span className="block font-avenir text-sm md:text-base uppercase tracking-[0.2em] text-neutral-500 mb-4">
                        Togean Voyages
                    </span>
                    <h1 className="font-canto text-4xl md:text-5xl lg:text-6xl text-[#6b4c3b] mb-4">
                        Destinations
                    </h1>
                    <span className="block font-avenir text-neutral-500 text-lg mb-6 md:mb-8">
                        {destinations.length} Destinations
                    </span>

                    {/* Destinations List */}
                    <div className="flex flex-col gap-0">
                        {destinations.map((destination, index) => (
                            <div
                                key={destination.slug}
                                className="group border-t border-neutral-200 py-12 md:py-20 first:border-t-0 first:pt-0"
                            >
                                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-20 items-start">

                                    {/* Image Section */}
                                    <div className="w-full md:w-[480px] lg:w-[520px] shrink-0 overflow-hidden relative aspect-[16/10]">
                                        <Link href={`/destinations/${destination.slug}`} className="block h-full w-full cursor-pointer">
                                            <Image
                                                src={destination.image}
                                                alt={destination.name}
                                                fill
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                priority={index < 2} // Priority for top 2 images
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </Link>
                                    </div>

                                    {/* Text Section */}
                                    <div className="flex-1 flex flex-col justify-center py-2">
                                        <span className="font-avenir text-xs text-neutral-400 uppercase tracking-[0.2em] mb-3 md:mb-4">
                                            Togean Archipelago
                                        </span>

                                        <h2 className="font-canto text-3xl md:text-4xl text-black mb-4 md:mb-6">
                                            <Link href={`/destinations/${destination.slug}`} className="hover:text-opacity-80 transition-colors">
                                                {destination.name}
                                            </Link>
                                        </h2>

                                        <p className="font-avenir text-base md:text-lg text-neutral-600 leading-relaxed mb-6 md:mb-8 max-w-xl">
                                            {destination.description}
                                        </p>

                                        <div>
                                            <Link
                                                href={`/destinations/${destination.slug}`}
                                                className="inline-block font-avenir text-sm uppercase tracking-widest text-[#1a1a1a] border border-neutral-300 rounded-full px-8 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
                                            >
                                                Discover
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main >
            <FooterSection />
        </>
    );
}
