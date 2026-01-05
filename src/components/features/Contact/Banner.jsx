import Link from "next/link";
import { Heading } from "@/components/layout/Heading";
import { Button } from "@/components/ui/button";

export const ContactBanner = () => {
    return (
        <section className="bg-[#383838] py-20 md:py-32 flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-3xl mx-auto space-y-6">
                <Heading
                    as="h1"
                    className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-normal tracking-tight"
                >
                    Get in Touch
                </Heading>

                <p className="text-white/90 text-sm md:text-base lg:text-[18px] leading-relaxed max-w-2xl mx-auto font-light">
                    We'd love to hear from you. Whether you're interested in training, resources, or partnership opportunities, reach out and let's start a conversation.
                </p>
            </div>
        </section>
    );
};
