import Link from "next/link";
import { Button } from "@/components/ui/button";

export const HomeCTA = () => {
    return (
        <section className="bg-[#232536] text-white">
            <div className="container mx-auto flex flex-col items-center text-center py-16 md:py-24 border-b border-white/5 mx-4 md:mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6">
                    Ready to Transform Your Church?
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
                    Join hundreds of churches worldwide that have discovered the power of
                    abundant life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button
                        asChild
                        className="relative overflow-hidden bg-[#F6273F] text-white font-medium px-8 h-12 rounded-md min-w-[160px] group hover:bg-[#D61F33] transition-colors duration-300"
                    >
                        <Link href="/get-started">
                            <span className="relative z-10">Get Started Today</span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="relative overflow-hidden bg-transparent border-gray-600 text-white font-medium px-8 h-12 rounded-md min-w-[160px] group hover:border-[#F6273F] hover:text-[#F6273F] transition-colors duration-300"
                    >
                        <Link href="/resources">
                            <span className="relative z-10">View Resources</span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-md transition-all duration-300 group-hover:scale-100 group-hover:bg-white/5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
