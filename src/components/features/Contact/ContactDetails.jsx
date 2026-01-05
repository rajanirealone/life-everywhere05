import Link from "next/link";
import { Mail, Calendar, Video, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactDetails = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Form */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl md:text-2xl font-medium text-[#171717]">Send Us a Message</h2>
                            <p className="text-[#64748B] text-sm md:text-base">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#171717] flex gap-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all text-sm placeholder:text-gray-400 bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#171717] flex gap-1">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all text-sm placeholder:text-gray-400 bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#171717] flex gap-1">
                                    Designation <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your designation"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all text-sm placeholder:text-gray-400 bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#171717] flex gap-1">
                                    Church / Organization <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your church or organization name"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all text-sm placeholder:text-gray-400 bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#171717] flex gap-1">
                                    Preferred Training <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all text-sm bg-white"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#171717]">
                                    Message (Optional)
                                </label>
                                <textarea
                                    placeholder="Tell us more about your needs..."
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-400 transition-all text-sm placeholder:text-gray-400 bg-white resize-none"
                                />
                            </div>

                            <Button className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white py-6 text-base font-medium rounded-md shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" />
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="space-y-12 md:pt-0">
                        <h2 className="text-xl md:text-2xl font-medium text-[#171717]">Contact Information</h2>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-[#EF4444]" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#171717]">Email Us</h3>
                                    <a href="mailto:info@life-seminar.world" className="text-[#EF4444] hover:underline text-sm block">
                                        info@life-seminar.world
                                    </a>
                                </div>
                            </div>

                            {/* Weekly Zoom */}
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                    <Video className="w-5 h-5 text-[#EF4444]" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#171717]">Join Weekly Zoom</h3>
                                    <p className="text-[#64748B] text-sm">Every Sunday at 10:00 AM EST</p>
                                    <Link href="#" className="text-[#EF4444] hover:underline text-sm block mt-1">
                                        Join on Zoom
                                    </Link>
                                </div>
                            </div>

                            {/* Next Service */}
                            <div className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-5 h-5 text-[#EF4444]" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-medium text-[#171717]">Next Service</h3>
                                    <p className="text-[#64748B] text-sm">Sunday, December 15, 2025</p>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="space-y-6 pt-4">
                            <h3 className="text-xl font-medium text-[#171717]">Office Hours</h3>
                            <div className="space-y-4 text-sm text-[#475569]">
                                <div className="flex justify-between items-center max-w-sm border-b border-gray-100 pb-2">
                                    <span>Monday - Friday</span>
                                    <span className="font-medium text-[#171717]">9:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center max-w-sm border-b border-gray-100 pb-2">
                                    <span>Saturday</span>
                                    <span className="font-medium text-[#171717]">10:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center max-w-sm border-b border-gray-100 pb-2">
                                    <span>Sunday</span>
                                    <span className="font-medium text-[#171717]">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
