import { Calendar, Clock, User, Video, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ServiceSection = () => {
    const services = [
        {
            title: "Weekly Zoom: The Joy of Abundant Life",
            description: "Join us for an inspiring message about living life abundantly through Christ's promises.",
            date: "Sunday, December 8, 2025",
            time: "10:00 AM EST",
            speaker: "Pastor Michael"
        },
        {
            title: "Weekly Zoom: Walking in the Spirit",
            description: "Discover how to walk daily in the power and guidance of the Holy Spirit.",
            date: "Sunday, December 15, 2025",
            time: "10:00 AM EST",
            speaker: "Pastor Sarah"
        }
    ];

    const steps = [
        {
            number: "1",
            title: "Click Join on Zoom",
            description: "Select the service you want to attend and click the Zoom link"
        },
        {
            number: "2",
            title: "Enter the Meeting",
            description: "The link will open Zoom. You may need to download the app first"
        },
        {
            number: "3",
            title: "Enjoy the Service",
            description: "Join us live and participate in chat, worship, and prayer"
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                {/* Upcoming Services Header */}
                <h2 className="text-3xl md:text-4xl text-[#171717] font-medium mb-12">
                    Upcoming Services
                </h2>

                {/* Services List */}
                <div className="space-y-6 mb-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-100 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10">

                                {/* Left Content */}
                                <div className="flex-1 space-y-4">
                                    <span className="inline-block bg-[#EF4444] text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-sm uppercase">
                                        Live Event
                                    </span>

                                    <div className="space-y-2">
                                        <h3 className="text-2xl md:text-[26px] font-medium text-[#171717] leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-[#64748B] text-base leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-gray-50 mt-6 md:mt-8">
                                        <div className="flex items-start gap-3">
                                            <Calendar className="w-5 h-5 text-[#94A3B8] mt-0.5" />
                                            <div>
                                                <span className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase block mb-0.5">DATE</span>
                                                <span className="text-[#171717] text-sm font-medium">{service.date}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Clock className="w-5 h-5 text-[#94A3B8] mt-0.5" />
                                            <div>
                                                <span className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase block mb-0.5">TIME</span>
                                                <span className="text-[#171717] text-sm font-medium">{service.time}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <User className="w-5 h-5 text-[#94A3B8] mt-0.5" />
                                            <div>
                                                <span className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase block mb-0.5">SPEAKER</span>
                                                <span className="text-[#171717] text-sm font-medium">{service.speaker}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Actions */}
                                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0 pt-2">
                                    <Button className="w-full md:w-[180px] bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium h-12 rounded-md shadow-sm transition-all hover:translate-y-[-1px]">
                                        <Video className="w-4 h-4 mr-2" />
                                        Join on Zoom
                                    </Button>
                                    <Button variant="outline" className="w-full md:w-[180px] bg-white border-gray-200 text-[#171717] hover:bg-gray-50 font-medium h-12 rounded-md">
                                        <CalendarPlus className="w-4 h-4 mr-2 text-[#64748B]" />
                                        Add to Calendar
                                    </Button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* How to Join Section */}
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl text-[#171717] font-medium mb-16">
                        How to Join
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Steps */}
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center relative z-10 group">
                                <div className="w-16 h-16 rounded-full bg-[#EF4444] text-white text-2xl font-medium flex items-center justify-center mb-6 shadow-lg shadow-red-100 group-hover:scale-110 transition-transform duration-300">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-medium text-[#171717] mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-[#64748B] text-sm leading-relaxed max-w-[280px]">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
