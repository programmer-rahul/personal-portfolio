import AboutSection from "./components/about/about-section";
import ContactSection from "./components/contact/contact-section";
import HomeSection from "./components/home/home-section";
import ProjectsSection from "./components/projects/projects-section";
import SkillsSection from "./components/skills/skills-section";
import SectionSeperatorBorder from "./components/ui/section-seperator-border";

export default function Home() {
  return (
    <div>
      <div className="px-4">
        <HomeSection />
        <SectionSeperatorBorder />
        <AboutSection />
        <SectionSeperatorBorder />
        <SkillsSection />
        <SectionSeperatorBorder />
        <ProjectsSection />
        <SectionSeperatorBorder />
        <ContactSection />
      </div>
    </div>
  );
}
