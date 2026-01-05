"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { destinations } from "@/data/destinations";

export default function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const destination = destinations.find((d) => d.slug === slug);

    if (!destination) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen pt-24 pb-20 md:pt-32 md:pb-24">
            <div className="mx-auto px-4 md:px-8 max-w-[1024px]">
                {/* Back Link */}
                <div className="mb-8 md:mb-12">
                    <Link href="/destinations" className="font-avenir text-sm uppercase tracking-widest text-neutral-500 hover:text-[#1a1a1a] transition-colors">
                        ← Back to Destinations
                    </Link>
                </div>

                {/* Title & Header */}
                <div className="mb-8 md:mb-12">
                    <span className="font-avenir text-xs text-neutral-400 uppercase tracking-[0.2em] mb-3 block">
                        Togean Archipelago
                    </span>
                    <h1 className="font-canto text-4xl md:text-5xl lg:text-7xl text-[#1a1a1a] mb-4">
                        {destination.name}
                    </h1>
                </div>

                {/* Hero Image */}
                <div className="w-full relative aspect-[16/9] mb-12 md:mb-16 overflow-hidden">
                    <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                </div>

                {/* Content */}
                <div className="max-w-2xl mx-auto">
                    <p className="font-avenir text-lg md:text-xl text-neutral-700 leading-relaxed mb-8">
                        {destination.description}
                    </p>
                    <div className="py-8 border-t border-b border-neutral-100 text-center">
                        <p className="font-avenir text-neutral-400 italic">
                            More details coming soon.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
