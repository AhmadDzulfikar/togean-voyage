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
                <source src="/vidfootage.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="hero__overlay" />

            {/* Bottom Content */}
            <div className="absolute z-10 left-6 bottom-10 sm:left-12 sm:bottom-16 lg:left-24 lg:bottom-20 pointer-events-none">
                <p className="font-canto text-white text-2xl leading-snug sm:text-3xl lg:text-5xl lg:leading-snug max-w-[24ch] sm:max-w-[35ch] lg:max-w-[45ch] drop-shadow-sm pointer-events-auto">
                    Some places you visit. Others, you feel, by reconnecting with
                    yourself, others, and the world around you.
                </p>
            </div>

            {/* Sentinel for IntersectionObserver */}
            <div id="hero-sentinel" className="absolute bottom-0 left-0 w-full h-px pointer-events-none" />
        </section>
    );
}

