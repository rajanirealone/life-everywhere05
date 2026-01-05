import { Heading } from "@/components/layout/Heading";

export const FAQ = () => {
    const faqs = [
        {
            question: "How do I get started with LiFe Seminars?",
            answer: "Simply fill out the contact form above indicating your interest. Our team will reach out to discuss your church's needs and the best training options for you."
        },
        {
            question: "What training formats are available?",
            answer: "We offer both online and in-person training options. Online training is conducted via Zoom and includes interactive sessions. In-person training can be arranged for churches, conferences, or regional gatherings."
        },
        {
            question: "Can I access resources without training?",
            answer: "All resources are available through personal engagement. We believe in the importance of proper training and context to ensure effective implementation of LiFe principles in your ministry."
        },
        {
            question: "Do you offer training in languages other than English?",
            answer: "Yes! We have trained leaders in multiple languages across 25+ countries. Let us know your language needs and we'll work to accommodate."
        }
    ];

    return (
        <section className="py-10 md:py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <Heading
                    as="h2"
                    className="text-center text-xl md:text-2xl text-[#171717] mb-8 md:mb-12 font-normal tracking-tight"
                >
                    Frequently Asked Questions
                </Heading>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                        >
                            <h3 className="text-lg font-medium text-[#171717] mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-[#64748B] text-sm md:text-base leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
