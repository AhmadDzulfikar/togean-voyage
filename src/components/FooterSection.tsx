"use client";

import Image from "next/image";
import Link from "next/link";
import { cantoFont, avenirFont } from "@/app/fonts";

export default function FooterSection() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-16 md:pt-28 md:pb-24">
            <div className="mx-auto px-6 md:px-12 max-w-[1280px]">
                {/* Top Row: Logo & Newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-8 border-b border-white/10 pb-16 mb-16">
                    {/* Logo */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
                        <Image
                            src="/icon.webp"
                            alt="Togean Voyages Logo"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:max-w-md">
                        <p className={`${avenirFont.className} text-sm md:text-base text-white/80 mb-6`}>
                            Enter your email to receive the Togean Voyages newsletter.
                        </p>
                        <form className="flex w-full border-b border-white/30 focus-within:border-white transition-colors duration-300">
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className={`${avenirFont.className} w-full bg-transparent py-3 text-white placeholder-white/40 focus:outline-none text-base`}
                                required
                            />
                            <button
                                type="submit"
                                className={`${avenirFont.className} shrink-0 py-3 pl-4 text-xs uppercase tracking-[0.15em] text-white/90 hover:text-white transition-colors`}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Row: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* Column A: Brand Info */}
                    <div className="md:col-span-4 lg:col-span-5">
                        <h3 className={`${cantoFont.className} text-2xl mb-6 text-white`}>
                            Togean Voyages
                        </h3>
                        <p className={`${avenirFont.className} text-sm leading-relaxed text-white/70 max-w-sm`}>
                            Experience the untouched beauty of the Togean Islands. We curate slow travel journeys that connect you with nature, culture, and the serenity of the sea.
                        </p>
                    </div>

                    {/* Column B: Infos */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h3 className={`${cantoFont.className} text-2xl mb-6 text-white`}>
                            Infos
                        </h3>
                        <ul className={`${avenirFont.className} space-y-3 text-sm text-white/70`}>
                            <li>Graha STR, Jl. Ampera Raya No.11B, Jakarta</li>
                            <li>Jl. Soekarno Hatta, No 13A, Manggarai Barat.</li>
                            <li>PT Build Creative Realm</li>
                        </ul>
                    </div>

                    {/* Column C: Contact Us */}
                    <div className="md:col-span-4 lg:col-span-4">
                        <h3 className={`${cantoFont.className} text-2xl mb-6 text-white`}>
                            Contact Us
                        </h3>
                        <ul className={`${avenirFont.className} space-y-3 text-sm text-white/70`}>
                            <li>
                                <a href="tel:+6285282296450" className="hover:text-white transition-colors">
                                    +62 852-8229-6450
                                </a>
                            </li>
                            <li>
                                <a href="tel:+6285282296450" className="hover:text-white transition-colors">
                                    +62 852-8229-6450
                                </a>
                            </li>
                            <li>
                                <a href="tel:+6285282296450" className="hover:text-white transition-colors">
                                    +62 852-8229-6450
                                </a>
                            </li>
                            <li>
                                <a href="tel:+6285282296450" className="hover:text-white transition-colors">
                                    +62 852-8229-6450
                                </a>
                            </li>
                            <li className="pt-2">
                                <a href="mailto:support@komodocruises.com" className="hover:text-white transition-colors">
                                    support@komodocruises.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright / Extra footer bottom if needed, sticking to design request layout mostly but checking visual balance. 
            The prompt didn't ask for a copyright row specifically, but usually there is one. 
            I'll stick strictly to the prompt requirements for now (3 cols) to avoid clutter.
        */}
            </div>
        </footer>
    );
}
