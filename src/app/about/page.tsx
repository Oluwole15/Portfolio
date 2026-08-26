import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/AboutHero";
import AboutGallery from "@/components/sections/AboutGallery";
import AboutStory from "@/components/sections/AboutStory";

export const metadata: Metadata = {
  title: "About Me | Nelson Oluwole",
  description:
    "Founder and senior product designer focused on creating clear, thoughtful digital experiences that solve real problems.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <AboutHero />
        <AboutGallery />
        <AboutStory />
      </main>

      <Footer />
    </div>
  );
}
