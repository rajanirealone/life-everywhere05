import { Button } from "@/components/ui/button";

export const Subscribe = () => {
    return (
        <section className="py-20 md:py-24 bg-[#262626]">
            <div className="container mx-auto px-4 md:px-6 md:max-w-[60%] text-center">
                <h2 className="text-3xl md:text-4xl text-white font-medium mb-6">
                    Never Miss a Service
                </h2>

                <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10  mx-auto">
                    Subscribe to get reminders for upcoming Weekly Zoom services and receive recordings of past messages.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:flex-1 px-4 h-[48px] min-h-[48px] rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 bg-white text-[#171717] placeholder:text-gray-400"
                        required
                    />
                    <Button
                        type="submit"
                        className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-medium h-[48px] min-h-[48px] text-base rounded-md transition-all sm:w-[140px] w-full px-0 flex items-center justify-center"
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    );
};
