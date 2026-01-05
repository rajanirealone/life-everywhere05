"use client";

import React from "react";
import Image from "next/image";
import { Heading } from "@/components/layout/Heading";

export default function AboutBanner() {
    return (
        <section className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/images/about.jpg"
                    alt="About Us Banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#2B2D42] opacity-70 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <Heading
                    size="heading1"
                    as="h1"
                    className="!text-white !mb-2 drop-shadow-md"
                >
                    Our Story
                </Heading>

                <h2 className="text-white text-lg md:text-xl lg:text-2xl font-medium tracking-wide drop-shadow-sm max-w-4xl mx-auto">
                    A Movement Driven by the Spirit & Everyday People
                </h2>
            </div>
        </section>
    );
}
