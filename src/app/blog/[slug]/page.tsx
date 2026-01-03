"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/components/BlogSection";
import { cantoFont, avenirFont } from "@/app/fonts";
import Navbar from "@/components/Navbar";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <article className="min-h-screen pt-24 pb-16 bg-white text-black">
                <div className="mx-auto px-4 md:px-8 max-w-[800px]">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className={`${avenirFont.className} text-sm text-gray-500 uppercase tracking-widest mb-4`}>
                            {post.locationLabel} | {post.date} | {post.category}
                        </div>
                        <h1 className={`${cantoFont.className} text-4xl md:text-6xl leading-tight mb-8`}>
                            {post.title}
                        </h1>
                    </div>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-video mb-12 overflow-hidden bg-gray-100">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className={`${avenirFont.className} text-lg leading-relaxed text-gray-800 space-y-6`}>
                        {/* 
                Since this is a static array demo, we don't have full body content. 
                We will repeat the excerpt and add some dummy text to simulate a full article 
                matching the requested "editorial" feel.
             */}
                        <p className="font-bold text-xl">{post.excerpt}</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <div className="my-8 relative h-[300px] w-full">
                            <Image
                                src={post.image}
                                alt="Detail view"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <p className="absolute bottom-2 left-2 text-white text-xs bg-black/50 px-2 py-1">Additional photography</p>
                        </div>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>

                    {/* Back Link */}
                    <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                        <Link
                            href="/"
                            className={`${avenirFont.className} uppercase tracking-widest text-sm border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors`}
                        >
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
}
