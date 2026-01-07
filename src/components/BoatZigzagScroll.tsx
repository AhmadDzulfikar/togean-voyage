"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

type ZigzagItem = {
    id: string;
    title: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
};

type BoatZigzagScrollProps = {
    items: ZigzagItem[];
};

export default function BoatZigzagScroll({ items }: BoatZigzagScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const container = containerRef.current;
        if (!container) return;

        const textBlocks = container.querySelectorAll<HTMLElement>(".zigzag-text-block");
        const imageHeight = 550; // Approximated fixed height for calculation clamp

        let animationFrameId: number;

        const handleScroll = () => {
            const viewportHeight = window.innerHeight;

            textBlocks.forEach((block) => {
                const rect = block.parentElement?.getBoundingClientRect();
                if (!rect) return;

                // Check if block is in viewport (with some buffer)
                if (rect.top < viewportHeight && rect.bottom > 0) {
                    // Calculate relative progress (0 to 1) of the section through the viewport center
                    // We want the text to move DOWN as we scroll DOWN.
                    // When rect.top is high (positive), text should be high (translateY near 0)
                    // When rect.top is low (scrolled past), text should be lower (translateY positive)

                    const textHeight = block.offsetHeight;
                    const maxTranslate = Math.max(0, imageHeight - textHeight);

                    // Center-based calculation
                    const sectionCenter = rect.top + rect.height / 2;
                    const screenCenter = viewportHeight / 2;
                    const distanceFromCenter = screenCenter - sectionCenter;

                    // Sensitivity factor
                    const percent = (distanceFromCenter / (viewportHeight + rect.height)) + 0.5;

                    // Clamp 0 to 1
                    const clampedPercent = Math.max(0, Math.min(1, percent));

                    // Map to translation range
                    const translation = clampedPercent * maxTranslate;

                    // Apply transform directly for performance
                    block.style.transform = `translateY(${translation}px)`;
                }
            });

            animationFrameId = requestAnimationFrame(handleScroll);
        };

        const onScroll = () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [isMobile]);

    return (
        <div ref={containerRef} className="flex flex-col gap-24 md:gap-32 lg:gap-40 py-24 md:py-32">
            {items.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={item.id}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 relative max-w-7xl mx-auto px-6 w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Image Column */}
                        <div className="w-full md:w-1/2 relative h-[300px] md:h-[550px] shrink-0">
                            <div className="relative h-full w-full overflow-hidden rounded-sm shadow-sm md:shadow-md">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Text Column - Wrapper for alignment */}
                        <div className="w-full md:w-1/2 flex h-full">
                            {/* The floating text block */}
                            <div
                                className="zigzag-text-block w-full"
                                style={{ transition: isMobile ? "none" : "transform 0.1s linear" }} // Fallback/base style
                            >
                                <h2 className="font-canto text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 leading-tight">
                                    {item.title}
                                </h2>
                                <p className="font-avenir text-base md:text-lg text-neutral-600 leading-relaxed max-w-md">
                                    {item.body}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
