"use client";

import React from "react";
import { Heading } from "@/components/layout/Heading";

export default function AboutImpact() {
    const countries = [
        "Switzerland", "Egypt",
        "India", "Tanzania",
        "Angola", "Albania",
        "Kenya", "Uganda"
    ];


    const leftCol = countries.slice(0, 4);
    const rightCol = countries.slice(4, 8);


    return (
        <section className="py-8 bg-[#EFF6F9]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <Heading size="heading2" as="h2" className="text-2xl md:text-4xl lg:text-[3rem] text-[#171717] font-normal after:hidden">
                        Impact & Global Reach
                    </Heading>
                </div>

                <div className="max-w-4xl mx-auto px-4 md:px-12">
                    <div className="mb-8">
                        <h3 className="text-[20px] md:text-[24px] text-[#171717] font-normal mb-6">
                            Where We've Served
                        </h3>
                        <p className="text-[#475569] text-sm md:text-base lg:text-[18px] leading-[1.8]">
                            LiFe Seminars has equipped churches and trained leaders in over 25 countries across multiple continents, including:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 max-w-3xl">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-5">
                            {leftCol.map((country) => (
                                <div key={country} className="flex items-center gap-4 text-[#334155] text-sm md:text-base lg:text-[18px] font-medium">
                                    <span className="w-2 h-2 bg-[#F6273F] rounded-full shrink-0" />
                                    {country}
                                </div>
                            ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-5">
                            {rightCol.map((country) => (
                                <div key={country} className="flex items-center gap-4 text-[#334155] text-sm md:text-base lg:text-[18px] font-medium">
                                    <span className="w-2 h-2 bg-[#F6273F] rounded-full shrink-0" />
                                    {country}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
