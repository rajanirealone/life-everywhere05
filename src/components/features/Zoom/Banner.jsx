import { Video, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ZoomBanner = () => {
    return (
        <div className="flex flex-col w-full min-h-[calc(100vh-81px)] md:min-h-[calc(100vh-92px)]">
            {/* Top Section - Dark Grey */}
            <div className="bg-[#383838] flex-1 flex flex-col items-center justify-center py-12 px-4 text-center">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <Video className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />

                    <h1 className="text-white text-4xl md:text-5xl font-normal mb-6 tracking-tight">
                        Weekly Zoom
                    </h1>

                    <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light mb-12">
                        Join us every week for live online services where we explore abundant life in Christ together.
                    </p>

                    <p className="text-white/60 text-sm">
                        Watch online from anywhere in the world • All services streamed live via Zoom
                    </p>
                </div>
            </div>

            {/* Bottom Section - Red Brand Color */}
            <div className="bg-[#EF4444] py-8 md:py-10 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">

                        {/* Left Content */}
                        <div className="text-white space-y-3">
                            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                                Next Live Service
                            </span>

                            <h2 className="text-2xl md:text-3xl font-medium leading-tight">
                                Weekly Zoom: The Joy of Abundant Life
                            </h2>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm md:text-base font-light pt-1">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Sunday, December 8, 2025</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>10:00 AM EST</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Button */}
                        <div className="flex-shrink-0 w-full md:w-auto">
                            <Button className="w-full md:w-[196px] h-[56px] bg-white text-[#EF4444] hover:bg-gray-50 font-medium text-base rounded-md gap-2 shadow-lg transition-all hover:scale-105 flex items-center justify-center">
                                <Video className="w-5 h-5" />
                                Join on Zoom
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
