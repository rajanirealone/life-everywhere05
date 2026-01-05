import Link from "next/link";
import { Video, ArrowRight } from "lucide-react";

export const PastServices = () => {
    const recordings = [
        {
            title: "Weekly Zoom: Evangelism in Action",
            date: "Sunday, November 24, 2025",
            speaker: "Rev. Thomas"
        },
        {
            title: "Weekly Zoom: Building Community",
            date: "Sunday, November 17, 2025",
            speaker: "Pastor Maria"
        }
    ];

    return (
        <section className="py-20 md:py-24 bg-[#EDF2F4]">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <h2 className="text-3xl md:text-4xl text-[#171717] font-medium mb-12">
                    Past Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {recordings.map((rec, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Thumbnail Placeholder */}
                            <div className="bg-[#4A4A4A] aspect-video flex items-center justify-center group cursor-pointer relative">
                                <Video className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-medium text-[#171717] mb-3 leading-snug">
                                    {rec.title}
                                </h3>

                                <p className="text-[#64748B] text-sm mb-6">
                                    {rec.date} <span className="mx-2">•</span> {rec.speaker}
                                </p>

                                <Link
                                    href="#"
                                    className="inline-flex items-center text-[#EF4444] font-medium hover:text-[#DC2626] transition-colors group"
                                >
                                    Watch Recording
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
