"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Add background when scrolled past hero section
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="flex items-center justify-between px-5 md:px-10 py-4 md:py-6">
                {/* Hamburger Menu */}
                <button
                    className="flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-2 w-10 h-10"
                    aria-label="Open menu"
                >
                    <span
                        className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"
                            }`}
                    />
                </button>

                {/* Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <Image
                        src="/icon.webp"
                        alt="Togean Voyage Logo"
                        width={60}
                        height={60}
                        className={`w-12 h-12 md:w-15 md:h-15 object-contain transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"
                            }`}
                        priority
                    />
                </div>

                {/* Book Now Button */}
                <Link
                    href="/book"
                    className={`inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 font-avenir ${isScrolled
                            ? "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                            : "border border-white text-white hover:bg-white hover:text-gray-800"
                        }`}
                >
                    Book Now
                    <svg
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </header>
    );
}
