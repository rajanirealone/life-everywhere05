"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { BookOpen, Users, GraduationCap, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function GetStarted() {
    const cards = [
        {
            id: 1,
            icon: BookOpen,
            title: "Explore Resources",
            description:
                "Access evangelism tools, discipleship materials, and church mobilization guides.",
            link: "/resources",
            linkText: "Learn More",
        },
        {
            id: 2,
            icon: Users,
            title: "Read Stories",
            description:
                "Discover how churches are using Life Everywhere programs to transform their communities.",
            link: "/stories",
            linkText: "View Stories",
        },
        {
            id: 3,
            icon: GraduationCap,
            title: "Join Training",
            description:
                "Get equipped with mentor-led guidance and practical application methods.",
            link: "/training",
            linkText: "Start Training",
        },
    ];

    return (
        <section className="bg-[#EDF2F4] py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-normal text-slate-800 text-center mb-16">
                    Get Started
                </h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="!pb-16"
                >
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <SwiperSlide key={card.id} className="!h-auto !flex">
                                <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col items-center text-center  hover:border-[#F6273F] hover:-translate-y-2 group">
                                    <div className="bg-[#232536] p-4 rounded-full mb-6 group-hover:bg-[#F6273F] transition-colors duration-300">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[#F6273F] transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                                        {card.description}
                                    </p>
                                    <Link
                                        href={card.link}
                                        className="mt-auto inline-flex items-center text-[#F6273F] font-bold transition-colors group/link"
                                    >
                                        {card.linkText}
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>


            </div>
        </section>
    );
}
