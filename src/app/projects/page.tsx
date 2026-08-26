import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsGallery from "@/components/sections/ProjectsGallery";

export const metadata: Metadata = {
  title: "Selected Projects | Nelson Oluwole",
  description:
    "A curated selection of product design work across mobile apps, websites, dashboards, and UX case studies — built with clarity and conversion in mind.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <ProjectsGallery />
      </main>

      <Footer />
    </div>
  );
}
