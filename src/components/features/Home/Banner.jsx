"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HomeBanner() {
    const slides = [
        {
            id: 1,
            image: "/images/banner.jpg",
            quote: '"I have come that they might have life, and have it abundantly."',
            citation: "John 10:10b",
            subheading: "Equipping Churches. Transforming Communities.",
            description:
                "Empowering churches worldwide through evangelism, discipleship, and community impact. Join us in spreading the abundant life to every corner of the world.",
        },

        // Add more slides if needed
    ];

    return (
        <section className="relative w-full bg-[#EDF2F4] h-[calc(100vh-81px)] md:h-[calc(100vh-92px)]">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + ' bg-white opacity-50 hover:opacity-100"></span>';
                    },
                }}
                effect={"fade"}
                modules={[Autoplay, Pagination, EffectFade]}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Background Image / Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center z-0"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                <div className="absolute inset-0 bg-[#2B2D42]/75 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D42] via-transparent to-transparent opacity-75" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pt-15 slide-content">
                                <blockquote className="max-w-4xl mx-auto mb-4 opacity-0">
                                    <p className="text-3xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight">
                                        {slide.quote}
                                    </p>
                                </blockquote>

                                <cite className="block text-gray-300 text-base md:text-lg mb-12 not-italic font-medium opacity-0">
                                    {slide.citation}
                                </cite>

                                <h3 className="text-xl md:text-2xl text-white font-medium mb-4 opacity-0">
                                    {slide.subheading}
                                </h3>

                                <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed opacity-90 opacity-0">
                                    {slide.description}
                                </p>

                                <div className="opacity-0">
                                    <Button asChild className="relative overflow-hidden bg-[#F6273F] text-white font-bold tracking-wider px-8 h-12 rounded-md group hover:bg-[#D61F33] transition-colors duration-300">
                                        <Link href="/contact">
                                            <span className="relative z-10">Connect with Us</span>
                                            <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination Styles Override & Animations */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #F6273F;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-slide-active .slide-content > * {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .swiper-slide-active .slide-content > *:nth-child(1) { animation-delay: 0.2s; }
        .swiper-slide-active .slide-content > *:nth-child(2) { animation-delay: 0.4s; }
        .swiper-slide-active .slide-content > *:nth-child(3) { animation-delay: 0.6s; }
        .swiper-slide-active .slide-content > *:nth-child(4) { animation-delay: 0.8s; }
        .swiper-slide-active .slide-content > *:nth-child(5) { animation-delay: 1.0s; }
      `}</style>
        </section>
    );
}
