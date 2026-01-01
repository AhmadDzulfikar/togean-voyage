"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            {/* Background Video */}
            <video
                className="hero__video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/vidfootage.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="hero__overlay" />

            {/* Top Bar */}
            <header className="hero__topbar">
                {/* Hamburger Menu */}
                <button className="hero__hamburger" aria-label="Open menu">
                    <span className="hero__hamburger-line" />
                    <span className="hero__hamburger-line" />
                    <span className="hero__hamburger-line" />
                </button>

                {/* Logo */}
                <div className="hero__logo-container">
                    <Image
                        src="/icon.webp"
                        alt="Togean Voyage Logo"
                        width={60}
                        height={60}
                        className="hero__logo"
                        priority
                    />
                </div>

                {/* Book Now Button */}
                <Link href="/book" className="hero__book-btn font-avenir">
                    Book Now
                    <svg
                        className="hero__book-icon"
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
            </header>

            {/* Bottom Content */}
            <div className="hero__content">
                <p className="hero__quote font-canto">
                    Some places you visit. Others, you feel, by reconnecting with
                    yourself, others, and the world around you.
                </p>
            </div>
        </section>
    );
}
