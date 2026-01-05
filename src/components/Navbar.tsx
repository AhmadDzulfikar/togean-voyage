"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!headerRef.current) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setNavbarHeight(entry.contentRect.height);
            }
        });

        resizeObserver.observe(headerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <>
            {/* Spacer to prevent layout jump when navbar becomes fixed */}
            {isScrolled && <div style={{ height: navbarHeight }} />}

            <header
                ref={headerRef}
                className={`transition-colors duration-300 w-full z-50 ${isScrolled
                    ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm"
                    : "relative bg-transparent"
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
                        <Link href="/">
                            <Image
                                src="/icon.webp"
                                alt="Togean Voyage Logo"
                                width={180}
                                height={180}
                                className={`w-[110px] md:w-[140px] lg:w-[180px] h-auto object-contain transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"
                                    }`}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Book Now Button */}
                    <Link
                        href="/book"
                        className={`inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium tracking-wide transition-all duration-300 font-avenir ${isScrolled
                            ? "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                            : "border border-white text-white hover:bg-white hover:text-gray-800"
                            }`}
                    >
                        {/* WhatsApp Icon */}
                        <svg
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>

                        Book Now

                        <svg
                            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 hidden lg:block"
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
        </>
    );
}
