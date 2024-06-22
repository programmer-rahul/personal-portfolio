import AboutSection from "./components/about/about-section";
import ContactSection from "./components/contact/contact-section";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomeSection from "./components/home/home-section";
import ProjectsSection from "./components/projects/projects-section";
import SkillsSection from "./components/skills/skills-section";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div>
        <div className="px-60">
          <Header />
          <HomeSection />
        </div>
        <AboutSection />
        <div className="px-60">
          <SkillsSection />
          <ProjectsSection />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
