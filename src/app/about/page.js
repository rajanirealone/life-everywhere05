import React from "react";
import AboutBanner from "@/components/features/About/Banner";
import AboutDetails from "@/components/features/About/Details";
import AboutPhilosophy from "@/components/features/About/Philosophy";
import AboutImpact from "@/components/features/About/Impact";

export default function AboutUs() {
    return (
        <>
            <AboutBanner />
            <AboutDetails />
            <AboutPhilosophy />
            <AboutImpact />
        </>
    );
}
