import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactUs from "@/components/sections/ContactUs";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Contact | Nelson Oluwole",
  description:
    "Reach out to Nelson Oluwole for freelance or fulltime opportunities — send a message or connect directly on Telegram.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <ContactUs />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
