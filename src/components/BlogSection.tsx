"use client";

import React, { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { cantoFont, avenirFont } from "@/app/fonts";
import { blogPosts } from "@/data/blogPosts";

// --- Helper: Truncate Excerpt ---
function truncateExcerpt(text: string, maxWords: number = 23): string {
    const words = text.trim().split(/\s+/);
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + " .........";
    }
    return text;
}

export default function BlogSection() {
    // Embla for mobile
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    return (
        <section className="bg-white py-16 md:py-24 text-black">
            <div className="mx-auto px-4 md:px-8 max-w-[1200px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-center md:relative mb-12">
                    <h2
                        className="text-[30px] text-center"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        Find inspiration here
                    </h2>
                    <Link
                        href="/blog"
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] border border-accent text-accent px-6 py-2 hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                        View All
                    </Link>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-3 divide-x divide-gray-200">
                    {blogPosts.map((post, idx) => (
                        <div key={post.slug} className={`group flex flex-col h-full ${idx === 0 ? 'pr-8' : idx === 1 ? 'px-8' : 'pl-8'}`}>
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-[3/2] overflow-hidden rounded-sm bg-neutral-100 mb-6">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </Link>

                            <div className="flex flex-col flex-grow">
                                <div className="font-avenir text-xs text-neutral-400 uppercase tracking-widest mb-3">
                                    {post.locationLabel} | {post.date} | {post.category}
                                </div>

                                <Link href={`/blog/${post.slug}`} className="block">
                                    <h3 className="font-canto text-2xl text-neutral-900 leading-tight mb-4 group-hover:underline underline-offset-4 decoration-neutral-300 transition-all">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="font-avenir text-sm text-neutral-600 leading-relaxed mb-6 flex-grow">
                                    {truncateExcerpt(post.excerpt)}
                                </p>

                                <div className="mt-auto flex justify-end">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="font-avenir inline-flex items-center text-xs uppercase tracking-[0.15em] border-b border-transparent hover:border-neutral-900 pb-0.5 transition-colors"
                                    >
                                        Read More
                                        <svg
                                            className="w-3 h-3 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {blogPosts.map((post) => (
                                <div key={post.slug} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                                    <div className="flex flex-col h-full">
                                        <Link href={`/blog/${post.slug}`} className="block overflow-hidden mb-6 relative aspect-[3/2] w-full">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </Link>
                                        <div className={`${avenirFont.className} text-xs text-gray-500 uppercase tracking-widest mb-3`}>
                                            {post.locationLabel} | {post.date} | {post.category}
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="block">
                                            <h3 className={`${cantoFont.className} text-2xl leading-tight mb-3 line-clamp-3`}>
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <p className={`${avenirFont.className} text-sm leading-relaxed text-gray-800 mb-6`}>
                                            {truncateExcerpt(post.excerpt)}
                                        </p>
                                        <div className="mt-auto flex justify-end">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className={`${avenirFont.className} inline-flex items-center text-xs uppercase tracking-[0.15em] border-b border-transparent pb-0.5`}
                                            >
                                                Read More
                                                <svg
                                                    className="w-3 h-3 ml-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={1.5}
                                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                    />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === selectedIndex ? "bg-accent" : "bg-gray-300"
                                    }`}
                                onClick={() => scrollTo(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Mobile View All Button */}
                    <div className="flex justify-center mt-8">
                        <Link
                            href="/blog"
                            className="text-xs uppercase tracking-[0.2em] border border-accent text-accent px-8 py-3 hover:bg-accent hover:text-white transition-colors duration-300"
                        >
                            View All
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
