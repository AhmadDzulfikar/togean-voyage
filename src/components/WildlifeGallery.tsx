"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WildlifeSpecies } from "@/data/wildlifeSpecies";

interface WildlifeGalleryProps {
    species: WildlifeSpecies[];
}

type Habitat = "sea" | "land";

export default function WildlifeGallery({ species }: WildlifeGalleryProps) {
    const [activeHabitat, setActiveHabitat] = useState<Habitat>("sea");

    const filteredSpecies = species.filter((s) => s.habitat === activeHabitat);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                // ease: "easeOut" - removing explicit ease to fix type strictness or use cubic-bezier if needed
            },
        },
    };

    return (
        <section className="w-full max-w-[1280px] mx-auto px-6 pb-32">
            {/* Gallery Header */}
            <div className="mb-12 text-center max-w-2xl mx-auto">
                <h2 className="font-canto text-4xl md:text-5xl text-neutral-900 mb-6">
                    A field guide to Togean and Luwuk
                </h2>
                <p className="font-avenir text-lg text-neutral-600 leading-relaxed mb-8">
                    A quick look at the marine icons and forest dwellers you may encounter across reefs, mangroves, and island trails.
                </p>

                {/* Toggle */}
                <div className="inline-flex items-center gap-1 p-1 bg-neutral-100 rounded-full">
                    <button
                        onClick={() => setActiveHabitat("sea")}
                        className={`
                            px-6 py-2 rounded-full font-avenir text-base transition-all duration-300
                            ${activeHabitat === "sea"
                                ? "bg-white text-neutral-900 shadow-sm"
                                : "text-neutral-500 hover:text-neutral-700"
                            }
                        `}
                    >
                        Sea Wildlife
                    </button>
                    <button
                        onClick={() => setActiveHabitat("land")}
                        className={`
                            px-6 py-2 rounded-full font-avenir text-base transition-all duration-300
                            ${activeHabitat === "land"
                                ? "bg-white text-neutral-900 shadow-sm"
                                : "text-neutral-500 hover:text-neutral-700"
                            }
                        `}
                    >
                        Land Wildlife
                    </button>
                </div>
            </div>

            {/* Gallery Grid */}
            <motion.div
                key={activeHabitat} // Trigger re-render of container animation on toggle
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12"
            >
                {filteredSpecies.map((species) => (
                    <motion.div
                        key={species.id}
                        variants={cardVariants}
                        className="group flex flex-col h-full"
                    >
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
                        <div className="flex flex-col flex-grow text-center sm:text-left">
                            <h3 className="font-canto text-2xl text-neutral-900 mb-1">
                                {species.name}
                            </h3>
                            <p className="font-avenir text-sm text-neutral-500 italic mb-4">
                                {species.localName}
                            </p>

                            {/* Details Button */}
                            <div className="mt-auto pt-2">
                                <Link
                                    href={`/wildlife/${species.habitat}/${species.slug}`}
                                    className="font-avenir text-sm font-medium text-neutral-900 hover:text-neutral-600 hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1"
                                >
                                    Details &gt;
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
