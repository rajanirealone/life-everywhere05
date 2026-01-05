import HomeBanner from "@/components/features/Home/Banner";
import OurVision from "@/components/features/Home/OurVision";
import GetStarted from "@/components/features/Home/GetStarted";
import Stories from "@/components/features/Home/Stories";
import { HomeCTA } from "@/components/features/Home/CTA";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OurVision />
      <GetStarted />
      <Stories />
      <HomeCTA />
    </>
  );
}
