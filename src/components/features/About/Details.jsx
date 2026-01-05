"use client";

import React from "react";
import Link from "next/link";
import { Heading, SubTitle } from "@/components/layout/Heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutDetails() {
    return (
        <div className="flex flex-col w-full bg-[#EFF6F9]">

            {/* Introduction Section */}
            <section className="py-15 container mx-auto px-5 md:px-12 lg:px-20">
                <div className="max-w-5xl mx-auto flex flex-col gap-4 text-[#475569] leading-[1.8] md:leading-[1.9] text-sm md:text-base lg:text-[18px]">
                    <h3 className="text-[20px] md:text-[24px] font-normal text-[#171717] italic mb-2 tracking-tight leading-snug">
                        "How can we help everyday Christians lead their friends to Jesus?"
                    </h3>
                    <p>
                        That question changed everything for me in 2001. I was serving as a pastor for evangelism when our church leader gave me an unusual assignment: create an evangelism course that cell group members could actually use. Not another big event. Not a program requiring special gifts. Something practical—a way for ordinary believers to walk alongside their neighbors, coworkers, and friends on the journey to faith.
                    </p>
                    <p>
                        I had no idea that simple request would launch a movement spanning 25 countries and transform how thousands of churches approach evangelism.
                    </p>

                    {/* It Started With Two Farmers */}
                    <div className="mt-8">
                        <Heading size="heading3" as="h3" className="!mb-4 text-[#171717] !text-[20px] md:!text-[24px] font-normal tracking-tight">
                            It Started with Two Farmers
                        </Heading>
                        <p className="mb-4">
                            Let me tell you about Hans and Elisabeth. They were hardworking farmers who would never have attended a traditional evangelistic crusade. Church wasn't their thing. Big events with preachers? Even less so.
                        </p>
                        <p className="mb-4">
                            But their neighbor Ivan was different. For six years, he simply built a genuine friendship with them. He invited them to discussion groups where they could ask honest questions without judgment. No pressure. No scripts. Just authentic relationship.
                        </p>
                        <p className="mb-4">
                            When Hans and Elisabeth finally encountered Jesus, something beautiful happened—they didn't want to keep it to themselves. They came to me with an idea: "What if we invited our friends to explore faith the same way we did with us?"
                        </p>
                        <p>
                            Together, we designed a five-evening seminar around three questions that working people always ask: How can we become happy? Why does God allow suffering? What is the meaning of life?
                        </p>
                    </div>

                    {/* Crucial Decision Card */}
                    <div className="bg-white p-6 rounded-[8px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E5E5E5] my-8 font-light text-[#334155] leading-relaxed">
                        <p className="mb-6 last:mb-0">
                            We made one crucial decision early on: the setting mattered as much as the content. We met in welcoming spaces with food, drinks, and an atmosphere more like a dinner party than a church service. Cell members invited us simply by letting their friends know, then invited them to explore faith together in a safe, comfortable environment.
                        </p>
                        <p>
                            No one was more surprised than us when the results came in. In our first ten years, we held 150 seminars. Out of 700 guests who attended, 415 decided to follow Jesus. That's a 60% decision rate—not because we were gifted evangelists, but because ordinary believers learned to accompany their friends on the journey.
                        </p>
                    </div>

                    {/* The Discovery... */}
                    <div className="mt-8">
                        <Heading size="heading3" as="h3" className="!mb-6 text-[#171717] !text-[20px] md:!text-[24px] font-normal tracking-tight">
                            The Discovery That Changed Everything
                        </Heading>
                        <p className="mb-4">
                            As news spread and we began training churches across Switzerland, we stumbled onto something profound. We noticed that some seminars led to more decisions than others—but it wasn't because of better speakers or better venues.
                        </p>
                        <p className="mb-4">
                            The difference was <span className="italic font-medium text-[#1E293B]">the accompanying person.</span>
                        </p>
                        <p className="mb-4">
                            When believers truly walked alongside their guests—building relationship before, during, and after the seminars, answering questions over coffee, caring for their relationship—those guests opened up to the Gospel in remarkable ways. We weren't just doing evangelism. We were making disciples who made disciples.
                        </p>
                        <p>
                            This realization transformed our entire approach. Using the Engel Scale, we began training Christians to see evangelism not as a single event, but as a commitment across every stage of a person's spiritual journey—from awareness to decision to discipleship.
                        </p>
                    </div>

                    {/* From Switzerland to the World */}
                    <div className="mt-8">
                        <Heading size="heading3" as="h3" className="!mb-6 text-[#171717] !text-[20px] md:!text-[24px] font-normal tracking-tight">
                            From Switzerland to the World
                        </Heading>
                        <p className="mb-4">
                            By the time we'd trained representatives in 10 countries, another truth became crystal clear: what works in Zurich doesn't necessarily work in Cairo or Mumbai or the UK. But the principles? Those were universal.
                        </p>
                        <p className="mb-4">
                            Pastors began adapting our materials in ways we never imagined:
                        </p>

                        <div className="flex flex-col gap-4 md:gap-6 mb-8 sm:pl-6">
                            <p><span className="font-bold text-[#171717]">In Poland:</span> priests started spiritual conversations with family neighbors by asking, "What does it take for a happy life?"—one of our core seminar questions.</p>
                            <p><span className="font-bold text-[#171717]">In Singapore:</span> discovered our topics worked beautifully for pre-evangelism conversations, calming down to evangelize through counseling.</p>
                            <p><span className="font-bold text-[#171717]">In Madagascar:</span> preached our theology over five consecutive Sundays. The transformation was so dramatic that schools in Siberia heard about it and requested training.</p>
                            <p><span className="font-bold text-[#171717]">In Highschools:</span> peer groups now meet regularly to discuss Life topics. Spontaneous visitors join these gatherings and encounter Jesus in living rooms and under trees.</p>
                        </div>

                        <p>
                            This beautiful flexibility inspired us to develop the LiFe Toolbox—a collection of proven training units you can adapt to your unique context and church culture.
                        </p>
                    </div>

                    {/* Quote Card */}
                    <div className="bg-white p-6 rounded-[8px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E5E5E5] my-8 leading-relaxed">
                        <p className="mb-6 text-[#334155] last:mb-0">
                            Some moments take your breath away. I'll never forget standing before more than 400 pastors at events in Angola and Egypt, watching lean forward to learn these principles. Or seeing farmers and businessmen, young and old, lead their first friend to Christ. Or receiving emails from places we've never been, where pastors discovered our materials online and used them to ignite evangelism movements in their communities.
                        </p>
                        <p className="font-medium text-[#171717] text-lg md:text-xl italic">
                            The Holy Spirit gives believers incredible creativity when they understand the principles of relational evangelism.
                        </p>
                    </div>

                    {/* What We've Learned */}
                    <div className="mt-8">
                        <Heading size="heading3" as="h3" className="!mb-6 text-[#171717] !text-[20px] md:!text-[24px] font-normal tracking-tight">
                            What We've Learned After 20+ Years
                        </Heading>
                        <p>
                            After more than two decades of equipping churches across dozens of countries, our philosophy can be distilled to one simple truth:
                        </p>
                        <h2 className="text-[20px] md:text-[24px] font-serif italic text-[#171717] font-normal leading-tight mb-10 text-center px-4 md:px-10">
                            "Successful evangelism flows from making disciples who accompany others on their journey to Jesus."
                        </h2>
                        <p className="mb-6">
                            Think about the Good Samaritan. He didn't just preach to the wounded man lying on the road. He bound up his wounds, carried him to an inn, stayed with him, paid for his care, and promised to return. He <span className="italic font-medium text-[#171717]">accompanied</span> him to safety.
                        </p>
                        <p className="mb-6">
                            That's exactly what we're called to do with spiritually seeking people—walk alongside them with patience, persistence, and genuine love through every step of that journey.
                        </p>
                        <p>
                            This isn't about having all the answers or possessing special evangelistic gifts. It's about ordinary Christians willing to be faithful companions on the most important journey anyone can take.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="pb-15 container md:max-w-[75%] mx-auto px-4 md:px-8">
                <div className="max-w-6xl mx-auto bg-[#1E293B] rounded-[8px] p-6 text-center text-white relative overflow-hidden shadow-2xl">
                    <h3 className="text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal leading-relaxed md:leading-tight mb-6 md:mb-10 relative z-10 max-w-5xl mx-auto px-2">
                        It's what keeps us going. Farmers like Hans and Elisabeth leading their neighbors to Christ. Pastors in Tanzania seeing spontaneous visitors encounter Jesus in neighborhood groups. Church members in India starting spiritual conversations they never thought they could have.
                    </h3>
                    <p className="text-white/90 font-medium text-base md:text-xl lg:text-2xl mb-6 md:mb-12 max-w-4xl mx-auto relative z-10 leading-snug px-2">
                        The question isn't whether your congregation can do this. It's whether you're ready to equip them.
                    </p>
                    <div className="relative z-10">
                        <Button asChild className="bg-[#F6273F] w-full md:w-auto hover:bg-[#D61F33] text-white px-8 h-[55px] text-[16px] rounded-[8px] font-normal transition-all shadow-[0_10px_30px_rgba(246,39,63,0.3)] hover:shadow-[0_20px_40px_rgba(246,39,63,0.4)] hover:-translate-y-1 whitespace-nowrap">
                            <Link href="/impact" className="flex items-center justify-center w-full h-full">
                                Start Your Journey With LiFe
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
