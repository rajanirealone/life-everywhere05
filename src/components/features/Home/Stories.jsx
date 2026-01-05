"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Stories() {
    const stories = [
        {
            id: 1,
            image: "/images/impact-1.jpg",
            category: "Church Transformation",
            title: "Church Transformation",
            description:
                "How one small group study transformed an entire congregation's approach to evangelism.",
            link: "/stories/church-transformation",
        },
        {
            id: 2,
            image: "/images/impact-2.jpg",
            category: "Youth Revival",
            title: "Youth Revival",
            description:
                "A week-long retreat that sparked a movement among young people in their community.",
            link: "/stories/youth-revival",
        },
        {
            id: 3,
            image: "/images/impact-3.jpg",
            category: "New Church Plant",
            title: "New Church Plant",
            description:
                "From vision to reality: how our modules helped establish a thriving new congregation.",
            link: "/stories/new-church-plant",
        },
    ];

    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-normal text-slate-800 text-center mb-10 lg:mb-12">
                    Stories of Impact
                </h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 4000,
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
                    {stories.map((story) => (
                        <SwiperSlide key={story.id} className="!h-auto !flex">
                            <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 w-full h-full flex flex-col border border-slate-100 group overflow-hidden">
                                {/* Image Area */}
                                <div className="relative h-64 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${story.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#232536]/60  px-6 py-2 rounded-sm z-20">
                                        <span className="text-white text-sm font-medium tracking-wide whitespace-nowrap">
                                            {story.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-[#F6273F] transition-colors duration-300">
                                        {story.title}
                                    </h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                                        {story.description}
                                    </p>
                                    <Link
                                        href={story.link}
                                        className="mt-auto inline-flex items-center text-[#F6273F] font-normal transition-colors group/link"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </section>
    );
}
