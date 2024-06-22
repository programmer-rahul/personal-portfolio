import AboutSection from "./components/about/about-section";
import ContactSection from "./components/contact/contact-section";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomeSection from "./components/home/home-section";
import ProjectsSection from "./components/projects/projects-section";
import SkillsSection from "./components/skills/skills-section";
import SectionSeperatorBorder from "./components/ui/section-seperator-border";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div>
        <div className="px-60">
          <Header />
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
        <Footer />
      </div>
    </main>
  );
}
