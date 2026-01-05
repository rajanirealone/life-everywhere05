import { ContactBanner } from "@/components/features/Contact/Banner";
import { ContactDetails } from "@/components/features/Contact/ContactDetails";
import { FAQ } from "@/components/features/Contact/FAQ";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactBanner />
      <ContactDetails />
      <FAQ />
    </main>
  );
}
