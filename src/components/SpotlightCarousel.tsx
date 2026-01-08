"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { destinations } from "@/data/destinations";
import ExploreAllLink from "./ExploreAllLink";

// Carousel slide data
const slides = destinations.slice(0, 5).map((dest, index) => {
    const ctas = [
        "Discover sunrise reefs",
        "Drift into calm bays",
        "Explore reef gardens",
        "Witness volcanic dawn",
        "Find golden solitude"
    ];

    return {
        id: index + 1,
        image: dest.image,
        title: dest.name,
        description: dest.description,
        actionText: ctas[index],
        actionHref: `/destinations/${dest.slug}`,
    };
});

export default function SpotlightCarousel() {
    // Embla Carousel State
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        containScroll: "trimSnaps",
        duration: 30
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setActiveIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    return (
        <section className="spotlight-carousel py-12 md:py-16 bg-white">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 px-4">
                <h2 className="spotlight-carousel__heading text-3xl md:text-4xl lg:text-5xl mb-4">
                    In the spotlight: Signature Destinations
                </h2>
                <ExploreAllLink href="/destinations" label="Curated Experiences: Signature Destinations" />
            </div>

            {/* Carousel Container */}
            <div className="relative max-w-[1400px] mx-auto group">
                {/* Scroll Wrapper (Viewport) */}
                {/* Scroll Wrapper (Viewport) */}
                <div className="overflow-hidden md:px-[calc((100%-676px)/2)]" ref={emblaRef}>
                    {/* Container */}
                    <div className="flex touch-pan-y gap-6 ml-4 md:ml-0 pr-8 md:pr-0">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`spotlight-carousel__slide flex-[0_0_85vw] md:flex-[0_0_676px] min-w-0 relative transition-opacity duration-500 ${index === activeIndex
                                    ? "opacity-100 grayscale-0"
                                    : "md:opacity-40 md:grayscale opacity-100 grayscale-0"
                                    }`}
                            >
                                {/* Card */}
                                <div className="bg-white group/card">
                                    {/* Image Area */}
                                    <div className="relative aspect-[16/9] md:aspect-[645/363] overflow-hidden rounded-sm">
                                        <Image
                                            src={slide.image}
                                            alt={slide.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                                            sizes="(max-width: 768px) 85vw, 676px"
                                            priority={index === 0}
                                        />
                                    </div>

                                    {/* Text Area */}
                                    <div className="pt-6 pb-4">
                                        {/* Mobile: Stack layout */}
                                        <div className="md:hidden">
                                            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                                                TOGEAN ISLANDS
                                            </p>
                                            <h3 className="font-canto text-xl mb-3 text-gray-900">{slide.title}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                                                {slide.description}
                                            </p>
                                            <Link
                                                href={slide.actionHref}
                                                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#6b4c3b] hover:text-[#4a3429] transition-colors group/link"
                                            >
                                                <span className="group-hover/link:underline underline-offset-4">
                                                    {slide.actionText}
                                                </span>
                                                <svg
                                                    className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
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
                                            </Link>
                                        </div>

                                        {/* Desktop: 2-column layout */}
                                        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
                                            {/* Left column: Title */}
                                            <div className="flex flex-col justify-center">
                                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                                                    TOGEAN ISLANDS
                                                </p>
                                                <h3 className="font-canto text-2xl lg:text-3xl">
                                                    {slide.title}
                                                </h3>
                                            </div>

                                            {/* Right column: Description + Action */}
                                            <div className="flex flex-col">
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                    {slide.description}
                                                </p>
                                                <Link
                                                    href={slide.actionHref}
                                                    className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#6b4c3b] hover:text-[#4a3429] transition-colors group/link"
                                                >
                                                    <span className="group-hover/link:underline underline-offset-4">
                                                        {slide.actionText}
                                                    </span>
                                                    <svg
                                                        className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
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
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Arrow Navigation */}
                <button
                    onClick={scrollPrev}
                    aria-label="Previous slide"
                    className="hidden md:flex absolute left-4 lg:left-8 top-[40%] -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white/90 hover:bg-white hover:border-gray-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6b4c3b] focus:ring-offset-2 z-10"
                >
                    <svg
                        className="w-5 h-5 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button
                    onClick={scrollNext}
                    aria-label="Next slide"
                    className="hidden md:flex absolute right-4 lg:right-8 top-[40%] -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white/90 hover:bg-white hover:border-gray-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6b4c3b] focus:ring-offset-2 z-10"
                >
                    <svg
                        className="w-5 h-5 text-gray-700"
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

                {/* Mobile Pagination Dots */}
                <div className="flex md:hidden justify-center gap-2 mt-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#6b4c3b] focus:ring-offset-2 ${index === activeIndex
                                ? "bg-[#6b4c3b]"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}
