"use client";

/**
 * Safety & Experience Ship Section
 * 
 * Displays boat safety and experience features with:
 * - Desktop: Split layout with 2-column feature grid + right-aligned image
 * - Mobile: Accordion layout for compact scrolling
 * 
 * Section naming convention:
 * - Destination (SpotlightCarousel)
 * - Safety & Experience Ship (this component)
 * - Local Community (LocalCommunity)
 */

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Feature items data
const features = [
    {
        id: "boat-cabins",
        title: "Boat, Cabins & Shared Space",
        description:
            "Comfort-first layout with shaded lounging, breezy cabins, and social corners. Room to stretch out, read, nap, and gather without feeling crowded.",
    },
    {
        id: "safety",
        title: "Safety On Board",
        description:
            "Safety-first routines, clear briefings, and well-maintained gear. You can relax fully knowing every detail is planned and checked.",
    },
    {
        id: "crew",
        title: "The Crew & Your Captain",
        description:
            "A calm, capable captain and warm crew who anticipate needs. They guide, help, and host with genuine care from start to finish.",
    },
    {
        id: "rhythm",
        title: "Daily Rhythm & Atmosphere",
        description:
            "A smooth, flexible flow shaped around weather and energy. Sunrise starts, slow afternoons, and golden-hour stops that feel right each day.",
    },
    {
        id: "cuisine",
        title: "Fresh Cuisine",
        description:
            "Fresh, flavorful meals prepared with attention. Local ingredients, balanced options, and thoughtful touches that make dining onboard simple and satisfying.",
    },
    {
        id: "purpose",
        title: "Travel With Purpose",
        description:
            "Travel that gives back through respectful local partnerships and mindful routes. Small choices that support communities and protect the reefs we all come to love.",
    },
];

// Accordion Item Component (Mobile)
function AccordionItem({
    feature,
    isOpen,
    onToggle,
}: {
    feature: (typeof features)[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(contentRef.current.scrollHeight);
        }
    }, []);

    return (
        <div className="border-b border-neutral-200">
            <button
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${feature.id}`}
                className="w-full flex items-center justify-between py-4 px-2 text-left focus:outline-none focus:ring-2 focus:ring-[#6b4c3b] focus:ring-offset-2 rounded"
            >
                <span className="font-canto text-lg text-neutral-900">
                    {feature.title}
                </span>
                <svg
                    className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ease-out ${isOpen ? "rotate-90" : ""
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
            <div
                id={`accordion-content-${feature.id}`}
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                    maxHeight: isOpen ? `${maxHeight}px` : "0px",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <p className="px-2 pb-4 font-avenir text-sm leading-relaxed text-neutral-600">
                    {feature.description}
                </p>
            </div>
        </div>
    );
}

export default function KapalSafetyExperience() {
    const [openAccordionId, setOpenAccordionId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenAccordionId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32">
            {/* Desktop/Tablet Layout */}
            <div className="hidden md:block">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column: Text Content */}
                        <div className="pl-6 lg:pl-8 pr-4 flex flex-col justify-center">
                            {/* Title */}
                            <h2 className="font-canto text-3xl md:text-4xl lg:text-5xl leading-tight text-neutral-900">
                                Sail easy, feel at home
                            </h2>

                            {/* Intro */}
                            <p className="mt-6 md:mt-8 font-avenir text-sm md:text-base leading-relaxed text-neutral-600 max-w-lg">
                                We travel unhurried. More sea, more silence, more care. These
                                are the essentials that make every TogeanVoyage journey safe,
                                comfortable, and deeply personal.
                            </p>

                            {/* Feature Grid (2 columns × 3 rows) */}
                            <div className="mt-10 md:mt-12 grid grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-10">
                                {features.map((feature) => (
                                    <div key={feature.id}>
                                        <h3 className="font-canto text-xl md:text-2xl text-neutral-800">
                                            {feature.title}
                                        </h3>
                                        <p className="mt-3 font-avenir text-sm leading-relaxed text-neutral-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Image (aligned to right edge) */}
                        <div className="relative h-[600px] lg:h-[750px]">
                            <Image
                                src="/kapal-safety-experience.webp"
                                alt="Luxury wooden boat in turquoise Togean waters"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 1024px) 50vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden px-4">
                {/* Title */}
                <h2 className="font-canto text-3xl leading-tight text-neutral-900 text-center">
                    Sail easy, feel at home
                </h2>

                {/* Intro */}
                <p className="mt-6 font-avenir text-sm leading-relaxed text-neutral-600 text-center">
                    We travel unhurried. More sea, more silence, more care. These are
                    the essentials that make every TogeanVoyage journey safe,
                    comfortable, and deeply personal.
                </p>

                {/* Image */}
                <div className="mt-8 relative w-full aspect-[4/3]">
                    <Image
                        src="/kapal-safety-experience.webp"
                        alt="Luxury wooden boat in turquoise Togean waters"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>

                {/* Accordion */}
                <div className="mt-8">
                    {features.map((feature) => (
                        <AccordionItem
                            key={feature.id}
                            feature={feature}
                            isOpen={openAccordionId === feature.id}
                            onToggle={() => toggleAccordion(feature.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
