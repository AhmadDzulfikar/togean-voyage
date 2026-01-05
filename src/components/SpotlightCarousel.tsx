"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { destinations } from "@/data/destinations";

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

// Easing function for smooth animation
const easeInOutCubic = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function SpotlightCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Custom smooth scroll animation (700-900ms)
    const animateScrollTo = useCallback(
        (targetIndex: number, duration = 800) => {
            const scroller = scrollerRef.current;
            if (!scroller || isAnimating) return;

            const slideWidth = slideRefs.current[0]?.offsetWidth ?? 0;
            const gap = 24; // gap-6 = 24px
            const targetScrollLeft = targetIndex * (slideWidth + gap);

            const startScrollLeft = scroller.scrollLeft;
            const startTime = performance.now();

            setIsAnimating(true);

            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeInOutCubic(progress);

                scroller.scrollLeft =
                    startScrollLeft + (targetScrollLeft - startScrollLeft) * easedProgress;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setIsAnimating(false);
                    setActiveIndex(targetIndex);
                }
            };

            requestAnimationFrame(animate);
        },
        [isAnimating]
    );

    // Navigate to next slide (with wrap-around)
    const goToNext = useCallback(() => {
        const nextIndex = activeIndex >= slides.length - 1 ? 0 : activeIndex + 1;
        animateScrollTo(nextIndex);
    }, [activeIndex, animateScrollTo]);

    // Navigate to previous slide (with wrap-around)
    const goToPrev = useCallback(() => {
        const prevIndex = activeIndex <= 0 ? slides.length - 1 : activeIndex - 1;
        animateScrollTo(prevIndex);
    }, [activeIndex, animateScrollTo]);

    // Navigate to specific slide (for dots)
    const goToSlide = useCallback(
        (index: number) => {
            if (index !== activeIndex) {
                animateScrollTo(index);
            }
        },
        [activeIndex, animateScrollTo]
    );

    // IntersectionObserver for active slide detection
    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        const observerOptions: IntersectionObserverInit = {
            root: scroller,
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: "0px",
        };

        let maxRatio = 0;
        let maxIndex = 0;
        const ratios = new Map<number, number>();

        const observer = new IntersectionObserver((entries) => {
            // Don't update during animation
            if (isAnimating) return;

            entries.forEach((entry) => {
                const index = Number(entry.target.getAttribute("data-index"));
                ratios.set(index, entry.intersectionRatio);
            });

            // Find slide with highest intersection ratio
            maxRatio = 0;
            maxIndex = 0;
            ratios.forEach((ratio, index) => {
                if (ratio > maxRatio) {
                    maxRatio = ratio;
                    maxIndex = index;
                }
            });

            if (maxRatio > 0.5) {
                setActiveIndex(maxIndex);
            }
        }, observerOptions);

        slideRefs.current.forEach((slide) => {
            if (slide) observer.observe(slide);
        });

        return () => observer.disconnect();
    }, [isAnimating]);

    return (
        <section className="spotlight-carousel py-12 md:py-16 bg-white">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 px-4">
                <h2 className="spotlight-carousel__heading text-3xl md:text-4xl lg:text-5xl mb-4">
                    In the spotlight: Signature Destinations
                </h2>
                <Link
                    href="/destinations"
                    className="spotlight-carousel__subheading inline-flex items-center gap-2 text-sm md:text-base uppercase tracking-wider text-[#6b4c3b] hover:text-[#4a3429] transition-colors group"
                >
                    <span className="group-hover:underline underline-offset-4">
                        Curated Experiences: Signature Destinations
                    </span>
                    <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

            {/* Carousel Container */}
            <div className="relative max-w-[1400px] mx-auto">
                {/* Scroll Container */}
                <div
                    ref={scrollerRef}
                    className="flex gap-6 overflow-x-scroll snap-x snap-mandatory scrollbar-hide scroll-smooth md:scroll-px-[calc((100%-676px)/2)] px-4 md:px-[calc((100%-676px)/2)]"
                    style={{ scrollBehavior: "auto" }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            ref={(el) => {
                                slideRefs.current[index] = el;
                            }}
                            data-index={index}
                            className={`spotlight-carousel__slide flex-shrink-0 w-[85vw] md:w-[676px] snap-center transition-all duration-500 ${index === activeIndex
                                ? "opacity-100 scale-100 grayscale-0"
                                : "md:opacity-40 md:grayscale md:scale-95 opacity-100 grayscale-0 scale-100"
                                }`}
                        >
                            {/* Card */}
                            <div className="bg-white">
                                {/* Image Area */}
                                <div className="relative aspect-[16/9] md:aspect-[645/363] overflow-hidden">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
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
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                            {slide.description}
                                        </p>
                                        <Link
                                            href={slide.actionHref}
                                            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#6b4c3b] hover:text-[#4a3429] transition-colors group"
                                        >
                                            <span className="group-hover:underline underline-offset-4">
                                                {slide.actionText}
                                            </span>
                                            <svg
                                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
                                                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#6b4c3b] hover:text-[#4a3429] transition-colors group"
                                            >
                                                <span className="group-hover:underline underline-offset-4">
                                                    {slide.actionText}
                                                </span>
                                                <svg
                                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

                {/* Desktop Arrow Navigation */}
                <button
                    onClick={goToPrev}
                    aria-label="Previous slide"
                    className="hidden md:flex absolute left-4 lg:left-8 top-1/3 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white/90 hover:bg-white hover:border-gray-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6b4c3b] focus:ring-offset-2 z-10"
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
                    onClick={goToNext}
                    aria-label="Next slide"
                    className="hidden md:flex absolute right-4 lg:right-8 top-1/3 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full border border-gray-300 bg-white/90 hover:bg-white hover:border-gray-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6b4c3b] focus:ring-offset-2 z-10"
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
                <div className="flex md:hidden justify-center gap-2 mt-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#6b4c3b] focus:ring-offset-2 ${index === activeIndex
                                ? "bg-[#6b4c3b]"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
