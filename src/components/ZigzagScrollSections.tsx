"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export type ZigzagItem = {
    id: string;
    title: string;
    body: string;
    imageSrc: string;
    imageAlt: string;
};

type ZigzagScrollSectionsProps = {
    items: ZigzagItem[];
};

export default function ZigzagScrollSections({ items }: ZigzagScrollSectionsProps) {
    // Refs for elements
    const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Mutable state for animation (no re-renders)
    const currentTranslateY = useRef<number[]>(new Array(items.length).fill(0));
    const targetTranslateY = useRef<number[]>(new Array(items.length).fill(0));

    // React state for mobile check
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            // Reset transforms on mobile
            textRefs.current.forEach(el => {
                if (el) el.style.transform = "none";
            });
            return;
        }

        let animationFrameId: number;

        // Measurement cache
        const measurements = items.map(() => ({
            top: 0,
            imageHeight: 0,
            textHeight: 0,
            maxTranslate: 0,
            startTrigger: 0,
            endTrigger: 0
        }));

        const measureBlocks = () => {
            blockRefs.current.forEach((block, index) => {
                if (!block) return;
                const imageEl = imageRefs.current[index];
                const textEl = textRefs.current[index];

                if (imageEl && textEl) {
                    const rect = block.getBoundingClientRect();
                    // We need absolute document position
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const top = rect.top + scrollTop;

                    const imgH = imageEl.offsetHeight;
                    const txtH = textEl.offsetHeight;

                    // Clamping logic: max movement is remaining space in the image column
                    const maxTrans = Math.max(0, imgH - txtH);

                    measurements[index] = {
                        top,
                        imageHeight: imgH,
                        textHeight: txtH,
                        maxTranslate: maxTrans,
                        // Start moving when block is partially measured into viewport
                        // Trigger earlier (when top is just entering viewport) to catch movement?
                        // User wants: "Text starts moving ONLY when user has truly reached that block"
                        // Let's say trigger starts when block top is at viewport bottom (entering)
                        // But to prevent "moving before entering", we clamp strictly.
                        // However, we want the parallax to map the full passage.
                        // Let's create an active scroll range:
                        // From: [Block Top enters Viewport Bottom] -> startTrigger
                        // To: [Block Bottom leaves Viewport Top] (or text reaches bottom) -> endTrigger

                        // User Requirement: "Text translateY must be clamped... moves smoothly down/up based on scroll direction... maxTranslate = imageHeight - textHeight"

                        // Let's define the scroll range strictly based on the block's presence.
                        // It feels best if text stays top-aligned until we start scrolling INTO the block.
                        // startTrigger = top - (window.innerHeight * 0.5) // Adjust to taste, maybe 0.3
                        // Let's try matching the scroll distance to the maxTranslate with a factor

                        // Simple linear mapping:
                        // Map [Scroll enters block] to [Scroll leaves block] -> [0 to maxTranslate]

                        startTrigger: top - window.innerHeight + (imgH * 0.2), // Start slightly after it enters
                        endTrigger: top + imgH // End when image bottom is roughly at top
                    };
                }
            });
        };

        // Initial measurement
        measureBlocks();

        // Re-measure on resize
        const resizeObserver = new ResizeObserver(measureBlocks);
        blockRefs.current.forEach(b => b && resizeObserver.observe(b));

        const loop = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;

            items.forEach((_, i) => {
                const m = measurements[i];
                const textEl = textRefs.current[i];
                if (!textEl || m.maxTranslate <= 0) return;

                // Calculate progress
                // If scrollY < m.startTrigger -> progress 0
                // If scrollY > m.endTrigger -> progress 1
                let progress = (scrollY - m.startTrigger) / (m.endTrigger - m.startTrigger);
                progress = Math.max(0, Math.min(1, progress));

                targetTranslateY.current[i] = progress * m.maxTranslate;

                // Lerp
                const diff = targetTranslateY.current[i] - currentTranslateY.current[i];
                if (Math.abs(diff) > 0.05) {
                    currentTranslateY.current[i] += diff * 0.12; // Lerp factor
                } else {
                    currentTranslateY.current[i] = targetTranslateY.current[i];
                }

                textEl.style.transform = `translate3d(0, ${currentTranslateY.current[i]}px, 0)`;
            });

            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
        };
    }, [isMobile, items]);

    return (
        <div className="flex flex-col gap-24 md:gap-32 lg:gap-40 py-24 md:py-32 overflow-hidden">
            {items.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={item.id}
                        ref={el => { blockRefs.current[index] = el }}
                        className={`flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 relative max-w-7xl mx-auto px-6 w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Image Column */}
                        <div
                            ref={el => { imageRefs.current[index] = el }}
                            className="w-full md:w-1/2 relative h-[300px] md:h-[600px] shrink-0"
                        >
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

                        {/* Text Column */}
                        <div className="w-full md:w-1/2 flex items-start">
                            {/* Floating Text Block */}
                            <div
                                ref={el => { textRefs.current[index] = el }}
                                className="w-full will-change-transform"
                                style={{ transform: 'translate3d(0,0,0)' }} // Initial state
                            >
                                <h2 className="font-canto text-4xl md:text-5xl lg:text-7xl text-neutral-900 mb-6 leading-tight">
                                    {item.title}
                                </h2>
                                <p className="font-avenir text-base md:text-xl text-neutral-600 leading-relaxed max-w-md">
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
