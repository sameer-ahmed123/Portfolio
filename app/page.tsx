import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SkyBackground from "./components/SkyBackground";
import Navbar from "./components/Navbar";

export default function FullStackPortfolio() {
  return (
    <>
      <SkyBackground />
      <Navbar />
      <main className="relative min-h-screen text-slate-900">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
