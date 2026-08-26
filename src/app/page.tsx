import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import DesignServices from "@/components/sections/DesignServices";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Featured Projects Grid */}
        <Projects />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Design Services */}
        <DesignServices />
      </main>

      {/* Footer Branding & Socials */}
      <Footer />
    </div>
  );
}
