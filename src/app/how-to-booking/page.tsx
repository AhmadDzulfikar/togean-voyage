"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { CONTACT_INFO } from "@/config/contact";

export default function HowToBookingPage() {
    return (
        <div className="bg-white min-h-screen text-neutral-900 flex flex-col font-avenir">
            <Navbar />

            <main className="flex-grow w-full pt-28 md:pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-[1200px] mx-auto">

                    {/* 1. Top Area: Back Button */}
                    <div className="mb-12 md:mb-16">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-500 hover:text-[#CB9275] transition-colors duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                    </div>

                    {/* 2. Header */}
                    <div className="max-w-3xl mb-16 md:mb-20">
                        <span className="block font-avenir text-sm md:text-base uppercase tracking-[0.2em] text-[#CB9275] mb-4">
                            Fast, simple, and personal
                        </span>
                        <h1 className="font-canto text-5xl md:text-7xl text-neutral-900 mb-6 leading-tight">
                            How to book
                        </h1>
                        <p className="font-avenir text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl">
                            We believe in direct connection. All bookings are confirmed personally via WhatsApp or email to ensure your itinerary is perfectly tailored to your needs.
                        </p>
                    </div>

                    {/* 3. Two Primary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24">
                        {/* WhatsApp Card */}
                        <div className="border border-neutral-200 rounded-2xl p-8 md:p-10 flex flex-col items-start hover:border-[#CB9275]/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="w-12 h-12 mb-6 text-[#CB9275]">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </div>
                            <h2 className="font-canto text-3xl text-neutral-900 mb-3">Book via WhatsApp</h2>
                            <p className="font-avenir text-neutral-600 mb-8 leading-relaxed flex-grow">
                                The fastest way to secure your spot. We usually reply within an hour during business days. Send us a quick message to check availability.
                            </p>
                            <a
                                href={CONTACT_INFO.whatsapp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-[#CB9275] text-white font-avenir uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-[#B97F63] transition-colors duration-300"
                            >
                                Message on WhatsApp
                            </a>
                        </div>

                        {/* Email Card */}
                        <div className="border border-neutral-200 rounded-2xl p-8 md:p-10 flex flex-col items-start hover:border-[#CB9275]/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="w-12 h-12 mb-6 text-[#CB9275]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>
                            <h2 className="font-canto text-3xl text-neutral-900 mb-3">Book via Email</h2>
                            <p className="font-avenir text-neutral-600 mb-8 leading-relaxed flex-grow">
                                Prefer a detailed itinerary in your inbox? Send us your requirements and we will craft a custom proposal for you.
                            </p>
                            <a
                                href={CONTACT_INFO.email.url}
                                className="inline-block w-full text-center bg-[#CB9275] text-white font-avenir uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-[#B97F63] transition-colors duration-300"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>

                    {/* 4. What to Send */}
                    <div className="mb-20 md:mb-24 max-w-3xl">
                        <h3 className="font-canto text-3xl md:text-4xl text-neutral-900 mb-8">
                            Send these details
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Your preferred dates",
                                "Group size",
                                "Interests (snorkeling, village visits, wildlife, etc.)",
                                "Dietary needs",
                                "Pickup point (if any)",
                                "Budget range (optional)",
                                "Any special requests"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-neutral-600 font-avenir text-lg">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#CB9275] flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 5. Payment Section */}
                    <div className="mb-20 md:mb-24 bg-neutral-50 rounded-2xl p-8 md:p-12">
                        <h3 className="font-canto text-3xl md:text-4xl text-neutral-900 mb-6">
                            Payment options
                        </h3>
                        <p className="font-avenir text-lg text-neutral-600 leading-relaxed mb-6 max-w-2xl">
                            To secure your booking, we typically require a deposit with the remaining balance due closer to your trip date. We accept Bank Transfer and Debit Cards.
                        </p>
                        <p className="font-avenir text-sm text-neutral-500 italic">
                            Exact payment details and deadlines will be shared in your booking confirmation.
                        </p>
                    </div>

                    {/* 6. FAQ (Native Details) */}
                    <div className="mb-24 max-w-3xl">
                        <h3 className="font-canto text-3xl md:text-4xl text-neutral-900 mb-8">
                            Common Questions
                        </h3>
                        <div className="space-y-4">
                            <details className="group border-b border-neutral-200 pb-4">
                                <summary className="list-none flex justify-between items-center cursor-pointer py-2 font-avenir text-lg md:text-xl text-neutral-800 font-medium hover:text-[#CB9275] transition-colors">
                                    How long does confirmation take?
                                    <span className="block group-open:rotate-180 transition-transform duration-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 font-avenir text-neutral-600 leading-relaxed">
                                    We aim to reply to all inquiries within 24 hours. For WhatsApp messages during business hours, you can expect a response within an hour.
                                </p>
                            </details>

                            <details className="group border-b border-neutral-200 pb-4">
                                <summary className="list-none flex justify-between items-center cursor-pointer py-2 font-avenir text-lg md:text-xl text-neutral-800 font-medium hover:text-[#CB9275] transition-colors">
                                    Can I change my dates?
                                    <span className="block group-open:rotate-180 transition-transform duration-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 font-avenir text-neutral-600 leading-relaxed">
                                    Yes, we are flexible. Date changes are subject to availability. Please let us know as soon as possible if you need to reschedule.
                                </p>
                            </details>

                            <details className="group border-b border-neutral-200 pb-4">
                                <summary className="list-none flex justify-between items-center cursor-pointer py-2 font-avenir text-lg md:text-xl text-neutral-800 font-medium hover:text-[#CB9275] transition-colors">
                                    Do you accommodate dietary restrictions?
                                    <span className="block group-open:rotate-180 transition-transform duration-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 font-avenir text-neutral-600 leading-relaxed">
                                    Absolutely. Whether vegetarian, vegan, or allergies, we ensure your meals are safe and delicious. Just mention it when you book.
                                </p>
                            </details>

                            <details className="group border-b border-neutral-200 pb-4">
                                <summary className="list-none flex justify-between items-center cursor-pointer py-2 font-avenir text-lg md:text-xl text-neutral-800 font-medium hover:text-[#CB9275] transition-colors">
                                    Is it private or shared?
                                    <span className="block group-open:rotate-180 transition-transform duration-300">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                    </span>
                                </summary>
                                <p className="mt-4 font-avenir text-neutral-600 leading-relaxed">
                                    We offer both options. Most of our itineraries are private for a personalized experience, but we can also arrange shared trips on request.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>

                {/* 7. Final CTA Strip */}
                <div className="w-full bg-[#CB9275]/10 rounded-2xl py-12 md:py-16 text-center px-6">
                    <h2 className="font-canto text-4xl md:text-5xl text-neutral-900 mb-8">
                        Ready when you are
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                        <a
                            href={CONTACT_INFO.whatsapp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#CB9275] text-white font-avenir uppercase tracking-widest text-sm py-3 px-8 rounded-full hover:bg-[#B97F63] transition-colors duration-300"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            WhatsApp
                        </a>
                        <a
                            href={CONTACT_INFO.email.url}
                            className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 border border-neutral-200 font-avenir uppercase tracking-widest text-sm py-3 px-8 rounded-full hover:bg-neutral-50 hover:border-[#CB9275] transition-colors duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
                            Email Us
                        </a>
                    </div>
                </div>

            </main>

            <FooterSection />
        </div>
    );
}
