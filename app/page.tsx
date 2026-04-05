import ScrollyCanvas from "@/components/ScrollyCanvas";
import HeroStats from "@/components/HeroStats";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-[#050a14]">
      {/* ── 1. Scroll-linked canvas sequence (500vh) ── */}
      <ScrollyCanvas />

      {/* ── 2. All static sections below ── */}
      <HeroStats />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
