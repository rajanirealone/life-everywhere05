import { ZoomBanner } from "@/components/features/Zoom/Banner";
import { ServiceSection } from "@/components/features/Zoom/ServiceSection";
import { PastServices } from "@/components/features/Zoom/PastServices";
import { Subscribe } from "@/components/features/Zoom/Subscribe";

export default function ZoomPage() {
    return (
        <main className="min-h-screen bg-white">
            <ZoomBanner />
            <ServiceSection />
            <PastServices />
            <Subscribe />
        </main>
    );
}
