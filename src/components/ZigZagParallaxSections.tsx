"use client";

import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";

// Data for 3 blocks
const zigzagData = [
    {
        imageSrc: "/zigzaigsatu.avif",
        title: "Engage with locals and embrace the warmth of Togean people",
        description: [
            "The Togean Islands are more than a tropical escape—they're a gateway to heartfelt connections and timeless traditions. Meet the Bajau 'Sea Gypsies,' who live in harmony with the ocean, and the Pamona and Saluan communities, whose warmth and hospitality make every visitor feel at home. From stilted sea villages to vibrant cultural traditions, the Togean people embody the serenity and authenticity of these remote islands.",
            "Let their stories, smiles, and traditions transform your trip into an unforgettable journey where nature and culture unite in perfect harmony.",
        ],
    },
    {
        imageSrc: "/zigzaigdua.avif",
        title: "Engage with locals and embrace the warmth of Togean people",
        description: [
            "The Togean Islands are more than a tropical escape—they're a gateway to heartfelt connections and timeless traditions. Meet the Bajau 'Sea Gypsies,' who live in harmony with the ocean, and the Pamona and Saluan communities, whose warmth and hospitality make every visitor feel at home. From stilted sea villages to vibrant cultural traditions, the Togean people embody the serenity and authenticity of these remote islands.",
            "Let their stories, smiles, and traditions transform your trip into an unforgettable journey where nature and culture unite in perfect harmony.",
        ],
    },
    {
        imageSrc: "/zigzagtiga.avif",
        title: "Engage with locals and embrace the warmth of Togean people",
        description: [
            "The Togean Islands are more than a tropical escape—they're a gateway to heartfelt connections and timeless traditions. Meet the Bajau 'Sea Gypsies,' who live in harmony with the ocean, and the Pamona and Saluan communities, whose warmth and hospitality make every visitor feel at home. From stilted sea villages to vibrant cultural traditions, the Togean people embody the serenity and authenticity of these remote islands.",
            "Let their stories, smiles, and traditions transform your trip into an unforgettable journey where nature and culture unite in perfect harmony.",
        ],
    },
];

// Parallax range in pixels
const PARALLAX_RANGE_DESKTOP = 70;
const PARALLAX_RANGE_MOBILE = 30;

function ZigZagBlock({
    imageSrc,
    title,
    description,
    isReversed,
    index,
}: {
    imageSrc: string;
    title: string;
    description: string[];
    isReversed: boolean;
    index: number;
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useRef(false);

    // Memoized scroll handler to avoid re-creation
    const handleScroll = useCallback(() => {
        if (prefersReducedMotion.current) return;
        if (!sectionRef.current || !imageRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate progress: 0 when section just enters viewport, 1 when it leaves
        // Use section center relative to viewport center for smoother effect
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const progress = (viewportCenter - sectionCenter) / (windowHeight + rect.height);

        // Clamp progress between -0.5 and 0.5, then normalize to -1 to 1
        const clampedProgress = Math.max(-0.5, Math.min(0.5, progress)) * 2;

        // Determine parallax range based on viewport width
        const isMobile = window.innerWidth < 768;
        const range = isMobile ? PARALLAX_RANGE_MOBILE : PARALLAX_RANGE_DESKTOP;

        // Apply transform directly to avoid React re-renders
        const translateY = clampedProgress * range;
        imageRef.current.style.transform = `translateY(${translateY}px) scale(1.15)`;
    }, []);

    useEffect(() => {
        // Check reduced motion preference
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        prefersReducedMotion.current = mediaQuery.matches;

        const handleMediaChange = (e: MediaQueryListEvent) => {
            prefersReducedMotion.current = e.matches;
            if (e.matches && imageRef.current) {
                imageRef.current.style.transform = "translateY(0) scale(1.15)";
            }
        };
        mediaQuery.addEventListener("change", handleMediaChange);

        // Scroll listener with RAF for smoothness
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            mediaQuery.removeEventListener("change", handleMediaChange);
        };
    }, [handleScroll]);

    return (
        <div
            ref={sectionRef}
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16 ${isReversed ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Image Column */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative overflow-hidden w-full max-w-[400px] md:max-w-[540px] h-[500px] md:h-[700px] lg:h-[807px]">
                    <div
                        ref={imageRef}
                        className="absolute inset-0 will-change-transform"
                        style={{ transform: "translateY(0) scale(1.15)" }}
                    >
                        <Image
                            src={imageSrc}
                            alt={`Togean cultural image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 540px"
                            priority={index === 0}
                        />
                    </div>
                </div>
            </div>

            {/* Text Column */}
            <div className="w-full md:w-1/2 md:max-w-[640px] px-4 md:px-16 lg:px-[120px] py-8 md:py-0">
                <h2 className="font-canto text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-neutral-900">
                    {title}
                </h2>
                <div className="mt-6 md:mt-8 space-y-6">
                    {description.map((paragraph, pIndex) => (
                        <p
                            key={pIndex}
                            className="font-avenir text-sm sm:text-base leading-relaxed text-neutral-600"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ZigZagParallaxSections() {
    return (
        <section className="bg-white py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 md:space-y-24 lg:space-y-32">
                    {zigzagData.map((block, index) => (
                        <ZigZagBlock
                            key={index}
                            imageSrc={block.imageSrc}
                            title={block.title}
                            description={block.description}
                            isReversed={index % 2 === 1}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
