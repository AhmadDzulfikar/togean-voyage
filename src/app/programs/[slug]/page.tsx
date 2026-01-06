import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programs } from "@/data/programs";
import Link from "next/link";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return programs.map((program) => ({
        slug: program.slug,
    }));
}

export default async function ProgramDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const program = programs.find((p) => p.slug === slug);

    if (!program) {
        notFound();
    }

    return (
        <main className="bg-[#FFFFF0] min-h-screen pb-24">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full">
                <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 pt-20">
                    <div className="max-w-4xl">
                        <span className="block font-avenir text-white text-sm md:text-base uppercase tracking-[0.2em] mb-4 md:mb-6">
                            Signature Program
                        </span>
                        <h1 className="font-canto text-5xl md:text-6xl lg:text-8xl text-white mb-6 drop-shadow-lg">
                            {program.name}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-[1000px] mx-auto px-4 md:px-8 -mt-20 relative z-10">
                <div className="bg-white p-8 md:p-16 shadow-sm">
                    {/* Top Description */}
                    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                        <p className="font-avenir text-lg md:text-xl md:leading-relaxed text-neutral-700">
                            {program.description}
                        </p>
                    </div>

                    {/* Placeholder Content Blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-4xl mx-auto">
                        <div className="space-y-4">
                            <h3 className="font-canto text-2xl md:text-3xl text-[#6b4c3b]">Overview</h3>
                            <p className="font-avenir text-neutral-600 leading-relaxed">
                                Experience the best of {program.name.toLowerCase()} in a tailored journey designed to immerse you in the natural beauty of the Togean Islands. Our guides ensure a safe and memorable adventure.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-canto text-2xl md:text-3xl text-[#6b4c3b]">What you'll do</h3>
                            <p className="font-avenir text-neutral-600 leading-relaxed">
                                Enjoy curated activities ranging from leisurely exploration to active discovery. Every moment is crafted to provide a premium and authentic experience.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-canto text-2xl md:text-3xl text-[#6b4c3b]">Best time</h3>
                            <p className="font-avenir text-neutral-600 leading-relaxed">
                                This program is available year-round, with the best visibility and calmest waters typically found between April and November.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-canto text-2xl md:text-3xl text-[#6b4c3b]">Notes</h3>
                            <p className="font-avenir text-neutral-600 leading-relaxed">
                                Suitable for all skill levels. Equipment is provided where necessary. Please bring appropriate swimwear and sun protection.
                            </p>
                        </div>
                    </div>

                    {/* Back Link */}
                    <div className="mt-20 text-center">
                        <Link href="/programs" className="inline-block font-avenir text-sm uppercase tracking-widest text-neutral-500 hover:text-[#6b4c3b] transition-colors border-b border-transparent hover:border-[#6b4c3b] pb-1">
                            ← Back to Programs
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
