import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";
import SkillsSection from "@/components/skillsSection";

export const metadata: Metadata = {
  title: "Kanwar Singh | Software Developer",
  description:
    "Portfolio of Kanwar Singh, Software Developer Engineer with expertise in frontend, backend, and blockchain development",
};

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Cursor />
      <Navbar />
      <Hero />
      <About />

      {/* Skills Section */}
      <SkillsSection />

      <Experience />

      {/* Projects Section */}
      <Projects />

      <Education />

      <Footer />
    </main>
  );
}
