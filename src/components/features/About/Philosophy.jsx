"use client";

import React from "react";
import { Heading } from "@/components/layout/Heading";

export default function AboutPhilosophy() {
    const cards = [
        {
            title: "Relational",
            description: "Built on genuine relationships and authentic care"
        },
        {
            title: "Adaptable",
            description: "Flexible tools that work across cultures and contexts"
        },
        {
            title: "Practical",
            description: "Designed for everyday believers, not just gifted evangelists"
        }
    ];

    return (
        <section className="py-8 bg-white">
            <div className="container mx-auto px-5 md:px-12">
                <div className="text-center mb-8 max-w-5xl mx-auto">
                    <Heading size="heading2" as="h2" className="sm:!text-2xl md:!text-4xl lg:!text-[3rem] text-[#171717] mb-6 font-normal after:hidden tracking-tight">
                        Our Philosophy
                    </Heading>
                    <p className="text-[#475569] text-sm md:text-base lg:text-[18px] leading-[1.8] max-w-4xl mx-auto font-light">
                        LiFe Evangelism is built on the conviction that evangelism is not an isolated event but an ongoing process of discipleship. We equip believers to accompany seekers through every stage of their spiritual journey, using tools adapted to diverse cultural contexts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-[1200px] mx-auto">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-[8px] border border-[#E5E5E5] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-lg md:text-[1.5rem] font-medium text-[#171717] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[#64748B] leading-[1.8] text-sm md:text-base">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
