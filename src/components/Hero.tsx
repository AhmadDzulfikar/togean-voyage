"use client";

import Image from "next/image";

export default function Hero() {
    return (
        <section className="hero relative">
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

            {/* Bottom Content */}
            <div className="hero__content">
                <p className="hero__quote font-canto">
                    Some places you visit. Others, you feel, by reconnecting with
                    yourself, others, and the world around you.
                </p>
            </div>

            {/* Sentinel for IntersectionObserver */}
            <div id="hero-sentinel" className="absolute bottom-0 left-0 w-full h-px pointer-events-none" />
        </section>
    );
}

