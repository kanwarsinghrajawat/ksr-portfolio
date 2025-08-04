import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Cursor from "@/components/cursor";
import SkillsSection from "@/components/skillsSection";
import ContactSection from "@/components/contactSection";
import BookCall from "@/components/BookCall";
import StickyScrollCards from "@/components/experience";

export const metadata: Metadata = {
  title: "Kanwar Singh | Software Developer",
  description:
    "Portfolio of Kanwar Singh, Software Developer Engineer with expertise in frontend, backend, and blockchain development",
};

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Cursor />
      <Hero />
      <BookCall />
      <About />

      {/* Skills Section */}
      <SkillsSection />

      {/* <Experience /> */}
      <main className="bg-black min-h-screen">
        <StickyScrollCards />
      </main>

      {/* Projects Section */}
      <Projects />

      <Education />
      <ContactSection />
      <Footer />
    </main>
  );
}
